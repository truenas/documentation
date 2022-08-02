---
title: "Managing Network Global Configurations"
description: "This article provides instructions on configuring or managing global configuration settings."
weight: 20
tags:
- scalenetwork
---

{{< toc >}}

Use the **Global Configuration Settings** screen to manage existing general network settings like the default gateway, DNS servers, set DHCP to assign the IP address or to set a static IP address, add IP address aliases, and set up services to allow external communication.

{{< hint danger >}}
**Disruptive Change**

You can lose your TrueNAS connection if you change the network interface that the web interface uses!  
You might need command line knowledge or physical access to the TrueNAS system to fix misconfigured network settings.
{{< /hint >}}

{{< expand "Tutorial Video" "v" >}}

{{< embed-video name="scaleangelfishstaticipglobalnetworking" >}}

{{< /expand >}}

{{< expand "Can I configure these options elsewhere?" "v" >}}
Users can configure many of these interface, DNS, and gateway options in the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}).
Be sure to check both locations when troubleshooting network connectivity issues.
{{< /expand >}}

## Setting Up External Communication for Services
Use the **Global Configuration Outbound Network** radio buttons to set up services to have external communication capability.

Services that use external communication are:
* ACME DNS-Authenticators
* Anonymous usage statistics
* Catalog(s) information exchanges
* Cloud sync
* KMIP
* Mail (email service)
* Replication
* Rsync
* Support
* TrueCommand iX porta
* Updates
* VMWare snapshots

Select the **Allow All** to permit all the above services to externally communicate. This is the default setting.

Select the **Deny All** to prevent all the above services from externally communicating.

Select the **Allow Specific** to permit external communication for the services you specify. Selecting **Allow Specific** displays a dropdown list field with the list of services you can select from. Select all that apply. A checkmark displays next to each selected service. Selected services display in the field separated by a (,).

Click **Save** when finished.

## Setting Up Netwait
Use Netwait to prevent starting all network services until the network is ready. Netwait sends a [ping](https://manpages.debian.org/unstable/inetutils-ping/ping.1.en.html) to each of the IP addresses you specify until one responds, and after receiving the response then services can start.

To set up Netwait, from the **Network** screen:

1. Click on **Settings** in the **Global Configuration** widget. The **Global Configuration** screen displays.

2. Select the **Enable Netwait Feature** checkbox. The **Netwait IP List** field displays.

3. Enter your list of IP addresses to ping. Press <kbd>Enter</kbd> after entering each IP address.


{{< taglist tag="scalenetwork" limit="10" >}}