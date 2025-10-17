---
ai:meta
  priority: high
  attach: always
  applies_to: [fastapi, python, api]
---

# FastAPI Patterns

## Project Structure

```
app/
├── main.py              # Application entry
├── api/
│   └── v1/
│       ├── endpoints/   # Route handlers
│       └── deps.py      # Dependencies
├── core/
│   ├── config.py        # Settings
│   └── security.py      # Auth
├── models/              # SQLModel/SQLAlchemy
├── schemas/             # Pydantic models
└── services/            # Business logic
```

## Async Endpoints

```python
from fastapi import FastAPI, Depends
from sqlmodel import Session

app = FastAPI()

@app.get("/users/{user_id}")
async def get_user(
    user_id: int,
    session: Session = Depends(get_session)
):
    user = await session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

## Pydantic Models

```python
from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8)
    name: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    name: str
    
    class Config:
        from_attributes = True
```

## Dependency Injection

```python
async def get_current_user(
    token: str = Depends(oauth2_scheme)
) -> User:
    user = await verify_token(token)
    if not user:
        raise HTTPException(status_code=401)
    return user

@app.get("/me")
async def read_users_me(
    current_user: User = Depends(get_current_user)
):
    return current_user
```
