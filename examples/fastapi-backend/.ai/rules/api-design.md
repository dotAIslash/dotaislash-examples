---
ai:meta
  priority: medium
  attach: always
  applies_to: [api]
---

# API Design Guidelines

## RESTful Conventions

- `GET /users` - List users
- `GET /users/{id}` - Get single user
- `POST /users` - Create user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

## Status Codes

- 200 OK - Success
- 201 Created - Resource created
- 204 No Content - Success with no body
- 400 Bad Request - Invalid input
- 401 Unauthorized - Auth required
- 403 Forbidden - No permission
- 404 Not Found - Resource missing
- 500 Internal Server Error - Server error

## Response Format

```json
{
  "data": {...},
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 100
  }
}
```

## Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      {
        "field": "email",
        "issue": "Invalid email format"
      }
    ]
  }
}
```
