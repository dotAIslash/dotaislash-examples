---
ai:meta
  priority: medium
  attach: on-demand
  applies_to: [performance]
---

# Performance Optimization

## Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

## Code Splitting

```typescript
// Dynamic imports
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable SSR if not needed
});
```

## Caching Strategies

- **Static:** `{ cache: 'force-cache' }` (default)
- **Revalidate:** `{ next: { revalidate: 3600 } }`
- **No Cache:** `{ cache: 'no-store' }`

## Bundle Analysis

```bash
ANALYZE=true npm run build
```
