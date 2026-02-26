# Quick Reference: Experiments Explorer V3

## 🚀 At a Glance

**Status**: ✅ LIVE at https://quantum-advantage.dev
**Component**: `components/experiments-explorer.tsx` (420 lines)
**Data**: `public/resolution_results.json` (46 experiments, 45KB)
**Build Time**: 39s | **Deploy Time**: 57s

---

## 📊 Key Features

```
┌─────────────────────────────────────────┐
│ ✅ 46 quantum problem resolutions       │
│ ✅ Real-time search & filtering         │
│ ✅ Category badges (7 types)            │
│ ✅ Pagination (10 per page)             │
│ ✅ Statistics dashboard                 │
│ ✅ Expandable card details              │
│ ✅ Animated metrics                     │
│ ✅ Fully responsive                     │
│ ✅ WCAG 2.1 AA compliant                │
└─────────────────────────────────────────┘
```

---

## 🎯 User Actions

| Action | Trigger | Result |
|--------|---------|--------|
| **Search** | Type in search bar | Filters by description/type/mechanism |
| **Filter** | Click category badge | Shows only that problem type |
| **Clear** | Click [X] button | Resets all filters |
| **Expand** | Click chevron (▼) | Shows full experiment details |
| **Paginate** | Click Prev/Next | Navigate through results |

---

## 📈 Statistics Shown

1. **Total Experiments**: Current filtered count
2. **Avg Resolution**: Mean success rate (99.8%)
3. **Avg Γ Reduction**: Mean decoherence drop (0.849)
4. **Avg Timesteps**: Mean iterations (1000)

All numbers animate on load using `AnimatedNumber`.

---

## 🏷️ Problem Types

| Type | Count | Description |
|------|-------|-------------|
| `quantum_gravity` | 22 | Black holes, singularities |
| `measurement_problem` | 9 | Observer effect, collapse |
| `dark_matter` | 6 | Missing mass, halos |
| `vacuum_structure` | 5 | Zero-point, cosmological constant |
| `arrow_of_time` | 2 | Entropy, time asymmetry |
| `inertia` | 1 | Origin of mass resistance |
| `zero_point_energy` | 1 | Vacuum fluctuations |

---

## 🔧 Quick Commands

### Build & Test
```bash
cd /home/devinpd/Desktop/dnalang
pnpm build          # ~40s
pnpm dev            # localhost:3000
```

### Deploy
```bash
vercel --prod --yes # ~60s
# Output: https://quantum-advantage.dev
```

### Verify Data
```bash
cat public/resolution_results.json | jq '.total_experiments'
# Output: 46
```

---

## 💻 Code Snippets

### Import & Use
```tsx
import { ExperimentsExplorer } from "@/components/experiments-explorer"

export default function Page() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ExperimentsExplorer />
      </div>
    </section>
  )
}
```

### Customize Items Per Page
```typescript
// In experiments-explorer.tsx, line 42
const [itemsPerPage] = useState(15) // Change from 10
```

### Add Custom Stat
```typescript
// In stats useMemo (line ~100)
const customStat = experiments.filter(
  e => e.resolution_metric > 0.999
).length
```

---

## 🎨 Styling Classes

### Key Animations
- `slide-in-left`: Expands card details
- `quantum-transition`: Smooth state changes
- `hover-lift`: Card elevation on hover
- `phi-pulse`: Consciousness glow effect

### Color Codes
- **Primary** (Cyan): `oklch(0.7 0.15 195)` - Quantum tech
- **Secondary** (Emerald): `oklch(0.65 0.18 160)` - Consciousness
- **Accent** (Gold): `oklch(0.75 0.18 85)` - Lambda-Phi

---

## 🐛 Troubleshooting

### Problem: No Experiments Load
```bash
# Check file exists
ls public/resolution_results.json

# Check network in browser DevTools
# Should see: GET /resolution_results.json 200
```

### Problem: Search Not Working
```typescript
// Verify searchQuery state
console.log("Search:", searchQuery)
console.log("Filtered:", filteredExperiments.length)
```

