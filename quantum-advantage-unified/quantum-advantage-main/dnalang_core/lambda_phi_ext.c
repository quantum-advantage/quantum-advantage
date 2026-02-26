/* 
 * Lambda Phi Conservation - C Extension Module
 * ============================================
 * High-performance implementation of quantum operators for DNA-Lang
 * 
 * Author: DNA-Lang Project
 * Based on: lambda_phi_v3_operators.py
 * 
 * This module implements:
 * - Hermitian operators (Λ̂, Φ̂)
 * - Lambda Phi invariant computation
 * - Expectation values for quantum states
 * - Fast matrix operations with NumPy C API
 */

#define PY_SSIZE_T_CLEAN
#define NPY_NO_DEPRECATED_API NPY_1_7_API_VERSION
#include <Python.h>
#include <numpy/arrayobject.h>
#include <complex.h>
#include <math.h>

/* Constants from NCPhysics */
#define LAMBDA_PHI 137.035999084
#define PHI_THRESHOLD 0.618033988749895  // Golden ratio conjugate
#define THETA_LOCK 1.618033988749895      // Golden ratio

/* Helper: Check if matrix is Hermitian (A = A†) */
static int is_hermitian(PyArrayObject *matrix, double tol) {
    if (PyArray_NDIM(matrix) != 2) {
        return 0;
    }
    
    npy_intp *dims = PyArray_DIMS(matrix);
    if (dims[0] != dims[1]) {
        return 0;  // Must be square
    }
    
    int n = dims[0];
    double complex *data = (double complex *)PyArray_DATA(matrix);
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            double complex a_ij = data[i * n + j];
            double complex a_ji_conj = conj(data[j * n + i]);
            
            if (cabs(a_ij - a_ji_conj) > tol) {
                return 0;
            }
        }
    }
    
    return 1;
}

/* Lambda operator: Λ̂ = |1⟩⟨1| = (I + Z)/2 */
static PyObject *
create_lambda_operator(PyObject *self, PyObject *args) {
    int n_qubits = 1;
    
    if (!PyArg_ParseTuple(args, "|i", &n_qubits)) {
        return NULL;
    }
    
    if (n_qubits != 1) {
        PyErr_SetString(PyExc_NotImplementedError, 
                       "Multi-qubit Lambda operator not yet implemented");
        return NULL;
    }
    
    // For single qubit: [[1, 0], [0, 0]]
    npy_intp dims[2] = {2, 2};
    PyArrayObject *matrix = (PyArrayObject *)PyArray_ZEROS(2, dims, NPY_COMPLEX128, 0);
    
    if (matrix == NULL) {
        return NULL;
    }
    
    double complex *data = (double complex *)PyArray_DATA(matrix);
    data[0] = 1.0 + 0.0*I;  // [0, 0] element
    data[1] = 0.0 + 0.0*I;  // [0, 1] element
    data[2] = 0.0 + 0.0*I;  // [1, 0] element
    data[3] = 0.0 + 0.0*I;  // [1, 1] element
    
    return (PyObject *)matrix;
}

/* Phi operator: Φ̂ = -Z·log(|Z|) (information content) */
static PyObject *
create_phi_operator(PyObject *self, PyObject *args) {
    int n_qubits = 1;
    
    if (!PyArg_ParseTuple(args, "|i", &n_qubits)) {
        return NULL;
    }
    
    if (n_qubits != 1) {
        PyErr_SetString(PyExc_NotImplementedError,
                       "Multi-qubit Phi operator not yet implemented");
        return NULL;
    }
    
    // For single qubit: [[1, 0], [0, -1]] (Pauli-Z)
    npy_intp dims[2] = {2, 2};
    PyArrayObject *matrix = (PyArrayObject *)PyArray_ZEROS(2, dims, NPY_COMPLEX128, 0);
    
    if (matrix == NULL) {
        return NULL;
    }
    
    double complex *data = (double complex *)PyArray_DATA(matrix);
    data[0] = 1.0 + 0.0*I;   // [0, 0]
    data[1] = 0.0 + 0.0*I;   // [0, 1]
    data[2] = 0.0 + 0.0*I;   // [1, 0]
    data[3] = -1.0 + 0.0*I;  // [1, 1]
    
    return (PyObject *)matrix;
}

