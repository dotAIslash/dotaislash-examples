---
ai:meta
  priority: high
  attach: always
  scope: global
  applies_to: [python]
---

# Python Style Guide (PEP 8)

## Code Layout

- **Indentation:** 4 spaces (never tabs)
- **Line Length:** Maximum 88 characters (Black formatter)
- **Imports:** One per line, grouped (stdlib, third-party, local)

## Naming Conventions

- **Functions/Variables:** `snake_case`
- **Classes:** `PascalCase`
- **Constants:** `UPPER_SNAKE_CASE`
- **Private:** Prefix with `_` (e.g., `_internal_func`)

## Type Hints

```python
from typing import List, Optional, Dict

def get_users(limit: int = 10) -> List[Dict[str, str]]:
    """Get list of users."""
    return []

def find_user(user_id: str) -> Optional[User]:
    """Find user by ID, returns None if not found."""
    return None
```

## Docstrings

Use Google-style docstrings:

```python
def calculate_total(items: List[Item], tax_rate: float) -> float:
    """Calculate total cost including tax.
    
    Args:
        items: List of items to calculate
        tax_rate: Tax rate as decimal (e.g., 0.08 for 8%)
        
    Returns:
        Total cost with tax applied
        
    Raises:
        ValueError: If tax_rate is negative
    """
    pass
```

## Tools

- **Formatter:** Black
- **Linter:** Ruff or Pylint
- **Type Checker:** mypy
- **Import Sorter:** isort
