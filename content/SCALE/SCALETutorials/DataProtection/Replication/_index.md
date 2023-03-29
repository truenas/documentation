---
title: "Replication Tasks"
geekdocCollapseSection: true
aliases:
 - /scale/scaletutorials/dataprotection/addreplicationscale/
 - /scale/scaletutorials/dataprotection/replication/addreplicationscale/
weight: 100
---


TrueNAS SCALE replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets or zvols on their SCALE system as a way to back up stored data. 
When properly configured and scheduled, replication takes take regular snapshots of storage pools or datasets and saves them in the destination location either on the same system or a different system. 

Local replication occurs on the same TrueNAS SCALE system using different pools or datasets. 
Remote replication can occur between your TrueNAS SCALE system and another TrueNAS system, or with some other remote server you want to use to store your replicated data.
Local and remote replication can involve encrypted pools or datasets. 

With the implementation of rootless login and the admin user, setting up replication tasks as an admin user has a few differences than with setting up replication tasks when logged in as root. Each of the tutorials in this section include these configuration differences.

The first snapshot taken for a task creates a full file system snapshot, and all subsequent snapshots taken for that task are incremental to capture differences occurring between the full and subsequent incremental snapshots.

Scheduling options allow users to run replication tasks daily, weekly, monthly, or on a custom schedule. 
Users also have the option to run a scheduled job on demand.

## Setting Up Simple Replications 
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote. 
It also covers the related steps to take prior to configuring a replication task. 
Article linked in the [Article Summaries](#article-summaries) provides the specific setup instructions by replication type.

{{< include file="/content/_includes/BasicReplicationProcess.md" type="page" >}}

## Article Summaries

{{< children depth="2" description="true" >}}