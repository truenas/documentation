---
title: "IPA Screens"
description: "Provides information on the IPA screen and widget settings."
weight: 70
aliases:
 - /scale/credentials/directoryservices/directoryservicesscreens/ipa/
tags:
- IPA
- directoryservices
doctype: reference
---


{{< hint type=note >}}
You can have either Active Directory, LDAP, or IPA configured on TrueNAS but not multiple directory services simultaneously.
{{< /hint >}}

## Configuring IPA

The **IPA** directory service configuration screen shows after selecting **IPA** in the **Configuration Type** dropdown list in the **Directory Services Configuration** screen.

For detailed configuration instructions, see [Configuring IPA]({{< relref "ConfigIPA" >}}).

## IPA Widget

The **IPA** widget displays after configuring settings for an IPA directory server.
The widget shows the **Status** of the directory server, and the **Target Server**, **Domain**, and **Base DN**.

**Settings** opens the **IPA** configuration screen.

## Directory Services IPA Configuration Screen

The **Directory Services Configuration** screen organizes settings into multiple sections: **Basic Configuration**, **Credential Configuration**, **IPA Configuration**, and **SMB Domain Configuration**.

The **Directory Services Configuration** screen is used to configure one of three directory services: IPA, LDAP, or an Active Directory. The configuration sections and settings change based on the **Configuration Type** selected.

### IPA Basic Configuration Section

{{< include file="/static/includes/DirectoryServicesCommonSettings.md" >}}

### IPA Credential Configuration Section {id="dir-services_ipa-cedential-config"} 
<!--  Credential Type is # PROBLEM: Needs resolution — single record vs duplicate for AD/IPA/LDAP injection. Cannot implement until duplicate strategy is decided. -->

The **Credential Configuration** section settings define authentication methods for IPA access.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesCredentialConfig.png" alt="Credential Configuration" id="Credential Configuration" >}}

**Credential Type** (Required) Sets the appropriate credential type for IPA authentication to the option selected on the dropdown list. Options include **Kerberos User** and **Kerberos Principal**.

### IPA Configuration Section

The settings on the **IPA Configuration** section settings define the connection parameters and validation options.

{{< trueimage src="/images/SCALE/Credentials/IPAConfigurationSettings.png" alt="IPA Configuration" id="IPA Configuration" >}}

{{< expand "IPA Configuration Settings" "v" >}}  {id="dir-services_ipa-config"} 
{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Target Server** | (Required)  Enter the IPA server host name or IP address. |
| **TrueNAS Hostname** | (Required)  Enter the host name for this TrueNAS system. |
| **Domain** | (Required)  Enter the domain name. |
| **Base DN** | (Required)  Sets the base distinguished name for the IPA directory. For example: *dc=example,dc=com*. |
| **Validate Certificates** | Verifies certificate authenticity when connecting to the IPA server. TrueNAS validates the full certificate chain when this option is enabled. TrueNAS does not support non-CA certificates when certificate validation is required. |
{{< /truetable >}}
{{< /expand >}}

### SMB Domain Configuration Section

The **SMB Domain Configuration** section controls SMB integration settings.

{{< trueimage src="/images/SCALE/Credentials/IPASMBConfig.png" alt="IPA SMB Configuration" id="IPA SMB Configuration" >}}

{{< expand "SMB Domain Configuration Settings" "v" >}} {id="dir-services_ipa-smb-domain"}
{{< truetable >}}
| Setting | Description |  
|---------|-------------|  
| **Use Default SMB Domain Configuration** | Uses default SMB domain settings when enabled, shows the additional **Name**, **Domain Name**, **Range Low**, **Range High**, and **Domain SID** settings when disabled. IPA includes integrated Samba support and can provide user and group information for SMB authentication. |
{{< /truetable >}}
{{< /expand >}}