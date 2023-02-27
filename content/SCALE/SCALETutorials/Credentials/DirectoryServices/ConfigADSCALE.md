---
title: "Configuring Active Directory"
description: "This article provides instructions on configuration Active Directory in SCALE."
weight: 10
aliases:
tags:
- scalead
- scaledirserv
---


{{< toc >}}


## Configuring Active Directory In TrueNAS

The Active Directory (AD) service shares resources in a Windows network.
AD provides authentication and authorization services for the users in a network, eliminating the need to recreate the user accounts on TrueNAS.

When joined to an AD domain, you can use domain users and groups in local ACLs on files and directories. 
You can also set up shares to act as a file server.

Joining an AD domain also configures the Privileged Access Manager (PAM) to let domain users log on via SSH or authenticate to local services.

Users can configure AD services on Windows or Unix-like operating systems using [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).

To configure an AD connection, you must know the AD controller domain and the AD system account credentials.

### Preparing to Configure AD in SCALE

Users can take a few steps before configuring Active Directory (AD) to ensure the connection process goes smoothly.

1. Obtain the AD admin account name and password.  

3. [Verify name resolution](#verifying-name-resolution)

5. [Set type synchronization](#setting-time-synchronization)

After taking these actions, you can [connect to the Active Directory domain](#connecting-to-the-active-directory-domain).

### Verifying Name Resolution

To confirm that name resolution is functioning, you can use the **Shell** and issue a `ping` command and a command to check network SRV records and verify DNS resolution.

To use `dig` to verify name resolution and return DNS information:

1. Go to **System Settings > Shell** and type `dig` to check the connection to the AD domain controller. 
   The domain controller manages or restricts access to domain resources by authenticating user identity from one domain to the other through a login credentials, and it prevents unauthorized access to these resources. The domain controller applies security policies to request-for-access domain resources.

   ![DigCommandOutput](/images/scale/22.12/DigCommandOutput.png "Dig Command Output")

   When TrueNAS sends and receives packets without loss, the connection is verified.
2. Press <kbd>Ctrl + C</kbd> to cancel the `ping`.

{{< expand "The dig failed!" "v" >}}
If the ping fails:

1. Go to **Network** and click **Settings** in the **Global Configuration** window. 
2. Update the **DNS Servers** and **Default Gateway** settings to the connection to your Active Directory Domain Controller. 
   Use more than one **Nameserver** for the AD domain controllers so DNS queries for requisite SRV records can succeed. 
   Using more than one name server helps maintain the AD connection whenever a domain controller becomes unavailable.
{{< /expand >}}

### Checking Network SRV Records

Also using Shell, check the network SRV records and verify DNS resolution enter command `host -t srv <_ldap._tcp.domainname.com>` where <_ldap._tcp.domainname.com> is the domain name for the AD domain controller.

### Setting Time synchronization

Active Directory relies on the time-sensitive [Kerberos](https://tools.ietf.org/html/rfc1510) protocol.
TrueNAS adds the AD domain controller with the [PDC Emulator FSMO Role](https://support.microsoft.com/en-us/help/197132/active-directory-fsmo-roles-in-windows) as the preferred NTP server during the domain join process. 
If your environment requires something different, go to **System Settings > General** to add or edit a server in the **NTP Servers** window.

Keep the local system time sync within five (5) minutes of the AD domain controller time in a default AD environment.

Use an external time source when configuring a virtualized domain controller. 
TrueNAS generates alerts if the system time gets out-of-sync with the AD domain controller time.

TrueNAS has a few options to ensure both systems are synchronized:

1. Go to **System Settings > General** and click **Settings** in the **Localization** window to select the **Timezone** that matches location of the AD domain controller.

![LocalizationSCALE](/images/SCALE/LocalizationSCALE.png "Timezone Options")

2. Set either local time or universal time in the system BIOS.

### Connecting to the Active Directory Domain

To connect to Active Directory, in SCALE:

1. Go to **Credentials > Directory Services** click **Configure Active Directory** to open the **Active Directory** configuration screen.

2. Enter the domain name for the AD in  **Domain Name** and the account credentials in **Domain Account Name** and **Domain Account Password**.

3. Select **Enable** to attempt to join the AD domain immediately after saving the configuration. 
  SCALE populates the **Kerberos Realm** and **Kerberos Principal** fields on the **Advanced Options** settings screen.

  ![ActiveDirectoryBasicOptions](/images/SCALE/22.12/ActiveDirectoryBasicOptions.png "Active Directory Basic Options")

4. Click **Save**.

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
If the cache becomes out of sync or fewer users than expected are available in the permissions editors, resync it by clicking **Settings** in the **Active Directory** window and selecting **Rebuild Directory Service Cache**.

When creating the entry, enter the TrueNAS hostname in the name field and make sure it matches the information on the **Network > Global Configuration** screen in the **Hostname** and **NetBIOS** fields.

## Disabling Active Directory

You can disable your AD server connection without deleting your configuration or leaving the AD domain. 
Click **Settings** to open the **Active Directory** settings screen, then select the **Enable** checkbox to clear it, and click **Save** to disable SCALE AD service. 
This returns you to the main **Directory Services** screen where you see the two main directory services configuration options. 

Click **Configure Active Directory** to open the **Active Directory** screen with your existing configuration settings. 
Select **Enable** again, click **Save** to reactivate your connection to your AD server.

## Leaving Active Directory

TrueNAS SCALE requires users to cleanly leave an Active Directory if you want to delete the configuration. To cleanly leave AD, use the **Leave Domain** button on the **Active Directory Advanced Settings** screen to remove the AD object. Remove the computer account and assoicated DNS records from the Active Directory.

If the AD server moves or shuts down without you using **Leave Domain**, TrueNAS does not remove the AD object, and you have to clean up the Active Directory.


{{< taglist tag="scalead" limit="10" >}}
{{< taglist tag="scaledirserv" limit="10" title="Related Directory Services Articles" >}}
