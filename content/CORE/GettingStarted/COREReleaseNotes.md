---
title: Nightly Version Notes
description: "Highlights and change log for the next major version of TrueNAS CORE."
weight: 3
aliases:
  - /releasenotes/core/13.0beta1/
  - /releasenotes/core/13.0rc1/
  - /releasenotes/core/
  - /core/corereleasenotes/
related: false
---

{{< toc >}}

{{< hint type="tip" >}}
This page is being rebuilt with notes from the latest TrueNAS CORE **nightly** development versions.
The latest [TrueNAS CORE **13.0** version release notes](https://www.truenas.com/docs/core/13.0/gettingstarted/corereleasenotes/) are now available from the TrueNAS CORE 13.0 documentation section.
Release notes for all the latest major versions are also linked from the [Docs Hub Home](/)
{{< /hint >}}

## Software Lifecycle

{{< include file="/static/includes/General/LifecycleTable.html.part" html="true" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" >}}

## Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< truetable >}}
| Version | Checkpoint         | Scheduled Date       |
|---------|--------------------|----------------------|
| 13.0-U6 | **Release**        | **21 November 2023** |
| 13.1-BETA | Code Freeze      | TBD                  |
| 13.1-BETA | Internal Testing | TBD                  |
| 13.1-BETA | Tag              | TBD                  |
| 13.1-BETA | Release          | TBD                  |
{{< /truetable >}}

## Nightly Development Notes

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and scheduled for removal in CORE 13.1.
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should plan to [migrate to a separately maintained Minio plugin](http://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/) or otherwise move any production data away from the S3 service storage location before upgrading to a 13.1 pre-release version.
  See also [Feature Deprecations]({{< relref "Deprecations.md" >}}).
