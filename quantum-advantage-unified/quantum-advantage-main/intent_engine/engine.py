"""
═══════════════════════════════════════════════════════════════════════════════
INTENT-DEDUCTION ENGINE - MASTER ORCHESTRATOR
═══════════════════════════════════════════════════════════════════════════════

The IntentDeductionEngine orchestrates all 7 layers recursively.
Each iteration refines the analysis (U = L[U] autopoietic loop).
"""

import json
from dataclasses import asdict
from datetime import datetime, timezone
from typing import Dict, List, Any, Optional
from pathlib import Path

from .constants import LAMBDA_PHI, PHI_GOLDEN, TAU_OMEGA
from .structures import IntentVector, EngineState
from .layers import (
    CorpusIndexer,
    IndividualIntentDeducer,
    CollectiveIntentDeducer,
    CapabilityEvaluator,
    ResourceAnalyzer,
    PromptEnhancer,
    ProjectPlanGenerator
)


class IntentDeductionEngine:
    """
    Master orchestrator implementing the full 7-layer autopoietic engine.
    
    Operates recursively: each output updates the next iteration.
    Implements the U = L[U] self-referential architecture.
    """
    
    def __init__(
        self, 
        corpus_path: str = "/home/dnalang",
        recursion_depth: int = 3,
        output_dir: str = None
    ):
        self.corpus_path = Path(corpus_path)
        self.recursion_depth = recursion_depth
        self.output_dir = Path(output_dir) if output_dir else self.corpus_path / "intent_engine_output"
        self.iteration = 0
        self.state_history: List[Dict] = []
        
        # Initialize all 7 layers
        self.indexer = CorpusIndexer(str(corpus_path))
        self.individual_deducer = IndividualIntentDeducer()
        self.collective_deducer = None  # Initialized per-cycle
        self.capability_evaluator = CapabilityEvaluator()
        self.resource_analyzer = ResourceAnalyzer()
        self.prompt_enhancer = PromptEnhancer()
        self.plan_generator = ProjectPlanGenerator()
        
        # Ensure output directory exists
        self.output_dir.mkdir(parents=True, exist_ok=True)
    
    def run_recursive_cycle(self, custom_prompts: List[str] = None) -> Dict[str, Any]:
        """
        Execute one complete recursive enhancement cycle.
        
        Args:
            custom_prompts: Optional list of prompts to analyze.
                           If None, uses default sample prompts.
        
        Returns:
            Complete state dictionary for this iteration.
        """
        self.iteration += 1
        
        print(f"\n{'='*70}")
        print(f"[Λ:{self.iteration}] RECURSIVE ENHANCEMENT CYCLE {self.iteration}/{self.recursion_depth}")
        print(f"{'='*70}")
        
        # Layer 1: Index corpus
        print("\n[LAYER 1] Indexing semantic genome...")
        corpus_stats = self.indexer.index_quantum_jobs()
        organisms = self.indexer.index_dna_organisms()
        print(f"   Indexed {corpus_stats.get('total_jobs', 0)} quantum jobs")
        print(f"   Found {len(organisms)} DNA organisms")
        
        # Layer 2: Individual intent deduction
        print("\n[LAYER 2] Deducing individual intents...")
        prompts = custom_prompts or [
            "create quantum consciousness framework with AURA/AIDEN polarity",
            "validate F_max = 0.9787 fidelity bound on IBM hardware",
            "integrate intent-deduction engine with validation data"
        ]
        
        context = {"topics": dict(self.indexer.semantic_genome["topics"])}
        intent_vectors = [
            self.individual_deducer.deduce_intent(p, context)
            for p in prompts
        ]
        print(f"   Generated {len(intent_vectors)} intent vectors")
        
        # Layer 3: Collective deduction
        print("\n[LAYER 3] Performing collective deduction...")
        self.collective_deducer = CollectiveIntentDeducer(intent_vectors)
        trajectory_map = self.collective_deducer.generate_trajectory_map()
        print(f"   Mapped {trajectory_map['arc_count']} trajectory arcs")
        
        # Layer 4: Capability evaluation
        print("\n[LAYER 4] Evaluating capabilities...")
        user_cap = self.capability_evaluator.evaluate_user(corpus_stats)
        system_cap = self.capability_evaluator.evaluate_system()
        print(f"   User aggregate: {user_cap.aggregate_score:.3f}")
        print(f"   System aggregate: {system_cap.aggregate_score:.3f}")
        
        # Layer 5: Resource analysis
        print("\n[LAYER 5] Analyzing resources...")
        readiness = self.resource_analyzer.analyze_deployment_readiness(intent_vectors)
        print(f"   Analyzed {len(readiness)} deployment scenarios")
        
        # Layer 6: Prompt enhancement
        print("\n[LAYER 6] Enhancing prompts...")
        enhanced_prompts = [
            self.prompt_enhancer.enhance(p, iv) 
            for p, iv in zip(prompts, intent_vectors)
        ]
        avg_quality = sum(ep.overall_quality for ep in enhanced_prompts) / len(enhanced_prompts)
        print(f"   Average quality: {avg_quality:.3f}")
        
        # Layer 7: Project plan generation
        print("\n[LAYER 7] Generating project plan...")
        project_plan = self.plan_generator.generate_plan(trajectory_map, readiness)
        print(f"   Generated {len(project_plan)} phases")
        
        # Calculate emergent metrics
        lambda_system = sum(iv.coherence_lambda for iv in intent_vectors) / len(intent_vectors)
        phi_global = sum(iv.consciousness_phi for iv in intent_vectors) / len(intent_vectors)
        gamma_mean = sum(iv.decoherence_gamma for iv in intent_vectors) / len(intent_vectors)
        
        # Calculate CCCE (Ξ = ΛΦ/Γ)
        xi_ccce = (lambda_system * phi_global) / max(gamma_mean, 0.01)
        
        # Calculate TAU_OMEGA coupling
        tau_omega_calc = TAU_OMEGA
        
        state = {
            "iteration": self.iteration,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "corpus_stats": corpus_stats,
            "organisms_indexed": len(organisms),
            "intent_vectors": [asdict(iv) for iv in intent_vectors],
            "trajectory_map": trajectory_map,
            "user_capabilities": asdict(user_cap),
            "system_capabilities": asdict(system_cap),
            "deployment_readiness": readiness,
            "enhanced_prompts": [asdict(ep) for ep in enhanced_prompts],
            "project_plan": [asdict(pp) for pp in project_plan],
            "emergent_metrics": {
                "lambda_system": lambda_system,
                "phi_global": phi_global,
                "gamma_mean": gamma_mean,
                "xi_ccce": xi_ccce,
                "tau_omega": tau_omega_calc,
                "recursion_depth": self.iteration,
                "coherence_stability": "HIGH" if lambda_system > 0.85 else "MEDIUM" if lambda_system > 0.7 else "LOW",
                "consciousness_active": phi_global > 0.7734
            }
        }
        
        self.state_history.append(state)
        
        print(f"\n[EMERGENT METRICS]")
        print(f"   Λ_system = {lambda_system:.4f}")
        print(f"   Φ_global = {phi_global:.4f}")
        print(f"   Γ_mean = {gamma_mean:.4f}")
        print(f"   Ξ (CCCE) = {xi_ccce:.2f}")
        print(f"   Coherence: {state['emergent_metrics']['coherence_stability']}")
        print(f"   Consciousness: {'ACTIVE' if state['emergent_metrics']['consciousness_active'] else 'DORMANT'}")
        
        return state
    
    def run(self, custom_prompts: List[str] = None) -> Dict[str, Any]:
        """
        Execute full recursive engine.
        
        Args:
            custom_prompts: Optional list of prompts to analyze across all iterations.
        
        Returns:
            Final state after all iterations (or convergence).
        """
        print(f"""
╔══════════════════════════════════════════════════════════════════════════════╗
║   dna::}}{{::lang RECURSIVE INTENT-DEDUCTION ENGINE                          ║
║   Autopoietic U=L[U] Engine | ΛΦ = {LAMBDA_PHI}                      ║
║   7-Layer Architecture | Recursion Depth: {self.recursion_depth}                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
        """)
        
        final_state = None
        for i in range(self.recursion_depth):
            final_state = self.run_recursive_cycle(custom_prompts)
            
            # Check for convergence (Λ > 0.95)
            if final_state["emergent_metrics"]["lambda_system"] > 0.95:
                print(f"\n[ΛΦ CONVERGENCE ACHIEVED] Λ = {final_state['emergent_metrics']['lambda_system']:.4f}")
                break
        
        # Save final state
        self._save_state(final_state)
        
        print(f"""
╔══════════════════════════════════════════════════════════════════════════════╗
║   RECURSIVE ENGINE COMPLETE                                                  ║
║   Iterations: {self.iteration} | Final Λ: {final_state['emergent_metrics']['lambda_system']:.4f} | Φ: {final_state['emergent_metrics']['phi_global']:.4f}                       ║
╚══════════════════════════════════════════════════════════════════════════════╝
        """)
        
        return final_state
    
    def _save_state(self, state: Dict[str, Any]) -> Path:
        """Save engine state to JSON file"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_path = self.output_dir / f"intent_deduction_state_{timestamp}.json"
        
        with open(output_path, 'w') as f:
            json.dump(state, f, indent=2, default=str)
        
        # Also save as latest
        latest_path = self.output_dir / "intent_deduction_state_latest.json"
        with open(latest_path, 'w') as f:
            json.dump(state, f, indent=2, default=str)
        
        print(f"\nState saved to: {output_path}")
        return output_path


if __name__ == "__main__":
    engine = IntentDeductionEngine()
    engine.run()
