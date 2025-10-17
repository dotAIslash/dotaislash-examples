---
ai:meta
  priority: critical
  attach: always
  applies_to: [logging, audit]
---

# Audit Logging Requirements

## What to Log

### Security Events
- Authentication attempts (success/failure)
- Authorization failures
- Password changes
- MFA events
- Session management

### Data Access
- Read operations on sensitive data
- Write/Update/Delete operations
- Export operations
- Admin actions

### System Events
- Configuration changes
- Deployment events
- Service restarts
- Error conditions

## Log Format

```json
{
  "timestamp": "2025-10-17T08:00:00Z",
  "event_type": "authentication",
  "user_id": "user-123",
  "action": "login",
  "result": "success",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0...",
  "metadata": {}
}
```

## Log Storage

- **Retention:** 7 years minimum
- **Immutability:** Write-once storage
- **Encryption:** Encrypt at rest
- **Access Control:** Limited to authorized personnel

## Monitoring

- Real-time alerting for suspicious activity
- Daily log analysis
- Automated anomaly detection
- Weekly security reviews

## Never Log

- Passwords or credentials
- Credit card numbers
- Social Security numbers
- Other PII/PHI without redaction
