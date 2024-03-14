---
title: "Preparing for SCALE UI Configuration"
description: "Provides information you need to complete the SCALE configuration using the SCALE UI."
weight: 5
aliases:
tags:
- install
- migrate
---

SCALE users installing and configuring SCALE on their own servers should use the information in this article to prepare for their SCALE system deployments.

For SCALE support or assistance refer to the [TrueNAS community forums](https://www.truenas.com/community/), [Discord](https://discord.com/invite/Q3St5fPETd), or the tutorials included in the TrueNAS Documentation Hub.

If you are not the administrator responsible for network access in your company, contact your network administrator for assistance.
If your company obtains network hardware and support from an Internet or cable service provider, contact them for assistance with where to obtain this information.

## Physical Access

When in the same location as the hardware designated for the TrueNAS installation, you can connect a monitor and keyboard to the system to do the initial installation and configuration.
An additional USB port is required when using a USB storage device to install TrueNAS from an <kbd>.iso</kbd> file.

## IPMI Access

Intelligent Platform Management Interface (IPMI) servers provide access to servers and allow remote users to install software and configure or administrate systems at the console level, or as though you are in the room with the server when you are working remotely.

To provide for remote administration of your TrueNAS SCALE system, assign access through an IPMI server to the TrueNAS server.
To make this possible assign an IP address to use for access and set up administrator credentials (user name and password) to access the TrueNAS IPMI connections.

## Network Access

{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" >}}

If you obtained network equipment and Internet service access from either an Internet or cable service provider, contact their support departments for assistance with network addresses.

## SMTP Access

{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" >}}

If you do not know this information and do not have a network administrator in your company, or if you are a home user, contact your Internet or cable service provider to obtain the SMTP addresses to allow TrueNAS to send emails from your network.

## Directory Service Access

This section does not apply to small companies with very few users or home deployments of SCALE.

TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap.
Active Directory and LDAP configuration settings have similar requirements.

{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" >}}
