---
title: "Adding and Managing VM Devices"
description: "Provides instructions on adding or managing devices used by VMs."
weight: 12
tags:
 - vm
 - gpu
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

## Managing Devices

{{< include file="/static/includes/ManagingVMDevices.md" >}}

### Before You Begin

Before adding, editing, or deleting a VM device, stop the VM if it is running.
Click the **Running** toggle to stop or restart a VM, or use the **Stop** and **Restart** buttons on the expanded VM screen.

Expand the VM, then click on **Devices** to open the **Devices** Screen.
Click **Add** to create a new device, or click on the <span class="material-icons">more_vert</span> at the right of each device row to edit or delete a device for the selected VM.

### Editing a Device

Click on the <span class="material-icons">more_vert</span> at the right of the device row, then click on **Edit** to open the **Edit Device** screen.
The screen settings change based on the device type selected. For example, if you edit a disk (example provided below), you can change the type of virtual hard disk, the storage volume to use, or change the boot order for the device.

With the VM stopped, and the **Edit** option selected for a device. We show the procedure below using a disk device.
Steps below are optional. Change them based on your use case.

{{< trueimage src="/images/SCALE/Virtualization/EditDeviceDiskScreen.png" alt="Edit Device VM Disk" id="Edit Device VM Disk" >}}

1. (Optional) Select a new path to the zvol created when setting up the VM on the **Zvol** dropdown list.
2. (Optional) Select the type of hard disk emulation from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or select **VirtIO** for better performance if the guest OS installed in the VM has support for VirtIO disk devices.
3. (Optional) Specify the disk sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** byte values from the dropdown list.
   If set to **Default**, the sector size uses the ZFS volume values.
4. (Optional) Enter a number that reflects the boot order or priority level in **Device Order** to move this device up or down in the sequence.
   The lower the number, the higher the priority in the boot sequence.
5. Click **Save**.
4. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

{{< expand "To edit display type or bind address after creating a VM" "v" >}}
Go to **Virtual Machines**, locate the VM you want to modify, and click on it to expand it.
Click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen associated with the VM.
Click the <span class="material-icons">more_vert</span> icon at the right of the display device and click on **Edit** to open the **Edit Device** screen for that display device.
Select the IP address or other option on the **Bind** dropdown.
{{< /expand >}}

### Deleting a Device

Deleting a device removes it from the list of available devices for the selected VM. 

To delete a device:

1. Stop the VM if it is running, then click **Devices** to open the **Devices** screen showing the devices for the selected VM.
2. Click **Edit** on the <span class="material-icons">more_vert</span> icon dropdown list to the right of the device to open the **Edit Device** screen for that display device.
   The dialog shows the name or identifier for the selected device. The example below shows * undefined 8* as the name.

   {{< trueimage src="/images/SCALE/Virtualization/DeleteVMDevice.png" alt="Delete Virtual Machine Device" id="Delete Virtual Machine Device" >}}

3. Select **Force Delete** to force the system to delete the device (example device is a CD-ROM).
   When deleting a disk, it forces the system to delete the zvol even if other devices or services are using it or are affiliated with the zvol device.
4. Click **Delete Device**.

### Changing the Device Order

Changing the device order moves the device up or down in the boot order when the VM or system is restarted.
A VM attempts to boot from devices according to the **Device Order**, starting with **1000**, then ascending.

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click on the <span class="material-icons">more_vert</span> at the right of the device row, then click on **Edit** to open the **Edit Device** screen.
2. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
3. Click **Save**.
4. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.>}}

### Adding a CD-ROM Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **CD-ROM** on the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceCDROM.png" alt="Devices Add CD-ROM Type" id="Devices Add CD-ROM Type" >}}

2. Enter or browse to select the mount path to the CD-ROM device.
   Click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **/mnt** to expand or collapse the directory tree. 
3. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
4. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
5. Click **Save**.
6. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a NIC Device Type

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** to open the **Add Device** screen.
2. Select **NIC** on the **Device Type** dropdown list to show the network interface card settings.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceNIC.png" alt="Devices Add NIC" id="Devices Add NIC" >}}

3. Select the adapter type from the **Adapter Type** dropdown list.
   Choose **Intel e82585 (e1000)** for maximum compatibility with most operating systems.
   If the guest OS supports VirtIO paravirtualized network drivers, choose **VirtIO** for better performance.
