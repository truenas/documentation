---
title: "Configuring an AFP Share"
description: "How to create an Apple Filing Protocol share."
---

Apple Filing Protocol (AFP) is a a network protocol that allows file sharing over a network. It's similar to SMB and NFS. However, it was made to work flawlessly on Apple systems. In this document, you will learn how to create and connect to a general purpose AFP share.

To get started, make sure a <a href="/hub/initial-setup/storage/datasets">dataset has been created</a>. This dataset serves as share data storage. If a dataset already exists, proceed to turning on the AFP service.

## AFP Service

To turn the AFP service on, go to **Services** and click the slider for *AFP*. If you wish to turn the service on automatically when the TrueNAS system turns on, check the *Start Automatically* box.
The AFP share does not work if the service is not turned on.

The AFP service settings can be configured by clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>. Don't forget to click *SAVE* when changing the settings. Unless a specific setting is needed, it is recommended to use the default settings for the AFP service.

## AFP Share

Go to **Sharing > Apple Shares (AFP)** and click *ADD* to create an AFP share.
Next, use the file browser and select a dataset to share. Enter a descriptive name for the share. If this share is is to be used for Time Machine backups, set *Time Machine*. This advertises the share as a disk for other Mac systems to use as storage for Time Machine backups. It is not recommended to have multiple AFP shares configured for Time Machine backups. If desired, you can set *Use as Home Share*. When this setting is enabled, users that connect to the share have home directories created for them. Only one share can be used as a home share. At the time of creation, the AFP share is enabled by default. If you wish to create the share but not immediately enable it, unset the *Enable* checkbox. 
Clicking *SUBMIT* creates the share.

Opening the *ADVANCED OPTIONS* allows you to modify the shares permissions, add a description, and specify auxillary parameters.

Existing AFP shares can be edited by going to **Sharing > Apple Shares (AFP)** and clicking <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

## Connecting to the AFP Share

Although you can connect to an AFP share with various operating systems, it is recommended to use a Mac operating system. First, open the *Finder* app. Click **Go > Connect to Server...** in the top menu bar of the application. Next, enter <code>afp://<i>IPofTrueNASsystem</i></code> and click *Connect*. For example, entering `afp://10.248.10.10` connects to the AFP share on a TrueNAS system with the IP address of `10.248.10.10`. By default, any user that connects to the AFP share only has the read permission.
