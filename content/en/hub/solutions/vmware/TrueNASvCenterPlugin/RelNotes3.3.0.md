---
title: "TrueNAS vCenter Plugin v3.3.0"
linkTitle: "v3.3.0 Release Notes"
description: "Release notes for plugin version 3.3.0."
tags: ["vCenter Plugin", "TrueNAS Enterprise"]
weight: 10
---

*November 24, 2020*

iXsystems is pleased to release version 3.3.0 of the TrueNAS vCenter plugin!
This is a significant maintenance release of the plugin, designed to improve functionality and add support for TrueNAS 12.0 host systems.
The most notable improvements for the plugin in this release are:

<ul>
	<li>API calls have been converted to the 2.0 TrueNAS RestAPI (<a href="https://jira.ixsystems.com/browse/VCP-78" target="_blank">VCP-78</a>)</li>
	<li>Added support for TrueNAS hosts upgrading from 11.3 to 12.0 (<a href="https://jira.ixsystems.com/browse/VCP-81" target="_blank">VCP-81</a>)</li>
	<li>Mount share path for NFS reflects all available pools (<a href="https://jira.ixsystems.com/browse/VCP-60" target="_blank">VCP-60</a>)</li>
</ul>

To install or update to the 3.3.0 TrueNAS vCenter plugin, please [contact iXsystems Support](/hub/initial-setup/support/#contacting-ixsystems-support).

## Changelog

### New Feature

* [VCP-13](https://jira.ixsystems.com/browse/VCP-13) - Fix vCenter Replication Remote Host Key issue
* [VCP-20](https://jira.ixsystems.com/browse/VCP-20) - Add the default ports for the user when adding a Host in vCenter
* [VCP-21](https://jira.ixsystems.com/browse/VCP-21) - Make an NFS share available in a TrueNAS VM with an unconfigured NIC

### Improvement

* [VCP-78](https://jira.ixsystems.com/browse/VCP-78) - Convert remaining calls to v2.0

### Bug

* [VCP-84](https://jira.ixsystems.com/browse/VCP-84) - vCenter plugin not seeing HA, NFS, iSCSI

### Defect

* [VCP-52](https://jira.ixsystems.com/browse/VCP-52) - A iscsi share created on TN appears to have prevented some shares, created in vCenter, from showing in VCenter volume list
* [VCP-54](https://jira.ixsystems.com/browse/VCP-54) - The vCenter UI isn't updating a modified size
* [VCP-60](https://jira.ixsystems.com/browse/VCP-60) - Fix the mount share path for NFS reflect all the pools available
* [VCP-65](https://jira.ixsystems.com/browse/VCP-65) - Unable to created a Scheduled snapshot in vCenter
* [VCP-76](https://jira.ixsystems.com/browse/VCP-76) - Accept text/plain as json in the Jackson1 converter
* [VCP-81](https://jira.ixsystems.com/browse/VCP-81) - Upgrade from 11.3 to 12.0 breaks vCenter plugin functionality entirely
* [VCP-82](https://jira.ixsystems.com/browse/VCP-82) - vCenter password not loading correctly
* [VCP-83](https://jira.ixsystems.com/browse/VCP-83) - vCenter Alarm exceptions
* [VCP-86](https://jira.ixsystems.com/browse/VCP-86) - Unable to Add TrueNAS Storage Provisioning

## Known Issues

* The plugin replication feature has been removed due to numerous long-standing issues that could not be resolved for this version of the plugin. Please continue to create replication tasks using the TrueNAS web interface.
* *https* has been disabled for the 3.3.0 release ([VCP-105](https://jira.ixsystems.com/browse/VCP-105)). This is a known issue that is scheduled for resolution in [plugin version 4.0](https://jira.ixsystems.com/projects/VCP/versions/12108).
