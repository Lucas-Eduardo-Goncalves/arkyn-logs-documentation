---
title: Compose HTTP Traffic Record
---

This endpoint is responsible for receiving data from a complete HTTP transaction (request, response, and traffic metadata) and composing a consolidated `HttpTrafficRecord`. This process is usually triggered by an internal event after a monitored request completes.

## Route

```bash
POST /http-traffic-record/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Route Parameters

| Parameter         | Type     | Required | Description            |
| ----------------- | -------- | -------- | ---------------------- |
| `trafficSourceId` | `string` | Yes      | The Traffic Source ID. |

## Request Body

The request body must be a JSON object containing the following fields:

| Parameter         | Type     | Required | Description                                                                              |
| ----------------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| `domainUrl`       | `string` | Yes      | The domain URL. Must be a valid URL.                                                     |
| `pathnameUrl`     | `string` | Yes      | The URL path. Must begin with `/`.                                                       |
| `trafficSourceId` | `string` | Yes      | The Traffic Source ID. Must be a valid UUID.                                             |
| `status`          | `number` | Yes      | The HTTP status code of the response. Must be an integer.                                |
| `protocol`        | `string` | Yes      | The protocol used. Allowed values: `HTTP`, `HTTPS`.                                      |
| `method`          | `string` | Yes      | The HTTP method of the request. Allowed values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`. |
| `trafficUserId`   | `string` | No       | The associated traffic user ID. If provided, must be a valid UUID.                       |
| `elapsedTime`     | `number` | Yes      | The elapsed time for the transaction in milliseconds. Must be a non-negative number.     |
| `requestHeaders`  | `object` | Yes      | An object containing the request headers.                                                |
| `requestBody`     | `object` | No       | An object containing the request body. Can be null.                                      |
| `queryParams`     | `object` | Yes      | An object containing the request query parameters.                                       |
| `responseHeaders` | `object` | Yes      | An object containing the response headers.                                               |
| `responseBody`    | `object` | No       | An object containing the response body. Can be null.                                     |

**Example:**

```json
{
  "domainUrl": "https://api.example.com",
  "pathnameUrl": "/users",
  "trafficSourceId": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "status": 201,
  "protocol": "HTTPS",
  "method": "POST",
  "trafficUserId": "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
  "elapsedTime": 150,
  "requestHeaders": {
    "Content-Type": "application/json",
    "Authorization": "Bearer..."
  },
  "requestBody": {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  },
  "queryParams": {},
  "responseHeaders": {
    "Content-Type": "application/json"
  },
  "responseBody": {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "createdAt": "2024-06-12T16:00:00.000Z"
  }
}
```

## Success Response

**Code:** `201 Created`

**Content:** The `HttpTrafficRecord` object that was created.

**Example:**

```json
{
  "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
  "status": 201,
  "method": "POST",
  "level": "INFO",
  "elapsedTime": 150,
  "createdAt": "2024-06-12T16:00:00.000Z",
  "domain": "api.example.com",
  "pathname": "/users",
  "request": {
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer..."
    },
    "body": {
      "name": "Jane Doe",
      "e-mail": "jane.doe@example.com"
    },
    "queryParams": {}
  },
  "response": {
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "createdAt": "2024-06-12T16:00:00.000Z"
    }
  }
}
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data (e.g., missing required field, invalid URL format, invalid UUID).
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated or the provided token is invalid.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to add a domain to this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** The `TrafficSource` with the provided `trafficSourceId` was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
