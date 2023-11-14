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

## Obtaining a Release

Log in to the web interface and go to **System > Update** to see an option to switch to the nightlies update train and begin downloading the latest unstable development release.

Alternately, to download a <file>.tar</file> file for installing or upgrading to an CORE 13.1 nightly, go to https://www.truenas.com/download-truenas-core/ and click **Download Future Previews**.

More details are available from [Updating Core]({{< relref "/core/coretutorials/updatingtruenas/updatingcore.md" >}}).

{{< expand "Release Schedule (Click to expand)" "v" >}}

## Software Lifecycle

{{< include file="/content/_includes/LifecycleTable.md" >}}

{{< include file="/content/_includes/SoftwareStatusPage.md" >}}

## Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< truetable >}}
| Version    | Checkpoint       | Scheduled Date       |
|------------|------------------|----------------------|
| 13.0-U6    | **Release**      | **21 November 2023** |
| 13.1-ALPHA | Code Freeze      | TBD                  |
| 13.1-ALPHA | Internal Testing | TBD                  |
| 13.1-ALPHA | Tag              | TBD                  |
| 13.1-ALPHA | Release          | TBD                  |
{{< /truetable >}}
{{< /expand >}}

## Nightly Development Notes

* Due to security vulnerabilities and maintainability issues, the S3 service is deprecated in TrueNAS CORE 13.0 and scheduled for removal in CORE 13.1.
  Beginning in CORE 13.0-U6, the CORE web interface generates an alert when the deprecated service is either actively running or is enabled to start on boot.
  Users should plan to migrate to a separately maintained [Minio plugin]({{< relref "MinIOPlugin.md" >}}) or otherwise move any production data away from the S3 service storage location before upgrading to a 13.1 pre-release version.
  See the CORE 13.0 tutorial for [detailed migration instructions](http://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/).
  See also [Feature Deprecations]({{< relref "Deprecations.md" >}}).
