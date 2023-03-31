---
title: "Configuring OpenVPN Service"
description: "This article provides configuration information for OpenVPN Client and Server services."
weight: 30
alias: 
tags:
 - scaleopenvpn
---


{{< toc >}}


A virtual private network (VPN) is an extension of a private network over public resources.
It lets clients securely connect to a private network even when remotely using a public network.
TrueNAS provides [OpenVPN](https://openvpn.net/) as a system-level service to provide VPN server or client functionality.
TrueNAS can act as a primary VPN server that allows remote clients to access system data using a single TCP or UDP port.
Alternatively, TrueNAS can integrate into a private network, even when the system is in a separate physical location or only has access to publicly visible networks.

Before configuring TrueNAS as either an OpenVPN server or client, you need an existing public key infrastructure (PKI) with [Certificates and Certificate Authorities]({{< relref "CertificatesSCALE.md" >}}) created in or imported to TrueNAS.
{{< expand "What does this do?" "v" >}}
Certificates allow TrueNAS to authenticate with clients or servers by confirming a valid master Certificate Authority (CA) signed the network credentials.
To read more about the required PKI for OpenVPN, see the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview).
{{< /expand >}}

In general, configuring TrueNAS OpenVPN (server or client) includes selecting networking credentials, setting connection details, and choosing additional security or protocol options.

## OpenVPN Client

Go to **System Settings > Services** and find **OpenVPN Client**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![OpenVPNClientScreen](/images/SCALE/22.12/OpenVPNClientScreen.png "OpenVPN Client Options")

**Manage Certificates** opens the **[Accounts > Certificates]({{< relref "CertificatesScreensSCALE.md" >}})** screen.

Choose the certificate to use as an OpenVPN client.
The certificate must exist in TrueNAS and be active (unrevoked).
Enter the **Remote** OpenVPN server's hostname or IP address.

Continue to review and choose any other [Connection Settings](#connection-settings) that fit your network environment and performance requirements.
The **Device Type** must match the OpenVPN server **Device Type**.
**Nobind** prevents using a fixed port for the client and is enabled by default so the OpenVPN client and server run concurrently.

Finally, review the [Security Options](#security-options) and ensure they meet your network security requirements.
If the OpenVPN server uses TLS Encryption, copy the static TLS encryption key and paste it into the **TLS Crypt Auth** field.

## OpenVPN Server

Go to **System Settings > Services** and find **OpenVPN Server**.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![OpenVPNServerScreen](/images/SCALE/22.12/OpenVPNServerScreen.png "OpenVPN Server Options")

**Manage Certificates** opens the **[Accounts > Certificates]({{< relref "CertificatesScreensSCALE.md" >}})** screen.

Choose a **Server Certificate** for the OpenVPN server.
The certificate must exist in TrueNAS and be active (unrevoked).

Now define an IP address and netmask for the OpenVPN **Server**.
Select the remaining [Connection Settings](#connection-settings) that fit your network environment and performance requirements.
If using a **TUN** **Device Type**, you can choose a virtual addressing topology for the server in **Topology**:

* **NET30**: Use one */30* subnet per client in a point-to-point topology. Use when connecting clients are Windows systems.
* **P2P**: Point-to-point topology that points the local server and remote client endpoints to each other. Each client gets one IP address. Use when none of the clients are Windows systems.
* **SUBNET**: The interface uses an IP address and subnet. Each client gets one IP address. Windows clients require the **TAP-Win32 driver** version 8.2 or newer. **TAP** devices always use the **SUBNET Topology**.

TrueNAS applies the **Topology** selection to any connected clients.

When **TLS Crypt Auth Enabled** is selected, TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **Renew Static Key**.
Clients connecting to the server require the key.
TrueNAS stores keys in the system database and includes them in client config files. We recommend always backing up keys in a secure location.

Finally, review the [Security Options](#security-options) and choose settings that meet your network security requirements.

After configuring and saving your OpenVPN Server, generate client configuration files to import to any OpenVPN client systems connecting to this server.
You need the certificate from the client system already imported into TrueNAS.
To generate the configuration file, click **Download Client Config** and select the **Client Certificate**.


{{< taglist tag="scaleopenvpn" limit="10" >}}