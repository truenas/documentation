---
title: "Configuring OpenVPN"
description: "This article provices information on how to configure Open Virtual Private Network (OpenVPN) services on your TrueNAS."
weight: 70
aliases: /core/services/openvpn/
tags:
- coreopenvpn
---

{{< toc >}}

## About OpenVPN

A virtual private network (VPN) is an extension of a private network over public resources. It allows remote clients on a public network to access a private network via a secure connection. TrueNAS provides [OpenVPN](https://openvpn.net/) as a system level service that provides VPN server or client functionality. TrueNAS uses a single TCP or UDP port to act as a primary VPN server. This allows remote clients access to data stored on the system. VPN integration is possible even if the system is in a separate physical location, or only has access to public networks.

## Obtaining a Public Key Infrastructure (PKI)

Public key infrastructure (PKI) must be in place before configuring TrueNAS as either an OpenVPN server or client. PKI utilizes [certificates]({{< relref "/CORE/UIReference/System/Certificates.md" >}}) and [certificate authorities]({{< relref "CAs.md" >}}) created in or imported to TrueNAS.
{{< expand "What does this do?" "v" >}}
TrueNAS authenticates with clients or servers by confirming network credentials. These must be signed by a valid master certificate authority (CA). 
To read more about the required PKI for OpenVPN, see the [OpenVPN PKI Overview](https://community.openvpn.net/openvpn/wiki/HOWTO?__cf_chl_jschl_tk__=92022277e38bff707b1684f49a2af61f5eb4c632-1605712222-0-AQxKxUAlHKMcfHHNdSMOLL25Lr3e8icKHu3CgjMFRe6GXS1Z72EgXMieNrGaBdWa0m3R5CEZcxwGdwhgaRO392FTivdOQis5Pa2Bm-4jEzydUBTqhx_F4XWN7ujVee5CUxG6AoyOet91SaWM-siqV0_d0ppGnSsfwX9HFOmKuAnJexAjqpofUlP6xjru4Qujw72uR-yUT3fuFDMyukAAtEAP_zPXtewdS_kcSC5eSdf-RC6V8T_QZ2UT6GfqxxSr5shwe0rFkNinTCOKLk_67UIU2zEkpuiQ8C7p3ysh1DS_ONAzR2pfwdgetKm3HiBJ38C86956W6D8-mpOulfP26E#Overview).
{{< /expand >}}

## Configuring OpenVPN: Process Overview

The general process to configure OpenVPN (server or client) on TrueNAS is to:
* Select the networking credentials
* Set the connection detail
* Choose any additional security or protocol options

### Configuring OpenVPN Client

Go to the **Services** page and find the **OpenVPN Client** entry.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesOpenVPNClientOptions](/images/CORE/12.0/ServicesOpenVPNClientOptions.png "OpenVPN Client Options")

Choose the certificate to use as an OpenVPN client.
This certificate must exist in TrueNAS and be in an active (unrevoked) state.

Enter the host name or IP address of the **Remote** OpenVPN server.

Select any other [connection settings](#connection-settings) that fit with your network environment. Check for performance requirements.
The **Device Type** must match with the OpenVPN server **Device Type**.
**Nobind** prevents using a fixed port for the client.
Enabled by default, it allows the OpenVPN client and server to run at the same time.

Review the [Security Options](#security-options) and select settings that meet your network security requirements.
Determine if the OpenVPN server is using TLS Encryption. If so, copy the static TLS encryption key and paste into the **TLS Crypt Auth** field. 

### OpenVPN Server

Go to the **Services** page and find the **OpenVPN Server** entry.
Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to configure the service.

![ServicesOpenVPNServerOptions](/images/CORE/12.0/ServicesOpenVPNServerOptions.png "OpenVPN Server Options")

Choose a **Server Certificate** for this OpenVPN server.
This certificate must exist in TrueNAS and be in an active (unrevoked) state.

Define a IP address and netmask for the OpenVPN. Enter these values in **Server**.
Continue to select the remaining [Connection Settings](#connection-settings) that fit with your network environment and performance requirements.
When selecting **TUN** in **Device Type**, you can select a virtual addressing method for the server in **Topology**. Options are:

* **NET30**: Use one **/30** subnet per client in a point-to-point topology.
  Designed for use when connecting clients are Windows systems.
* **P2P**: Point-to-point topology. Points the local server and remote client endpoints to each other.
  One IP address given to each client.
  This is only recommmended when none of the clients are a Windows system.
* **SUBNET**: The interface uses an IP address and subnet.
  One IP address given to each client.
  Windows clients need the **TAP-Win32 driver** version 8.2 or newer.
  **TAP** devices always use the **SUBNET** specified in **Topology**.

The **Topology** selection is automatically applied to any connected clients.

When **TLS Crypt Auth Enabled** is selected, TrueNAS generates a static key for the **TLS Crypt Auth** field after saving the options.
To change this key, click **RENEW STATIC KEY**.
Any clients connecting to the server need this key.
Keys stored in the system database are included in a generated client config file. A good practice is to back up keys in a secure location.

Review the [Security Options](#security-options) and choose settings that meet your network security requirements.

Configure and save your OpenVPN server settings.

OpenVPN client systems that are connecting to this server will need to import client configuration files. To generate client configuration files, you need the client certificate from the client system. The client certificate was previously imported to the client system. Click **DOWNLOAD CLIENT CONFIG** and select the **Client Certificate**.

## Connection Settings

See [OpenVPN Screens]({{< relref "/CORE/UIReference/Services/OpenVPNScreen.md" >}}) for more information on the client and server settings.

## Security Options

Connecting to a private network still sends data over less secure public resources. OpenVPN includes several security features that are optional. These optional security features help protect the data sent into or out of the private network.

* **Authentication Algorithm**: This is used to validate packets that are sent over the network connection. Your network environment might require a specific algorithm. **SHA1 HMAC** is a good standard algorithm to use if a particular algorithm is not required. 
* **Cipher**: This is an algorithm to encrypt data packets sent through the connection. While not required, choosing a cipher can increase connection security. Verify the required ciphers for your networking environment. If there are no specific cipher requirements, **AES-256-GCM** is a good default choice. 
* **TLS Encryption**: Selecting **TLS Crypt Auth Enabled** encrypts all TLS handshake messages. This adds another layer of security. OpenVPN server and clients share a required static key.

## Service Activation

When finished configuring the server or client service, click **SAVE**.
Start the service by clicking the related toggle in **Services**.
To check the current state of the service, hover over the toggle.

**Start Automatically**: Selecting this option starts the OpenVPN service whenever TrueNAS completes booting. The network and data pools must be running.

{{< taglist tag="coreopenvpn" limit="10" >}}

{{< taglist tag="coretlsciphers" limit="10" title="Related TLS Articles">}}
