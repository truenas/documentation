---
title: "Documentation Archive"
aliases:
  - /additional-topics/legacy/fn-legacy-docs/release-notes/fn-11.3-u2/
  - /core/notices/scrubresilveradjustments/
  - /releasenotes/scale/22.02.1/
  - /releasenotes/scale/22.02.0.1/
  - /releasenotes/scale/22.02.0/
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
---

Welcome to the Documentation Archive!

{{< toc >}}

{{< hint warning >}}
All documentation provided here is end-of-life (EoL) and no longer receives *any* updates.
{{< /hint >}}

## TrueNAS SCALE

{{< expand "TrueNAS SCALE 22.02 (Angelfish)" "v" >}}
Release notes for each minor release of 22.02 Angelfish are included in the archived docs.
<a href="https://www.truenas.com/docs/files/SCALE22.02Docs.pdf">TrueNAS CORE 12.0</a>
{{< /expand >}}

## TrueNAS CORE

{{< hint warning >}}
**12.0 NVDIMM Alert**

Some TrueNAS M-Series systems installed with 12.0 releases with some 16GB 2666mhz NVDIMMs can see an alert that warns the NVDIMM firmware is out of date:

![NvdimmFirmwareAlert](/images/CORE/NvdimmFirmwareAlert.png "NVDIMM Firmware Alert")

