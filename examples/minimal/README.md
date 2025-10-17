# Minimal VERSA Configuration

**Purpose:** The absolute bare minimum required for a valid VERSA configuration.

## What's Included

- `context.json` with only the required `version` field
- Nothing else

## Use Case

Perfect for:
- Learning the basics of VERSA
- Understanding the minimum requirements
- Starting from scratch with zero assumptions

## Structure

```
minimal/
└── .ai/
    └── context.json    # Just version: "1.0"
```

## Validation

```bash
versa lint
# Output: ✓ No issues found
```

## Next Steps

1. Add rules: Create `.ai/rules/` directory
2. Add context patterns: Define file patterns to include
3. Configure settings: Set model preferences
4. Add profiles: Create tool-specific overrides

## Learn More

- [VERSA Spec](https://github.com/dotAIslash/dotaislash-spec)
- [Quick Start Guide](../quick-start/)
