---
title: "System Settings"
geekdocCollapseSection: true
weight: 120
---

SCALE system management options are collected in this section of the UI and organized into a few different screens:

* **Update** controls when the system applies a new version.
  There are options to download and install an update, have the system check daily and stage updates, or to apply a manual update file to the system.

* **General** shows system details and has basic, less intrusive management options, including web interface access, localization, and NTP server connections.
  This is also where an Enterprise license can be applied or a software bug ticket created.

* **Advanced** is a collection of different options that are more central to the system configuration or meant for advanced users.
  Specific options include configuring the system console, log, and dataset pool, adding custom system controls, kernel level settings, scheduled scripting or commands, and determining any isolated GPU devices.
  *Warning*: these settings can be disruptive to system function when mis-configured.

* **Boot** lists each [ZFS]({{< relref "ZFSPrimer.md" >}}) boot environment stored on the system.
  These are used to restore the system to a previous version or specific point in time.

* **Services** exposes each system component that runs continuously in the background.
  These typically control data sharing or other external access to the system.
  Individual services have their own configuration screen and an activation toggle and setting for running automatically.

* **Shell** allows entering commands directly into the TrueNAS Operating System.
  Unix-like commands are accepted and there is an experimental TrueNAS-specific command line interface (CLI) for configuring the system separately from the web interface.

* **Enclosure** appears when the SCALE hardware is compatible.
  This is a visual representation of the system with additional details about disks and other physical hardware components.

{{< include file="static/includes/MenuNav.md.part" markdown="true" >}}