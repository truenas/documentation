---
title: "Managing GPUs"
description: "Provides information on isolating Graphics Processing Units (GPUs) installed in your system."
weight: 60
aliases:
tags:
 - scalegpu
 - scalesettings
---

Systems with more than one graphics processing unit (GPU) installed can isolate additional GPU device(s) from the host operating system (OS) and allocate them for use by configured applications or a virtual machine (VM).

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" >}}

The **Isolated GPU Device(s)** widget on the **System > Advanced** screen shows configured isolated GPU device(s).

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingIsolatedGPUDeviceWidget.png" alt="Isolated GPU Device(s) Widget" id="Isolated GPU Device(s) Widget" >}}

To isolate a GPU, you must have at least two in your system; one allocated to the host system for system functions and the other available to isolate for use by either a VM or applications.
It is possible for some specific GPUs to allocate individual cores between the OS and applications, but this is highly hardware dependent.

To allocate an isolated GPU device, select it while creating or editing VM configuration, in the **GPU Configuration** settings of individual applications that support GPU allocation, or in the **Resource Reservation** settings of [**Install Custom App**]({{< relref "InstallCustomAppScreens.md" >}}).
When allocated to a VM, the isolated GPU connects to the VM as if it were physically installed in that VM and becomes unavailable for any other allocations.
One isolated GPU device can be used by a single VM or multiple applications, but not both.

## Isolating GPU Device(s)

Click **Configure** on the **Isolated GPU Device(s)** widget to open the **Isolate GPU PCI's Ids** screen, where you can select a GPU device to isolate.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsConfigScreen.png" alt="Isolated GPU PCI Ids Screen" id="Isolated GPU PCI Ids Screen" >}}

Select the GPU device ID from the dropdown list.

Click **Save**.

{{< taglist tag="scalegpu" limit="10" >}}
