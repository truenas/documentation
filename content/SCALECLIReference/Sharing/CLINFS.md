---
title: "NFS"
description: "Provides information about the sharing nfs namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 30
aliases:
draft: false
tags:
- nfs
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## NFS Namespace
The **nfs** namespace has five command(s), and is based on share creation and management functions found in the SCALE API and web UI.
It provides access to NFS share methods through the **nfs** commands.

## NFS Commands
The following **nfs** commands allow you to create new shares, manage existing shares, get information on NFS shares on the system

You can enter commands from the main CLI prompt or from the **sharing** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command
The `create` command adds a new NFS share.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

{{< expand "Using the Create Command" "v" >}}

#### Description  
The `create` has one required property, `path`.
The **Create Command Optional Properties** section below lists the 12 optional properties.
Enter a property argument using the `=` delimiter to separate property and value. Enter a string value enclosed in double quotes.
<!-- commenting out this section until syntax and the aliases option can be validated
If entering a property argument with multiple values, enclose the values in square brackets `[]`, use double quotes around each value, and separate each with a comma and space.
Properties arguments for an array use the `{}` curly brackets to enclose property arguments. 
Enclose array property arguments in `[]`square brackets, with both property and values double-quoted and using either the `:` or `=` delimiter to separate them. 
Separate multiple array property arguments within the `{}` with a comma and space. -->
Enter the command string, then press <kbd>Enter</kbd>.

`create` returns an empty line.
Use the `query` command to verify the share was created and to view details of the share.
{{< expand "Create Command Optional Properties" "v" >}}
{{< truetable >}}
These optional properties are also used with the `update` command.
<!-- aliases option syntax correct but command fails, commenting it out for now 
| `aliases` | Enter a path to a symbolic target directory. Enclose an alias in double quotes. If entering multiple aliases, use the square brackets `[]` to enclose each double-quoted alias, then separate each with a comma and space. | For example, aliases="/nfs2" or alias=["/nfs2", "/shares/nfs2"]. | -->
| Command | Description |Syntax Example |
|---------|-------------|---------------|
| `aliases` | This option is a Work in Progress. |  |
| `comment` | Enter a description for the share. Enclose the string in double quotes. | <code>comment="<i>For read only access</i>"</code> |
| `networks` | Specify a list of network IP addresses with CIDR notation allowed to access this share. Leave empty to allow all. Enter the network values enclosed in square brackets `[]`. Enclose each IP address/CIDR value in double quotes and separate multiple network values with a comma and space. | <code>networks=["<i>1.2.3.0/24<i/>", "<i>1.2.2.2/21</i>"]</code> |
| `hosts` | Specify a list of network IP addresses with CIDR notation or hostnames allowed to access this share. Leave empty to allow all. Enter the network values enclosed in square brackets `[]`. Enclose each IP address/CIDR or hostname value in double quotes and separate multiple network values with a comma and space. | <code>networks=["<i>1.2.3.0/24<i/>", "<i>truenas.com</i>"]</code> |
| `ro` | Set to `true` to prohibit writing to the share or `false` to allow writing to the share. | `ro=true` or `ro=false` |
| `quiet` | Do not use. |  |
| `maproot_user` | Enter a username to limit the root user to the permissions of that user. | <code>maproot_user=<i>admin</i></code> |
| `maproot_group` | Enter a group name to limit the root user to the permissions of that group. | <code>mapgroup=<i>admin</i></code>  |
| `mapall_user` | Enter a username set all clients to use the specified permissions of that user. | <code>mapall_user=<i>admin</i></code> |
| `mapall_group` | Enter a group name set all clients to use the specified permissions of that group. | <code>mapall_group=<i>admin</i></code> |
| `security` | Sets the security for the share to one of four options: <br><li>`SYS` to set the share to use locally acquired UID and GID permissions. <br><li>`KRB5` to set the share to use Kerberos V5 user authentication. <br><li>`KRB5i` to set the share to use Kerberos V5i for user authentication and perform integrity checking of NFS operations using secure checksums to prevent data tampering. <br><li>`KRB5P` to set the share to use Kerberos V5 user authentication and integrity checking that encrypts NFS traffic to prevent traffic sniffing.</li> | `security=SYS` |
| `enabled` | Set to `true` to enable this share or `false` to disable the share without deleting it. | `enable=true` or `enable=false` |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>"</code>

Where *mnt/tank/shares/nfs2* is the path to the dataset created for the share.

