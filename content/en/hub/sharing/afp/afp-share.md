---
title: "Configuring an AFP Share"
description: "How to create an Apple Filing Protocol share."
tags: ["networking","afp"]
---

Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network. It's similar to SMB and NFS. However, it was made to work flawlessly on Apple systems. In this document, you will learn how to create and connect to a general purpose AFP share.

{{% pageinfo %}}
The AFP protocol has been deprecated by Apple
{{% /pageinfo %}}

Beginning in 2013, Apple began using the SMB sharing protocol as the default option for file sharing and ceased development of the AFP sharing protocol. It is recommended to use SMB sharing over AFP unless files will be shared with legacy Apple products. For further information please read: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html

To get started, make sure a <a href="/hub/initial-setup/storage/datasets">dataset has been created</a>. This dataset serves as share data storage. If a dataset already exists, proceed to turning on the AFP service.

## AFP Share

Go to **Sharing > Apple Shares (AFP)** and click *ADD* to create an AFP share.You will need to confirm that you want to Continue with AFP set up.
Next, use the file browser and select a dataset to share. Enter a descriptive name for the share. If this share is is to be used for Time Machine backups, set *Time Machine*. This advertises the share as a disk for other Mac systems to use as storage for Time Machine backups. It is not recommended to have multiple AFP shares configured for Time Machine backups. If desired, you can set *Use as Home Share*. When this setting is enabled, users that connect to the share have home directories created for them. Only one share can be used as a home share. At the time of creation, the AFP share is enabled by default. If you wish to create the share but not immediately enable it, unset the *Enable* checkbox. 
Clicking *SUBMIT* creates the share.

<img src="/images/AFPsetup1.png" width='700px'>

Opening the *ADVANCED OPTIONS* allows you to modify the shares permissions, add a description, and specify auxillary parameters.

<img src="/images/AFPsetup2.png" width='700px'>

Existing AFP shares can be edited by going to **Sharing > Apple Shares (AFP)** and clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

## AFP Service

If you chose to enable the service when you created the AFP Share, it will be running.  If not, to turn the AFP service on, go to **Services** and click the slider for *AFP*. 
If you wish to turn the service on automatically when the TrueNAS system turns on, check the *Start Automatically* box.
The AFP share does not work if the service is not turned on.

The AFP service settings can be configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Configure"></i>. Select the database path used for the AFP Share.
Don't forget to click *SAVE* when changing the settings. Unless a specific setting is needed, it is recommended to use the default settings for the AFP service.

<img src="/images/AFPsetup3.png" width='700px'>

## Connecting to the AFP Share

Although you can connect to an AFP share with various operating systems, it is recommended to use a Mac operating system. First, open the *Finder* app. Click **Go > Connect to Server...** in the top menu bar of the application. Next, enter <code>afp://<i>IPofTrueNASsystem</i></code> and click *Connect*. For example, entering `afp://192.168.2.2` connects to the AFP share on a TrueNAS system with the IP address of `192.168.2.2`. By default, any user that connects to the AFP share only has the read permission.

<img src="/images/AFPsharing.png" width='700px'>
