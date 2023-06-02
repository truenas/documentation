---
title: "TrueCommand Storage Management"
description: "How to manage TrueNAS storage within TrueCommand."
weight: 30
---

{{< toc >}}

To view, add, and delete storage from a single system in TrueCommand, click *EXPLORE* in that system's window, then select the pool you want to work with.

![TrueCommandSelectPool](/images/TrueCommand/2.0/TC20TrueCommandSelectPool.png "Select a Pool")

## Adding a Dataset

1. In the pool's menu, click *CREATE DATASET*.
2. Name the dataset(s) and set how many you want to create.
3. Select a user-defined configuration profile or apply custom settings to the dataset(s), then click *CREATE*.

![TrueCommandDatasetsForm](/images/TrueCommand/2.0/TC20TrueCommandDatasetsForm.png "Datasets Form")

## Adding a Zvol

1. In the pool's menu, click *CREATE ZVOLS*.
2. Name the zvol(s) and set how many you want to create.
3. Select a user-defined configuration profile or apply custom settings to the dataset(s), then click *CREATE*.

![TrueCommandZvolsForm](/images/TrueCommand/2.0/TC20TrueCommandZvolsForm.png "Zvols Form")

## Deleting Storage

1. In the pool's menu, select the *Data* tab.
2. Check the boxes next the each item you want to delete, then click *DELETE*.
- Alternatively, you can click the three dot menu button next to each item and select either *Delete Dataset Recursively* or *Delete Dataset*.
3. Click *CONFIRM* to delete the item(s).


