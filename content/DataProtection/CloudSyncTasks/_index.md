---
title: "Cloud Sync Tasks"
description: "Tutorials to configure and manage data backups from TrueNAS to various third-party cloud service providers."
geekdocCollapseSection: true
weight: 20
aliases:
 - /scaleuireference/dataprotection/cloud-sync-tasks/
tags:
 - cloud
related: false
keywords:
- enterprise data storage solution
- nas cloud storage
- data protection
- data backup and recovery
---

This section has tutorials to configure and manage data backups from TrueNAS to various third-party cloud service providers.

TrueNAS can send, receive, or synchronize data with a cloud storage provider.
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

{{< hint type=important >}}
Using the cloud means data can go to a third-party commercial vendor not directly affiliated with iXsystems.
You should fully understand vendor pricing policies and services before using them for cloud sync tasks.

iXsystems is not responsible for any charges incurred using third-party vendors with the cloud sync feature.
{{< /hint >}}

## Cloud Sync Task Requirements
You must have:
* All system [storage]({{< ref "/Storage" >}}) configured and ready to receive or send data.
A cloud storage provider account and location (like an Amazon S3 bucket).

You can create cloud storage account credentials using **Credentials > Backup Credentials > Cloud Credentials** before adding the sync task or add it when configuring the cloud sync task using **Add** on the **Data Protection > Cloud Sync Task** widget to open the **Cloudsync Task Wizard**.
See the [Cloud Credentials]({{< ref "/Credentials/BackupCredentials/AddCloudCredentials" >}}) article for instructions on adding a backup cloud credential.

<div class="noprint">

## Cloud Sync Tasks Contents

{{< children depth="2" description="true" >}}

</div>
