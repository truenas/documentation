---
title: "TrueCommand Cloud Security"
weight: 10
geekdocCollapseSection: true
---

### The iX Portal 

The [iXsystems Account Services Portal](https://portal.ixsystems.com) is an easy to use site to manage TrueCommand Cloud Subscriptions and TrueNAS Mini Warranties.

![PortalLogin](/images/TrueCommand/Cloud/PortalLogin.png "Portal Login")

The IX Portal and TrueCommand cloud utilize the following security technologies.

+ [OAuth](https://oauth.net/2/) (Open Authorization) is an open standard for access right, used as a way for individuals on the intenet to grant websites or applications access to their information on another website but without giving them the password.  Commonly, OAuth provides clients secure access to server resources on behalf of a resource owner. It is a process for site owners to authorize third-party access to their server without providing credentials.

+ [WireGuard](https://www.wireguard.com) is a open-source communication protocol that implements encrypted virtual private networks (VPNs).  WireGaurd was designed to be easy to use, offer high speed performance, and have a low attack surface. WireGaurd is an alternative to IPsec and OpenVPN tunneling protocols.

+ [Two Factor Auth](https://authy.com/what-is-2fa/) (2FA) is form of Multi-Factor Authentication method.  2FA is an extra layer of security used to make sure that individual trying to gain access to an online account are who they say they are. A typical 2FA use case is, first, a user enters their username and a password.  Next they will be required to provide another piece of information. This second 'factor' could come from one of the following categories: Something you know, Something you have, or Something you are.
2FA allows for one of those factors to be compromised and still prevent attackers from gaining access. 

The iX Portal has the ability to use OAuth in place of a regular login, and can utilize Two Factor Auth (2FA) if your OAuth provider provides that service.

The iX Portal also has email-based 2FA verification systems for sensitive operations to accounts. 

TrueCommand Cloud services requires 2 forms of authentication.  A user must have their username and password credentials to log in, but this is contingent on obtaining the Wiregaurd Configuration for their Client from the iX Portal.  Administrators can create as many configurations as the need.  Client Configurations should never be used on more than one machine.  TrueCommand Cloud logins can be across multiple systems, but each client system should utilize its own configuration.
Client access can be revoked at any time from within the iX Portal.

![CloudSubscriptionServiceDetailsWireGuardClient](/images/TrueCommand/Cloud/CloudSubscriptionServiceDetailsWireGuardClient.png "Account Services: TrueCommand API Key")
