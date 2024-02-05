---
title: "Config"
description: "Introduces the TrueNAS CLI Config namespace that manages general configuration related settings found in the API and web UI."
weight: 35
aliases:
draft: false
tags:
- backup
---

{{< include file="/_includes/CLIGuideWIP.md" >}}
{{< include file="/_includes/SCALECLIIntroduction.md" >}}

## Config Namespace
The **config** namespace has three commands and is based on configuration management functions found in the SCALE API and web UI.
It provides access to configuration management methods through the **config** namespace commands.

## Config Commands
The following **config** namespace commands allow you to save or upload system configuration files and to reset configuration to default.
You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Reset Command

The `reset` command reverts the system database to default configuration values.

Download the current system configuration with [`save`](#save-command) before resetting the configuration to default settings!
If you do not save the system configuration before resetting it, you could lose data that was not backed up, and you cannot revert to the previous configuration.

{{< hint type=important >}}
The `reset` command can result in unexpected behavior if entered via **Shell** in the web UI, especially if `reboot` is set to false.
To avoid instability, only use `reset` via a direct connection to the console or SSH.
{{< /hint >}}

{{< enterprise >}}
Enterprise High Availability (HA) systems should never reset their system configuration to defaults.
Contact iXsystems Support if a system configuration reset is required.

{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

{{< expand "Using the Reset Command" "v" >}}

#### Description

The `reset` command has one optional property,`options`, which has one additional optional property, `reboot`. If not specified, `reboot` defaults to true.
Enter the `reboot` property argument enclosed within `{}` curly brackets following the `options` property: `options={"reboot":true}`. When `reboot` is true, the system reboots ten seconds after the job is completed.
<!-- https://ixsystems.atlassian.net/browse/NAS-123857 addresses instability resulting from this command when entered as a non-root user via the Web UI. This section may need updating based on any action taken there. -->

Enter the command string then press <kbd>Enter</kbd>.
After entering the command correctly, the job begins and progress displays.

#### Usage

From the CLI prompt, enter:

`system config reset`

{{< expand "Command Example" "v" >}}
```
system config reset 
[0%] ...
[5%] Removing cluster information (if any)...
[15%] Replacing database file...
[25%] Running database upload hooks...
[50%] Updating initramfs...
[95%] Will reboot in 10 seconds...
[100%] Will reboot in 10 seconds...
```
{{< /expand >}}
{{< /expand >}}

### Save Command

The `save` command creates a tar file of security-sensitive configuration information and saves it to the specified location.

{{< hint type=danger >}}
The configuration file contains sensitive data like system passwords.
Keep the configuration file safe and protect it from unauthorized access!
{{< /hint >}}

{{< expand "Using the Save Command" "v" >}}

#### Description

`save` has one optional property, `configsave`, which has four additional optional properties (see table below).
Enclose array properties in `{}` curly brackets, with the property double-quoted and separated from the boolean value using the `:` delimiter.
Separate multiple array property arguments within the `{}` with a comma.

Enter the desired file name and path following a `>` carrot. Save the config file to a secure location that is accessible, such as an SMB share.

Enter the command string then press <kbd>Enter</kbd>.
After entering the command correctly, the cli displays the status of the job then confirms the output file is saved at the specified location.

{{< expand "Configsave Configuration Properties" "v" >}}
{{< truetable >}}
| Property | Required | Description | Syntax Example |
|----------|----------|-------------|---------------|
| `secretseed` | no | When true, the file includes the password secret seed. Including the password secret seed allows using this configuration file with a new boot device. This also decrypts all system passwords for reuse when the configuration file is uploaded. | `"secretseed":true` |
| `pool_keys` | n/a | `pool_keys` is ignored and depricated on TrueNAS SCALE systems. | n/a |
| `root_authorized_keys` | no | When true, the configuration file includes the "/root/.ssh/authorized_keys" file for the root user. | `"root_authorized_keys":true` |
| `gluster_config` | no | When true, the configuration file includes the directory that stores gluster configuration files. | `"gluster_config":true` |
{{< /truetable >}}
{{< /expand >}}

#### Usage

From the CLI prompt, enter:

<code>system config save > <i>/mnt/tank/test/FILENAME.tar</i></code>

Where */mnt/tank/test/FILENAME.tar* is the desired file name and save path.

{{< expand "Command Example" "v" >}}
```
system config save configsave={"secretseed":true,"root_authorized_keys":true,"gluster_config":true} > /mnt/tank/test/FILENAME.tar
[0%] ...
[100%] ...
[100%] Job output (786432 bytes) saved at '/mnt/tank/test/FILENAME.tar'
```
{{< /expand >}}
{{< /expand >}}

### Upload Command

{{< include file="_includes/cli/CLICommandWIP" type="page" >}}

Do not use. [Use the web UI]({{< relref "managesysconfigscale.md" >}}) to upload configuration files.
