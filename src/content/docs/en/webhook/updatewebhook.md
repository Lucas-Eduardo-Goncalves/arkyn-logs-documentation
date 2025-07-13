---
title: Update Webhook
---

This feature allows you to update the webhook settings for a specific traffic source.

## Route

```bash
PUT /webhooks/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Allows you to update the notification settings for the webhook associated with a traffic source. Currently, you can update the ID of the Discord channel where notifications will be sent.

## URL parameters

| Parameter         | Type   | Description                             | Required |
| :---------------- | :----- | :-------------------------------------- | :------- |
| `trafficSourceId` | string | Traffic source ID to update the webhook | Yes      |

## Request body

| Field              | Type   | Description                          | Required |
| :----------------- | :----- | :----------------------------------- | :------- |
| `discordChannelId` | string | Discord channel ID for notifications | No       |

**Example:**

```json
{
  "discordChannelId": "987654321098765432"
}
```

**To disable Discord notifications:**

```json
{
  "discordChannelId": null
}
```

## Success response

**Code:** `200 OK`

**Content:** The updated webhook object.

**Example:**

```json
{
  "id": "webhook-uuid-12345",
  "discordChannelId": "987654321098765432",
  "trafficSourceId": "12345678-1234-1234-1234-123456789abc",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-20T15:20:00.000Z"
}
```

## Error responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data.
  - **Reason:** Absent authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to update the webhook.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided ID was not found.
  - **Reason:** The `Webhook` with the provided ID was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
