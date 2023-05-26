---
title: "Managing GPUs"
description: "Provides information on isolating Graphic Processing Units (GPUs) installed in your system for use by a VM in TrueNAS SCALE."
weight: 60
aliases:
tags:
 - scalegpu
 - scalesettings
---


The **Isolate GPU PCI's ID** widget on the **System > Advanced** screen allows you to isolate a GPU installed in your system for use by a virtual machine (VM).

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" type="page" >}}

## Isolated GPU Device(s)
The **Isolated GPU Device(s)** widget displays an graphics processing unit (GPU) device(s) configured on your system. 

![AdvancedSettingIsolatedGPUDeviceWidget](/images/SCALE/22.02/AdvancedSettingIsolatedGPUDeviceWidget.png "SCALE Advanced Settings Isolated GPU Device Widget") 

Click **Configure** to open the **Isolate GPU PCI's ID** screen where you can select a GPU to isolate it for GPU passthrough. 
GPU passthrough allows the TrueNAS SCALE kernel to directly present an internal PCI GPU to a virtual machine (VM).

![IsolatedGPUPCIIDsConfigScreen](/images/SCALE/22.02/IsolatedGPUPCIIDsConfigScreen.png "SCALE Advanced Settings Isolated GPU PCI ID Screen") 

The GPU device acts like the VM is driving it, and the VM detects the GPU as if it is physically connected. Select the GPU device ID from the dropdown list. 
To isolate a GPU you must have at least two in your system; one allocated to the host system for system functions and the other available to isolate for use by a VM or application. 
Isolating the GPU prevents apps and the system from accessing it.

Click **Save**.

{{< taglist tag="scalegpu" limit="10" >}}
