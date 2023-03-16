---
title: "Virtualization Screens"
description: "This article provides information on the screens and settings to add virtual machines and devices VMs use to your TrueNAS SCALE system."
weight: 20
alias: /scale/scaleuireference/virtualization/
tags:
 - scalevm
 - scalegpu
---

{{< toc >}}


The **Virtualization** option displays the **Virtual Machines** screen that displays the list of VMs configured on the TrueNAS SCALE system.

If there are no VMs configured on the system, the **No Virtual Machines** screen displays. This also displays if you delete all VMs on the system.

![AddVMNoVMs](/images/SCALE/22.12/AddVMNoVMs.png "No Virtual Machine Screen")

After adding virtual machines (VMs) to the system the screen displays a list of the VMs. 

![VMListedSCALE](/images/SCALE/22.12/VMListedSCALE.png "Virtual Machines Listed")

Click on the VM name or the expand <iconify-icon icon="ic:twotone-expand-more"></iconify-icon> down arrow to the right of a VM to open the details screen for that VM. 

The **State** toggle displays and changes the state of the VM. 
The **Autostart** checkbox, when selected, automatically starts the VM if the system reboots. When cleared you must manually start the VM.

## Create Virtual Machine Wizard Screens

**Add Virtual Machines** and the **Add** button in the top right of the screen opens the **[Create Virtual Machine](#create-virtual-machine-wizard-screens)** wizard configuration screens.

The **Create Virtual Machine** configuration wizard displays all settings to set up a new virtual machine.

Use **Next** and **Back** to advance to the next or return to the previous screen to change a setting. 
Use **Save** to close the wizard screens and add the new VM to the **Virtual Machines** screen.

### Operating System Screen
The **Operating System** configuration screen settings specify the VM operating system type, the time it uses, its boot method, and its display type.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsOpSysSCALE](/images/SCALE/22.12/CreateVMWindowsOpSysSCALE.png "Operating System 1") 

| Field | Description |
|------|-------------|
| **Guest Operating System** | Required. Select the VM operating system type from the dropdown list. Select from **Windows**, **Linux** or **FreeBSD**. |
| **Enable Hyper-V Enlightenments** | (Displays only if **Guest Operating System** selected is Windows). This emulates a Hyper-V compatible hypervisor for the Windows guest operating system and makes some Hyper-V specific features available. |
| **Name** | Required. Enter an alphanumeric name for the virtual machine. |
| **Description** | Enter a description (optional). |
| **System Clock**  | Select the VM system time from the dropdown list. Options are **Local** or **UTC**. Default is **Local**. |
| **Boot Method** | Select the boot method option from the dropdown list. Select **UEFI** for newer operating systems or **Legacy BIOS** for older operating systems that only support BIOS booting. |
| **Shutdown Timeout** | Enter the time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout entered expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable Display** | Enable a Display (Virtual Network Computing) remote connection. Requires UEFI booting. |
| **Display Type** | Select either [VNC](https://novnc.com/info.html) or [SPICE](https://spice-space.org/) from the dropdown list. |
| **Bind** | Select the IP address option from the dropdown list. The primary interface IP address is the default. A different interface IP address can be chosen. |
{{< /expand >}}
### CPU and Memory Screen
The **CPU and Memory** configuration wizard screen settings specify the number of virtual CPUs to allocate to the virtual machine, cores per virtual CPU socket, and threads per core. Also to specify the CPU mode and model, and the memory size.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsCPUMemSCALE](/images/SCALE/22.12/CreateVMWindowsCPUMemSCALE.png "CPU and Memory") 

| Field | Description |
|-------|-------------|
| **Virtual CPUs** | <p>The default setting when using the Create VM Wizard for a Windows **Guest OS** is 2. The default setting when using the Create VM Wizard for UNIX-type **Guest OS** is 1.</p>This is a required field. Enter the number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might impose operational or licensing restrictions on the number of CPUs. |
| **Cores** | Required. Enter the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | Required. Enter the number of threads per core. A single CPU core can have up to two threads per core. A dual core could have up to four threads. The product of vCPUs, cores, and threads must not exceed 16. |
| **Optional: CPU Set (Examples: 0-3,8-11)** | Specify the logical cores that VM is allowed to use. Better cache locality can be achieved by setting CPU set base on CPU topology. E.g. to assign cores: 0,1,2,5,9,10,11 you can write: `1-2,5,9-11` |
| **Pin vcpus** | When number of vcpus is equal to number of cpus in CPU set vcpus can be automatically pinned into CPU set. Pinning is done by mapping each vcpu into single cpu number in following the order in CPU set. This will improve CPU cache locality and can reduce possible stutter in GPU passthrough VMs. |
| **CPU Mode** | <p>The **CPU Mode** must be set to **Custom** in order for the **CPU Model** to be selected. When **CPU Mode** is set to **Host Model** or **Host Passthrough** the **CPU Model** selection does not apply.</p> Select the CPU mode attribute from the dropdown list to allow your guest VM CPU to be as close to the host CPU as possible. Select **Custom** to make it so a persistent guest virtual machine sees the same hardware no matter what physical physical machine the guest VM boots on. It is the default if the CPU mode attribute is not specified. This mode describes the CPU presented to the guest.  Select **Host Model** to use this shortcut to copying the physical host machine CPU definition from the capabilities XML into the domain XML. As the CPU definition copies just before starting a domain, a different physical host machine can use the same XML while still providing the best guest VM CPU each physical host machine supports. Select **Host Passthrough** when the CPU visible to the guest VM is exactly the same as the physical host machine CPU, including elements that cause errors  within libvirt. The downside of this is you cannot reproduce the guest VM environment on different hardware. |
| **CPU Model** | Select a CPU model to emulate when **CPU Mode** is set to **Custom**. |
| **Memory Size** | Allocate RAM for the VM. Minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
| **Minimum Memory Size** | When not specified, guest system is given the fixed amount of memory listed in **Memory Size**. When **Minimum Memory Size** is specified, guest system is given memory within the range of **Minimum Memory Size** and **Memory Size** as needed. |
| **Optional: NUMA nodeset (Example: 0-1)** | Node set allows setting NUMA nodes for multi NUMA processors when CPU set was defined. Better memory locality can be achieved by setting node set based on assigned CPU set. Example: if cpus 0,1 belong to NUMA node 0, then setting nodeset to 0 will improve memory locality. |
{{< /expand >}}

