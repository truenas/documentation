---
title: "Configuring IPA"
description: "Provides instructions on configuring and managing IPA configurations in TrueNAS."
weight: 50
aliases:
 - /scale/scaletutorials/credentials/directoryservices/configipascale/
tags:
- ipa
- directoryservices
keywords:
- enterprise data storage
- nas data storage 
doctype: tutorial
---


TrueNAS supports [IPA (Identity, Policy, and Audit)](https://www.freeipa.org/) as a comprehensive identity management solution.
IPA integrates LDAP, Kerberos, NTP, and DNS services in a single package, providing centralized authentication and authorization for network resources.

{{< include file="/static/includes/DirectoryServiceConflictAdmonition.md" >}}

{{< expand "Does IPA work with SMB?" "v" >}}
IPA can work with SMB shares when properly configured.
IPA includes integrated Samba support and can provide user and group information for SMB authentication.
TrueNAS validates the full certificate chain when certificate validation is enabled.
TrueNAS does not support non-CA certificates when certificate validation is required.
{{< /expand >}}

## Configuring IPA

Configure TrueNAS to use an IPA directory server:

1. Go to **Credentials > Directory Services** and click **Configure Directory Services** to open the **Directory Services Configuration** form.

2. Select **IPA** from the **Configuration Type** dropdown list.

3. Enter the **Basic Configuration** settings:

   {{< trueimage src="/images/SCALE/Credentials/IPABasicConfigOptions.png" alt="IPA Basic Options" id="IPA Basic Options" >}}

   * Select the **Enable Service** checkbox to activate the IPA configuration. Selected by default.

   * Select the **Enable Account Cache** checkbox to cache user and group information. Caching makes directory users and groups available in UI dropdown menus. Selected by default.

   * Select the **Enable DNS Updates** checkbox to allow the directory service to update DNS records. Selected by default.

   * Enter the number of seconds (1-40) before the directory service connection times out in **Timeout (seconds)**. Required.

   * Enter the domain name in **Kerberos Realm**. This is usually the uppercase version of the domain name, for example, *EXAMPLE.COM*.

4. Enter the **Credential Configuration** settings:

   {{< trueimage src="/images/SCALE/Credentials/DirectoryServicesCredentialConfig.png" alt="Credential Configuration" id="Credential Configuration" >}}

   * Select **Kerberos User** from the **Credential Type** dropdown list. Required.

   * Enter the IPA user account username in **Username**. Required.

   * Enter the password for the user account in **Password**. Required.

5. Enter the **IPA Configuration** settings:

   {{< trueimage src="/images/SCALE/Credentials/IPAConfigurationSettings.png" alt="IPA Configuration" id="IPA Configuration" >}}

   * Enter the IPA server hostname or IP address in **Target Server**. Required.

   * Enter the hostname for your TrueNAS system in **TrueNAS Hostname**. Required.

   * Enter the domain name in **Domain**. Required.

   * Enter the base distinguished name for the IPA directory in **Base DN**. Required. For example, *dc=example,dc=com*.

   * (Optional) Select the **Validate Certificates** checkbox to verify certificate authenticity when connecting to the IPA server. TrueNAS validates the full certificate chain when this option is selected.

6. Configure SMB domain settings:

   {{< trueimage src="/images/SCALE/Credentials/IPASMBConfig.png" alt="IPA SMB Configuration" id="IPA SMB Configuration" >}}

   Select **Use Default SMB Domain Configuration** to use default SMB domain settings. Selected by default.

   To customize SMB domain settings, clear **Use Default SMB Domain Configuration** to reveal additional configuration options: **Name**, **Domain Name**, **Range Low**, **Range High**, and **Domain SID**.

7. Click **Save**.

## Disabling IPA

Clear the **Enable Service** checkbox to disable the IPA directory server. This does not remove the configuration.
The main **Directory Services** screen returns to the default view showing the option to configure directory services.

Click **Configure Directory Services** to open the **Directory Services Configuration** form with the saved IPA configuration to enable IPA again. Select **Enable Service** again to reactivate your IPA directory server configuration.

## Removing IPA from TrueNAS

Click **Settings** to open the **IPA** screen to remove the IPA configuration.
Clear all settings and click **Save**.
