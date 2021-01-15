---
title: "What is TrueCommand?"
description: "Describing the features and some use cases of the TrueCommand NAS management software."
weight: 10
---

### What is TrueCommand?

TrueCommand is a multi-system management "Single pane of Glass" system that helps control and monitor your TrueNAS fleet. TrueCommand assists in managing TrueNAS systems through REST APIs, WebSocket APIs, and a web user interface. The TrueCommand web interface provides unified administration of users and TrueNAS systems and single sign-on functionality.

TrueCommand can monitor an entire fleet of TrueNAS systems and thousands of online storage devices simultaneously. This includes displaying statistics on storage usage, network activity, active services, and more. TrueCommand also has the ability to create custom reports about individual systems or a combination of many systems.

<img src="/images/truecommand-overview.png" width='700px'>
<br><br>

### What features does TrueCommand have?

- Multiple deployment options: TrueCommand is a lightweight application that supports deployments in either a Virtual Machine or a Docker Container. TrueCommand Cloud is also available as a cloud-based subscription option that allows you to offload TrueCommand resources and deployment and only focus on fine-tuning your configuration.

- NAS Fleet Dashboard: The TrueCommand dashboard provides visibility to an organization’s entire TrueNAS fleet. TrueCommand includes an auto-discovery tool that expedites identifying and integrating systems into TrueCommand.

- Single Sign-on to all NAS Units
 Once a TrueNAS system has been connected to TrueCommand, authorized administrators can quickly log in to that system through TrueCommand. This allows for quicker and simpler signons instead of looking up IP addresses and login credentials.  This is even more beneficial when using different secure passwords for each TrueNAS instance instead of a single password across multiple systems.

- Centralized system updates

- Customized Alerts and Reports
 TrueCommand centralizes the management of alerts across a fleet of TrueNAS systems. In addition to the standard system alerts, administrators can define custom alerts.  Administrators can also create custom graphical reports. Reports are configurable and can span as many systems as desired and/or set of metrics.  This brings the information that the administrators deem the most relevant immediately to visibility.  The report data can be exported in CSV or JSON for other uses. 
 Alerts for all managed systems are shown in TrueCommand's web-based dashboard. Notification groups can also be defined so that unique groups receive specific alerts via email.  This enables TrueCommand to keep the right individuals informed of any current or potential problems.

- Enterprise Security with Role-Based Access Control (RBAC)
 TrueCommand administrators can define varied levels of system access.  These access levels can be assigned to system groups. Individuals can be assigned to teams or departments. Doing so allows the administrator to control the level of access appropriate to each individual or group in a manageable and atomic fashion. TrueCommand's RBAC controls can leverage pre-existing LDAP and Active Directory identities and groups in your infrastructure, eliminating redundant  management overhead.

- Audit Logs
 TrueCommand records all administration actions in secure audit logs. This allows for quick identification of what has been changed and who changed it.


### What does it cost?

TrueCommand software is free to use to manage up to 50 drives. It can be deployed as a Docker container or as a VM. Licenses to expand TrueCommand capabilities may be purchased from the [iXsystems account portal](http://portal.ixsystems.com/). Pricing is based on the number of drives and the support level required.

### Where do I get it?

TrueCommand can be downloaded from the [TrueNAS website](https://www.truenas.com/truecommand/). TrueCommand Cloud subscriptions are available at the [iXsystems Account Services Portal](https://portal.ixsystems.com/portal/login/index.php#login)


### What is TrueCommand Cloud?

TrueCommand Cloud is a secure SaaS offering of TrueCommand which includes a WireGuard VPN capability to connect TrueNAS systems through firewalls. TrueCommand Cloud is compatible with TrueNAS versions 12.0+ or SCALE for the Wireguard VPN capability.
Subscribe to and set up TrueCommand Cloud using [these instructions](https://www.truenas.com/docs/truecommand/installupdate/tc_cloud/).




