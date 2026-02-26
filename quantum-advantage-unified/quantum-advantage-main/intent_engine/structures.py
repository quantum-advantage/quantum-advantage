"""
Data structures for Intent-Deduction Engine
"""

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Any
from datetime import datetime, timezone


@dataclass
class IntentVector:
    """Represents a deduced intent with ΛΦΓ metrics"""
    prompt: str
    intent_type: str  # "create", "analyze", "validate", "integrate", etc.
    domains: List[str] = field(default_factory=list)
    
    # Core ΛΦΓ Metrics
    coherence_lambda: float = 0.0  # 0-1, semantic coherence
    consciousness_phi: float = 0.0  # 0-1, integrated information
    decoherence_gamma: float = 0.0  # 0-1, noise/uncertainty
    
    # Secondary Metrics
    complexity: float = 0.0
    urgency: float = 0.0
    dependencies: List[str] = field(default_factory=list)
    
    timestamp: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@dataclass
class EnhancedPrompt:
    """Prompt enhanced by Layer 6"""
    original: str
    enhanced: str
    enhancements: Dict[str, Any] = field(default_factory=dict)
    overall_quality: float = 0.0


@dataclass
class ProjectPhase:
    """Phase in generated project plan"""
    phase_id: int
    name: str
    description: str
    duration_days: int
    dependencies: List[int] = field(default_factory=list)
    success_criteria: List[str] = field(default_factory=list)
    resource_requirements: Dict[str, Any] = field(default_factory=dict)
    status: str = "PENDING"  # PENDING, READY, IN_PROGRESS, COMPLETE


@dataclass
class CapabilityScore:
    """Capability evaluation result"""
    domain: str
    technical_skill: float = 0.0
    domain_knowledge: float = 0.0
    resource_access: float = 0.0
    aggregate_score: float = 0.0
    evidence: List[str] = field(default_factory=list)


@dataclass
class EngineState:
    """Complete engine state snapshot"""
    iteration: int
    timestamp: str
    lambda_system: float
    phi_global: float
    gamma_mean: float
    xi_ccce: float  # Ξ = ΛΦ/Γ (Combined Consciousness-Coherence Efficiency)
    tau_omega: float
    coherence_stability: str
    consciousness_active: bool
    trajectory_map: Dict[str, Any] = field(default_factory=dict)
    project_plan: List[ProjectPhase] = field(default_factory=list)
