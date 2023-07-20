---
title: "Service"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI service namespace and provides access to child namespaces and commands including cluster, ctdb, dyndns, ftp, gluster, ipmi, nfs, openvpn, rsync, rsync_mod, s3, smart, smb, snmp, ssh, tftp, vm, and webdav." 
weight: 35
draft: false
aliases:
---

{{< toc >}}

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

## Service Commands

The **service** namespace has 10 commands and 12 child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to service configuration and validation methods for the 10 **service** commands. 
The 12 child namespaces have their own commands.

You can enter commands from the main CLI prompt or from the **service** namespace prompt.

### Get_Instance Command

The `get_instance` command displays the id, name, and status of a service. 

{{< expand "Checking the Status of a Service" "v" >}}
#### Description
The `get_instance` command requires you to include the `id` property in the command string. 
Enter the command, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns a table with multiple outputs.

#### Usage
From the CLI prompt, enter:

<code>service get_instance id=<i>number</i></code>

Where *number* is the service id. For example, if the ssh service id is 11, enter 11.

{{< expand "Command Example" "v" >}}
```
get_instance id=11
+---------+--------------+
|      id | 11           |
| service | ssh          |
|  enable | false        |
|   state | STOPPED      |
|    pids | <empty list> |
+---------+--------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command

The `query` command displays a simple overview of all services. 

{{< expand "Running a Simple Query" "v" >}}
#### Description
The `query` command does not require entering properties or arguments. 
Enter the command, then press <kbd>Enter</kbd>.
After entering the command, it returns a table with multiple outputs.

#### Usage
From the CLI prompt, enter:

<code>service query</code>

{{< expand "Command Example" "v" >}}
```
service> query
+----+-------------+--------+---------+--------------+
| id | service     | enable | state   | pids         |
+----+-------------+--------+---------+--------------+
| 4  | cifs        | false  | STOPPED | <empty list> |
| 6  | ftp         | false  | STOPPED | <empty list> |
| 7  | iscsitarget | false  | STOPPED | <empty list> |
| 9  | nfs         | false  | STOPPED | <empty list> |
| 10 | snmp        | false  | STOPPED | <empty list> |
| 11 | ssh         | false  | STOPPED | 98638        |
| 14 | ups         | false  | STOPPED | <empty list> |
| 18 | smartd      | false  | STOPPED | 3079         |
| 26 | glusterd    | false  | STOPPED | <empty list> |
+----+-------------+--------+---------+--------------+
```
{{< /expand >}}
{{< /expand >}}

### Reload Command

The `reload` command reloads a specified service.

{{< expand "Reloading a Service" "v" >}}
#### Description
The `reload` command requires you to include the `service` property in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output. 
True indicates the service reloaded. False indicates the service did not reload.

#### Usage
From the CLI prompt, enter:

<code>service reload service=<i>name</i></code>

From the **service** prompt, enter:

<code>reload service=<i>name</i></code>

Where *name* is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
reload service=ssh
true
```
{{< /expand >}}
{{< /expand >}}

### Restart Command

The `restart` command restarts a specified service.

{{< expand "Restarting a Service" "v" >}}
#### Description
The `restart` command requires you to include the `service` property in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
True indicates the service restarted successfully. False indicates the service did not restart.

#### Usage
From the CLI prompt, enter:

<code>service restart service=<i>name</i></code>

Where *name* is the service name. For example, enter ssh for the ssh service.

{{< /truetable >}}

{{< expand "Command Example" "v" >}}
```
restart service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Start Command

The `start` command restarts a specified service.

{{< expand "Restarting a Service" "v" >}}
#### Description
The `start` command requires you to include the `service` property in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
True indicates the service started successfully. False indicates the service did not start.

#### Usage
From the CLI prompt, enter:

<code>service start service=<i>name</i></code>

Where *name* is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
start service=ssh
true
```
{{< /expand >}}
{{< /expand >}}

### Started Command

The `started` command verifies whether a `start` command succeeded for a specified service.

{{< expand "Verifying a Service Started" "v" >}}
#### Description
The `started` command requires you to include the `service` option in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
True indicates the service started successfully. False indicates the service did not start.

#### Usage
From the CLI prompt, enter:

<code>service started service=<i>name</i></code>

Where *name* is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
started service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Started_or_Enabled Command

The `started_or_enabled` command displays whether a service starts automatically upon reboot or is running.

{{< expand "Verifying a Service State and Enable Status" "v" >}}
#### Description
The `started_or_enabled` command requires you to include the `service` option in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
True indicates the service restarts automatically and/or is running. False indicates the service is not running, nor does start automatically.

### Usage
From the CLI prompt, enter:

<code>service started_or_enabled service=<i>name</i></code>

Where *name*  is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
started_or_enabled service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Stop Command

The `start` command restarts a specified service.

{{< expand "Stopping a Service" "v" >}}
#### Description
The `stop` command requires you to include the `service` option in the command string. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
True indicates the service started or is running. False indicates the service stopped or is not running.

#### Usage
From the CLI prompt, enter:

<code>service stop service=<i>name</i></code>

Where *name* is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
stop service=ssh
false

```
{{< /expand >}}
{{< /expand >}}

### Terminate_Process Command

The `terminate_process` command forces a service to stop and disables it.

{{< expand "Stopping a Service" "v" >}}
#### Description
The `terminate_process` command requires you to include the `pid` proptery in the command string.
You can also include the `timeout` property (not required) to specify the amount of time (in seconds) the system should attempt to terminate the service. 
Enter the command string, then press <kbd>Enter</kbd>.
After entering the command correctly, it returns either a true or false output.
The command only returns `true` to show that the service stopped or is not running. 

#### Usage
From the CLI prompt, enter:

<code>service terminate_process pid=<i>number</i> timout=<i>number</i></code>

Where *number* is the pid (process id) and the number of seconds before the task times out. 
For example, 108648 and 1 to try terminating process 108648 for 10 seconds.

{{< expand "Command Example" "v" >}}
```
terminate_process pid=108648 timeout=true
true

```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command updates the service specified and lets you decide whether or not you want a service to start automatically upon system reboot.

{{< expand "Updating a Service" "v" >}}
#### Description
The `update` command requires you to include the `id_or_name` and `enable` property in the command string.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>service update id_or_name=<i>number/name</i> enable=<i>true/false</i></code>

Where:
* *number/name* is the service id name. For example, enter 11 or ssh for the ssh service.
* *true/false* enables the start automatically feature if the value is `true` or disables start automatically if the value is `false`.

{{< expand "Command Example" "v" >}}
```
update id_or_name=ssh enable=true

```
{{< /expand >}}
{{< /expand >}}

## Service Namespaces
The following articles provide information on **service** child namespaces:

{{< children depth="2" description="true" >}}