---
title: Create Request
---

This functionality is used internally by the system to record the details of an HTTP request. It is generally not an exposed route for direct consumption by end users, but rather by log collection agents or other parts of the Arkyn Logs system.

## Route

```bash
POST /request
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the request's `Authorization` header. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Creates a new `Request` record in the database. This route receives the details of an HTTP request, such as headers, body, and query parameters, and stores them for future association with an `HttpTraffic` or `CoreLog`.

## Request Body

| Field         | Type | Description                            | Required |
| :------------ | :--- | :------------------------------------- | :------- |
| `headers`     | json | JSON object with the request headers.  | Yes      |
| `body`        | json | JSON object with the request body.     | No       |
| `queryParams` | json | JSON object with the query parameters. | Yes      |

**Example:**

```json
{
  "headers": {
    "Content-Type": "application/json",
    "User-Agent": "MeuCliente/1.0"
  },
  "body": {
    "produtoId": 123,
    "quantidade": 2
  },
  "queryParams": {
    "source": "mobile"
  }
}
```

## Success Response

**Code:** `201 Created`

**Content:** The object of the created request, including its new ID.

**Example:**

```json
{
  "id": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  "headers": {
    "Content-Type": "application/json",
    "User-Agent": "MeuCliente/1.0"
  },
  "body": {
    "productId": 123,
    "quantidade": 2
  },
  "queryParams": {
    "source": "mobile"
  },
  "createdAt": "2025-07-10T16:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., `headers` or Missing `queryParams`).
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
