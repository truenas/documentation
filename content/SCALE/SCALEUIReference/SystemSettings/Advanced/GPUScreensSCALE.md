---
title: "Isolated GPU Advanced Settings Screens"
description: "This article provides information on the advanced system setting **Isolated GPU Device(s)** widget and configuration screen settings."
weight: 55
aliases:
tags:
 - scalesettings
 - scalegpus
 - scalevms
---


The **System > Advanced** screen includes configuration settings for adding graphic processing unit (GPU) devices to the system. GPUs are used in configuring virtual machines.

## Isolated GPU Device(s)
The **Isolated GPU Device(s)** widget displays an graphics processing unit (GPU) device(s) configured on your system. 

![AdvancedSettingIsolatedGPUDeviceWidget](/images/SCALE/22.02/AdvancedSettingIsolatedGPUDeviceWidget.png "SCALE Advanced Settings Isolated GPU Device Widget") 

**Configure** opens the **Isolate GPU PCI's ID** screen that allows users to isolate additional GPU devices for GPU passthrough.

### Isolate GPU PCI's ID Configuration Screen
The **Isolate GPU PCI's ID** configuration screen allows you to add GPU devices to your system. 
{{< expand "Click Here for More Information" "v" >}}
GPU passthrough allows the TrueNAS SCALE kernel to directly present an internal PCI GPU to a virtual machine (VM).

![IsolatedGPUPCIIDsConfigScreen](/images/SCALE/22.02/IsolatedGPUPCIIDsConfigScreen.png "SCALE Advanced Settings Isolated GPU PCI ID Screen") 

The GPU device acts like the VM is driving it, and the VM detects the GPU as if it is physically connected. Select the GPU device ID from the dropdown list. 
To isolate a GPU you must have at least two in your system; one allocated to the host system for system functions and the other available to isolate for use by a VM or application. 
Isolating the GPU prevents apps and the system from accessing it.

{{< taglist tag="scalegpus" limit="10" >}}
{{< taglist tag="scalevms" limit="10" title="Related VM Articles" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}