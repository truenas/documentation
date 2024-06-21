---
title: "Sandboxes (Jail-like Containers)"
description: "Provides advanced users information on deploying custom FreeBSD jail-like containers in SCALE."
weight: 30
aliases:
tags:
- customapp
- apps
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
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

## Create a Dataset and Install Jailmaker

1. Log in to the web interface and go to **Datasets**.
2. Select your root pool and click **Add Dataset**:

   a. Name the dataset *jailmaker*.

   b. Leave all other settings at their defaults.
      {{< trueimage src="/images/SCALE/Datasets/SandboxDatasetCreate.png" alt="Example Sandboxes Dataset" id="Example Sandboxes Dataset" >}}

   c. Click **Save**.

3. Open a Shell (SSH preferred) session and run these commands as **root**:

   a. Change into the jailmaker directory: {{< cli >}}cd /mnt/*tank*/jailmaker/{{< /cli >}}.
      Replace *tank* with the name of your pool.

   b. Download jailmaker: {{< cli >}}curl --location --remote-name https://raw.githubusercontent.com/Jip-Hop/jailmaker/main/jlmkr.py{{< /cli >}}.

   c. Make `jlmkr.py` executable: {{< cli >}}chmod +x jlmkr.py{{< /cli >}}

4. Create an alias for jailmaker to allow the currently logged in (admin) user to run `jlmkr.py` without entering the full absolute path.

   a. Run this command as **admin**: {{< cli >}}echo "alias jlmkr=\"sudo -E '/mnt/*tank*/jailmaker/jlmkr.py'\"" >> ~/*.zshrc*{{< /cli >}}.
      Replace *tank* with the name of your pool.
      By default TrueNAS SCALE uses the zsh shell for admin users, if you are using another shell, replace *.zshrc* with your shell provider's file, such as *.bashrc* for the bash shell.

   b. To enable the alias immediately, enter {{< cli >}}source ~/*.zshrc* {{< /cli >}}.
      Replace *.zshrc* with the appropriate file, if needed.

## Run Jailmaker when System Starts

Before making any sandboxes, configure TrueNAS to run the Jailmaker tool when the system starts.
This ensures the sandboxes start properly.

1. Log in to the web interface and go to **System Settings** > **Advanced**.
2. Find the **Init/Shutdown Scripts** widget and click **Add**:

   a. Enter this or a similar note in **Description**: *Jailmaker Startup*

   b. Set **Type** to **Command**.

   c. Enter this string in **Command**: {{< cli >}}/mnt/*tank*/jailmaker/jlmkr.py startup{{< /cli >}}.
      Replace *tank* with the name of your pool.

   d. Set **When** to **Post Init**.

   e. Set the **Enabled** checkbox.

   f. Leave **Timeout** at the default and click **Save**.
      If you intend to create many sandboxes, increase the timeout integer to a longer wait period.
	  {{< trueimage src="/images/SCALE/SystemSettings/JailmakerInitScriptCreate.png" alt="Example Jailmaker Init Script" id="Example Jailmaker Init Script" >}}

## Use Jailmaker to Create and Manage Sandboxes

With a TrueNAS dataset configured for sandboxes and the Jailmaker script set to run at system startup, sandboxes can now be created.
Creating and managing sandboxes is done only in TrueNAS Shell sessions using the {{< cli >}}jlmkr{{< /cli >}} command.

For full [usage documentation](https://github.com/Jip-Hop/jailmaker?tab=readme-ov-file#usage), refer to the open-source Jailmaker project.
From a TrueNAS Shell session, go to your sandboxes dataset and enter {{< cli >}}./jlmkr.py -h{{< /cli >}} for embedded usage notes.

Report any issues encountered when using Jailmaker to the project [Issues Tracker](https://github.com/Jip-Hop/jailmaker/issues).
