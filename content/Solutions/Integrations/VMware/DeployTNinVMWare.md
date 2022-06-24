---
title: Deploying a TrueNAS CORE VM in ESXi
weight: 3
tags:
- vmware
- corehwguide
- coreconsole
- corestoredata
---
{{< toc >}}

This article describes deploying TrueNAS CORE virtual machine (VM) in a VMWare ESXi environment.
ESXi version 6.7 is shown in this article.

## Before You Begin

Before starting configuration work in VMWare:

* Allocate a drive or a few drives in your VMWare server cluster for the TrueNAS virtual machine.
  The anticipated storage needs for your TrueNAS deployment determines the size and number of drives you need.

* Download the CORE 13.0 iso file from the TrueNAS.com/downloads web page [download from here](https://www.truenas.com/download-truenas-core/).

* Visit the [TrueNAS CORE Hardware Guide]({{< relref "/content/core/gettingstarted/corehardwareguide.md" >}}) and take note of the minimal system requirements.
  Also note the information in the **Memory** and **Storage Device Sizing** sections.

  This provides guidance on how much memory, the number of CPUs, and drive size you need to configure. For example, you need a minumum of 2 CPUS, 16 GB memory, and two drives each with at least 16 GB storage but you can increase if you want to improve performance.

* Determine your data storage requirements. Consider the number of storage pools and the type of storage you need for your deployment or how you plan to use the TrueNAS.
  See [Storage Configuration]({{< relref "/content/CORE/GettingStarted/StoringData.md" >}}) for information on pool layouts.

  This provides guidance for the number of virtual hard drives (vmdks) you want to create when setting up your virtual machine.
  For example, if you want a mirrored layout you need a minimum of three drives. One for the TrueNAS boot drive and two for the mirrored storage.
  If you want a mirror with a hot spare, you need a minimum of four drives. One for the TrueNAS boot drive, two for the mirrored storage, and one for the hot spare.

* Configure your network per your system requirements. Have the information ready when you configure your TrueNAS global network settings in the web interface.

## Deploying TrueNAS in VMWare ESXi

Launch your VMware ESXi interface using your login credentials.

![LoginScreen](/images/VMWareESXi/LoginScreen.png "VMWare ESXi Login Screen")

Next set up the storage needed for the new VM. First select **Storage** and then the drive allocated for TrueNAS. Create the datastore directories for the ISO media and the TrueNAS virtual machine. After creating the ISO directory upload the TrueNAS CORE iso file.
{{< expand "Need more help? Click here." "v" >}}
1. Select **Storage** on the navigation panel on the left side of the screen. 
   
   ![StorageDatastoresTab](/images/VMWareESXi/StorageDatastoresTab.png "Storage Datastores Tab")

2. Select the drive you allocated for the TrueNAS VM. The example uses *esxi07-hhd01*. The detailed view for this drive displays.
   
   ![SelectDatastoreBrowser](/images/VMWareESXi/SelectDatastoreBrowser.png "Select Datastore Browser")

3. Click **Datastore Browser** to open the browser window, and then click **Create directory**. Enter the name of the directory in the **New Directory** dialog. 
   
   ![NameNewDirectory](/images/VMWareESXi/NameNewDirectory.png "Name New Directory")

   Add two directories. The first directory is for the TrueNAS CORE storage needs the other for the TrueNAS-CORE iso file you downloaded (name directory ISOs). 
   Choose a name that is easy to identify on a list of virtual machines. The example uses *truenas1* as the directory name for the storage needs.
   Click **Create directory** in the **New directory** dialog to create the directory. 
   
   Click **Create directory** again to open the **New directory** dialog to create the second new directory. 
   When finished you should have both directories listed in the **Datastore Browser** window.

   ![DatastoreBrowserWithNewDirectoies](/images/VMWareESXi/DatastoreBrowserWithNewDirectories.png "Datastore Browser with New Directories")

4. Upload the TrueNAS iso file to the **ISOs** directory. Select the directory created for the iso file and then click **Upload**.
   
   ![UploadTrueNasISOFile](/images/VMWareESXi/UploadTrueNasISOFile.png "Upload TrueNAS ISO File")

{{< /expand >}}

After setting up the storage needs, now create the new virtual machine.
Select **Virtual Machines** on the  navigation pannel on the left side of the screen. 

![VirtualMachinesScreen](/images/VMWareESXi/VirtualMachinesScreen.png "Virtual Machines Screen")

Select the storage drive for the TrueNAS VM and then click **Create/Register VM**. The **New virtual machine** creation wizard displays.
Use these settings:

* On the **Select a name and guest OS** wizard screen, select **Other** for **Guest OS family** and then **FreeBSD 12 or later versions (64-bit)** on the **Guest OS Version** dropdown list.

* On the **Customize settings** wizard screen set **CPU** to **2**, set **Memory** to **16 GB**, and **Hard disk 1** to **16 GB**.

  You need a minium of two drives set to at least **16 GB**. To add a drive, click **Add hard disk**. 

  You can add additional hard drive now or use the **Edit** option to add drives later after saving the new virtual machine.
  To create a mirror layout you need at least three hard drives, one for boot and two to create the mirror.
  Add as many hard drives as you need to create your desired storage layout. You can add more drives later after you install TrueNAS.

{{< expand "Need more help? Click here." "v" >}}
To create the virtual machine for your TrueNAS, from the **Virtual Machines** screen:

1. Click **Create/Register VM** to display the configuration wizard. On the **Select creation type** screen select **Create a new virtual machine** and then click **Next**.

   ![VMWizardCreateNew](/images/VMWareESXi/VMWizardCreateNew.png "Create New Virtual Machine")

2. Configure the VM name and guest OS settings. Type the name for the TrueNAS VM. Use the name you gave the new directory. The example uses *truenas1*.

   ![VMWizardSelectNameAndGuestOS](/images/VMWareESXi/VMWizardSelectNameAndGuestOS.png "Select Name and Guest OS")

   Select **Other** from the **Guest OS family** dropdown list of options. Select **FreeBSD 12 or later versions (64-bit)** from the **Guest OS version** dropdown list of options and then click **Next**.

3. Select the storage drive you allocated for the TrueNAS VM. The example uses *esxi07-hdd01*. Click **Next**

   ![VMWizardSelectStorage](/images/VMWareESXi/VMWizardSelectStorage.png "Select Storage")

4. Enter the following settings in the **Customize settings** screen:

   ![VMWizardCustomizeSettings](/images/VMWareESXi/VMWizardCustomizeSettings.png "Customize Settings")

   | Setting | Value Description |
   |---------|-------------------|
   | **CPU** | 2 |
   | **Memeory** | 16 GB |
   | **Hard disk 1** | 16 GB. This first disk is the boot disk. |
   | **CD/DVD Drive 1** | Select **Datastore ISO file** from the dropdown list of options. |

5. Add the second required disk. Click **Add hard disk** and select either **New standard hard disk** or **Existing hard disk** to add a second hard drive.

   ![VMWizardAddHardDisk](/images/VMWareESXi/VMWizardAddHardDisk.png "Add Hard Disk")

   In the **New Hard disk** row set the disk to 16 GB at a minimum.

   If the **Location** field does not display the drive and directory you created for TrueNAS, click **Browse** to open the **Select directory** window and select the directory for your TrueNAS deploment. Click on **Select** to change the location and close the **Select directory** window and return to the VM wizard screen.

   Change any other disk drive settings you want or need to change for your hard disk drive hardware.

   At this time you can click **Add hard disk** again to add additional hard drives or you can click **Next** to finish creating the VM. You can use the **Edit** option later to add more drives to support your TrueNAS deployment.

   Each storage layout has different disk minimum disk requirements.
   Visit [Storage Configuration]({{< relref "/content/Core/GettingStarted/StoringData.md" >}}) for information on pool layouts.

6. Review the **Ready to Complete** screen to verify the settings are correct for your deployment.

   ![VMWizardReadyToComplete](/images/VMWareESXi/VMWizardReadyToComplete.png "Ready to Complete")

   Click **Finish**. The new Truenas VM is added to the list of virtual machines. 

{{< /expand >}}

To view the VM details screen click on the VM name.

![VMDetailsScreen](/images/VMWareESXi/VMDetailsScreen.png "TrueNAS VM Details")

You can now edit your TrueNAS VM to change any setting or add additional hard drives to support your deployment, or you can proceed to installing TrueNAS. 

Click **Power on** and then click **Console** to display the dropdown list of console options. When the console opens it displays the **TrueNAS 13.0-RELEASE Console Setup** screen.

![TrueNAS13ReleaseConsoleSetup](/images/VMWareESXi/TrueNAS13ReleaseConsoleSetup.png "TrueNAS 13.0-Release Console Setup")

Follow the instructions documented in [Console Setup Menu]({{< relref "/content/CORE/GettingStarted/ConsoleSetupMenu.md" >}}) to complete the installation of TrueNAS.

## Editing the Virtual Machine

You can edit your VM settings after you complete the initial setup. You can add new hard drives to your VM using the **Edit** option found on the VM details screen. Click **Edit** to display the **Editing Settings** screen.

![EditSettingsForTruenas1](/images/VMWareESXi/EditSettingsForTruenas1.png "TrueNAS VM Details")

From here you can add more hard drives to your VM. Click **Add hard disk** and select the option you want to use. For a new drive select **New standard hard disk**. A **New hard disk** row displays highlighted in green.

![EditSettingsNewHardDiskRow](/images/VMWareESXi/EditSettingsNewHardDiskRow.png "New Hard Disk Row")

To edit the hard disk details click on the row to expand it and display the drive settings you can configure.

![EditSettingsNewHardDiskSettings](/images/VMWareESXi/EditSettingsNewHardDiskSettings.png "New Hard Disk Settings")

{{< taglist tag="coreconsole" limit="10" >}}

**Additional Related Content**

{{< taglist tag="corestoredata" limit="10" title=" " >}}
