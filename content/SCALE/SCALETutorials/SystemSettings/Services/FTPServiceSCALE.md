---
title: "FTP"
description: "Provides instructions on configuring the FTP service including storage, user, and access permissions."
weight: 10
aliases: 
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
SSH provides secure transfer methods for critical objects like configuration files, while TFTP provides simple file transfer methods for non-critical files.

Options for configuring **FTP**, **SSH**, and **TFTP** are in **System > Services**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the related service.

## Configuring FTP Service

FTP requires a new dataset and a local user account.

Go to **Storage** to add a new [dataset]({{< ref "DatasetsSCALE" >}}) to use as storage for files.

Next, add a new user. Go to **Credentials > Users** and click **Add** to create a local user on the TrueNAS.

Assign a user name and password, and link the newly created FTP dataset as the user home directory.
Add **ftp** to the **Auxiliary Groups** field.
You can do this for every user or create a global account for FTP (for example, *OurOrgFTPaccnt*).
You cannot create multiple accounts utilizing the same dataset as your home directory.

{{< hint type=note >}}
By default, only members of the **ftp** group can authenticate via FTP.
Add your newly created user to the **ftp** group, or change this behavior in the FTP service configuration:

- Enable **Allow Local User Login** to allow any local user to authenticate
- Enable **Allow Anonymous Login** to allow anonymous connections without authentication

Dataset permissions are configured separately and control what files authenticated users can access.
{{< /hint >}}

Edit the file permissions for the new dataset. Go to **Datasets**, then click on the name of the new dataset. Scroll down to **Permissions** and click **Edit**.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="UnixPermissionsEditor" >}}

Enter or select the new user account in the **User** and **Group** fields.
Select **Apply User** and **Apply Group**.
Select the **Read**, **Write**, and **Execute** for **User**, **Group**, and **Other** you want to apply.
Click **Save**.

### Configuring Service Settings

To configure FTP, go to **System > Services** and find **FTP**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > FTP** screen.

{{< trueimage src="/images/SCALE/SystemSettings/FTPBasicSettings.png" alt="FTP Basic Settings" id="FTP Basic Settings" >}}

Configure the options according to your environment and security considerations. Click **Advanced Settings** to display more options.

{{< hint type=tip >}}
When configuring FTP bandwidth settings, we recommend manually entering the units you want to use, e.g. KiB, MiB, GiB.
{{< /hint >}}

To confine FTP sessions to the home directory of a local user, select **chroot**.

**Authentication Options:**

- By default, only **ftp** group members can authenticate (no additional configuration needed)
- Enable **Allow Local User Login** to allow any local user to authenticate without ftp group membership
- Enable **Allow Anonymous Login** to allow anonymous connections without authentication

Do *not* allow anonymous access unless it is necessary.
Enable TLS when possible (especially when exposing FTP to a WAN).
TLS creates [FTPS](https://tools.ietf.org/html/rfc4217) for better security.

Click **Save**, then start the FTP service.

## Connecting with FTP

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images below show [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS system.
The default directory is the same as the user home directory.
After connecting, you can create directories and upload or download files.

{{< trueimage src="/images/CORE/FilezillaFTPConnect.png" alt="Filezilla FTP Connect" id="Filezilla FTP Connect" >}}
