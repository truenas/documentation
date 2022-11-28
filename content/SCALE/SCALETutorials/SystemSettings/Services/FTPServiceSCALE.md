---
title: "Configuring FTP Service"
description: "This article provides instructions on configuring the storage, user, and access permissions FTP service uses, and configuring the FTP service."
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

## Configuring FTP Services Storage
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset](https://www.truenas.com/docs/scale/scaletutorials/storage/pools/datasetsscale/) to use as storage for files. 

Next, add a new user. Go to **Credentials > Local Users**  and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory.
You can do this for every user, or create a global account for FTP (for example, *OurOrgFTPaccnt*).

Edit the file permissions for the new dataset. 

![EditPermissionsUnixPermissionsEditor](/images/SCALE/22.02/EditPermissionsUnixPermissionsEditor.png "Basic Permissions Editor")

Return to **Storage**, locate the new dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i>, and then select **View Permissions**. 
Next click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.
Enter or select the new user account in the **User** and **Group** fields.
Select **Apply User** and **Apply Group**.
Select the **Read**, **Write** and **Execute** for **User**, **Group** and **Other** that you want to apply.
Click **Save**.

### Configuring FTP Service 

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

![FTPBasicSettings](/images/SCALE/22.02/FTPBasicSettings.png "Services FTP Basic Settings General Options")

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

To confine FTP sessions to the home directory of a local user, select both **chroot** and **Allow *Local User Login**. 

Do *not* allow anonymous or root access unless it is necessary. 
For better security, enable TLS when possible (especially when exposing FTP to a WAN).
TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217).

Click **Save** and then start the FTP service.

### Connecting with FTP 

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below use [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user home directory.
After connecting, you can create directories and upload or download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")

{{< taglist tag="scale" limit="10" >}}