This can be a false positive that has been fixed in TrueNAS 13.0-U1 (see [NAS-116986](https://ixsystems.atlassian.net/browse/NAS-116986)).
Upgrading to an Enterprise-recommended release of TrueNAS CORE 13.0 resolves this alert.
To help determine if the deployment is ready to upgrade to TrueNAS CORE 13.0, please refer to the current TrueNAS [Software Status](https://www.truenas.com/software-status/) and, when your use case matches a recommended 13.0 release, contact iXsystems Support to schedule an upgrade.
{{< expand "iX Support (click to expand)" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" >}}
{{< /expand >}}
{{< /hint >}}

{{< expand "TrueNAS CORE 12.0" "v" >}}

<a href="https://www.truenas.com/docs/files/CORE12.0Docs.pdf">TrueNAS CORE 12.0</a>

Release Notes:
* [12.0-U8.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U8.1.md" >}})
* [12.0-U8]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U8.md" >}})
* [12.0-U7]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U7.md" >}})
* [12.0-U6.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U6.1.md" >}})
* [12.0-U6]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U6.md" >}})
* [12.0-U5.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U5.1.md" >}})
* [12.0-U5]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U5.md" >}})
* [12.0-U4.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U4.1.md" >}})
* [12.0-U4]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U4.md" >}})
* [12.0-U3.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U3.1.md" >}})
* [12.0-U3]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U3.md" >}})
* [12.0-U2.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U2.1.md" >}})
* [12.0-U2]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U2.md" >}})
* [12.0-U1.1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U1.1.md" >}})
* [12.0-U1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0U1.md" >}})
* [12.0-Release]({{< ref "/_includes/COREReleaseNotes/12.0/12.0Release.md" >}})
* [12.0-RC1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0RC1.md" >}})
* [12.0-BETA2]({{< ref "/_includes/COREReleaseNotes/12.0/12.0Beta2.md" >}})
* [12.0-BETA1]({{< ref "/_includes/COREReleaseNotes/12.0/12.0Beta1.md" >}})

<a href="https://www.truenas.com/docs/files/NoticePersistentL2ARCinTrueNAS12.0.pdf">Notice - Persistent L2ARC in TrueNAS 12.0</a>
{{< /expand >}}

## TrueCommand

{{< expand "TrueCommand 2.x" "v" >}}

<a href="https://www.truenas.com/docs/files/TC2.1Docs.pdf">TrueCommand 2.1</a>

<a href="https://www.truenas.com/docs/files/TrueCommand2.0Documentation.pdf">TrueCommand 2.0</a>

* Release Notes:
  * [2.0]({{< ref "/_includes/TCReleaseNotes/2.0.md" >}})
  * [2.0-BETA]({{< ref "/_includes/TCReleaseNotes/2.0-Beta.md" >}})


{{< /expand >}}
{{< expand "TrueCommand 1.x" "v" >}}

<a href="https://www.truenas.com/docs/files/TrueCommand1.3Docs.pdf">TrueCommand 1.3</a>

Release Notes:
* [1.3.2]({{< ref "/_includes/TCReleaseNotes/1.3.2.md" >}})
* [1.3.1]({{< ref "/_includes/TCReleaseNotes/1.3.1.md" >}})
* [1.3]({{< ref "/_includes/TCReleaseNotes/1.3.md" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.2/TrueCommand-Guide-1.2_screen.pdf">TrueCommand 1.2</a>

Release Notes:
* [1.2.3 Release Notes]({{< ref "/_includes/TCReleaseNotes/1.2.3.md" >}})
* [1.2.2 Release Notes]({{< ref "/_includes/TCReleaseNotes/1.2.2.md" >}})
* [1.2.1 Release Notes]({{< ref "/_includes/TCReleaseNotes/1.2.1.md" >}})
* [1.2 Release Notes]({{< ref "/_includes/TCReleaseNotes/1.2.md" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.1/TrueCommand-Guide-1.1_screen.pdf">TrueCommand 1.1</a>

[1.1 Release Notes]({{< ref "/_includes/TCReleaseNotes/1.1.md" >}})

<a href="https://www.ixsystems.com/documentation/truecommand/1.0/TrueCommand-Guide-1.0-RELEASE.pdf">TrueCommand 1.0</a>

Release Notes:
* [1.0U1]({{< ref "/_includes/TCReleaseNotes/1.0U1.md" >}})
* [1.0]({{< ref "/_includes/TCReleaseNotes/1.0.md" >}})

{{< /expand >}}

## Legacy Documentation

The documentation, release notes, and notices provided in this section follow the major and minor releases of the previous FreeNAS and TrueNAS projects, before their unification under the TrueNAS name.
At that time, FreeNAS published first and TrueNAS followed later in the FreeNAS lifecycle with occasional simultaneous releases.
TrueNAS releases took all the FreeNAS changes up to that point and added a few Enterprise feature-specific (High Availability) changes.

### Legacy FreeNAS

{{< expand "FreeNAS 11.3" "v" >}}
<a href="https://www.ixsystems.com/documentation/freenas/11.3-U5/FreeNAS-11.3-U5-User-Guide_screen.pdf">FreeNAS 11.3</a>

11.3 Release Notes:
* [11.3-U5]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U5.md" >}})
* [11.3-U4]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U4.md" >}})
* [11.3-U3.2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U3.2.md" >}})
* [11.3-U3.1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U3.1.md" >}})
* [11.3-U3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U3.md" >}})
* [11.3-U2.1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U2.1.md" >}})
* [11.3-U2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U2.md" >}})
* [11.3-U1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3U1.md" >}})
* [11.3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3.md" >}})
* [11.3-RC2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3RC2.md" >}})
* [11.3-RC1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3RC1.md" >}})
* [11.3-BETA1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.3/11.3Beta1.md" >}})

{{< /expand >}}
{{< expand "FreeNAS 11.2" "v" >}}

<a href="https://www.ixsystems.com/documentation/freenas/11.2-U8/FreeNAS-11.2-U8-User-Guide_screen.pdf">FreeNAS 11.2 (New GUI)</a>
<a href="https://www.ixsystems.com/documentation/freenas/11.2-U8-legacy/FreeNAS-11.2-U8-Legacy-User-Guide_screen.pdf">FreeNAS 11.2 (Legacy GUI)</a>

11.2 Release Notes:
* [11.2-U8]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U8.md" >}})
* [11.2-U7]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U7.md" >}})
* [11.2-U6]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U6.md" >}})
* [11.2-U5]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U5.md" >}})
* [11.2-U4.1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U4.1.md" >}})
* [11.2-U4]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U4.md" >}})
* [11.2-U3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U3.md" >}})
* [11.2-U2.1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U2.1.md" >}})
* [11.2-U2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U2.md" >}})
* [11.2-U1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2U1.md" >}})
* [11.2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2.md" >}})
* [11.2-RC2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2RC2.md" >}})
* [11.2-RC1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2RC1.md" >}})
* [11.2-BETA3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2Beta3.md" >}})
* [11.2-BETA2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2Beta2.md" >}})
* [11.2-BETA1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.2/11.2Beta1.md" >}})

{{< /expand >}}
{{< expand "FreeNAS 11.1" "v" >}}

<a href="https://www.ixsystems.com/documentation/freenas/11.1/FreeNAS.pdf">FreeNAS 11.1</a>

11.1 Release Notes:
* [11.1-U7]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U7.md" >}})
* [11.1-U6.3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U6.3.md" >}})
* [11.1-U6]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U6.md" >}})
* [11.1-U5]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U5.md" >}})
* [11.1-U4]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U4.md" >}})
* [11.1-U3]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U3.md" >}})
* [11.1-U2]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U2.md" >}})
* [11.1-U1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1U1.md" >}})
* [11.1]({{< ref "/_includes/COREReleaseNotes/FreeNAS/11.1/11.1.md" >}})

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

{{< expand "TrueNAS CORE 11.3" "v" >}}
<a href="https://www.truenas.com/docs/files/TrueNAS-11.3-U5-User-Guide.pdf">TrueNAS CORE 11.3</a></li>

11.3 Release Notes:
* [11.3-U5]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U5.md" >}})
* [11.3-U4.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U4.1.md" >}})
* [11.3-U3.2]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U3.2.md" >}})
* [11.3-U2.2]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U2.2" >}})
* [11.3-U2.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U2.1.md" >}})
* [11.3-U2]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3U2.md" >}})
* [11.3-RC1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.3/11.3RC1.md" >}})

{{< /expand >}}
{{< expand "TrueNAS CORE 11.2" "v" >}}

<a href="https://www.ixsystems.com/documentation/truenas/11.2-U8-legacy/TrueNAS-11.2-U8-Legacy-User-Guide_screen.pdf">TrueNAS CORE 11.2</a>

11.2 Release Notes:
* [11.2-U8.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U8.1.md" >}})
* [11.2-U8]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U8.md" >}})
* [11.2-U7]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U7.md" >}})
* [11.2-U6.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U6.1.md" >}})
* [11.2-U6]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U6.md" >}})
* [11.2-U5.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U5.1.md" >}})
* [11.2-U5]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.2/11.2U5.md" >}})

{{< /expand >}}
{{< expand "TrueNAS CORE 11.1" "v" >}}

<a href="https://www.ixsystems.com/documentation/truenas/11.1/TrueNAS.pdf">TrueNAS CORE 11.1</a>

11.1 Release Notes:
* [11.1-U7.1]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U7.1.md" >}})
* [11.1-U7]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U7.md" >}})
* [11.1-U6.3]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U6.3.md" >}})
* [11.1-U6.2]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U6.2.md" >}})
* [11.1-U6]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U6.md" >}})
* [11.1-U5]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U5.md" >}})
* [11.1-U4]({{< ref "/_includes/COREReleaseNotes/TrueNAS/11.1/11.1U4.md" >}})
{{< /expand >}}

Notices:
<ul>
  <li><a href="https://www.truenas.com/docs/files/NoticeMicrosoftLDAPDefaults2020.pdf">Microsoft LDAP Defaults 2020</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeRecommendedZFSUpdate.pdf">Recommended ZFS Update</a></li>
  <li><a href="https://www.truenas.com/docs/files/NoticeZFSPoolCorruptionIssue.pdf">ZFS Pool Corruption Issue</a></li>
</ul>


