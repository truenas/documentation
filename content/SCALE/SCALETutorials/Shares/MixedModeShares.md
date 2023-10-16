---
title: "Multiprotocol Shares"
description: "Provides instructions on setting up SMB and NFSv4 mixed-mode shares."
weight: 40
tags:
- scaleshares
- scalesmb
- scalenfs
---

{{< toc >}}

## About Multiprotocol Shares


## Adding a Multiprotocol Share Dataset

Before creating a mixed-mode share, create the dataset you want the share to use for data storage.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

We recommend creating a new dataset with the **Share Type** set to **MULTIPROTOCOL** for the new mixed-mode share.

{{< expand "Creating a Dataset" "v" >}}
{{< include file="/content/_includes/CreateDatasetSCALE.md" >}}
{{< /expand >}}

