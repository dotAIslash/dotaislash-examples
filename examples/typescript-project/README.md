# TypeScript Project Example

**Purpose:** Production-ready VERSA configuration for TypeScript applications.

## What's Included

- Comprehensive TypeScript style guide
- Testing best practices
- Architecture guidelines
- Code reviewer agent
- Documentation generator agent
- Cursor and Windsurf profiles

## Features

- **Rules:** Style, testing, and architecture guidelines
- **Agents:** Code review and documentation generation
- **Profiles:** Tool-specific optimizations
- **Permissions:** Strict file/network/command access control
- **Context:** TypeScript source files and tests

## Validation

```bash
versa lint
versa print --profile cursor
versa context --agent code-reviewer
```

## Use With

```bash
# With Cursor
versa context --profile cursor --agent code-reviewer

# With Windsurf
versa context --profile windsurf --agent documenter
```
