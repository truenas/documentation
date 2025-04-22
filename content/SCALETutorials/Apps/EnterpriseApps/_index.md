---
title: "Enterprise Applications"
description: "Tutorials for using TrueNAS SCALE applications in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 20
tags:
related: false
---


{{< hint type=important title="24.04 Application Tutorials" >}}
{{< include file="/static/includes/AppsUnversioned.md" >}}
{{< /hint >}}

{{< include file="/static/includes/SCALEEnterpriseApps.md" >}}

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS Enterprise storage appliances deliver a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.

TrueNAS applications expand the capabilities of your system by adding third-party software but can add significant risk to system stability and security.
There are general best practices to keep in mind when using applications with TrueNAS SCALE:

## Select a Pool and Create a Dataset
We recommend users keep the container use case in mind when choosing a pool. Select a pool that has enough space for all the application containers you intend to use.
TrueNAS creates an *ix-applications* dataset on the chosen pool and uses it to store all container-related data. This is for internal use only.
If you intend to store your application data in a location that is separate from other storage on your system, create a new dataset.

## File Sharing
{{< hint type=important >}}
Since TrueNAS considers shared host paths non-secure, apps that use shared host paths (such as those services SMB is using) might fail to deploy.
The best practice is to create datasets for applications that do not share the same host path as an SMB or NFS share.
{{< /hint >}}

## Kubernetes Settings
Kubernetes is an open-source container orchestration system that manages container scheduling and deployment, load balancing, auto-scaling, and storage.
The default system-level Kubernetes Node IP settings are found in **Apps > Settings > Advanced Settings**.

## Using Custom App
The **Custom App** button starts the configuration wizard where users can install applications not included in the approved application catalog.
You cannot interrupt the configuration wizard and save settings to leave and go create data storage or directories in the middle of the process.
We recommend having your storage, user, or other configuration requirements ready before starting the wizard. You should have access to information such as:

* The path to the image repository
* Any container entrypoint commands or arguments
* Container environment variables
* Network settings
* DNS nameservers
* Container and node port settings
* Storage volume locations

## Directory Services
TrueNAS SCALE allows you to configure an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings.
You should know your Kerberos realm and keytab information.
You might need to supply your LDAP server host name, LDAP server base and bind distinguished names (DN), and the bind password.

Determine the container and node port numbers. TrueNAS SCALE requires a node port to be greater than 9000.
Refer to the [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available ports before changing default port assignments. 

iXsystems Support can assist Enterprise customers with configuring directory service settings in SCALE with the [information customers provide]({{< ref "/GettingStarted/Install/" >}}), but they do not configure customer Active Directory system settings.

## Section Contents

{{< children depth="1" description="true" >}}