### Disks Screen
The **Disks** configuration wizard screen settings specify whether to create a new zvol on an existing dataset for a disk image or use an existing zvol or file for the VM. You also specify the disk type, zvol location and size.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsDisksSCALE](/images/SCALE/22.12/CreateVMWindowsDisksSCALE.png "Create VM Disks") 

| Field | Description |
|-------|-------------|
| **Create new disk image** | Select this radio button to create a new zvol on an existing dataset to use as a virtual hard drive for the VM. |
| **Use existing disk image** | Select this radio button to use an existing zvol or file for the VM. Displays the **Select Existing Zvol** dropdown list field. |
| **Select Disk Type** | Select desired disk type as either **AHCI** or **VirtIO** from the dropdown list. Select **AHCI** for Windows VMs. **VirtIO** requires a guest OS that supports VirtIO paravirtualized network drivers. |
| **Zvol Location** | Select a dataset for the new zvol from the dropdown list of datasets on the system. |
| **Size** | Required. Allocate space for the new zvol. (Examples: 500 KiB, 500M, 2 TB). Units smaller than MiB are not allowed. |
| **Select Existing Zvol** | Displays after selecting the **Use existing disk image** radio button. Select an existing zvol from the dropdown list of zvols on the system. |
{{< /expand >}}
### Network Interface Screen
The **Network Interface** screen settings specify the network adaptor type, mac address and the physical network interface card associated with the VM. 
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsNetworkInterfaceSCALE](/images/SCALE/22.12/CreateVMWindowsNetworkInterfaceSCALE.png "Network Interface") 

| Field | Description |
|-------|-------------|
| **Adapter Type** | Select the adaptor type from the dropdown list. **Intel e82545 (e1000)** emulates the same Intel Ethernet card and provides compatibility with most operating systems. **VirtIO** provides better performance when the operating system installed in the VM supports VirtIO para-virtualized network drivers. |
| **Mac Address** | Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Select the physical interface to associate with the VM from the dropdown list. |
| **Trust Guest Filters** | Default setting is not enabled. Set this attribute to allow the virtual server to change its MAC address. As a consequence, the virtual server can join multicast groups. The ability to join multicast groups is a prerequisite for the IPv6 Neighbor Discovery Protocol (NDP).<br>Setting **Trust Guest Filters** to "yes" has security risks, because it allows the virtual server to change its MAC address and so receive all frames delivered to this address. |
{{< /expand >}}
### Installation Media Screen
The **Installation Media** screen settings specify the operation system installation media image on a dataset or upload one from the local machine.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsInstallMediaSCALE](/images/SCALE/22.12/CreateVMWindowsInstallMediaSCALE.png "Installation Media") 

| Field | Description |
|-------|-------------|
| **Choose Installation Media Image** | Ether the path or browse to the operating system installer image file. To collapse the browse tree click on the <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt**. |
| **Upload an Installer Image File** | Select to display image upload the **ISO save location** and browse <iconify-icon icon="bxs:folder"></iconify-icon>**/mnt** options that populate the field with the mount path, and the **Choose File** button. |
| **Choose File** | Click to save the path populated in the **ISO save location** field. |
| **Upload** | Click to upload the file selected in the **ISO save location** field. |
{{< /expand >}}
### GPU Screen
The **GPU** screen settings specify graphic processing unit (GPU) for the VM. It also provides the option to hide the VM from the Microsoft Reserved Partition (MSR) on Windows systems.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsGPUsSCALE](/images/SCALE/22.12/CreateVMWindowsGPUsSCALE.png "GPU Screen")

| Field | Description |
|-------|-------------|
| **Hide from MSR** | Select to enable the VM to hide the GPU from the Microsoft Reserved Partition (MSR). |
| **Ensure Display Device** | Select to ensure that the guest always has access to a video device. Required for headless installations like ubuntu server for the guest to operate properly. Leave checkbox clear for cases where want to use a graphic processing unit (GPU) passthrough and do not want a display device added. |
| **GPU's** | Select a physical GPU on your system from the dropdown list to use for the VM. |
{{< /expand >}}
### Confirm Options Screen
The **Confirm Options** screen displays the settings selected using the **Create Virtual Machine** wizard screens. It displays the number CPUs, cores, threads, the memory, name of the VM and the disk size.
{{< expand "Click Here for More Information" "v" >}}

![CreateVMWindowsConfirmSCALE](/images/SCALE/22.12/CreateVMWindowsConfirmSCALE.png "Confirm Screen") 
{{< /expand >}}

Click **Save** to add the VM to the **Virtual Machines** screen. Click **Back** to return to the previous screens to make changes.

{{< taglist tag="scalevm" limit="10" >}}
{{< taglist tag="scalegpu" limit="10" title="Related GPU Articles" >}}