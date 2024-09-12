---
title: "Feature Deprecations"
description: "Notes about CORE features that are deprecated and either receive no further updates or are scheduled for removal from TrueNAS."
weight: 4
related: false
---

As part of security hardening and improving feature maintainability, there are occasions when TrueNAS features must be deprecated.
Features noted in this article are either no longer receiving any maintenance or, typically due to security vulnerabilities, might be scheduled for removal from TrueNAS in a future major version.

Begin planning migrations from these features immediately and note the TrueNAS upgrade paths required when a deprecated feature is in use.

## S3 Service

{{< include file="/static/includes/S3Deprecation.md" >}}

## SAS Multipath

SAS Multipath is supported *as-is* and receives no further maintenance updates.
While multipath situations might be detected and be generally functional in TrueNAS CORE, there is a possibility this is not available in a future TrueNAS CORE major version.
Users should avoid creating and managing SAS multipath scenarios with TrueNAS.

## Virtualization

The Plugins, Jails, and Virtual Machines features are untested and provided without support to the TrueNAS Community.
Users with a critical need to use containers or virtualization solutions in production should migrate to the tested and supported virtualization features available in [TrueNAS SCALE](https://www.truenas.com/download-truenas-scale/).
[TrueNAS Enterprise customers](https://www.truenas.com/truenas-enterprise/) can contact iXsystems to schedule a TrueNAS SCALE deployment.
See [CORE to SCALE Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/) for more information.

## Web Shell

The web UI **Shell** is removed in CORE 13.3.
Users can continue to access the shell using [SSH]({{< relref "ConfiguringSSH.md" >}}) or a physical system connection with serial cable or other direct method.
