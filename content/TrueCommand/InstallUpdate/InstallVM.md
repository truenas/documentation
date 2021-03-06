---
title: "VM"
weight: 20
---

TrueCommand is typically installed and managed using a Docker container.
However, TrueCommand also has virtual machine images available for installing TrueCommand in a virtualized environment.
TrueCommand has both VMDK and VHDX files for virtual machine installs available from http://pkg.truecommand.io/.
Most virtual machine applications, including VMware and VirtualBox, support TrueCommand VMDK files.
Hyper-V users should use a TrueCommand VHDX file.

These are the minimum specifications for a TrueCommand virtual machine:

* RAM: at least 2GB
* Storage: at least 20GB
* CPU: at least 2 cores
* Network: Use NAT, Bridged, or Host-only depending on your host networking configuration.

After downloading the appropriate TrueCommand file, extract the TrueCommand VMDK or VHDX file to a location on your system that is accessible by your virtual machine application.
Launch your virtual machine application.
In this example, VMware Workstation Player on Windows is being used.

When VMware Player is open, click **Create a New Virtual Machine**

![VMware Installer Start](/images/CORE/12.0/VMwareInstallerStart.png "VMware Installer Start")
<br><br>

Select **I will install the operating system later** and click **Next**.
Select *Linux* as the guest operating system and *Debian 10.x 64-bit* as the version.
Click **Next**.

The virtual machine can be given a name and the location can be selected.
To keep the default values, click **Next**.
Enter the maximum size of the disk to be used for storage and set **Store virtual disk as a single file**.
The recommended disk size is at least *20GB*.
Click **Next**.
Review the settings for the virtual machine and click **Finish**.

![Vmware Installer VM Create](/images/CORE/12.0/VmwareInstallerVMCreate.png "Vmware Installer VM Create")
<br><br>

Now that the virtual machine has been created, we need to add our TrueCommand virtual image to the machine.
Select the virtual machine from the list and click **Edit virtual machine settings**.

![VMware Installer VM Create Summary](/images/CORE/12.0/VMwareInstallerVMCreateSummary.png "VMware Installer VM Create Summary")
<br><br>

Next, click **Add…**.
The TrueCommand file downloaded earlier is a virtual hard disk.
Select *Hard Disk* from the list of options and click **Next**.
Select *SCSI* and click **Next**.
Ensure that **Use an existing virtual disk** is set and click **Next**.

It then prompts to select an existing virtual disk from the host system.
Click **Browse…** and select the TrueCommand virtual disk (`.vmdk` file) that was downloaded earlier.
Click **Finish**.
If VMware player prompts to convert the virtual disk to a new format, click **Keep Existing Format**.

The final step is to remove the initial hard disk that was created when the virtual machine was created.
Select the virtual machine from the list and click **Edit virtual machine settings**.
Select the first hard disk and click **Remove**.

The TrueCommand virtual machine is now ready to be used.
To boot the TrueCommand virtual machine, select it from the list of virtual machines and click **Play virtual machine**.
TrueCommand usage documentation is available on the TrueNAS Documentation Hub at https://www.truenas.com/docs/hub/truecommand/.
