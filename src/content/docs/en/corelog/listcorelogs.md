---
title: List Core Logs
---

This endpoint allows you to list core logs associated with a specific traffic source.

- **Method:** `GET`
- **URL:** `/core-log/:trafficSourceId`

## URL Parameters

| Parameter         | Type     | Required | Description                   |
| ----------------- | -------- | -------- | ----------------------------- |
| `trafficSourceId` | `string` | Yes      | The ID of the traffic source. |

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/en/user/authuser/).

**Example Header:**

```
Authorization: Bearer <your-token-here>
```

## Example Request

```bash
curl -X GET http://localhost:3000/core-log/d290f1ee-6c54-4b01-90e6-d701748f0851
```

## Success Response

**Code:** `200 OK`

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "c290f1ee-6c54-4b01-90e6-d701748f0852",
      "title": "Sample Log 1",
      "description": "This is a sample log.",
      "source": "Server A",
      "layer": "Application",
      "stack": "...",
      "createdAt": "2024-06-12T10:00:00.000Z",
      "httpTrafficId": "b290f1ee-6c54-4b01-90e6-d701748f0853"
    },
    {
      "id": "e290f1ee-6c54-4b01-90e6-d701748f0854",
      "title": "Sample Log 2",
      "description": "This is another example log.",
      "source": "Server B",
      "layer": "Database",
      "stack": "...",
      "createdAt": "2024-06-12T10:05:00.000Z",
      "httpTrafficId": "b290f1ee-6c54-4b01-90e6-d701748f0853"
    }
  ]
}
```

## Error Responses

### Traffic Source not found

- **Code:** `404 Not Found`
- **Response:**

```json
{
  "statusCode": 404,
  "error": "Traffic Source not found"
}
```

### Validation Error

- **Code:** `400 Bad Request`
- **Response:**

```json
{
  "statusCode": 400,
  "error": "Validation error: 'trafficSourceId' must be a valid UUID."
}
```

### Internal Server Error

- **Code:** `500 Internal Server Error`
- **Response:**

```json
{
  "statusCode": 500,
  "error": "Internal Server Error"
}
```
