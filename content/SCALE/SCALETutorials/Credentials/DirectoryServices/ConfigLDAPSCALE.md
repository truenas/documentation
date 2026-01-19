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

{{< include file="/static/includes/DirectoryServiceConflictAdmonition.md" >}}

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless you configured and populated the LDAP directory with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
TrueNAS needs to be able to validate the full certificate chain (no self-signed certificates).
TrueNAS does not support non-CA certificates.
{{< /expand >}}

## Configuring LDAP

To configure TrueNAS to use an LDAP directory server:

1. Go to **Credentials > Directory Services** and click **Configure Directory Services** to open the **Directory Services Configuration** form.

2. Select **LDAP** from the **Configuration Type** dropdown list.

3. Enter the **Basic Configuration** settings:

{{< trueimage src="/images/SCALE/Credentials/LDAPBasicConfig.png" alt="LDAP Basic Configuration" id="LDAP Basic Configuration" >}}

   * Select the **Enable Service** checkbox to activate the LDAP configuration. Selected by default.

   * Select the **Enable Account Cache** checkbox to cache user and group information. Caching makes directory users and groups available in UI dropdown menus. Selected by default.

   * Select the **Enable DNS Updates** checkbox to allow the directory service to update DNS records. Selected by default.

   * Enter the number of seconds (1-40) before the directory service connection times out in **Timeout (seconds)**. Required.

   * (Optional) Enter the Kerberos realm in **Kerberos Realm**. This is usually the uppercase version of the domain name, for example, *EXAMPLE.COM*.

4. Enter the **Credential Configuration** settings:

   * Select the credential type from the **Credential Type** dropdown list. Options are **LDAP Anonymous**, **LDAP Plain**, **LDAP MTLS**, **Kerberos Principal**, or **Kerberos User**. Required.

   * If you selected **Kerberos User**, enter the LDAP administrative account username and password in the respective **Username** and **Password** fields. Required.

   * If you selected **LDAP Plain**, enter the applicable credentials in the **Bind DN** and **Bind Password** fields. Required.

   * If you selected **LDAP MTLS**, select the desired **Client Certificate** from the dropdown menu. Required.

   * If you selected **Kerberos Principal**, select the desired **Kerberos Principal** from the dropdown menu. Required.

5. Enter the **LDAP Configuration** settings:

{{< trueimage src="/images/SCALE/Credentials/LDAPBasicOptionsSettings.png" alt="LDAP Configuration" id="LDAP Configuration" >}}

   * Enter the LDAP server URLs in **Server URLs**. Required. Separate multiple entries by pressing <kbd>Enter</kbd>. If using a cloud service LDAP server, do not include the full URL.

   * Enter the LDAP server base DN in **Base DN**. Required. This is the top level of the LDAP directory tree to use when searching for resources. For example, *dc=example,dc=org*.

   * (Optional) Select the **Start TLS** checkbox if needed for your environment.

   * (Optional) Select the **Validate Certificates** checkbox to verify certificate authenticity when connecting to the LDAP server.

   * Select the LDAP NSS schema from the **Schema** dropdown list. Required. Options are **RFC2307** or **RFC2307BIS**.

6. (Optional) Configure auxiliary parameters:

   Select **Use Standard Auxiliary Parameters** to use default auxiliary parameters. Selected by default.

   To customize auxiliary parameters, clear **Use Standard Auxiliary Parameters** to reveal the **Auxiliary Parameters** text field where you can enter custom options for [nslcd.conf](https://arthurdejong.org/nss-pam-ldapd/nslcd.conf.5).

7. (Optional) Configure search bases:

   Select **Use Standard Search Bases** to use default search bases. Selected by default.

   To customize search bases, clear **Use Standard Search Bases** to reveal additional configuration options: **User Base DN**, **Group Base DN**, and **Netgroup Base DN**.

8. (Optional) Configure attribute maps:

   Select **Use Standard Attribute Maps** to use default attribute mappings. Selected by default.

   To customize attribute maps, clear **Use Standard Attribute Maps** to reveal four subsections for customization:

   * **LDAP Password Attributes** - Enter custom password attribute mappings.

   * **LDAP Shadow Attributes** - Enter custom shadow attribute mappings.

   * **LDAP Group Attributes** - Enter custom group attribute mappings.

   * **LDAP Net Group Attributes** - Enter custom net group attribute mappings.

9. Click **Save**.

## Disabling LDAP

To disable LDAP but not remove the configuration, clear the **Enable Service** checkbox. The main **Directory Services** screen returns to the default view showing the option to configure directory services.
To enable LDAP again, click **Configure Directory Services** to open the **Directory Services Configuration** form with your saved LDAP configuration. Select **Enable Service** again to reactivate your LDAP directory server configuration.

## Removing LDAP from TrueNAS

To remove the LDAP configuration, click **Settings** to open the **LDAP** screen.
Clear all settings and click **Save**.
