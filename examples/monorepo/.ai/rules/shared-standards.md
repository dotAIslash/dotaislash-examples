---
ai:meta
  priority: medium
  attach: always
---

# Shared Standards

## Code Style

- Single ESLint config in root
- Shared Prettier config
- TypeScript project references

## Testing

- Shared Jest config
- Test utilities in `packages/test-utils`
- Coverage reports aggregated at root

## Build

- Parallel builds with Turbo
- Shared build cache
- Incremental builds only rebuild changed packages

## CI/CD

- Test all affected packages
- Build order determined by dependencies
- Deploy affected apps only
