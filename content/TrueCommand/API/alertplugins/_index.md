---
title: "Alert Notification Plugins"
draft: false
pre: "<i class='fa fa-bell'></i>	"
geekdocCollapseSection: true
no_list: true
---

## API Class: alertplugins
When an alert rule is triggered, it is possible for TrueCommand to be able to forward that alert notification to external notification service providers via a plugin-based provider system. 

External alert notifications are generated every 5 minutes, and include a collection of all the alert notices that were generated (and not resolved) within that 5 minute interval.

## Reference Guide

{{< toc-tree >}}

## Changelog
* **v2.0** : The "plugin" nature of these alert services is no longer available. All services are included within TrueCommand itself now and cannot be added/removed/updated. The "alertplugins" API class is planned to be removed/replaced with an easier system in a later version.
