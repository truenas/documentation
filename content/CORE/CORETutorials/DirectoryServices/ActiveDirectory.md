---
title: "Setting Up Active Directory"
description: "Provides information on how to configure Active Directory (AD) on your TrueNAS."
weight: 10
aliases: /core/directoryservices/activedirectory/
tags:
- activedirectory
---

The Active Directory (AD) service shares resources in a Windows network. AD provides authentication and authorization services for the users in a network. This eliminates the need to recreate the user accounts on TrueNAS.

Domain users and groups in local ACLs are accessible after joining AD. Setting up shares acts as a file server.  
Joining an AD domain configures the Privileged Access Manager (PAM). This allows domain users to log on via SSH or authenticate to local services.

It is possible to configure AD services on Windows. Or on Unix-like operating systems running [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure a connection, you need to know the following items:
* Determine the Active Directory domain controller domain.
* Make sure you have the account credentials for that system.

## Preparation

Preparing the following before configuring Active Directory helps ensure the connection process.

### Time Synchronization
Active Directory relies on [Kerberos](https://tools.ietf.org/html/rfc1510), a time-sensitive protocol.
During the domain join process, the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) is added as the preferred NTP server. 

You can change NTP server settings in **System > NTP Servers** if necessary.

In a default AD environment, the local system time must be in sync with the AD domain controller time. Their times cannot differ from each other by more than 5 minutes. Use an external time source when configuring a virtualized domain controller. TrueNAS creates an **Alert** if the system time gets out of sync with the AD domain controller time.

The following options apply to time synchronization in TrueNAS:

* Go to **System > General** and make sure the value in **Timezone** matches the AD Domain Controller.

![SystemGeneralTimezoneOptions](/images/CORE/System/SystemGeneralTimezoneOptions.png "Timezone Options")

* Select either local time or universal time in the system BIOS.

## Connect to the Active Directory Domain

To connect to Active Directory, go to **Directory Services > Active Directory**. Enter the AD **Domain Name** and account credentials.
Select **Enable** to attempt to join the AD domain immediately after saving the configuration.

![DirectoryServicesActiveDirectoryExample](/images/CORE/DirectoryServices/DirectoryServicesActiveDirectoryExample.png "Active Directory Example")  

The preconfigured defaults are generally suitable. Advanced options are available for fine-tuning the AD configuration. Click **ADVANCED OPTIONS** to access extra options.  

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors.  

{{< expand "I don't see any AD information!" "v" >}}
After configuring the Active Directory service, there can be a delay. TrueNAS can take a few minutes to populate the AD information.
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import completes, AD users and groups become available. These have basic dataset permissions or an [Access Control List (ACL)]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}). Enabled is the default status for the TrueNAS cache.

Joining AD adds default [Kerberos]({{< relref "/CORE/CORETutorials/DirectoryServices/Kerberos.md" >}}) realms and generates a default `AD_MACHINE_ACCOUNT` keytab.
TrueNAS automatically begins using this default keytab. TrueNAS removes any administrator credentials stored in the TrueNAS configuration file.

## Related Services: FTP Access

The recommendation is to use SFTP over FTP. But joined systems do allow FTP access. Keep these caveats in mind:
* Authentication uses *DOMAIN\username* as the user name by default.
* A user home directory needs to exist before joining.
* You cannot add an AD user to the FTP group. Enable local user auth for FTP instead.
* An existing samba homes share created in the GUI is set as the *template homedir* for AD users. This means that AD user home directories are set inside that path. 
  Proper permissions are vital.
* There are no guarantees about how `proftpd` handles ACLs.
* AD users can have populated homedir information in their LDAP schema. The admin (or `pam_mkhomedir`) must ensure that these paths exist.
* When the admin is pulling home directories from their LDAP schema, take an extra step of caution. Ensure that users aren't writing files to the boot device.

## Troubleshooting

Resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors. Go to **Directory Services > Active Directory > REBUILD DIRECTORY SERVICE CACHE**.

If you are using Windows Server with 2008 R2 or older, try the following options:

Create a **Computer** entry on the Windows server Organizational Unit (OU). When creating this entry, enter the TrueNAS host name in the name field. Make sure it is the same name as the one set in the **Hostname** field in **Network > Global Configuration**. Must match the **NetBIOS alias** from **Directory Services > Active Directory > Advanced Options**.

