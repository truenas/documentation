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

Installing a basic PlexMedia Plugin:

1. Select the Plex Media Server plugin and click the INSTALL button.

<insert PlexInstallButton graphic here>

3. Under "Jail Name" enter whatever name you'd like (i.e. "Plex").
4. DHCP should be checked automatically for this plugin.
5. Click the SAVE button.

<insert PlexMediaSave graphic here>

7. Install window should be visible outlining progress of installation

<install PlexInstallProgress graphic here>

Note: If available, Plugin Installation Notes will be listed
9. Status should be "up", with Boot option checked
10. To the right of Plex in the plugin table, click the ">"

<insert the graphic PlexJailUp here>

12. Stop the running PlexMedia
13. Click on MountPoint

<inser the PlexSetMountpoints graphics here>

15. Click the Actions button in the upper right and clock on Add

<insert PlexAddMountpoint graphic here>

Fill out one mounpint for each source dataset you have created. The Source is the dataset you created.
For the Destination, chose the media directory and append /datasetname (see example)

<Insert PlexSetMountpoint graphic here>

Click the Submit button
(Do this for as many mointpoints as you desire. In our example we have Audio and Video.

Go to Storage, click on the three dots to the left of your source dataserts and click on Edit Permissions

<insert the PlexEditPermissions graphic here>

Click "Create a custom ACL" and click the Continue button

<insert PlexACL graphic here>

Click the "Add ACL ITEM button" and enter the values pictured below, click Apply permissions recursively, and click the Save button

<insert PlexPermissions" graphic here

Go to Plugins and at the right of Plex in the plugin table, click the ">"
Click Start to run PlexMedia


## Accessing Plex

 To the right of Plex in the plugin table, click the ">" and click "Manage"
 
 <insert PlexManage graphic here>
 
 Enter your Plex login informamtion
 
 <Insert PlexLogin graphic here>
  
  <insert PlexSuccess graphic here>
 

# Jails

# Virtual Machines
