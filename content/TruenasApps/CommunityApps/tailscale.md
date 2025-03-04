---
title: "Tailscale"
description: "Provides installation instructions for the Tailscale application in TrueNAS."
weight: 
aliases:
tags:
- apps
keywords:
- nas data storage
- software storage solutions
- flash storage
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!-- Comment out the following line if your suggested changes to this Community app documentation provide a complete installation tutorial. Leave exposed if you are proposing a partial expansion of the content, but further work is needed. -->
{{< include file="/static/includes/apps/CommunityPleaseExpand.md" >}}

<!-- Uncomment the following line if you suspect this Community app documentation is out of date, inaccurate, or needs further improvement -->
<!--{{< include file="/static/includes/apps/CommunityPleaseImprove.md" >}}-->

[Tailscale](https://tailscale.com) <!-- is a [description of the application] -->

{{< include file="/static/includes/ProposeArticleChange.md" >}}

## Connecting to a custom headscale server
Add the following to **Extra Arguments**:

`--login-server=https://<yourserver>:<port>`

## Advertising TrueNAS as an exit node
Tick the checkbox next to **Advertise Exit Node**.

Important: Needs enabled IP forwarding on the host via **System > Advanced Settings > Sysctls**.
Please make sure you read and understand the warnings displayed when adding Sysctls
See also [Enable IP forwarding](https://tailscale.com/kb/1019/subnets?tab=linux#enable-ip-forwarding) from Tailscale.
