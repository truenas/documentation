---
title: "Preparing for SCALE UI Configuration (Enterprise)"
description: "Provides information you need to complete the SCALE Enterprise configuration using the SCALE UI."
weight: 6
aliases:
tags:
- scaleinstall
- scalemigrate
---


{{< toc >}}

{{< enterprise >}}
SCALE Enterprise customers, or those that purchased systems and service contracts from iXsystems, should use the information in this article to prepare for their SCALE system deployments.

The iXsystems Support department provides assistance with the configuration areas documented in this section.

{{< expand "Contacting Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /expand >}}

{{< /enterprise >}}

## Required Access and Information
Because there are many possible scenarios for network configurations, this section covers the basics of the access and information required to configure SCALE to work in your network environment.
If you are the individual tasked with installing and configuring the TrueNAS SCALE server but are not responsible for network services in your company, contact your network administrator to request they provision and verify new IP address assignments and provide the other information for access.

## Physical Access
When in the same location as the hardware designated for the TrueNAS installation, you can connect a monitor and keyboard to the system to do the initial installation and configuration.
An additional USB port is required when using a USB storage device to install TrueNAS from <kbd>.iso</kbd> file.

### IPMI Access
The Intelligent Platform Management Interface (IPMI) provides a way for system administrators to remotely access their TrueNAS system.
Through this remote access, administrators can install software, and configure or administer systems at the console level as though they are in the room with the server.
TrueNAS Enterprise systems sold by iXsystems provide IPMI network ports, but other hardware might not have IPMI ports.

iXsystems requires access through your IPMI server to access the TrueNAS server to provide remote administration support. 
To make this possible:

* Assign an IP address to the IPMI port of each controller in the TrueNAS array.
  If you have a High Availability (HA) system, the server is equipped with two controllers so assign two IP addresses, one for each controller.
* Create and provide administrator credentials (user name and password) for access to the TrueNAS IPMI connections. 
  Configure the administrator credentials to access both IP addresses assigned to the HA system controllers.

### Network Access
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}

If you have an HA system with two controllers, you must assign a total of three IP addresses:
* A virtual IP for access to the UI no matter which controller is active
* An IP address for the primary network port on controller A
* An IP address for the primary network port on controller B

iXsystems Support can assist you with any questions you have with these network requirements.
Provide the information listed to iXsystems when requested to expedite configuring your system network settings.

### SMTP Access
{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" type="page" >}}
Have your network administrators provide the SMTP addresses to allow TrueNAS to send emails from your network.

### Directory Service Access
TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap.
Active Directory and LDAP configuration settings have similar requirements.

{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" type="page" >}}


{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}
