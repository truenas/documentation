---
title: "Interface Fields Reference Guide: Tasks"
linkTitle: "Tasks"
description: "Descriptions of each field in the Tasks section of the TrueNAS web interface."
weight: 30
tags: ["reference"]
---

## Cron Job

**Add**

| | |
|-|-|
| Description | Enter a description of the cron job. |
| Command | Enter the full path to the command or script to be run. |
| Run as User | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| Schedule | Select a schedule preset or choose Custom to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| Hide Stardard Output | Hide standard output (stdout) from the command. When unset, any standard output is mailed to the user account cron used to run the command. |
| Hide Standard Error | Hide error output (stderr) from the command. When unset, any error output is mailed to the user account cron used to run the command. |
| Enabled | Enable this cron job. When unset, disable the cron job without deleting it. |

## Init shutdown

**Add**

| | |
|-|-|
| Description | Comments about this script. |
| Type | Select Command for an executable or Script for an executable script. |
| Command | Enter the command with any options. |
| When | *Pre Init* is early in the boot process, after mounting filesystems and starting networking. *Post Init* is at the end of the boot process, before FreeNAS services start. *Shutdown* is during the system power off process. |
| Enabled | Enable this task. Unset to disable the task without deleting it. |
| Timeout | Automatically stop the script or command after the specified seconds. |

## Rsync Tasks Add

**Source**

| | |
|-|-|
| Path | Browse to the path to be copied. FreeBSD file path limits apply. Other operating systems can have different limits which might affect how they can be used as sources or destinations. |
|-|-|
| User | Select the user to run the rsync task. The user selected must have permissions to write to the specified directory on the remote host. |
| Direction | Direct the flow of data to the remote host. |
| Description | Enter a description of the rsync task. |

**Schedule**

| | |
|-|-|
| Schedule | Select a schedule preset or choose Custom to open the advanced scheduler. |
| Recusrive | Set to include all subdirectories of the specified directory. When unset, only the specified directory is included. |

**Remote**

| | |
|-|-|
| Remote Host | Enter the IP address or hostname of the remote system that will store the copy. Use the format username@remote_host if the username differs on the remote host. |
| Rsync Mode | Choose to either use a custom-defined remote module of the rsync server or to use an SSH configuration for the rsync task. |
| Remote Module Name | At least one module must be defined in [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) of the rsync server or in the Rsync Modules of another system. |

**More Options**

