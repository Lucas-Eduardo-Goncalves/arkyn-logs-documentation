---
title: Delete TrafficSource
---

This feature allows you to remove an existing traffic source from the system.

##Route

```bash
DELETE /traffic-source/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

##Description

To delete a traffic source, you must provide the `trafficSourceId` as a parameter in the URL. The user can only delete traffic sources that they own. Deleting a traffic source may result in the cascading removal of all associated data (logs, domains, etc.).

## Route Parameters

| Parameter         | Type   | Description                             | Required |
| :---------------- | :----- | :-------------------------------------- | :------- |
| `trafficSourceId` | string | ID of the traffic source to be deleted. | Yes      |

## Success Response

**Code:** `204 No Content`

**Content:** No content is returned in the response body.

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `trafficSourceId` is invalid.
  - **Reason:** Authentication token missing.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to delete this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** No traffic source was found with the provided `trafficSourceId`.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
