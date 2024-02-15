---
title: "Entra ID (Azure AD)"
description: "Guide for deploying Entra ID (Azure AD) as a cloud-only domain services provider for TrueNAS."
weight: 55
tags:
 - cloud
 - directoryservices
---

 Organizations can use [Microsoft Entra ID domain services](https://learn.microsoft.com/en-us/entra/identity/domain-services/overview) (formerly Azure AD) to manage users and groups by connecting TrueNAS to an Azure domain and joining the managed directory.

{{< hint type=note >}}
For increased security and flexible administration, recommended best practice is to [synchronize Entra ID with on-premises active directory](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/identity/azure-ad).
However, some organizations prefer cloud-only domain services.
This tutorial outlines how to join TrueNAS to an Entra ID without an on-premises directory.
{{< /hint >}}

{{< include file="/_includes/ThirdPartyIntegration.md" >}}

## Preparing Entra Domain Services

To link TrueNAS with Entra ID domain services, you need an active Azure account with Entra ID and Entra Domain Services enabled and [configured as described in Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity/domain-services/tutorial-create-instance).

1. In the Entra admin center, go to the Microsoft Entra Domain Services **Overview** tab for your managed domain.

    {{< trueimage src="/images/SCALE/Credentials/EntraOverview.png" alt="Entra Domain Services Overview" id="Entra Domain Services Overview" >}}

    Record the domain name.
    Click **Properties** under **Settings** and record the **IP Address on virtual network** addresses.
    Save these for later.

2. Go to **Security Settings** and configure as shown.

    {{< trueimage src="/images/SCALE/Credentials/EntraSecuritySettings.png" alt="Entra Security Settings" id="Entra Security Settings" >}}

    {{< expand "Click for Details" "v" >}}
{{< truetable >}}
| Setting | Status |
|-----------|-------------|
| TLS 1.2 Only Mode | Enable |
| NTLM v1 Authentication | Enable |
| Password Synchronization from On-Premises | Enable |
| NTLM Password Synchronization | Enable |
| Kerberos RC4 Encryption | Disable |
| Kerberos Armoring | Enable |
| LDAP Signing | Enable |
| LDAP Channel Binding | Enable |
{{< /truetable >}}
    {{< /expand >}}

3. Create a site-to-site VPN gateway.

    Entra ID domain services uses hard-coded network addresses and a bundled DNS server, so a VPN is needed to ensure proper DNS resolution.
    There are numerous possible VPN solutions for this purpose.
    iXsystems does not suggest or support any particular third-party VPN service.
    For one option, see [Tutorial: Create a site-to-site VPN connection in the Azure portal](https://learn.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal) from Microsoft.

## Configuring TrueNAS

Edit TrueNAS network configuration to ensure TrueNAS is able to reach the Entra ID domain services instance and then join the domain.

1. Configure network connections.
    Go to **Network** and click **Settings** on the **Global Configuration** widget to open the **Edit Global Configuration** screen.

    {{< trueimage src="/images/SCALE/Credentials/EntraGlobalConfiguration.png" alt="Edit Global Configuration" id="Edit Global Configuration" >}}

    Enter the domain name from Entra ID domain services in **Domain**.

    Enter the VPN public address as a nameserver to route connections to the Entra domain services DNS server.

2. Confirm connectivity.
    Connect to a local TrueNAS shell or SSH session and enter the {{< cli >}}ping *EntraDomain*{{< /cli >}} command, where *EntraDomain* is the domain name entered above.
    Verify the ping is successful.

    {{< trueimage src="/images/SCALE/Credentials/EntraPingDomain.png" alt="Confirm Connectivity" id="Confirm Connectivity" >}}

3. Join the domain.


4. Verify you are able to lookup domain users.
