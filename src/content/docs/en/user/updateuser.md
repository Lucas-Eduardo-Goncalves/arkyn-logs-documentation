---
title: Update User
---

This feature allows you to update the data of an existing user.

## Route

```bash
PUT /user/:userId
```

## Authentication

This route requires authentication. You must include a valid Bearer token in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To update a user, you must provide the `userId` as a parameter in the URL and the fields to be updated in the request body. The authenticated user can only update their own data unless they have administrator permissions.

## Route Parameters

| Parameter | Type   | Description            | Required |
| :-------- | :----- | :--------------------- | :------- |
| `userId`  | string | User ID to be updated. | Yes      |

## Request Body

Fields are optional. Only the provided fields will be updated.

| Field  | Type   | Description         |
| :----- | :----- | :------------------ |
| `name` | string | New user name.      |
| `utc`  | number | New user time zone. |

**Example:**

```json
{
  "name": "Updated Name",
  "utc": 0
}
```

## Success Response

**Code:** `200 OK`

**Content:** The updated user object, without the password.

**Example:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "name": "Updated Name",
  "email": "user.existing@example.com",
  "utc": 0,
  "createdAt": "2025-07-10T10:00:00.000Z",
  "updatedAt": "2025-07-10T12:30:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data.
  - **Reason:** Missing authentication token. - **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to update this user's data.
- **Code:** `404 Not Found`
  - **Reason:** No user was found with the provided `userId`.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
