---
title: "Virtualization"
geekdocCollapseSection: true
weight: 40
---

{{< toc >}}

Article to describe expanding TrueNAS with plugins, Jails, or Virtual Machines immediately after configuring sharing.

# Plugins

## Installing Plex

Pre-Requirement:
Create a dataset called adio and a dataset called video to be used as mountpoints for Plex

Note: It is possible that you may need to Disable Hardware Offloading in your Network -> Interface to install Plex but disabling hardware offloading can reduce network performance. 



Installing a basic PlexMedia Plugin:

1. Select the Plex Media Server plugin and click the INSTALL button.

 ![PlexInstallButton](/images/CORE/12.0/SharingSMBAdd.png "Plex Install Button")

2. Under "Jail Name" enter whatever name you'd like (i.e. "Plex").
3. DHCP should be checked automatically for this plugin.
4. Click the SAVE button.

 ![PlexMediaSave](/images/CORE/12.0/PlexMediaSave.png "Plex Media Save")

5. Install window should be visible outlining progress of installation

 ![PlexInstallProgress](/images/CORE/12.0/PlexInstallProgress.png "Plex Installation Progress")

Note: If available, Plugin Installation Notes will be listed
6. Status should be "up", with Boot option checked
7. To the right of Plex in the plugin table, click the ">"

 ![PlexJailUp](/images/CORE/12.0/PlexJailUp.png "Plex Jail Up")

8. Stop the running PlexMedia
9. Click on MountPoint

 ![PlexSetMountpoints](/images/CORE/12.0/PlexSetMountpoints.png "Plex Set Mountpoints")

10. Click the Actions button in the upper right and clock on Add

 ![PlexAddMountpoint](/images/CORE/12.0/PlexAddMountpoint.png "Plex Add Mountpoint")

11. Fill out one mounpint for each source dataset you have created. The Source is the dataset you created. For the Destination, chose the media directory and append /datasetname (see example)

 ![PlexSetMountpoint](/images/CORE/12.0/PlexSetMountpoint.png "Plex Set Mountpoint")

12. Click the Submit button
(Do this for as many mointpoints as you desire. In our example we have Audio and Video.

13. Go to Storage, click on the three dots to the left of your source dataserts and click on Edit Permissions

 ![PlexEditPermissions](/images/CORE/12.0/PlexEditPermissions.png "Edit Permissions")

14. Click "Create a custom ACL" and click the Continue button

 ![PlexACL](/images/CORE/12.0/PlexACL.png "Custom ACL")

15. Click the "Add ACL ITEM button" and enter the values pictured below, click Apply permissions recursively, and click the Save button

![PlexPermissions](/images/CORE/12.0/PlexPermissions "Plex ermissions")

16, Go to Plugins and at the right of Plex in the plugin table, click the ">". Click Start to run PlexMedia


## Accessing Plex

 1. To the right of Plex in the plugin table, click the ">" and click "Manage"
 
 ![PlexManage](/images/CORE/12.0/PlexManage.png "Plex Manage")
 
 2. Enter your Plex login informamtion
 
 ![PlexLogin](/images/CORE/12.0/PlexLogin.png "Plex Login")
  
 ![PlexSuccess](/images/CORE/12.0/PlexSuccess.png "Accessed Plex")
 

# Jails

# Virtual Machines
