---
title: "IPA Screens"
description: "Provides information on the IPA screen and widget settings."
weight: 20
aliases:
tags:
- IPA
- directoryservices
---

{{< hint type=note >}}
You can have either Active Directory, LDAP, or IPA configured on TrueNAS but not multiple directory services simultaneously.
{{< /hint >}}

## Configuring IPA

To configure IPA directory service integration when no directory service is currently configured, go to **Credentials > Directory Services** and click **Configure Directory Services**. Select **IPA** from the **Configuration Type** dropdown list in the **Directory Services Configuration** form that opens.

For detailed configuration instructions, see [Configuring IPA]({{< relref "ConfigIPASCALE.md" >}}).

## IPA Widget

The **IPA** widget displays after configuring TrueNAS settings for the IPA instance.
The widget includes **Status**, and the configured **Target Server**, **Domain**, and **Base DN**.

**Settings** opens the **IPA** configuration form for editing the current IPA configuration.

## Directory Services Configuration Form

The **Directory Services Configuration** form contains multiple sections when **IPA** is selected as the **Configuration Type**: **Basic Configuration**, **Credential Configuration**, **IPA Configuration**, and **SMB Domain Configuration**.

This form is used for configuring IPA, LDAP, and Active Directory directory services. The available configuration sections change based on the selected **Configuration Type**.

### Basic Configuration Section

The settings on the **Basic Configuration** section control core IPA service settings.

{{< expand "Basic Configuration Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/IPABasicConfigOptions.png" alt="IPA Basic Configuration" id="IPA Basic Configuration" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Configuration Type** | Select **IPA** to configure Identity, Policy, and Audit directory service integration. |
| **Enable Service** | Select to activate the IPA configuration. Clear to disable the configuration without deleting it. Re-enable it later without reconfiguring it. The **[Directory Services]({{< ref "/SCALE/SCALEUIReference/Credentials/DirectoryServices" >}})** screen returns to the default and provides the options to configure AD, LDAP, or IPA. |
| **Enable Account Cache** | Select to cache user and group information for improved performance. |
| **Enable DNS Updates** | Select to allow the directory service to update DNS records. |
| **Timeout (seconds)** | Enter the connection timeout for directory service operations. Valid range is 1-40 seconds. |
| **Kerberos Realm** | Enter the Kerberos realm for authentication (usually the uppercase version of the domain name, e.g., *EXAMPLE.COM*). This field auto-populates when selecting Active Directory domain. |
{{< /truetable >}}
{{< /expand >}}

### Credential Configuration Section

The **Credential Configuration** section defines authentication methods for IPA access.

{{< expand "Credential Configuration Settings" "v" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Credential Type** | Select the appropriate credential type for IPA authentication from the dropdown list. Options include **Kerberos User** and **Kerberos Principal** (required).|
{{< /truetable >}}
{{< /expand >}}

### IPA Configuration Section

The settings on the **IPA Configuration** section define connection parameters and validation options.

{{< expand "IPA Configuration Settings" "v" >}}

{{< trueimage src="/images/SCALE/Credentials/IPAFinalConfigOptions.png" alt="IPA Configuration" id="IPA Configuration" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Target Server** | Enter the IPA server hostname or IP address (required). |
| **TrueNAS Hostname** | Enter the hostname for this TrueNAS system (required). |
| **Domain** | Enter the domain name (required). |
| **Base DN** | Enter the base Distinguished Name for the IPA directory (required). Example: *dc=example,dc=com*. |
| **Validate Certificates** | Select to verify certificate authenticity when connecting to the IPA server. TrueNAS validates the full certificate chain when this option is enabled. TrueNAS does not support non-CA certificates when certificate validation is required. |
{{< /truetable >}}
{{< /expand >}}

### SMB Domain Configuration Section

The **SMB Domain Configuration** section controls SMB integration settings.

{{< expand "SMB Domain Configuration Settings" "v" >}}

{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Use Default SMB Domain Configuration** | Select to use default SMB domain settings. IPA includes integrated Samba support and can provide user and group information for SMB authentication. |
{{< /truetable >}}
{{< /expand >}}

{{< trueimage src="/images/SCALE/Credentials/IPAFinalConfigOptions.png" alt="IPA Basic Configuration" id="IPA Basic Configuration" >}}