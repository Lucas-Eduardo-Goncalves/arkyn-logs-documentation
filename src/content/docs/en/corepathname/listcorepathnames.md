---
title: List CorePathnames
---

This feature allows you to get a list of all core URL paths (route templates) associated with a traffic source.

## Route

`GET /core-pathname/:trafficSourceId`

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

**Example header:**

```
Authorization: Bearer <your-token-here>
```

## Description

Returns a paginated list of `CorePathnames` belonging to the `TrafficSource` specified in the URL. The route requires authentication.

## Route Parameters

| Parameter         | Type   | Description                                                     | Required |
| :---------------- | :----- | :-------------------------------------------------------------- | :------- |
| `trafficSourceId` | string | ID of the traffic source for which to list the `CorePathname`s. | Yes      |

## Query Parameters

| Parameter | Type   | Description                | Default |
| :-------- | :----- | :------------------------- | :------ |
| `page`    | number | Number of pages to return. | 1       |
| `limit`   | number | Number of items per page.  | 10      |

## Success Response

**Code:** `200 OK`

**Content:** An object containing the list of `CorePathname`s and pagination information.

**Example:**

```json
{
  "date": [
    {
      "id": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
      "value": "/api/v1/orders/:orderId",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T18:00:00.000Z"
    },
    {
      "id": "m2n3o4p5-q6r7-8901-2345-678901abcdef",
      "value": "/api/v1/users/:userId",
      "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
      "createdAt": "2025-07-10T18:05:00.000Z"
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

- **Code:** `401 Unauthorized`
- **Reason:** The requester is not authenticated.
- **Code:** `403 Forbidden`
- **Reason:** The requester does not have permission to view the `CorePathname`s for this traffic source. - **Code:** `404 Not Found`
- **Reason:** The `TrafficSource` with the provided ID was not found.
- **Code:** `500 Internal Server Error`
- **Reason:** An unexpected server error occurred.
