---
title: "Set up SMB share as a Home Share"
description: "Creating a personal storage share for your team with one SMB share."
tags: ["networking","Samba", "personal storage"]
---

## Set up SMB with *Use as Home Share*

TrueNAS offers the **Use as Home Share** option for organizations or SMBs looking to offer a single SMB share where each user has access to a personal directory. 

{{% pageinfo %}}
This feature can only be set once in TrueNAS. Should additional shares need to be set, it is possible, but on an individual share basis just as detailed in the SMB share section.
{{% /pageinfo %}}

Create a new dataset, e.g. *ourhome*. Select **SMB** as the **Share Type**. 

<img src="/images/dataset_creation.png" width="640px">

Edit the permissions of the share and change the ACL preset to **HOME**.

<img src="/images/sethomepermission.png" width="640px">

Go to **Sharing** > **Windows Shares (SMB)**. 

Select the appropriate dataset (previously named 'ourhome'). Under purpose select **No presets**, then click **ADVANCED OPTIONS** and select **Use as Home Share**. 

{{% pageinfo %}}
When setting a home share the name of the share must be the same as the dataset name.
{{% /pageinfo %}}

<img src="/images/createSMBshare.png" width="640px">

Under **Accounts**, select **Users** and click **ADD**. Create a new user name and password. By default, the user's Home Directory will be a new data set with his/her user name used as the subdirectory of the *ourhome* dataset. 

<img src="/images/edituserhomedir.png" width="640px">

If existing users require access to this **Home Share**, click the user, select **Edit**, and simply adjust their home directory to the appropriate dataset and give it a name to create their own personal directory.

Once user permisions have been set accordingly, users will be able to log in to the common share with each having his/her own folder. 
