---
title: "Define Static Routes"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/network/staticroutes/"
description: "Provides instructions on setting up static routes on TrueNAS CORE."
weight: 40
tags:
- staticroutes
- network
---

Static routes are fixed, or non-adaptive routes. They are manually configured routes in the routing table.  

It is recommended to use the web UI for all configuration tasks. TrueNAS does not have static routes defined by default. 
When required, add a static route by going to **Network** > **Static Routes** and clicking **ADD**.

<img src="/images/CORE/Network/NetworkStaticRoutesAdd.png">
<br><br>

* Enter a **Destination** IP address. Use the format *A.B.C.D/E* where *E* is the CIDR mask.

* Enter the IP address of the **Gateway**.

* Enter any notes or identifiers describing the route in **Description**.
