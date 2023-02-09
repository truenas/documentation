---
title: "Installation Instructions"
geekdocCollapseSection: true
weight: 30
---

This section provides instructions for users that are installing TrueNAS SCALE for the first time on their own system hardware and for users that need to do a clean install of SCALE.

The installation process covers installing SCALE using an <file>iso</file>, and then using the Console setup menu to configure their primary network interface. TrueNAS SCALE uses DHCP to provide the system IP address. 
It also describes configuring the rest of the network settings, storage pools, data sharing and data storage backup solutions in the web UI. Finally, it covers backing up the system configuration to a file.

If you plan to use this TrueNAS SCALE system as part of a cluster, complete the configuration process and then save the system configuration file.

## Preparing for SCALE Configuration (Enterprise Customers)
SCALE Enterprise customers, or those that purchased systems and service contracts from iXsystems, should use the information in this section to prepare for their SCALE system deployments. 
The iXsystems Support department provides assistance with the configuration areas documented in this section.

### Required Access and Information
There are many possible scenarios for network configurations so this section covers the basics of the access and information required to configure SCALE to work in your network environment. 
If you are the individual tasked with installing and configuring the TrueNAS SCALE server but are not responsible for network services in your company, contact your network administrator to request they provision and verify new IP address assignments and provide the other information for access.

{{< expand "IPMI Access" "v" >}}
Intelligent Platform Management Interface (IPMI) servers provide a way for system administrators to access other servers. Through this remote access, administrators can install software, and configure or administer systems at the console level as though they are in the room with the server. 
Not all companies have or use IPMI servers but companies with multiple server deployments or remote data centers likely do.

iXsystems requires access through your IPMI server to access the TrueNAS server to provide remote administration support. 
To make this possible:

* Assign an IP address to access to each controller in the TrueNAS system. 
  If you have a High Availability (HA) system, the server is equipped with two controllers so assign two IP addresses, one for each controller.
* Create and provide administrator credentials (user name and password) for access to the TrueNAS IPMI connections. 
  Configure the administrator credentials to access both IP addresses assigned to the HA system controllers.
{{< /expand >}}

{{< expand "Network Access" "v" >}}
If you have an HA system with two controllers, you must assign an IP address to the second controller in the server. 
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
The second controller in an HA system also requires a static IP address.

iXsupport can assist you with any questions you have with these network requirements. Provide the information listed to iXsystems when requested so we can pre-configure your system network settings.
{{< /expand >}}
{{< expand "SMTP Access" "v" >}}
{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" type="page" >}}
Have your network administrators provide the SMTP addresses to allow TrueNAS to send emails from your network.
{{< /expand >}}
{{< expand "Directory Service Access" "v" >}}
TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap. Active Directory and LDAP configuration settings have similar requirements.
{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" type="page" >}}
{{< /expand >}}

## Preparing for SCALE Configuration (Non-TrueNAS Server Deployments)
SCALE users installing and configuring SCALE on their own servers should use the information in this section to prepare for their SCALE system deployments. 
Support options available to assist you include the TrueNAS community forums, blog, Discord, and tutorials documented in the TrueNAS Documentation Hub. 
If you are not the administrator responsible for network access in your company, contact your network administrator for assistance. 
If your company obtains network hardware and support from an Internet or cable service provider, contact them for assistance with where to obtain this information.

{{< expand "IPMI Access" "v" >}}
Intelligent Platform Management Interface (IPMI) servers provide access to servers and allow remote users to install software and configure or admninister systems at the console level, or as though you are in the room with the server when you are working remotely. Not all companies have or use IPMI servers but companies with multiple server deployments and remote data centers likely do.

To provide for remote administration of your TrueNAS SCALE system, assign access through your IPMI server to the TrueNAS server. To make this possible assign an IP address to use for access and set up administrator credentials (user name and password) to access the TrueNAS IPMI connections. 
{{< /expand >}}
{{< expand "Network Access" "v" >}}
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
If you obtained network equipment and Internet service access from either an Internet or cable service provider, contact their support departments for assistance with network addresses.

For SCALE support or assistance refer to the TrueNAS community forums, blog, or the Discord, or the tutorials included in the TrueNAS Documentation Hub.
{{< /expand >}}
{{< expand "SMTP Access" "v" >}}
{{< include file="/_includes/SMTPInstallRequirementsSCALE.md" type="page" >}}
If you do not know this information and do not have a network administrator in your company, or if you are a home user, contact your Internet or cable service provider to obtain the SMTP addresses to allow TrueNAS to send emails from your network.
{{< /expand >}}
{{< expand "Directory Service Access" "v" >}}
This section does not apply to small companies with very few users or home deployments of SCALE.

If your company uses a directory server such as Active Directory or LDAP, TrueNAS SCALE works with either Active Directory or LDAP directory servers, and it can also work with Kerberos and IDmap. Active Directory and LDAP configuration settings have similar requirements. 
Active Directory and LDAP configuration settings have similar requirements.
{{< include file="/_includes/DirectoryServicesInstallRequirementsSCALE.md" type="page" >}}
{{< /expand >}}
## Preparing for SCALE Configuration (Home Users)
SCALE users installing and configuring SCALE on their home server should follow the instructions in this section to prepare for their SCALE system deployment.
Support options available to assist you include the TrueNAS community forums, blog, Discord, and tutorials documented in the TrueNAS Documentation Hub.

Home users obtaining network equipment and Internet service access from either an Internet or cable service provider, can contact those support departments for assistance with SMTP and some network configuration addresses such as default gateways or DNS name server addresses.
{{< expand "Network Access" "v" >}}
{{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}
Home users obtaining network equipment and Internet service access from either an Internet or cable service provider, can contact the provider support departments for assistance with network addresses.
For SCALE support or assistance refer to the TrueNAS community forums, blog, or the Discord, or the tutorials included in the TrueNAS Documentation Hub.
{{< /expand >}}
{{< expand "SMTP Access" "v" >}}
Simple Mail Transfer Protocol (SMTP) service or servers allow for the transfer of electronic mail across an Internet connection. 
TrueNAS uses either SMTP to send mail from SCALE to either the administrator or designated individual email addresses for system alert notifications. 
Contact your Internet or cable service provider to obtain the SMTP addresses to allow TrueNAS to send emails from your network.
{{< /expand >}}

## Installation Articles

{{< children depth="2" description="true" >}}