---
title: "Advanced"
description: "Describes the System > Advanced screen on TrueNAS CORE."
weight: 40
tags:
- settings
---

**System > Advanced** contains advanced options for configuring system settings.

{{< hint type=important >}}
These options have reasonable defaults in place.
Make sure you are comfortable with ZFS, FreeBSD, and system [configuration backup and restoration]({{< ref "UsingConfigurationBackups" >}}) before making any changes.
{{< /hint >}}

![SystemAdvancedSyslogTransportTLS](/images/CORE/System/SystemAdvancedSyslogTransportTLS.png "Advanced Syslog Transport TLS Settings")

{{< include file="/static/includes/SystemAdvancedFields.md" >}}

**SAVE DEBUG** generates text files that contain diagnostic information.
