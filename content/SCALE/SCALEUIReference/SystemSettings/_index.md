---
title: "System Settings"
geekdocCollapseSection: true
weight: 120
---

SCALE system management options are collected in this section of the UI and organized into a few different screens:

* **Update** controls when the system applies a new version.
  There are options to download and install an update, have the system check daily and stage updates, or apply a manual update file to the system.

* **General** shows system details and has basic, less intrusive management options, including web interface access, localization, and NTP server connections.
  This is also where users can input an Enterprise license or create a software bug ticket.

* **Advanced** contains options that are more central to the system configuration or meant for advanced users.
  Specific options include configuring the system console, log, and dataset pool, adding custom system controls, kernel-level settings, scheduled scripting or commands, and determining any isolated GPU devices.
  *Warning*: Advanced settings can be disruptive to system function if misconfigured.

* **Boot** lists each [ZFS]({{< relref "ZFSPrimer.md" >}}) boot environment stored on the system.
  These restore the system to a previous version or specific point in time.

* **Services** displays each system component that runs continuously in the background.
  These typically control data sharing or other external access to the system.
  Individual services have their own configuration screens and activation toggles, and can be set to run automatically.

* **Shell** allows users to enter commands directly into the TrueNAS Operating System.
  Shell accepts Unix-like commands, and there is an experimental TrueNAS-specific command-line interface (CLI) for configuring the system separately from the web interface.

* **Enclosure** appears when the system is attached to compatible SCALE hardware.
  This is a visual representation of the system with additional details about disks and other physical hardware components.

{{< include file="static/includes/General/MenuNav.md.part" markdown="true" >}}

## Article Summaries

{{< children depth="2" description="true" >}}

