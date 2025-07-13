---
title: List HttpTraffics
---

This feature allows you to search and list HTTP traffic records for a specific traffic source, with several filter options.

## Route

```bash
GET /http-traffic/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the request's `Authorization` header. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Returns a paginated and filtered list of `HttpTraffic` records. The route requires authentication, and the user can only access data from traffic sources that they own.

## Route Parameters

| Parameter         | Type   | Description                       | Required |
| :---------------- | :----- | :-------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID for the search. | Yes      |

## Query Parameters

This route supports a variety of filters to refine the search:

| Parameter    | Type   | Description                                              |
| :----------- | :----- | :------------------------------------------------------- |
| `page`       | number | Page number (default: 1).                                |
| `limit`      | number | Items per page (default: 10).                            |
| `startDate`  | string | Start date in ISO format (e.g., "2025-07-10T00:00:00Z"). |
| `endDate`    | string | End date in ISO format (e.g., "2025-07-10T23:59:59Z").   |
| `domainId`   | string | Filters by a specific domain ID.                         |
| `pathnameId` | string | Filters by a specific pathname ID.                       |
| `method`     | string | Filters by an HTTP method (e.g., "GET", "POST").         |
| `status`     | number | Filters by an HTTP status code.                          |
| `level`      | string | Filters by log level ("INFO", "WARNING", "FATAL").       |

## Success Response

**Code:** `200 OK`

**Content:** An object containing the list of `HttpTraffic` and paging information.

**Example:**

```json
{
  "date": [
    {
      "id": "k1l2m3n4-o5p6-7890-1234-567890abcdef",
      "status": 201,
      "method": "POST",
      "level": "INFO",
      "elapsedTime": 150,
      "trafficUserId": "user-456",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "pathnameId": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
      "requestId": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
      "responseId": "j1k2l3m4-n5o6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T17:00:00.000Z"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10
  }
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g.: Missing trafficSourceId).
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to access this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
