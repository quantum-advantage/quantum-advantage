# Quick Reference Card - UI/UX Enhancement

## Production URLs
- **Primary**: https://quantum-advantage.dev
- **Vercel**: https://dnalang-kji46751l-dnalang-67efe71c.vercel.app

## New Components

### AnimatedNumber
```tsx
<AnimatedNumber value={82.27} decimals={2} suffix="%" duration={2000} />
```
**Usage**: Count-up animations with ease-out cubic timing  
**Props**: value, duration (default: 2000), decimals, prefix, suffix

### AnimatedCard
```tsx
<AnimatedCard variant="quantum" delay={200}>
  {/* Your content */}
</AnimatedCard>
```
**Variants**: default, quantum (with hover-lift), glass  
**Props**: delay (for stagger), variant, className

### QuantumParticles
```tsx
<QuantumParticles />
```
**Usage**: Add to page root for background particle effect  
**Performance**: 100 particles, 60fps canvas, screen blend mode

### EnhancedCCCEDisplay
```tsx
<EnhancedCCCEDisplay />
```
**Usage**: Real-time CCCE metrics dashboard  
**Metrics**: Φ (consciousness), Λ (coherence), Γ (decoherence), Ξ (efficiency)  
**Refresh**: Auto-refresh every 5 seconds from /api/ccce

## CSS Animation Classes

### Core Animations
```css
.quantum-ripple        /* Expanding ripple effect */
.consciousness-glow    /* Pulsing glow animation */
.phi-pulse            /* Phi-based pulse (0.7734s) */
.lambda-border        /* Animated border gradient */
.gradient-shift       /* Background gradient animation */
.float                /* Gentle floating motion */
.fade-in              /* Viewport-triggered fade */
.slide-in-left        /* Slide from left */
```

### Effects
```css
.glass-depth-1        /* Light glassmorphism */
.glass-depth-2        /* Medium glassmorphism */
.glass-depth-3        /* Heavy glassmorphism */
.hover-lift           /* Lift on hover with shadow */
.gradient-text        /* Animated gradient text */
.quantum-transition   /* Standard DNA-Lang transition */
```

### Utility
```css
.skip-link           /* Accessibility skip link */
.coherence-field     /* Quantum field effect */
.stat-counter        /* Stat animation styling */
.badge-animated      /* Badge pulse effect */
```

## DNA-Lang Constants

```typescript
ΛΦ = 2.176435e-8 s⁻¹   // Universal Memory Constant
θ_lock = 51.843°        // Torsion Lock Angle
Φ_threshold = 0.7734    // Consciousness Threshold
Γ_critical = 0.3        // Decoherence Threshold
τ_0 = 46.978ms          // Golden Ratio Timing (ϕ^8)
```

## Color Variables

```css
--primary: oklch(0.7 0.15 195)      /* Cyan - Quantum/Tech */
--secondary: oklch(0.65 0.18 160)   /* Emerald - Consciousness */
--accent: oklch(0.75 0.18 85)       /* Gold - Lambda-Phi */
--background: oklch(0.09 0.01 260)  /* Deep void black */
```

## Accessibility

### Keyboard Navigation
- **Tab**: Move forward
- **Shift+Tab**: Move backward
- **Enter/Space**: Activate buttons
- **Skip Link**: Appears on first Tab press

### Preferences
- `prefers-reduced-motion`: Disables all animations
- `prefers-contrast: more`: Removes glassmorphism, increases borders

## Performance Targets

- **Animation**: 60fps (16.67ms per frame)
- **Interaction**: <100ms response
- **First Paint**: <1s
- **Time to Interactive**: <3s

## Deployment Commands

```bash
# Build for production
cd ~/Desktop/dnalang
pnpm run build

# Deploy to production
vercel --prod --yes

# Check deployment status
vercel ls

# Rollback if needed
vercel promote <deployment-url> --prod
```

## Testing Checklist

- [ ] Test on https://quantum-advantage.dev
- [ ] Verify animations trigger on scroll
- [ ] Test reduced-motion disables animations
- [ ] Test on mobile (iOS/Android)
- [ ] Verify keyboard navigation works
- [ ] Test with screen reader
- [ ] Run Lighthouse audit (target: >90)
- [ ] Verify CCCE auto-refresh
- [ ] Test on Chrome, Firefox, Safari, Edge

## Monitoring

- **Analytics**: https://vercel.com/dnalang-67efe71c/dnalang/analytics
- **Logs**: Vercel dashboard → Logs tab
- **Build**: Check build logs for errors

## Documentation

- **Enhancement Guide**: `~/Desktop/dnalang/UI_UX_ENHANCEMENT_COMPLETE.md`
- **Deployment Report**: `~/Desktop/dnalang/PRODUCTION_DEPLOYMENT_COMPLETE.md`
- **This Reference**: `~/Desktop/dnalang/QUICK_REFERENCE_CARD.md`

## Support

- **GitHub**: https://github.com/ENKI-420/dnalang
- **Documentation**: https://quantum-advantage.dev/docs

---

**Status**: ✅ Live in Production  
**Framework**: DNA-Lang v51.843  
**Deployed**: 2026-02-02 14:13 UTC
