---
title: "Configuring Active Directory"
description: "This article provides instructions on configuration Active Directory in SCALE."
weight: 10
aliases:
tags:
- scalead
- scaledirectoryservices
---


{{< toc >}}


## Configuring Active Directory In TrueNAS

The Active Directory (AD) service shares resources in a Windows network.
AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS.

Once joined to an AD domain, you can use domain users and groups in local ACLs on files and directories. 
You can also set up shares to act as a file server.

Joining an AD domain also configures the Privileged Access Manager (PAM) to let domain users log on via SSH or authenticate to local services.

Users can configure AD services on Windows or Unix-like operating systems using [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure an AD connection, you must know the AD controller domain and the AD system account credentials.

### Preparation

Users can take a few steps before configuring Active Directory to ensure the connection process goes smoothly.

### Verifying Name Resolution

To confirm that name resolution is functioning, go to **System Settings > Shell** and use `ping` to check the connection to the AD domain controller.

![ShellDomainPingSCALE](/images/SCALE/ShellDomainPingSCALE.png "Pinging a Domain Controller")

When TrueNAS sends and receives packets without loss, the connection is verified. Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

Another option is to use `host -t srv _ldap._tcp.domainname.com` to check the network SRV records and verify DNS resolution.

{{< expand "The ping failed!" "v" >}}
If the ping fails, go to **Network** and click **Settings** in the **Global Configuration** window. Update the **DNS Servers** and **Default Gateway** settings so the connection to your Active Directory Domain Controller can start.
Use more than one **Nameserver** for the AD domain controllers so DNS queries for requisite SRV records can succeed.
Using more than one Nameserver helps maintain the AD connection whenever a domain controller becomes unavailable.
{{< /expand >}}

### Setting Time Synchronization

Active Directory relies on the time-sensitive [Kerberos](https://tools.ietf.org/html/rfc1510) protocol.
TrueNAS adds the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) as the preferred NTP server during the domain join process. 
If your environment requires something different, go to **System Settings > General** and add or edit a server in the **NTP Servers** window.

The local system time cannot be out of sync by more than **five (5) minutes** with the AD domain controller time in a default AD environment.
Use an external time source when configuring a virtualized domain controller.
TrueNAS generates alerts if the system time gets out-of-sync with the AD domain controller time.

TrueNAS has a few options to ensure both systems are synchronized:

1. Go to **System Settings > General** and click **Settings** in the **Localization** window to ensure the **Timezone** matches the AD Domain Controller.

![LocalizationSCALE](/images/SCALE/LocalizationSCALE.png "Timezone Options")

2. Set either local time or universal time in the system BIOS.

### Connecting to the Active Directory Domain

To connect to Active Directory, click **Settings** in the **Active Directory** window and enter the AD **Domain Name** and account credentials.
Set *Enable* to attempt to join the AD domain immediately after saving the configuration.

![ActiveDirectorySCALE](/images/SCALE/ActiveDirectorySCALE.png "Active Directory Form")

TrueNAS offers advanced options for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.

{{< expand "I don't see any AD information!" "v" >}}
TrueNAS can take a few minutes to populate the Active Directory information after configuration. 
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import is complete, AD users and groups become available while configuring basic dataset permissions or an ACL with TrueNAS cache enabled (enabled by default).

Joining AD also adds default Kerberos realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials stored in the TrueNAS configuration file.

### Troubleshooting - Resync the Cache
If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it by clicking **Settings** in the **Active Directory** window and selecting **Rebuild Directory Service Cache**.

If you are using Windows Server with 2008 R2 or older, try creating a **Computer** entry on the Windows server Organizational Unit (OU).

When creating the entry, enter the TrueNAS hostname in the name field and make sure it matches the:

* *Hostname*: Go to **Network** and find **Hostname** in the **Global Configuration** window.
* *NetBIOS alias*: Go to **Credentials > Directory Services** and click **Settings** in the **Active Directory** window. Click **Advanced Options** and find the **NetBIOS alias**.

## Using Shell Commands

You can go to **System Settings > Shell** and enter various commands to get more details about the AD connection and users:

*AD current state*: `midclt call activedirectory.get_state`.

*Connected LDAP server details*: `midclt call activedirectory.domain_info | jq`. For example:
  ```
  truenas# midclt call activedirectory.domain_info | jq
  {
    "LDAP server": "192.168.1.125",
    "LDAP server name": "DC01.HOMEDOM.FUN",
    "Realm": "HOMEDOM.FUN",
    "Bind Path": "dc=HOMEDOM,dc=FUN",
    "LDAP port": 389,
    "Server time": 1593026080,
    "KDC server": "192.168.1.125",
    "Server time offset": 5,
    "Last machine account password change": 1592423446
  }
  ```

*View AD users*: `wbinfo -u`.
* Enter `getent passwd DOMAIN\\<user>` to see more user details (`<user>` = desired user name).
* If `wbinfo -u` shows more users than are available when configuring permissions and the TrueNAS cache is enabled, go to **Directory Services**, click *Settings* in the *Active Directory* window, and increase the *AD Timeout* value.

*View AD groups*: `wbinfo -g`. Enter `getent group DOMAIN\\domain\ users` to see more details.

*View domains*: `wbinfo -m`.

*Test AD connection*: `wbinfo -t`. 
* A successful test shows a message like `checking the trust secret for domain YOURDOMAIN via RPC calls succeeded`.

*Test user connection to SMB share*: `smbclient '//0.0.0.0/smbshare -U AD.DOMAIN.COM\user`
* `0.0.0.0` is the server address 
* `smbshare` is the SMB share name 
* `AD.DOMAIN.COM` is the trusted domain
* `user` is the user account name to authenticate.


## Cleaning Up Active Directory
TrueNAS SCALE requires users to cleanly leave an Active Directory using the **Leave Domain** button under **Advanced Settings** to remove the AD object. 

If the AD server moves or shuts down without you using **Leave Domain**, TrueNAS won't remove the AD object, and you will have to clean up the Active Directory.

Go to **Credentials > Directory Services** and click **Show** next to **Advanced Settings**

1. Clean out Kerberos settings by clicking **Settings** in the **Kerberos Settings** window and clearing the **Appdefaults Auxiliary Parameters** and **Libdefaults Auxiliary Parameters** boxes. You may also need to clear out leftover Kerberos Realms and Keytabs by clicking the <i class="material-icons" aria-hidden="true">delete</i> next to the remaining entries.
2. Click the *Idmap* *Active Directory - Primary Domain* entry and clear out the Active Directory settings, then click **CONTINUE** to clear the Idmap cache.
3. Go to **Network** and click *Settings* in the *Global Configuration* window. Remove the Active Directory Nameserver and enter a new one.
4. Ensure all other network settings are correct.
5. Go to **System Settings > Services** and change the workgroup to "WORKGROUP".
6. Go to **Credentials> Directory Services** and edit the Active Directory config to the new domain.
7. Make sure the Kerberos settings and Idmap are correct and SMB is running.

{{< taglist tag="scalead" limit="10" >}}
{{< taglist tag="scaledirectoryservices" limit="10" title="Related Directory Services Articles" >}}
