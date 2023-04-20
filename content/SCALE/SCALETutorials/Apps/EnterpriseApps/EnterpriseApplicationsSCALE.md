---
title: "Enterprise Applications Overview"
description: "This article provides information about on adding and managing Enterprise Applications in SCALE."
weight: 10
aliases: 
 - /scale/scaletutorials/apps/
 - scale/scaletutorials/apps/enterpriseapplicationsscale/
tags:
- scaleenterprise
- scaleapps
---

{{< toc >}}

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure. TrueNAS Enterprise storage appliances deliver a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.

{{< enterprise >}}
TrueNAS applications expand the capabilities of your system by adding third-party software but can add significant risk to system stability and security.
SCALE Enterprise licensed systems do not have applications available by default. 
This feature is enabled as part of the Enterprise license after consulting with iXsystems.
Applications should only be installed with the assistance of an iXsystems Support.

{{< expand "Contacting Support" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /expand >}}
{{< /enterprise >}}

![InstalledAppsNoneSCALEEnterprise](/images/SCALE/22.12/InstalledAppsNoneSCALEEnterprise.png "Installed Apps SCALE Enterprise") 

There are general best practices to keep in mind when using applications with TrueNAS SCALE:

## Select a Pool and Create a Dataset

We recommend users keep the container use case in mind when choosing a pool. Select a pool that has enough space for all the application containers you intend to use. 
TrueNAS creates an *ix-applications* dataset on the chosen pool and uses it to store all container-related data. This is for internal use only. 
If you intend to store your application data in a location that is separate from other storage on your system, create a new dataset. 

## File Sharing

{{< hint warning >}}
Since TrueNAS considers shared host paths non-secure, apps that use shared host paths (such as those services like SMB are using) fail to deploy. 
Best practice is to create datasets for applications that do not share the same host path as an SMB or NFS share. 
{{< /hint >}}

## Kubernetes Settings

Kubernetes is an open-source container orchestration system that manages container scheduling and deployment, load balancing, auto-scaling and storage. 
The default system-level Kubernetes Node IP settings can be found in **Apps > Settings > Advanced Settings**.

## Using Docker

Docker is an open platform for developing, shipping, and running containerized applications. 
The **Launch Docker Image** button starts the Docker configuration wizard. 
You cannot interrupt the configuration wizard and save settings to leave and go create data storage or directories in the middle of the process. 
We recommend having your Docker configuration information ready before starting the wizard. You should have acces to information such as:

* The path to the Docker image repository
* Any container entrypoint commands or arguments
* Container environment variables
* Network settings
* DNS nameservers
* Container and node port settings
* Storage volume locations

## Directory Services

TrueNAS SCALE allows you to configure an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings. 
You should know your Kerberos realm and keytab information. You may need to supply your LDAP server host name, LDAP server base and bind distinguished names (DN) and the bind password.

Determine the container and node port numbers. TrueNAS SCALE requires that the node port be above 9000. Ensure that the ports are not already in use.

iXsystems Support can assist Enterprise customers with configuring directory service settings in SCALE with the [information customers provide]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}), but they do not configure customer Active Directory system settings.

{{< taglist tag="scaleapps" limit="10" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
