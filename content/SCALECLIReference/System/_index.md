---
title: "System"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI system namespace that configures system related settings found in the API and web UI." 
weight: 50
draft: false
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## System Namespace

The **system** namespace has 23 child namespaces and 19 commands, and is based on functions found in the SCALE API and web UI. 
It provides access to system configuration methods through the system namespace commands and the child namespaces and their commands.

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

## System Commands

The **system** namespace has 19 commands based on functions found in the SCALE API and web UI. 

You can enter commands from the main CLI prompt or from the **system** namespace prompt.

### Boot_ID Command

The `boot_id` command returns a unique boot identifier consisting of lowercase aphanumeric characters and dashes. 

{{< expand "Obtaining a Boot ID" "v" >}}
The `boot_id` command does not require entering options or arguments. 
Enter the command, then press <kbd>Enter</kbd>.
The command returns a unique alphanumeric identifier. 

From the CLI prompt, enter:

`system boot_id`

From the **system** prompt, enter:

`boot_id`
{{< expand "Command Example" "v" >}}
```
system boot_id
16b14f52-7da1-a042-bb39c5c0d183
```
{{< /expand >}}
{{< /expand >}}
### Build_Time Command
The `build_time` command returns the date and time of the software build installed and running on the system but not the release name and number. 
Use the `version` or `version_short` commands to see the name and number assigned to the software build.

{{< expand "Obtaining a Build Time" "v" >}}
The `build_time` command does not require entering options or arguments. 
Enter the command, then press <kbd>Enter</kbd>. 
The command returns the date and time of the software build installed and running on the system. 

From the CLI prompt, enter:

`system build_time`

From the **system** prompt, enter:

`build_time`

{{< expand "Command Example" "v" >}}
```
system build_time
16b14f52-7da1-a042-bb39c5c0d183
```
{{< /expand >}}
{{< /expand >}}

### Debug Command
The `debug` command downloads a system debug file to the home directory of the logged in admin user. 
Specify the file name and extension for the debug file in the command string. 
Debug files are usually .tgz files but you can use the extension of your choice.

Use a file transfer application such as WinSCP to connect to the system or a share (SMB, NFS, etc.) created on the system to access the file.

{{< expand "Downloading a Debug File" "v" >}}
Enter the `debug` command followed by the `>` and then the *filename.ext*. 
Press <kbd>Enter</kbd> to begin the download.  
The command displays status of logs downloaded.

From the CLI prompt, enter:

<code>system debug > <i>filename.ext</i></code>

From the **system** prompt, enter:

<code>debug > <i>filename.ext</i></code>

where *filename* is the name of the file and *.ext* is the file extension

{{< expand "Command Example" "v" >}}
<code>
system debug > <i>debugfilename-date.tgz</i>

[0%] ...

[0%] Generating debug file...

[6%] Dump Active Directory Configuration...

[12%] Dump Hardware Configuration...

[18%] Dump iSCSI Configuration...

[25%] Dump Kubernetes Configuration...

[31%] Dump LDAP Configuration...

[37%] Dump Network Configuration...

[44%] Dump NFS Configuration...

[50%] Dump SMART Configuration...

[56%] Dump SMB Configuration...

[63%] Dump SSL Configuration...

[69%] Dump Sysctl Configuration...

[75%] Dump System Information...

[81%] Dump ZFS Configuration...

[86%] Compressing System Logs...

[87%] Compressing Debug Files...

[88%] Truncating Debug Files...

[87%] Copying Core Dumps...

[88%] Collecting Additional Information...

[89%] Compressing Archive...

[90%] Debug generation finished...

[90%] Preparing debug file for streaming...

[100%] Preparing debug file for streaming... 

[100%] Job output (12320768 bytes) saved at 'systemdebug-6-15-2023.tgz'

</code>
{{< /expand >}}
{{< /expand >}}

### Environment Command

The `environment` commands returns the environment in which the product is running. 
Possible values are **DEFAULT** or **EC2**.

{{< expand "Checking the System Environment" "v" >}}
The `environment` command does not require entering options or arguments. 
Enter the command, then press <kbd>Enter</kbd>.
The `environment` command returns the current environment in which the product is running. 

From the CLI prompt, enter:

`system environment`

From the **system** prompt, enter:

`environment`

{{< expand "Command Example" "v" >}}
```
system environment
DEFAULT
```
{{< /expand >}}
{{< /expand >}}

### Feature_Enabled Command

The `feature_enabled` command determines if the feature specified is running. 
Use to determine if the deduplication, fibre channel or virtual machine (VM) feature is enabled or disabled. 

{{< expand "Checking Feature-Enabled Status" "v" >}}
The `feature_enabled` command uses the `feature` option to specify one of three system features, **DEDUP**, **FIBRECHANNEL**, or **VM**, to get the enabled/disabled status of that feature.
Enter the command string, then press <kbd>Enter</kbd>.  
The command returns **true** for an enabled system feature, or **false** for disabled. 

