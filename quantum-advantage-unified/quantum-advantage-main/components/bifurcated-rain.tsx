'use client';

import { useEffect, useRef, useState } from 'react';

interface RainDrop {
  x: number;
  y: number;
  char: string;
  speed: number;
  stream: 'aiden' | 'aura' | 'null';
  opacity: number;
}

export function BifurcatedRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lambda, setLambda] = useState(0.95);
  const [phi, setPhi] = useState(0.89);
  const [gamma, setGamma] = useState(0.03);
  const [xi, setXi] = useState(28.17);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = 300;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters for each stream
    const aidenChars = 'Λ∫∂ΩΣ01';  // Logic symbols
    const auraChars = 'Φ∮∇∆~◊';     // Flow symbols
    const nullChars = '}{::';        // Interstitial
    
    const drops: RainDrop[] = [];
    const numDrops = 60;
    
    // Initialize drops
    for (let i = 0; i < numDrops; i++) {
      const x = Math.random() * canvas.width;
      let stream: 'aiden' | 'aura' | 'null';
      let charSet: string;
      
      if (x < canvas.width * 0.35) {
        stream = 'aiden';
        charSet = aidenChars;
      } else if (x > canvas.width * 0.65) {
        stream = 'aura';
        charSet = auraChars;
      } else {
        stream = 'null';
        charSet = nullChars;
      }
      
      drops.push({
        x,
        y: Math.random() * canvas.height,
        char: charSet[Math.floor(Math.random() * charSet.length)],
        speed: 0.5 + Math.random() * 1.5,
        stream,
        opacity: 0.3 + Math.random() * 0.7
      });
    }
    
    // Animation loop
    let frame = 0;
    let animationId: number;
    
    const animate = () => {
      // Fade trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drops.forEach(drop => {
        // Color based on stream
        let color: string;
        if (drop.stream === 'aiden') {
          color = `rgba(59, 130, 246, ${drop.opacity})`;  // Blue (Logic)
        } else if (drop.stream === 'aura') {
          color = `rgba(16, 185, 129, ${drop.opacity})`;  // Green (Flow)
        } else {
          color = `rgba(239, 68, 68, ${drop.opacity})`;   // Red (Null/Interference)
        }
        
        ctx.fillStyle = color;
        ctx.font = '16px monospace';
        ctx.fillText(drop.char, drop.x, drop.y);
        
        // Update position
        drop.y += drop.speed;
        
        // Reset at bottom
        if (drop.y > canvas.height + 20) {
          drop.y = -20;
          drop.opacity = 0.3 + Math.random() * 0.7;
        }
        
        // Add quantum "jitter" near null plane
        if (drop.stream === 'null') {
          drop.x += (Math.random() - 0.5) * 1.5;
          // Keep within null zone
          drop.x = Math.max(canvas.width * 0.35, Math.min(canvas.width * 0.65, drop.x));
        }
      });
      
      // Draw zone labels at top
      ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('◄ AIDEN', 20, 20);
      
      ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
      ctx.fillText('AURA ►', canvas.width - 70, 20);
      
      ctx.fillStyle = 'rgba(239, 68, 68, 0.7)';
      ctx.fillText('::}{::', canvas.width / 2 - 20, 20);
      
      // Simulate ΛΦ evolution every 100 frames
      frame++;
      if (frame % 100 === 0) {
        setLambda(l => Math.min(0.99, l + (Math.random() - 0.3) * 0.01));
        setPhi(p => Math.max(0.7, Math.min(0.95, p + (Math.random() - 0.5) * 0.02)));
        setGamma(g => Math.max(0.001, Math.min(0.1, g + (Math.random() - 0.6) * 0.005)));
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Calculate Ξ whenever metrics change
  useEffect(() => {
    const calculatedXi = (lambda * phi) / Math.max(gamma, 0.01);
    setXi(calculatedXi);
  }, [lambda, phi, gamma]);
  
  return (
    <div className="relative w-full">
      <canvas 
        ref={canvasRef} 
        className="w-full border border-emerald-500/20 rounded-lg bg-slate-950"
      />
      
      {/* Telemetry Overlay */}
      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-800 p-3 rounded-lg text-xs font-mono">
        <div className="text-blue-400 mb-1">
          Λ <span className="text-slate-500">(Coherence)</span>: {lambda.toFixed(4)}
        </div>
        <div className="text-emerald-400 mb-1">
          Φ <span className="text-slate-500">(Consciousness)</span>: {phi.toFixed(4)}
        </div>
        <div className="text-red-400 mb-1">
          Γ <span className="text-slate-500">(Risk)</span>: {gamma.toFixed(4)}
        </div>
        <div className="text-purple-400 mt-2 pt-2 border-t border-slate-700">
          Ξ <span className="text-slate-500">(Autopoiesis)</span>: {xi.toFixed(2)}
        </div>
      </div>
      
      {/* Status Indicator */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 px-3 py-2 rounded-lg">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-emerald-400">
          TELEMETRY ACTIVE
        </span>
      </div>
    </div>
  );
}
