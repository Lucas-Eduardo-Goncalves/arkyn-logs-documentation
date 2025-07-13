---
title: Create domain
---

This feature allows you to register a new domain associated with a traffic source (`TrafficSource`).

## Route

```bash
POST /domain/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

To create a new domain, you must provide the `trafficSourceId` in the URL, and the domain value and protocol in the request body. The user must be the owner of the specified `TrafficSource`.

If a similar domain is already registered, a new domain will not be created and the existing domain will be returned.

## Route Parameters

| Parameter         | Type   | Description                                           | Required |
| :---------------- | :----- | :---------------------------------------------------- | :------- |
| `trafficSourceId` | string | ID of the traffic source to which the domain belongs. | Yes      |

## Request Body

| Field      | Type   | Description                                | Required |
| :--------- | :----- | :----------------------------------------- | :------- |
| `value`    | string | The domain name (e.g., "api.example.com"). | Yes      |
| `protocol` | string | The domain protocol (`HTTP` or `HTTPS`).   | Yes      |

**Example:**

```json
{
  "value": "app.mysite.com",
  "protocol": "HTTPS"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The created domain object.

**Example:**

```json
{
  "id": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "value": "app.mysite.com",
  "protocol": "HTTPS",
  "trafficSourceId": "c1d2e3f4-g5h6-7890-1234-567890abcdef",
  "createdAt": "2025-07-10T14:00:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., missing required fields, invalid protocol).
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to add a domain to this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided ID was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
