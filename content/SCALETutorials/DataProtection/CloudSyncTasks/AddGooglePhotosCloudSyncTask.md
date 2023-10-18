---
title: "Adding a Google Photos Cloud Sync Task"
description: "Provides instructions on how to set up Google Photos API credentials and use them to create a cloud sync task."
weight: 40
tags:
- scalecloud
- scalesgooglephotos
- scalebackup
---

{{< toc >}}

Google Photos works best in TrueNAS using a Google Photos API key and [rclone](https://rclone.org/) token.

## Creating the API Credentials

{{< include file="_includes/GooglePhotosAPICredentials.md" >}}

### Enable API

{{< include file="_includes/GooglePhotosEnableAPI.md" >}}

### Configure Authentication

{{< include file="_includes/GooglePhotosConfigureAuthentication.md" >}}

### Create Credentials

{{< include file="_includes/GooglePhotosCreateCredentials.md" >}}

## Configuring Rclone

{{< include file="_includes/GooglePhotosConfigureRclone.md" >}}

## Adding Google Photos Cloud Credentials

{{< include file="_includes/GooglePhotosAddCloudCredentials.md" >}}

## Creating the Cloud Sync Task

{{< include file="/content/_includes/CreateCloudSyncTaskScale.md" >}}
