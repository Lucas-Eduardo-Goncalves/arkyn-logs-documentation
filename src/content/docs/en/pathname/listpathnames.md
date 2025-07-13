---
title: Pathname Lists
---

This feature allows you to obtain a list of all URL paths (`Pathname`) associated with a specific domain.

## Route

```bash
GET /pathname/:trafficSourceId/:domainId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Returns a paginated list of pathnames belonging to the `Domain` and `TrafficSource` specified in the URL. The user must be the owner of the specified `TrafficSource`.

## Route Parameters

| Parameter         | Type   | Description                                   | Required |
| :---------------- | :----- | :-------------------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID.                            | Yes      |
| `domainId`        | string | ID of the domain for which to list pathnames. | Yes      |

## Query Parameters

| Parameter | Type   | Description                   | Default |
| :-------- | :----- | :---------------------------- | :------ |
| `page`    | number | Number of the page to return. | 1       |
| `limit`   | number | Number of pathnames per page. | 10      |

## Success Response

**Code:** `200 OK`

**Content:** An object containing the list of pathnames and pagination information.

**Example:**

```json
{
  "date": [
    {
      "id": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
      "value": "/dashboard",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T15:00:00.000Z"
    },
    {
      "id": "h2i3j4k5-l6m7-8901-2345-678901abcdef",
      "value": "/settings",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T15:02:00.000Z"
    }
  ],
  "goal": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `pathnameId` is invalid.
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to view pathnames for this domain.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` or `Domain` with the provided IDs was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
