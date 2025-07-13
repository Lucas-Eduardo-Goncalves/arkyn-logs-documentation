---
title: Create CoreLog
---

This functionality is used to create a core log record, which is already associated with a `CorePathname`.

## Route

`POST /core-log/:trafficSourceId`

## Authentication

This route requires authentication. A valid Bearer token must be included in the `Authorization` header of the request. The token must be obtained through the [user authentication route](/user/authuser/).

**Example header:**

```
Authorization: Bearer <your-token-here>
```

## Description

Creates a new `CoreLog` record. This route is typically called by an internal process or agent that has already identified which `CorePathname` the transaction belongs to. It stores an aggregateable version of the log.

## Route Parameters

| Parameter         | Type   | Description        | Required |
| :---------------- | :----- | :----------------- | :------- |
| `trafficSourceId` | string | Traffic source ID. | Yes      |

## Request Body

| Field            | Type   | Description                                         | Required |
| :--------------- | :----- | :-------------------------------------------------- | :------- |
| `status`         | number | The HTTP status code of the response.               | Yes      |
| `method`         | string | The HTTP method of the request.                     | Yes      |
| `elapsedTime`    | number | Total transaction time in milliseconds.             | Yes      |
| `trafficUserId`  | string | User ID of the monitored application (optional).    | No       |
| `corePathnameId` | string | ID of the `CorePathname` to which this log belongs. | Yes      |
| `requestId`      | string | ID of the previously created `Request` record.      | Yes      |
| `responseId`     | string | ID of the previously created `Response` record.     | Yes      |

**Example:**

```json
{
  "status": 500,
  "method": "PUT",
  "elapsedTime": 320,
  "corePathnameId": "l1m2n3o4-p5q6-7890-1234-567890abcdef",
  "requestId": "p1q2r3s4-t5u6-7890-1234-567890abcdef",
  "responseId": "q1r2s3t4-u5v6-7890-1234-567890abcdef"
}
```

## Success Response

**Code:** `201 Created`

**Content:** The complete `CoreLog` object that was created.

## Error Responses

- **Code:** `400 Bad Request`
- **Reason:** Invalid input data.
- **Code:** `404 Not Found`
- **Reason:** One of the provided IDs (`trafficSourceId`, `corePathnameId`, `requestId`, `responseId`) was not found.
- **Code:** `500 Internal Server Error`
- **Reason:** An unexpected server error occurred.
