---
title: "Virtual Machines"
description: "Tutorials for configuring TrueNAS SCALE virtualization features and creating virtual machines."
geekdocCollapseSection: true
weight: 12
related: false
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

TrueNAS has built-in virtualization capabilities that allow running multiple operating systems on a single system, maximizing hardware utilization, and consolidating workloads.

A *virtual machine (VM)* is a software-based computer that runs inside your TrueNAS system, and appears as a separate physical machine to the operating system installed within it.
VMs use virtualized hardware components, including, network interfaces, storage volumes, graphics adapters, and other devices, providing complete isolation between different operating systems and applications.

VMs offer stronger isolation than [containers](/scaletutorials/containers/) but require more system resources, making them ideal for running full operating systems, legacy applications, or services that need dedicated environments.

{{< expand "What system resources do VMs require?" "v" >}}
{{< include file="/static/includes/VMRequirements.md" >}}
{{< /expand >}}

## Creating a Virtual Machine

Before creating a VM:
- Obtain an installer <file>.iso</file> or image file for the OS you intend to install
- Create a [zvol]({{< ref "AddManageZvols" >}}) on a storage pool that is available for both the virtual disk and the OS install file.

If the VM needs to access local NAS storage, you must create a network bridge to allow communication.
See [Accessing TrueNAS Storage from a VM](#accessing-truenas-storage-from-a-vm) below for more information.

### Using the Create Virtual Machine Wizard

To create a new VM, go to **Virtual Machines** and click **Add** to open the **Create Virtual Machine** wizard.
If you have not yet added a virtual machine to your system, clicking **Add Virtual Machines** opens the same wizard.

1. Configure the **Operating System** settings.

   a. Select the operating system for the VM from the **Guest Operating System** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineOperatingSystemSettings.png" alt="Operating System Settings" id="Operating System Settings" >}}

   Compare the recommended specifications for the guest operating system with your available host system resources when allocating virtual CPUs, cores, threads, and memory size.

   b. Enter a name for the VM.

   c. (Optional) Enter a description for the VM. This can be any short text string describing how the VM is used or which operating system is configured.

   d. (Optional) Change the default settings in **System Clock** and **Boot Method** to suit your use case.
      Select **UTC** as the VM system time from the **System Clock** dropdown if you do not want to use the default **Local** setting.
      Select **UEFI** from the **Boot Method** dropdown, unless using an older OS that requires **Legacy BIOS**.

   e. (Optional) Select **Enable Secure Boot** to enable cryptographic verification of boot loaders, operating system kernels, and drivers during VM startup.
      This security feature prevents unauthorized or malicious code from running during the boot process by checking digital signatures against trusted certificates.
      Secure Boot is required for Windows 11 and some Linux distributions, and can be optional or unsupported for older operating systems.
      Secure boot is only available from the VM creation wizard.

   f. (Optional) Select **Enable Trusted Platform Module (TPM)** to provide a virtual TPM 2.0 device for the VM.
      TPM provides hardware-based security functions, including secure key storage, cryptographic operations, and platform attestation.
      This is required for Windows 11 and enhances security for other operating systems that support TPM.

   g. (Optional) Select **Start on Boot** to start the VM after the system is restarted or boots up.

   h. (Optional) Select **Enable Display (VNC)** to enable a Virtual Network Computing (VNC) remote connection for the VM.
      **Enable Display (VNC)** shows the **Bind** and **Password** fields.

   i. Select the IP address or option to use in **Bind**. Shows if you select **Enable Display**.
      The **Bind** and **Password** fields display. If it is selected, to change the default IP address to use a specific address as the display network interface; otherwise, leave it set to **0.0.0.0**.
      The **Bind** list populates with any existing logical interfaces, such as static routes, configured on the system.
      You cannot edit the **Bind** setting after saving the VM settings.

   j. Enter a password to secure access to the virtual display in **Password**. The **Password** field shows if you select **Enable Display**.
      The login screen for the display shows a credential entry field for this password.

   Click **Next**.

2. Enter the **CPU and Memory** settings for your VM.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineCPUAndMemorySettings.png" alt="CPU and Memory Settings" id="CPU and Memory Settings" >}}

   When the **Guest Operating System** is set to Windows, **Virtual CPUs** shows the default value of 2.
   The VM operating system might have operational or licensing restrictions on the number of CPUs.

   Do not allocate too much memory to a VM. Activating a VM with all available memory allocated to it can slow the host system or prevent other VMs from starting.

   Leave **CPU Mode** set to **Custom** if you want to select a CPU model.

   Use **Memory Size** and **Minimum Memory Size** to specify how much RAM to dedicate to this VM.
   To dedicate a fixed amount of RAM, enter a value (minimum 256 MiB) in the **Memory Size** field and leave **Minimum Memory Size** empty.

   To allow for memory usage flexibility (sometimes called ballooning), define a specific value in the **Minimum Memory Size** field and a larger value in **Memory Size**.
   The VM uses the **Minimum Memory Size** for normal operations but can dynamically allocate up to the defined **Memory Size** value in situations where the VM requires additional memory.
   Reviewing available memory from within the VM typically shows the **Minimum Memory Size**.

   Click **Next**.

3. Configure **Disks** settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachinesDisksSettings.png" alt="Disks Settings" id="Disks Settings" >}}

   Select **Create new disk image** to create a new zvol on an existing dataset.

   Select **Use existing disk image** to use an existing zvol for the VM.

   Select either **AHCI** or **VirtIO** from the **Select Disk Type** dropdown list. We recommend using **AHCI** for Windows VMs.

   Select the location for the new zvol from the **Zvol Location** dropdown list.

   Enter a value in **Size (Examples: 500KiB, 500M, and 2TB)** to indicate the amount of space to allocate for the new zvol.

   Click **Next**.

4. Configure **Network Interface** settings.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachinesNetworkInterfaceSettings.png" alt="Network Interface Settings" id="Network Interface Settings" >}}

   Select the network interface type from the **Adapter Type** dropdown list. Select **Intel e82585 (e1000)** as it offers a higher level of compatibility with most operating systems.

   Select **VirtIO** if the guest operating system supports para-virtualized network drivers.
   The **VirtIO** network interface requires a guest OS that supports VirtIO para-virtualized network drivers.

   Select the network interface card to use from the **Attach NIC** dropdown list.
   If the VM needs to access local NAS storage, attach a [network bridge](#accessing-truenas-storage-from-a-vm) interface.

   Click **Next**.

5. Configure **Installation Media** settings to upload the operating system you selected in step 1.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVirtualMachineInstallationMediaSettings.png" alt="Installation Media Settings" id="Installation Media Settings" >}}

   You can create the VM without an OS installed, then edit the VM to add it later.
   To add the installation media, type the path or browse to select the location of the image file, and then select it.

   To upload an <file>iso</file>, click **Upload New Image File**. Enter the path or browse to select the location of the file.

   {{< trueimage src="/images/SCALE/Virtualization/CreateVMWInstallMediaUploadSCALE.png" alt="Upload Installation Media" id="Upload Installation Media" >}}

   Click **Upload** to begin the upload process. After the upload finishes, click **Next**.

6. Specify **GPU** settings. When available, use a [GPU previously isolated for VM use]({{< ref "ManageGPUSCALE.md" >}}).

   {{< trueimage src="/images/SCALE/Virtualization/AddVMGPU.png" alt="GPU Settings" id="GPU Settings" >}}

   {{< hint type="note" title="Supported GPUs" >}}
   TrueNAS does not have a list of approved GPUs at this time, but TrueNAS does support various NVIDIA, Intel, and AMD GPUs.
   {{< /hint >}}

7. Confirm your VM settings, then click **Save**.

### Adding and Removing Devices

{{< include file="/static/includes/ManagingVMDevices.md" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

See [Adding and Managing VM Devices]({{< ref "AddManageVMDevicesSCALE" >}}) for more information.

## Managing a Virtual Machine

After creating the VM and configuring devices for it, click on the VM to expand it and show the options to manage the VM.

{{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVMDetails.png" alt="VM Details" id="VM Details" >}}

An active VM displays options for <i class="material-icons" aria-hidden="true" title="VNC">settings_ethernet</i> **Display** and <i class="material-icons" aria-hidden="true" title="Serial Shell">keyboard_arrow_right</i> **Serial Shell** connections.

When a display device is configured, remote clients can connect to VM display sessions.

If the display connection screen appears distorted, try adjusting the display device resolution.

Use the **Running** toggle or click <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** to follow a standard procedure to do a clean shutdown of the running VM.
Click <i class="material-icons" aria-hidden="true" title="Power Off Button">power_settings_new</i> **Power Off** to halt and deactivate the VM, which is similar to unplugging a computer.

{{< hint type="tip" title="OS Dependent Toggles" >}}
If the VM does not have a guest OS installed, the VM **Running** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** button might not function as expected.
The **Running** toggle and <i class="material-icons" aria-hidden="true" title="Stop Button">stop</i> **Stop** buttons send an ACPI power down command to the VM operating system, but since an OS is not installed, these commands time out.
Use the **Power Off** button instead.
{{< /hint >}}

## Installing an OS

After configuring the VM in TrueNAS and an OS <file>.iso</file> file is attached, start the VM and begin installing the operating system.

{{< hint type="note" title="OS Specific Settings" >}}
Some operating systems can require specific settings to function properly in a virtual machine.
For example, plain Debian can require advanced partitioning when installing the OS.
Refer to the documentation for your chosen operating system for tips and configuration instructions.
{{< /hint >}}

{{< expand "Installing Debian OS Example" "v" >}}
Upload the Debian <file>.iso</file> to the TrueNAS system and attach it to the VM as a CD-ROM device.
This example uses Debian 12 and basic configuration recommendations.
Modify settings as needed to suit your use case.

1. Click **Virtual Machines**, then **ADD** to use the VM wizard.
   Configure settings as needed.

   {{< trueimage src="/images/SCALE/Virtualization/ScaleDebianVMOsSystem.png" alt="Add Debian VM" id="Add Debian VM" >}}

<div style="margin-left: 33px">
   {{< expand "Settings used in this example" "v" >}}

   **Operating System**
   {{< truetable >}}
   | Setting | Description |
   |---------|-------------|
   | Guest Operating System | Linux |
   | Name | debianVM |
   | Description | Debian VM |
   {{< /truetable >}}

   **CPU and Memory**
   {{< truetable >}}
   | Setting | Description |
   |---------|-------------|
   | Memory Size | 1024 MiB |
   {{< /truetable >}}

   **Disks**
   {{< truetable >}}
   | Setting | Description |
   |---------|-------------|
   | **Create new disk image** | Selected |
   | Zvol Location | Select pool. |
   | Size | 30 GiB |
   {{< /truetable >}}

   **Network Interface**
   {{< truetable >}}
   | Setting | Description |
   |---------|-------------|
   | Attach NIC | Select the physical interface to associate with the VM. |
   {{< /truetable >}}

   **Installation Media**

   The installation ISO is uploaded to local storage.
   If the ISO is not uploaded, select **Upload an installer image file**.
   Select a dataset to store the ISO, click **Choose file**, then click **Upload**. Wait for the upload to
   complete.

   **GPU**

   Leave the default values.

   **Confirm Options**

   Verify the information is correct and then click **Save**.

   {{< /expand >}}
</div>

<p style="margin-left: 33px">After creating the VM, start it. Expand the VM entry and click **Start**.</p>

2. Click **Display** to open a SPICE interface and see the Debian Graphical Installation screens.

3. Press <kbd>Enter</kbd> to start the Debian Graphical Install.

   a. Enter your localization settings for **Language**, **Location**, and **Keymap**.

   b. Debian automatically configures networking and assigns an IP address with DHCP.
      - If the network configuration fails, click **Continue** and do not configure the network yet.

   c. Enter a name in **Hostname**.

   d. Enter a **Domain name**.

   e. Enter the root password and re-enter the root password.

   f. Enter a name in **New User**.

   g. Select the username for your account or accept the generated name.

   h. Enter and re-enter the password for the user account.

   j. Choose the time zone, *Eastern* in this case.

4. Detect and partition disks.

   a. Select **Guided - use entire disk** to partition.

   b. Select the available disk.

   c. Select **All files in one partition (recommended for new users)**.

   d. Select **Finish partitioning and write changes to disk**.

   e. Select **Yes** to **Write the changes to disks?**.

5. Install the base system:

   a. Select **No** to the question **Scan extra installation media**.

   b. Select **Yes** when asked **Continue without a network mirror**.

6. Install software packages:

   a. Select **No** when asked **Participate in the package usage survey**.

   b. Select **Standard** system utilities.

   c. Click **Continue** when the installation finishes.

   After the Debian installation finishes, close the display window.

7. Remove the device or edit the device order.
   In the expanded section for the VM, click **Power Off** to stop the new VM.

   a. Click **Devices**.

   b. Remove the CD-ROM device containing the install media or edit the device order to boot from the Disk device.

      - To remove the CD-ROM from the devices, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Delete**.
      Click **Delete Device**.

      - To edit the device boot order, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and select **Edit**.
      Change the CD-ROM **Device Order** to a value greater than that of the existing Disk device, such as *1005*.
      Click **Save**.

8. Return to the **Virtual Machines** screen and expand the new VM again.

9. Click **Start**, then click **Display**.

{{< /expand >}}
{{< expand "What if GRUB does not start automatically?" "v" >}}
If GRUB does not run when you start the VM, enter the following commands after each start.
At the shell prompt:
- Enter `FS0:` and press <kbd>Enter</kbd>.
- Enter `cd EFI` and press <kbd>Enter</kbd>.
- Enter `cd Debian` and press <kbd>Enter</kbd>.
- Enter `grubx64.efi` and press <kbd>Enter</kbd>.

{{< hint type=important >}}
To ensure it starts automatically, create the <file>startup.nsh</file> file at the root directory on the VM. To create the file:

1. Go to the **Shell**.

2. At the shell prompt, enter `edit startup.nsh`.

3. In the editor, enter:

   a. Enter `FS0:` and press <kbd>Enter</kbd>.

   b. Enter `cd EFI` and press <kbd>Enter</kbd>.

   c. Enter `cd Debian` and press <kbd>Enter</kbd>.

   d. Enter `grubx64.efi` and press <kbd>Enter</kbd>.

   Use the <kbd>Control+s</kbd> keys (Command+s for Mac OS) then press <kbd>Enter</kbd>.

   Use the <kbd>Control+q</kbd> keys to quit.

4. Close the display window

5. To test if it boots up on startup:

   a. Power off the VM.

   b. Click **Start**.

   c. Click **Display**.

   d. Log into your Debian VM.
{{< /hint >}}
{{< /expand >}}

## Configuring Virtual Machine Network Access

Configure VM network settings during or after installation of the guest OS.
To communicate with a VM from other parts of your local network, use the IP address configured or assigned by DHCP within the VM.

To confirm network connectivity, send a ping to and from the VM and other nodes on your local network.

{{< expand "Debian OS Example" "v" >}}
Open a terminal in the Debian VM.

Enter `ip addr` and record the address.

Enter `ping` followed by the known IP or hostname of another client on the network, that is not your TrueNAS host.
Confirm the ping is successful.
To confirm internet access, you can ping a known web server, such as `ping google.com`.

Log in to another client on the network and ping the IP address of your new VM.
Confirm the ping is successful.
{{< /expand >}}

### Accessing TrueNAS Storage From a VM

By default, VMs are unable to communicate directly with the host NAS.
If you want to access your TrueNAS SCALE directories from a VM, for example,  to connect to a TrueNAS data share, you have multiple options.

If your system has more than one physical interface, you can assign your VMs to a NIC other than the primary one your TrueNAS server uses.
This method makes communication more flexible but does not offer the potential speed of a bridge.

If your system has only one physical interface, create a bridge interface for the VM to use.
Stop all existing apps, VMs, and services using the current interface, edit the interface and VMs, create the bridge, and add the bridge to the VM device.
See [Accessing NAS from VM]({{< ref "ContainerNASBridge" >}}) for more information.

<div class="noprint">

## Migrating Containers VMs

The storage volumes (zvols) for virtual machines created using the **Instances** screen in TrueNAS 25.04.0 or 25.04.1 (renamed the **Containers** screen in 25.04.2 and later) can migrate to new VMs created using the **Virtual Machines** screen in 25.10 and later.
The process involves:

- Identifying the hidden storage volumes (zvols) associated with the Instance VMs.
- Renaming (and moving) the zvols to a new dataset where they can be seen and used by a new VM.
- Verifying the `volmode` for the zvol is correctly configured.
- Creating a new VM and selecting the migrated zvol as the storage volume.

### Before You Begin

Before beginning the process:

1. Identify the zvol names associated with the Instance (Container) VM.
2. Take a recursive snapshot or back up the pool configured for Instance VMs.
   Using ZFS commands to rename and move an existing zvol can damage data stored in the volume.
   Having a backup is a critical step to restoring data if something goes wrong in the process.
3. Verify the VM is operational and network is functioning as expected. One way to do this is to verify it has Internet access.
   Then stop the VM before you upgrade to the next release.
4. Identify the dataset where you want to move the volume.
   We do not recommend renaming or moving the volume more than once, as it increases the risk of possible data corruption or loss.

You do not need to log in as the root user if the logged-in admin user has permission to use `sudo` commands.
If not, go to **Credentials > Users**, edit the user to allow `sudo` commands, or verify the root user has an active password to switch to this user when entering commands in the **Shell** screen.

### Migrating a Zvol for an Instance VM

This procedure applies to the zvol for an Instance or Container VM that has data you want to preserve, and access from a new VM in using the **Virtual Machines** screens in later releases.

1. Go to **Instances** (or **Containers**), click on **Configuration**, and then **Manage Volumes** to open the **Volumes** window.
   The **Volumes** window lists all Instances VMs and the named associated storage volumes (zvols).

   Record the volume name or take a screenshot of the information to refer to later when entering commands in the **Shell** screen. Zvol names are similar to the VM name but not identical.
   Optionally, you can highlight all the listed information and copy/paste it into a text file, but this is not necessary.

2. While on the **Instances** screen, verify the VM is operational and the network is operating as expected.
   One way to verify external network access is to check Internet access. Stop the VM before upgrading.
   Repeat for each zvol that you plan to migrate into a new VM in later releases.

3. Go to **Datasets**, locate the pool associated with Instances (Containers), and take a recursive snapshot to back up all Instances VM zvols.
   These zvols are found in the hidden **.ix-virt** directory created in the pool Instances uses, selected when you configure the feature.

4. Go to **System > Update**, and update to the next publicly available maintenance or major version release.
   Follow the release migration paths outlined in the version release notes or the [Software Releases](https://www.truenas.com/docs/softwarereleases/) article.

   After updating from a 25.04.x release, VMs created using **Instances** screens show on the **Containers** screen, and are stopped.
   Some VMs experience various issues like network connectivity, or are stopped and do not start.
   Refer to the troubleshooting tips below for more information. 25.10 releases correct some issues encountered in 25.04.2.4 VMs that are migrated.

   {{< expand "Troubleshooting VM Issues" "v" >}}
   After upgrading from 24.10 to 25.04, VMs are visible and running, but are expected to have issues because 25.04 release does not fully support these older VMs.

   VMs with a Windows OS installed could require converting to VirtIO-SCSI disks to get reconnected to the Internet.
   To restore connectivity, try clean-mounting the system from the mounted drive from within the VM, and then on the TrueNAS system (host).
   Follow this by removing driver syntax added to raw qem files.

   If a new VM is created in 25.04.2.1 and it fails to run, stop all containers.
   In the VM configuration, delete the current NIC, then select the bridge before selecting the NIC again to restore functionality.

   VMs created using the Instances feature initially show on the **Virtual Machine** screen as running when they are not running, but this state corrects on its own.

   If a VM with Windows OS is created in 25.04.0 using the **Virtual Machine** screens (not **Instances** in 25.04.1) the VM should run.
   If this VM cannot find the NIC, delete the NIC in the configuration from the **Devices** screen for that VM, and then reconfigure it to restore functionality.
   {{< /expand >}}
After upgrading to a release that shows the **Virtual Machines** screen and the **Containers** option:

5. Go to **Containers** to see which VMs are listed, then click **Configuration**, and then **Manage Volumes** to open the **Volumes** window.
   Take a screenshot of the volumes listed, or copy/paste the volumes and VM information into a text file to use later in this procedure.
   Zvol names are similar to the VM but not identical. Volume names are used in step 6 below.

6. Go to **System > Shell**. Exit to the Linux prompt for the system.

   Note: This is where the logged-in admin user needs `sudo` permissions, or where the root user must have a password configured to enter the following commands to find, rename/move, and verify each Instance zvol is properly configured.
   Experienced users can use switch to the root user if the root user has a password assigned and enabled.

   Enter the following commands at the Linux system prompt:

   a. Locate the hidden zvols for the Instance VMs, by entering:

   <code>sudo zfs list -t volume -r -d 10 <i>poolname</i></code>

   Where:
   - `-d 10` shows datasets up to 10 levels deep
   - *poolname* is the name of the pool associated with the Instance VMs.
     If you have multiple pools associated with the Instance VMs, repeat this command with the name of that pool to show hidden zvols in that pool.

   The **.ix-virt** directory contains the zvols use in Instance VMs. Ignore the entries with the **.block** extension, and those not included in the **.ix-virt** directory.
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
   - *tank* is the pool name in the example.
   - *default_vm2410linux-icppg_vm2410linuxclone1* is the name of a hidden zvol in the example, and the name given to the migrated zvol.
     We do not recommend renaming the migrated zvol to minimize potential issues with the migration process.
   - *vms* is the dataset in the example as the location to store the migrated zvols for VMs. Change this to the location on your system.

   This renames and moves it to the specified location, and returns to the system Linux prompt.
   To verify the zvol moved, enter the <code>sudo zfs list -t volume -r <i>tank</i></code> command again. The output should show the zvol in the new location.

   c. Verify the `volmode`. Enter the following command for each zvol you rename.

   <code>sudo zfs get volmode <i>tank/vms/default_vm2410linux-icppg_vm2410linuxclone1</i></code>

   Where:
   - *tank* is the pool name.
   - *vms* is the dataset where the zvol is stored.
   - *default_vm2410linux-icppg_vm2410linuxclone1* is the name of the zvol

   This returns the `volmode` for the volume. It should be set to `dev`. If not, enter the following command to set it to `dev`:

   <code>sudo zfs set volmode=dev <i>tank/vms/default_vm2410linux-icppg_vm2410linuxclone1</i></code>

   After completing the commands listed above for each zvol you want to migrate. Go to **Datasets** and verify all volumes you migrated show on the screen.

7. Create the new VM using the migrated zvol. Repeat these steps for each zvol you migrated.
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

8. Return to the **Virtual Machines** screen, expand the VM, then click **Start** to verify it opens as expected and has Internet access.

## Virtual Machines Contents

{{< children depth="2" description="true" >}}

</div>
