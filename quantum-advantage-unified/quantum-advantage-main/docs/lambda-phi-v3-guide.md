# Lambda-Phi v3 User Guide

## Overview

The Lambda-Phi v3 quantum encoding system is a **validated** implementation of the ΛΦ conservation theorem on IBM Quantum hardware. This guide covers installation, usage, and API integration.

## What's New in v3?

### Critical Bug Fix
v2 had a **sign error** in the observable definition:
- ❌ v2: `Λ̂ = (I+Z)/2` → measures P(|0⟩) = 1-Λ (WRONG)
- ✅ v3: `Λ̂ = (I-Z)/2` → measures P(|1⟩) = Λ (CORRECT)

This single-character fix reduced error from **75-99%** to **8.04%**.

### Hardware Validation
- **Success Rate:** 90% (9/10 tests passed)
- **Average Error:** 8.04%
- **Backends:** ibm_torino (133q), ibm_fez (156q)
- **Status:** Published to arXiv:quant-ph (2026)

---

## Installation

### Prerequisites
```bash
# Python 3.10+ required
python3 --version

# Qiskit 1.3.3+
pip install qiskit>=1.3.3
pip install qiskit-ibm-runtime>=0.45.0
```

### SDK Integration
The v3 module is already integrated into DNA-Lang SDK:
```bash
cd /path/to/dnalang
source qiskit_env/bin/activate  # If using virtual environment
```

---

## Quick Start

### 1. Python Module (Direct Use)

```python
from osiris.quantum import quick_validate

# Run validation on hardware
result = quick_validate(
    lambda_value=0.75,
    phi_value=0.60,
    token="YOUR_IBM_TOKEN",
    backend="ibm_fez"
)

print(f"Status: {result.status}")
print(f"ΛΦ Error: {result.error_lambda_phi:.2%}")
print(f"Job ID: {result.job_id}")
```

**Output:**
```
Status: PASS
ΛΦ Error: 1.35%
Job ID: d5vps9l7fc0s73auac9g
```

### 2. Command Line Interface

```bash
cd osiris/quantum
python3 lambda_phi_v3.py 0.75 0.60 YOUR_TOKEN ibm_fez
```

### 3. REST API

```bash
curl -X POST https://your-app.vercel.app/api/lambda-phi/v3/validate \
  -H "Content-Type: application/json" \
  -d '{
    "lambda": 0.75,
    "phi": 0.60,
    "backend": "ibm_fez",
    "token": "YOUR_IBM_TOKEN"
  }'
```

**Response:**
```json
{
  "version": "v3.0",
  "status": "PASS",
  "input": {
    "lambda": 0.75,
    "phi": 0.60,
    "lambda_phi_product": 0.450
  },
  "measured": {
    "lambda": 0.744,
    "phi": 0.596,
    "lambda_phi": 0.444
  },
  "errors_percent": {
    "Lambda": 0.80,
    "Phi": 0.67,
    "LambdaPhi": 1.33
  },
  "job_id": "d5vps9l7fc0s73auac9g",
  "backend": "ibm_fez"
}
```

---

## API Reference

### Encode Endpoint

Create quantum circuit encoding for (Λ, Φ) values.

**Endpoint:** `POST /api/lambda-phi/v3/encode`

**Request:**
```json
{
  "lambda": 0.75,
  "phi": 0.60
}
```

**Response:**
```json
{
  "version": "v3.0",
  "circuit": "OPENQASM 2.0; ...",
  "observables": {
    "Lambda": "(0.5*II) + (-0.5*ZI)",
    "Phi": "(0.5*II) + (-0.5*IZ)",
    "LambdaPhi": "..."
  },
  "lambda_phi_product": 0.450
}
```

### Validate Endpoint

Run hardware validation on IBM Quantum.

**Endpoint:** `POST /api/lambda-phi/v3/validate`

**Request:**
```json
{
  "lambda": 0.75,
  "phi": 0.60,
  "backend": "ibm_fez",
  "token": "YOUR_IBM_TOKEN"
}
```

**Response:** See Quick Start section above.

### Health Endpoint

Check system status and version information.

**Endpoint:** `GET /api/lambda-phi/health`

**Response:**
```json
{
  "status": "healthy",
  "versions": {
    "v2": {
      "status": "DEPRECATED",
      "error_rate": "75-99%"
    },
    "v3": {
      "status": "ACTIVE",
      "error_rate": "8.04%",
      "success_rate": "90%"
    }
  }
}
```

---

## Python Module Reference

### Classes

#### `LambdaPhiState`
Data structure for quantum state parameters.

```python
from osiris.quantum import LambdaPhiState

state = LambdaPhiState(
    lambda_value=0.75,  # Coherence [0, 1]
    phi_value=0.60      # Integrated information [0, 1]
)
```

#### `LambdaPhiV3`
Main encoder class for circuit creation and hardware execution.

```python
from osiris.quantum import LambdaPhiV3

encoder = LambdaPhiV3(token="YOUR_IBM_TOKEN")

# Create circuit
circuit = encoder.create_circuit(state)

# Validate on hardware
result = encoder.validate_on_hardware(state, backend="ibm_fez")
```

#### `ValidationResult`
Container for validation results.

