---
title: "Applications"
weight: 90
---

{{< toc >}}

With the rest of the system configured and data being shared over a network, the final step to consider for first time setup is installing any application solutions.
Applications or features added to TrueNAS are created in separate plugins, jails, or virtual machines that are kept separate from the base TrueNAS operating system.
If anything goes wrong or a security vulnerability is exploited in one of these application environments, TrueNAS remains unaffected.
These solutions safely expand TrueNAS' capabilities in a restricted, safeguarded way.

The primary method to install applications is to use **Plugins**.
These are pre-packaged applications that quickly install in a tailor-made environment.
Some plugins are supported by iXsystems while others are provided and maintained by the open source community.

A **Jail** is a restricted FreeBSD operating system installed as a separate subset of TrueNAS.
Jails can install a wide variety of applications and be tuned to very specific use cases, but require more extensive knowledge of FreeBSD and command line operation.

A **Virtual Machine** is a fully independent operating system installation.
This reserves or splits the available hardware resources to create a different, full operating system experience.
TrueNAS can install Windows or Unix-like operating systems in a Virtual Machine (VM), but regular system performance is reduced while virtual machines are running.

Click one of the tabs below to see instructions on installing your preferred application solution.

{{< expand "Network Hardware Offloading" "v" >}}
Plugins that use a network interface need to Disable Hardware Offloading in **Network -> Interface**.
Disabling hardware offloading can reduce general network performance for that interface, so it is recommended to use a secondary interface for application environments.
{{< /expand >}}

{{< tabs "Application Solutions" >}}
{{< tab "Plugins" >}}
This instruction demonstrates plugins by walking you through installing the community-favorite [Plex](https://www.plex.tv/) application.
You will need an account with Plex to follow these instructions.

## Installing Plex

Create a [dataset]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) called *audio* and a dataset called *video* to be used as mount points for Plex.
Next, go to the **Plugins** page.

Installing a basic PlexMedia Plugin:

1. Select the *Plex Media Server* plugin and click *INSTALL*.

 ![PlexInstallButton](/images/CORE/12.0/PluginsPlexInstallButton.png "Finding the Plex Plugin")

2. Under *Jail Name*, enter whatever name you'd like (i.e. "Plex").
3. *DHCP* is set automatically.
4. Click *SAVE*.

 ![PluginsPlexMediaSave](/images/CORE/12.0/PluginsPlexMediaSave.png "Plex: Save the Jail Settings")

5. A dialog window shows the installation progress.

 ![PluginsPlexInstallProgress](/images/CORE/12.0/PluginsPlexInstallProgress.png "Plex: Installation Progress")

  {{< hint info >}}
  When available, *Plugin Installation Notes* display when the install completes.
  {{< /hint >}}

6. The plugin *Status* shows as **up**, with the *Boot* option set.
7. Click *>* to expand the Plex table entry:

 ![PluginsPlexJailUp](/images/CORE/12.0/PluginsPlexJailUp.png "Plex: up status")

8. Stop the *up* plugin.
9. Click *MOUNT POINTS*.

 ![PluginsPlexSetMountpoints](/images/CORE/12.0/PluginsPlexSetMountpoints.png "Plex: Setting Mount Points")

10. Click *Actions* and *Add*.

 ![JailsMountPointsPlexAddMountpoint](/images/CORE/12.0/JailsMountPointsPlexAddMountpoint.png "Plex: Adding a new Mount point")

11. Fill out one mount point for each previously created dataset. The *Source* is the created dataset and the *Destination* is the <file>media</file> directory with <file>/datasetname</file> appended (see example):

 ![JailsMountPointsPlexSetMountpoint](/images/CORE/12.0/JailsMountPointsPlexSetMountpoint.png "Plex: Setting the Mount point")

12. Click *Submit*. Do this for as many mount points as needed. In this example, we have *audio* and *video*.

13. Go to **Storage > Pools** and click <i class="material-icons" aria-hidden="true" title="Edit Permissions">more_vert</i> > *Edit Permissions* for your source datasets.

 ![StoragePoolsPlexEditPermissions](/images/CORE/12.0/StoragePoolsPlexEditPermissions.png "Editing Dataset Permissions")

14. Click *Create a custom ACL* and *Continue*.

 ![StoragePoolsPermissionsPlexACL](/images/CORE/12.0/StoragePoolsPermissionsPlexACL.png "Plex Datasets: Custom ACL")

15. Click *ADD ACL ITEM* and enter the values pictured below:

 ![StoragePoolsPermissionsPlexPermissions](/images/CORE/12.0/StoragePoolsPermissionsPlexPermissions.png "Plex Datasets: Permissions")

  Set *Apply permissions recursively* and click *Save*.

16. Go to **Plugins**, find the **Plex** entry, and click the *>*. *Start* the plugin.

## Accessing Plex

1. When the **Plex** plugin status is **up**, click the *>* and *Manage*.
 
 ![PluginsPlexManage](/images/CORE/12.0/PluginsPlexManage.png "Plex Management")

