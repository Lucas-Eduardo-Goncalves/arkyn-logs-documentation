---
title: Delete CorePathname
---

This feature allows you to remove a core URL path (`CorePathname`) from the system.

## Route

`DELETE /core-pathname/:corePathnameId`

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

**Example header:**

```
Authorization: Bearer <your-token-here>
```

## Description

Deletes a `CorePathname` based on its ID. The route requires authentication, and the user must be the owner of the `TrafficSource` to which the `CorePathname` belongs. This is an administrative operation and may impact how new logs and exceptions are grouped.

## Route Parameters

| Parameter        | Type   | Description                             | Required |
| :--------------- | :----- | :-------------------------------------- | :------- |
| `corePathnameId` | string | ID of the `CorePathname` to be deleted. | Yes      |

## Success Response

**Code:** `204 No Content`

**Content:** No content is returned in the response body.

## Error Responses

- **Code:** `400 Bad Request`
- **Reason:** The `corePathnameId` provided is invalid.
- **Code:** `401 Unauthorized`
- **Reason:** The requester is not authenticated. - **Code:** `403 Forbidden`
- **Reason:** The requester does not have permission to delete this `CorePathname`.
- **Code:** `404 Not Found`
- **Reason:** No `CorePathname` was found with the provided ID.
- **Code:** `500 Internal Server Error`
- **Reason:** An unexpected server error occurred.
