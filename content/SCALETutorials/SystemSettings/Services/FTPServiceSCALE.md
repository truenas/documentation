---
title: "FTP"
description: "Provides instructions on configuring the FTP service including storage, user, and access permissions."
weight: 10
tags:
 - services
 - ftp
 - sftp
 - tftp
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- persistent storage
- storage provisioning
---

The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The SSH options provide secure transfer methods for critical objects like configuration files, while the Trivial FTP options provide simple file transfer methods for non-critical files.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

## Configuring FTP For Any Local User
FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset]({{< relref "DatasetsSCALE.md" >}}) to use as storage for files.

Next, add a new user. Go to **Credentials > Users**  and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory.
You can do this for every user or create a global account for FTP (for example, *OurOrgFTPaccnt*). Note, however, that you cannot create multiple accounts utilizing the same dataset as your home directory.

Edit the file permissions for the new dataset. Go to **Datasets**, then click on the name of the new dataset. Scroll down to **Permissions** and click **Edit**.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="UnixPermissionsEditor" >}}

Enter or select the new user account in the **User** and **Group** fields.
Select **Apply User** and **Apply Group**.
Select the **Read**, **Write**, and **Execute** for **User**, **Group**, and **Other** you want to apply.
Click **Save**.

### Configuring FTP Service

To configure FTP, go to **System > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

{{< trueimage src="/images/SCALE/SystemSettings/FTPBasicSettings.png" alt="FTP Basic Settings" id="FTP Basic Settings" >}}

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

To confine FTP sessions to the home directory of a local user, select both **chroot** and **Allow Local User Login**. 

Do *not* allow anonymous access unless it is necessary. 
Enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217) for better security.

Click **Save** and then start the FTP service.

## Configuring FTP Services For FTP Group
FTP requires a new dataset and a local user account.

Go to **Storage** and add a new [dataset]]({{< relref "DatasetsSCALE.md" >}}).

Next, add a new user. Go to **Credentials > Users**  and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory. Then, add *ftp* to the **Auxiliary Groups** field and click *Save*.

Edit the file permissions for the new dataset. Go to **Datasets**, then click on the name of the new dataset. Scroll down to **Permissions** and click **Edit**.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="Unix Permissions Editor" >}}

Enter or select the new user account in the **User** and **Group** fields.
Enable **Apply User** and **Apply Group**.
Select the **Read**, **Write**, and **Execute** for **User**, **Group**, and **Other** you want to apply, then click **Save**.

### Configuring FTP Service

Go to **System > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

{{< trueimage src="/images/SCALE/SystemSettings/FTPBasicSettings.png" alt="FTP Basic Settings" id="FTP Basic Settings" >}}

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

{{< hint type=tip >}}
When configuring FTP bandwidth settings, we recommend manually entering the units you want to use, e.g. KiB, MiB, GiB.
{{< /hint >}}

To confine FTP sessions to the home directory of a local user, select **chroot**. 

Do *not* allow anonymous access unless it is necessary. 
Enable TLS when possible (especially when exposing FTP to a WAN). TLS effectively makes this [FTPS](https://tools.ietf.org/html/rfc4217) for better security.

Click **Save**, then start the FTP service.

## Connecting with FTP

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below use [FileZilla](https://sourceforge.net/projects/filezilla/), which is free.

The user name and password are those of the local user account on the TrueNAS system.
The default directory is the same as the user home directory.
After connecting, you can create directories and upload or download files.

{{< trueimage src="/images/CORE/FilezillaFTPConnect.png" alt="Filezilla FTP Connect" id="Filezilla FTP Connect" >}}
