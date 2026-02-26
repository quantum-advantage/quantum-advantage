"""
Intent-Deduction Engine Module
DNA::}{::lang v51.843
Seven-Layer Omega Recursive Architecture
"""

__version__ = "1.0.0"
__author__ = "Devin Phillip Davis (CAGE: 9HUP5)"
__framework__ = "DNA::}{::lang v51.843"

from .constants import LAMBDA_PHI, PHI_GOLDEN, TAU_OMEGA, THETA_LOCK
from .engine import IntentDeductionEngine

__all__ = [
    "IntentDeductionEngine",
    "LAMBDA_PHI",
    "PHI_GOLDEN", 
    "TAU_OMEGA",
    "THETA_LOCK"
]
