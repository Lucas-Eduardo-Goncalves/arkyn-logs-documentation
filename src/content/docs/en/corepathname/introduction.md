---
title: CorePathname Entity (Main URL Path)
---

The `CorePathname` entity represents a "normalized" or "aggregated" version of a `Pathname`. While `Pathname` can contain dynamic values (e.g., `/users/123`, `/users/456`), `CorePathname` represents the route template (e.g., `/users/:id`). This allows you to group logs and exceptions that belong to the same logical route, regardless of specific parameters.

## Core Attributes

- **id**: Unique identifier for the main path.
- **value**: The route template (e.g., `/products/:productId/reviews`).
- **trafficSourceId**: The foreign key that links the `CorePathname` to a `TrafficSource`.
- **createdAt**: Date and time the record was created.

## Relationships

- **TrafficSource**: Each `CorePathname` belongs to a `TrafficSource`.
- **CoreLog**: Multiple `CoreLogs` can be associated with a `CorePathname`, allowing log aggregation by route.
- **Exception**: Exceptions are also linked to a `CorePathname`, allowing all errors of the same route type to be grouped together.

## Importance in the System

Route normalization through `CorePathname` is a powerful technique for analyzing logs and errors:

1. **Smart Aggregation**: Allows the system to group all logs from the `/users/:id` route into a single view, instead of treating them as hundreds of different routes. This is essential for calculating meaningful statistics, such as the error rate or the average response time of an endpoint. 2. Error Analysis by Route: Makes it easier to identify which logical routes are causing the most exceptions, helping to prioritize fixes.
2. High-Level View: Provides a cleaner, high-level view of application performance and health, focusing on route templates rather than each individual request.
3. Noise Reduction: Avoids system pollution with an excessive number of unique Pathnames that, in practice, represent the same endpoint.

In short, CorePathname is the key to transforming a list of individual logs into actionable insights into the performance and stability of each endpoint in your application.
