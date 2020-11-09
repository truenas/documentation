---
title: "Replication"
description: "How to back up snapshots to a different system."
tags: ["vCenter Plugin", "TrueNAS Enterprise"]
weight: 50
---

**Configure > Replication** is used to schedule remote backups of snapshots that have been taken as part of a periodic snapshot.
Click **+** to open the *Create Replication* window.

<img src="/images/vcp-21.PNG">
<br><br>

| Setting                                        | Value         | Description                                                                                                                                      |
|------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Datastore                                      | dropdown menu | Datastore with snapshots to copy to the Remote Datastore. Choose a datastore with a periodic snapshot schedule.                                  |
| Remote Datastore                               | string        | Remote Datastore string Datastore to store the replicated snapshots. Enter the ZFS filesystem name. Example: pool1/dataset1.                     |
| Recursively Replicate Child Dataset's Snapshot | checkbox      | Set to include snapshots of child datasets from the primary datastore.                                                                           |
| Delete Stale Snapshot                          | checkbox      | Set to delete snapshots from the Remote Datastore that no longer exist in the datastore.                                                         |
| Replication Stream Compression                 | dropdown menu | Choices are lz4 (fastest), pigz (all rounder), plzip (best compression), or                                                                      |
| Limit KB/s                                     | integer       | off. Selecting a compression algorithm can reduce the size of the data being replicated.                                                         |
| Begin                                          | dropdown menu | Time to start the replication task.                                                                                                              |
| End                                            | dropdown menu | The end time that a replication can start. Replication tasks already in progress will continue past this time.                                   |
| Enable                                         | checkbox      | Activate this replication schedule.                                                                                                              |
| Remote Hostname                                | string        | Hostname or IP address of the remote system to receive the replicated snapshots.                                                                 |
| Remote Port                                    | integer       | Port number used by the SSH server on the remote system.                                                                                         |
| Encryption Cipher                              | dropdown menu | Standard encryption provides the best security. Fast is less secure, but has better transfer rates for devices with limited cryptographic speed. |
| Remote Host Key                                | string        | Type or paste the SSH public key of the NAS containing the Datastore.                                                                            |

The system that receives the snapshots must have SSH enabled and a public SSH key from the source system added to the receiving system root user account.
This public key is the same key used as the *Remote Host Key*.
See the [SSH Connections article](/hub/initial-setup/networking/ssh-connections/) for instructions about copying the source system replication key.

Click **Ok** to save the new replication schedule and add it to the list.
If the task does not immediately appear in the list, click **Refresh**.
A replication that runs for the first time can take a long time to complete.
Schedule replications to run outside peak usage times for both the source and destination systems.
