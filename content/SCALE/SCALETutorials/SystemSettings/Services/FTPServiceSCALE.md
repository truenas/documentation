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
The SSH options provide secure file transfer methods for a configuration file, while the Trivial FTP options provide simple file transfer methods not suited for configuration files.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System Settings > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

## Configuring FTP For Any Local User
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset](https://www.truenas.com/docs/scale/scaletutorials/storage/pools/datasetsscale/) to use as storage for files. 

Next, add a new user. Go to **Credentials > Local Users**  and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory.
You can do this for every user or create a global account for FTP (for example, *OurOrgFTPaccnt*).

Edit the file permissions for the new dataset. Go to **Datasets**, then click on the name of the new dataset. Scroll down to **Permissions** and click **Edit**.

![EditPermissionsUnixPermissionsEditor](/images/SCALE/22.12/EditPermissionsUnixPermissionsEditor.png "Basic Permissions Editor")

Enter or select the new user account in the **User** and **Group** fields.
Select **Apply User** and **Apply Group**.
Select the **Read**, **Write**, and **Execute** for **User**, **Group**, and **Other** you want to apply.
Click **Save**.

### Configuring FTP Service 

To configure FTP, go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

![FTPBasicSettings](/images/SCALE/22.12/FTPBasicSettings.png "Services FTP Basic Settings General Options")

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

To confine FTP sessions to the home directory of a local user, select both **chroot** and **Allow Local User Login**. 

Do *not* allow anonymous or root access unless it is necessary. 
Enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217) for better security.

Click **Save** and then start the FTP service.

## Configuring FTP Services For FTP Group
FTP requires a new dataset and a local user account.

Go to **Storage** and add a new [dataset]]({{< relref "DatasetsSCALE.md" >}}).

Next, add a new user. Go to **Credentials > Local Users**  and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory. Then, add *ftp* to the **Auxiliary Groups** field and click *Save*.

Edit the file permissions for the new dataset. Go to **Datasets**, then click on the name of the new dataset. Scroll down to **Permissions** and click **Edit**.

![EditPermissionsUnixPermissionsEditor](/images/SCALE/22.12/EditPermissionsUnixPermissionsEditor.png "Basic Permissions Editor")

Enter or select the new user account in the **User** and **Group** fields.
Enable **Apply User** and **Apply Group**.
Select the **Read**, **Write**, and **Execute** for **User**, **Group**, and **Other** you want to apply, then click **Save**.

### Configuring FTP Service 

Go to **System Settings > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

![FTPBasicSettings](/images/SCALE/22.12/FTPBasicSettings.png "Services FTP Basic Settings General Options")

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

To confine FTP sessions to the home directory of a local user, select **chroot**. 

Do *not* allow anonymous or root access unless it is necessary. 
Enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217) for better security.

Click **Save**, then start the FTP service.

## Connecting with FTP 

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below use [FileZilla](https://sourceforge.net/projects/filezilla/), which is free.

The user name and password are those of the local user account on the TrueNAS system.
The default directory is the same as the user home directory.
After connecting, you can create directories and upload or download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")

{{< taglist tag="scale" limit="10" >}}
