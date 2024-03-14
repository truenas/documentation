---
title: "Failover"
description: "Provides information about the system failover namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 50
aliases:
- /scaleclireference/system/clifailover/
draft: false
tags:
- failover
- enterprise
- HA
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Failover Namespace

{{< enterprise >}}
On licensed systems, use the **Failover** namespace to manage HA system controllers and failover operations for Enterprise customer.
Systems without an Enterprise license do not use this namespace.
{{< /enterprise >}}

The **failover** namespace has 14 commands and is based on failover functions found in the SCALE API and web UI.
It provides access to Enterprise HA customer management methods through the **failover** namespace commands.

## Failover Commands

The following **failover** namespace commands allow you to perform failover operations for Enterprise customer systems. 

You can enter commands from the main CLI prompt or from the **failover** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

###  Config Command
The `config` command displays failover configuration setting (ID, disabled status, timeout, and master/slave) information.

{{< expand "Using the Config Command" "v" >}}
#### Description
`config` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the id, disabled, timeout and master/slave status.

#### Usage
From the CLI prompt, enter:

`system failover config`

{{< expand "Command Example" "v" >}}
```
system failover config
+----------+-------+
|       id | 1     |
| disabled | false |
|  timeout | 0     |
|   master | true  |
+----------+-------+
```
{{< /expand >}}
{{< /expand >}}

###  Control Command
The `control` command provides enabled/disabled status of failover control. 

{{< expand "Using the Control Command" "v" >}}
#### Description
`control` has two required properties, `action` and `options`.
`action` has two values, `ENABLE` and `DISABLE`.
`options` has one property argument, `active` with the default set to `true`. 
Enter the `options` default `options={}` to determine if control is active or disabled.
Enter the command string then press <kbd>Enter</kbd>.
The command returns `true` if enabled, `false` if not.

#### Usage
From the CLI prompt, enter:

`system failover control action=<i>ENABLE</i> options={}`

Where *ENABLED* is the failover control state. 

{{< expand "Command Example" "v" >}}
```
system failover control action=ENABLE options={}
false
```
{{< /expand >}}
{{< /expand >}}

###  Disabled Command
The `disabled` command returns a list of reasons if the system failover is disabled.

{{< expand "Using the Disabled Command" "v" >}}
#### Description
`disabled` has one require property, `reasons`, but is not entered as an argument.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a list of disabled reasons, or an empty list if the system is not disabled.

{{< expand "Disabled Reasons" "v" >}}
{{< truetable >}}
| Reason | Description |
|--------|-------------|
| `NO_VOLUME` | There are no pools configured. |
| `NO_VIP` | There are no interfaces configured with Virtual IP. NO_SYSTEM_READY - Other storage controller has not finished booting. |
| `NO_PONG` | Other storage controller is not communicable. |
| `NO_FAILOVER` | Failover is administratively disabled. |
| `NO_LICENSE` | Other storage controller has no license. |
| `DISAGREE_VIP` | Nodes Virtual IP states do not agree. |
| `MISMATCH_DISKS` | The storage controllers do not have the same quantity of disks. |
| `MISMATCH_VERSIONS` | TrueNAS software versions do not match between storage controllers. |
| `NO_CRITICAL_INTERFACES` | No network interfaces are marked critical for failover. |
| `NO_FENCED` | Zpools are imported but fenced isn't running. |
| `LOC_FAILOVER_ONGOING` |This node is currently processing a failover event.  |
| `REM_FAILOVER_ONGOING` | Other node is currently processing a failover event.  |
| `NO_HEARTBEAT_IFACE` | Local heartbeat interface does not exist. |
| `NO_CARRIER_ON_HEARTBEAT` | Local heartbeat interface is down. |
| `(empty list)` | Returned if failover is enabled and functional. |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

`system failover disabled reasons`

{{< expand "Command Example" "v" >}}
```
system failover disabled reasons
(empty list)
```
{{< /expand >}}
{{< /expand >}}

###  Force_Master Command
The `force_master` command forces the current controller to become master if it is the standby.

{{< expand "Using the Force_Master Command" "v" >}}
#### Description
`force_master` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns true if the standby controller becomes master, false if the controller is already the master..

#### Usage
From the CLI prompt, enter:

`system failover force_master`

{{< expand "Command Example" "v" >}}
```
system failover force_master
false
```
{{< /expand >}}
{{< /expand >}}

### Get_Ips Command

The `get_ips` command returns a list of IP addresses configured for the failover service but not details on what they are assigned to.

{{< expand "Using the Get_Ips Command" "v" >}}
#### Description
`get_ips` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns the configured IP addresses but not details on what they are assigned to.

#### Usage
From the CLI prompt, enter:

`system failover get_ips`

