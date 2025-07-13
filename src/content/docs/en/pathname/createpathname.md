---
title: Create Pathname
---

This feature allows you to register a new URL path (`Pathname`) associated with a domain and a traffic source.

## Route

```bash
POST /pathname/:trafficSourceId/:domainId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To create a new pathname, you must provide the `trafficSourceId` and `domainId` in the URL, and the path value in the request body. The user must be the owner of the specified `TrafficSource`.

## Route Parameters

| Parameter         | Type   | Description                                     | Required |
| :---------------- | :----- | :---------------------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID.                              | Yes      |
| `domainId`        | string | ID of the domain to which the pathname belongs. | Yes      |

## Request Body

| Field   | Type   | Description                           | Required |
| :------ | :----- | :------------------------------------ | :------- |
| `value` | string | The URL path (e.g., `/products/123`). | Yes      |

**Example:**

```json
{
  "value": "/dashboard"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The created pathname object.

**Example:**

```json
{
  "id": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
  "value": "/dashboard",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T15:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data.
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to add a pathname to this domain.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` or `Domain` with the provided IDs were not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
