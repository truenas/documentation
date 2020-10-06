---
title: "Cache and Log Devices"
description: "Cache and Log Devices" 
tags: ["ZFS"]
---

### Adding Cache or Log Devices

Pools can be used either during or after pool creation to add an SSD as a cache or log device to improve performance of the pool under specific use cases. Before adding a cache or log device, refer to the ZFS Primer to determine if the system will benefit or suffer from the addition of the device.

To add a Cache or Log device during pool creation, click the **Add Cache** or **Add Log** button. Select the disk from `Available Disks` and use the <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>&nbsp (right arrow) next to `Cache VDev` or `Log VDev` to add it to that section.

To add a device to an existing pool, Extend that pool.

### Removing Cache or Log Devices

Cache or log devices can be removed by going to **Storage** > **Pools**. Choose the desired pool and click <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (Settings) > **Status**. Choose the log or cache device to remove, then click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp (Options) > **Remove**.

### Advanced Options

| Setting            | Value          | Advanced Mode | Description |
| Block size         | drop-down menu | ✓             | The default is *Inherit*, other options include, *4KiB*, *8KiB*, *16KiB*, *32KiB*, *64KiB*, *128KiB*|
