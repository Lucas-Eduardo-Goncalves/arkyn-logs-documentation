---
title: Response Entity
---

The `Response` entity stores the details of the HTTP response corresponding to a `Request`. Like the `Request`, each `Response` record is directly linked to an `HttpTraffic` or `CoreLog`, completing the HTTP transaction cycle.

## Main Attributes

- **id**: Unique identifier for each response record.
- **headers**: A JSON object containing the HTTP response headers (e.g., `Content-Type`, `Content-Length`).
- **body**: A JSON object containing the response body (payload), if any.
- **createdAt**: Date and time the response was recorded.

## Relationships

- [**HttpTraffic**](/httptraffic/introduction): A `Response` is associated with an `HttpTraffic` record, representing the "output" portion of an HTTP traffic log.
- [**CoreLog**](/corelog/introduction): Similarly, a `Response` can be associated with a `CoreLog`, detailing the response sent to the request that generated the log.

Together, the `Request` and `Response` entities provide a 360-degree view of each HTTP transaction, making Arkyn Logs a powerful tool for monitoring and maintaining applications.
