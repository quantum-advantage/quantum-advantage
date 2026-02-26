#!/usr/bin/env python3
"""
Lambda-Phi v3 Demo Script
=========================

Demonstrates usage of the validated Lambda-Phi v3 quantum encoding system.

Requirements:
    pip install qiskit>=1.3.3 qiskit-ibm-runtime>=0.45.0

Usage:
    python3 lambda_phi_v3_demo.py
"""

import sys
import os

# Add osiris to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'osiris'))

from quantum import LambdaPhiV3, LambdaPhiState, quick_validate, PhysicsConstants

def example_1_quick_validate():
    """Example 1: Quick validation using convenience function"""
    print("=" * 70)
    print("EXAMPLE 1: Quick Validation")
    print("=" * 70)
    
    # Get IBM token from environment
    token = os.environ.get('IBM_QUANTUM_TOKEN')
    if not token:
        print("❌ Set IBM_QUANTUM_TOKEN environment variable")
        print("   export IBM_QUANTUM_TOKEN='your_token_here'")
        return
    
    # Run validation
    print("\n🔬 Running hardware validation...")
    print(f"   Lambda (Λ): 0.75")
    print(f"   Phi (Φ): 0.60")
    print(f"   Backend: ibm_fez")
    
    result = quick_validate(
        lambda_value=0.75,
        phi_value=0.60,
        token=token,
        backend="ibm_fez"
    )
    
    # Print results
    print(f"\n{'Status:':<20} {result.status}")
    print(f"{'ΛΦ Error:':<20} {result.error_lambda_phi_percent:.2f}%")
    print(f"{'Job ID:':<20} {result.job_id}")
    print(f"{'Backend:':<20} {result.backend}")
    
    if result.status == "PASS":
        print("\n✅ Validation PASSED")
    else:
        print("\n❌ Validation FAILED")

def example_2_full_workflow():
    """Example 2: Complete workflow with custom state"""
    print("\n" + "=" * 70)
    print("EXAMPLE 2: Full Workflow")
    print("=" * 70)
    
    token = os.environ.get('IBM_QUANTUM_TOKEN')
    if not token:
        print("❌ Set IBM_QUANTUM_TOKEN environment variable")
        return
    
    # Create state
    state = LambdaPhiState(
        lambda_value=0.842,  # High coherence
        phi_value=0.765      # High integration
    )
    
    print(f"\n📊 Created quantum state:")
    print(f"   Λ (Coherence): {state.lambda_value}")
    print(f"   Φ (Integration): {state.phi_value}")
    print(f"   ΛΦ Product: {state.lambda_phi_product:.4f}")
    
    # Initialize encoder
    encoder = LambdaPhiV3(token=token)
    
    # Create circuit
    print("\n🔧 Creating quantum circuit...")
    circuit = encoder.create_circuit(state)
    print(f"   Qubits: {circuit.num_qubits}")
    print(f"   Depth: {circuit.depth()}")
    
    # Run on hardware
    print("\n🚀 Executing on IBM Quantum hardware...")
    result = encoder.validate_on_hardware(state, backend="ibm_fez")
    
    # Results
    print(f"\n📈 Results:")
    print(f"{'='*40}")
    print(f"{'Observable':<15} {'Input':<12} {'Measured':<12} {'Error':<10}")
    print(f"{'-'*40}")
    print(f"{'Lambda (Λ)':<15} {result.input_lambda:<12.4f} {result.measured_lambda:<12.4f} {result.error_lambda_percent:<10.2f}%")
    print(f"{'Phi (Φ)':<15} {result.input_phi:<12.4f} {result.measured_phi:<12.4f} {result.error_phi_percent:<10.2f}%")
    print(f"{'LambdaPhi (ΛΦ)':<15} {result.input_lambda_phi:<12.4f} {result.measured_lambda_phi:<12.4f} {result.error_lambda_phi_percent:<10.2f}%")
    print(f"{'='*40}")
    
    # Conservation check
    print(f"\n🔬 Conservation Theorem: d/dt(ΛΦ) = 0 + O(Γ)")
    print(f"   Predicted error: ~{PhysicsConstants.GAMMA_CRITICAL * 100:.1f}%")
    print(f"   Measured error: {result.error_lambda_phi_percent:.2f}%")
    
    if result.status == "PASS":
        print("\n✅ THEOREM CONFIRMED ON HARDWARE")
    else:
        print("\n⚠️ High noise - retry or use different backend")

