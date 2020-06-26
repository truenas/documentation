---
title: "Logging in to the Web Interface"
linktitle: "Logging in"
Description: "How to find the TrueNAS IP address and other first-time login credentials."
---

Outline:

Console Setup Menu
 - shows UI IP address
   - automatically connects to a DHCP from all live interfaces to show IP address
   - Console Setup menu is used to configure systems that don't use DHCP
   - mDNS default: truenas.local
 - configuring network interfaces for UI access
 - accessed from UI: Shell> `/etc/netcli`
 - Can be disabled by going to System > Advanced and unsetting `Enable Console Menu`

TrueNAS Enterprise Hardware
 - preconfigured networking
   - UI address
   - on sales order or packet included with system

Login Screen
 - Username is always `root`
 - Password is set during install
 - TrueNAS Enterprise Hardware: password is `abcd1234` or "random generated"
   - how to find random generated password
 - Change root password
   - Console Setup Menu
   - UI

Troubleshooting
 - Disable proxy settings
 - ping and determine if private IP address

First-time logins
 - EULA
 - ?Support?
   