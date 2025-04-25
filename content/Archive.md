---
title: "Documentation Archive"
aliases:
  - /releasenotes/scale/22.02.4/
  - /additional-topics/legacy/fn-legacy-docs/release-notes/fn-11.3-u2/
  - /core/notices/scrubresilveradjustments/
  - /releasenotes/scale/22.02.1/
  - /releasenotes/scale/22.02.0.1/
  - /releasenotes/scale/22.02.0/
  - /scale/scale22.12/
  - /releasenotes/scale/22.02-rc.2/
  - /releasenotes/scale/22.02-rc.1-2/
  - /releasenotes/scale/22.02-rc.1-1/
  - /releasenotes/scale/22.02-rc.1/
  - /releasenotes/scale/21.08-beta.2/
  - /releasenotes/scale/21.08-beta.1/
  - /releasenotes/scale/21.06-beta.1/
  - /releasenotes/scale/21.04-alpha.1/
  - /releasenotes/scale/21.02-alpha.1/
  - /releasenotes/scale/20.12-alpha/
  - /releasenotes/scale/20.10-alpha/
  - /_includes/corereleasenotes/freenas/11.2/11.2u7/
  - /_includes/corereleasenotes/freenas/11.3/11.3/
  - /_includes/corereleasenotes/freenas/11.1/11.1u4/
  - /_includes/corereleasenotes/freenas/11.1/11.1u5/
  - /_includes/corereleasenotes/12.0/12.0u8.1/
  - /_includes/corereleasenotes/freenas/11.2/11.2u5/
  - /_includes/corereleasenotes/freenas/11.2/11.2u2/
  - /_includes/corereleasenotes/freenas/11.1/11.1u3/
  - /_includes/corereleasenotes/freenas/11.1/11.1/
  - /_includes/corereleasenotes/freenas/11.3/11.3u1/
  - /_includes/corereleasenotes/freenas/11.3/11.3u2/
  - /_includes/corereleasenotes/freenas/11.1/11.1u6/
  - /_includes/corereleasenotes/freenas/11.2/11.2u4/
  - /_includes/corereleasenotes/freenas/11.1/11.1u1/
  - /_includes/corereleasenotes/freenas/11.2/11.2u3/
  - /_includes/corereleasenotes/12.0/12.0u2/
  - /_includes/corereleasenotes/freenas/11.2/11.2u6/
  - /_includes/corereleasenotes/freenas/11.2/11.2u8/
  - /_includes/corereleasenotes/freenas/11.3/11.3u3/
  - /_includes/corereleasenotes/freenas/11.3/11.3u4/
  - /_includes/corereleasenotes/freenas/11.1/11.1u7/
  - /_includes/corereleasenotes/freenas/11.2/11.2u1/
  - /_includes/corereleasenotes/freenas/11.1/11.1u2/
  - /_includes/corereleasenotes/freenas/11.3/11.3u5/
  - /_includes/corereleasenotes/12.0/12.0u6/
  - /_includes/corereleasenotes/12.0/12.0u1/
  - /_includes/corereleasenotes/12.0/12.0u3/
---

Welcome to the Documentation Archive!