### Problem: Pagination Breaks
```typescript
// Check page bounds
console.log("Page:", page, "of", totalPages)
console.log("Items:", paginatedExperiments.length)
```

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 768px | 1 column, stacked filters |
| Tablet | 768-1024px | 2 column stats |
| Desktop | > 1024px | 4 column stats, full grid |

---

## ⚡ Performance Tips

1. **Memoization**: Use `useMemo` for expensive calculations
2. **Pagination**: Only render 10 cards at a time
3. **Lazy Expansion**: Details only load when expanded
4. **GPU Acceleration**: Only animate `transform` and `opacity`
5. **Debounce Search**: (Not implemented yet, consider for future)

---

## 🔐 DNA-Lang Constants

```typescript
ΛΦ = 2.176435e-8   // Universal Memory (s⁻¹)
θ_lock = 51.843°   // Torsion Lock Angle
Φ_threshold = 0.7734 // Consciousness Threshold
Γ_critical = 0.3   // Decoherence Threshold
τ_0 = 46.978ms     // Golden Ratio Timing
```

---

## 📚 Documentation Files

1. **EXPERIMENTS_EXPLORER_V3.md** - Full technical docs
2. **EVOLUTION_V1_V2_V3.md** - Version history
3. **THIS FILE** - Quick reference card
4. **ENHANCED_UI_UX_DEPLOYMENT_V2.md** - V2 deployment
5. **BEFORE_AFTER_COMPARISON.md** - Visual changes

---

## 🎓 Learning Path

### Beginner
1. Read this quick reference
2. Look at component source code
3. Test on localhost
4. Try modifying items per page

### Intermediate
1. Add new statistics
2. Create custom filters
3. Modify card layout
4. Implement sorting

### Advanced
1. Add WebSocket integration
2. Build export functionality
3. Create visualization charts
4. Implement comparison tool

---

## ✅ Production Checklist

Before deploying changes:

- [ ] Test search with various queries
- [ ] Verify all 7 problem types filter correctly
- [ ] Check pagination edge cases (first/last page)
- [ ] Test card expand/collapse animations
- [ ] Verify statistics update with filters
- [ ] Test on mobile (Chrome, Safari)
- [ ] Check accessibility (tab navigation)
- [ ] Run `pnpm build` successfully
- [ ] Deploy with `vercel --prod --yes`
- [ ] Verify live site loads

---

## 🚦 Status Indicators

### Component Health
```
✅ Data Loading    - fetch() successful
✅ Search Active   - searchQuery.length > 0
✅ Filter Active   - selectedType !== null
✅ Has Results     - filteredExperiments.length > 0
⚠️ Empty Results   - filteredExperiments.length === 0
❌ Load Failed     - !data && !loading
```

---

## 📞 Quick Support

### File Locations
```
Component:  components/experiments-explorer.tsx
Data:       public/resolution_results.json
Page:       app/page.tsx
Styles:     app/globals.css
```

### Key Dependencies
```json
{
  "react": "19.2.0",
  "next": "16.0.10",
  "lucide-react": "^0.460.0",
  "@radix-ui/*": "latest"
}
```

### Environment
- **Node**: 23.6.0
- **pnpm**: 10.28.2
- **Platform**: Vercel
- **Domain**: quantum-advantage.dev

---

## 🎯 Next Steps

### Immediate (Done)
- [x] Load full dataset
- [x] Add search
- [x] Add filters
- [x] Add pagination
- [x] Deploy to production

### Short-term
- [ ] Add sorting (resolution, timestamp, gamma)
- [ ] Implement "Load More" infinite scroll
- [ ] Add export buttons (CSV, JSON)
- [ ] Create experiment detail page

### Long-term
- [ ] Real-time updates via WebSocket
- [ ] User bookmarks/favorites
- [ ] Advanced filter ranges
- [ ] Comparison tool
- [ ] Visualization charts

---

## 🌟 Key Achievements

**From V2 to V3**:
- 3 experiments → 46 experiments ✅
- Hardcoded data → Dynamic loading ✅
- No search → Full-text search ✅
- No filters → 7 category filters ✅
- No pagination → 5 pages ✅
- No stats → 4 live metrics ✅

**Result**: Production-ready quantum experiments browser! 🎉

---

**Last Updated**: 2025-01-31
**Version**: 3.0.0
**Status**: 🟢 LIVE
