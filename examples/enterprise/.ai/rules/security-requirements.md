---
ai:meta
  priority: critical
  attach: always
  scope: global
---

# Security Requirements

## Authentication

- **MFA Required:** All user accounts
- **Session Timeout:** 30 minutes of inactivity
- **Password Policy:** Minimum 12 characters, complexity rules
- **Token Expiry:** JWT tokens expire in 1 hour

## Authorization

- **RBAC:** Role-based access control
- **Least Privilege:** Users have minimum necessary permissions
- **Audit Trail:** All access logged

## Data Protection

### Encryption
- **At Rest:** AES-256 encryption for sensitive data
- **In Transit:** TLS 1.3 minimum
- **Secrets Management:** Use HashiCorp Vault or AWS Secrets Manager

### PII Handling
- Never log PII
- Redact sensitive data in errors
- Comply with GDPR/CCPA

## Input Validation

- Validate all user input
- Sanitize for XSS
- Parameterized queries (prevent SQL injection)
- Rate limiting on all endpoints

## Security Headers

```typescript
headers: {
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "default-src 'self'"
}
```

## Dependencies

- Run `npm audit` before every release
- Auto-update security patches
- Review new dependencies for security
- Maintain Software Bill of Materials (SBOM)
