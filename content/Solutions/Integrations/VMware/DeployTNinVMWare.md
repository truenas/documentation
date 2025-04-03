---
title: TrueNAS Virtualized with ESXi
description: "Guide to deploy TrueNAS as a VM in a VMWare ESXi environment."
weight: 3
tags:
- vmware
- console
---

This article describes deploying a TrueNAS virtual machine (VM) in a VMWare ESXi environment.
ESXi version 8 is shown in this article.

## Before You Begin

Before starting configuration work in VMWare:

* Allocate a drive or a few drives in your server cluster for the TrueNAS virtual machine.
  The anticipated storage needs for your deployment determines the size and number of drives you need.

* Download the <file>.iso</file> file from the [TrueNAS.com downloads page](https://www.truenas.com/download-truenas-scale/).

* Visit the TrueNAS [hardware guide]({{< ref "/scale/gettingstarted/scalehardwareguide" >}}) and take note of the minimum system requirements.
  Note the information in the **Memory** and **Storage Device Sizing** sections.

  The hardware guide provides guidance on how much memory, the number of CPUs, and drive size you need to configure.

* Determine your data storage requirements. Consider the number of storage pools and the type of storage you need for your deployment or how you plan to use the TrueNAS.
  See [Setting Up Storage]({{< ref "/SCALE/GettingStarted/Configure/SetUpStorageScale" >}}) for information on pool layouts.

  Determine the number of virtual hard drives (vmdks) you want to create when setting up your virtual machine.
  For example, if you want a mirror layout you need to add a minimum of three drives, one for the boot drive and two for the mirrored storage.
  If you want a mirror with a hot spare, you need to add a minimum of four drives, one for the boot drive, two for the mirrored storage and one for the hot spare.

* Configure your network per your system requirements. Have the information ready when you configure your TrueNAS global network settings in the web interface.

## Deploying TrueNAS in VMWare ESXi

Launch your VMware ESXi interface using your login credentials.

{{< trueimage src="/images/VMWareESXi/LoginScreen.png" alt="VMWare ESXi Login Screen" id="VMWare ESXi Login Screen" >}}

### Setting Up Storage
Set up the storage needed for the new VM. First click on **Storage** and then the drive allocated for TrueNAS. Create the datastore directories for the ISO media and the TrueNAS virtual machine.

{{< expand "Need more help setting up storage? Click here." "v" >}}
1. Select **Storage** on the navigation panel on the left side of the screen.

   {{< trueimage src="/images/VMWareESXi/StorageDatastoresTab.png" alt="Storage Datastores Tab" id="Storage Datastores Tab" >}}

2. Select the drive you allocated for the TrueNAS VM. The example uses *DS-1*. The detailed view for this drive displays.

   {{< trueimage src="/images/VMWareESXi/SelectDatastoreBrowser.png" alt="Select Datastore Browser" id="Select Datastore Browser" >}}

3. Click **Datastore Browser** to open the browser window, and then click **Create directory**. Enter the name of the directory in the **New Directory** dialog.

   {{< trueimage src="/images/VMWareESXi/NameNewDirectory.png" alt="New Directory" id="New Directory" >}}

   Add two directories.
   The first directory is for TrueNAS storage needs the other for the TrueNAS <file>.iso</file> file you downloaded.
   Choose a name that is easy to identify on a list of virtual machines.
   The example uses *truenas 1* as the directory name for the storage needs.
   Click **Create directory** in the **New directory** dialog to create the directory.

   Click **Create directory** again to open the **New directory** dialog to create the second new directory.
   When finished you should have both directories listed in the **Datastore Browser** window.

   {{< trueimage src="/images/VMWareESXi/DatastoreBrowserWithNewDirectories.png" alt="Datastore Browser with New Directories" id="Datastore Browser with New Directories" >}}

{{< /expand >}}

### Uploading the TrueNAS ISO
After creating the ISO directory, upload the TrueNAS <file>.iso</file> file to the **ISO** directory.

Select the directory created for the <file>.iso</file> file and then click **Upload**.

{{< trueimage src="/images/VMWareESXi/UploadTrueNasISOFile.png" alt="Upload TrueNAS ISO File" id="Upload TrueNAS ISO File" >}}

### Creating the Virtual Machine

After setting up the storage needs, create the new virtual machine.
Select **Virtual Machines** on the navigation panel on the left side of the screen.

{{< trueimage src="/images/VMWareESXi/VirtualMachinesScreen.png" alt="Virtual Machines Screen" id="Virtual Machines Screen" >}}

Select the storage drive for the TrueNAS VM and then click **Create/Register VM**. The **New virtual machine** creation wizard displays.
Use these settings:

* On the **Select a name and guest OS** wizard screen, select **Linux** for **Guest OS family** and then **Debian GNU/Linux 6 (64-bit)** on the **Guest OS Version** dropdown list.

* On the **Customize settings** wizard screen set **CPU** to **2**, set **Memory** to **16 GB**, and **Hard disk 1** to **16 GB**.

  You need a minimum of two drives set to at least **16 GB**. To add a drive, click **Add hard disk**.

  You can add more hard drive now or use the **Edit** option to add drives later after saving the new virtual machine.
  To create a mirror layout you need at least three hard drives, one for boot and two to create the mirrored storage.
  Add as many hard drives as you need to create your desired storage layout. You can add more drives later after you install TrueNAS.

{{< expand "Need more help using the ESXi VM Wizard? Click here." "v" >}}
To create the virtual machine for your TrueNAS, from the **Virtual Machines** screen:

1. Click **Create/Register VM** to display the configuration wizard. On the **Select creation type** screen select **Create a new virtual machine** and then click **Next**.

   {{< trueimage src="/images/VMWareESXi/VMWizardCreateNew.png" alt="Create New Virtual Machine" id="Create New Virtual Machine" >}}

2. Configure the VM name and guest OS settings. Type the name for the TrueNAS VM. Use the name you gave the new directory. The example uses *truenas1*.

   {{< trueimage src="/images/VMWareESXi/VMWizardSelectNameAndGuestOS.png" alt="Select Name and Guest OS" id="Select Name and Guest OS" >}}

   Select **Linux** for **Guest OS family** and then **Debian GNU/Linux 6 (64-bit)** on the **Guest OS Version** dropdown list.

   Click **Next**

3. Select the storage drive you allocated for the TrueNAS VM. The example uses *DS-1*. Click **Next**

   {{< trueimage src="/images/VMWareESXi/VMWizardSelectStorage.png" alt="Select Storage" id="Select Storage" >}}

4. Enter these settings in the **Customize settings** screen.

   {{< trueimage src="/images/VMWareESXi/VMWizardCustomizeSettings.png" alt="Customize Settings" id="Customize Settings" >}}

   {{< truetable >}}
   | Setting | Value Description |
   |---------|-------------------|
   | **CPU** | 2 |
   | **Memory** | 8 GB |
   | **Hard disk 1** | 16 GB. This first disk is the boot disk. |
   | **CD/DVD Drive 1** | Select **Datastore ISO file** from the dropdown list of options. |
   {{< /truetable >}}

5. Add the second required disk. Click **Add hard disk** and select either **New standard hard disk** or **Existing hard disk** to add a second hard drive.

   {{< trueimage src="/images/VMWareESXi/VMWizardAddHardDisk.png" alt="Add Hard Disk" id="Add Hard Disk" >}}

   In the **New Hard disk** row set the disk to 16 GB at a minimum.

   Click on the **New Hard disk** row to expand it.
   If the **Location** field does not display the drive and directory you created for TrueNAS, click **Browse** to open the **Select directory** window and select the directory for your TrueNAS deployment.
   Click on **Select** to change the location and close the **Select directory** window and return to the VM wizard screen.

   Change any other disk drive settings you want or need to change for your hard disk drive hardware.

   If needed, click **Add hard disk** again to add more hard drives if you want to equip your VM with more than the minimum required number of drives.

   In order to prevent potential errors when importing your pool, a custom parameter should be set to allow VMware to provide serial numbers for virtual hard disks.
   Click on the **VM Options** tab, and then click on **Advanced** to expand this section.
   Next to the Configuration Parameters section, click on **Edit Configuration**.
   Click **Add parameter**. In the **Key** column, enter `disk.EnableUUID` and enter `TRUE` in the **Value** column.
   Click **OK**.

   Click **Next** to finish creating the VM. You can use the **Edit** option later to add more drives to support your TrueNAS deployment.

   Each storage layout has different disk minimum disk requirements.
   See [Setting Up Storage]({{< ref "/SCALE/GettingStarted/Configure/SetUpStorageScale" >}}) for information on pool layouts.

4. Review the **Ready to Complete** screen to verify the settings are correct for your deployment.

   {{< trueimage src="/images/VMWareESXi/VMWizardReadyToComplete.png" alt="Ready to Complete" id="Ready to Complete" >}}

   Click **Finish**. The new TrueNAS VM displays on the list of virtual machines.

   {{< trueimage src="/images/VMWareESXi/VMWareTrueNASVMCreated.png" alt="TrueNAS VM Created" id="TrueNAS VM Created" >}}

{{< /expand >}}
### Reviewing the New TrueNAS VM

To view the VM details screen click on the VM name.

{{< trueimage src="/images/VMWareESXi/TrueNASVMDetails.png" alt="TrueNAS VM Details" id="TrueNAS VM Details" >}}

You can now edit your TrueNAS VM to change any setting or add more hard drives to support your deployment, or you can proceed to installing TrueNAS.

### Installing TrueNAS

Click **Power on** and then click **Console** to display the dropdown list of console options.
When the console opens, it displays the TrueNAS Console Setup screen.

{{< trueimage src="/images/VMWareESXi/TrueNASConsoleSetup.png" alt="TrueNAS Console Setup" id="TrueNAS Console Setup" >}}

Follow the [installation instructions]({{< ref "/SCALE/GettingStarted/Install/InstallingSCALE.md#using-the-truenas-installer" >}}) to complete the installation of TrueNAS.

## Editing the Virtual Machine

You can edit your VM settings after you complete the initial setup. You can add new hard drives to your VM using the edit option found on the VM details screen. Click <i class="fa fa-pen" aria-hidden="true" title="Edit"></i> **Edit** to display the **Editing Settings** screen.

{{< trueimage src="/images/VMWareESXi/EditTrueNASSettingsExample.png" alt="TrueNAS VM Details" id="TrueNAS VM Details" >}}

Click **Add hard disk** and select the option you want to use.
For a new drive select **New standard hard disk**.
A **New Hard disk** row displays and is highlighted.

{{< trueimage src="/images/VMWareESXi/EditSettingsNewHardDiskRow.png" alt="New Hard Disk Row" id="New Hard Disk Row" >}}

To edit the hard disk details click on the row to expand it and display the drive settings you can configure.

{{< trueimage src="/images/VMWareESXi/EditSettingsNewHardDiskSettings.png" alt="New Hard Disk Settings" id="New Hard Disk Settings" >}}
