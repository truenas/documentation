---
title: "TrueNAS SCALE 23.10"
description: "Documentation for the SCALE 23.10 major version."
geekdocCollapseSection: true
weight: 20
aliases:
 - /scale/devnotes/
 - /scale/introduction/
---

{{< columns size="small" >}}
<img src="/images/SCALE_Cobia_Icon.png" alt="TrueNAS SCALE 23.10 Logo" style="margin: 1rem 0 0 2rem;">
<--->
iXsystems is pleased to introduce TrueNAS SCALE 23.10 (Cobia)!

This SCALE major version provides many new features and continued improvements to the TrueNAS SCALE experience.
{{< /columns >}}

{{< columns >}}

* Apps redesigned: this complete overhaul of apps screens and containerd addition provides more deployment options and usability for applications.

* Drive count optimizations: SCALE 23.10 has numerous back-end improvements to allow up to **1255** disks under management!

* Pool creation redesign: provides more information about pool configuration and supports larger SCALE deployments with hundreds of disks.

* iSCSI ALUA support: similar to TrueNAS CORE, SCALE High Availability systems now support iSCSI ALUA.

<--->

* System debug redesign to speed up issue investigations.

* System reporting has been overhauled and now uses netdata to provide system statistics to the **Reporting** screens.

* Improved NFS and SMB client support for richer ACL types.

* ZFS draid support is pending and will be available in a future 23.10 release.

* System service replacements: many system services that were built in to SCALE Bluefin are rebuilt as optional TrueNAS SCALE applications.
  {{< expand "Replaced Services (Click to expand)" "v" >}}
  These services are no longer available from **System Settings > Services** but do have an equivalent application (noted in `()`) available from **Apps**:
  * Dynamic DNS (**[ddns-updater]({{< relref "ddns-updater.md" >}})**)
  * OpenVPN Server (multiple VPN [apps]({{< relref "/SCALETutorials/Apps/CommunityApps/_index.md" >}}))
  * Rsyncd Server (**[rsyncd]({{< relref "rsyncd.md" >}})**)
  * S3 (**[minio]({{< relref "/SCALETutorials/Apps/CommunityApps/MinIOApp/_index.md" >}})**)
  * TFTP (**[tftpd-hpa]({{< relref "tftp-hpaapp.md" >}})**)
  * WebDAV (**[webdav]({{< relref "webdav.md" >}})**)
  
  The OpenVPN Client service was also removed but has no equivalent application.
  Please seek an alternate solution if this was a required service.
  
  {{< enterprise >}}
  TrueNAS SCALE Enterprise customers with TrueNAS SCALE 22.12.3 (Bluefin) or later deployed are warned when a deprecated service is in use.
  To prevent any loss of service, customers with Silver or Gold level support contracts with iXsystems are prevented from upgrading to TrueNAS SCALE 23.10 (Cobia) until the deprecated services are addressed.
  {{< /enterprise >}}
  {{< /expand >}}

{{< /columns >}}

Want to collaborate on TrueNAS SCALE? Join our [Official Discord Server.](https://discord.com/invite/Q3St5fPETd)
## SCALE 23.10 (Cobia) Featured Content

<div class="docs-sections">
  <p>
	<a href="/gettingstarted/" style="font-size:18px;">Getting Started Guide</a>
	<br><a href="/gettingstarted/scalereleasenotes/">Release Notes</a>
	<br><a href="/gettingstarted/scalehardwareguide/">Community Hardware Guide</a>
	<br><a href="/gettingstarted/install/">Installation Instructions</a>
	<br><a href="/gettingstarted/migrate/">CORE to SCALE Migrations</a>
  </p>
  <p>
	<a href="/scaletutorials/" style="font-size:18px;">Tutorials</a>
	<br><a href="/scaletutorials/network/">Networking</a>
	<br><a href="/scaletutorials/storage/">Storage Management</a>
	<br><a href="/scaletutorials/apps/communityapps/">Community Apps Guides</a>
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