---
title: "Service"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI service namespace, used to access child namespaces and commands including cluster, ctdb, dyndns, ftp, gluster, ipmi, nfs, openvpn, rsync, rsync_mod, s3, smart, smb, snmp, ssh, tftp, vm, and webdav." 
weight: 35
draft: false
aliases:
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Service Commands

The **service** namespace has 10 commands and 12 child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to service configuration and validation methods for the 10 **service** commands. 
The 12 child namespaces have their own commands.

You can enter commands from the main CLI prompt or from the **service** namespace prompt.

### Get_Instance Command

The `get_instance` command displays the id, name, and status of a service. 

{{< expand "Checking the Status of a Service" "v" >}}
The `get_instance` command requires you to include the `id` option in the command string. After entering the command correctly, it returns a table with multiple outputs.

From the CLI prompt, enter:

<code>service get_instance id=<i>number</i></code>

From the **service** prompt, enter:

<code>get_instance id=<i>number</i></code>

Where:
* `number` is the service id. For example, if the ssh service id is 11, enter 11.

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
The `query` command has no additional requirements. After entering the command, it returns a table with multiple outputs.

From the CLI prompt, enter:

<code>service query</code>

From the **service** prompt, enter:

<code>query</code>

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
The `reload` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service reload service=<i>name</i></code>

From the **service** prompt, enter:

<code>reload service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

*Possible states:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true` | Indicates the service reloaded. |
| `false`| Indicates the service did not reload. |
{{< /truetable >}}

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
The `restart` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service restart service=<i>name</i></code>

From the **service** prompt, enter:

<code>restart service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

* *Possible returns:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true` | The service restarted successfully. |
| `false`| The service did not restart. |
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
The `start` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service start service=<i>name</i></code>

From the **service** prompt, enter:

<code>start service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

*Possible returns:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true` | The service started successfully. |
| `false`| The service did not start. |
{{< /truetable >}}

{{< expand "Command Example" "v" >}}
```
start service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Started Command

The `started` command verifies whether or not a `start` command succeeded for a specified service.

*Possible returns:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true` | The service started successfully. |
| `false`| The service did not start. |
{{< /truetable >}}

{{< expand "Verifying a Service Started" "v" >}}
The `started` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service started service=<i>name</i></code>

From the **service** prompt, enter:

<code>started service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
started service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Started_or_Enabled Command

The `started_or_enabled` command displays whether or not a service will start automatically upon reboot or is running.

*Possible returns:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `true` | The service restarts automatically and/or is running. |
| `false`| The service is not running, nor will it start automatically. |
{{< /truetable >}}

{{< expand "Verifying a Service State and Enable Status" "v" >}}
The `started_or_enabled` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service started_or_enabled service=<i>name</i></code>

From the **service** prompt, enter:

<code>started_or_enabled service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
started_or_enabled service=ssh
true

```
{{< /expand >}}
{{< /expand >}}

### Stop Command

The `start` command restarts a specified service.

*Possible returns:*
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `false`| The service stopped or is not running. |
{{< /truetable >}}

{{< expand "Stopping a Service" "v" >}}
The `stop` command requires you to include the `service` option in the command string. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service stop service=<i>name</i></code>

From the **service** prompt, enter:

<code>stop service=<i>name</i></code>

Where:
* `name` is the service name. For example, enter ssh for the ssh service.

{{< expand "Command Example" "v" >}}
```
stop service=ssh
false

```
{{< /expand >}}
{{< /expand >}}

### Terminate_Process Command

The `terminate_process` command forces a service to stop and disables it.

The command only returns with `true` to show that the service stopped or is not running. 

{{< expand "Stopping a Service" "v" >}}
The `terminate_process` command requires you to include the `pid` option in the command string. You may also include the `timeout` option (not required) to specify the amount of time (in seconds) the system should attempt to terminate the service. After entering the command correctly, it returns either a true or false output.

From the CLI prompt, enter:

<code>service terminate_process pid=<i>number</i> timout=<i>number</i></code>

From the **service** prompt, enter:

<code>terminate_process pid=<i>number</i> timout=<i>number</i></code>

Where:
* `number` is the pid (process id) and the number of seconds before the task times out. For example, 108648 and 1 to try terminating process 108648 for 10 seconds.

{{< expand "Command Example" "v" >}}
```
terminate_process pid=108648 timeout=true
true

```
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command lets you decide whether or not you want a service to start automatically upon system reboot.

{{< expand "Stopping a Service" "v" >}}
The `update` command requires you to include the `id_or_name` and `enable` options in the command string.

From the CLI prompt, enter:

<code>service update id_or_name=<i>number/name</i> enable=<i>true/false</i></code>

From the **service** prompt, enter:

<code>update id_or_name=<i>number/name</i> enable=<i>true/false</i></code>

Where:
* `number/name` is the service id name. For example, enter 11 or ssh for the ssh service.
* `true/false` enables (true) or disables (false) the start automatically feature.

{{< expand "Command Example" "v" >}}
```
update id_or_name=ssh enable=true

```
{{< /expand >}}
{{< /expand >}}
