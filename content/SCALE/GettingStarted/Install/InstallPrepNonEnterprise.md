---
title: "Preparing for Scale UI Configuration"
description: "This article provides information you need to complete the SCALE configuration using the SCALE UI."
weight: 5
aliases:
tags:
- scaleinstall
- scalemigrate
---

{{< toc >}}


SCALE users installing and configuring SCALE on their own servers should use the information in this article to prepare for their SCALE system deployments. 

Support options available to assist you include the TrueNAS community forums, blog, Discord, and tutorials documented in the TrueNAS Documentation Hub. 

If you are not the administrator responsible for network access in your company, contact your network administrator for assistance. 
If your company obtains network hardware and support from an Internet or cable service provider, contact them for assistance with where to obtain this information.

## IPMI Access
Intelligent Platform Management Interface (IPMI) servers provide access to servers and allow remote users to install software and configure or admninister systems at the console level, or as though you are in the room with the server when you are working remotely. Not all companies have or use IPMI servers but companies with multiple server deployments and remote data centers likely do.

To provide for remote administration of your TrueNAS SCALE system, assign access through your IPMI server to the TrueNAS server. To make this possible assign an IP address to use for access and set up administrator credentials (user name and password) to access the TrueNAS IPMI connections. 

## Network Access

{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
If you obtained network equipment and Internet service access from either an Internet or cable service provider, contact their support departments for assistance with network addresses.

For SCALE support or assistance refer to the TrueNAS community forums, blog, or the Discord, or the tutorials included in the TrueNAS Documentation Hub.

## SMTP Access

{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" type="page" >}}
If you do not know this information and do not have a network administrator in your company, or if you are a home user, contact your Internet or cable service provider to obtain the SMTP addresses to allow TrueNAS to send emails from your network.

## Directory Service Access
This section does not apply to small companies with very few users or home deployments of SCALE.

If your company uses a directory server such as Active Directory or LDAP, TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap. Active Directory and LDAP configuration settings have similar requirements. 
Active Directory and LDAP configuration settings have similar requirements.
{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" type="page" >}}


{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}