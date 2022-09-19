---
title: "FTP Service Screen"
description: ""
weight: 10
alias: 
tags:
 - scaleservices
 - scaleftp
 - scalesftp
 - scaletftp
---


{{< toc >}}


The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH and Trivial FTP options provide secure or simple config file transfer methods respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

## FTP Services
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset](https://www.truenas.com/docs/scale/storage/pools/datasetsscale).

![DatasetAddSCALE](/images/SCALE/DatasetAddSCALE.png "Adding a new Dataset")

Next, go to **Credentials > Local Users**  and click **Add** to create a local user on the TrueNAS.

![AddUserFormSCALE](/images/SCALE/AddUserFormSCALE.png "Adding a new User Account")

Assign a user name and password, and link the newly created FTP share dataset as the user home directory.
You can do this for every user, or create a global account for FTP (for example, *OurOrgFTPacnt*).

Return to **Storage**, find the new dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i>, and select **View Permissions**. Next click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Set the **Owner** fields (user and group) to the new user account.
Set **Apply User** and **Apply Group** before saving.

![EditDatasetPermissionsSCALE](/images/SCALE/EditDatasetPermissionsSCALE.png "Basic Permissions Editor")

### FTP Service Configuration

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesFTPSCALE](/images/SCALE/ServicesFTPSCALE2202.png "Services FTP Options")

Configure the options according to your environment and security considerations.

{{< include file="static/includes/Reference/ServicesFTPFields.md.part" markdown="true" >}}

To confine FTP sessions to a local user's home directory, ensure **chroot** is enabled and allow **Local User Login**. 

Do *not* allow anonymous or root access unless it is necessary. 
For better security, enable TLS when possible (especially when exposing FTP to a WAN).
TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217).

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below use [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user's <file>/home</file> directory.
After connecting, you can create directories and upload/download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")


{{< taglist tag="scale" limit="10" >}}