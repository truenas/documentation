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

{{< include file="/static/includes/GooglePhotosAPICredentials.md" >}}

### Enable API

{{< include file="/static/includes/GooglePhotosEnableAPI.md" >}}

### Configure Authentication

{{< include file="/static/includes/GooglePhotosConfigureAuthentication.md" >}}

### Create Credentials

{{< include file="/static/includes/GooglePhotosCreateCredentials.md" >}}

## Configuring Rclone

{{< include file="/static/includes/GooglePhotosConfigureRclone.md" >}}

## Adding Google Photos Cloud Credentials

{{< include file="/static/includes/GooglePhotosAddCloudCredentials.md" >}}

## Creating the Cloud Sync Task

{{< include file="/static/includes/CreateCloudSyncTaskScale.md" >}}
