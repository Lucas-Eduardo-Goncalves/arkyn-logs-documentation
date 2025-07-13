---
title: Create Traffic Source
---

This feature allows you to register a new traffic source in the system.

## Route

```bash
POST /traffic-source`
```

## Authentication

This route requires authentication. You must include a valid Bearer token in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To create a new traffic source, you must provide a name and the associated primary domain. The new traffic source will be associated with the authenticated user.

## Request Body

| Field           | Type   | Description                                         | Required |
| :-------------- | :----- | :-------------------------------------------------- | :------- |
| `name`          | string | Descriptive name for the traffic source.            | Yes      |
| `trafficDomain` | string | The main domain of the application to be monitored. | Yes      |

**Example:**

```json
{
  "name": "Payments API",
  "trafficDomain": "api.payments.com"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The object of the created traffic source.

**Example:**

```json
{
  "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "name": "Payments API",
  "trafficDomain": "api.pagamentos.com",
  "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T11:00:00.000Z",
  "updatedAt": "2025-07-10T11:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., fields required missing).
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `404 Not found`
  - **Reason:** The authenticated user provided does not exist.
- **Code:** `409 Conflict`
  - **Reason:** The domain provided is already registered with another traffic source.
- **Code:** `500 Internal Server Error`
  - **Reason:** Unexpected server error.
