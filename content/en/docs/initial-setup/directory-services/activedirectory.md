---
title: "Configuring Active Directory"
linkTitle: "Configuring Active Directory"
description: "How to configure Active Directory connections"
---

Active Directory (AD) is a service for sharing resources in a Windows network.
Because AD provides authentication and authorization services for the users in a network, it is not necessary to recreate the same user accounts on TrueNAS.

AD can be configured on a Windows server that is running Windows Server 2000 or higher or on a Unix-like operating system that is running [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).
To configure a basic connection, you will need to know the domain of the Active Directory domain controller and account credentials for that system.

## Preparation

Before configuring Active Directory, there are a few steps you can take to ensure the connection process goes smoothly.

### Verify Name Resolution

To confirm that name resolution is functioning, go to the **Shell** and use `ping` to check the connection to the AD domain controller.

<img src="/images/shell-ad-dc-ping.png">
<br><br>

When packets are being sent and received without loss, the connection is verified.
Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

If the ping fails, go to **Network > Global Configuration** and update the *DNS Servers* and *Default Gateway* settings so that the connection to your Active Directory Domain Controller can be established.

### Time Synchronization

Active Directory relies on Kerberos, a time-sensitive protocol.
During the domain join process, the NTP server used by the AD domain controller is added as the preferred NTP server.
The time on the system and the AD domain controller cannot be out of sync by more than **five minutes** in a default AD environment.
If the time gets out of sync, the system generates an Alert.

There are a few changes you can make in TrueNAS to ensure both systems are set to the same time:

* Go to **System > General** and make sure the system *Timezone* matches the AD Domain Controller.

  <img src="/images/system-general-timezone.png">
  <br><br>

* Set either localtime or universal time in your system BIOS

## Connect to Active Directory Domain

To connect to Active Directory, go to **Directory Services > Active Directory** and enter the AD **Domain Name** and account credentials.
Set **Enable** to attempt to join the AD domain immediately after saving the configuration.

<img src="/images/directoryservices-activedirectory-example.png">
<br><br>

Advanced options are available for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.

It can take a few minutes after configuring the Active Directory service for the AD information to be populated to TrueNAS.
To check the AD join progress, open the <i class="fas fa-clipboard"></i> **Task Manager** in the upper-right corner.
Any errors during the join process are also displayed in the **Task Manager**.
When the import is complete, AD users and groups are available when configuring basic dataset permissions or an [Access Control List (ACL)](/docs/tasks/advanced/editingacls/).

Joining AD also adds default [Kerberos](https://web.mit.edu/kerberos/) realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials that were stored in the TrueNAS configuration file.

## Troubleshooting

To verify the connection and see more information about what was imported with the AD join, open the **Shell** and enter various commands

* View AD users: `wbinfo -u`.
  To see more details about users, you can also enter `getent passwd`.
  If `wbinfo -u` shows more users than appear to be available when configuring permissions, go to **Directory Services > Active Directory** and increase the *AD Timeout* value.
* View AD groups: `wbinfo -g`.
  To see more details about groups, you can also enter `getent group`.
* View domains: `wbinfo -m`
* Test AD connection: `wbinfo -t`. A successful test shows a message similar to `checking the trust secret for domain YOURDOMAIN via RPC calls succeeded`.
* User connection test to an SMB share: `smbclient '//127.0.0.1/smbshare -U AD01.LAB.IXSYSTEMS.COM\ixuser`, replacing `127.0.0.1` with your server address, `smbshare` with the SMB share name, `AD01.LAB.IXSYSTEMS.COM` with your trusted domain, and `ixuser` with the user account name for authentication testing.

The realm used depends on the priority in the SRV DNS record.
DNS can override the system Active Directory settings.
When unable to connect to the correct realm, check the SRV records on the DNS server.
Active Directory uses DNS to determine the location of the domain controllers and global catalog servers in the network.
Use `host -t srv _ldap._tcp.domainname.com` to determine the SRV records of the network and change the weight and/or priority of the SRV record to reflect the fastest server.

If the cache becomes out of sync due to an AD server being taken off and back online, resync the cache using **Directory Service > Active Directory > REBUILD DIRECTORY SERVICE CACHE**.

If the Windows server version is lower than 2008 R2, try creating a Computer entry on the Windows server Organizational Unit (OU).
When creating this entry, enter the TrueNAS hostname in the name field.
Make sure it is the same name as the one set in the **Hostname** field in **Network > Global Configuration**, and the same **NetBIOS alias** in **Directory Service >Active Directory > Advanced Options**.
