# CRM API Documentation

## OpenAPI Specification

The CRM API follows OpenAPI 3.0 specification. The API provides endpoints for:

### Authentication
- `POST /auth/login` - User authentication
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh access token

### Users Management
- `GET /users` - List users (admin only)
- `GET /users/{id}` - Get user details
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user (admin only)

### Base URL
- **Development**: `http://localhost:3001/api`
- **Production**: TBD

### Authentication
All endpoints (except authentication) require a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

### Response Format
All API responses follow this structure:
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### Error Handling
Error responses include:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```