If using optional property arguments, for example, to set networks and read only access, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>" networks=<i>10.123.12.1/24 10.123.11.2/23</i> ro=<i>true</i></code>

Where:
* *mnt/tank/shares/nfs2* is the path to the dataset created for the share.
* *10.123.12.1/24 10.123.11.2/23* are the space-separated IP addresses with CIDR notation for each network you allow to connect to the share.
* *true* sets the share to read only or *false* to allow write access to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs create path=/mnt/tank/shares/nfs2

```
{{< /expand >}}
{{< /expand >}}

### Delete Command
The `delete` command deletes an NFS share.  

{{< expand "Using the Delete Command" "v" >}}

#### Description  
The `delete` command has one required property, `id`.
Enter a property argument using the `=` delimiter to separate property and value and enclose the value in double quotes.
Enter the command string, then press <kbd>Enter</kbd>.

`delete` returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>sharing nfs delete id="<i>4</i>"</code>

Where *4* is the ID assigned to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs delete id=4

```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command
The `get_instance` command retrieves information for an NFS share matching the `id` entered in the command string.
Use to verify properties for the configured share.

{{< expand "Using the Get_Instance Command" "v" >}}

#### Description  
The `get_instance` command has one required property, `id`.
Enter the command, then press <kbd>Enter</kbd>.
`get_instance` returns a table (dictionary) of properties for the ID entered.
The dictionary includes the share ID, path, aliases, comment, networks, hosts entered, the read only, quiet, and locked status as true or false, value for maproot and mapall users and groups, security applied, and the enabled status as true or false.

Use the `query` command to locate the ID number for the share.

#### Usage
From the CLI prompt, enter:

<code>sharing nfs get_instance id=<i>1</i></code>

Where *1* is the ID number for the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs get_instance id=1 
+---------------+-----------------------+
|            id | 1                     |
|          path | /mnt/tank/shares/nfs  |
|       aliases | <empty list>          |
|       comment |                       |
|         hosts | <empty list>          |
|            ro | false                 |
|         quiet | false                 |
|  maproot_user | <null>                |
| maproot_group | <null>                |
|   mapall_user | <null>                |
|  mapall_group | <null>                |
|      security | <empty list>          |
|       enabled | true                  |
|      networks | <empty list>          |
|        locked | false                 |
+---------------+-----------------------+
```
{{< /expand >}}
{{< /expand >}}

### Query Command
The `query` command returns a table (dictionary) of all NFS shares on the system.
Use to locate the share ID number and other configuration information.

{{< expand "Using the Query Command" "v" >}}

#### Description  
The `query` does not require entering property arguments.
Enter the command, then press <kbd>Enter</kbd>.
The `query` returns a table (dictionary) of all NFS shares configured on the system.
Information includes the ID, path, aliases, any comments, networks hosts, read only status, maproot user and group, mapall user and group, security, enabled, and locked status.

#### Usage
From the CLI prompt, enter:

`sharing nfs query'

{{< expand "Command Example" "v" >}}
```
sharing nfs query
+----+-----------------------+--------------+------------+-------+-------+--------------+---------------+-------------+--------------+--------------+---------+--------------+-------+
| id | path                  | aliases      | comment    | ro    | quiet | maproot_user | maproot_group | mapall_user | mapall_group | security     | enabled | networks     | Locked |
| 1  | /mnt/tank/shares/nfs  | <empty list> | test share | false | false |              |               |             |              | <empty list> | true    | <empty list> | false |
| 2  | /mnt/tank/shares/nfs2 | <empty list> |            | false | false | <null>       | <null>        | <null>      | <null>       | <empty list> | true    | <empty list> | false |
+----+-----------------------+--------------+------------+-------+-------+--------------+---------------+-------------+--------------+--------------+---------+--------------+-------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command returns a table (dictionary) of all NFS shares on the system.
Use to locate the share ID number and other configuration information.

{{< expand "Using the Update Command" "v" >}}

#### Description  
The `update` has one required property, `id`.
This command uses the optional share properties listed in **Create Command Optional Properties** found in the **[Create Command](#create-command)** section.
Follow the syntax examples provided for each property.
Enter the command string, then press <kbd>Enter</kbd>.
`update` returns an empty line.

#### Usage
To add or change a comment for a share, from the CLI prompt, enter:

<code>sharing nfs update id=<i>4</i> comment="<i>test share</i>"</code>

Where
* *4* is the ID number assigned to the share to update.
* *test share* is the comment to add to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs update id=4 comment="test share"

```
{{< /expand >}}
{{< /expand >}}
