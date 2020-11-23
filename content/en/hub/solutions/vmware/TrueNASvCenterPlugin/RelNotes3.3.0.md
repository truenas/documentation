---
title: "TrueNAS vCenter Plugin v3.3.0"
linkTitle: "v3.3.0 Release Notes"
description: "Release notes for plugin version 3.3.0."
tags: ["vCenter Plugin", "TrueNAS Enterprise"]
weight: 10
---

*November 24, 2020*

iXsystems is pleased to release version 3.3.0 of the TrueNAS vCenter plugin!
This is a maintenance release of the plugin, designed to improve functionality and add support for TrueNAS 12.0 host systems.
The most notable improvements for the plugin in this release are:

<ul>
	<li>API calls have been converted to the 2.0 TrueNAS RestAPI (<a href="https://jira.ixsystems.com/browse/VCP-78" target="_blank">VCP-78</a>)</li>
	<li>Added support for TrueNAS hosts upgrading from 11.3 to 12.0 (<a href="https://jira.ixsystems.com/browse/VCP-81" target="_blank">VCP-81</a>)</li>
	<li>Mount share path for NFS reflects all available pools (<a href="https://jira.ixsystems.com/browse/VCP-60" target="_blank">VCP-60</a>)</li>
</ul>

To install or update to the 3.3.0 TrueNAS vCenter plugin, please [contact iXsystems Support](/hub/initial-setup/support/#contacting-ixsystems-support).

## Changelog

### New Feature

* [VCP-20](https://jira.ixsystems.com/browse/VCP-20) - Add the default ports for the user when adding a Host in vCenter

### Improvement

* [VCP-78](https://jira.ixsystems.com/browse/VCP-78) - Convert remaining calls to v2.0

### Bug

* [VCP-84](https://jira.ixsystems.com/browse/VCP-84) - vCenter plugin not seeing HA, NFS, iSCSI unless API 1.0 is enabled

## Known Issues

* The plugin replication feature has been removed due to numerous long-standing issues that could not be resolved for this version of the plugin. Please continue to create replication tasks using the TrueNAS web interface.
* *https* has been disabled for the 3.3.0 release ([VCP-105](https://jira.ixsystems.com/browse/VCP-105)) due to an issue with connector initialization failures and conflicts with the Apache HTTPClient dependency. TrueNAS users **must enable http on their TrueNAS system for the 3.3.0 plugin to connect properly.** To verify TrueNAS 11.3 or 12.0 can connect, log in to the web interface, go to *System > General*, and make sure *Web Interface HTTP -> HTTPS Redirect* is unset. This issue is scheduled for resolution in [plugin version 4.0](https://jira.ixsystems.com/projects/VCP/versions/12108).
* Cloned datastores always use the first listed interface ([VCP-113](https://jira.ixsystems.com/projects/VCP/issues/VCP-113)). To work around this issue, either ensure the original datastore is using the desired interface or create a new datastore instead of making a clone.
* Plugin deployment complains about logging system error ([VCP-114](https://jira.ixsystems.com/browse/VCP-114)). This is a cosmetic error based on initial plugin deployments creating an empty log file. There is no impact to installing or using the vCenter Plugin.
