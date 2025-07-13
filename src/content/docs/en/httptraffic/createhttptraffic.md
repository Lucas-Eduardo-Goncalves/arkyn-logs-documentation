---
title: Create HttpTraffic
---

This functionality is used to create a complete HTTP traffic record. It is a central route that combines information from multiple entities.

## Route

```bash
POST /http-traffic/:trafficSourceId
```

## Authentication

This route requires authentication. A valid Bearer token must be included in the request's `Authorization` header. The token must be obtained through the [user authentication route](/en/user/authuser/).

```bash
Authorization: Bearer <your-token-here>
```

## Description

Creates a new `HttpTraffic` record. This route is typically called by a data collector or monitoring agent after an HTTP transaction has completed. It receives all transaction metadata, along with the `Request` and `Response` IDs, which should already have been created separately.

## Route Parameters

| Parameter         | Type   | Description        | Required |
| :---------------- | :----- | :----------------- | :------- |
| `trafficSourceId` | string | Traffic source ID. | Yes      |

## Request Body

| Field           | Type   | Description                                                           | Required |
| :-------------- | :----- | :-------------------------------------------------------------------- | :------- |
| `status`        | number | The HTTP status code of the response.                                 | Yes      |
| `method`        | string | The HTTP method of the request (e.g., "GET", "POST").                 | Yes      |
| `elapsedTime`   | number | Total transaction time in milliseconds.                               | Yes      |
| `trafficUserId` | string | User ID of the monitored application (optional).                      | No       |
| `domainId`      | string | ID of the previously created `Domain` where the transaction occurred. | Yes      |
| `pathnameId`    | string | ID of the previously created `Pathname` of the transaction.           | Yes      |
| `requestId`     | string | ID of the previously created `Request` record.                        | Yes      |
| `responseId`    | string | ID of the previously created `Response` record.                       | Yes      |

**Example:**

```json
{
  "status": 201,
  "method": "POST",
  "elapsedTime": 150,
  "trafficUserId": "user-456", // or null
  "domainId": "e1f2g3h4-i5j6-7890-1234-567890abcdef",
  "pathnameId": "g1h2i3j4-k5l6-7890-1234-567890abcdef",
  "requestId": "i1j2k3l4-m5n6-7890-1234-567890abcdef",
  "responseId": "j1k2l3m4-n5o6-7890-1234-567890abcdef"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The complete `HttpTraffic` object that was created.

**Example:**

```json
{
"id": "e1f2g3h4-0dbc-7ee5-a251-d67a4ce4bfe4",
"status": 200,
"method": "GET",
"level": "INFO",
"elapsedTime": 456,
"trafficUserId": null,
"trafficSourceId": "0197548f-0e8e-7550-b283-f26fd98a9423",
"domainId": "e1f2g3h4-0a74-7ee5-a251-b0b4056b9cd3",
"pathnameId": "e1f2g3h4-0bce-7ee5-a251-bcc902f86bb4",
"requestId": "e1f2g3h4-0c1b-7ee5-a251-c1425617699b",
"responseId": "e1f2g3h4-0c1c-7ee5-a251-c9b04e69aba9",
"createdAt": "06/11/2025 at 15:27:01"
},
```

## Error Responses

- **Code:** `400 Bad Request`
  - **Reason:** Invalid input data.
  - **Reason:** Missing authentication token.
- **Code:** `401 Unauthorized`
  - **Reason:** The requester is not authenticated.
  - **Reason:** The provided token is invalid.
- **Code:** `403 Forbidden`
  - **Reason:** The requester does not have permission to add a domain to this traffic source.
- **Code:** `404 Not Found`
  - **Reason:** One of the provided IDs (`trafficSourceId`, `domainId`, `pathnameId`, `requestId`, `responseId`) was not found.
- **Code:** `500 Internal Server Error`
  - **Reason:** An unexpected server error occurred.
