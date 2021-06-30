---
title: "Permissions"
weight: 60
---

{{< toc >}}

TrueNAS SCALE has a simple permissions manager and a full Access Control List (ACL) editor for defining dataset permissions.
Permissions control the actions users can perform on dataset contents.

To change dataset permissions, go to **Storage** and click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> button next to the intended dataset, then click *Edit Permissions*.

## Basic Permissions Editor

The **Permissions Editor** option allows basic adjustments to a datasets ACL.

![BasicPermissionsSCALE](/images/SCALE/BasicPermissionsSCALE.png "Basic Permissions Editor")

{{< tabs "Edit Permissions" >}}
{{< tab "Dataset Path" >}}
*Path* shows the full pathway to the dataset. The system sets the dataset path when creating the dataset and it cannot change.
{{< /tab >}}
{{< tab "Owner" >}}
The *Owner* section controls which TrueNAS *User* and *Group* has full control of this dataset.

| Field | Description |
|------|-------------|
| User | Select the user to control the dataset. Users created manually or imported from a directory service appear in the drop-down menu. |
| Apply User | Confirms changes to *User*. To prevent errors, changes to the *User* are submitted only when this box is set. |
| Group | Select the group to control the dataset. Groups created manually or imported from a directory service appear in the drop-down menu. |
| Apply Group | Confirms changes to *Group*. To prevent errors, changes to the *Group* are submitted only when this box is set. |
{{< /tab >}}
{{< tab "Access" >}}
The *Access* section lets users define the basic *Read*, *Write*, and *Execute* permissions for the *User*, *Group*, and *Other* accounts that might access this dataset.
{{< /tab >}}
{{< tab "Advanced" >}}
The *Advanced* section allows users to apply permissions recursively to all directories, files, and child datasets within the current dataset.
{{< /tab >}}
{{< /tabs >}}

## POSIX.1e Access Control Lists

To switch from the basic permissions editor to the advanced ACL editor, click *Use ACL Manager*. 

An Access Control List (ACL) is a set of account permissions associated with a dataset and applied to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.

![AdvancedACLEditorSCALE](/images/SCALE/AdvancedACLEditorSCALE.png)

{{< tabs "Edit POSIX.1e ACL" >}}
{{< tab "File Information" >}}
| Field | Description |
|------|-------------|
| Path | Shows the full pathway to the file. |
| User | User who controls the dataset. This user always has permissions to read or write the ACL and read or write attributes. Users created manually or imported from a directory service appear in the drop-down menu. |
| Apply User | Confirm changes to *User*. To prevent errors, changes to the *User* are submitted only when this box is set. |
| Group | The group which controls the dataset. This group has the same permissions as granted to the group@ Who. Groups created manually or imported from a directory service appear in the drop-down menu. |
| Apply Group | Confirm changes to *Group*. To prevent errors, changes to the *Group* are submitted only when this box is set. |

Any user accounts or groups imported from a directory service can be selected as the primary *User* or *Group*.
{{< /tab >}}
{{< tab "Access Control List (ACEs)" >}}
To add a new item to the ACL, define *Who* the Access Control Entry (ACE) applies to, and configure permissions and inheritance flags for the ACE.

| Field | Description |
|------|-------------|
| Add | Adds a new ACE to the Access Control List. |
| Who | The object the ACE permissions apply to. |
| Permissons | The read/write/execute permissions the *Who* will have. |
| Default | Set to make the include the ACE on newly created directories and files within the datset. |
{{< /tab >}}
{{< /tabs >}}

{{< expand "ACL Details from Shell" "v" >}}
To view an ACL information from the console, go to **System Settings > Shell** and enter command:

```shell
getfacl /mnt/path/to/dataset
```
{{< /expand >}}

### ACL Inheritance

New files and directories typically inherit the ACL from the parent directory and preserve it when being moved or renamed within the same dataset.
An exception is when there are no *File Inherit* or *Directory Inherit* flags in the parent ACL *owner@*, *group@*, or *everyone@* entries.
These non-inheriting entries are added to the ACL of the newly created file or directory based on the [Samba](https://wiki.samba.org/index.php/Main_Page) create and directory masks or the [umask](https://www.freebsd.org/cgi/man.cgi?query=umask&sektion=2) value.

New files and directories typically inherit the ACL from the parent directory and preserve it when it is moved or renamed within the same dataset.

## NFSv4 Access Control Lists

#### Permissions

Permissions are divided between Basic and Advanced options.
The basic options are commonly used groups of the advanced options.

**Basic Permissions**

* *Read* (`r-x---a-R-c---`): view file or directory contents, attributes, named attributes, and ACL.
  Includes the *Traverse* permission.
* *Modify* (`rwxpDdaARWc--s`): adjust file or directory contents, attributes, and named attributes.
  Create new files or subdirectories.
  Includes the *Traverse* permission.
  Changing the ACL contents or owner is not allowed.
* *Traverse* (`--x---a-R-c---`): Execute a file or move through a directory.
  Directory contents are restricted from view unless the *Read* permission is also applied.
  To traverse and view files in a directory, but not be able to open individual files, set the *Traverse* and *Read* permissions, then add the advanced *Directory Inherit* flag.
* *Full Control* (`rwxpDdaARWcCos`): Apply all permissions.

**Advanced Permissions**

* *Read Data* (`r`): View file contents or list directory contents.
* *Write Data* (`w`): Create new files or modify any part of a file.
* *Append Data* (`p`): Add new data to the end of a file.
* *Read Named Attributes* (`R`): view the named attributes directory.
* *Write Named Attributes* (`W`): create a named attribute directory. Must be paired with the Read Named Attributes permission.
* *Execute* (`x`): Execute a file, move through, or search a directory.
* *Delete Children* (`D`): delete files or subdirectories from inside a directory.
* *Read Attributes* (`a`): view file or directory non-ACL attributes.
* *Write Attributes* (`A`): change file or directory non-ACL attributes.
* *Delete* (`d`): remove the file or directory.
* *Read ACL* (`c`): view the ACL.
* *Write ACL* (`C`): change the ACL and the ACL mode.
* *Write Owner* (`o`): change the user and group owners of the file or directory.
* *Synchronize* (`s`): synchronous file read/write with the server. This permission does not apply to FreeBSD clients.

#### Inheritance Flags

Basic inheritance flags only enable or disable ACE inheritance.
Advanced flags offer finer control for applying an ACE to new files or directories.

**Basic Flags**

* *Inherit* (`fd-----`): enable ACE inheritance.
* *No Inherit* (`-------`): disable ACE inheritance.

**Advanced Flags**

* *File Inherit* (`f`): The ACE is inherited with subdirectories and files. It applies to new files.
* *Directory Inherit* (`d`): new subdirectories inherit the full ACE.
* *No Propagate Inherit* (`n`): The ACE can only be inherited once.
* *Inherit Only* (`i`): Remove the ACE from permission checks but allow it to be inherited by new files or subdirectories. Inherit Only is removed from these new objects.
* *Inherited* (`I`): set when the ACE has been inherited from another dataset.