4. Click **Generate** to have TrueNAS populate **MAC Address** with a new random MAC address to replace the default random address, or enter your own custom address.
5. Select a physical interface on your TrueNAS system from the **NIC To Attach** dropdown list.
6. (Optional) Select **Trust Guest Filters** to allow the virtual server to change its MAC address and join multicast groups.
   This is required for the IPv6 Neighbor Discovery Protocol (NDP).

   Setting this attribute has security risks because it allows the virtual server to change its MAC address and receive all frames delivered to this address. Determine your network setup needs before setting this attribute.
7. Click **Save**.
8. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Add a Disk Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **Disk** from the **Device Type** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisk.png" alt="Devices Add Disk" id="Devices Add Disk" >}}

2. Select the path to the zvol created when setting up the VM on the **Zvol** dropdown list.
3. Select the hard disk emulation type from the **Mode** dropdown list.
   Select **AHCI** for better software compatibility, or **VirtIO** for better performance if the guest OS installed in the VM supports VirtIO disk devices.
4. Select the sector size in bytes in **Disk Sector Size**.
   Leave set to **Default** or select either **512** or **4096** from the dropdown list.
   **Default** uses the ZFS volume values.
5. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
7. Click **Save**.
4. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a PCI Passthrough Device

{{< hint type=important >}}
Depending upon the type of device installed in your system, you might see a warning: PCI device does not have a reset mechanism defined.
You may experience inconsistent or degraded behavior when starting or stopping the VM.
Determine if you want to proceed with this action in such an instance.
{{< /hint >}}

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **PCI Passthrough Device** from the **Device Type** dropdown list.
2. Enter a value in **PCI Passthrough Device** using the format of *bus#/slot#/fcn#*.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDevicePCIpass.png" alt="Devices Add PCI Passthrough" id="Devices Add PCI Passthrough" >}}

3. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
4. Click **Save**.
5. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a USB Passthrough Device

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **USB Passthrough Device** from the **Device Type** dropdown list to configure the USB passthrough device.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceUSBpass.png" alt="Devices Add USB Passthrough" id="Devices Add USB Passthrough" >}}

2. Select the **Controller Type** from the dropdown list.
3. Select the hub controller type from the **Device** dropdown list.
   If the type is not listed, select **Specify custom**, then enter the **Vendor ID** and **Product ID**.
4. Enter a new number that represents where in the boot sequence you want to place this device in **Device Order**.
   The lower the number, the higher the device is in the boot sequence.
5. Click **Save**.
6. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

### Adding a Display Device

Display devices have a 60-second inactivity timeout.
If the VM display session appears unresponsive, try refreshing the browser tab.

After stopping the VM and clicking **Devices** to open the **Devices** screen:

1. Click **Add** and select **Display** from the **Device Type** dropdown list to configure a new display device.

   {{< trueimage src="/images/SCALE/Virtualization/VMAddDeviceDisplay.png" alt="Devices Add Display" id="Devices Add Display" >}}

2. Select the **Display Device** option from the dropdown list.
   TrueNAS allows a VM to have two different display devices, a VNC display device added through the VM creation wizard if the **Enable Display (VNC)** option is selected, and a second SPICE display device added to the VM using the **Add Device** screen with **Device Type** set to display.

   If you created the VM without the display, the **Display Type** dropdown list shows the **VNC** and **SPICE** options.
   Select the display type on the dropdown list. (VNC is recommended).
   To add a second display device, repeat this procedure and select **SPICE** (the only option for the second display device).
3. Enter a fixed port number in **Port**.
   To allow TrueNAS to assign the port after restarting the VM, set the value to zero (leave the field empty).
4. Specify the display session settings:
   a. Select the screen resolution to use for the display from the **Resolution** dropdown.
   b. Select an IP address for the display device to use in **Bind**. The default is **0.0.0.0**.
   c. Enter a unique password for the display device to securely access the VM.
5. Select **Web Interface** to allow access to the VNC web interface.
6. Click **Save**.
7. Click on the **Virtual Machines** breadcrumb at the top of the screen, and restart the VM.

## Migrating Instances VMs

The storage volumes (zvols) for virtual machines created using the **Instances** option in TrueNAS 25.04.1 can migrate to new VMs created in using the **Virtual Machines** screen options in 25.10 and later.
The process involves:
* Identifying the hidden storage volumes (zvols) associated with the Instance VMs.
* Renaming (and moving) the zvols to a new dataset where they can be seen and used by a new VM.
* Verifying the `volmode` for the zvol is correctly configured.
* Creating a new VM and selecting the migrated zvol as the storage volume.

### Before You Begin

Before beginning the process, and while in 25.04.1 or the latest maintenance release:
1. Identify the zvol names associated with the Instance VM.
2. Take a snapshot or back up the zvol for the Instance VM.
   Using ZFS commands to rename and move an existing zvol can damage data stored in the volume. Having a backup is a critical step to restoring data if something goes wrong in the process.
