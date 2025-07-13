---
title: List Webhook
---

This feature allows you to query the webhook settings for a specific traffic source.

## Route

```bash
GET /webhooks/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Returns the webhook settings associated with a specific traffic source. The authenticated user must be the owner of the traffic source to access the webhook information.

## Route parameters

| Parameter         | Type   | Description                            | Required |
| :---------------- | :----- | :------------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID to query the webhook | Yes      |

## Success response

**Code:** `200 OK`

**Content:** The webhook object found.

**Example:**

```json
{
  "id": "webhook-uuid-12345",
  "discordChannelId": "987654321098765432",
  "trafficSourceId": "12345678-1234-1234-1234-123456789abc",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-20T14:45:00.000Z"
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** The provided `trafficSourceId` is invalid.
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to view the webhook.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided ID was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