From the CLI prompt, enter:

<code>system feature_enabled feature=<i>option</i></code>

From the **system** prompt, enter:

<code>system feature_enabled feature=<i>option</i></code>

where *options* is `DEDUP`, `FIBRECHANNEL`, or `VM`.

{{< expand "Command Example" "v" >}}
```
system feature_enabled feature=DEDUP
false
```
{{< /expand >}}
{{< /expand >}}

### Host_ID Command

The `host_id` command retrieves a hex string that is generated based on the contents of the **/etc/hostid** file. 
This is a permanent value that persists across reboots/upgrades and can be used as a unique identifier for the machine.

{{< expand "Obtaining System Host ID" "v" >}}
The `host_id` command does not require entering options or arguments.
Enter the command, then press <kbd>Enter</kbd>.  
The `host_id` command returns a string of alphanumeric characters. 

From the CLI prompt, enter:

`system host_id`

From the **system** prompt, enter:

`host_id`

{{< expand "Command Example" "v" >}}
```
system host_id
4c89087092kjfm709oeuanl234noidnvo536vlkujou231noi35n13nn
```
{{< /expand >}}
{{< /expand >}}

### Info Command
The `info` command returns system information. Information includes:

* SCALE version and build time
* System host name
* Hardware information including phyical memory, cores and physical cores, system product and version, manufacturer
* System serial number
* System uptime and uptime seconds, average loading, boot time, and date time
* System timezone
* System license

{{< expand "Obtaining System Information" "v" >}}
The `info` command does not require entering options or arguments.
Enter the command, then press <kbd>Enter</kbd>. 
The command returns a table of system details. 

From the CLI prompt, enter:

`system info`

From the **system** prompt, enter:

`info`

