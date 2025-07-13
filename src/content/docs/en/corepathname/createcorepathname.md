---
title: Create CorePathname
---

This feature allows you to register a new core URL path (route template) for a traffic source.

## Route

`POST /core-pathname/:trafficSourceId`

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

**Example header:**

```
Authorization: Bearer <your-token-here>
```

## Description

Creates a new `CorePathname`. This route is typically used internally by the system or by collection agents that have already performed route normalization. It associates a route template with a `TrafficSource`.

## Route Parameters

| Parameter         | Type   | Description        | Required |
| :---------------- | :----- | :----------------- | :------- |
| `trafficSourceId` | string | Traffic source ID. | Yes      |

## Request Body

| Field   | Type   | Description                                        | Required |
| :------ | :----- | :------------------------------------------------- | :------- |
| `value` | string | The route template (e.g., `/users/:userId/posts`). | Yes      |

**Example:**

```json
{
  "value": "/api/v1/orders/:orderId"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The `CorePathname` object that was created.

**Example:**

```json
{
  "id": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
  "value": "/api/v1/orders/:orderId",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T18:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to add a `CorePathname` to this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided ID was not found.
- **Code:** `409 Conflict`
  - **Reason:** A `CorePathname` with this `value` already exists for this `TrafficSource`.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
