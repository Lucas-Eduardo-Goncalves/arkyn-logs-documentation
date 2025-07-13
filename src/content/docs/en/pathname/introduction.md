---
title: Pathname Entity
---

The `Pathname` entity represents the specific paths (routes or pages) within a `Domain` that are being monitored. For example, if the domain is `mysite.com`, the pathnames could be `/home`, `/products`, or `/contact`.

## Main Attributes

- **id**: Unique identifier for each pathname.
- **value**: The URL path (e.g., `/users`, `/articles/123`).
- **trafficSourceId**: The foreign key that links the pathname to a `TrafficSource`.
- **domainId**: The foreign key that links the pathname to a `Domain`.
- **createdAt**: Date and time the record was created.

## Relationships

- [**TrafficSource**](/trafficsource/introduction): Each `Pathname` is associated with a `TrafficSource` to facilitate data aggregation at the traffic source level.
- [**Domain**](/domain/introduction): Each `Pathname` belongs to a specific `Domain`.
- [**HttpTraffic**](/httptraffic/introduction): A `Pathname` can have multiple `HttpTraffic` records associated with it, representing all requests made for that specific path.

In short, `Pathname` provides the ultimate granularity for web traffic analysis, allowing users to understand exactly how each part of their application is behaving.
