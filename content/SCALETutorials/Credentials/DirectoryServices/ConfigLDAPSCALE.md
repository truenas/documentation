---
title: "Configuring LDAP"
description: "Provides instructions on configuring and managing LDAP configurations in TrueNAS."
weight: 20
tags:
- ldap
- directoryservices
keywords:
- enterprise data storage
- nas data storage 
---

TrueNAS has an [Open LDAP](https://www.openldap.org/) client for accessing the information on an LDAP server.
An LDAP server provides directory services for finding network resources like users and their associated permissions.
{{< hint type=note >}}
You can have either Active Directory or LDAP configured on TrueNAS but not both.
{{< /hint >}}

## Configuring LDAP

To configure TrueNAS to use an LDAP directory server:

1. Go to **Credentials > Directory Services** and click **Configure LDAP**.

   ![LDAPBasicOptionsSettings](/images/SCALE/Credentials/LDAPBasicOptionsSettings.png "LDAP Basic Options")

2. Enter your LDAP server host name. If using a cloud service LDAP server, do not include the full URL.

3. Enter your LDAP server base DN. This is the top of the top level of the LDAP directory tree to use when searching for resources.

4. Enter the bind DN (administrative account name for the LDAP server) and the bind password.

5. Select **Enable** to activate the server

6. Click **Save**.

If you want to further modify the LDAP configuration, click **Advanced Options**. See the [LDAP UI Reference article]({{< relref "/SCALEUIReference/Credentials/DirectoryServices/LDAP.md" >}}) for details about advanced settings.

{{< hint type=note >}}
When using the `idmap_ad` backend, TrueNAS relies on the LDAP server to provide `uidNumber` and `gidNumber` attributes for users and groups.
If users are missing a `uidNumber`, they might appear in queries (`wbinfo -u`) but fail when a UID is required.
Ensure the LDAP directory assigns `uidNumber` values to all users.
If users do not map correctly, check the LDAP server settings and verify attribute assignments.
{{< /hint >}}

{{< hint type=note title="Does LDAP work with SMB?" >}}
The Legacy Samba Schema, needed to populate the LDAP directory with Samba attributes, was deprecated in TrueNAS 22.10 and removed in 24.10. 
SMB shares can no longer be set up using LDAP authentication.
{{< /hint >}}

## Disabling LDAP

To disable LDAP but not remove the configuration, clear the **Enable** checkbox. The main **Directory Services** screen returns to the default view showing the options to configure Active Directory or LDAP.
To enable LDAP again, click **Configure LDAP** to open the **LDAP** screen with your saved configuration. Select **Enable** again to reactivate your LDAP directory server configuration.

## Removing LDAP from TrueNAS

To remove the LDAP configuration, click **Settings** to open the **LDAP** screen.
Clear all settings and click **Save**.
