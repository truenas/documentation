---
title: "TrueCommand"
geekdocCollapseSection: true
weight: 30
---

![TrueCommandLogoFullColorRGB](/images/truecommand-logo-full-color-rgb.png)

TrueCommand is a multi-system management "Single pane of Glass" system that helps control and monitor your TrueNAS fleet. TrueCommand assists in managing TrueNAS systems through REST APIs, WebSocket APIs, and a web user interface. The TrueCommand web interface provides single sign-on functionality and unified administration of users and TrueNAS systems.

TrueCommand can monitor an entire fleet of TrueNAS systems and thousands of online storage devices simultaneously. This includes displaying statistics on storage usage, network activity, active services, and more. TrueCommand also has the ability to create custom reports about individual systems or a combination of many systems.

![Overview](/images/TrueCommand/Overview.png "Truecommand Overview")

## What Features does TrueCommand have?

{{< expand "Multiple Deployment Options" "v" >}}
TrueCommand docker container can be deployed as a VM since vhdk and vmdk are no longer supported in version 2.0.
TrueCommand Cloud is also available as a cloud-based subscription option that allows you to offload TrueCommand resources and deployment and only focus on fine-tuning your configuration.
{{< /expand >}}
{{< expand "NAS Fleet Dashboard" "v" >}}
The TrueCommand dashboard provides visibility to an organization’s entire TrueNAS fleet.
TrueCommand includes an auto-discovery tool that expedites identifying and integrating systems into TrueCommand.
{{< /expand >}}
{{< expand "Single Sign-on to all NAS Units" "v" >}}
Authorized administrators can quickly log into a TrueNAS system through TrueCommand
This allows for quicker and simpler sign-on instead of looking up IP addresses and login credentials.
This is even more beneficial when using different secure passwords for each TrueNAS instance instead of a single password across multiple systems.
{{< /expand >}}
{{< expand "Centralized system updates" "v" >}}
Easily update any connected TrueNAS system.
Monitor update progress, reboot the system, or even roll it back if something goes wrong.
{{< /expand >}}
{{< expand "Customized Alerts and Reports" "v" >}}
TrueCommand centralizes the management of alerts across a fleet of TrueNAS systems.
In addition to the standard system alerts, administrators can define custom alerts.
  
Administrators can also create custom graphical reports.
Reports are configurable and can span as many systems as desired and/or set of metrics.
This brings the information that the administrators deem the most relevant immediately to visibility.
Report data can be exported in CSV or JSON for other uses.

Alerts for all managed systems are shown in TrueCommand's web-based dashboard.
Notification groups can also be defined so that unique groups receive specific alerts via email.
This enables TrueCommand to keep the right individuals informed of any current or potential problems.
{{< /expand >}}
{{< expand "Enterprise Security with Role-Based Access Control (RBAC)" "v" >}}
TrueCommand administrators can define varied levels of system access.
These access levels can be assigned to system groups.
Individuals can be assigned to teams or departments.
Doing so allows the administrator to control the level of access appropriate to each individual or group in a manageable and atomic fashion.
TrueCommand's RBAC controls can leverage pre-existing LDAP and Active Directory identities and groups in your infrastructure, eliminating redundant management overhead.
{{< /expand >}}
{{< expand "Audit Logs" "v" >}}
TrueCommand records all administration actions in secure audit logs. This allows for quick identification of what has been changed and who changed it.
{{< /expand >}}

## What Does it Cost?

TrueCommand is free to use for up to 50 drives.
Licenses to expand TrueCommand capabilities are purchased from the [iXsystems account portal](https://portal.ixsystems.com/).
Pricing is based on the number of drives and the desired level of support.

## Where do I get it?

TrueCommand is downloaded from the [TrueNAS website](https://www.truenas.com/truecommand/).
TrueCommand Cloud subscriptions are available at the [iXsystems Account Services Portal](https://portal.ixsystems.com/portal/login/index.php).

## What is TrueCommand Cloud?

TrueCommand Cloud is a secure SaaS offering that includes a WireGuard VPN capability to connect TrueNAS systems through firewalls.
TrueCommand Cloud is compatible with TrueNAS versions **12.0+ or SCALE** for the Wireguard VPN capability.
Subscribe to and set up TrueCommand Cloud using [these instructions]({{< relref "/TrueCommand/TCGettingStarted/Install/_index.md" >}}).
