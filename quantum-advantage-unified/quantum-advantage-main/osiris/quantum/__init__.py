"""
dnalang/osiris/quantum/__init__.py
===================================
DNA-Lang Quantum Module - Lambda-Phi v3

This module provides production-ready quantum encoding for the
Lambda-Phi conservation theorem with 90% hardware validation.

Quick Start:
    >>> from osiris.quantum import LambdaPhiV3, LambdaPhiState
    >>> encoder = LambdaPhiV3(token="YOUR_IBM_TOKEN")
    >>> state = LambdaPhiState(lambda_value=0.75, phi_value=0.60)
    >>> result = encoder.validate_on_hardware(state)
    >>> print(f"Status: {result.status}, Error: {result.error_lambda_phi:.2%}")
"""

from .lambda_phi_v3 import (
    PhysicsConstants,
    CONSTANTS,
    LambdaPhiState,
    ValidationResult,
    LambdaPhiV3,
    quick_validate,
)

__version__ = "3.0.0"
__author__ = "Devin Davis <devinphillipdavis@gmail.com>"

__all__ = [
    'PhysicsConstants',
    'CONSTANTS',
    'LambdaPhiState',
    'ValidationResult',
    'LambdaPhiV3',
    'quick_validate',
]
