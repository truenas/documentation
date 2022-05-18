---
title: "Zvols Screen"
weight: 19
---

Use the **Storage > Pools Add Zvol** screen to add a zvol to a pool.

![AddZvolAdvancedOptionScreen](/images/CORE/13.0/AddZvolAdvancedOptionScreen.png "Add Zvol Advanced Options Screen")

**Basic Options**

| Setting | Description |
|---------|-------------|
| **Zvol name** | Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, a zvol with a 70-character filename or path cannot be used as an iSCSI extent. This setting is required. |
| **Comments** | Enter any notes about this zvol. |
| **Size for this zvol** | Specify size and value. Units like **t**, **TiB**, and **G** can be used. The size of the zvol can be increased later, but cannot be reduced. If the size is more than 80% of the available capacity, the creation fails with an **out of space** error unless **Force size** is also selected. |
| **Force size** | Select to force the system to create a zvol that brings a pool to over 80% capacity (not recommended). By default, the system does not create a zvol if that operation brings the pool to over 80% capacity. |
| **Sync** | Select an option from the dropdown list that sets the data write synchronization. **Inherit** sets zvol to get sync settings from the parent dataset, **Standard** uses the sync settings requested by the client software, **Always** that waits for data writes to complete,or **Disabled** that never waits for writes to complete. |
| **Compression level** | Select a compression option from the dropdown list. Select **Off** to not compress data to save space. Refer to Compression for a description of the available algorithms. |
| **ZFS Deduplication** | Do not change this setting unless instructed to do so by your iXsystems support engineer. |
| **Sparse** | Select to provide thin provisioning. Use with caution as writes fail when the pool is low on space. |
| **Read-only** | Select an option from the dropdown list to set whether the zvol can be modified. Options are **Inherit** to get and use the parent pool or root dataset settings, **On** to prevent modifying the zvol, or **Off** to allow the zvol to be modified. |
| **Inherit** (**Encryption Options**) | Select to enable the zvol to use the encryption properties of the root dataset. |

Selecting **ADVANCED OPTIONS** adds one additional setting.

| Setting | Description |
|---------|-------------|
| **Block size** | select the default **Inherit** or select from the other dropdown list options **4KiB**, **8KiB**, **16KiB**, **32KiB**, **64KiB** or **128KiB**. See [Creating a Zvol]({{< relref "/CORE/CORETutorials/Storage/Pools/zvols.md" >}}) for more information on these options and block sizes. |

**SUBMIT** activates after all required fields are populated. Use to save settings.

Use **CANCEL** to exit without saving settings and display the **Pools** screen.

## Additional Information

[Dataset Screens]({{< relref "/CORE/UIReference/Storage/Pools/DatasetsScreen.md" >}})

[Pools Screens]({{< relref "/CORE/UIReference/Storage/Pools/PoolsScreens.md" >}})

[Creating Pools]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}})

[Adding Zvols]({{< relref "/CORE/CORETutorials/Storage/Pools/Zvols.md" >}}) 