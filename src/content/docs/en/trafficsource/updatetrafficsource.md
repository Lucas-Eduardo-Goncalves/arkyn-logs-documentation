---
title: Update TrafficSource
---

This feature allows you to update the data of an existing traffic source.

## Route

```bash
PUT /traffic-source/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To update a traffic source, you must provide the `trafficSourceId` as a parameter in the URL and the fields to be updated in the request body. The user can only update traffic sources that they own.

## Route Parameters

| Parameter         | Type   | Description                             | Required |
| :---------------- | :----- | :-------------------------------------- | :------- |
| `trafficSourceId` | string | ID of the traffic source to be updated. | Yes      |

## Request Body

Fields are optional. Only the provided fields will be updated.

| Field           | Type   | Description                             | Required |
| :-------------- | :----- | :-------------------------------------- | :------- |
| `name`          | string | New name for the traffic source.        | No       |
| `trafficDomain` | string | New primary domain for the application. | No       |

**Example:**

```json
{
  "name": "Payments API V2"
}
```

## Success Response

**Code:** `200 OK`

**Content:** The updated traffic source object.

**Example:**

```json
{
  "id": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "name": "Payments API V2",
  "trafficDomain": "api.pagamentos.com",
  "userId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T11:00:00.000Z",
  "updatedAt": "2025-07-10T13:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Input Data Invalid.
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to update this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** No traffic source was found with the provided `trafficSourceId`.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
