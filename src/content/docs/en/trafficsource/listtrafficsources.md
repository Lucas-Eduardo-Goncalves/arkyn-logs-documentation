---
title: List Traffic Sources
---

This feature allows you to obtain a list of all traffic sources associated with the authenticated user.

## Route

```bash
GET /traffic-source
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Returns a paginated list of the user's traffic sources.

## Query Parameters

| Parameter | Type   | Description                         | Default |
| :-------- | :----- | :---------------------------------- | :------ |
| `page`    | number | Number of the page to be returned.  | 1       |
| `limit`   | number | Number of traffic sources per page. | 10      |

## Success response

**Code:** `200 OK`

**Content:** An object containing the list of traffic sources and pagination information.

**Example:**

```json
{
  "date": [
    {
      "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "name": "Payments API",
      "trafficDomain": "api.pagamentos.com",
      "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T11:00:00.000Z",
      "updatedAt": "2025-07-10T11:00:00.000Z"
    },
    {
      "id": "d2e3f4g5-h6i7-8901-2345-678901abcdef",
      "name": "Institutional Website",
      "trafficDomain": "meusite.com",
      "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "createdAt": "2025-07-09T16:00:00.000Z",
      "updatedAt": "2025-07-09T16:00:00.000Z"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