The TrueNAS team maintains documentation content and provide regular updates for current and in development (future) versions of TrueNAS software.
For documentation purposes, current and future releases are those recommended by the TrueNAS [Software Status page](https://www.truenas.com/software-status/) for one or more user type.

Documentation for previous releases, that are no longer recommended for any user type, is archived and unmaintained.

{{< hint type=important >}}
All documentation provided here is end-of-life (EoL), intended for reference only, and no longer receives *any* updates.
{{< /hint >}}

Software releases after TrueNAS 22.12 (Bluefin) are available as navigable website branches.
Earlier releases are available only in PDF.

## TrueNAS

{{< expand "TrueNAS 23.10 (Cobia)" "v" >}}
[TrueNAS 23.10 (Cobia)](https://www.truenas.com/docs/scale/23.10/)

Release notes for each minor release of 23.10 are available in the [23.10 Cobia Release Notes](https://www.truenas.com/docs/scale/23.10/gettingstarted/scalereleasenotes/).
{{< /expand >}}

{{< expand "TrueNAS 22.12 (Bluefin)" "v" >}}
[TrueNAS 22.12 (Bluefin)](https://www.truenas.com/docs/scale/22.12/)

Release notes for each minor release of 22.12 are available in the [22.12 Bluefin Release Notes](https://www.truenas.com/docs/scale/22.12/gettingstarted/scalereleasenotes/).
{{< /expand >}}

{{< expand "TrueNAS 22.02 (Angelfish)" "v" >}}
Release notes for each minor release of 22.02 Angelfish are included in the archived docs.
<a href="https://www.truenas.com/docs/files/SCALE22.02Docs.pdf">TrueNAS 22.02 (Angelfish)</a>
{{< /expand >}}

{{< hint type=important >}}
**12.0 NVDIMM Alert**

Some TrueNAS M-Series systems installed with 12.0 releases with some 16GB 2666mhz NVDIMMs can see an alert that warns the NVDIMM firmware is out of date:

![NvdimmFirmwareAlert](/images/CORE/Dashboard/NvdimmFirmwareAlert.png "NVDIMM Firmware Alert")

This can be a false positive that has been fixed in TrueNAS 13.0-U1 (see [NAS-116986](https://ixsystems.atlassian.net/browse/NAS-116986)).
Upgrading to an Enterprise-recommended release of TrueNAS 13.0 resolves this alert.
To help determine if the deployment is ready to upgrade to TrueNAS 13.0, please refer to the current TrueNAS [Software Status](https://www.truenas.com/software-status/) and, when your use case matches a recommended 13.0 release, contact TrueNAS Support to schedule an upgrade.
{{< expand "Contacting TrueNAS Enterprise Support" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /hint >}}

{{< expand "TrueNAS 12.0" "v" >}}

<a href="https://www.truenas.com/docs/files/CORE12.0Docs.pdf">TrueNAS 12.0</a>

Release Notes:
* [12.0-U8.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U8.1" >}})
* [12.0-U8]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U8" >}})
* [12.0-U7]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U7" >}})
* [12.0-U6.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U6.1" >}})
* [12.0-U6]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U6" >}})
* [12.0-U5.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U5.1" >}})
* [12.0-U5]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U5" >}})
* [12.0-U4.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U4.1" >}})
* [12.0-U4]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U4" >}})
* [12.0-U3.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U3.1" >}})
* [12.0-U3]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U3" >}})
* [12.0-U2.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U2.1" >}})
* [12.0-U2]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U2" >}})
* [12.0-U1.1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U1.1" >}})
* [12.0-U1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0U1" >}})
* [12.0-Release]({{< ref "/_archive/COREReleaseNotes/12.0/12.0Release" >}})
* [12.0-RC1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0RC1" >}})
* [12.0-BETA2]({{< ref "/_archive/COREReleaseNotes/12.0/12.0Beta2" >}})
* [12.0-BETA1]({{< ref "/_archive/COREReleaseNotes/12.0/12.0Beta1" >}})

<a href="https://www.truenas.com/docs/files/NoticePersistentL2ARCinTrueNAS12.0.pdf">Notice - Persistent L2ARC in TrueNAS 12.0</a>
{{< /expand >}}

## TrueCommand

{{< expand "TrueCommand 2.x" "v" >}}

<a href="https://www.truenas.com/docs/truecommand/2.3/">TrueCommand 2.3</a>

TrueCommand 2.3 docs are available as a navigable website branch.
The contents of this archived branch are provided for reference only and not actively maintained.
* Release Notes:
  * [TrueCommand 2.1 - 2.3 Release Notes](https://www.truenas.com/docs/truecommand/2.3/tcgettingstarted/tcreleasenotes/)

<a href="https://www.truenas.com/docs/files/TC2.1Docs.pdf">TrueCommand 2.1</a>

<a href="https://www.truenas.com/docs/files/TrueCommand2.0Documentation.pdf">TrueCommand 2.0</a>

* Release Notes:
  * [2.0]({{< ref "/_archive/TCReleaseNotes/2.0" >}})
  * [2.0-BETA]({{< ref "/_archive/TCReleaseNotes/2.0-Beta" >}})

{{< /expand >}}
{{< expand "TrueCommand 1.x" "v" >}}

<a href="https://www.truenas.com/docs/files/TrueCommand1.3Docs.pdf">TrueCommand 1.3</a>

Release Notes:
* [1.3.2]({{< ref "/_archive/TCReleaseNotes/1.3.2" >}})
* [1.3.1]({{< ref "/_archive/TCReleaseNotes/1.3.1" >}})
* [1.3]({{< ref "/_archive/TCReleaseNotes/1.3" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.2/TrueCommand-Guide-1.2_screen.pdf">TrueCommand 1.2</a>

Release Notes:
* [1.2.3 Release Notes]({{< ref "/_archive/TCReleaseNotes/1.2.3" >}})
* [1.2.2 Release Notes]({{< ref "/_archive/TCReleaseNotes/1.2.2" >}})
* [1.2.1 Release Notes]({{< ref "/_archive/TCReleaseNotes/1.2.1" >}})
* [1.2 Release Notes]({{< ref "/_archive/TCReleaseNotes/1.2" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.1/TrueCommand-Guide-1.1_screen.pdf">TrueCommand 1.1</a>

[1.1 Release Notes]({{< ref "/_archive/TCReleaseNotes/1.1" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.0/TrueCommand-Guide-1.0-RELEASE.pdf">TrueCommand 1.0</a>

Release Notes:
* [1.0U1]({{< ref "/_archive/TCReleaseNotes/1.0U1" >}})
* [1.0]({{< ref "/_archive/TCReleaseNotes/1.0" >}})

{{< /expand >}}

## Legacy Documentation

The documentation, release notes, and notices provided in this section follow the major and minor releases of the previous FreeNAS and TrueNAS projects, before their unification under the TrueNAS name.
At that time, FreeNAS published first and TrueNAS followed later in the FreeNAS lifecycle with occasional simultaneous releases.
TrueNAS releases took all the FreeNAS changes up to that point and added a few Enterprise feature-specific (High Availability) changes.

### Legacy FreeNAS

{{< expand "FreeNAS 11.3" "v" >}}
<a href="https://www.ixsystems.com/documentation/freenas/11.3-U5/FreeNAS-11.3-U5-User-Guide_screen.pdf">FreeNAS 11.3</a>

11.3 Release Notes:
* [11.3-U5]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U5" >}})
* [11.3-U4]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U4" >}})
* [11.3-U3.2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U3.2" >}})
* [11.3-U3.1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U3.1" >}})
* [11.3-U3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U3" >}})
* [11.3-U2.1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U2.1" >}})
* [11.3-U2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U2" >}})
* [11.3-U1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3U1" >}})
* [11.3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3" >}})
* [11.3-RC2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3RC2" >}})
* [11.3-RC1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3RC1" >}})
* [11.3-BETA1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.3/11.3Beta1" >}})

{{< /expand >}}
{{< expand "FreeNAS 11.2" "v" >}}

<a href="https://www.ixsystems.com/documentation/freenas/11.2-U8/FreeNAS-11.2-U8-User-Guide_screen.pdf">FreeNAS 11.2 (New GUI)</a>
<a href="https://www.ixsystems.com/documentation/freenas/11.2-U8-legacy/FreeNAS-11.2-U8-Legacy-User-Guide_screen.pdf">FreeNAS 11.2 (Legacy GUI)</a>

11.2 Release Notes:
* [11.2-U8]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U8" >}})
* [11.2-U7]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U7" >}})
* [11.2-U6]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U6" >}})
* [11.2-U5]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U5" >}})
* [11.2-U4.1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U4.1" >}})
* [11.2-U4]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U4" >}})
* [11.2-U3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U3" >}})
* [11.2-U2.1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U2.1" >}})
* [11.2-U2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U2" >}})
* [11.2-U1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2U1" >}})
* [11.2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2" >}})
* [11.2-RC2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2RC2" >}})
* [11.2-RC1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2RC1" >}})
* [11.2-BETA3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2Beta3" >}})
* [11.2-BETA2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2Beta2" >}})
* [11.2-BETA1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.2/11.2Beta1" >}})

{{< /expand >}}
{{< expand "FreeNAS 11.1" "v" >}}

<a href="https://www.ixsystems.com/documentation/freenas/11.1/FreeNAS.pdf">FreeNAS 11.1</a>

11.1 Release Notes:
* [11.1-U7]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U7" >}})
* [11.1-U6.3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U6.3" >}})
* [11.1-U6]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U6" >}})
* [11.1-U5]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U5" >}})
* [11.1-U4]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U4" >}})
* [11.1-U3]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U3" >}})
* [11.1-U2]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U2" >}})
* [11.1-U1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1U1" >}})
* [11.1]({{< ref "/_archive/COREReleaseNotes/FreeNAS/11.1/11.1" >}})

{{< /expand >}}

{{< expand "FreeNAS 9.x" "v" >}}
<a href="https://www.ixsystems.com/documentation/freenas/9.10/freenas.html">FreeNAS 9.10 (HTML)</a>

<a href="https://www.truenas.com/docs/files/freenas9.10.2_guide.pdf">FreeNAS 9.10 (PDF)</a>

<a href="https://www.ixsystems.com/documentation/freenas/9.3/freenas.html">FreeNAS 9.3 (HTML)</a>

<a href="https://www.truenas.com/docs/files/freenas9.3_guide.pdf">FreeNAS 9.3 (PDF)</a>

<a href="https://www.ixsystems.com/documentation/freenas/9.2.1/freenas9.2.1_guide.pdf">FreeNAS 9.2</a>

<a href="https://www.ixsystems.com/documentation/freenas/9.1.1/freenas9.1.1_guide.pdf">FreeNAS 9.1</a>

<a href="https://www.truenas.com/docs/files/Notice9.3to9.10FAQ.pdf">Notice - 9.3 to 9.10 FAQ</a>
{{< /expand >}}
{{< expand "FreeNAS 8.x" "v" >}}
<a href="https://www.ixsystems.com/documentation/freenas/8.3.1/freenas8.3.1_guide.pdf">FreeNAS 8.3</a>

<a href="https://www.ixsystems.com/documentation/freenas/8.2/freenas8.2_guide.pdf">FreeNAS 8.2</a>

<a href="https://www.ixsystems.com/documentation/freenas/8.0.3/freenas8.0.3_guide.pdf">FreeNAS 8.0</a>
{{< /expand >}}

Notices:

<ul>
  <li><a href="https://www.truenas.com/docs/files/NoticeMicrosoftLDAPDefaults2020.pdf">Microsoft LDAP Defaults 2020</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeSequentialScrubandResilverAdjustments.pdf">Sequential Scrub and Resilver Adjustments</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeRecommendedZFSUpdate.pdf">Recommended ZFS Update</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeZFSPoolCorruptionIssue.pdf">ZFS Pool Corruption Issue</a></li>
</ul>

### Legacy TrueNAS

{{< expand "TrueNAS 11.3" "v" >}}
<a href="https://www.truenas.com/docs/files/TrueNAS-11.3-U5-User-Guide.pdf">TrueNAS 11.3</a></li>

11.3 Release Notes:
* [11.3-U5]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U5" >}})
* [11.3-U4.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U4.1" >}})
* [11.3-U3.2]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U3.2" >}})
* [11.3-U2.2]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U2.2" >}})
* [11.3-U2.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U2.1" >}})
* [11.3-U2]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3U2" >}})
* [11.3-RC1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.3/11.3RC1" >}})

{{< /expand >}}
{{< expand "TrueNAS 11.2" "v" >}}

<a href="https://www.ixsystems.com/documentation/truenas/11.2-U8-legacy/TrueNAS-11.2-U8-Legacy-User-Guide_screen.pdf">TrueNAS 11.2</a>

11.2 Release Notes:
* [11.2-U8.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U8.1" >}})
* [11.2-U8]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U8" >}})
* [11.2-U7]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U7" >}})
* [11.2-U6.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U6.1" >}})
* [11.2-U6]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U6" >}})
* [11.2-U5.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U5.1" >}})
* [11.2-U5]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.2/11.2U5" >}})

{{< /expand >}}
{{< expand "TrueNAS 11.1" "v" >}}

<a href="https://www.ixsystems.com/documentation/truenas/11.1/TrueNAS.pdf">TrueNAS 11.1</a>

11.1 Release Notes:
* [11.1-U7.1]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U7.1" >}})
* [11.1-U7]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U7" >}})
* [11.1-U6.3]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U6.3" >}})
* [11.1-U6.2]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U6.2" >}})
* [11.1-U6]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U6" >}})
* [11.1-U5]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U5" >}})
* [11.1-U4]({{< ref "/_archive/COREReleaseNotes/TrueNAS/11.1/11.1U4" >}})
{{< /expand >}}

Notices:
<ul>
  <li><a href="https://www.truenas.com/docs/files/NoticeMicrosoftLDAPDefaults2020.pdf">Microsoft LDAP Defaults 2020</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeRecommendedZFSUpdate.pdf">Recommended ZFS Update</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeZFSPoolCorruptionIssue.pdf">ZFS Pool Corruption Issue</a></li>
</ul>
