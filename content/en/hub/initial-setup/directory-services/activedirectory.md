---
title: "Configuring Active Directory"
description: "How to configure Active Directory (AD) connections"
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

You can also use `host -t srv _ldap._tcp.domainname.com` to check the SRV records of the network and verify DNS resolution.

If the ping fails, go to **Network > Global Configuration** and update the *DNS Servers* and *Default Gateway* settings so that the connection to your Active Directory Domain Controller can be established.
It is recommended to use more than one *Nameserver* for the AD domain controllers or that DNS queries for requisite SRV records can succeed.
This helps maintain the AD connection whenever a domain controller becomes unavailable.

### Time Synchronization

Active Directory relies on Kerberos, a time-sensitive protocol.
During the domain join process, the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) is added as the preferred NTP server.
You can change this in **System > NTP Servers** if your environment requires something different.

The time on the system and the AD domain controller cannot be out of sync by more than **five minutes** in a default AD environment.
It is recommended to use an external time source when configuring a virtualized domain controller.
If the time gets out of sync between TrueNAS and the AD domain controller, the system generates an Alert.

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
When the import is complete and the TrueNAS cache is enabled (advanced setting, enabled by default), AD users and groups become available when configuring basic dataset permissions or an [Access Control List (ACL)](/docs/tasks/advanced/editingacls/).

Joining AD also adds default [Kerberos](https://web.mit.edu/kerberos/) realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials that were stored in the TrueNAS configuration file.

## Troubleshooting

You can go to the **Shell** and enter various commands to get more details about the AD connection and users:

* AD current state: `midclt call activedirectory.get_state`.
* Details about the currently connected Lightweight Directory Access Protocol (LDAP) server: `midclt call activedirectory.domain_info | jq`.
  Example:
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
* View AD users: `wbinfo -u`.
  To see more details about a user, enter `getent passwd DOMAIN\\<user>`, replacing `<user>` with the desired user name.
  If `wbinfo -u` shows more users than appear to be available when configuring permissions and the TrueNAS cache is enabled, go to **Directory Services > Active Directory** and increase the *AD Timeout* value.
* View AD groups: `wbinfo -g`.
  To see more details, enter `getent group DOMAIN\\domain\ users`.
* View domains: `wbinfo -m`
* Test AD connection: `wbinfo -t`. A successful test shows a message similar to `checking the trust secret for domain YOURDOMAIN via RPC calls succeeded`.
* User connection test to an SMB share: `smbclient '//127.0.0.1/smbshare -U AD01.LAB.IXSYSTEMS.COM\ixuser`, replacing `127.0.0.1` with your server address, `smbshare` with the SMB share name, `AD01.LAB.IXSYSTEMS.COM` with your trusted domain, and `ixuser` with the user account name for authentication testing.

If the cache becomes out of sync or fewer users than expected are available in the permissions editors, you can resync the cache using **Directory Service > Active Directory > REBUILD DIRECTORY SERVICE CACHE**.

If the Windows server version is lower than 2008 R2, try creating a Computer entry on the Windows server Organizational Unit (OU).
When creating this entry, enter the TrueNAS hostname in the name field.
Make sure it is the same name as the one set in the **Hostname** field in **Network > Global Configuration**, and the same **NetBIOS alias** in **Directory Service >Active Directory > Advanced Options**.
