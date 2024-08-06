---
title: "TrueNAS SCALE 22.12 (Archived)"
description: "Archival documentation for the TrueNAS SCALE 22.12 (Bluefin) major version. This documentation is End of Life (EOL) and presented for reference only."
geekdocCollapseSection: true
weight: 10
---

{{< columns size="small" >}}
<img src="/images/SCALE/Bluefin.png" alt="TrueNAS SCALE 22.12 Logo" style="margin: 1rem 0 0 2rem;">
<--->
iXsystems released TrueNAS SCALE 22.12.0 (Bluefin) on December 13, 2022.
It received its final update on October 13, 2023.
The terminal version of Bluefin is 22.12.4.2.

Bluefin introduced many new features and general improvements to the TrueNAS SCALE experience:
{{< /columns >}}

{{< columns >}}

* Redesign of Storage web UI including new dashboards for Storage, Pools, Dashboards, Devices and other storage related areas.
* Storj iX Cloud Sync backup solution now available.
* Apps improvements including adding Storj to the official catalog and adding a default Apps catalog exclusive for Enterprise customers.
* STIG hardening through limiting web login and API access by restricting access for non-approved IP addresses and ranges.
  Additional STIG hardening through disabling root login access and tying user to API ACLs.
* Enclosure management for all iXsystems platforms.
* Improved clustering over the Angelfish clustered SMB (aka Windows storage).
<--->
* Applications improvements include:
  * Add bulk upgrade action for selected apps.
  * Add new Apps widget.
  * Add a better Apps directory.
  * Improve and simplify the app installation process.
* Add disk count scalability that includes improved boot time.
* Replacing nodes.
* High-Availability Active/Standby.
* Support for Enterprise and Pro license keys.
{{< /columns >}}

The [22.12 release notes article]({{< relref "SCALEReleaseNotes.md" >}}) has additional details.

## Documentation End of Life (EOL)

**22.12 (Bluefin) Documentation EOL: 05-03-2024**

iXsystems employees maintain documentation and provide regular updates for current and in development (future) versions of TrueNAS software.
For documentation purposes, current and future releases are those recommended by the TrueNAS [Software Status page](https://www.truenas.com/software-status/) for one or more user type.

Documentation for previous releases, that are no longer recommended for any user type, is archived and unmaintained.
All documentation provided here is end-of-life (EOL), intended for reference only, and no longer receives *any* updates.

## 22.12 Featured Content

<div class="docs-sections">
  <p>
	<a href="/gettingstarted/" style="font-size:18px;">Getting Started Guide</a>
	<br><a href="/gettingstarted/scalereleasenotes/">Release Notes</a>
	<br><a href="/gettingstarted/scalehardwareguide/">Community Hardware Guide</a>
	<br><a href="/gettingstarted/install/">Installation Instructions</a>
  </p>
  <p>
	<a href="/scaletutorials/" style="font-size:18px;">Tutorials</a>
	<br><a href="/scaletutorials/network/">Networking</a>
	<br><a href="/scaletutorials/storage/">Storage Management</a>
	<br><a href="/scaletutorials/dataprotection/cloudsynctasks/">Add Storj Cloud Sync Task</a>
  </p>
  <p>
	<a href="/scaleuireference/" style="font-size:18px;">UI Reference Guide</a>
	<br><a href="/scaleuireference/systemsettings/">System Settings Screens</a>
	<br><a href="/scaleuireference/storage/">Storage Screens</a>
	<br><a href="/scaleuireference/apps/">Apps Screens</a>
  </p>
  <p>
	<a href="/scaleclireference/" style="font-size:18px;">CLI Reference Guide</a>
	<br><a href="/api/">API Reference</a>
	<br><a href="/scalesecurityreports/">Security Reports</a>
  </p>
</div>
