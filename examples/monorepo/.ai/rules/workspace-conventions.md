---
ai:meta
  priority: high
  attach: always
  scope: global
---

# Monorepo Workspace Conventions

## Structure

```
monorepo/
├── apps/
│   ├── web/           # Next.js app
│   └── api/           # API server
├── packages/
│   ├── ui/            # Shared UI components
│   ├── config/        # Shared configs
│   └── utils/         # Shared utilities
├── package.json
└── turbo.json
```

## Package Naming

- **Apps:** `@myorg/app-web`, `@myorg/app-api`
- **Packages:** `@myorg/ui`, `@myorg/utils`

## Dependencies

- Shared dependencies in root `package.json`
- Workspace-specific deps in package folders
- Use `workspace:*` protocol for internal deps

```json
{
  "dependencies": {
    "@myorg/ui": "workspace:*"
  }
}
```

## Scripts

Root package.json:
```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint"
  }
}
```

## Version Management

- Single source of truth for dependency versions
- Workspace-level version bumps
- Conventional commits for changesets
