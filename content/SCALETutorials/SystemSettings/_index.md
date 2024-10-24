---
title: "System Settings"
description: "Tutorials for configuring the system management options in the System Settings area of the TrueNAS SCALE web interface."
geekdocCollapseSection: true
weight: 14
related: false
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

SCALE system management options are collected in this section of the UI and organized into a few different screens:

* **Update** controls when the system applies a new version.
  There are options to download and install an update, have the system check daily and stage updates, or apply a manual update file to the system.

* **General Settings** shows system details and has basic, less intrusive management options, including web interface access, localization, and NTP server connections.
  This is also where users can input an Enterprise license or create a software bug ticket.

* **Advanced Settings** contains options that are more central to the system configuration or meant for advanced users.
  Specific options include configuring the system console, log, and dataset pool, managing sessions, adding custom system controls, kernel-level settings, scheduled scripting or commands, global two-factor authentication, and determining any isolated GPU devices.
  *Warning*: Advanced settings can be disruptive to system function if misconfigured.

* **Boot** lists each [ZFS](https://www.truenas.com/docs/references/zfsprimer/) boot environment stored on the system.
  These restore the system to a previous version or specific point in time.

* **Services** displays each system component that runs continuously in the background.
  These typically control data sharing or other external access to the system.
  Individual services have their own configuration screens and activation toggles, and can be set to run automatically.

* **Shell** allows users to use the Linux command-line interface (CLI) directly in the web UI.

* **Alert Settings** allows users to configure **Alert Services** and to adjust the threshold and frequency of various alert types. See [Alerts Settings Screens]({{< relref "AlertSettingsScreen.md" >}}) for more information.

* **Audit** allows users to review auditing logs of all actions performed by a session, user, or service (SMB, middleware).

* **Enclosure** appears when the system is attached to compatible SCALE hardware.
  This is a visual representation of the system with additional details about disks and other physical hardware components.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