{{< expand "Command Example" "v" >}}
```
system info
+---------------- -------+-----------------------------------------+
|                version | TrueNAS-SCALE-22.12.3                   |
|              buildtime | 2023-06-12T15:32:03+00:00               |
|               hostname | mini-02                                 |
|                physmem | 83--793856                              |
|                  model | Intel(r) Atom(TM) CPU  C2750  @ 2.40GHz |
|                  cores | 8                                       |
|         physical_cores | 8                                       |
|                loadavg | 2.08                                    |
|                        | 1.15                                    |
|                        | 0.94                                    |
|                 uptime | 5 days, 20:01:40.210144                 |
|         uptime_seconds | 504100.210143554                        |
|          system_serial | A1-12345                                |
|         system_product | AMZ-FREENAS-MINII-XL-24TB-IXN           |
| System_product_version |To Be Filled By O.E.M.                   |
|                license | <dict>                                  |
|               boottime | 2023-06-14T18:54:41+00:00               |
|               datetime | 2023-06-14T14:56:21+00:00               |
|               birthday | <null>                                  |
|               timezone | America/New_York                        |
|    system_manufacturer | IXSYSTEMS                               |
|             ecc_memory | true                                    |
+---------------- -------+-----------------------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Is_Freenas Command (Deprecated)
The `is_freenas` command is deprecated. Use [product_type](#product_type-command) command. Applied to TrueNAS CORE systems.

### Is_Stable Command

The `is_stable` command returns whether the system software version is stable. This command is useful if upgrading from a nightly train of an unreleased version.

{{< expand "Verifying Release Stability" "v" >}}
The `is_stable` command does not require entering options or aguments.
Enter the command, then press <kbd>Enter</kbd>.  
The command returns true if stable, false if not. 

From the CLI prompt, enter:

`system is_stable`

From the **system** prompt, enter:

`is_stable`

{{< expand "Command Example" "v" >}}
```
system is_stable
true
```
{{< /expand >}}
{{< /expand >}}

### License_Update Command

The `license_update` command updates the license file. 
This is the license added to the system on the **System Settings > General** screen on the **Support** widget. 

{{< expand "Obtaining System Information" "v" >}}
The `license_update` uses the `license` option to specify the license to update. 
Enclose the license string in double quotes.
Enter the command, then press <kbd>Enter</kbd>.  

The command returns you to the CLI prompt.

From the CLI prompt, enter:

<code>system license_update license="<i>AUZyZWVOQVMgTWluaQAAAABBMS00MDA5MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAADIwMjMwNjIwAAAAANsCAAAAAAAAaVhzeXN0ZW1zOiBJbnRlcm5hbCBVc2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAA==</i>"</code>

From the **system** prompt, enter:

<code>license_update license="<i>AUZyZWVOQVMgTWluaQAAAABBMS00MDA5MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAADIwMjMwNjIwAAAAANsCAAAAAAAAaVhzeXN0ZW1zOiBJbnRlcm5hbCBVc2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAA==</i>"</code>

{{< expand "Command Example" "v" >}}
<code>
system license_update license="<i>AUZyZWVOQVMgTWluaQAAAABBMS00MDA5MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAADIwMjMwNjIwAAAAANsCAAAAAAAAaVhzeXN0ZW1zOiBJbnRlcm5hbCBVc2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAA==</i>"
</code>

{{< /expand >}}
{{< /expand >}}

### Product_Name Command

The `product_name` command returns the name of the product (TrueNAS) in use. 

{{< expand "Verifying Product Name" "v" >}}
The `product_name` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>.  
The command returns **TrueNAS** as the product name.

From the CLI prompt, enter:

`system product_name`

From the **system** prompt, enter:

`product_name`

{{< expand "Command Example" "v" >}}
```
system product_name
TrueNAS
```
{{< /expand >}}
{{< /expand >}}

### Product_Type Command

The `product_type` command returns the name of the product (SCALE) in use. 

{{< expand "Obtaining Product Type" "v" >}}
The `product_type` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>.  
The command returns **SCALE** as the product name.

From the CLI prompt, enter:

`system product_type`

From the **system** prompt, enter:

`product_type`

{{< expand "Command Example" "v" >}}
```
system product_type
SCALE
```
{{< /expand >}}
{{< /expand >}}

### Ready Command

The `ready` command returns whether the system completed the boot process and is ready to use. 
This command is similar to the <code>[state](#state-command)</code> command that provides the status of the system as **READY** or **BOOTING**.

{{< expand "Checking System Ready Status" "v" >}}
The `ready` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>.  
The command returns **true** if the boot completed an the system is ready.

From the CLI prompt, enter:

`system ready`

From the **system** prompt, enter:

`ready`

{{< expand "Command Example" "v" >}}
```
system ready
true
```
{{< /expand >}}
{{< /expand >}}

### Reboot Command

The `reboot` command reboots the system. It is the CLI equivalent to the UI power button option to restart the system.

{{< expand "Rebooting the System" "v" >}}
The `reboot` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>. 
The option to include `system-reboot` and specify a value exists but is not required to reboot the system. 

From the CLI prompt, enter:

`system reboot`

From the **system** prompt, enter:

`reboot`

{{< expand "Command Example" "v" >}}
```
system reboot
[0] ...
[100] ...
```
{{< /expand >}}
{{< /expand >}}

### Shutdown Command

The `shutdown` command exits the UI and shuts down the system. It is the CLI equivalent to the UI power button option to shutdown the system.

{{< expand "Shutting Down the System" "v" >}}
The `shutdown` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>. 
The option to include `system-shutdown` and specify a value exists, but is not required to shut down the system. 

From the CLI prompt, enter:

`system shutdown`

From the **system** prompt, enter:

`shutdown`

{{< expand "Command Example" "v" >}}
```
system shutdown
[0] ...
[100] ...
```
{{< /expand >}}
{{< /expand >}}

### State Command

The `state` command returns the current system state as either booting, ready, or shutting down. 
Use to determine the system state if uncertain of the current state. This command is similar to the <code>[ready](#ready-command)</code> command that indicates if the system completed the boot process and is ready.

{{< expand "Determining System State" "v" >}}
The `state` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>. 
The command returns the current state as **BOOTING** when the sytem is booting, **READY** when the system is either not booting or shutting down, or **SHUTTING_DOWN** if the system is shutting down.

From the CLI prompt, enter:

`system state`

From the **system** prompt, enter:

`state`

{{< expand "Command Example" "v" >}}
```
system state
READY
```
{{< /expand >}}
{{< /expand >}}

### Version Command

The `version` command returns the system full software version name and number. 
If uncertain of your SCALE release, enter this or the <code>[version_short](#version_short-command)</code> command to view the currently-installed version number.

{{< expand "Viewing the Software Version Name" "v" >}}
The `version` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>. 

From the CLI prompt, enter:

`system version`

From the **system** prompt, enter:

`version`

{{< expand "Command Example" "v" >}}
```
system version
TrueNAS-SCALE-22.12.3
```
{{< /expand >}}
{{< /expand >}}

### Version_Short Command

The `version_short` command returns the system software version number. 
If uncertain of your SCALE release, enter this or the <code>[version](#version-command)</code> command to view the currently-installed version name.

{{< expand "Viewing the Software Version Number" "v" >}}
The `version_short` command does not require an option or argument.
Enter the command, then press <kbd>Enter</kbd>. 

From the CLI prompt, enter:

`system version_short`

From the **system** prompt, enter:

`version_short`

{{< expand "Command Example" "v" >}}
```
system version_short
22.12.3
```
{{< /expand >}}
{{< /expand >}}

## System Namespaces
The following articles provide information on **system** child namespaces:

{{< children depth="2" description="true" >}}

