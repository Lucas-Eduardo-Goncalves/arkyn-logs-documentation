---
title: Authenticate User
---

This feature allows a user to authenticate to the system to gain access.

## Route

```bash
POST /user/auth
```

## Description

Authentication is performed by providing the user's email address and password. If the credentials are correct, the system returns an access token (JWT) that must be used in subsequent requests to protected routes.

## Request Body

| Field      | Type   | Description           | Required |
| :--------- | :----- | :-------------------- | :------- |
| `email`    | string | User's email address. | Yes      |
| `password` | string | User's password.      | Yes      |

**Example:**

```json
{
  "email": "user@example.com",
  "password": "user_password"
}
```

## Success Response

**Code:** `200 OK`

**Content:**

| Field   | Type   | Description                            |
| :------ | :----- | :------------------------------------- |
| `token` | string | Access token (JWT) for authentication. |

**Example:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., email or password not provided).
- **Code:** `404 Not Found`
  - **Reason:** Invalid credentials (incorrect email or password).
- **Code:** `500 Internal Server Error`
  - **Reason:** Unexpected server error.