{{< expand "Command Example" "v" >}}
```
system failover get_ips
http://10.220.148.12
http://10.220.16.85
https://10.220.148.12
https://10.220.16.85
```
{{< /expand >}}
{{< /expand >}}

###  Hardware Command
The `hardware` command returns the failover configuration information.

{{< expand "Using the Hardware Command" "v" >}}
#### Description
`hardware` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns the hardware information.

#### Usage
From the CLI prompt, enter:

`system failover hardware`

{{< expand "Command Example" "v" >}}
```
system failover hardware
ECHOWARP
```
{{< /expand >}}
{{< /expand >}}

###  In_Progress Command
The `in_progress` command provides verification of an in-progress failover event.

{{< expand "Using the In_Progress Command" "v" >}}
#### Description
`in_progress` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns true if the failover is in progress, false if not.

#### Usage
From the CLI prompt, enter:

`system failover in_progress`

{{< expand "Command Example" "v" >}}
```
system failover in_progress
false
```
{{< /expand >}}
{{< /expand >}}

###  Licensed Command
The `licensed` command checks whether this system is licensed as an HA system.

{{< expand "Using the Licensed Command" "v" >}}
#### Description
`licensed` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns true if the system is licensed as an HA system, false if not.

#### Usage
From the CLI prompt, enter:

`system failover licensed`

{{< expand "Command Example" "v" >}}
```
system failover licensed
true
```
{{< /expand >}}
{{< /expand >}}

###  Node Command
The `node` command returns the controller (node) status.

{{< expand "Using the Node Command" "v" >}}
#### Description
`node` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns the controller (node) designation (A or B). A is controller 1 or the primary, B is controller 2 or the standby.

#### Usage
From the CLI prompt, enter:

`system failover node`

{{< expand "Command Example" "v" >}}
```
system failover node
A
```
{{< /expand >}}
{{< /expand >}}

###  Status Command
The `status` command returns the current HA status as either master or slave.

{{< expand "Using the Status Command" "v" >}}
#### Description
`status` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns `MASTER` for the primary controller, or `SLAVE` for the standby controller.

#### Usage
From the CLI prompt, enter:

`system failover status`

{{< expand "Command Example" "v" >}}
```
system failover status
MASTER
```
{{< /expand >}}
{{< /expand >}}

###  Sync_From_Peer Command
The `sync_from_peer` command sync failover configuration settings from the other controller. 
This command is the same as the **Sync From Peer** function on the [Failover Screen]({{< relref "FailoverScreen.md" >}}).

{{< expand "Using the Sync_From_Peer Command" "v" >}}
#### Description
`sync_from_peer` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns and emnpty line.

#### Usage
From the CLI prompt, enter:

`system failover sync_from_peer`

{{< expand "Command Example" "v" >}}
```
system failover sync_from_peer

```
{{< /expand >}}
{{< /expand >}}

###  Sync_To_Peer Command
The `sync_to_peer` command initiates a sync operation that copies over the primary controller configuration to the standby controller.

This command is the same as the **Sync To Peer** function on the [Failover Screen]({{< relref "FailoverScreen.md" >}}).

{{< expand "Using the Sync_To_Peer Command" "v" >}}
#### Description
`sync_to_peer` has one required property, `options`. 
`options` has one required property argument, `reboot`. 
`reboot` is either `true` to reboot after syncing to peer, or `false` to not reboot.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

`system failover sync_to_peer options={}`

{{< expand "Command Example" "v" >}}
```
system failover sync_to_peer

```
{{< /expand >}}
{{< /expand >}}

###  Upgrade_Pending Command
The `upgrade_pending` command verifies if HA upgrade is pending. 

Use `upgrade_finish` to finish the HA upgrade process if this command returns true.

{{< expand "Using the Upgrade_pending Command" "v" >}}
#### Description
`upgrade_pending` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.
The command returns true if the there is a pending upgrade, false if not.

#### Usage
From the CLI prompt, enter:

`system failover upgrade_pending`

{{< expand "Command Example" "v" >}}
```
system failover upgrade_pending
false
```
{{< /expand >}}
{{< /expand >}}

###  Upgrade_Finish Command
The `upgrade_finish` command perform the last stage of an HA upgrade and activates the new boot environment on the standby controller after it reboots.

{{< expand "Using the Upgrade_Finish Command" "v" >}}
#### Description
`upgrade_finish` does not require entering properties or arguments.
Enter the command then press <kbd>Enter</kbd>.

#### Usage
From the CLI prompt, enter:

`system failover upgrade_finish`

{{< expand "Command Example" "v" >}}
```
system failover upgrade_finish
[0%] ...
[0%] Ensuring the Standby Controller is booted...
[0%] Activating new boot environment...
```
{{< /expand >}}
{{< /expand >}}
