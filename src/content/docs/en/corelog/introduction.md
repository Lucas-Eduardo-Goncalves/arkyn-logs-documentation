---
title: CoreLog Entity
---

The `CoreLog` entity is very similar to `HttpTraffic`, but with one key difference: it is associated with a `CorePathname` instead of an individual `Pathname`. This means that `CoreLog` represents a log record that has already been aggregated at the route template level.

## Main Attributes

- **id**: Unique identifier for the main log.
- **status**: The HTTP status code of the response.
- **method**: The HTTP method of the request.
- **level**: The log level (`INFO`, `WARNING`, `FATAL`).
- **elapsedTime**: The elapsed time of the transaction in milliseconds.
- **trafficUserId**: Optional user ID of the monitored application. - **corePathnameId**: The foreign key to the `CorePathname` (the main difference from `HttpTraffic`).
- **trafficSourceId**: The foreign key to the `TrafficSource`.
- **requestId**: The foreign key to the associated `Request`.
- **responseId**: The foreign key to the associated `Response`.
- **createdAt**: Date and time the record was created.

## Relationships

- **CorePathname**: The `CoreLog` is directly linked to a route template, allowing aggregation.
- **TrafficSource**: Contextualizes the log source.
- **Request** and **Response**: Provide the full details of the individual HTTP transaction that generated this log.

## Importance in the System

CoreLog serves a purpose for aggregated and long-term analysis:

1. Endpoint Performance Analysis: By querying all CoreLogs for a specific CorePathname, you can easily calculate the average response time, error rate, and other performance metrics for a specific endpoint over time.
2. Aggregate View: While HttpTraffic is great for inspecting individual transactions, CoreLog is ideal for dashboards and reports that show the overall health of each API route.
3. Query Efficiency: For high-level analysis, querying CoreLog can be more efficient than processing and aggregating millions of HttpTraffic records in real time.
4. Trend Detection: Helps identify trends, such as an endpoint that is getting progressively slower or experiencing more errors over weeks or months.

In short, if `HttpTraffic` is the "snapshot" of a single tree, `CoreLog` is the "forest" view, allowing powerful, aggregated analysis on the behavior of each application route.
