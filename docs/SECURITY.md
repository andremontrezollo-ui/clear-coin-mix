# Security Best Practices

This document outlines the security practices implemented in the ShadowMix project.

## 1. Input Validation

### Bitcoin Address Validation

All Bitcoin addresses are validated before processing:

```typescript
// Supported formats:
- Legacy (P2PKH): Starts with '1'
- P2SH: Starts with '3'
- Bech32 (SegWit): Starts with 'bc1q'
- Bech32m (Taproot): Starts with 'bc1p'
```

Validation is performed using regex patterns that match the Bitcoin address specification.

### Contact Form Validation

Contact form inputs are validated using Zod schemas:
- Subject: 3-100 characters, sanitized
- Message: 10-2000 characters, sanitized
- Reply contact: Optional, max 500 characters

### Input Sanitization

All text inputs are sanitized to remove:
- Null bytes
- Control characters (except newlines/tabs)
- Excessive whitespace

## 2. Secure Random Generation

Ticket IDs and other random identifiers use `crypto.getRandomValues()` instead of `Math.random()`:

```typescript
const array = new Uint8Array(6);
crypto.getRandomValues(array);
```

This provides cryptographically secure random values.

## 3. XSS Prevention

- React automatically escapes all rendered content
- No use of `dangerouslySetInnerHTML` with user content
- User inputs are never rendered as HTML

## 4. Content Security

- No inline scripts or styles from user input
- External resources loaded from trusted CDNs only
- All forms use `noValidate` with custom validation

## 5. Secret Management

### What NOT to Store in Code

- API keys
- Private keys
- Database credentials
- Encryption keys

### Recommended Approach

Use Lovable Cloud secrets for sensitive configuration:
1. Store secrets in the Cloud secrets manager
2. Access them in edge functions via `Deno.env.get()`
3. Never expose secrets to the frontend

## 6. Future Recommendations

### Headers to Implement (Server-Side)

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### Rate Limiting

Implement rate limiting for:
- Contact form submissions: 5 per hour per IP
- Mixing operations: Based on business requirements
- API endpoints: Standard limits

### Monitoring

- Error tracking (e.g., Sentry)
- Uptime monitoring
- Security alerting

## 7. Dependency Security

Regular dependency audits should be performed:

```bash
npm audit
```

Update vulnerable packages promptly and test thoroughly after updates.

## 8. Reporting Security Issues

If you discover a security vulnerability, please report it through:
1. The anonymous contact form
2. Encrypted email using our PGP key

Do not publicly disclose vulnerabilities until they have been addressed.