/* Compute expectation value: ⟨ψ|Â|ψ⟩ */
static PyObject *
expectation_value(PyObject *self, PyObject *args) {
    PyArrayObject *operator, *state;
    
    if (!PyArg_ParseTuple(args, "O!O!", &PyArray_Type, &operator,
                          &PyArray_Type, &state)) {
        return NULL;
    }
    
    // Verify dimensions
    if (PyArray_NDIM(operator) != 2 || PyArray_NDIM(state) != 1) {
        PyErr_SetString(PyExc_ValueError, 
                       "Operator must be 2D, state must be 1D");
        return NULL;
    }
    
    npy_intp *op_dims = PyArray_DIMS(operator);
    npy_intp *state_dims = PyArray_DIMS(state);
    
    if (op_dims[0] != op_dims[1] || op_dims[0] != state_dims[0]) {
        PyErr_SetString(PyExc_ValueError, "Dimension mismatch");
        return NULL;
    }
    
    int n = op_dims[0];
    double complex *A = (double complex *)PyArray_DATA(operator);
    double complex *psi = (double complex *)PyArray_DATA(state);
    
    // Verify state is normalized
    double norm = 0.0;
    for (int i = 0; i < n; i++) {
        norm += cabs(psi[i]) * cabs(psi[i]);
    }
    
    if (fabs(norm - 1.0) > 1e-10) {
        PyErr_SetString(PyExc_ValueError, "State must be normalized");
        return NULL;
    }
    
    // Compute A|ψ⟩
    double complex *A_psi = malloc(n * sizeof(double complex));
    if (A_psi == NULL) {
        return PyErr_NoMemory();
    }
    
    for (int i = 0; i < n; i++) {
        A_psi[i] = 0.0;
        for (int j = 0; j < n; j++) {
            A_psi[i] += A[i * n + j] * psi[j];
        }
    }
    
    // Compute ⟨ψ|A|ψ⟩ = ψ†·(A·ψ)
    double complex expectation = 0.0;
    for (int i = 0; i < n; i++) {
        expectation += conj(psi[i]) * A_psi[i];
    }
    
    free(A_psi);
    
    // Return real part (expectation of Hermitian operator is real)
    return PyFloat_FromDouble(creal(expectation));
}

/* Compute Lambda Phi product: Λ·Φ */
static PyObject *
lambda_phi_product(PyObject *self, PyObject *args) {
    PyArrayObject *state;
    
    if (!PyArg_ParseTuple(args, "O!", &PyArray_Type, &state)) {
        return NULL;
    }
    
    // Create Lambda and Phi operators
    PyObject *lambda_op = create_lambda_operator(self, PyTuple_New(0));
    PyObject *phi_op = create_phi_operator(self, PyTuple_New(0));
    
    if (lambda_op == NULL || phi_op == NULL) {
        Py_XDECREF(lambda_op);
        Py_XDECREF(phi_op);
        return NULL;
    }
    
    // Compute ⟨Λ̂⟩
    PyObject *lambda_args = Py_BuildValue("(OO)", lambda_op, state);
    PyObject *lambda_val = expectation_value(self, lambda_args);
    Py_DECREF(lambda_args);
    
    // Compute ⟨Φ̂⟩
    PyObject *phi_args = Py_BuildValue("(OO)", phi_op, state);
    PyObject *phi_val = expectation_value(self, phi_args);
    Py_DECREF(phi_args);
    
    Py_DECREF(lambda_op);
    Py_DECREF(phi_op);
    
    if (lambda_val == NULL || phi_val == NULL) {
        Py_XDECREF(lambda_val);
        Py_XDECREF(phi_val);
        return NULL;
    }
    
    // Return Λ·Φ
    double lambda = PyFloat_AsDouble(lambda_val);
    double phi = PyFloat_AsDouble(phi_val);
    Py_DECREF(lambda_val);
    Py_DECREF(phi_val);
    
    return PyFloat_FromDouble(lambda * phi);
}

/* Module method definitions */
static PyMethodDef LambdaPhiMethods[] = {
    {"create_lambda_operator", create_lambda_operator, METH_VARARGS,
     "Create the Lambda (coherence) operator Λ̂ = |1⟩⟨1|"},
    {"create_phi_operator", create_phi_operator, METH_VARARGS,
     "Create the Phi (information) operator Φ̂ ≈ Z"},
    {"expectation_value", expectation_value, METH_VARARGS,
     "Compute expectation value ⟨ψ|Â|ψ⟩ for operator A and state ψ"},
    {"lambda_phi_product", lambda_phi_product, METH_VARARGS,
     "Compute the Lambda Phi invariant Λ·Φ for a quantum state"},
    {NULL, NULL, 0, NULL}
};

/* Module definition */
static struct PyModuleDef lambda_phi_module = {
    PyModuleDef_HEAD_INIT,
    "lambda_phi_ext",
    "High-performance Lambda Phi conservation operators for DNA-Lang",
    -1,
    LambdaPhiMethods
};

/* Module initialization */
PyMODINIT_FUNC
PyInit_lambda_phi_ext(void) {
    import_array();  // Initialize NumPy C API
    
    PyObject *module = PyModule_Create(&lambda_phi_module);
    if (module == NULL) {
        return NULL;
    }
    
    // Add constants
    PyModule_AddObject(module, "LAMBDA_PHI", PyFloat_FromDouble(LAMBDA_PHI));
    PyModule_AddObject(module, "PHI_THRESHOLD", PyFloat_FromDouble(PHI_THRESHOLD));
    PyModule_AddObject(module, "THETA_LOCK", PyFloat_FromDouble(THETA_LOCK));
    
    return module;
}
