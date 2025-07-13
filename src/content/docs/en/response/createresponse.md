---
title: Create Response
---

Like the `Request` route, this functionality is primarily for internal use in the Arkyn Logs system, intended to record the details of an HTTP response.

## Route

```bash
POST /response
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Creates a new `Response` record in the database. The route receives the details of an HTTP response, such as headers and body, and stores them to be associated with an `HttpTraffic` or `CoreLog`.

## Request Body

| Field     | Type | Description                            | Required |
| :-------- | :--- | :------------------------------------- | :------- |
| `headers` | json | JSON object with the response headers. | Yes      |
| `body`    | json | JSON object with the response body.    | No       |

**Example:**

```json
{
  "headers": {
    "Content-Type": "application/json",
    "X-Request-Id": "xyz-789"
  },
  "body": {
    "status": "success",
    "requestId": "request-abc-123"
  }
}
```

## Success Response

**Code:** `201 Created`

**Content:** The created response object, including its new ID.

**Example:**

```json
{
  "id": "j1k2l3m4-n5o6-7890-1234-567890abcdef",
  "headers": {
    "Content-Type": "application/json",
    "X-Request-Id": "xyz-789"
  },
  "body": {
    "status": "success",
    "requestId": "request-abc-123"
  },
  "createdAt": "2025-07-10T16:00:05.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., missing `headers`).
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
