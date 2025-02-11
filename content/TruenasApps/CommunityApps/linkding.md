---
title: "Linkding"
description: "Provides installation instructions for the Linkding application in TrueNAS."
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

[Linkding](https://github.com/sissbruecker/linkding) is a web bookmarking application supporting tags, search, multi-users, page snapshots, and more...

## Before you begin

Before you install Linkding:
- Check out the [installation instructions](https://linkding.link/installation/) to learn more about installaing and administrating Linkding.
- Determine whether you want to use the page snapshot feature, available in the 'linkding plus' image. If using snapshots, you may want to consider altering the path for 'Linkding Data Storage' if you're expecting to have a large collection of page snapshots.
- Figure out where you want to keep passwords for the Linkding database and Linkding users.

## Install Linkding

If installing Linkding with everything with both Linkding Data Storage and Linkding Postgres Data Storage set to 'ixVolume', installation should be fairly straightforward. 

If setting a custom 'Host Path' for Linkding Data Storage (e.g. for storing page snapshots to a zfs pool), you'll likely want to select 'Enable ACL' and then within ACL Entries set ID type (e.g. for user), ID (e.g. 568, or whatever is set as the User and Group for Linkding on the same settings page) and Access (FULL_CONTROL) appropriately. Failure to setup ACL appropriately when using a custom Host Path may cause Linkding to not run (i.e. return an Internal Server Error).

You may also need to setup a way to securely host the service, using guides such as [HOWTO: Host a Service privately on TrueNAS with a valid SSL Certificate](https://forums.truenas.com/t/howto-host-a-service-privately-on-truenas-with-a-valid-ssl-certificate/15243).

{{< include file="/static/includes/ProposeArticleChange.md" >}}
