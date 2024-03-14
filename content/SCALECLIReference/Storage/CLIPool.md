---
title: "Pool"
description: "Provides information about the storage pool namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 30
aliases:
draft: false
tags:
- pools
- disks
---

{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **pool** namespace has 23 commands, and is based on pool creation and management functions found in the SCALE API and web UI.
It provides access to storage pool methods through the **pool** commands.

## Snapshot Commands 
The following **pool** commands allow you to create new pools and manage existing pools.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Attach Command 
Use the `attach` command to add disks to a VDev. 
The `target_vdev` is the GUID of the VDev (pool) where you need to attach the disk. A *GUID* is a random and unique 64-bit identifier for a pool, VDev, or disk.
If attaching to a stripe VDev (pool), this is the striped disk GUID that is converted to a mirror. 
If attaching to a mirror VDev, the mirror is converted to an *n*-way mirror.
ZFS supports n-way mirroring. This means you can add disks into a mirror VDev. See [TrueNAS ZFS Primer](https://www.truenas.com/docs/references/zfsprimer/#zfs-redundancy-and-raid) for more information.
{{< hint type=info >}}
This command only works with mirror and stripe VDevs. You cannot use this command if the pool is in a RAIDz configuration.
{{< /hint >}}
Use the [`storage disk query`]({{< relref "CLIDisk.md" >}}) command to locate the **zfs_guid** number. 
Use the disk ID with the `storage disk get_instance` command to find the **zfs_guid** for a specific disk in a format easier to read.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!--  commenting out. OID found in the linux shell but even with TUI cannot get the attach command to work.
{{< expand "Using the Attach Command" "v" >}}
#### Description
The `attach` command has two required properties, `oid` and `pool_attach`.
See **Attach Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns 

{{< expand "Attach Properties" "v" >}}
{{< truetable >}}
test syntax:
storage pool attach oid=54 pool_attach={"target_vdev":"1016066042284556131"]", "new_disk":"{serial_lunid}WD-WX12D10E073S_50014ee2bcee3e4b","allow_du
plicate_serials":"true"}
| Property | Required | Description | Syntax Example |
|----------|-------------|----------------|
| 'oid' | Yes |  |  |
| `pool_attach` | yes | Use pool attach to specify the properties listed below in this table as an array. Default value is `{}`. Enter property arguments with double-quoted property and values separated by the `:` delimiter. Separate each property value inside the curly brackets with a comma but no space. | <code>pool_attach={"target_vdev":"<i>guidnumber</i>","new_disk""<i>diskid</i>","allow_duplicate_serials":<i>true</i>"}</code> | 
| `target_vdev` | Yes | Enter the GUID for target VDev (pool) where you are attaching the disk. Enter the propety argument using the `=` delimiter to separate property and double-quoted value. | <code>target_vdev="<i>10160660422845561313</i>"</code> |
| `new_disk` | Yes | Enter the disk ID for the disk you are attaching to the target VDev. Enter the property argument using the `=` delimiter to separate property and double-quoted value. | <code>new_disk="<i>{serial_lunid}WD-WMC4N0957377_50014ee603f9142b</i>"</code> |
| `allow_duplicate_serials` | No | Set to `true` to allow using a disk with a duplicate serial number. Systems with VMs where disks are not physical devices have duplicate serial number warnings. Setting to `true` allows adding a virtual disk to a VDev (pool). Set to `false` when using systems with physical systems with unique serial numbers. | `allow_duplicate_serials=true` or `allow_duplicate_serials=false` |  
 
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage pool attach oid="<i>oidNumber</i>" pool_attach={"target_vdev":"<i>poolguid</i>","new_disk":"<i>diskID</i>","allow_du
plicate_serials":"<i>true</i>"}</code>

Where:
* *oidNumber* is the object ID for 
* *poolguid* is the guid for the target VDev (pool), and found in the `storage pool query` command output.
* *diskID* is the ID number for the disk you are adding to the target VDev, and found in the `storage disk query` command output.
* *true* for `allow_duplicate_serials` allows the system to add a disk with a duplicated serial number. 
  Use `false` for systems with physical disks.

{{< expand "Command Example" "v" >}}
```
storage pool attach oid=54 pool_attach={"target_vdev":"10160660422845561313", "new_disk":"{serial_lunid}WD-WMC4N1028614_50014ee6594dd904", "allow_du
plicate_serials":"false"}

```
{{< /expand >}}
{{< /expand >}} -->

### Attachments Command 
The `attachments` command returns a list of services the pool matching the specified ID is using.

{{< expand "Using the Attachments Command" "v" >}}
#### Description
The `attachments` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

<code>storage pool attachments id=<i>4</i></code>

Where *4* is the number assigned to the pool by the system.

{{< expand "Command Example" "v" >}}
```
storage pool attachments id=4
+---------------+------------+--------------------------+
| type          | service    | attachments              |
+---------------+------------+--------------------------+
| snapshot Task | <null>     | tank/minio               |
|               |            | tank/minio               |
|               |            | tank/snapshots           |
| NFS Share     | nfs  >     | /mnt/tank/share/nfs      |
|               |            | /mnt/tank/share/nfs/nfs2 |
|               |            | /mnt/tank/share/nfs/nfs3 |
|               |            | /mnt/tank/share/nfs/nf42 |
| Rsync Task    | <null>     | /mnt/tank/minio          |
| Kubernetes    | kubernetes | tank                     |
+---------------+------------+--------------------------+
```
{{< /expand >}}
{{< /expand >}}

### Create Command 
The `create` command creates a new pool, specifies the type of VDev(s) and number of disks for each VDev in the pool. 
This command performs the same functions as the [Pool Creation Wizard]({{< relref "PoolCreateWizardScreens.md" >}}) in the UI.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- 
Creating a pool in the CLI is complex. Use the interactive command editor (TUI) to create a pool in the CLI.

Use the `storage disk query` command to obtain the disk identifiers and the `storage pool query` command to obtain the pool ID assigned by the system before creating a pool.

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has two required properties and five optional properties.
See **Create Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

{{< expand "Create Properties" "v" >}}
{{< truetable >}}

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `name` | Yes | Enter a name of up to 50 characters in length that follow [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). Use all lower case alpha characters. Names can include numbers and special characters such as underscore (_), hyphen (-), colon (:), or a period (.). Enter the property argument using the `=` delimiter to separate property and value. If using special characters, double-quote the property value. | <code>name=<i>tank2</i></code> or <code>name="<i>tank_2</i>"</code> |
| `encryption` | No | Enter `true` to encrypt the pool root dataset. Use `encryption_options` to apply the desired encryption options. Enter the property value using the `=` delimiter to separate property and value. | `encryption=true` or `encryption=false` |
| `deduplication` | No |Enter `true` to apply deduplication to the pool. Enter the property value using the `=` delimiter to separate property and value. | `deduplication=true` or `deduplication=false` |
| `checksum` | No | Use `checksum` to apply one of the available data integrity algorithms to the pool. Enter the property value using the `=` delimiter to separate property and value. The default value is `null`. Enter the property value using the `=` delimiter to separate property and value. Checksum choices are `ON`, `OFF`, `FLETCHER2`, `FLETCHER4`, `SHA256`, `SHA512`, `SKEIN`, and `EDONR". | <code>checksum=<i>SHA512</i></code> |
| `encryption_options` | No | Enter the encryption configuration settings for the root dataset for the pool. Default value is `{}. The `encryption_option` property arguments are: <br><li> `generate_key` set to `true` the system generates a hex-encoded key or `false` use `key` to enter a hex-encoded key of your choice. <br><li>`key` enter the hex-encoded key of your choice. <br><li>`pbkdf2iters` enter the number of password-based key deviations function 2 (PBKDF2) iterations to use for reducing vulnerabiltiy to brute-fore attacks. Enter a value greater than 100000 or use the default value `350000`.<br><li>`algorithm` enter the double-quoted algorithm from these options: `AES-128-CCM`, `AES-192-CCM`, `AES-256-CCM,` `AES-192-GCM`, or the default value `AES-256-GCM`. <br><li>`password` enter the double-quoted password of your choice. Must be specified to use password encryption. Default value is `NULL` or use any string of alpha-numeric and special characters of your choice. </li> | <code>encryption_options={"generate_key":"<i>false</i>","key":"<i>hex-encoded-key</i>"}  |
| `topology` | Yes | Enter the properties detailed in **Topology Properties** below to configure the VDev(s) for the pool. The pool must include a data VDev. Each VDev configured includes the `type` and `disks` property arguements. Enclose the `topology` value in curly brackets `{}`. |  |
| `allow_duplicate_serials` | No | Enter `true` to allow using disks with duplicated serial numbers such as virtual disks in a VM. Enter `false` to prevent using disks with duplicate serial numbers. | `allow_duplicate_serials=true` or `allow_duplicate_serials=false` |
{{< /truetable >}}
{{< expand "Topology Properties" "v" >}}
{{< truetable >}}
`topology` properties define the type and disks for each VDev included in the pool.

| Property | Required | Description | Syntax Example |
|----------|----------|-------------|----------------|
| `data` | Yes | Enter the `type` and `disks` to use in this VDev. All pools must include at least one data VDev. `type` options are `MIRROR` or `STRIPE`. Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted and separated by a comma as the `disks` value. Use the |  |
| `special` | No | Enter the `type` and `disks` to use in this VDev. `type` options are `MIRROR` or `STRIPE`. Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted and separated by a comma as the `disks` value. Use the |  |
| `dedup` | No | Enter the `type` and `disks` to use in this VDev. `type` options are `MIRROR` or `STRIPE`. Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted and separated by a comma as the `disks` value. Use the |  |
| `cache` | No | Enter the `type` and `disks` to use in this VDev. `type` option is `NULL` or `STRIPE`. Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted and separated by a comma as the `disks` value. Use the |  |
| `log` | No | Enter the `type` and `disks` to use in this VDev. `type` options are `MIRROR` or `STRIPE`. Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted and separated by a comma as the `disks` value. Use the |  |
| `spares` | No | Enter the disk ID number as the `disks` values. Enter disk ID, double-quoted as the `disks` value. Use the  |  |
{{< /truetable >}}
{{< /expand >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

storage pool create name=tank2 encryption=false deduplication=false checksum= null topology={datavdevs={"type":"MIRROR","disks":"{serial_lunid}WD-WX12D10E073S_50014ee2bcee3e4b","{serial_lunid}WD-WMC4N0957377_50014ee603f9142b",draid_data_disks=0,draid_spare_disks=0}}
Where:

{{< expand "Command Example" "v" >}}

storage pool create name=tank2 encryption=false deduplication=false checksum= null topology={"data"=["type":"MIRROR","disks":"{serial_lunid}WD-WX12D10E073S_50014ee2bcee3e4b","{serial_lunid}WD-WMC4N0957377_50014ee603f9142b"]}

storage pool create name=tank2 encryption=false deduplication=false checksum= null topology={data=["type":"MIRROR","disks":"{serial_lunid}WD-WX12D10E073S_50014ee2b
cee3e4b","{serial_lunid}WD-WMC4N0957377_50014ee603f9142b"]}
{{< /expand >}}
{{< /expand >}} -->

### Detach Command
The `detach` command detaches a disk from the pool matching the ID entered. Removing a disk from a mirror pool changes the pool VDev to a stripe.

Use the `storage disk query` command to locate the vdev_guid for the disk.

{{< expand "Using the Detach Command" "v" >}}
#### Description
The `detach` command has two required properties, `id` and `options`.
`options` has one required property argument, `label`.
Use `label` to enter the vdev guid or the device name.
Enclose the `options` property argument in curly brackets`{}`. Enter the `label` property argument inside the brackets using the `=` delimiter to separate the property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true upon successful execution of the command.

#### Usage
From the CLI prompt, enter:

<code>storage pool detach id=<i>4</i> options={"label":"<i>13914848339130932484</i>"}</code>

Where *13914848339130932484* is the vdev_guid of the disk.

{{< expand "Command Example" "v" >}}
```
storage pool detach id=4 options={"label":"13914848339130932484"}

```
{{< /expand >}}
{{< /expand >}}

### Expand Command 
The `expand` command increases the pool size to match all available disk space for the pool matching the ID specified. Pools using virtual disks use this option to resize the virtual disks apart from TrueNAS. 

{{< expand "Using the Expand Command" "v" >}}
#### Description
The `expand` command has one required property, `id`.
Enter the property argument using the `=` delimiter to separate the property and value.
Enter the command string then press <kbd>Enter</kbd>.

#### Usage
From the CLI prompt, enter:

<code>storage pool expand id=<i>4</i></code>

Where *4* is the pool ID number assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool expand id=4
[0%]...
[100%]...
```
{{< /expand >}}
{{< /expand >}}

### Export Command 
The `export` command exports the pool/data for the pool matching the ID specified. Exporting a pool disables services, terminates any processes the pool uses, removes disks from the pool then cleans up after the export.

Use with the `options` properties to completely destroy the pool and data, remove all attachments, and to restart any services associated with the pool.
Use without the `options` property argument to just export the pool.

If using on an HA system with failover is enabled, and exporting/disconnecting the last zpool, then this raises an EOPNOTSUPP error. 
Failover must be disabled before exporting the last zpool on the system.

{{< expand "Using the Export Command" "v" >}}
#### Description
The `export` command has two properties, required 'id' and optional 'options'. 
`id` specifies the pool ID number assigned by the system.
`options` has three optional properties. See **Options Properties** below for details and syntax examples. 
Use the default value `{}` if not specifying `options` property arguments.
Enter property argument using the `=` delimiter to separate property and values.
Enter the command string then press <kbd>Enter</kbd>.
The command returns progress in percentage complete for each part of the export process.

{{< expand "Options Properties" "v" >}}
{{< truetable >}}
If entering multiple `options` property arguments, separate each with a comma but no space, for example <code>options={"cascade":"<i>true</i>","restart_services":"<i>false</i>","destroy":"<i>true</i>"}</code>.
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `cascade` | Set `cascade` to `true` to remove all attachments from the specified pool. Set to `false` to not remove . Enter the `cascade` property argument with the `:` to separate double-quoted property and value. Enclosed in curly brackets `{}`. | <code>options={["cascade":"<i>true</i>"]}</code> |  
| `restart_services` | Set `restart_services` to `true` to restart any services associated with the specified pool. Set to `false` to not restart services. Enter the `restart_services` property argument with the `:` to separate double-quoted property and value. Enclosed in curly brackets `{}`. | <code>options={["restart_services":"<i>true</i>"]}</code> |
| `destroy` | Set `destroy` to `true` to destroy the specified pool/data. Set to `false` to not destroy the pool/data. Enter the `destroy` property argument with the `:` to separate double-quoted property and value. Enclosed in curly brackets `{}`. | <code>options={["destroy":"<i>true</i>"]}</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>storage pool export id=<i>5</i> options={}</code>

Where *5* is the pool ID number assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool export id=6 options={}
[0%] ...
[0%] Disabling pool attachments: Replication...
[1%] Disabling pool attachments: Snapshot Task...
[2%] Disabling pool attachments: SMB Share...
[3%] Disabling pool attachments: CloudSync Task...
[4%] Disabling pool attachments: NFS Share...
[5%] Disabling pool attachments: Rsync Task...
[6%] Disabling pool attachments: Cloud Backup Task...
[7%] Disabling pool attachments: iSCSI Extent...
[8%] Disabling pool attachments: VM...
[9%] Disabling pool attachments: Chart Releases...
[10%] Disabling pool attachments: Kubernetes...
[20%] Terminating processes that are using this pool...
[30%] Removing pool disks from swap...
[80%] Exporting pool...
[90%] Cleaning up after export...
[100%] Cleaning up after export...
```
{{< /expand >}}
{{< /expand >}} 

### Filesystem_Choices Command 
The `filesystem_choices` command lists the dataset paths available on the system. Use the properties to modify the list to only include zvols (volumes) on the system.

{{< expand "Using the Filesystem_Choices Command" "v" >}}
#### Description
The `filesystem_choices` command has one optional property, `types`.
See **Types Properties** table below for details on the `types` properties and proper syntax.
Enter `filesystem_choices` then press <kbd>Enter</kbd>.
Entering the command without the `types` property or with the `types` default property argument lists the all file system paths (datasets and zvols) on the system.

{{< expand "Types Properties" "v" >}}
{{< truetable >}}
`types` has two properties, `FILESYSTEM` and `VOLUME`. The default value for `types` includes both properties entered as `types=["FILESYSTEM", "VOLUME"]`.
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `FILESYSTEM` | Use the `FILESYSTEM` property to only list dataset paths. Enter the `type` property argument with `FILESYSTEM` double-quoted and enclosed in square brackets `[]` | `type=["FILESYSTEM"]` |  
| `VOLUME` | Use the `VOLUME` property to list only the zvols (paths) configured on the system. Enter the `type` property argument with `VOLUME` double-quoted and enclosed in square brackets `[]` | `type=["VOLUME"]` |
{{< /truetable >}}
{{< /expand >}}
#### Usage
From the CLI prompt, enter:

`storage pool filesystem_choices`

{{< expand "Command Example" "v" >}}
```
storage pool filesystem_choices
tank
tank/ix-applications
tank/shares
tank/shares/nfs
tank/zvols
tank/zvols/zvol1
tank/zvols/zvol2
tank2/reptests
tank2/snapshots
tank2/snapshots/task1
```
{{< /expand >}}
{{< /expand >}}

### Get_Disks Command 
The `get_disks` command lists the disks found in the pool matching the ID entered, or if no ID is entered, all disks on the system.

{{< expand "Using the Get_Disks Command" "v" >}}
#### Description
The `get_disks` has one optional property, `id`.
Enter the `get_disks` command without the `id` property argument to get a list of all disks (names) on the system.
Enter with the `id` property argument to get the disks in the pool matching the number entered.
`id` is the number given to the pool by the system at creation.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a list of disks (names) in the pool or on the system.

#### Usage
From the CLI prompt, enter:

`storage pool get_disks`

or to get the disks used in a specific pool, enter:

<code>storage pool get_disks id=<i>5</i></code>

Where *5* is the ID number assigned to the pool by the system at creation.
{{< expand "Command Example" "v" >}}
```
storage pool get_disks
sdc
sda
sdd
sde
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance Command 
The `get_instance` command returns a table of properties for the pool matching the ID entered. 

To view the same properties for all pools on the system use the [`query`](#query-command) command.

{{< expand "Using the Get_Instance Command" "v" >}}
#### Description
The `get_instance` has one required property, `id`.
`id` is the number given to the pool by the system at creation.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table for the pool that includes the ID, name, GUID, path, status, healthy, warning, and status code status; a dictionary value for scan, topology, and autotrim, and storage values for pool size, allocated and free space, fragmentation and freeing, and the string values for size, allocated, free, and freeing.
If the name entered is not found the system returns a validation error.

#### Usage
From the CLI prompt, enter:

<code>storage pool get_instance=<i>5</i></code>

Where *5* is the pool ID number assigned by the system at pool creation.
{{< expand "Command Example" "v" >}}
```
storage pool get_instance id=5
+---------------+---------------------+
|            id | 5                   |
|          name | tank                |
|          guid | 3709549858670315376 |
|          path | /mnt/tank           |
|        status | ONLINE              |
|          scan | <dict>              |
|      topology | <dict>              |
|       healthy | true                |
|       warning | false               |
|   status_code | OK                  |
| status_detail | <null>              |
|          size | 8053063680          |
|     allocated | 2156408832          |
|          free | 5896654848          |
|       freeing | 0                   |
| fragmentation | 6                   |
|      size_str | 8053063680          |
| allocated_str | 2156408832          |
|      free_str | 5896654848          |
|   freeing_str | 0                   |
|      autotrim | <dict>              |
+---------------+---------------------+
```
{{< /expand >}}
{{< /expand >}}

### Get_Instance_By_Name Command 
The `get_instance_by_name` command returns a table of properties for the pool matching the name entered. 
Use when you do not have the ID number required to use the `get_instance` command.

To view properties for all pools on the system use the [`query`](#query-command) command.

{{< expand "Using the Get_Instance_By_Name Command" "v" >}}
#### Description
The `get_instance_by_name` has one required property, `name`.
`name` is the name given the pool at creation.
Enter the property argument using the `=` delimiter to separate the property and value.
Double-quote the name if it includes a special character.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table for the pool that includes the ID, name, GUID, path, status, healthy, warning, and status code status; a dictionary value for scan, topology, and autotrim, and storage values for pool size, allocated and free space, fragmentation and freeing, and the string values for size, allocated, free, and freeing.
If the name entered is not found the system returns a validation error.

#### Usage
From the CLI prompt, enter:

<code>storage pool get_instance_by_name=<i>tank</i></code>

Where *tank* is the pool name assigned at pool creation.

{{< expand "Command Example" "v" >}}
```
storage pool get_instance_by_name=tank
+---------------+--------------------+
|            id | 5                  |
|          name | tank2              |
|          guid | 981158589697766753 | 
|          path | /mnt/tank2         |
|        status | ONLINE             |
|          scan | <dict>             |
|      topology | <dict>             |
|       healthy | true               |
|       warning | false              |
|   status_code | OK                 |
| status_detail | true               |
|          size | 2989297238016      |
|     allocated | 3194880            |
|          free | 2989294043136      |
|       freeing | 0                  |
| fragmentation | 0                  |
|      size_str | 2989297238016      |
| allocated_str | 3194880            |
|      free_str | 2989294043136      |
|   freeing_str | 0                  |
|      autotrim | <dict>             |
+---------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Import_Find Command 
The `import_find` command returns a job id which can be used to retrieve a list of pools available for import. The command returns the name, guid, status, host name details.

{{< expand "Using the Import_Find Command" "v" >}}
#### Description
The `import_find` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the name, guid, status and host name for pools available for import.

#### Usage
From the CLI prompt, enter:

`storage pool import_find`

{{< expand "Command Example" "v" >}}
```
storage pool import_find
[0%] ...
[100%] ...
+-------+----------------------+--------+-------------+
| name  | guid                 | status | hostname    |
+-------+----------------------+--------+-------------+
| tank2 | 10728262665093888122 | ONLINE | qe-mini2-01 |
+-------+----------------------+--------+-------------+
```
{{< /expand >}}
{{< /expand >}}

### Import_Pool Command 
The `import` command uses information from the `import_find` command output to import a pool.

{{< expand "Using the Import_Pool Command" "v" >}}
#### Description
The `import_pool` command has one required property, `pool_import`.
`pool_import` has three required properties, `guid`, `name` and `enable_attachments`.
See **Pool_Import Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns status in percentage and `true` upon successful completion of the import.

{{< expand "Pool_Import Properties" "v" >}}
{{< truetable >}}
Use the interactive argument editor to enter values for these properties.
| Property | Description | 
|----------|-------------|
| `guid` | Enter the guid provided in the `import_find` command output. | 
| `name` | Enter the name provided in the `import_find` command output. |
| `enable_attachments` | Enter `true` to include any attachments for the pool. |
{{< /truetable >}}
{{< /expand >}}
#### Usage
From the CLI prompt, enter:

<code>storage pool import_pool --</code>

{{< expand "Command Example" "v" >}}
```
storage pool import_pool --
[100%] ...
true
```
{{< /expand >}}
{{< /expand >}}

### Is_Upgraded
The `is_upgraded` command indicates if a pool is upgraded with new ZFS feature flags after upgrading SCALE to a new major release.

Use the `storage pool query` command to obtain pool IDs.

{{< expand "Using the Is_Upgraded Command" "v" >}}
#### Description
The `is_upgraded` command has one required property, `id`.
Enter the property argument using the `=` to separate the property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true if the ZFS feature flags for the pool matching the id entered do not require upgrading.

#### Usage
From the CLI prompt, enter:

<code>storage pool is_upgraded id=<i>4</i></code>

Where *4* is the pool ID assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool is_upgraded id=4
true
```
{{< /expand >}}
{{< /expand >}}

### Offline Command 
Use the `offline` command to take a disk in a pool, matching the ID entered, offline. This command uses the disk vdev_guid to identify the disk.

Use the `storage disk query` command to locate the vdev_guid for the disk to offline.
Use the `storage pool get_disks` command to identify the disks in the pool.

{{< expand "Using the Offline Command" "v" >}}
#### Description
The `offline` command has two required properties, `id` and `options`.
`id` is the number assigned to the pool by the system.
Enter the `id` property argument using the `=` delimiter to separate property and value.

`options` has one required property, `label`.
`label` is the vdev_guid assigned to the disk you offline.
Enclose the `label` property argument in curly brackets `{}`, enter the property argument using the `:` dilimter to separate double-quoted property and value.

Enter the command string then press <kbd>Enter</kbd>.
The system returns `true` upon successful completion of the command.

#### Usage
From the CLI prompt, enter:

<code>storage pool offline id=<i>4</i> options={"label":"<i>6515190129612429183</i>"}</code>

Where:
* *4* is the pool ID number assigned by the system.
* *6515190129612429183* is the disk vdev_guid assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool offline id=4 options={"label":"6515190129612429183"}
true
```
{{< /expand >}}
{{< /expand >}}

### Online Command 
Use the `online` command to bring a disk in a pool, matching the ID entered, online. This command uses the disk vdev_guid to identify the disk.

Use the `storage disk query` command to locate the vdev_guid for the disk to offline.
Use the `storage pool get_disks` command to identify the disks in the pool.

{{< expand "Using the Offline Command" "v" >}}
#### Description
The `online` command has two required properties, `id` and `options`.
`id` is the number assigned to the pool by the system.
Enter the `id` property argument using the `=` delimiter to separate property and value.

`options` has one required property, `label`.
`label` is the vdev_guid assigned to the disk you offline.
Enclose the `label` property argument in curly brackets `{}`, enter the property argument using the `:` delimiter to separate double-quoted property and value.

Enter the command string then press <kbd>Enter</kbd>.
The system returns `true` upon successful completion of the command.

#### Usage
From the CLI prompt, enter:

<code>storage pool online id=<i>4</i> options={"label":"<i>6515190129612429183</i>"}</code>

Where:
* *4* is the pool ID number assigned by the system.
* *6515190129612429183* is the disk vdev_guid assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool online id=4 options={"label":"6515190129612429183"}
true
```
{{< /expand >}}
{{< /expand >}}

### Processes Command 
The `processes` command lists processes used by the pool matching the ID entered. 

{{< expand "Using the Processes Command" "v" >}}
#### Description
The `processes` command has one required property, `id`.
Enter the property argument using the `=` delimiter separating the property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a list of processes for the pool or `(empty list)` if no processes are used.

#### Usage
From the CLI prompt, enter:

<code>storage pool processes id=<i>4</i></code>

Where *4* is the pool ID number assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool processes id=4
(empty list)
```
{{< /expand >}}
{{< /expand >}}

### Query Command 
The `query` command returns a table (dictionary) of all pools on the system. 

{{< expand "Using the Query Command" "v" >}} 
#### Description  
`query` does not require entering property arguments.
Enter the command then press <kbd>Enter</kbd>.
The `query` returns a table (dictionary) of all pools on the system. 
Information includes the ID, GUID, mount path, status, scan, topology, health and warning status and status code, size including allocated and free, freeing, fragmentation, and the size, allocated, free and freeing string, and the autotrim state. 

#### Usage 
From the CLI prompt, enter:

`storage pool query'

{{< expand "Command Example" "v" >}}
```
storage pool query
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
| id | name  | guid                | path       | status  | scan   | topology | healthy | warning | status_code | status_detail | size          | allocated  | free       | freeing | fragmentation | size_str      | allocated_str | freeing_str | autotrim |
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
| 4  | tank  | 1016066042284556131 | /mnt/tank  | ONLINE  | <dict> | <dict>   | true    | false   | OK          | <null>        | 2989297238016 | 4627304448 | 2984669933568 | 0       | 0             | 2989297238016 | 4627304448    | 0           | <dict>   |
| 5  | tank2 | 98111585897766753   | /mnt/tank2 | ONLINE  | <dict> | <dict>   | true    | false   | OK          | <null>        | 2989297238016 | 31994880   | 2989294043136 | 0       | 0             | 2989297238016 | 31994880   | 0           | <dict>   |
+----+-------+---------------------+------------+---------+--------+----------+---------+---------+-------------+---------------+---------------+------------+------------+ +-------+---------------+---------------+---------------+-------------+----------+
```
{{< /expand >}}
{{< /expand >}}

### Remove Command 
The `remove` command removes the ZFS device from the pool matching the ID entered and wipes disks in the pool. 

{{< expand "Using the Remove Command" "v" >}}
#### Description
The `remove` command has two required properties, `id` and `options`.
`id` is the number assigned to the pool by the system.
Enter the `id` property argument using the `=` delimiter to separate property and value.

`options` has one required property, `label`.
`label` is the vdev_guid assigned to the disk you remove.
Enclose the `label` property argument in curly brackets `{}`, enter the property argument using the `:` delimiter to separate double-quoted property and value.

Enter the command string then press <kbd>Enter</kbd>.
The command returns device removal and disk wiping status indications in percentage complete. 

#### Usage
From the CLI prompt, enter:

<code>storage pool remove id=<i>4</i> options={"label":"<i>8533090430494837337</i>"}</code>

Where:
* *4* is the pool ID assigned by the system.
* *8533090430494837337* is the disk vdev_guid assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool remove id=4 options={"label":"8533090430494837337"}
[0%] ...
[20%] Initiating removal of '8533090430494837337' ZFS device...
[40%] Waiting for removal of ZFS device to complete...
[60%] Removal of ZFS device complete...
[70%] Wiping disks...
[100%] Successfully completed wiping disks...
```
{{< /expand >}}
{{< /expand >}}

### Replace Command 
The `replace` command removes a disk and replaces it with the disk matching the vdev_guid entered. 
This command performs the same function as the [disk replace]({{< relref "ReplacingDisks.md" >}}) UI function.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- commenting out until the command works in the TUI or as a command string
{{< expand "Using the Replace Command" "v" >}}
#### Description
The `replace` command has three required and two optional properties.
See **Replace Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns...

{{< expand "Replace Properties" "v" >}}
{{< truetable >}}
test string: storage pool replace id=4 options={"label":"6515190129612429183","disk"="{serial_lunid}WD-WX12D10E073S_50014ee2bcee3e4b","force":"true","preserve_settings":"true"}
| Property | Required | Description | Syntax Example |
|----------|-------------|----------------|
| 'id' | Yes | Enter the pool ID number assigned by the system. Enter the property argument using the `=` delimiter to separate the property and value. | <code>id=<i>4</i></code> |
| `label` | Yes | Enter the disk vdev_guid assigned by the system for the disk to replace. Enter property argument using the `=` delimiter separating property and double-quoted value. | <code>label=<i>replacediskvdev_guid</i></code> | 
| `disk` | Yes | Enter the identifier for the disk replacing another disk. Enter the property argument using the `=` delimiter to separate property and double-quoted value. | <code>target_vdev="<i>10160660422845561313</i>"</code> |
| `force` | No | Enter `true` to override the safety check and add the disk to the pool. Selecting this option erases any data stored on the disk!, Enter `false` to not force replacement.  | `force=true` or `force=false` |
| `preserve_settings` | No | Enter `true` to preserve the settings (power management, SMART, etc.) of the replaced disk and apply them to a new disk. Set to `false` to not preserve settings or apply them to the disk replacement. | `preserve_settings=true` or `preserve_settings=false` |  
 
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

{{< expand "Command Example" "v" >}}

{{< /expand >}}
{{< /expand >}}-->

### Scrub Command 
The `scrub` command starts a scrub for the pool matching the ID entered. 
This command performs the same function as [running a pool data integrty check (scrub)]({{< relref "ManagePoolsSCALE.md" >}}) operation.

{{< expand "Using the Scrub Command" "v" >}}
#### Description
The `scrub` command has two required properties, `id` and `action`.
`id` specifies the pool ID numbers assigned by the system.
`action` has three options, `START`, `STOP`, and `PAUSE`.
Enter property arguments using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The `START` command string returns progress status in percentage complete.

Start the scrub in the UI and use the `STOP` command string to stop the operation. The command string returns progress of the stop action.
Start the scrub in the UI and use the `PAUSE` command string to paus the operation. The command string returns progress of the pause action.
Use `START` to resume a paused scrub.

#### Usage
From the CLI prompt, enter:

<code>storage pool scrub id=<i>4</i> action=<i>START</i></code>

Where:
* *4* is the pool ID assigned by the system.
* *START* begins the scrub operation.

{{< expand "Command Example" "v" >}}
```
storage pool scrub id=4 action=START
[0%] ...
[0%] Scrubbing...
[3%] Scrubbing...
[5%] Scrubbing...
[8%] Scrubbing...
[12%] Scrubbing...
...
[100%] Scrub finished...
```
{{< /expand >}}
{{< /expand >}}

### Update Command 
The `update` command updates properties for the pool matching the ID entered.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
<!-- 
{{< expand "Using the Update Command" "v" >}}
#### Description

sdd identifier "{serial_lunid}WD-WX12D10E073S_50014ee2bcee3e4b"  vdev_guid 8533090430494837337
#### Usage

{{< expand "Command Example" "v" >}}

{{< /expand >}}
{{< /expand >}} -->

### Upgrade Command
The `upgrade` command upgrades the pool matching the ID entered with available ZFS feature flags. Use after updating SCALE to a new release or after importing a pool.

{{< expand "Using the Upgrade Command" "v" >}}
#### Description
The `upgrade` command has one required property, `id`.
Enter the property argument using the `=` to separate the property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true if the pool matching the id is upgraded.

#### Usage
From the CLI prompt, enter:

<code>storage pool upgrade id=<i>7</i></code>

Where *7* is the pool ID assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool upgrade id=7
true
```
{{< /expand >}}
{{< /expand >}}

### Validate_Name Command done
The `validate_name` command validates the pool name entered.

{{< expand "Using the Validate_Name Command" "v" >}}
#### Description
The `validate_name` command has one required property, `pool_name`.
`pool_name` specifies the pool name to verify.
Enter the command string then press <kbd>Enter</kbd>.
The command returns true if the pool name is valid.

#### Usage
From the CLI prompt, enter:

<code>storage pool validate_name pool_name=<i>tank2</i></code>

Where *7* is the pool ID assigned by the system.

{{< expand "Command Example" "v" >}}
```
storage pool validate_name pool_name=tank2
true
```
{{< /expand >}}
{{< /expand >}}
