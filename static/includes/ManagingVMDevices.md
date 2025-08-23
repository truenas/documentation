&NewLine;

After creating a VM, the next step is to add virtual devices for that VM.
Using the **Create Virtual Machine** wizard configures at least one disk, NIC, and a display as part of the process, but you can add more devices to suit your use case.
Go to **Virtual Machines**, then click anywhere on a VM entry to expand it and show the options for the VM.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Details" id="VM Details" >}}

The VM options change when the VM is running.

Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen for that VM.
Click the <span class="material-icons">more_vert</span> icon at the right of each listed device to see device options.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="VM Devices Screen" id="VM Devices Screen" >}}

The devices for the VM display as a list.

Device notes:
* A virtual machine attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.
* A **CD-ROM** device allows booting a VM from a CD-ROM image like an installation CD.
  The CD image must be available in the system storage.
* A **Display** device provides remote clients with a way to connect to VM display sessions using a SPICE client, or by installing a 3rd party remote desktop server inside your VM.
  SPICE clients are available from the [SPICE Protocol site](https://www.spice-space.org/).
