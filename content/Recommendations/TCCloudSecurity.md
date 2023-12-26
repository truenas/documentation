---
title: "TrueCommand Cloud Security"
description: "Descriptions for the security solutions used for the iX Portal and TrueCommand Cloud."
weight: 10
geekdocCollapseSection: true
---

### The iX Portal 

The [iXsystems Account Services Portal](https://portal.ixsystems.com) is an easy to use site to manage TrueCommand Cloud Subscriptions and TrueNAS Mini Warranties.

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

The iX Portal and TrueCommand Cloud use several security solutions to safeguard the application and connections.

+ [OAuth](https://oauth.net/2/) (Open Authorization) is an open standard for access rights and is a way for individuals on the Intenet to grant websites or applications access to their information on another website without divulging a password. Commonly, OAuth provides clients secure access to server resources on behalf of a resource owner. It is a process for site owners to authorize third-party access to their server without providing credentials.

+ [WireGuard](https://www.wireguard.com) is a open-source communication protocol that implements encrypted virtual private networks (VPNs). WireGaurd is designed to be easy to use, offer high speed performance, and have a low attack surface. WireGaurd is an alternative to IPsec and OpenVPN tunneling protocols.

+ [Two Factor Auth](https://authy.com/what-is-2fa/) (2FA) is form of Multi-Factor Authentication method. 2FA is an extra layer of security to validate that an individual trying to gain access to an online account is actually who they say they are. A typical 2FA use case begins with a user entering their username and a password. Next, they are required to provide another piece of information. This second 'factor' could come from one of these categories: Something you know, Something you have, or Something you are.
2FA allows for one of those factors to be compromised and still prevent attackers from gaining access.

The iX Portal has the ability to use OAuth in place of a regular login and can utilize Two Factor Auth (2FA) if your OAuth provider provides that service.

The iX Portal also has email-based 2FA verification systems for sensitive operations to accounts.

TrueCommand Cloud services requires 2 forms of authentication. A user must have their username and password credentials to log in, but this depends on obtaining the Wireguard Configuration for their Client from the iX Portal. Administrators can create as many configurations as needed. Client configurations should never be used on more than one machine. TrueCommand Cloud logins can be across multiple systems, but each client system should use its own configuration.
Client access can be revoked at any time from within the iX Portal.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")
