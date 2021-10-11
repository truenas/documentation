---
title: "Active Directory"
weight: 10
---

{{< toc >}}

The Active Directory (AD) service shares resources in a Windows network.
AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS.

Users can configure AD services on: 
* A Windows Server running Windows Server 2000 or later. 
* A Unix-like OS running [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure a connection, you will need to know the Active Directory's domain and account credentials.

## Preparation

Users can take a few steps before configuring Active Directory to ensure the connection process goes smoothly.

{{< tabs "Preparation Steps" >}}
{{< tab "Verify Name Resolution" >}}
To confirm that name resolution is functioning, go to the **Shell** and use `ping` to check the connection to the AD domain controller.

![ShellDomainPingSCALE](/images/SCALE/ShellDomainPingSCALE.png "Pinging a Domain Controller")

When packets are being sent and received without loss, the connection is verified.
Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

Another option is to use `host -t srv _ldap._tcp.domainname.com` to check the network's SRV records and verify DNS resolution.

{{< expand "The ping failed!" "v" >}}
If the ping fails, go to **Network** and click *Settings* in the *Global Configuration* window. Update the *DNS Servers* and *Default Gateway* settings so the connection to your Active Directory Domain Controller can start.
Use more than one *Nameserver* for the AD domain controllers so DNS queries for requisite SRV records can succeed.
Using more than one *Nameserver* helps maintain the AD connection whenever a domain controller becomes unavailable.
{{< /expand >}}
{{< /tab >}}
{{< tab "Time Synchronization" >}}
Active Directory relies on the time-sensitive [Kerberos](https://tools.ietf.org/html/rfc1510) protocol.
TrueNAS adds the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) as the preferred NTP server during the domain join process. 
If your environment requires something different, go to **System Settings > General** and add or edit a server in the *NTP Servers* window.

The local system time cannot be out of sync by more than **five minutes** with the AD domain controller time in a default AD environment.
Use an external time source when configuring a virtualized domain controller.
TrueNAS creates an **Alert** if the system time gets out of sync with the AD domain controller time.

There are a few options in TrueNAS to ensure both systems are synchronized:

* Go to **System Settings > General** and click *Settings* in the *Localization* window to ensure the *Timezone* matches the AD Domain Controller.

![LocalizationSCALE](/images/SCALE/LocalizationSCALE.png "Timezone Options")

* Set either localtime or universal time in the system BIOS.
{{< /tab >}}
{{< /tabs >}}

## Connect to the Active Directory Domain

To connect to Active Directory, click *Settings* in the *Active Directory* window and enter the AD *Domain Name* and account credentials.
Set *Enable* to attempt to join the AD domain immediately after saving the configuration.

![ActiveDirectorySCALE](/images/SCALE/ActiveDirectorySCALE.png "Active Directory Form")

Advanced options are available for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.

{{< expand "I don't see any AD information!" "v" >}}
TrueNAS can take a few minutes to populate the AD information after configuring the Active Directory service. 
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import is complete, AD users and groups become available while configuring basic dataset permissions or an ACL with TrueNAS cache enabled (enabled by default).

Joining AD also adds default Kerberos realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials stored in the TrueNAS configuration file.

## Advanced Options

![ActiveDirectoryAdvancedOptionsSCALE](/images/SCALE/ActiveDirectoryAdvancedOptionsSCALE.png "Advanced Options")

| Setting | Description |
|---------|-------------|
| Verbose logging | Set to log attempts to join the domain to /var/log/messages. |
| Allow Trusted Domains | When set, usernames do not include a domain name. Unset to force domain names to be prepended to user names. One reason to disable this is to prevent username collisions when there are identical usernames in more than one domain. |
| Use Default Domain | Unset to prepend the domain name to the username. Unset to prevent name collisions when multiple domains use the same username with Allow Trusted Domains active. |
| Allow DNS Updates | Set to let Samba apply DNS updates when joining domains. |
| Disable FreeNAS Cache | Set to disable caching AD users and groups. This helps when unable to bind to a domain with many users or groups. |
| Restrict PAM | Set to restrict SSH access in certain circumstances to only members of BUILTIN\\Administrators. |
| Site Name | Enter the relative distinguished name of the site object in the Active Directory. |
| Kerberos Realm | Select an existing realm from Directory Services > Kerberos Realms. |
| Kerberos Principal | Select the location of the principal in the keytab created in Directory Services > Kerberos Keytabs. |
| Computer Account OU | The OU that creates new computer accounts. TrueNAS reads the OU string from top to bottom without RDNs. Uses forward slashes (/) as delimiters, like Computers/Servers/NAS. Use backslashes (\\) to escape characters but not as a separator. TrueNAS interprets backslashes at multiple levels, so you might have to use several for them to work. When this field is blank, TrueNAS creates new computer accounts in the Active Directory default OU. |
| AD Timeout | Number of seconds before timeout. To view the AD connection status, open the interface Task Manager. |
| DNS Timeout | Number of seconds before a timeout. Increase this value if AD DNS queries time out. |
| Winbind NSS Info | Choose the schema to use when querying AD for user/group info. *rfc2307* uses the Windows 2003 R2 schema support, *sfu* is for Service For Unix 3.0 or 3.5, and *sfu20* is for Service For Unix 2.0. |
| Netbios Name | Netbios Name of this NAS. This name must differ from the Workgroup name and be no greater than 15 characters. |
| NetBIOS alias | Alternative names (no greater than 15 characters) that SMB clients can use when connecting to this NAS. Can be no greater than 15 characters. |
| Edit Idmap | Navigates to **Directory Services > Idmap** so the user can edit the Active Directory's Idmap |
| Leave Domain | Disconnects the TrueNAS system from the Active Directory. |

## Troubleshooting

{{< tabs "Troubleshooting" >}}
{{< tab "Resync the Cache" >}}
If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it by clicking *Settings* in the *Active Directory* window and selecting *Rebuild Directory Service Cache*.

If the Windows Server version is older than 2008 R2, try creating a **Computer** entry on the Windows server Organizational Unit (OU).

When creating the entry, enter the TrueNAS hostname in the name field.

Make sure it matches the:
* *Hostname*: Go to **Network** and find *Hostname* in the *Global Configuration* window.
* *NetBIOS alias*: Go to **Credentials > Directory Services** and click *Settings* in the *Active Directory* window. Click *Advanced Options* and find the *NetBIOS alias*.

{{< expand "Shell Commands" "v" >}}
You can go to **System Settings > Shell** and enter various commands to get more details about the AD connection and users:

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
{{< /tab >}}

{{< tab "Clean Up Active Directory" >}}
TrueNAS SCALE requires users to cleanly leave an Active Directory using the *Leave Domain* button under *Advanced Settings* to remove the AD object. 

However, if the AD server moves or shuts down before you can use *Leave Domain*, TrueNAS won't remove the AD object and you must manually clean up the Active Directory.

Go to **Credentials > Directory Services** and click *Show* next to *Advanced Settings*

1. Clean out Kerberos settings by clicking *Settings* in the *Kerberos Settings* window and clearing the *Appdefaults Auxiliary Parameters* and *Libdefaults Auxiliary Parameters* boxes. You may also need to clear out leftover Kerberos Realms and Keytabs by clicking the <i class="material-icons" aria-hidden="true">delete</i> next to remaining entries.
2. Click the *Idmap* *Active Directory - Primary Domain* entry and clear out the Active Directory settings, then click *CONTINUE* to clear the Idmap cache.
3. Go to **Network** and click *Settings* in the *Global Configuration* window. Remove the Active Directory Nameserver and enter a new one.
4. Ensure all other network settings are correct.
5. Go to **System Settings > Services** and change the workgroup to "WORKGROUP".
6. Go to **Credentials> Directory Services** and edit the Active Directory config to the new domain.
7. Make sure the Kerberos settings and Idmap are correct and that SMB is running.
{{< /tab >}}
{{< /tabs >}}


