---
title: "Configuring IPA"
description: "Provides instructions on configuring and managing IPA configurations in TrueNAS."
weight: 20
aliases:
tags:
- ipa
- directoryservices
keywords:
- enterprise data storage
- nas data storage 
---

TrueNAS supports [IPA (Identity, Policy, and Audit)](https://www.freeipa.org/) as a comprehensive identity management solution.
IPA integrates LDAP, Kerberos, NTP, and DNS services in a single package, providing centralized authentication and authorization for network resources.
{{< hint type=note >}}
You can have either Active Directory, LDAP, or IPA configured on TrueNAS but not multiple directory services simultaneously.
{{< /hint >}}

{{< expand "Does IPA work with SMB?" "v" >}}
IPA can work with SMB shares when properly configured.
IPA includes integrated Samba support and can provide user and group information for SMB authentication.
TrueNAS validates the full certificate chain when certificate validation is enabled.
TrueNAS does not support non-CA certificates when certificate validation is required.
{{< /expand >}}

## Configuring IPA

Configure TrueNAS to use an IPA directory server:

1. Go to **Credentials > Directory Services** and click **Configure Directory Services** to open the **Directory Services Configuration** form.

2. Select **IPA** as the **Configuration Type**.

3. Configure the **Basic Configuration** settings:
   - Select **Enable Service** to activate the IPA configuration.
   - Select **Enable Account Cache** to cache user and group information for improved performance.
   - Select **Enable DNS Updates** to allow the directory service to update DNS records.
   - Enter the connection **Timeout (seconds)** for directory service operations (1-40 seconds).
   - Enter the **Kerberos Realm** (usually the uppercase version of the domain name, e.g., *EXAMPLE.COM*).

   {{< trueimage src="/images/SCALE/Credentials/IPABasicConfigOptions.png" alt="IPA Configuration" id="IPA Configuration" >}}

4. Configure the **Credential Configuration** settings:
   - Select the appropriate **Credential Type** for IPA authentication from the dropdown list. Options are **Kerberos User** or **Kerberos Principal**.

5. Configure the **IPA Configuration** settings:
   - Enter the **Target Server** hostname or IP address (required).
   - Enter the **TrueNAS Hostname** for this system (required).
   - Enter the **Domain** name (required).
   - Enter the **Base DN** for the IPA directory (required).
   - Select **Validate Certificates** to verify certificate authenticity when connecting to the IPA server.

6. Configure the **SMB Domain Configuration** settings:
   - Select **Use Default SMB Domain Configuration** to use default settings.

7. Click **Save**.

{{< trueimage src="/images/SCALE/Credentials/IPAFinalConfigOptions.png" alt="IPA Configuration" id="IPA Configuration" >}}


## Disabling IPA

Clear the **Enable Service** checkbox to disable IPA without removing the configuration. The main **Directory Services** screen returns to the default view showing the option to configure directory services.
Click **Configure Directory Services** to open the **Directory Services Configuration** form with the saved IPA configuration to enable IPA again. Select **Enable Service** again to reactivate your IPA directory server configuration.

## Removing IPA from TrueNAS

Click **Settings** to open the **IPA** screen to remove the IPA configuration.
Clear all settings and click **Save**.