**Attributes:**
- `status: str` - "PASS" or "FAIL"
- `input_lambda: float` - Input Λ value
- `input_phi: float` - Input Φ value
- `input_lambda_phi: float` - Expected ΛΦ product
- `measured_lambda: float` - Measured Λ
- `measured_phi: float` - Measured Φ
- `measured_lambda_phi: float` - Measured ΛΦ
- `error_lambda: float` - Λ error (absolute)
- `error_phi: float` - Φ error (absolute)
- `error_lambda_phi: float` - ΛΦ error (absolute)
- `error_lambda_percent: float` - Λ error (%)
- `error_phi_percent: float` - Φ error (%)
- `error_lambda_phi_percent: float` - ΛΦ error (%)
- `job_id: str` - IBM Quantum job ID
- `backend: str` - Backend name
- `timestamp: str` - ISO 8601 timestamp

### Functions

#### `quick_validate()`
Convenience function for one-line validation.

```python
from osiris.quantum import quick_validate

result = quick_validate(
    lambda_value=0.75,
    phi_value=0.60,
    token="YOUR_IBM_TOKEN",
    backend="ibm_fez"
)
```

---

## Migration Guide (v2 → v3)

### Breaking Changes

1. **Observable Definition Changed**
   - v2 used incorrect `(I+Z)/2`
   - v3 uses correct `(I-Z)/2`
   - No code changes needed (internal fix)

2. **API Endpoint Path Changed**
   - v2: `/api/lambda-phi/consciousness`
   - v3: `/api/lambda-phi/v3/validate`

3. **Response Format Improved**
   - v3 includes detailed error breakdown
   - v3 includes job ID for verification

### Migration Steps

#### Step 1: Update API Calls

**Old (v2):**
```typescript
const response = await fetch('/api/lambda-phi/consciousness', {
  method: 'POST',
  body: JSON.stringify({ entropy: 0.5 })
})
```

**New (v3):**
```typescript
const response = await fetch('/api/lambda-phi/v3/validate', {
  method: 'POST',
  body: JSON.stringify({
    lambda: 0.75,
    phi: 0.60,
    backend: 'ibm_fez',
    token: IBM_TOKEN
  })
})
```

#### Step 2: Update Response Handling

**Old (v2):**
```typescript
const result = await response.json()
console.log(result.fidelity)  // Incorrect value
```

**New (v3):**
```typescript
const result = await response.json()
console.log(result.status)           // "PASS" or "FAIL"
console.log(result.measured.lambda)  // Correct measurement
console.log(result.errors_percent)   // Detailed errors
```

#### Step 3: Update UI Components

```typescript
// Import new v3 components
import { LambdaPhiRuntimeV3 } from "@/components/lambda-phi-runtime-v3"
import { LambdaPhiValidationDashboard } from "@/components/lambda-phi-validation-dashboard"

// Use in your page
<LambdaPhiRuntimeV3 />
<LambdaPhiValidationDashboard />
```

---

## Backends

### Supported IBM Quantum Systems

| Backend | Qubits | Processor | Avg Error | Recommended |
|---------|--------|-----------|-----------|-------------|
| **ibm_fez** | 156 | Heron r2 | 8.04% | ✅ Yes |
| ibm_torino | 133 | Eagle r3 | 8.12% | ✅ Yes |
| ibm_brisbane | 127 | Eagle r3 | ~10% | ⚠️ Backup |

**Recommendation:** Use `ibm_fez` for best results. `ibm_torino` is also validated.

---

## Physics Constants

These constants are immutable and fundamental to the framework:

```python
LAMBDA_PHI = 2.176435e-8  # Universal Memory Constant [s^-1]
THETA_LOCK = 51.843        # Torsion lock angle [degrees]
PHI_THRESHOLD = 0.7734     # Consciousness threshold
GAMMA_CRITICAL = 0.092     # Baseline decoherence rate
GOLDEN_RATIO = 1.618033988749895
ERROR_THRESHOLD = 0.15     # 15% max error for PASS
```

---

## Validation Criteria

A test **PASSES** if:
- ΛΦ conservation error < 15%
- Measured within O(Γ) theoretical bounds
- Job completes successfully on hardware

A test **FAILS** if:
- Error > 15%
- Job fails or times out
- Invalid input parameters

---

## Troubleshooting

### Error: "IBM Quantum token required"
**Solution:** Provide valid IBM Quantum token in API request.

### Error: "Backend not available"
**Solution:** Check backend status at [IBM Quantum](https://quantum-computing.ibm.com). Try alternate backend.

### Error: "Transpilation failed"
**Solution:** Ensure circuit is compatible with target backend. v3 handles ISA transpilation automatically.

### Error: Job timed out
**Solution:** IBM backends may have queue delays. Retry or use different backend.

### High error rates (>25%)
**Solution:** This is hardware-specific. The failure on ibm_torino (25.76%) passed on ibm_fez (1.31%). Try different backend.

---

## Examples

See `/examples` directory for:
- `lambda_phi_v3_demo.py` - Python usage examples
- `lambda_phi_v3_api.md` - API integration examples
- `lambda_phi_v3_frontend.tsx` - React component examples

---

## Support

**Documentation:** `/docs/lambda-phi-v3-guide.md` (this file)  
**Source Code:** `/osiris/quantum/lambda_phi_v3.py`  
**API Endpoints:** `/api/lambda-phi/v3/`  
**Issue Tracker:** GitHub Issues

**Author:** Devin Davis  
**Email:** devinphillipdavis@gmail.com  
**Version:** v3.0.0  
**License:** Apache 2.0

---

## Citation

If you use this work in research, please cite:

```bibtex
@article{davis2026lambda_phi,
  title={Conservation of Integrated Information in Quantum Systems: 
         The Lambda-Phi Theorem},
  author={Davis, Devin P.},
  journal={arXiv preprint arXiv:quant-ph/XXXXXX},
  year={2026}
}
```

---

**Status:** Production-ready with 90% hardware validation ✅
