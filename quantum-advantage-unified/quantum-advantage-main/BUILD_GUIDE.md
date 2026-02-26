# DNA-Lang C Extension Build & Test Guide

## Quick Start

### 1. Build the C Extension

```bash
cd /home/devinpd/Desktop/dnalang
make build
```

This compiles `dnalang_core/lambda_phi_ext.c` into a Python extension module.

### 2. Run Tests

```bash
# Run all tests
make test

# Run just unit tests
make test-unit

# Quick validation
make quick-test
```

### 3. Install DNA-Lang

```bash
# Regular install
make install

# Or development mode (editable install)
make dev-install
```

## What Was Built

### C Extension Module: `lambda_phi_ext`

High-performance implementation of Lambda Phi quantum operators:

**Functions:**
- `create_lambda_operator()` - Coherence operator Λ̂ = |1⟩⟨1|
- `create_phi_operator()` - Information operator Φ̂ ≈ Pauli-Z
- `expectation_value(operator, state)` - Compute ⟨ψ|Â|ψ⟩
- `lambda_phi_product(state)` - Compute Λ·Φ invariant

**Constants:**
- `LAMBDA_PHI` = 137.035999084 (fine structure constant)
- `PHI_THRESHOLD` = 0.618... (golden ratio conjugate)
- `THETA_LOCK` = 1.618... (golden ratio)

### Test Suite

Located in `tests/unit/test_lambda_phi_extension.py`:
- Correctness tests (vs Python implementation)
- Edge case validation
- Performance benchmarks

## Usage Examples

### Basic Usage

```python
import numpy as np
import dnalang.lambda_phi_ext as lp

# Create operators
lambda_op = lp.create_lambda_operator()
phi_op = lp.create_phi_operator()

# Define a quantum state |+⟩ = (|0⟩ + |1⟩)/√2
plus_state = np.array([1.0, 1.0], dtype=complex) / np.sqrt(2)

# Compute expectation values
lambda_val = lp.expectation_value(lambda_op, plus_state)
phi_val = lp.expectation_value(phi_op, plus_state)

print(f"⟨Λ̂⟩ = {lambda_val}")  # 0.5
print(f"⟨Φ̂⟩ = {phi_val}")    # 0.0

# Compute Lambda Phi invariant
product = lp.lambda_phi_product(plus_state)
print(f"Λ·Φ = {product}")  # 0.0
```

### Integration with Existing Code

Replace Python operators with C extension for speedup:

```python
# OLD (Python)
from lambda_phi_v3_operators import create_lambda_operator, create_phi_operator

lambda_op = create_lambda_operator()
phi_op = create_phi_operator()
result = lambda_op.expectation(state) * phi_op.expectation(state)

# NEW (C extension - 10-100x faster)
import dnalang.lambda_phi_ext as lp

result = lp.lambda_phi_product(state)
```

## Performance

Expected speedup: **10-100x** for typical quantum state operations.

Benchmark on your system:
```bash
make benchmark
```

## Troubleshooting

### Build Errors

**NumPy not found:**
```bash
pip install numpy
```

**Compiler not found:**
```bash
# Ubuntu/Debian
sudo apt install build-essential python3-dev

# macOS
xcode-select --install
```

### Import Errors

**Extension not built:**
```bash
cd /home/devinpd/Desktop/dnalang
make clean
make build
```

**Python can't find module:**
```bash
# Add to PYTHONPATH
export PYTHONPATH="/home/devinpd/Desktop/dnalang:$PYTHONPATH"

# Or install in dev mode
make dev-install
```

## Next Steps

1. ✅ **C Extension Built** - Lambda Phi operators in C
2. ⏭️ **Port Quantum Gates** - Add CNOT, Hadamard, phase gates to C
3. ⏭️ **NCLM Kernels** - Accelerate pilot-wave attention mechanism
4. ⏭️ **Parser/Compiler** - Build DNA-Lang language frontend
5. ⏭️ **Hardware Integration** - Connect to IBM Quantum via C extension

## Architecture

```
DNA-Lang/
├── dnalang_core/          # C extensions
│   └── lambda_phi_ext.c   # ✅ Lambda Phi operators
├── osiris/                 # Python runtime
│   ├── physics/
│   │   └── ncphysics.py   # Physics constants
│   └── nclm/
│       └── engine.py       # Non-causal language model
├── tests/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── hardware/          # Hardware validation
├── setup.py               # Build configuration
└── Makefile               # Build system
```

## See Also

- **Implementation Plan**: `/home/devinpd/.copilot/session-state/*/plan.md`
- **CPython C API Docs**: `.github/copilot-instructions.md` (in Python-3.10.13)
- **Original Python**: `/home/devinpd/Desktop/lambda_phi_v3_operators.py`
