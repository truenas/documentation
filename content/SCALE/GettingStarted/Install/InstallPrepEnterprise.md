---
title: "Preparing for Scale UI Configuration (Enterprise)"
description: "This article provides information you need to complete the SCALE Enterprise configuration using the SCALE UI."
weight: 6
aliases:
tags:
- scaleinstall
- scalemigrate
---


{{< toc >}}


SCALE Enterprise customers, or those that purchased systems and service contracts from iXsystems, should use the information in this article to prepare for their SCALE system deployments. 

The iXsystems Support department provides assistance with the configuration areas documented in this section.

## Required Access and Information
There are many possible scenarios for network configurations so this section covers the basics of the access and information required to configure SCALE to work in your network environment. 
If you are the individual tasked with installing and configuring the TrueNAS SCALE server but are not responsible for network services in your company, contact your network administrator to request they provision and verify new IP address assignments and provide the other information for access.

### IPMI Access
Intelligent Platform Management Interface (IPMI) servers provide a way for system administrators to access other servers. Through this remote access, administrators can install software, and configure or administer systems at the console level as though they are in the room with the server. 
Not all companies have or use IPMI servers but companies with multiple server deployments or remote data centers likely do.

iXsystems requires access through your IPMI server to access the TrueNAS server to provide remote administration support. 
To make this possible:

* Assign an IP address to access to each controller in the TrueNAS system. 
  If you have a High Availability (HA) system, the server is equipped with two controllers so assign two IP addresses, one for each controller.
* Create and provide administrator credentials (user name and password) for access to the TrueNAS IPMI connections. 
  Configure the administrator credentials to access both IP addresses assigned to the HA system controllers.

### Network Access
If you have an HA system with two controllers, you must assign an IP address to the second controller in the server. 
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
The second controller in an HA system also requires a static IP address.

iXsupport can assist you with any questions you have with these network requirements. Provide the information listed to iXsystems when requested so we can pre-configure your system network settings.

### SMTP Access
{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" type="page" >}}
Have your network administrators provide the SMTP addresses to allow TrueNAS to send emails from your network.

### Directory Service Access
TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap. Active Directory and LDAP configuration settings have similar requirements.
{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" type="page" >}}


{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}