3. Verify the VM is operational and has Internet access, then stop the VM before you upgrade to the 25.10 or a later release.
4. Identify the dataset where you want to move the volume in 25.10 or later.
   We do not recommend renaming or moving the volume more than once, as it increases the risk of possible data corruption or loss.

You do not need to log in as the root user if the logged-in admin user has permission to use `sudo` commands.
If not, go to **Credentials > Users**, edit the user to allow `sudo` commands, or verify the root user has an active password to switch to this user when entering commands in the **Shell** screen.

### Migrating a Zvol for an Instance VM

This procedure applies to the zvol for an Instance VM that has data you want to preserve, and access from a new VM in 25.10 or later.

While in a 25.04.1 or a later maintenance release:

1. Go to **Instances**, click on **Configuration**, and then **Manage Volumes** to open the **Volumes** window.
   The **Volumes** window lists all Instance VMs and the storage volumes associated with each.

   {{< hint type="tip" >}}
   Take a screenshot of the information to refer to later when entering commands in the **Shell** screen.
   Optionally, you can highlight all the listed information and copy/paste it into a text file, but this is not necessary.
   {{< /hint >}}

2. While on the **Instances** screen, verify the VM is operational and has Internet access, and then stop the VM.
   Repeat for each zvol for an Instance VM that you plan to migrate into a new VM in 25.10 or later.

3. Go to **Datasets**, locate the zvol for the Instance VM, and take a snapshot of the volume as a backup.
   Repeat for each VM zvol you want to migrate.

