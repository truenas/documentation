---
title: "Accessing NAS From a VM"
weight: 20
---

{{< toc >}}

If you want to access your TrueNAS SCALE directories from a VM, you must create a bridge interface for the VM to use. 

Go to **Virtualization**, find the VM you will use to access TrueNAS storage, and toggle it off.

![AccessNASfromVM1](/images/SCALE/AccessNASfromVM1.png "Toggle off VM")

Go to **Network**, find the active interface that you used as the VM's parent interface. Make note of the interface's IP Address and subnet mask, then click it. Uncheck the **DHCP** box, then click **Apply**.

![AccessNASfromVM2](/images/SCALE/AccessNASfromVM2.png "Turn off DHCP")

Click **Add** in the **Interfaces** window. Select **Bridge** for the **Type** and give it a name (must be in *brX* format). Check the **DHCP** box, then select the active interface in the **Bridge Members** drop-down. Under **IP Addresses**, click **Add** and enter the active interface's IP and subnet mask that you noted earlier. 
You can also get the IP address and subnet mask by going to **Shell** and entering `ip a`.

![AccessNASfromVM3](/images/SCALE/AccessNASfromVM3.png "Add IP and Subnet Mask")

Click **Apply**, then click **Test Changes**. Once TrueNAS finishes testing the interface, click **Save Changes**.

![AccessNASfromVM4](/images/SCALE/AccessNASfromVM4.png "Save Network Changes")

Go to **Virtualization**, expand the VM you will use to access TrueNAS storage, and click **Devices**. Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.
Select the new bridge interface from the **Nic to attach:** drop-down, then click **Save**.

![AccessNASfromVM5](/images/SCALE/AccessNASfromVM5.png "Save Network Changes")

You can now access your TrueNAS storage from the VM. You may have to set up shares or users with home directories to access certain files.

**Examples**

{{< tabs "Examples" >}}
{{< tab "Linux" >}}
Linux VMs can access TrueNAS storage using FTP, SMB, and NFS.

In the example below, the Linux VM is using ftp to access a user's home directory on TrueNAS.

![AccessNASfromVM6](/images/SCALE/AccessNASfromVM7.png "Connecting to FTP Path")

![AccessNASfromVM7](/images/SCALE/AccessNASfromVM7.png "FTP Home Directory")
{{< /tab >}}

{{< tab "Windows" >}}
Windows VMs can access TrueNAS storage using FTP and SMB.

In the example below, the Windows VM accessing an SMB share on TrueNAS.

![AccessNASfromVM8](/images/SCALE/AccessNASfromVM8.png "Enter SMB Share Path")

![AccessNASfromVM9](/images/SCALE/AccessNASfromVM9.png "SMB Share")
{{< /tab >}}
{{< /tabs >}}