---
title: User Entity
---

The `User` entity is one of the core pillars of the Arkyn Logs system. It represents the individuals who have access to and interact with the platform. User management is essential for the security and personalization of the log monitoring experience.

## Main Attributes

- **id**: Unique identifier for each user.
- **name**: User's name.
- **email**: User's email address, used for login and communication.
- **password**: Encrypted password for authentication.
- **utc**: User's time zone, so that logs and dates are displayed correctly.
- **createdAt**: Date and time the user record was created.
- **updatedAt**: Date and time the user record was last updated.

## Relationships

- [**TrafficSource**](/en/trafficsource/introduction): A user can have multiple `TrafficSource` (traffic sources), which allows for grouping and filtering logs originating from different applications or services monitored by that user.

In short, the `User` entity not only manages access but also serves as an aggregation point for all collected log data, becoming the foundation for the organization and security of the Arkyn Logs platform.
