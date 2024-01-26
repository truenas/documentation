---
title: "Sandboxes (Jail-like Containers)"
description: "Provides advanced users information on deploying custom FreeBSD jail-like containers in SCALE."
weight: 30
aliases:
tags:
- customapp
- apps
---

{{< hint type="warning" title="Unsupported Feature for Advanced Users" >}}
TrueNAS Sandboxes and Jailmaker are not supported by iXsystems.
This is provided solely for users with advanced command-line, containerization, and networking experience.

There is significant risk that using Jailmaker causes conflicts with the built-in Apps framework within SCALE.
Do not mix the two features unless you are capable of self-supporting and resolving any issues caused by using this solution.
{{< /hint >}}

Beginning with 24.04 (Dragonfish), TrueNAS SCALE includes the systemd-nspawn containerization program in the base system.
This allows using tools like the open-source [Jailmaker](https://github.com/Jip-Hop/jailmaker) to build and run containers that are very similar to Jails from TrueNAS CORE or LXC containers on Linux.
Using the Jailmaker tool allows deploying these containers without modifying the base TrueNAS system.
These containers persist across upgrades in 24.04 (Dragonfish) and later SCALE major versions.

## Configure a Dataset for Sandboxes

1. Log in to the web interface and go to **Datasets**.
2. Select your root pool and click **Add Dataset**:
   1. Name the dataset *sandboxes* or *jails*.
   2. Leave all other settings at their defaults.
      {{< trueimage src="/images/SCALE/Datasets/SandboxDatasetCreate.png" alt="Example Sandboxes Dataset" id="Example Sandboxes Dataset" >}}
   3. Click **Save**.
3. Open a Shell (SSH preferred) session and run these commands as **root**:
   1. {{< cli >}}cd /mnt/*tank*/*sandboxes*/{{< /cli >}}.
      Replace *tank* and *sandboxes* with the names of your pool and dataset, respectively.
   2. {{< cli >}}curl --location --remote-name https://raw.githubusercontent.com/Jip-Hop/jailmaker/main/jlmkr.py{{< /cli >}}
   3. {{< cli >}}chmod +x jlmkr.py{{< /cli >}}

## Run Jailmaker when System Starts

Before making any sandboxes, configure TrueNAS to run the Jailmaker tool when the system starts.
This ensures the sandboxes start properly.

1. Log in to the web interface and go to **System Settings** > **Advanced**.
2. Find the **Init/Shutdown Scripts** widget and click **Add**:
   1. Enter this or a similar note in **Description**: *Jailmaker Startup*
   2. Set **Type** to **Command**.
   3. Enter this string in **Command**: {{< cli >}}/mnt/*tank*/*sandboxes*/jlmkr.py startup{{< /cli >}}.
      Replace *tank* and *sandboxes* with the names of your pool and dataset, respectively.
   4. Set **When** to **Post Init**
   5. Set the **Enabled** checkbox
   6. Leave **Timeout** at the default and click **Save**.
      If you intend to create many sandboxes, increase the timeout integer to a longer wait period.
	  {{< trueimage src="/images/SCALE/SystemSettings/JailmakerInitScriptCreate.png" alt="Example Jailmaker Init Script" id="Example Jailmaker Init Script" >}}

## Use Jailmaker to Create and Manage Sandboxes

With a TrueNAS dataset configured for sandboxes and the Jailmaker script set to run at system startup, sandboxes can now be created.
Creating and managing sandboxes is done only in TrueNAS Shell sessions using the {{< cli >}}jlmkr{{< /cli >}} command.

For full [usage documentation](https://github.com/Jip-Hop/jailmaker?tab=readme-ov-file#usage), refer to the open-source Jailmaker project.
From a TrueNAS Shell session, go to your sandboxes dataset and enter {{< cli >}}./jlmkr.py -h{{< /cli >}} for embedded usage notes.

Report any issues encountered when using Jailmaker to the project [Issues Tracker](https://github.com/Jip-Hop/jailmaker/issues).
