---
---

**Operating System**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Guest Operating System** | Select the VM operating system type from the dropdown list three operating systems listed **Windows**, **Linux** or **FreeBSD**. |
| **Name** | Enter an alphanumeric name for the virtual machine. |
| **Description** | (optional) Enter a description for the OS. |
| **System Clock** | VM system time. Select from the dropdown list options  **Local** or **UTC**. Default is **Local**. |
| **Boot Method** | Select from the dropdown list options **UEFI**, **UEFI-CSM** or **Grub**. Select **UEFI** for newer operating systems or **UEFI-CSM (Compatibility Support Mode)** for older operating systems that only support BIOS booting. Grub is not recommended but can be used when the other options do not work. |
| **Shutdown Timeout** | The time in seconds the system waits for the VM to cleanly shut down. During system shutdown, the system initiates power-off for the VM after the shutdown timeout expires. |
| **Start on Boot** | Select to start this VM when the system boots. |
| **Enable VNC** | Select to enable a VNC (Virtual Network Computing) remote connection. Requires UEFI booting. |
| **Delay VM Boot Until VNC Connects** | Select to wait to start VM until VNC client connects. |
| **Bind**  | Select from the dropdown list options **0.0.0.0**, **::** **::1** or the system IP addresses provided on the list. VNC network interface IP address. The primary interface IP address is the default. A different interface IP address can be chosen. |
{{< /truetable >}}

**CPU and Memory**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Virtual CPUs** | Number of virtual CPUs to allocate to the virtual machine. The maximum is 16, or fewer if the host CPU limits the maximum. The VM operating system might also have operational or licensing restrictions on the number of CPUs. |
| **Cores** | Specify the number of cores per virtual CPU socket. The product of vCPUs, cores, and threads must not exceed 16. |
| **Threads** | Specify the number of threads per core. The product of vCPUs, cores, and threads must not exceed 16. |
| **Memory Size** | Allocate RAM for the VM. Minimum value is 256 MiB. This field accepts human-readable input (Ex. 50 GiB, 500M, 2 TB). If units are not specified, the value defaults to bytes. |
{{< /truetable >}}

**Disks**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Create new disk image** | Select to create a new zvol on an existing dataset. This is used as a virtual hard drive for the VM. Select Use existing disk image to use an existing zvol or file for the VM. |
| **Select Disk Type** | Select desired disk type from the dropdown list options **AHIC** or **VirtIO**. |
| **Zvol Location** | Select a dataset for the new zvol. |
| **Size** | Allocate space for the new zvol. (Examples: 500 KiB, 500M, 2 TB) MiB. Units smaller than MiB are not allowed. |
{{< /truetable >}}

**Network Interface**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Adapter Type** | Select an adapter from the dropdown list. **Intel e82545 (e1000)** emulates the same Intel Ethernet card. This provides compatibility with most operating systems. **VirtIO** provides better performance when the operating system installed in the VM supports VirtIO paravirtualized network drivers. |
| **Mac Address** | Enter the desired address into the field to override the randomized MAC address. |
| **Attach NIC** | Select the physical interface to associate with the VM. |
{{< /truetable >}}

**Installation Media**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Choose Installation Media Image** | Browse to the operating system installer image file. |
| **Upload an Installer Image File** | Set to display image upload options. |
{{< /truetable >}}