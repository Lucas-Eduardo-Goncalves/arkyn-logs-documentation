---
title: Domain Entity
---

The `Domain` entity represents the specific domains and subdomains being monitored within a `TrafficSource`. It allows for a more granular level of log organization and filtering.

## Main Attributes

- **id**: Unique identifier for each domain.
- **value**: The domain name (e.g., "mysite.com", "api.mysite.com").
- **protocol**: The protocol used by the domain (`HTTP` or `HTTPS`).
- **trafficSourceId**: The foreign key that links the domain to a `TrafficSource`.
- **createdAt**: Date and time the record was created.

## Relationships

- [**TrafficSource**](/en/trafficsource/introduction): Each `Domain` belongs to a single `TrafficSource`.
- [**Pathname**](/en/pathname/introduction): A `Domain` can have multiple `Pathnames` (URL paths) associated with it.
- [**HttpTraffic**](/en/httptraffic/introduction): Stores HTTP traffic records (`HttpTraffic`) that occurred within that specific domain.

In short, `Domain` helps subdivide a `TrafficSource` into smaller, more manageable units, reflecting the actual architecture of the application being monitored.
