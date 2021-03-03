---
title: "NTP Servers"
weight: 20
---

[Network Time Protocol (NTP)](https://datatracker.ietf.org/wg/ntp/about/) servers sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers.
TrueNAS supports adding custom NTP servers.

## Adding a Custom NTP Server

Go to **System > NTP Servers** to view, edit, or remove NTP Servers:

![SystemNTPServers](/images/CORE/12.0/SystemNTPServers.png "Default NTP Servers")

Several default servers are listed.
To register a new server, click *ADD* and configure the options.

![SystemNTPServersAdd](/images/CORE/12.0/SystemNTPServersAdd.png "Adding a new NTP Server")

{{< include file="static/includes/SystemNTPServersAddFields.md.part" markdown="true" >}}
