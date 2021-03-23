---
title: "Virtualization"
weight: 50
---

{{< toc >}}

With the rest of the system configured and data being shared over a network, the final step to consider for first time setup is installing any virtualized solutions.
Virtualized means the applications or features added to TrueNAS are created in separate "Jails", "Containers", or "Environments" that are kept separate from the base TrueNAS operating system.
If anything goes wrong or a security vulnerability is exploited in a virtualized environment, TrueNAS remains unaffected.
These solutions safely expand TrueNAS' capabilities in a restricted, safeguarded way.

The primary virtualization method is to install **Plugins**.
These are pre-packaged applications that quickly install in a tailor-made environment.
Some plugins are supported by iXsystems while others are provided and maintained by the open source community.

A **Jail** is a restricted FreeBSD operating system installed as a separate subset of TrueNAS.
Jails can install a wide variety of applications and be tuned to very specific use cases, but require more extensive knowledge of FreeBSD and command line operation.

A **Virtual Machine** is a fully independent operating system installation.
This reserves or splits the available hardware resources to create a different, full operating system experience.
TrueNAS can install Windows or Unix-like operating systems in a Virtual Machine (VM), but regular system performance is reduced while virtual machines are running.

Click one of the tabs below to see instructions on installing your preferred virtualization solution.

{{< expand "Network Hardware Offloading" "v" >}}
Plugins that use a network interface need to Disable Hardware Offloading in **Network -> Interface**.
Disabling hardware offloading can reduce general network performance for that interface, so it is recommended to use a secondary interface for virtualization solutions.
{{< /expand >}}

{{< tabs "Virtualization Solutions" >}}
{{< tab "Plugins" >}}
This instruction demonstrates plugins by walking you through installing the community-favorite [Plex](https://www.plex.tv/) application.
You will need an account with Plex to follow these instructions.

## Installing Plex

Create a [dataset]({{< relref "Datasets.md" >}}) called *audio* and a dataset called *video* to be used as mount points for Plex.
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

13. Go to **Storage > Pools** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> *> Edit Permissions* for your source datasets.

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

Download an iso of the Operating System you would like to use for the VM. For this example I have downloaded an Ubuntu iso file.

1. Go to the **Virtual Machines** page and click *ADD*.

   ![VMAdd](/images/CORE/12.0/VMAdd.png "Adding a new VM")
   
 2. Select a *Guest Operating System*. name your VM, add a description and click the *NEXT* button.

   ![VMOs](/images/CORE/12.0/VMOs.png "VM Operating system")
   
 3. Enter number of *Virual CPUs*, *Cores*. and *Memory Size* and click the *NEXT* button.

   ![VMCPU](/images/CORE/12.0/VMCPU.png "CPU and Memory")
   
 4. Make sure *Create a new disk image* is selected, select a *Zvol Location*, increase the *Size* to 50 GiB, and click the *NEXT* button.

   ![VMDisk](/images/CORE/12.0/VMDisk.png "VM Disks")
   
 5. Leave the settings for *Network Interface* and click the *NEXT* button.

   ![VMNetwork](/images/CORE/12.0/VMNetwork.png "VM Network")
   
 6. Check the box "Upload an installer image file", click the *Choose File*" button, navigate to the installation iso, and wait for the Upload to finish. Click the *NEXT* button.

   ![VMUpload](/images/CORE/12.0/VMUpload.png "VM Upload")
   
 7. Confirm the settings are correct and click the *Submit* button.

   ![VMConfirm](/images/CORE/12.0/VMConfirm.png "VM Confirm")
   
  
## Accessing a Virtual Machine

1. Go to **Virtual Machines** and click the **>** next to the newly created VM.
   Click *START*.
   
   ![VMStart](/images/CORE/12.0/VMStart.png "Startiing a VM")
   
2. When the VM **State** changes to **up**, click **>** *VNC* to see the VM's Ubuntu installation screen.

   ![VMAccessUbuntu](/images/CORE/12.0/VMAccessUbuntu.png "Launch VNC")
   
   ![VMUbuntu](/images/CORE/12.0/VMUbuntu.png "Ububtu VM")
   
{{< /tab >}}
{{< /tabs >}}
