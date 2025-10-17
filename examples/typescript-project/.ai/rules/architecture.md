---
ai:meta
  priority: medium
  attach: always
  scope: global
---

# Architecture Guidelines

## Project Structure

```
src/
├── controllers/    # HTTP request handlers
├── services/       # Business logic
├── repositories/   # Data access layer
├── models/         # Data models and types
├── utils/          # Utility functions
└── config/         # Configuration
```

## Design Principles

### SOLID Principles
- **Single Responsibility:** One class, one purpose
- **Open/Closed:** Open for extension, closed for modification
- **Liskov Substitution:** Subtypes must be substitutable
- **Interface Segregation:** Many specific interfaces over one general
- **Dependency Inversion:** Depend on abstractions, not concretions

### Separation of Concerns
- Controllers: Handle HTTP, validation
- Services: Business logic
- Repositories: Data persistence

## Dependency Injection

```typescript
// Good: Constructor injection
class UserService {
  constructor(
    private readonly repo: UserRepository,
    private readonly logger: Logger
  ) {}
}

// Usage with DI container
const service = new UserService(
  new PostgresUserRepository(),
  new WinstonLogger()
);
```

## Error Handling Strategy

- Use custom error classes
- Centralized error handler
- Proper HTTP status codes
- Detailed error messages in dev, generic in prod
