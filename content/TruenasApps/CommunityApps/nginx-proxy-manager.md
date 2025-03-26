---
title: "Nginx Proxy Manager"
description: "Provides installation instructions for the Nginx Proxy Manager application in TrueNAS."
weight: 
aliases:
tags:
- apps
keywords:
- nas data storage
- software storage solutions
- flash storage
---

{{< github-content 
    path="trains/community/nginx-proxy-manager/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!-- Comment out the following line if your suggested changes to this Community app documentation provide a complete installation tutorial. Leave exposed if you are proposing a partial expansion of the content, but further work is needed. -->
{{< include file="/static/includes/apps/CommunityPleaseExpand.md" >}}

<!-- Uncomment the following line if you suspect this Community app documentation is out of date, inaccurate, or needs further improvement -->
<!--{{< include file="/static/includes/apps/CommunityPleaseImprove.md" >}}-->

[Nginx Proxy Manager](https://nginxproxymanager.com) <!-- is a [description of the application] -->

## Installation

There is a notice when you install the app that it needs to run as the `root` user.
What this means practically is that when you are installing the app you will need to set the `User ID` to `0` (instead of `568` or whatever it is on your system).

Nginx Proxy Manager takes a few minutes to install.
When it's running, click on `Nginx Proxy Manager` to go to the details page, then click on the `web portal` button to go to the Nginx Proxy Manager app itself.

The log in credentials on a fresh install are:
* user: admin@example.com
* pass: changeme

{{< include file="/static/includes/ProposeArticleChange.md" >}}
