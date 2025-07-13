---
title: Delete HttpTraffic
---

This feature allows you to remove a specific HTTP traffic record.

## Route

```bash
DELETE /http-traffic/:httpTrafficId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the request's `Authorization` header. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Deletes an `HttpTraffic` record based on its ID. The route requires authentication, and the user must have permission on the `TrafficSource` to which the record belongs. This action is generally reserved for data cleanup or administration purposes.

## Route Parameters

| Parameter       | Type   | Description                             | Required |
| :-------------- | :----- | :-------------------------------------- | :------- |
| `httpTrafficId` | string | ID of the traffic record to be deleted. | Yes      |

## Success Response

**Code:** `204 No Content`

**Content:** No content is returned in the response body.

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `httpTrafficId` is invalid.
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to delete this record.
- **Code:** `404 Not Found`
  - **Reason:** No `HttpTraffic` record was found with the provided ID.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