| | |
|-|-|
| Times | Set to preserve modification times of files. |
| Compress | Set to reduce the size of data to transmit. Recommended for slow connections. |
| Archive | When set, rsync is run recursively, preserving symlinks, permissions, modification times, group, and special files. When run as root, owner, device files, and special files are also preserved. Equivalent to passing the flags -rlptgoD to rsync. |
| Delete | Delete files in the destination directory that do not exist in the source directory. |
| Quiet | Set to suppress informational messages from the remote server. |
| Perserve Permissions | Set to preserve original file permissions. This is useful when the user is set to root. |
| Perserve Extended Attributes | [Extended attributes](https://en.wikipedia.org/wiki/Extended_file_attributes) are preserved, but must be supported by both systems. |
| Delay Updates | Set to save the temporary file from each updated file to a holding directory until the end of the transfer when all transferred files are renamed into place. |
| Auxiliary Parameters | Additional [rsync(1)](https://rsync.samba.org/ftp/rsync/rsync.html) options to include. Separate entries by pressing Enter. Note: The "*" character must be escaped with a backslash (\\*.txt) or used inside single quotes ('*.txt'). |
| Enabled | Enable this rsync task. Unset to disable this rsync task without deleting it. |



## S.M.A.R.T. Tests

**Add**

| | |
|-|-|
| Disks | Select the disks to monitor. |
| Type | Choose the test type. See [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in) for descriptions of each type. Some types will degrade performance or take disks offline. Avoid scheduling S.M.A.R.T. tests simultaneously with scrub or resilver operations. |
| Description | Enter any information about this S.M.A.R.T. test. |
| Schedule | Choose one of the presets or select Custom to open the advanced scheduler. |


## Periodic Snapshot Tasks Add


**Dataset**

| | |
|-|-|
| Dataset | Select a pool, dataset, or zvol. |
|-|-|
| Recursive | Set to take separate snapshots of the dataset and each of its child datasets. Leave unset to take a single snapshot only of the specified dataset without child datasets. |
| Exclude | Exclude specific child datasets from the snapshot. Use with recursive snapshots. List paths to any child datasets to exclude. Example: pool1/dataset1/child1. A recursive snapshot of pool1/dataset1 will include all child datasets except child1. Separate entries by pressing Enter. |

**Schedule**

| | |
|-|-|
| Snapshot Lifetime | Define a length of time to retain the snapshot on this system using a numeric value and a single lowercase letter for units. Examples: 3h is three hours, 1m is one month, and 1y is one year. Does not accept Minute values. After the time expires, the snapshot is removed. Snapshots which have been replicated to other systems are not affected. |
|-|-|
| Nameing Schema | Snapshot name format string. The default is auto-%Y-%m-%d_%H-%M. Must include the strings %Y, %m, %d, %H, and %M, which are replaced with the four-digit year, month, day of month, hour, and minute as defined in [strftime(3)](https://www.freebsd.org/cgi/man.cgi?query=strftime). For example, snapshots of pool1 with a Naming Schema of customsnap-%Y%m%d.%H%M have names like pool1@customsnap-20190315.0527. |
| Schedule | Choose one of the presets or choose Custom to use the advanced scheduler. |
| Allow Taking Empty Snapshots | Creates dataset snapshots even when there have been no changes to the dataset from the last snapshot. Recommended for reating long-term restore points, multiple snapshot tasks pointed at the same datasets, or to be compatible with snapshot schedules or replications created in TrueNAS 11.2 and earlier. For example, allowing empty snapshots for a monthly snapshot schedule allows that monthly snapshot to be taken, even when a daily snapshot task has already taken a snapshot of any changes to the dataset. |
| Enabled | To activate this periodic snapshot schedule, set this option. To disable this task without deleting it, unset this option. |


## Replication Tasks Wizard

**What and Where**

| | |
|-|-|
| Load Previous Replication Task | Use settings from a saved replication. |
|-|-|
| Source Location | Storage location for the original snapshots that will be replicated. |
| Destination Location | Storage location for the replicated snapshots. |
| Task Name | Name of this replication configuration. |

**Source Location: On this System**

| | |
|-|-|
| Source | Define the path to a system location that has snapshots to replicate. Click the folder to see all locations on the source system or click in the field to manually type a location (Example: pool1/dataset1). Multiple source locations can be selected or manually defined with a comma (,) separator.  Selecting a location displays the number of existing snapshots that can be replicated. Selecting a location that has no snapshots configures the replication task to take a manual snapshot of that location and replicate it to the destination. |
| Recursive | Set to also replicate all snapshots contained within the selected source dataset snapshots. Unset to only replicate the selected dataset snapshots. |
| Replicate Custom Snapshots | Replicate snapshots that have not been created by an automated snapshot task. Requires setting a naming schema for the custom snapshots. |
| Naming Schema | Pattern of naming custom snapshots to be replicated. Enter the name and [strftime(3)](https://www.freebsd.org/cgi/man.cgi?query=strftime) {0}, {1}, {2}, {3}, and {4} strings that match the snapshots to include in the replication. Separate entries by pressing Enter. The number of snapshots matching the patterns are shown. |

**Destination Location: On a Different System**

| | |
|-|-|
| SSH Connections | Select a saved remote system SSH connection or choose Create New to create a new SSH connection. |
| Destination | Define the path to a system location that will store replicated snapshots. Click the folder to see all locations on the destination system or click in the field to manually type a location path (Example: pool1/dataset1). Selecting a location defines the full path to that location as the destination. Appending a name to the path will create new zvol at that location. For example, selecting pool1/dataset1 will store snapshots in dataset1, but clicking the path and typing /zvol1 after dataset1 will create zvol1 for snapshot storage. |
| Encryption | Set to use encryption when replicating data. Additional encryption options will appear. |
| SSH Transfer Security | Data transfer security. The connection is authenticated with SSH. Data can be encrypted during transfer for security or left unencrypted to maximize transfer speed. Encryption is recommended, but can be disabled for increased speed on secure networks. |

## Replication Tasks Advanced


**General**

| | |
|-|-|
| Name | Descriptive name for the replication. |
| Direction | PUSH sends snapshots to a destination system. |
|  | PULL connects to a remote system and retrieves snapshots matching a Naming Schema. |
| Transport | *SSH* is supported by most systems. It requires a previously created connection in System > SSH Connections. *SSH+NETCAT* uses SSH to establish a connection to the destination system, then uses py-libzfs to send an unencrypted data stream for higher transfer speeds. This only works when replicating to a FreeNAS, TrueNAS, or other system with py-libzfs installed.  *LOCAL* efficiently replicates snapshots to another dataset on the same system without using the network.  *LEGACY* uses the legacy replication engine from FreeNAS 11.2 and earlier. |
| Number of retries for failed replications | Number of times the replication is attempted before stopping and marking the task as failed. |
| Logging Level | Message verbosity level in the replication task log. |
| Enabled | Activates the replication schedule. |

**Transport Options**

| | |
|-|-|
| SSH Connection | Choose a connection that has been saved in System > SSH Connections. |
| Stream Compression | Select a compression algorithm to reduce the size of the data being replicated. Only appears when SSH is chosen for Transport type. |
| Limit | Limit replication speed to this number of bytes per second. |
| Allow Bloxks Larger than 128KB | Allow this replication to send large data blocks. The destination system must also support large blocks. This setting cannot be changed after it has been enabled and the replication task is created. For more details, see [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs). |
| Allow Compressed WRITE Records | Use compressed WRITE records to make the stream more efficient. The destination system must also support compressed WRITE records. See [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs). |

**Source**

| | |
|-|-|
| Source | Define the path to a system location that has snapshots to replicate. Click the folder to see all locations on the source system or click in the field to manually type a location (Example: pool1/dataset1). Multiple source locations can be selected or manually defined with a comma (,) separator. |
| Recusive | Replicate all child dataset snapshots. When set, Exclude Child Datasets becomes available. |
| Include Dataset Properties | Include dataset properties with the replicated snapshots. |
| Full Filesystem Replication | Completely replicate the selected dataset. The target dataset will have all of the properties, snapshots, child datasets, and clones from the source dataset. |
| Properties Exclude | List any dataset properties that will not be included with the replication. |
| Periodic Snapshot Tasks | Snapshot schedule for this replication task. Choose from previously configured Periodic Snapshot Tasks. This replication task must have the same Recursive and Exclude Child Datasets values as the chosen periodic snapshot task. Selecting a periodic snapshot schedule removes the Schedule field. |
| Replicate Specific Snapshots | Only replicate snapshots that match a defined creation time. To specify which snapshots will be replicated, set this checkbox and define the snapshot creation times that will be replicated. For example, setting this time frame to Hourly will only replicate snapshots that were created at the beginning of each hour. |
| Also Include Naming Schema | Pattern of naming custom snapshots to include in the replication with the periodic snapshot schedule. Enter the strftime(3) strings that match the snapshots to include in the replication.  When a periodic snapshot is not linked to the replication, enter the naming schema for manually created snapshots. Has the same {0}, {1}, {2}, {3}, and {4} string requirements as the Naming Schema in a Periodic Snapshot Task. Separate entries by pressing Enter. |
| Saving Pending Schema | Prevent source system snapshots that have failed replication from being automatically removed by the Snapshot Retention Policy. |

**Replication Schedule**

| | |
|-|-|
| Run Automatically |  Set to either start this replication task immediately after the linked periodic snapshot task completes or continue to create a separate Schedule for this replication. |
| Schedule |  Start time for the replication task. |

**Destination**

| | |
|-|-|
| Destination | Define the path to a system location that will store replicated snapshots. Click the folder to see all locations on the destination system or click in the field to manually type a location path (Example: pool1/dataset1). Selecting a location defines the full path to that location as the destination. Appending a name to the path will create new zvol at that location. |
|  | For example, selecting pool1/dataset1 will store snapshots in dataset1, but clicking the path and typing /zvol1 after dataset1 will create zvol1 for snapshot s |
| Destination Dataset Read-only Policy | *SET* will changes all destination datasets to readonly=on after finishing the replication.  *REQUIRE* stops replication unless all existing destination datasets to have the property readonly=on.  *IGNORE* disables checking the readonly property during replication. |
| Encryption |  |
| Synchronize Destination Snapshots With Source | Set to use encryption when replicating data. Additional encryption options will appear. |
| Snapshot Retention Policy | If the destination system has snapshots but they do not have any data in common with the source snapshots, destroy all destination snapshots and do a full replication. Warning: enabling this option can cause data loss or excessive data transfer if the replication is misconfigured.  When replicated snapshots are deleted from the destination system:  *Same as Source*: use the Snapshot Lifetime from from the source periodic snapshot task.  *Custom*: define a Snapshot Lifetime for the destination system. *None*: never delete snapshots from the destination system. |




## Resilver Priority


**Resilver Priority**

| | |
|-|-|
| Enabled | Set to run resilver tasks between the configured times. |
| Begin | Choose the hour and minute when resilver tasks can be started. |
| End | Choose the hour and minute when new resilver tasks are not allowed to start. This does not affect active resilver tasks. |
| Days of the Week | Select the days to run resilver tasks. |


## Scrub Tasks Add


**Scrub Tasks**

| | |
|-|-|
| Pool | Choose a pool to scrub. |
| Thresholddays | Days before a completed scrub is allowed to run again. This controls the task schedule. For example, scheduling a scrub to run daily and setting Threshold days to 7 means the scrub attempts to run daily. When the scrub is successful, it continues to check daily but does not run again until seven days have elapsed. Using a multiple of seven ensures the scrub always occurs on the same weekday. |
| Description | Describe the scrub task. |
| Schedule | How often to run the scrub task. Choose one of the presets or choose Custom to use the advanced scheduler. |
| Enabled | Unset to disable the scheduled scrub without deleting it. |

## Cloud Sync Tasks Add


**Transfer**

| | |
|-|-|
| Description | Enter a description of the Cloud Sync Task. |
| Direction | PUSH sends data to cloud storage. PULL receives data from cloud storage. Changing the direction resets the Transfer Mode to COPY. |
| Transfer Mode | SYNC: Files on the destination are changed to match those on the source. If a file does not exist on the source, it is also deleted from the destination. COPY: Files from the source are copied to the destination. If files with the same names are present on the destination, they are overwritten. MOVE: After files are copied from the source to the destination, they are deleted from the source. Files with the same names on the destination are overwritten. |
| Directory/Files | Select the directories or files to be sent to the cloud for Push syncs, or the destination to be written for Pull syncs. Be cautious about the destination of Pull jobs to avoid overwriting existing files. |

**Remote**

| | |
|-|-|
| Credential | Select the cloud storage provider credentials from the list of available Cloud Credentials. |

**Control**

| | |
|-|-|
| Schedule | Select a schedule preset or choose Custom to open the advanced scheduler. |
| Enabled | Enable this Cloud Sync Task. Unset to disable this Cloud Sync Task without deleting it. |

**Advanced Options**

| | |
|-|-|
| Follow Sumlinks | Follow symlinks and copy the items to which they link. |
| Pre-Script | Script to execute before running sync. |
| Post-Script | Script to execute after running sync. |
| Exclude | List of files and directories to exclude from sync.  Separate entries by pressing Enter. See [rclone filtering](https://rclone.org/filtering/) for more details about the --exclude option.  |

**Advanced Remote Options**

| | |
|-|-|
| Remote Encryption | *PUSH*: Encrypt files before transfer and store the encrypted files on the remote system. Files are encrypted using the Encryption Password and Encryption Salt values. *PULL*: Decrypt files that are being stored on the remote system before the transfer. Transferring the encrypted files requires entering the same Encryption Password and Encryption Salt that was used to encrypt the files. Additional details about the encryption algorithm and key derivation are available in the [rclone crypt File formats documentation](https://rclone.org/crypt/#file-formats). |
| Transfers | Number of simultaneous file transfers. Enter a number based on the available bandwidth and destination system performance. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| Bandwidth limit | A single bandwidth limit or bandwidth limit schedule in rclone format. Separate entries by pressing Enter. Example: 08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off. Units can be specified with the beginning letter: b, k (default), M, or G. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |