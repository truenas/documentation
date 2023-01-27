---
title: Preparing for Clustering
description: "Initial setup procedures to prepare a system for clustering"
weight: 999
tags:
- scaleclustering
- scaleminio
- tcclustering
---

{{< toc >}}

{{< include file="/content/_includes/ClusterIntro.md" type="page" >}}

## Clustering Options

TrueNAS SCALE provides a few options for setting up system clustering:

* Gluster volume configured with TrueCommand, and shared/accessd via SMB

* MinIO-created distributed cluster of TrueNAS SCALE systems

The gluster volume accessed/shared using TrueCommand and SMB with Active Directory is documented in this article.

MinIO-created distributed clustering of TrueNAS SCALE systems is documented [here]({{< relref "MinIOClustering.md" >}}).

## Warnings and Restrictions

{{< include file="/content/_includes/ClusterWarnings.md" type="page" >}}

## Requirements

{{< include file="/content/_includes/ClusterRequirements.md" type="page" >}}

## Setting up the Environment

{{< include file="/content/_includes/ClusterSetup.md" type="page" >}}


{{< taglist tag="scaleclustering" limit="10" title="Related Clustering Articles" >}}