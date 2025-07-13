---
title: List Domains
---

This feature allows you to get a list of all domains associated with a specific traffic source (`TrafficSource`).

## Route

```bash
GET /domain/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Returns a paginated list of domains belonging to the `TrafficSource` specified in the URL. The user must be the owner of the traffic source.

## Route Parameters

| Parameter         | Type   | Description                                          | Required |
| :---------------- | :----- | :--------------------------------------------------- | :------- |
| `trafficSourceId` | string | ID of the traffic source from which to list domains. | Yes      |

## Query Parameters

| Parameter | Type   | Description                        | Default |
| :-------- | :----- | :--------------------------------- | ------- |
| `page`    | number | Number of the page to be returned. | 1       |
| `limit`   | number | Number of domains per page.        | 10      |

## Success Response

**Code:** `200 OK`

**Content:** An object containing the list of domains and pagination information.

**Example:**

```json
{
  "date": [
    {
      "id": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "value": "app.mysite.com",
      "protocol": "HTTPS",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T14:00:00.000Z"
    },
    {
      "id": "f2g3h4i5-j6k7-8901-2345-678901abcdef",
      "value": "api.mysite.com",
      "protocol": "HTTP",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T14:05:00.000Z"
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
  - **Reason:** Invalid input data (e.g., missing trafficSourceId).
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to view the domains for this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided ID was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
