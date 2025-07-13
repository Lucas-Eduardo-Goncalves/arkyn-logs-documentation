---
title: Delete Pathname
---

This feature allows you to remove an existing URL path (`Pathname`) from the system.

## Route

```bash
DELETE /pathname/:pathnameId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To delete a pathname, you must provide the `pathnameId` as a parameter in the URL. The user must be the owner of the `TrafficSource` to which the pathname belongs.

## Route Parameters

| Parameter    | Type   | Description                       | Required |
| :----------- | :----- | :-------------------------------- | :------- |
| `pathnameId` | string | ID of the pathname to be deleted. | Yes      |

## Success Response

**Code:** `204 No Content`

**Content:** No content is returned in the response body.

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `pathnameId` is invalid.
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to delete this pathname.
- **Code:** `404 Not Found`
  - **Reason:** No pathname was found with the provided `pathnameId`.
  - **Reason:** No traffic source was found with the `trafficSourceId` belonging to the pathname.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
