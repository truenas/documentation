---
title: "Entra Domain Services (Azure DS)"
description: "Guide for deploying Entra Domain Services (Azure DS) as a cloud-only domain services provider for TrueNAS."
weight: 55
tags:
 - cloud
 - directoryservices
---

 Organizations can use [Microsoft Entra Domain Services](https://learn.microsoft.com/en-us/entra/identity/domain-services/overview) (formerly Azure Active Directory Domain Services) to manage users and groups by connecting TrueNAS to an Azure domain and joining the managed directory.

{{< hint type=note >}}
Recommended best practice for increased security and flexible administration is to [synchronize Entra ID with an on-premises active directory domain](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/identity/azure-ad).
However, some organizations prefer to use cloud-only domain services.
This tutorial outlines how to join TrueNAS to an Entra ID without an on-premises domain.
{{< /hint >}}

{{< include file="/static/includes/ThirdPartyIntegration.md" >}}

## Preparing Entra Domain Services

To join TrueNAS to Entra ID domain services, you need an active Azure account with Entra ID and Entra Domain Services enabled and [configured as described in Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity/domain-services/tutorial-create-instance).

After initial configuration of the domain:

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
    There are numerous possible solutions for this purpose.
    The TrueNAS team does not suggest or support a specific third-party VPN service.
    For one option, see [Tutorial: Create a site-to-site VPN connection in the Azure portal](https://learn.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal) from Microsoft.

## Configuring TrueNAS

Edit network configuration to enable TrueNAS to reach the Entra ID domain services instance and then join the domain.

1. Configure network connections.
    Go to **Network** and click **Settings** on the **Global Configuration** widget to open the **Edit Global Configuration** screen.

    {{< trueimage src="/images/SCALE/Credentials/EntraGlobalConfiguration.png" alt="Edit Global Configuration" id="Edit Global Configuration" >}}

    Enter the domain name from Entra ID domain services in **Domain**.

    Enter the Entra **IP Address on virtual network**, recorded above, as a nameserver to route connections to the Entra domain services DNS server.

2. Confirm connectivity.
    Connect to a local TrueNAS shell or SSH session and enter the {{< cli >}}ping *EntraDomain*{{< /cli >}} command, where *EntraDomain* is the domain name entered above.
    Verify the ping is successful.

    {{< trueimage src="/images/SCALE/Credentials/EntraPingDomain.png" alt="Confirm Connectivity" id="Confirm Connectivity" >}}

    {{< expand "If the ping fails (click to expand)" "v" >}}
  1. Go to **Network** and click **Settings** in the **Global Configuration** window.
  2. Ensure the **DNS Servers** and **Default Gateway** settings match the connection to the Entra domain.
    {{< /expand >}}

3. Join the domain.

   a. Go to **Credentials > Directory Services** and click **Configure Active Directory** to open the **Active Directory** screen.

   {{< trueimage src="/images/SCALE/Credentials/ActiveDirectoryBasicOptions.png" alt="Active Directory Screen" id="Active Directory Screen" >}}

   b. Enter the Entra domain name in **Domain Name** and the administrator account credentials in **Domain Account Name** and **Domain Account Password**.

   c. Select **Enable** to attempt to join the domain immediately after saving the configuration.

   d. Click **Save**.

      TrueNAS can take a few minutes to populate directory information after configuration.
      To check the join progress, open the <i class="material-icons" aria-hidden="true" title="Assignment">assignment</i> **Task Manager** in the upper-right corner.
      TrueNAS displays any errors during the join process in the **Task Manager**.

4. Verify domain users and groups are available.

    Go to **Datasets** and select any existing non-root dataset from the dataset tree table.
    Click **Edit** on the **Permissions** widget to open the [permissions edit screen]({{< relref "EditACLScreens.md" >}}) for the dataset.

    {{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Edit Permissions" id="Edit Permissions" >}}

    Use the **User** and **Group** dropdown menus to ensure domain accounts are present.
