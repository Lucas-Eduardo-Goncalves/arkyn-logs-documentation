---
title: Request Entity
---

The `Request` entity stores the details of an individual HTTP request captured by the monitoring system. Each `Request` record is directly associated with an `HttpTraffic` or `CoreLog`, providing a complete breakdown of the incoming transaction data.

## Main Attributes

- **id**: Unique identifier for each request record.
- **headers**: A JSON object containing the HTTP request headers (e.g., `Content-Type`, `Authorization`, `User-Agent`).
- **body**: A JSON object containing the request body (payload), if any.
- **queryParams**: A JSON object containing the URL's query string.
- **createdAt**: Date and time the request was logged.

## Relationships

- [**HttpTraffic**](/httptraffic/introduction): A `Request` can be associated with an `HttpTraffic` record, representing the "input" portion of a complete HTTP traffic log.
- [**CoreLog**](/corelog/introduction): Similarly, a `Request` can be associated with a `CoreLog`, detailing the request that generated that main log.

In short, the `Request` entity provides a complete "snapshot" of the data entering the system with each HTTP request, making it an indispensable resource for monitoring and maintaining any web application.
