---
title: "NFS"
description: "Provides information about the sharing nfs namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 30
aliases:
draft: false
tags:
- scaleclisharing
- scalenfs
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}


## NFS Namespace
The **nfs** namespace has five command(s), and is based on share creationg and management functions found in the SCALE API and web UI.
It provides access to NFS share methods through the **nfs** commands.

You can enter commands from the main CLI prompt or from the **nfs** namespace prompt.


## NFS Commands 
The following **nfs** commands allow you to create new shares, manage existing shares, get information on NFS shares on the system

You can enter commands from the main CLI prompt or from the namespace namespace prompt.

{{< include file="/_includes/CLI/CLIGuideWIP.md" type="page" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" type="page" >}}

### Create Command 
The `create` command adds a new NFS share.  

{{< expand "Creating an NFS Share" "v" >}}

#### Description  
The `create`  has 1 required property, `path` and 12 optional properties listed below to include in the command string. 
Enter a property argument using the `=` delimiter to separate property and value. Enter a string value enclosed in double quotes. 
If entering a property argument with multiple values, enclose the values in square brackets `[]`, use double quotes around each value, and separate each with a comma and space.
Properties arguments for an array use the `{}` curly brackets to enclose property arguments. 
The array property arguments are enclosed in `[]`square brackets, with both property and values double-quoted and using either the `:` or `=` delimiter to separate them. 
Multiple array property arguments within the `{}` are separated by a comma and space. 
See array example in the **Usage** section below.

The `create` returns and empty line.

Use the `query` command to verify the share was created and to view details on the share.
{{< expand "Create Command Optional Properties" "v" >}}
{{< truetable >}}
These optional properties are also used with the `update` command.
| Command | Description |Syntax Example |
|---------|-------------|---------------| 
<!-- aliases option syntax correct but command fails, commenting it out for now 
| `aliases` | Enter a path to a symobolic target directory. Enclose a single alias in double quotes or if entering multiple aliases, use the square brackets `[]` to enclose each double-quoted alias separated by a comma and space. | For example, aliases="/nfs2" or aliase=["/nfs2", "/shares/nfs2"]. | -->
| `aliases` | This option is a Work in Progress. | |
| `comment` | Enter a description for the share. Enclose the string in double quotes. | <code>comment="<i>For read only access</i>". |
| `networks` | Specify a list of network IP addresses with CIDR notation allowed to access this share. Leave empty to allow all. Enter the network values enclosed in square brackets `[]`. Enclose each IP address/CIDR value in double quoutes and separate multiple network values with a comma and space. | <code>networks=["<i>1.2.3.0/24<i/>", "<i>1.2.2.2/21</i>"]</code>. |
| `hosts` | Specify a list of network IP addresses with CIDR notation or hostnames allowed to access this share. Leave empty to allow all. Enter the network values enclosed in square brackets `[]`. Enclose each IP address/CIDR or hostname value in double quoutes and separate multiple network values with a comma and space. | <code>networks=["<i>1.2.3.0/24<i/>", "<i>truenas.com</i>"]</code>. |
| `ro` | Set to `true` to prohibit writing to the share, or `false` to allow writing to the share. | `ro=true- or `ro=false`. |
| `quiet` | Set to `true` to xxxxx , or `false` to xxxxx . | `quiet=true` or `quiet=false`. |
| `maproot_user` | Enter a username to limit the root user to the permissions of that user. | <code>maproot_user=<i>admin</i></code>. |
| `maproot_group` | Enter a group name to limit the root user to the permissions of that group. | <code>mapgroup=<i>admin</i></code>.  |
| `mapall_user` | Enter a username set all clients to use the specified permissions of that user. | <code>mapall_user=<i>admin</i></code>.  |
| `mapall_group` | Enter a group name set all clients to use the specified permissions of that group. | <code>mapall_group=<i>admin</i></code>.  |
| `security` | Sets the security for the share to one of four options: <br>SYS which sets the share to use locally acquired UID and GID permissions. <br><li>KRB5 which sets the share to use Kerberose V5 user authentication. <br><li>KRB5i which sets the share to use Kerberose V5i for user authentication and perform integrity checking of NFS operations using secure checksums to prevent data tampering. <br><li>KRB5P which set the share to use Kerberose V5 user authentication and integrity checking that encrypts NFS traffic to prevent traffic sniffing.</li> | `security=SYS`. |
| `enabled` | Set to `true` to enable this share, or `false` to disable the share without deleting it. | `enable=true` or `enable=false`. |
{{< /truetable >}}
{{< /expand >}}

#### Usage 
From the CLI prompt, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>"</code>

Where *mnt/tank/shares/nfs2* is the path to the dataset created for the share.

If using optional property arguments to set networks and read only access, enter:

<code>csharing nfs create path="<i>/mnt/tank/shares/nfs2</i>" networks=<i>10.123.12.1/24 10.123.11.2/23</i> ro=<i>true</i><code>

Where:

* *mnt/tank/shares/nfs2* is the path to the dataset created for the share.
* *10.123.12.1/24 10.123.11.2/23* are the space-separated IP addresses with CIDR notation for each network you allow to connect to the share.
* *true* sets the share to read only, or *false* to allow write access to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs create path=/mnt/tank/shares/nfs2

```
{{< /expand >}}
{{< /expand >}}

### Delete Command 
The `delete` command deletes an NFS share.  

{{< expand "Deleting an NFS Share" "v" >}}

#### Description  
The `delete`  has 1 required property, `id`. 
Enter a property argument using the `=` delimiter to separate property and value, and enclose the value in double quotes.
Properties arguments for an array use the `{}` curly brackets to enclose multiple property arguments. 
These array property arguments are enclosed in `[]`square brackets, with both property and values double-quoted and separated by either the `:` or `=`. 
Multiple array property arguments within the `{}` are separated by a comma and space. 
See array example in the **Usage** section below.

The `create` returns and empty line.

Use the `query` command to verify the share was created and to view details on the share.




#### Usage 
From the CLI prompt, enter:

<code>sharing nfs create path="<i>/mnt/tank/shares/nfs2</i>"</code>

Where * * is the path to the dataset created for the share.

If using optional property arguments to set networks and read only access, enter:

<code>csharing nfs create path="<i>/mnt/tank/shares/nfs2</i>" networks=<i>10.123.12.1/24 10.123.11.2/23</i> ro=<i>true</i><code>

Where:

* *mnt/tank/shares/nfs2* is the path to the dataset created for the share.
* *10.123.12.1/24 10.123.11.2/23* are the space-separated IP addresses with CIDR notation for each network you allow to connect to the share.
* *true* sets the share to read only, or *false* to allow write access to the share.

{{< expand "Command Example" "v" >}}
```
sharing nfs create path=/mnt/tank/shares/nfs2

```
{{< /expand >}}
{{< /expand >}}



{{< taglist tag="scaleclisharing" limit="10" title="Related CLI Sharing Articles" >}}
{{< taglist tag="scalenfs" limit="10" title="Related NFS Articles" >}}
