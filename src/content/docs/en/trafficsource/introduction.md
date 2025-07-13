---
title: TrafficSource Entity
---

The `TrafficSource` entity represents the origin of the logs and events monitored by Arkyn. Each `TrafficSource` is associated with a `User` and functions as a container for grouping data from a specific application, service, or system.

## Main Attributes

- **id**: Unique identifier for each traffic source.
- **name**: Descriptive name for the traffic source (e.g., "Production API", "Institutional Website").
- **trafficDomain**: The main domain associated with this traffic source.
- **userId**: The foreign key that links the traffic source to a `User`.
- **createdAt**: Date and time the record was created.
- **updatedAt**: Date and time the record was last updated.

## Relationships

A `TrafficSource` is a central entity that connects to several other parts of the system:

- [**User**](/user/introduction): Each traffic source belongs to a single user.
- [**Domain**](/domain/introduction): A `TrafficSource` can have multiple `Domains` (domains) associated with it.
- [**Pathname**](/pathname/introduction): Groups all `Pathnames` (URL paths) registered under this source.
- [**HttpTraffic**](/httptraffic/introduction): Stores the HTTP traffic logs (`HttpTraffic`) generated.
- [**CorePathname**](/corepathname/introduction): Maintains the core URL paths (`CorePathname`) for log aggregation.
- [**CoreLog**](/corelog/introduction): Consolidates the main logs (`CoreLog`).

## Summary

In summary, `TrafficSource` acts as a "project" or "workspace" within Arkyn Logs, ensuring that data from different sources is kept organized and separate.
