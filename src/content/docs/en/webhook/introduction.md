---
title: Webhook Entity
---

The `Webhook` entity represents the automatic notification settings of the Arkyn Logs system. Each `Webhook` is associated with a `TrafficSource` and allows you to send notifications to external platforms when specific events occur.

## Main Attributes

- **id**: Unique identifier for each webhook.
- **discordChannelId**: ID of the Discord channel where notifications will be sent (can be null).
- **trafficSourceId**: Foreign key that links the webhook to a `TrafficSource`.
- **createdAt**: Date and time the record was created.
- **updatedAt**: Date and time the record was last updated.

## Relationships

The `Webhook` connects directly to:

- [**TrafficSource**](/en/trafficsource/introduction): Each webhook belongs to a single traffic source, allowing specific notifications for each project or application monitored.

## Features

Currently, the system supports notifications for:

- **Discord**: Sending automatic messages to specific Discord channels using the configured channel ID.

## Automatic Configuration

By default, a webhook is created along with a traffic source. This configuration can be later updated using the webhook update features.

## Summary

In summary, the `Webhook` acts as a notification mechanism that allows users to receive automatic alerts about important events in their applications monitored by Arkyn Logs.
