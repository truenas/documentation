---
title: "Isolating GPU for VMs"
description: "Provides information on isolating Graphics Processing Units (GPU) installed in your system."
weight: 60
aliases:
tags:
 - gpu
 - vm
 - settings
---

Systems with more than one graphics processing unit (GPU) installed can isolate additional GPU device(s) from the host operating system (OS) and allocate them for use by a virtual machine (VM).
Isolated GPU devices are unavailable to the OS and for [allocation to applications]({{< relref "/scale/scaletutorials/apps/_index.md #allocating-gpu" >}}).

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" >}}

The **Isolated GPU Device(s)** widget on the **System > Advanced** screen shows configured isolated GPU device(s).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingIsolatedGPUDeviceWidget.png" alt="Isolated GPU Device(s) Widget" id="Isolated GPU Device(s) Widget" >}}

## Isolating GPU Device(s)

To isolate a GPU, you must have at least two in your system; one available to the host system for system functions and the other available to isolate for use by a VM.
One isolated GPU device can be used by a single VM.
Isolated GPU cannot be allocated to applications.

To allocate an isolated GPU device, select it while creating or editing VM configuration.
When allocated to a VM, the isolated GPU connects to the VM as if it were physically installed in that VM and becomes unavailable for any other allocations.

Click **Configure** on the **Isolated GPU Device(s)** widget to open the **Isolate GPU PCI Ids** screen, where you can select a GPU device to isolate.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsConfigScreen.png" alt="Isolated GPU PCI Ids Screen" id="Isolated GPU PCI Ids Screen" >}}

Select the GPU device(s) to isolate from the dropdown list.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsSelect.png" alt="Select Devices" id="Select Devices" >}}

Click **Save**.
