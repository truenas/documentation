---
title: "Configuring Active Directory"
description: "Provides instructions on configuring Active Directory (AD) in SCALE."
weight: 10
aliases:
tags:
- activedirectory
- directoryservices
keywords:
- enterprise data storage
- nas data storage 
---


{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

## Configuring TrueNAS Active Directory Access
The Active Directory (AD) service shares resources in a Windows network.
AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS.

When joined to an AD domain, you can use domain users and groups in local ACLs on files and directories.
You can also set up shares to act as a file server.

Joining an AD domain also configures the Privileged Access Manager (PAM) to let domain users log on via SSH or authenticate to local services.

Users can configure AD services on Windows or Unix-like operating systems using [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

### Preparing to Configure AD in TrueNAS
Before configuring Active Directory (AD) in TrueNAs:

You need to know the hostname assigned to the TrueNAS system. Default value is **truenas**.

The **Domain Account Name** default is **Administrator**, or enter a name for TrueNAS to generate as the computer account upon domain join.
Enter the password for this account.

* Verify name resolution.
  Go to **Network > Global Network Settings** to verify your TrueNAS network DNS name servers are configured with the target domain controller address that you plan to add on the **Active Directory** screen.

* Change the default hostname of the system from **truenas** to the name assigned to the TrueNAS system.

* [Set time synchronization](#setting-time-synchronization)

After taking these actions, you can [connect to the Active Directory domain](#connecting-to-the-active-directory-domain).

### Setting Time Synchronization
Active Directory relies on the time-sensitive [Kerberos](https://tools.ietf.org/html/rfc1510) protocol.
TrueNAS adds the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) as the preferred NTP server during the domain join process.
If your environment requires something different, go to **System > General Settings**, click **Add** to open the **NTP Servers** screen, then add a new or edit a listed server.

Keep the local system time sync within five (5) minutes of the AD domain controller time in a default AD environment.

Use an external time source when configuring a virtualized domain controller.
TrueNAS generates alerts if the system time gets out-of-sync with the AD domain controller time.

TrueNAS has a few options to ensure both systems are synchronized. Either:

* Go to **System > General Settings**, click **Settings** in the **Localization** widget, and set **Timezone** to the value that matches location of the AD domain controller.

  {{< trueimage src="/images/SCALE/SystemSettings/LocalizationSettingsScreen.png" alt="Timezone Options" id="Timezone Options" >}}

Or  

* Set the system BIOS to either local time or universal time.

### Connecting to the Active Directory Domain

To connect TrueNAS to Active Directory:

1. Go to **Credentials > Directory Services** click **Configure Active Directory** to open the **Active Directory** configuration screen.

2. Enter the domain name for the AD in **Domain Name** and the `bindname` and `bindpw` account credentials in **Domain Account Name** and **Domain Account Password**.
   Default **Domain Account Name** created for TrueNAs is **Administrator**.

3. Enter the TrueNAS hostname in **NetBIOS Name**. The default is **TRUENAS**.
   Enter the TrueNAS host name that matches the information on the **Network > Global Configuration** screen in the **Hostname** field.

4. Select **Enable** to attempt to join the AD domain immediately after saving the configuration.
   SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields on the **Advanced Options** settings screen.

   {{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryBasicOptions.png" alt="Active Directory Basic Options" id="Active Directory Basic Options" >}}

   TrueNAS creates the default Kerberos realm and principal, and the **Computer Account OU** value **/computers/servers/NAS**.

   If you get a DNS server error, go to **Network > Global Configuration**, click **Settings** and verify the DNS nameserver IP addresses are correctly configured with addresses that permit access to the Active Directory domain controller.
   Correct any network configuration settings, then reconfigure the Active Directory settings.

5. Click **Save**.

TrueNAS offers advanced options for fine-tuning the AD configuration, but the preconfigured defaults are generally suitable.

{{< expand "I don't see any AD information!" "v" >}}
TrueNAS can take a few minutes to populate the Active Directory information after configuration.
To check the AD join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
TrueNAS displays any errors during the join process in the **Task Manager**.
{{< /expand >}}

When the import completes, AD users and groups become available while configuring basic dataset permissions or an ACL with TrueNAS cache enabled (enabled by default).

Joining AD also adds default Kerberos realms and generates a default **AD_MACHINE_ACCOUNT** keytab.
TrueNAS automatically begins using this default keytab and removes any administrator credentials stored in the TrueNAS configuration file.

### Troubleshooting - Resyncing the Cache
If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it by clicking **Settings** in the **Active Directory** window and then click **Rebuild Directory Service Cache**.

The name in **NetBIOS Name** should match the name in **Hostname** on the **Global Configuration** settings screen.

## Disabling Active Directory
To disable your AD server connection without deleting your configuration or leaving the AD domain, click **Settings** to open the **Active Directory** settings screen.
Select the **Enable** checkbox to clear it and click **Save** to disable the AD service.

This returns you to the main **Directory Services** screen now showing the two main directory services configuration options.

Click **Configure Active Directory** to open the **Active Directory** screen with your existing configuration settings.
Select **Enable** again, and click **Save** to reactivate your connection to your AD server.

## Leaving Active Directory
TrueNAS requires users to cleanly leave an Active Directory if you want to delete the configuration.
To cleanly leave AD, click **Leave Domain** on the **Active Directory Advanced Settings** screen to remove the AD object.
Remove the computer account and associated DNS records from the Active Directory.

If the AD server moves or shuts down without you using **Leave Domain**, TrueNAS does not remove the AD object, and you have to clean up the Active Directory.
