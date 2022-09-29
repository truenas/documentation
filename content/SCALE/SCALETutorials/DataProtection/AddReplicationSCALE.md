---
title: "Adding Replication Tasks"
description: ""
weight: 10
aliases:
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


To streamline creating simple replication tasks use the **Replication Wizard**. The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

## Before You Begin

Configure SSH in TrueNAS before creating a remote replication task. This ensures that new snapshots are regularly available for replication.


## Setting Up Simple Replications 

{{< expand "Process Summary" "v" >}}

* **Data Protection > Replication Tasks**
  * Choose sources for snapshot replication.
    * Remote sources require an SSH connection.
    * TrueNAS shows the number of snapshots available to replicate.
 * Define the snapshot destination.
    * A remote destination requires an SSH connection.
    * Choose a destination or define it manually by typing a path.
      * Adding a new name at the end of the path creates a new dataset.
  * Choose replication security.
    * iXsystems always recommend replication with encryption.
    * Disabling encryption is only meant for absolutely secure and trusted destinations.
  * Schedule the replication.
    * You can schedule standardized presets or a custom-defined schedule.
    * Running once runs the replication immediately after creation.
      * Task is still saved and you can rerun or edit it.
  * Choose how long to keep the replicated snapshots.
{{< /expand >}}

This video tutorial presents a simple example of setting up replication:

{{< embed-video name="scaleangelfishreplication" >}}

