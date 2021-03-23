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
{{< tab "Jails" >}}


## Installing a Jail

Installing a basic Jail:

1. Go to the **Jail** page and click the *Add* button.

![JailAdd](/images/CORE/12.0/JailAdd.png "Jail: Add button")
 
2.  Give the Jail a name, select the *Release* version, and click the *NEXT* button.
 
 ![JailCreate](/images/CORE/12.0/JailCreate.png "Jail: Create")
 
 3. Click *DHCP* and click the *NEXT* button.
 
 ![JailDHCP](/images/CORE/12.0/JailDHCP.png "Jail: DHCP")
 <insert JailDHCP Image here>
 
 4. Confirm the information is correct and click the *Submit* button.
 
 ![JailSubmit](/images/CORE/12.0/JailSubmit.png "Jail: Submit")
 
 
 ## Accessing a Jail
 
 1. Click on the arrow next to the newly created Jail and click the *Start* Button.
 
 ![JailStart](/images/CORE/12.0/JailStart.png "Jail: Start")
 
 2. Wait for it to finish starting and then click on the *Shell option* to get to the CLI.
 
 ![JailShell](/images/CORE/12.0/JailShell.png "Jail: Shell")
 

{{< /tab >}}
{{< tab "Virtual Machines" >}}

Placeholder

{{< /tab >}}
{{< /tabs >}}
