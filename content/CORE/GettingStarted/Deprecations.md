---
title: "Feature Deprecations"
description: "Notes about CORE features that are deprecated and either receive no further updates or are scheduled for removal from TrueNAS."
weight: 4
---

As part of security hardening and improving feature maintainability, there are occasions when TrueNAS features must be deprecated.
Features noted in this article are either no longer receiving any maintenance or, typically due to security vulnerabilities, might be scheduled for removal from TrueNAS in a future major version.

Begin planning migrations from these features immediately and note the TrueNAS upgrade paths required when a deprecated feature is in use.

## S3 Service

Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and scheduled for removal in CORE 13.1.
Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.

{{< enterprise >}}
Beginning in CORE 13.0-U6, Enterprise customers with the S3 service running or enabled are prevented from upgrading to the next major version.
{{< /enterprise >}}

Users should plan to migrate to a separately maintained Minio plugin or otherwise move any production data away from the S3 service storage location.

Migrating from the built-in S3 service to a plugin with the latest version of Minio could require an extended service window.
Detailed migration articles are forthcoming.

## SAS Multipath

SAS Multipath is supported *as-is* and receives no further maintenance updates.
While multipath situations might be detected and be generally functional in TrueNAS CORE, there is a possibility this is not available in a future TrueNAS CORE major version.
Users should avoid creating and managing SAS multipath scenarios with TrueNAS.