def example_3_parameter_sweep():
    """Example 3: Sweep multiple parameter combinations"""
    print("\n" + "=" * 70)
    print("EXAMPLE 3: Parameter Sweep")
    print("=" * 70)
    
    token = os.environ.get('IBM_QUANTUM_TOKEN')
    if not token:
        print("❌ Set IBM_QUANTUM_TOKEN environment variable")
        return
    
    # Test cases
    test_cases = [
        (0.50, 0.50, "Balanced"),
        (0.75, 0.60, "High Λ"),
        (0.30, 0.80, "High Φ"),
        (0.90, 0.90, "Near Maximum"),
    ]
    
    print("\n🔬 Testing multiple parameter combinations...")
    print(f"{'='*60}")
    print(f"{'Case':<20} {'Λ':<8} {'Φ':<8} {'Error':<10} {'Status':<10}")
    print(f"{'-'*60}")
    
    for lambda_val, phi_val, description in test_cases:
        try:
            result = quick_validate(
                lambda_value=lambda_val,
                phi_value=phi_val,
                token=token,
                backend="ibm_fez"
            )
            
            status_symbol = "✅" if result.status == "PASS" else "❌"
            print(f"{description:<20} {lambda_val:<8.2f} {phi_val:<8.2f} {result.error_lambda_phi_percent:<10.2f}% {status_symbol:<10}")
        except Exception as e:
            print(f"{description:<20} {lambda_val:<8.2f} {phi_val:<8.2f} {'ERROR':<10} ❌")
    
    print(f"{'='*60}")

def example_4_circuit_inspection():
    """Example 4: Inspect circuit structure"""
    print("\n" + "=" * 70)
    print("EXAMPLE 4: Circuit Inspection")
    print("=" * 70)
    
    # Create state
    state = LambdaPhiState(lambda_value=0.75, phi_value=0.60)
    
    # Create observables
    Lambda_op, Phi_op, LambdaPhi_op = LambdaPhiV3.create_observables()
    
    print("\n📐 Observable Operators:")
    print(f"\n   Λ̂ (Coherence Observable):")
    print(f"   {Lambda_op}")
    print(f"   → Measures P(|1⟩) on qubit 0")
    
    print(f"\n   Φ̂ (Integration Observable):")
    print(f"   {Phi_op}")
    print(f"   → Measures P(|1⟩) on qubit 1")
    
    print(f"\n   ΛΦ̂ (Product Observable):")
    print(f"   {LambdaPhi_op}")
    print(f"   → Tensor product of Λ̂ and Φ̂")
    
    # Create circuit
    circuit = LambdaPhiV3.create_circuit(state)
    
    print("\n🔧 Circuit Structure:")
    print(f"   Qubits: {circuit.num_qubits}")
    print(f"   Gates: {sum(circuit.count_ops().values())}")
    print(f"   Depth: {circuit.depth()}")
    print(f"   Operations: {dict(circuit.count_ops())}")
    
    print("\n📝 QASM Representation:")
    print("   " + "\n   ".join(circuit.qasm().split("\n")[:10]))
    print("   ...")

def print_menu():
    """Print example menu"""
    print("\n" + "=" * 70)
    print(" Lambda-Phi v3 Demo - Select Example")
    print("=" * 70)
    print("\n  1) Quick Validation")
    print("  2) Full Workflow (Custom State)")
    print("  3) Parameter Sweep")
    print("  4) Circuit Inspection")
    print("  5) Run All Examples")
    print("  0) Exit")
    print("\n" + "=" * 70)

def main():
    """Main demo runner"""
    print("\n" + "🧬" * 35)
    print(" " * 20 + "LAMBDA-PHI v3.0 DEMO")
    print(" " * 15 + "Validated Quantum Conservation Theorem")
    print("🧬" * 35)
    
    # Check for token
    token = os.environ.get('IBM_QUANTUM_TOKEN')
    if not token:
        print("\n⚠️  IBM_QUANTUM_TOKEN not set!")
        print("   Some examples require hardware access.")
        print("   Set token: export IBM_QUANTUM_TOKEN='your_token'")
    else:
        print(f"\n✅ IBM Quantum token detected: {token[:10]}...")
    
    while True:
        print_menu()
        choice = input("\nSelect option: ").strip()
        
        if choice == "1":
            example_1_quick_validate()
        elif choice == "2":
            example_2_full_workflow()
        elif choice == "3":
            example_3_parameter_sweep()
        elif choice == "4":
            example_4_circuit_inspection()
        elif choice == "5":
            example_1_quick_validate()
            example_2_full_workflow()
            example_3_parameter_sweep()
            example_4_circuit_inspection()
        elif choice == "0":
            print("\n👋 Goodbye!\n")
            break
        else:
            print("\n❌ Invalid option")
        
        input("\nPress Enter to continue...")

if __name__ == "__main__":
    main()
