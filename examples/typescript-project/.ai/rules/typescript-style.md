---
ai:meta
  priority: high
  attach: always
  scope: global
  applies_to: [typescript, javascript]
---

# TypeScript Style Guide

## Core Principles

- Use strict mode (`"strict": true` in tsconfig.json)
- Prefer `const` over `let`, never use `var`
- Use explicit types for function parameters and return values
- Avoid `any` type - use `unknown` or proper types

## Naming Conventions

- **Variables/Functions:** camelCase (`getUserData`, `isActive`)
- **Classes/Interfaces:** PascalCase (`UserAccount`, `ApiResponse`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_URL`)
- **Private members:** Prefix with `_` (`_internalState`)

## File Organization

```typescript
// 1. Imports
import { external } from 'external-lib';
import { internal } from './internal';
import type { Types } from './types';

// 2. Types/Interfaces
export interface UserData {
  id: string;
  name: string;
}

// 3. Constants
const MAX_USERS = 100;

// 4. Implementation
export function getUsers(): UserData[] {
  // Implementation
}
```

## Type Safety

- Use discriminated unions for complex types
- Leverage utility types: `Partial<T>`, `Pick<T>`, `Omit<T>`
- Use `readonly` for immutable data
- Prefer interfaces over type aliases for objects

## Error Handling

```typescript
// Good: Specific error types
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Good: Explicit error handling
function parseData(input: string): Result<Data, ValidationError> {
  try {
    return { ok: true, value: JSON.parse(input) };
  } catch (error) {
    return { ok: false, error: new ValidationError('Invalid JSON') };
  }
}
```

## Async/Await

- Always handle promise rejections
- Use `async/await` instead of `.then()` chains
- Avoid mixing callbacks and promises
- Use `Promise.all()` for parallel operations

## Testing

- Write tests alongside implementation
- Use descriptive test names: `it('should return user when ID is valid')`
- Test edge cases and error conditions
- Aim for 80%+ code coverage
