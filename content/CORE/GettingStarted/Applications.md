---
title: "Applications"
description: "Describes how to install applications on TrueNAS CORE."
weight: 90
tags:
- gettingstarted
- apps
- plugins
---

With the rest of the system configured and data being shared over a network, the final step to consider for first time setup is installing any of the application solutions.

Applications or features added to TrueNAS are created in separate plugins, jails, or virtual machines that are kept separate from the base TrueNAS operating system.
If anything goes wrong or a security vulnerability is exploited in one of these application environments, TrueNAS remains unaffected.
These solutions safely expand TrueNAS capabilities in a restricted, safeguarded way.

The primary method to install applications is to use *plugins*.
These are pre-packaged applications that quickly install in a tailor-made environment.
Some plugins are supported by iXsystems while others are provided and maintained by the open source community.

A *jail* is a restricted FreeBSD operating system installed as a separate subset of TrueNAS.
Jails can install a wide variety of applications and be tuned to very specific use cases, but they require more extensive knowledge of FreeBSD and command line operation.

A *virtual machine* is a fully independent operating system installation.
This reserves or splits the available hardware resources to create a different, full operating system experience.
TrueNAS can install Windows or Unix-like operating systems in a virtual machine (VM), but regular system performance is reduced while virtual machines are running.

Click one of the tabs below to see instructions on installing your preferred application solution.

{{< expand "Network Hardware Offloading" "v" >}}
Plugins that use a network interface need to Disable Hardware Offloading in **Network -> Interface**.
Disabling hardware offloading can reduce general network performance for that interface, so it is recommended to use a secondary interface for application environments.
{{< /expand >}}

{{< tabs "Application Solutions" >}}
{{< tab "Plugins" >}}
This instruction demonstrates adding a plugin by walking you through installing the community-favorite [Plex](https://www.plex.tv/) application.
You need an account with Plex to complete these instructions.

{{< include file="/_includes/COREPlexPlugin.md" >}}

{{< /tab >}}
{{< tab "FreeBSD Jails" >}}
## Installing a Jail
1. Go to the **Jails** page and click **ADD**.

   ![Jails](/images/CORE/Jails/Jails.png "Adding a new Jail")

2. Enter a name for the jail in **Name**, select the **Release** version, then click **NEXT**.

   ![JailsAddName](/images/CORE/Jails/JailsAddName.png "Jail Creation: Name and Release")

3. To allow the jail access to the internet, set **DHCP Autoconfigure IPv4** and click **NEXT**.
   Additional defaults are set when you select the DHCP option.

   ![JailsAddNetworkingDHCP](/images/CORE/Jails/JailsAddNetworkingDHCP.png "Jail Creation: Default Internet Access")

4. Review the **Jail Summary** and click **SUBMIT**.

   ![JailsAddConfirm](/images/CORE/Jails/JailsAddConfirm.png "Jail Creation: Confirm Settings")

## Accessing a Jail
1. Go to **Jails** and click the **>** next to the newly created jail.
   Click **START**.

   ![JailsStart](/images/CORE/Jails/JailsStart.png "Starting a Jail")

2. When the jail **State** changes to **up**, click **SHELL** to see the jail command line.

   ![JailsShell](/images/CORE/Jails/JailShell.png "Jail Shell")

{{< /tab >}}
{{< tab "Virtual Machines" >}}
## Installing a Virtual Machine
Virtual machines require uploading an operating system <file>.iso</file> to TrueNAS.
This example shows using an Ubuntu <file>.iso</file>:

1. Go to **Virtual Machines** and click **ADD**.

   ![VirtualMachines](/images/CORE/VirtualMachines/VirtualMachines.png "Adding a new VM")
   
2. Select a **Guest Operating System** and enter a name in **Name**.
   For this example the guest operating system is set to **Linux**.
   Click **NEXT**.

   ![VirtualMachinesAddOperatingSystemLinux](/images/CORE/VirtualMachines/VirtualMachinesAddOperatingSystemLinux.png "VM Creation: Operating System")

3. Enter the physical resources to give the VM.
   Larger numbers in **Virtual CPUs**, **Cores**, **Threads**, and **Memory** allow the VM to perform better, but reduce the performance of the TrueNAS system.
   Click **NEXT**.

   ![VirtualMachinesAddCPU](/images/CORE/VirtualMachines/VirtualMachinesAddCPU.png "Allocating resources to the VM")
   
4. Set **Create a new disk image** and select the VM storage from **Zvol Location**.
   Enter a usable storage number in **Size** (example shows 50 GiB) and click **NEXT**.

   ![VirtualMachinesAddDisks](/images/CORE/VirtualMachines/VirtualMachinesAddDisks.png "Choosing a VM hard drive")

5. **Network Interface** automatically detects the hardware and sets defaults that allow network access.
   Make sure these settings are valid, then click **NEXT**.

   ![VirtualMachinesAddNetworkInterface](/images/CORE/VirtualMachines/VirtualMachinesAddNetworkInterface.png "VM Network Settings")
   
6. Set **Upload an installer image file** to see additional options.
   Select a location on the TrueNAS system in **ISO save location**.
   Click **Choose File** and browse to the OS installation <file>.iso</file>.
   Click **UPLOAD** and wait for the process to finish (this can take some time).
   Click **NEXT**.

   ![VirtualMachinesAddInstallationMedia](/images/CORE/VirtualMachines/VirtualMachinesAddInstallationMedia.png "Uploading the ISO file")

7. Confirm the VM configuration is correct and click **SUBMIT**.

   ![VirtualMachinesAddConfirm](/images/CORE/VirtualMachines/VirtualMachinesAddConfirm.png "Confirm the VM configuration")

## Accessing a Virtual Machine
1. Go to **Virtual Machines** and click **>** next to the newly created VM.
   Click **START**.

   ![VirtualMachinesStart](/images/CORE/VirtualMachines/VirtualMachinesStart.png "Starting a VM")
   
2. When the VM **State** changes to **up**, click **VNC** to see the VM display.

   ![VirtualMachinesOptions](/images/CORE/VirtualMachines/VirtualMachinesOptions.png "Launch VNC")

   Because this example uses an Ubuntu <file>.iso</file>, the Ubuntu installation screen shows.

   ![UbuntuInstall](/images/CORE/VirtualMachines/UbuntuInstall.png "Ubuntu Virtual Machine: Install")

   From here, install the OS as normal.

3. After the OS install completes, go back to **Virtual Machines**, toggle the **State**, and click **DEVICES**.

   ![VirtualMachinesDevices](/images/CORE/VirtualMachines/VirtualMachinesDevices.png "VM Devices")

   Find the **CDROM** entry and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> > **Delete** to remove the installation <file>.iso</file> from the VM and allow it to boot into the full OS the next time the VM activates.
{{< /tab >}}
{{< /tabs >}}
