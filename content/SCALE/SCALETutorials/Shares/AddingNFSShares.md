---
title: "Adding NFS Shares"
description: "Provides instructions on adding NFS shares, starting NFS service, and accessing the share."
weight: 30
aliases:
- /scale/scaletutorials/shares/nfs/addingnfsshares/
- /scale/scaletutorials/shares/nfs/
tags:
- scalenfs
- scaleshares
---

{{< toc >}}

## About UNIX (NFS) Shares

Creating a Network File System (NFS) share on TrueNAS makes a lot of data available for anyone with share access.
Depending on the share configuration, it can restrict users to read or write privileges.

{{< hint type=note >}}
NFS treats each dataset as its own file system. When creating the NFS share on the server, the specified dataset is the location that client accesses. If you choose a parent dataset as the NFS file share location, the client cannot access any nested or child datasets beneath the parent.

If you need to create shares that include child datasets, SMB sharing is an option. Note that Windows NFS Client versions currently support only NFSv2 and NFSv3.
{{< /hint >}}

{{< include file="content/_includes/SharingPrereqs.md" type="page" >}}

## Creating an NFS Share

Go to **Shares > Unix (NFS) Shares** and click **Add** to open the **Add NFS** configuration screen.

{{< trueimage src="/images/SCALE/22.12/SharingNFSAddSCALE.png" alt="Services NFS Add" id="1: Services NFS Add" >}}

Click **Add** to display **Add paths** settings, and then enter the path or use the <span class="material-icons">arrow_right</span> icon to the left of **<span class="material-icons">folder</span>/mnt** to locate the dataset and populate the path.

You can enter optional text to help identify the share in **Description**.
Click **Save** to create the share.

After adding the first NFS share, the system opens an enable service dialog. 

{{< trueimage src="/images/SCALE/22.12/SharingNFSEnableServiceDialog.png" alt="Unix (NFS) Share Widget" id="2: Unix (NFS) Share Widget" >}}

**Enable Service** turns the NFS service on and changes the toolbar status to **Running**. 
If you wish to create the share without immediately enabling it, select **Cancel**.

### Adding NFS Share Network and Hosts

If you want to enter allowed networks, click **Add** to the right of **Add Networks**. 
Enter an IP address in **Authorized Networks** and select the mask CIDR notation. 
Click **Add** for each network address and CIDR you want to define as an authorized network. 
Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. 

If you want to enter allowed systems, click **Add** to the right of **Add hosts**. 
Enter a host name or IP address to allow that system access to the NFS share. 
Click **Add** for each allowed system you want to define. 
Defining authorized systems restricts access to all other systems. 
Press the **X** to delete the field and allow all systems access to the share.

### Adjusting Access Permissions

If you want to tune the NFS share access permissions or define authorized networks, click **Advanced Options**.

{{< trueimage src="/images/SCALE/22.12/AddNFSAdvancedOptionsAccessSettings.png" alt="Add NSF Advanced Options Access Settings" id="3: Add NSF Advanced Options Access Settings" >}}

Select **Read-Only** to prohibit writing to the share. 

To map user permissions to the root user, enter a string or select the user from the **Maproot User** dropdown list. 
To map the user permissions to all clients, enter a string or select the user from the **Mapall User** dropdown list.

To map group permissions to the root user, enter a string or select the group from the **Maproot Group** dropdown list. 
To map the group permissions to all clients, enter a string or select the group from the **Mapall Group** dropdown list.

Select an option from the **Security** dropdown. If you select **KRB5** security, you can use a Kerberos ticket. Otherwise everything is based on IDs.

{{< expand "Security Types" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SYS** | Uses locally acquired UIDs and GIDs. No cryptographic security. |
| **KRB5** | Uses Kerberos for authentication. |
| **KRB5I** | Uses Kerberos for authentication and includes a hash with each transaction to ensure integrity. |
| **KRB5P** | Uses Kerberos for authentication and encrypts all traffic between the client and server. KRB5P is the most secure but also incurs the most load. |
{{< /truetable >}}
{{< /expand >}}

## Editing an NFS Share

To edit an existing NFS share, go to **Shares > Unix Shares (NFS)** and click the share you want to edit. 
The **Edit NFS** screen settings are identical to the share creation options.

## Starting the NFS Service

To begin sharing, click the <span class="material-icons">more_vert</span> on the toolbar and select **Turn On Service**. **Turn Off Service** displays if NFS is on. **Turn On Service** displays if NFS is off. 

{{< trueimage src="/images/SCALE/22.12/NFSWidgetOptions.png" alt="Unix (NFS) Share Widget Options" id="4: Unix (NFS) Share Widget Options" >}}

Or you can go to **System Settings > Services**, locate **NFS**, and click the toggle to running.
Select **Start Automatically** if you want NFS to activate when TrueNAS boots.

{{< hint type=note >}}
The NFS service does not automatically start on boot if all NFS shares are encrypted and locked.
{{< /hint >}} 

### Configuring NFS Service

To configure NFS service settings, click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **System Settings > Services** screen.

Unless you need specific settings, we recommend using the default NFS settings.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 

## Connecting to the NFS Share

Although you can connect to an NFS share with various operating systems, we recommend using a Linux/Unix OS.

First, download the `nfs-common` kernel module.
You can do this using the installed distribution package manager.
For example, on Ubuntu/Debian, enter command `sudo apt-get install nfs-common` in the terminal.

After installing the module, connect to an NFS share by entering `sudo mount -t nfs {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`.
Where *{IPaddressOfTrueNASsystem}* is the remote TrueNAS system IP address that contains the NFS share, *{path/to/nfsShare}* is the path to the NFS share on the TrueNAS system, and *{localMountPoint}* is a local directory on the host system configured for the mounted NFS share.
For example, `sudo mount -t nfs 10.239.15.110:/mnt/Pool1/NFS_Share /mnt` mounts the NFS share *NFS_Share* to the local directory */mnt*.

You can also use the Linux `nconnect` function to let your NFS mount support multiple TCP connections. 
To enable `nconnect`, enter `sudo mount -t nfs -o rw,nconnect=16 {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`. 
Where *{IPaddressOfTrueNASsystem}*, *{path/to/nfsShare}*, and *{localMountPoint}* are the same ones you used when connecting to the share.
For example, `sudo mount -t nfs -o rw,nconnect=16 10.239.15.110:/mnt/Pool1/NFS_Share /mnt`.

By default, anyone that connects to the NFS share only has read permission.
To change the default permissions, edit the share, open the **Advanced Options**, and change the **Access** settings.

{{< hint type=important >}}
You must have ESXI 6.7 or later for read/write functionality with NFSv4 shares.
{{< /hint >}}

{{< taglist tag="scalenfs" limit="10" >}}
