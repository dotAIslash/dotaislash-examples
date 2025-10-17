---
ai:meta
  priority: high
  attach: always
  scope: global
  applies_to: [testing]
---

# Testing Guidelines

## Test Structure

Use the AAA pattern:
- **Arrange:** Set up test data and dependencies
- **Act:** Execute the code under test
- **Assert:** Verify the expected outcome

```typescript
describe('UserService', () => {
  describe('getUser', () => {
    it('should return user when ID exists', async () => {
      // Arrange
      const userId = '123';
      const expectedUser = { id: userId, name: 'Alice' };
      
      // Act
      const result = await userService.getUser(userId);
      
      // Assert
      expect(result).toEqual(expectedUser);
    });
  });
});
```

## Coverage Goals

- **Minimum:** 80% code coverage
- **Target:** 90% for critical paths
- Test files: `*.test.ts` or `*.spec.ts`

## Test Categories

1. **Unit Tests:** Test individual functions/classes
2. **Integration Tests:** Test component interactions
3. **E2E Tests:** Test complete user workflows

## Mocking

```typescript
// Mock external dependencies
jest.mock('./userRepository');

// Use dependency injection for testability
class UserService {
  constructor(private repo: UserRepository) {}
}
```

## Edge Cases

Always test:
- Empty inputs
- Null/undefined values
- Boundary conditions
- Error scenarios
- Concurrent operations
