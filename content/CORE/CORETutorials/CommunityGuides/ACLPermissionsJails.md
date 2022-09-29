---
title: "Setting ACL Permissions for Jailed Applications"
description: "This article describes how to configure ACL permissions for jailed applications on TrueNAS CORE."
geekdocCollapseSection: true
weight: 20
tags:
- corecommunityguides
---

Various Jail Plugins will require permissions to be set on datasets so that they can access them. 

Unless otherwise modified, dataset will be owned by the user `root` and group `wheel`.  
Jailed processes like Plex run as their own user.
As a result Plex will not be able to read or write to the any datasets and thus not be able to access media files stored in those datasets. 

To create an ACL for dataset for an application you need to obtain the Application user ID. 
Plex's ID is `972`. 

Other popular Plugin user IDs include:
+ Radarr = 352
+ Sonarr = 351
+ Transmission = 921
+ Sabnzbd = 350


To create an ACL for dataset, open **Storage > Pools**.  
Click the three dot icon <mat-icon _ngcontent-swc-c471="" role="img" aria-haspopup="true" class="mat-icon notranslate mat-menu-trigger material-icons mat-icon-no-color" aria-hidden="true" style="cursor: pointer;" aria-expanded="true" aria-controls="mat-menu-panel-30">more_vert</mat-icon> and select **Edit Permissions**.
Click the **Add ACL Item** button to create a new entry.  
The new entry will appear at the bottom of the list of existing ACL items.

Continuing with Plex as our example we would enter the following:

```
Who: User
User: 972 (Don't worry if it says "Could not find a username for this ID")
ACL Type: Allow
Permissions Type:
Basic Permissions: Read
Flags Type: Basic
Flags: Inherit
```

![StoragePoolsPermissionsPlexPermissions](/images/CORE/12.0/StoragePoolsPermissionsPlexPermissions.png "Storage Pools Permissions Plex Permissions")

If files already exist in the dataset, click the **Apply permissions recursively** checkbox and click **Save**.

{{< taglist tag="corecommunityguides" limit="10" title="Community Guides Articles" >}}
