"""
Test Lambda Phi C Extension
============================
Compare C extension performance with Python implementation
"""

import pytest
import numpy as np
import sys
import time

# Import both versions
try:
    import dnalang.lambda_phi_ext as lambda_phi_c
    HAS_C_EXTENSION = True
except ImportError:
    HAS_C_EXTENSION = False
    print("Warning: C extension not built. Run: python setup.py build_ext --inplace")

# Import Python version for comparison
sys.path.insert(0, '/home/devinpd/Desktop')
from lambda_phi_v3_operators import (
    create_lambda_operator as create_lambda_py,
    create_phi_operator as create_phi_py,
    QuantumObservable
)


class TestLambdaPhiExtension:
    """Test suite for Lambda Phi C extension"""
    
    def test_c_extension_loads(self):
        """Verify C extension can be imported"""
        assert HAS_C_EXTENSION, "C extension not available"
        assert hasattr(lambda_phi_c, 'create_lambda_operator')
        assert hasattr(lambda_phi_c, 'create_phi_operator')
        assert hasattr(lambda_phi_c, 'expectation_value')
        assert hasattr(lambda_phi_c, 'lambda_phi_product')
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_lambda_operator_correctness(self):
        """Lambda operator matches Python implementation"""
        # Python version
        lambda_py = create_lambda_py()
        
        # C version
        lambda_c = lambda_phi_c.create_lambda_operator()
        
        # Should be identical
        np.testing.assert_array_almost_equal(lambda_c, lambda_py.matrix)
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_phi_operator_correctness(self):
        """Phi operator matches Python implementation"""
        # Python version
        phi_py = create_phi_operator()
        
        # C version
        phi_c = lambda_phi_c.create_phi_operator()
        
        # Should be identical (Pauli-Z)
        expected = np.array([[1, 0], [0, -1]], dtype=complex)
        np.testing.assert_array_almost_equal(phi_c, expected)
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_expectation_value_ground_state(self):
        """Expectation value for ground state |0⟩"""
        lambda_op = lambda_phi_c.create_lambda_operator()
        ground_state = np.array([1.0, 0.0], dtype=complex)
        
        # ⟨0|Λ̂|0⟩ = ⟨0||1⟩⟨1||0⟩ = 0
        expectation = lambda_phi_c.expectation_value(lambda_op, ground_state)
        assert abs(expectation - 0.0) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_expectation_value_excited_state(self):
        """Expectation value for excited state |1⟩"""
        lambda_op = lambda_phi_c.create_lambda_operator()
        excited_state = np.array([0.0, 1.0], dtype=complex)
        
        # ⟨1|Λ̂|1⟩ = ⟨1||1⟩⟨1||1⟩ = 1
        expectation = lambda_phi_c.expectation_value(lambda_op, excited_state)
        assert abs(expectation - 1.0) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_expectation_value_superposition(self):
        """Expectation value for superposition |+⟩ = (|0⟩ + |1⟩)/√2"""
        lambda_op = lambda_phi_c.create_lambda_operator()
        plus_state = np.array([1.0, 1.0], dtype=complex) / np.sqrt(2)
        
        # ⟨+|Λ̂|+⟩ = 0.5
        expectation = lambda_phi_c.expectation_value(lambda_op, plus_state)
        assert abs(expectation - 0.5) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_lambda_phi_product_ground_state(self):
        """Lambda Phi product for ground state"""
        ground_state = np.array([1.0, 0.0], dtype=complex)
        
        product = lambda_phi_c.lambda_phi_product(ground_state)
        
        # Λ = 0, Φ = 1, product = 0
        assert abs(product - 0.0) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_lambda_phi_product_excited_state(self):
        """Lambda Phi product for excited state"""
        excited_state = np.array([0.0, 1.0], dtype=complex)
        
        product = lambda_phi_c.lambda_phi_product(excited_state)
        
        # Λ = 1, Φ = -1, product = -1
        assert abs(product - (-1.0)) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_constants(self):
        """Module constants are correct"""
        assert abs(lambda_phi_c.LAMBDA_PHI - 137.035999084) < 1e-6
        assert abs(lambda_phi_c.PHI_THRESHOLD - 0.618033988749895) < 1e-10
        assert abs(lambda_phi_c.THETA_LOCK - 1.618033988749895) < 1e-10
    
    @pytest.mark.skipif(not HAS_C_EXTENSION, reason="C extension not built")
    def test_performance_benchmark(self):
        """C extension is faster than Python"""
        state = np.array([1.0, 1.0], dtype=complex) / np.sqrt(2)
        n_iterations = 10000
        
        # Time C extension
        start = time.time()
        for _ in range(n_iterations):
            lambda_phi_c.lambda_phi_product(state)
        c_time = time.time() - start
        
        # Time Python version
        lambda_py = create_lambda_py()
        phi_py = create_phi_py()
        
        start = time.time()
        for _ in range(n_iterations):
            lambda_val = lambda_py.expectation(state)
            phi_val = phi_py.expectation(state)
            product = lambda_val * phi_val
        py_time = time.time() - start
        
        speedup = py_time / c_time
        print(f"\nPerformance: C={c_time:.4f}s, Python={py_time:.4f}s, Speedup={speedup:.1f}x")
        
        # C should be faster
        assert speedup > 1.0, f"C extension not faster! Speedup: {speedup:.2f}x"


if __name__ == '__main__':
    pytest.main([__file__, '-v', '-s'])
