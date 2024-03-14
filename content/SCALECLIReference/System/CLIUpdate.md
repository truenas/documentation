---
title: "Update"
geekdocCollapseSection: true
description: "Provides information about the system update namespace in the TrueNAS CLI. Includes command syntax and common commands." 
weight: 115
aliases:
draft: false
tags:
- update
---


{{< include file="/_includes/CLIGuideWIP.md" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" >}}

The `update` namespace allows users to locate pending updates or available trains and to update the TrueNAS SCALE release using the CLI.

## Update Commands

The **update** namespace has 10 commands and is based on functions found in the SCALE API and web UI.

You can enter commands from the main CLI prompt or from the **update** namespace prompt.

### Check_Available Command
Use the `check_available` command to see if updates are available for the release train specified.
Use the <code>[get_trains](#get_trains-command)</code> command to see the current and selected train dictionary for the system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

<!--{{< expand "Using the Check_Available Command" "v" >}}
 commentingout until the command value for the property is validated
#### Description
The `check_available` command has one property, `update-check-available`. 

#### Usage
From the command prompt, enter:

{{< expand "Command Example" "v" >}}

{{< /expand >}}
{{< /expand >}}
-->

### Download Command
The `download` command downloads the updates for the selected train.

{{< expand "Using the Download Command" "v" >}}
#### Description
The `download` command does not require entering a property or argument
Enter the command, then press <kbd>Enter</kbd>.
The command begins downloading any updates from the current train and shows the status in percentage downloaded.
If an update is not available the system displays an error, then the CLI prompt.

#### Usage
From the command prompt, enter:

`system update download`

{{< expand "Command Example" "v" >}}
```
system update download
[0%]...
[0%] Retrieving update manifest...
```
{{< /expand >}}
{{< /expand >}}

### File Command
The `file` command updates the system using an uploaded file.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

<!-- commenting out until I can validate the updatefile value 
{{< expand "Using the File Command" "v" >}}
#### Description
The `file` command has one property, `updatefile`.
Enter property arguments using `=` to separate property and value.
Enter the command, then <kbd>Enter</kbd>. 
The command returns

#### Usage
From the command prompt, enter:

<code>
{{< expand "Command Example" "v" >}}

{{< /expand >}}
{{< /expand >}} -->

### Get_Auto_Download Command
The `get_auto_download` command returns the status of the auto download function is enabled.

{{< expand "Using the Get_Auto_Download Command" "v" >}}
#### Description
The `get_auto_download` command does not require entering a property or argument.
Enter the command, then <kbd>Enter</kbd>.
The command returns true if auto download is enabled, false if not.

#### Usage
From the command prompt, enter:

`system update get_auto_download`

{{< expand "Command Example" "v" >}}
```
system update get_auto_download
true
```
{{< /expand >}}
{{< /expand >}}

### Get_Pending Command
The `get_pending` command returns a table with a list of packages already downloaded and ready to apply.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

{{< expand "Using the Get_Pending Command" "v" >}}
#### Description
The `get_pending` command has one optional property, `path`.
Enter a property argument using `=` to separate property and value.
Enter the command or command string, then  press <kbd>Enter</kbd>.
The command returns a table listing the operation, old and new upgrade packages (files).

#### Usage
From the command prompt, enter:

`system update get_pending`

{{< expand "Command Example" "v" >}}
```
system update get_pending
+-----------+--------+--------+
| operation | old    | new    |
+-----------+--------+--------+
| upgrade   | <dict> | <dict> |
+-----------+--------+--------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Trains Command
The `get_trains` command shows the available trains dictionary, the currently configured train and the train of the current boot environment on the system.

Use before entering the <code>[check_available](#check_available-command)</code> and <code>[set_train](#set_train-command)</code> commands.
{{< expand "Using the Get_Trains Command" "v" >}}
#### Description
The `get_trains command does not require entering properties or arguments.
Enter the command, then press <kbd>Enter</kbd>.
The command returns a table with the trains dictionary, currently configured train, and selected train of the current boot environment on the system.  

#### Usage
From the command prompt, enter:

`system update get_trains`

{{< expand "Command Example" "v" >}}
```
system update get_trains 
+----------|--------------------------|
|   trains | <dict>                   |
|  current | TrueNAS-SCALE-Cobia-BETA |
| selected | TrueNAS-SCALE-Cobia-BETA |
+----------|--------------------------|
```
{{< /expand >}}
{{< /expand >}}

### Manual Command
The `manual` command updates the system using a manual update file downloaded from the SCALE release train and uploaded to the system using a file transfer program.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until I can verify a path 
{{< expand "Using the Manual Command" "v" >}}
#### Description
The `manual` command has two properties, `path` and `options`.
`path` is a required property.
Enter a property argument using `=` to separate property and value.
Enter a property expecting an array uses the curly brackets `{}` to enclose multiple property arguments enclosed in square brackets []. 
Enter each array property argument enclosed in square brackets, with property and value enclosed in double quotes and seprated by the colon `:`.
A comma `,` and space separate each array property argument enclosed in the `{}`. For example `options={["property1":"value1"], ["property2":"value2"]}
Enter the command or command string, then  press <kbd>Enter</kbd>.

#### Usage
From the command prompt, enter:

`system update manual path=/var/tmp/firmware`
{{< expand "Command Example" "v" >}}
```
system update manual path=/var/tmp/firmware

```
{{< /expand >}}
{{< /expand >}}
-->

#### Performing Manual Updates

To perform a manual update via the TrueNAS CLI, you must first upload a manual update file onto the system.

Connect to your system with your choice of FTP program (such as [WinSCP](https://winscp.net/eng/index.php)) and place the manual update file in **/var/tmp/firmware**.

After it finishes uploading, go to **System Settings > Shell** and enter `cli` at the prompt if the system shell is set to a shell other than **TrueNAS CLI** for the admin user.
From the SCALE CLI, enter:

<code>system update manual path=/var/tmp/firmware/<i>updatefilename</i></code>

Where *updatefilename* is the name of the update file.

### Set_Auto_Download Command
The `set_auto_download` command sets the update to auto-download update files.

{{< expand "Using the Set_Auto_Download Command" "v" >}}
#### Description
The `set_auto_download` command has one required property, `autocheck`.
Enter property arguments using `=` to separate property and value.
Enter the command string, then <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the command prompt, enter:

<code>system update set_auto_download autocheck=<i>true</i></code>

Where *true* sets the system to automatically download update files from the current train, or *false* does not set the system to automatically download update files.

{{< expand "Command Example" "v" >}}
```
system update set_auto_download autocheck=true

```
{{< /expand >}}
{{< /expand >}}

### Set_Train Command
The `set_train` command sets an update train to use by default for updates. Use to change the current train to another available train.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until I can verify a train 
{{< expand "Using the Set_Train Command" "v" >}}
#### Description
The `set_train` command has one property, `train`.
Enter property arguments using `=` to separate property and value.
Enter the command string, then <kbd>Enter</kbd>. 
The command returns 

#### Usage
From the command prompt, enter:

<code>system update set_train train=<i>TrueNAS-SCALE-Cobia-BETA</i></code>

Where *TrueNAS-SCALE-Cobia-BETA* is the name of the release train.
{{< expand "Command Example" "v" >}}
```
system update set_train train=TrueNAS-SCALE-Cobia-BETA

```
{{< /expand >}}
{{< /expand >}}
-->
### Update Command
The `update` command downloads an update, if not already in the cache, and then applies it.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command does not require entering a property or argument.
Enter the command, then press <kbd>Enter</kbd>.
The system begins the download and upgrade process.
If an update is not available the screen shows an error, aborts the process, and returns to the CLI prompt.

#### Usage
From the command prompt, enter:

`system update update`

{{< expand "Command Example" "v" >}}
```
system update update
[0%]
[0%] Retrieving update manifest...
```
{{< /expand >}}
{{< /expand >}}
