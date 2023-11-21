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

{{< include file="/_includes/S3Deprecation.md" >}}

## SAS Multipath

SAS Multipath is supported *as-is* and receives no further maintenance updates.
While multipath situations might be detected and be generally functional in TrueNAS CORE, there is a possibility this is not available in a future TrueNAS CORE major version.
Users should avoid creating and managing SAS multipath scenarios with TrueNAS.
