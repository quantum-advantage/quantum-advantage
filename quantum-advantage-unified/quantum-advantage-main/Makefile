# DNA-Lang Makefile
# ==================

PYTHON := python3
PIP := pip3
PYTEST := pytest

# Directories
CORE_DIR := dnalang_core
TEST_DIR := tests
BUILD_DIR := build

# Build targets
.PHONY: all build clean test install dev-install benchmark help

all: build test

help:
	@echo "DNA-Lang Build System"
	@echo "====================="
	@echo ""
	@echo "Targets:"
	@echo "  make build         - Build C extensions in-place"
	@echo "  make install       - Install DNA-Lang package"
	@echo "  make dev-install   - Install in development mode"
	@echo "  make test          - Run test suite"
	@echo "  make test-unit     - Run unit tests only"
	@echo "  make test-hardware - Run hardware validation tests"
	@echo "  make benchmark     - Run performance benchmarks"
	@echo "  make clean         - Remove build artifacts"
	@echo "  make distclean     - Remove all generated files"
	@echo ""

build:
	@echo "Building C extensions..."
	$(PYTHON) setup.py build_ext --inplace
	@echo "Build complete!"

install: build
	@echo "Installing DNA-Lang..."
	$(PIP) install .

dev-install:
	@echo "Installing DNA-Lang in development mode..."
	$(PIP) install -e .[dev]

test: build
	@echo "Running test suite..."
	$(PYTEST) $(TEST_DIR) -v

test-unit: build
	@echo "Running unit tests..."
	$(PYTEST) $(TEST_DIR)/unit -v

test-integration: build
	@echo "Running integration tests..."
	$(PYTEST) $(TEST_DIR)/integration -v

test-hardware: build
	@echo "Running hardware validation tests..."
	@echo "Warning: Requires IBM Quantum credentials"
	$(PYTEST) $(TEST_DIR)/hardware -v --tb=short

benchmark: build
	@echo "Running performance benchmarks..."
	$(PYTEST) $(TEST_DIR)/benchmarks -v -s

clean:
	@echo "Cleaning build artifacts..."
	rm -rf $(BUILD_DIR) *.egg-info dist
	rm -f $(CORE_DIR)/*.o $(CORE_DIR)/*.so
	rm -f dnalang/*.so
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete

distclean: clean
	@echo "Removing all generated files..."
	rm -rf .pytest_cache
	rm -f .coverage
	rm -rf htmlcov

# Development helpers
format:
	@echo "Formatting code with black..."
	black dnalang tests

lint:
	@echo "Running mypy type checker..."
	mypy dnalang

# Quick validation
quick-test: build
	@echo "Running quick validation..."
	$(PYTHON) -c "import dnalang.lambda_phi_ext as ext; print('✓ C extension loads'); \
	              import numpy as np; \
	              state = np.array([1.0, 0.0], dtype=complex); \
	              result = ext.lambda_phi_product(state); \
	              print(f'✓ Lambda Phi product computed: {result}'); \
	              print('✓ All checks passed!')"
