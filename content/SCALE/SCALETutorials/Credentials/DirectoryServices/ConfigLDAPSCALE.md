---
title: "Configuring LDAP"
description: "Provides instructions on configuring and managing LDAP configurations in TrueNAS."
weight: 20
aliases:
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

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless you configured and populated the LDAP directory with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
TrueNAS needs to be able to validate the full certificate chain (no self-signed certificates).
TrueNAS does not support non-CA certificates.
{{< /expand >}}

## Configuring LDAP

To configure TrueNAS to use an LDAP directory server:

1. Go to **Credentials > Directory Services** and click **Configure Directory Services** to open the unified directory services configuration screen.

2. Select **LDAP** as the directory service type.

3. Enter the **LDAP Configuration** settings:
   - Enter your LDAP server URLs in **Server URLs** (required). If using a cloud service LDAP server, do not include the full URL.
   - Enter your LDAP server base DN in **Base DN** (required). This is the top level of the LDAP directory tree to use when searching for resources.
   - Select **Start TLS** if needed for your environment.
   - Select **Validate Certificates** if certificate validation is required.
   - Select the appropriate **Schema** from the dropdown list.

4. Enter the **Auxiliary Parameters** settings.
   - **Use Standard Auxiliary Parameters** is enabled by default. Clear the checkbox to disable and enter custom auxiliary parameters.

5. Enter the **Search Bases** settings. 
    **Use Standard Search Bases** is enabled by default. To enter custom **User Base DN**, **Group Base DN**, and **Netgroup Base DN** values, clear the checkbox and show these fields.

6. Enter the **Attribute Maps** settings.
   - **Use Standard Attribute Maps** is enabled by default. Clear the checkbox to personalize the **LDAP Password Attributes**, **LDAP Shadow Attributes**, **LDAP Group Attributes**, and **LDAP Net Group Attributes**.

7. Click **Save**.

   ![LDAPBasicOptionsSettings](/images/SCALE/Credentials/LDAPBasicOptionsSettings.png "LDAP Basic Options")


## Disabling LDAP

To disable LDAP but not remove the configuration, clear the **Enable Service** checkbox. The main **Directory Services** screen returns to the default view showing the option to configure directory services.
To enable LDAP again, click **Configure Directory Services** to open the directory services configuration screen with your saved LDAP configuration. Select **Enable Service** again to reactivate your LDAP directory server configuration.

## Removing LDAP from TrueNAS

To remove the LDAP configuration, click **Settings** to open the **LDAP** screen.
Clear all settings and click **Save**.