4. Go to **System > Update**, and update to the next publicly available maintenance or major version release.
   Follow the release migration paths outlined in the version release notes or the [Software Releases](https://www.truenas.com/docs/softwarereleases/) article.

   After updating from a 25.04.x release, VMs created using **Instances** screens show on the **Containers** screen, and are stopped.
   Some VMs experience issues various issues like network connectivity, or are stopped and do not start.
   Refer to the troubleshooting tips below for more information. 25.10 releases correct some issues encountered in 25.04.2.4 VMs that are migrated.

   {{< expand "Troubleshooting VM Issues" "v" >}}
   After upgrading from 24.10 to 25.04, VMs are visible and running, but are expected to have issues because 25.04 release does not fully support these older VMs.
   
   VMs with a Windows OS installed could require converting to VirtIO-SCSI disks to get reconnected to the Internet.
   To restore connectivity, try clean-mounting the system from the mounted drive from within the VM, and then on the TrueNAS system (host).
   Follow this by removing driver syntax added to raw qem files.

   If a new VM is created in 25.04.2.1 and it fails to run, stop all containers.
   In the VM configuration, delete the current NIC, then select the bridge before selecting the NIC again to restore functionality.

   VMs created using the Instances feature initially show on the **Virtual Machine** screen as running when they are not running, but this state corrects on its own.

   If a VM with Windows OS is created in 25.04.0 using the **Virutal Machine** screens (not **Instances** in 25.04.1) the VM should run.
   If this VM cannot find the NIC, delete the NIC in the configuration from the **Devices** screen for that VM, and then reconfigure it to restore functionality.
   {{< /expand >}}

After updating to 25.10 or later:

5. Go to **Containers** to see which VMs are listed, then click **Configuration**, and then **Manage Volumes** to open the **Volumes** window.
   Take a screenshot of the volumes listed, or copy/paste the volumes and VM information into a text file to use later in this procedure.

6. Go to **Virtual Machines** to see which are listed.

7. Go to **System > Shell**. Exit to the Linux prompt for the system.

   Note: This is where the logged in admin user needs `sudo` permissions, or where the root user must have a password configured to enter the following commands to find, rename/move, and verify each Instance zvol is properly configured.

   Enter the following commands at the Linux system prompt:

   a. Locate the hidden zvols for the Instance VMs, by entering:

   <code>sudo zfs list -t volume -r -d 10 <i>poolname</i></code>

   Where:
   *  `-d 10` shows datasets up to 10 levels deep
   * *poolname* is the name of the pool associated with the Instance VMs.
     If you have multiple pools associated with the Instance VMs, repeat this command with the name of that pool to show hidden zvols in that pool.

   The **.ix-virt** directory contains the zvols use in Instance VMs. Ignore the entries with the **.block** extension.
   The output includes other zvols in the pool if your system has non-instance VMs configured in the pool name entered in the command.

   {{< expand "Example Command Output" "v" >}}
   ```
   re-minir-102% sudo zfs list -t volume -r tank
   NAME                                                               USED  AVAIL  REFER  MOUNTPOINT  
   tank/.ix-virt/custom/default_vm2410linux-8cppg_vm2410linuxclone1     0B  1.66T    56K  -
   tank/.ix-virt/custom/default_vm2410win-mvqznj_vm2410winclone1        0B  1.66T    56K  -
   tank/.ix-virt/custom/default_vm2410win-mvqznj_vm2410winclone2        0B  1.66T    56K  -
   tank/.ix-virt/virtual-machines/vm25041linux.block                   56K  1.66T    56K  -
   tank/.ix-virt/virtual-machines/vm25041linuxclone.block              56K  1.66T    56K  -
   tank/.ix-virt/virtual-machines/vm25041win.block                     56K  1.66T    56K  -
   tank/.ix-virt/virtual-machines/vm25041winclone.block                56K  1.66T    56K  -
   tank/default_vm2410linux-8cppg_vm2410linuxclone2                     0B  1.66T    56K  -
   tank/vms/vm2410linux-8cppg                                        40.6G  1.70T    56K  -
   tank/vms/vm2410linux-8cppg_vm2410linuxclone2                         0B  1.66T    56K  - 
   tank/vms/vm2410win-mvqznj                                         40.6G  1.70T    56K  -
   tank/vms/vm2410win-mvqznj_vm2410winclone2                            0B  1.66T    56K  -
   ```
   The zvols in the command output above with `tank/.ix-virt/custom` in the path are the zvols to migrate if these are associated with the VM you want to migrate to new VMs in the 25.10.0 or later release.
   {{< /expand >}}

   b. Rename (and move) each volume in the **.ix-virt** directory to a new location where you can select it when configuration a new VM.
   Repeat for each volume you want to migrate to a new VM. Do not rename or move the .block volumes.
   Enter the following command:

   <code>sudo zfs rename <i>tank</i>/.ix-virt/custom/<i>default_vm2410linux-icppg_vm2410linuxclone1</i> <i>tank/vms/default_vm2410linux-icppg_vm2410linuxclone1</i></code>

   Where:
   * *tank* is the pool name in the example.
   * *default_vm2410linux-icppg_vm2410linuxclone1</i>* is the name of a hidden zvol in the example, and the name given to the migrated zvol.
     We do not recommend renaming the migrated zvol to minimize potential issues with the migration process.
   * *vms* is the dataset in the example as the location to store the migrated zvols for VMs. Change this to the location on your system.

   This renames and moves it to the specified location, and returns to the system Linux prompt.
   To verify the zvol moved, enter the <code>sudo zfs list -t volume -r <i>tank</i></code> command again. The output should show the zvol in the new location.

   c. Verify the `volmode`. Enter the following command for each zvol you rename.

   <code>sudo zfs get volmode <i>tank/vms/efault_vm2410linux-icppg_vm2410linuxclone1</i></code>

   Where:
   * *tank* is the pool name.
   * *vms* is the dataset where the zvol is stored.
   * *default_vm2410linux-icppg_vm2410linuxclone1* is the name of the zvol

   This returns the `volmode` for the volume. It should be set to `dev`. If not, enter the following command to set it to `dev`:

   <code>sudo zfs set volmode=dev <i>tank/vms/efault_vm2410linux-icppg_vm2410linuxclone1</i></code>

   After completing the commands listed above for each zvol you want to migrate. Go to **Datasets** and verify all volumes you migrated show on the screen.

8. Create the new VM using the migrated zvol. Repeat these steps for each zvol you migrated.
   Go to **Virtual Machines**, click on **Add** to open the **Create Virtual Machine** wizard.

   a. Complete the first screen by entering a name for the new VM, select the operating system used by the Instances VM, enter a brief description, then if using the **Bind** setting, enter a password. Click **Next**.

   b. Configure the CPU and Memory settings, and then click **Next**.

   c. On the **Disks** wizard screen, select **Use existing disk image**, click in **Select Existing Zvol** and select the volume moved from the Instances VM.
   If you move multiple zvols, refer to the screenshot or text file with the VM/zvol list to select the correct zvol for this new VM.

   d. Click **Next** until you get to the confirmation screen, then click **Create** to add the VM.

   After adding the new VM, click on it to expand it, and click **Devices**.
   Click **Edit** for the **Disk** device, and enter **1000** in the **Device Order** field.
   Click **Save**.
   This sets the VM to boot from the disk, which prevents the volume from being overwritten by booting from the CD-ROM device with an OS image file on it (if you added one in the creation wizard).

9. Return to the **Virtual Machines** screen, expand the VM, then click **Start** to verify it opens as expected and has Internect access.
