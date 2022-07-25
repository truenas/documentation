---
title: "Setting Up Active Directory"
description: "This article provides information on how to configure Active Directory (AD) on your TrueNAS."
weight: 10
aliases: /core/directoryservices/activedirectory/
tags:
- coredirectoryservices
- coread
---

{{< toc >}}

The Active Directory (AD) service shares resources in a Windows network. AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS. Domain users and groups in local ACLs are accessible after joining AD. Setting up shares acts as a file server.  

Joining an AD domain configures the Privileged Access Manager (PAM) to let domain users log on via SSH or authenticate to local services.

AD services can be configured on Windows, or on Unix-like operating systems running [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure a connection, you need to know the Active Directory domain controller domain and the account credentials for that system.

## Preparation

Users can take a few steps before configuring Active Directory to ensure the connection process goes smoothly.

{{< expand "Preparation Steps" >}}
{{< expand "Verify Name Resolution" >}}
To confirm that name resolution is functioning, go to the **Shell** and use `ping` to check the connection to the AD domain controller.

![ShellDomainControllerPing](/images/CORE/12.0/ShellDomainControllerPing.png "Pinging a Domain Controller")

When packets are sent and received without loss, the connection is verified.
Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

Another option is to use the command `host -t srv _ldap._tcp.domainname.com` to check the network SRV records and verify DNS resolution.

{{< expand "The ping failed!" "v" >}}
If the ping fails, go to **Network > Global Configuration** and update the **DNS Servers** and **Default Gateway** settings so the connection to your Active Directory Domain Controller can start.
Enter more than one value in **Nameserver** for the AD domain controllers so DNS queries for requisite SRV records can succeed.
Using more than one name server helps maintain the AD connection whenever a domain controller becomes unavailable.
{{< /expand >}}
{{< /expand >}}
{{< expand "Time Synchronization" >}}
Active Directory relies on [Kerberos](https://tools.ietf.org/html/rfc1510), a time-sensitive protocol.
During the domain join process, the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) is added as the preferred NTP server. 
If your environment requires something different, you can change NTP server settings in **System > NTP Servers**.

The local system time cannot be out of sync by more than **five minutes** with the AD domain controller time in a default AD environment.
Use an external time source when configuring a virtualized domain controller.
TrueNAS creates an **Alert** if the system time gets out of sync with the AD domain controller time.

There are a few options in TrueNAS to ensure both systems are synchronized:

* Go to **System > General** and make sure the value in **Timezone** matches the AD Domain Controller.

![SystemGeneralTimezoneOptions](/images/CORE/12.0/SystemGeneralTimezoneOptions.png "Timezone Options")

* Select either localtime or universal time in the system BIOS.
{{< /expand >}}
{{< /expand >}}

## Connect to the Active Directory Domain

To connect to Active Directory, go to **Directory Services > Active Directory** and enter the AD **Domain Name** and account credentials.
Select **Enable** to attempt to join the AD domain immediately after saving the configuration.

![DirectoryServicesActiveDirectoryExample](/images/CORE/12.0/DirectoryServicesActiveDirectoryExample.png "Active Directory Example")  

Use **ADVANCED OPTIONS** to access additional options. Advanced options are available for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.  

Use **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync  or  fewer users than expected are available in the permissions editors.  

{{< expand "I don't see any AD information!" "v" >}}
TrueNAS can take a few minutes to populate the AD information after configuring the Active Directory service.
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import completes, AD users and groups become available. These have basic dataset permissions or an [Access Control List (ACL)]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}). TrueNAS cache is enabled by default.

Joining AD adds default [Kerberos]({{< relref "/CORE/CORETutorials/DirectoryServices/Kerberos.md" >}}) realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials stored in the TrueNAS configuration file.

## Related Services: FTP Access

While SFTP is recommended over FTP, joined systems do allow FTP access. Keep these caveats in mind:
* Authentication uses *DOMAIN\username* as the user name by default.
* A user home directory needs to exist before joining.
* An AD user cannot be added to the FTP group. Enable local user auth for FTP instead.
* An existing samba homes share created in the GUI is set as the *template homedir* for AD users. This means that AD user home directories are set inside that path. 
  Proper permissions are vital.
* There are no guarantees about how `proftpd` handles ACLs.
* The admin (or `pam_mkhomedir`) must ensure that paths exist when AD users have populated homedir information in their LDAP schema.
* When the admin is pulling home directories from their LDAP schema, take extra caution to insure that users aren't writing files to the boot device.

## Troubleshooting

If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it using **Directory Service > Active Directory > REBUILD DIRECTORY SERVICE CACHE**.

If you are using Windows Server with 2008 R2 or older, try creating a **Computer** entry on the Windows server Organizational Unit (OU).
When creating this entry, enter the TrueNAS host name in the name field.
Make sure it is the same name as the one set in the **Hostname** field in **Network > Global Configuration**, and the **NetBIOS alias** from **Directory Service > Active Directory > Advanced Options**.

{{< expand "Shell Commands" "v" >}}
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
* View domains: `wbinfo -m`.
* Test AD connection: `wbinfo -t`. A successful test shows a message similar to `checking the trust secret for domain YOURDOMAIN via RPC calls succeeded`.
* User connection test to an SMB share: `smbclient '//127.0.0.1/smbshare -U AD01.LAB.IXSYSTEMS.COM\ixuser`, replacing `127.0.0.1` with your server address, `smbshare` with the SMB share name, `AD01.LAB.IXSYSTEMS.COM` with your trusted domain, and `ixuser` with the user account name for authentication testing.
{{< /expand >}}

{{< taglist tag="coredirectoryservices" limit="10" >}}
