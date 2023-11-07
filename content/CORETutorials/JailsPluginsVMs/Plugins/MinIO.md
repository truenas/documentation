---
title: "MinIO Plugin"
description: "Describes how to configure the MinIO plugin on TrueNAS CORE and gives migration instructions from the deprecated S3 built-in service."
weight: 20
tags:
- coreplugins
- corejailspluginsvm
- cores3
- minio
---

{{< toc >}}

The **Minio** official plugin from the iXsystems catalog is a High-performance object (S3) storage suite, natively available on TrueNAS CORE.

{{< expand "Background" "v" >}}
S3 is an object storage protocol used by many major cloud providers, including Amazon Web Services™. You can view these files with a web browser. S3 is the de facto standard for cloud-based storage. Organizations or online application developers can use TrueNAS with the Minio plugin to manage S3 storage. This can replace or archive expensive cloud storage.
{{< /expand >}}

This tutorial describes how to install the Minio plugin on TrueNAS and also how to migrate data from the deprecated S3 built-in service to the Minio plugin.

{{< expand "S3 Service Deprecation" "v" >}}
{{< include file="/_includes/S3Deprecation.md" >}}
{{< /expand >}}

{{< expand "Why migrate?" "v" >}}
The TrueNAS S3 service is based on version 2021-11-24T23:19:33Z and utilizes MinIO Filesystem/Gateway mode. Filesystem/Gateway mode is deprecated, beginning with MinIO version RELEASE.2022-10-24T18-35-07Z. Newer deployments of MinIO are unable to access data from the TrueNAS S3 service.

The MinIO client provides provisions for properly migrating and converting MinIO data stored in buckets. However, all configuration data must be migrated by manually recreating users, policies, buckets, and other resources on the new deployment.

For additional information please review [Migrate from Gateway or Filesystem Mode](https://min.io/docs/minio/container/operations/install-deploy-manage/migrate-fs-gateway.html) on the MinIO Documentation hub.
{{< /expand >}}

## First Steps

[Create a dataset]({{< relref "Datasets.md" >}}) to use for Minio Plugin storage.
MinIO manages files as objects.
These objects cannot mix with other dataset files.

In order to migrate data from an existing S3 service deployment running on TrueNAS CORE, the new destination dataset must have available storage capacity at least equal to the existing S3 service configuration.
This storage capacity can exist on a different device for network migration, however transfer rates may be slower depending on network configuration.

Total pool capacity should not exceed 80%.
For example, if the original S3 dataset is 25TB and the destination dataset is created on the same pool, total pool capacity should be at least 62.5TB (25TB for each dataset plus 20% overhead).

## Installing the Minio Plugin



{{< hint type=tip >}}
If migrating data from an existing S3 service deployment, ensure ports for the Minio plugin are different from the existing service.
{{< /hint >}}

## Installing the MinIO Client

## Migrating from the S3 service to Minio Plugin
