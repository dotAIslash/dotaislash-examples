---
ai:meta
  priority: high
  attach: always
  applies_to: [testing, python]
---

# Python Testing with pytest

## Test Structure

```python
import pytest
from myapp import UserService

@pytest.fixture
def user_service():
    """Create user service instance."""
    return UserService()

def test_get_user_returns_user_when_exists(user_service):
    # Arrange
    user_id = "123"
    
    # Act
    result = user_service.get_user(user_id)
    
    # Assert
    assert result is not None
    assert result.id == user_id
```

## Coverage

- Use `pytest-cov` for coverage reports
- Target: 80%+ coverage
- Run: `pytest --cov=src tests/`

## Fixtures

Use fixtures for common setup:
- Database connections
- Mock objects
- Test data

## Async Tests

```python
@pytest.mark.asyncio
async def test_async_operation():
    result = await async_function()
    assert result == expected
```
