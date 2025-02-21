---
title: "Sandboxes (Jail-like Containers)"
description: "Provides advanced users information on deploying custom FreeBSD jail-like containers in TrueNAS."
weight: 60
aliases:
 - /scale/scaletutorials/apps/sandboxes/
 - /scale/scaletutorials/apps/sandboxes/)
tags:
- customapp
- apps
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
- jailmaker
- systemd-nspawn
- jails
- LXC containers
---

{{< hint type="warning" title="Unsupported Feature for Advanced Users" >}}
TrueNAS Sandboxes and Jailmaker are not supported by the TrueNAS team.
This is provided solely for users with advanced command-line, containerization, and networking experience.

There is a significant risk that using Jailmaker causes conflicts with the built-in Apps framework within TrueNAS.
Do not mix the two features unless you are capable of self-supporting and resolving any issues caused by using this solution.
{{< /hint >}}

Beginning with 24.04 (Dragonfish), TrueNAS includes the systemd-nspawn containerization program in the base system.
This allows using tools like the open-source [Jailmaker](https://github.com/Jip-Hop/jailmaker) to build and run containers that are very similar to Jails from FreeBSD-based TrueNAS releases or LXC containers on Linux.
Using the Jailmaker tool allows deploying these containers without modifying the base TrueNAS system.
These containers persist across upgrades in 24.04 (Dragonfish) and later TrueNAS major versions.

## Before You Begin
Before beginning, go to **Credentials > Local User**, click on the root user and then **Edit** to enable the root user password.
Log into TrueNAS as root user to complete the commands in the procedures in this article.
When finished, to security-harden the system, disable the root user password, log out of TrueNAS, and then log back into TrueNAS as the administrator user.

## Run Jailmaker when System Starts
Before making any sandboxes, configure TrueNAS to run the Jailmaker tool when the system starts.
This ensures the sandboxes start properly.

1. Log in to the web interface and go to **System** > **Advanced**.
2. Find the **Init/Shutdown Scripts** widget and click **Add**:

   a. Enter this or a similar note in **Description**: *Jailmaker Startup*

   b. Set **Type** to **Command**.

   c. Set **When** to **Post Init**.

   d. Select **Enabled**.

   e. Leave **Timeout** set to the default and click **Save**.
      If you intend to create many sandboxes, increase the timeout integer to a longer wait period.

	  {{< trueimage src="/images/SCALE/SystemSettings/JailmakerInitScriptCreate.png" alt="Example Jailmaker Init Script" id="Example Jailmaker Init Script" >}}

## Use Jailmaker to Create and Manage Sandboxes
With a TrueNAS dataset configured for sandboxes and the Jailmaker script set to run at system startup, you can now create sandboxes.
Creating and managing sandboxes is done only in TrueNAS **Shell** sessions using the {{< cli >}}jlmkr{{< /cli >}} command.

For full [usage documentation](https://github.com/Jip-Hop/jailmaker?tab=readme-ov-file#usage), refer to the open-source Jailmaker project.

Report any issues encountered when using Jailmaker to the project [Issues Tracker](https://github.com/Jip-Hop/jailmaker/issues).