2. Enter your Plex login informamtion.
 
 ![PluginsPlexLogin](/images/CORE/12.0/PluginsPlexLogin.png "Plex Interface Login")
  
 ![PluginsPlexSuccess](/images/CORE/12.0/PluginsPlexSuccess.png "Plex Login Success")

{{< /tab >}}
{{< tab "FreeBSD Jails" >}}

## Installing a Jail

1. Go to the **Jails** page and click *ADD*.

   ![Jails](/images/CORE/12.0/Jails.png "Adding a new Jail")

2. Enter a jail *Name*, select the *Release* version, and click *NEXT*.

   ![JailsAddName](/images/CORE/12.0/JailsAddName.png "Jail Creation: Name and Release")

3. To allow the jail access to the internet, set *DHCP Autoconfigure IPv4* and click *NEXT*.
   Additional defaults are set when the DHCP option is set.

   ![JailsAddNetworkingDHCP](/images/CORE/12.0/JailsAddNetworkingDHCP.png "Jail Creation: Default Internet Access")

4. Review the **Jail Summary** and click *SUBMIT*.

   ![JailsAddConfirm](/images/CORE/12.0/JailsAddConfirm.png "Jail Creation: Confirm Settings")

## Accessing a Jail

1. Go to **Jails** and click the **>** next to the newly created jail.
   Click *START*.

   ![JailsStart](/images/CORE/12.0/JailsStart.png "Starting a Jail")

2. When the jail **State** changes to **up**, click *> SHELL* to see the jail command line.

   ![JailsShell](/images/CORE/12.0/JailShell.png "Jail Shell")

{{< /tab >}}
{{< tab "Virtual Machines" >}}

## Installing a Virtual Machine

Virtual Machines require uploading an Operating System <file>.iso</file> to TrueNAS.
This example shows using an Ubuntu <file>.iso</file>:

1. Go to **Virtual Machines** and click *ADD*.

   ![VirtualMachines](/images/CORE/12.0/VirtualMachines.png "Adding a new VM")
   
2. Select a *Guest Operating System* and enter a *Name*.
   For this example the *Guest Operating System* is set to *Linux*.
   Click *NEXT*.

   ![VirtualMachinesAddOperatingSystemLinux](/images/CORE/12.0/VirtualMachinesAddOperatingSystemLinux.png "VM Creation: Operating System")

3. Now enter the physical resources to give the VM.
   Larger numbers of *Virtual CPUs*, *Cores*, *Threads*, and *Memory* allow the VM to perform better, but reduces the performance of the TrueNAS system.
   Click *NEXT*.

   ![VirtualMachinesAddCPU](/images/CORE/12.0/VirtualMachinesAddCPU.png "Allocating resources to the VM")
   
4. Set *Create a new disk image* and select a *Zvol Location* for the VM storage.
   Enter a usable storage *Size* (example shows 50 GiB) and click the *NEXT* button.

   ![VirtualMachinesAddDisks](/images/CORE/12.0/VirtualMachinesAddDisks.png "Choosing a VM hard drive")

5. **Network Interface** automatically detects the hardware and sets defaults that allow network access.
   Make sure these settings are valid, then click *NEXT*.

   ![VirtualMachinesAddNetworkInterface](/images/CORE/12.0/VirtualMachinesAddNetworkInterface.png "VM Network Settings")
   
6. Set *Upload an installer image file* to see additional options.
   Select an *ISO save location* on the TrueNAS system.
   Now click *Choose File* and browse to the OS installation <file>.iso</file>.
   Click *UPLOAD* and wait for the process to finish (this can take some time).
   Click *NEXT*.

   ![VirtualMachinesAddInstallationMedia](/images/CORE/12.0/VirtualMachinesAddInstallationMedia.png "Uploading the ISO file")

7. Confirm the VM configuration is correct and click *SUBMIT*.

   ![VirtualMachinesAddConfirm](/images/CORE/12.0/VirtualMachinesAddConfirm.png "Confirm the VM configuration")

## Accessing a Virtual Machine

1. Go to **Virtual Machines** and click **>** next to the newly created VM.
   Click *START*.

   ![VirtualMachinesStart](/images/CORE/12.0/VirtualMachinesStart.png "Starting a VM")
   
2. When the VM **State** changes to **up**, click *VNC* to see the VM display.

   ![VirtualMachinesOptions](/images/CORE/12.0/VirtualMachinesOptions.png "Launch VNC")

   Because this example used an Ubuntu <file>.iso</file>, the Ubuntu installation screen is shown.

   ![UbuntuInstall](/images/CORE/12.0/UbuntuInstall.png "Ubuntu Virtual Machine: Install")

   From here, install the OS as normal.

3. When the OS install completes, go back to **Virtual Machines**, toggle the *State*, and click *DEVICES*.

   ![VirtualMachinesDevices](/images/CORE/12.0/VirtualMachinesDevices.png "VM Devices")

   Find the **CDROM** entry and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> > *Delete* to remove it.
   This removes the installation <file>.iso</file> from the VM and allows it to boot into the full OS the next time the VM activates.

{{< /tab >}}
{{< /tabs >}}
