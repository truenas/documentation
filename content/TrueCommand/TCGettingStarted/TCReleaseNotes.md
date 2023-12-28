---
title: Development Notes
description: "Notes about the latest TrueCommand development."
weight: 5
aliases:
  - /truecommand/tcreleasenotes/2.2
  - /releasenotes/truecommand/2.1.1/
  - /releasenotes/truecommand/2.1/
  - /truecommand/tcreleasenotes/
---

{{< hint type=tip title="Content Reworked" >}}
This article is reworked to track the latest developments and early unstable TrueCommand releases.
Go here for the [latest stable release notes](https://www.truenas.com/docs/truecommand/3.0/tcgettingstarted/tcreleasenotes/).
{{< /hint >}}

TrueCommand offers experimental builds and unstable early releases of the latest development effort for adventerous users who wish to experiment with in-development features.
**These builds are offered "as-is" and are meant only for development previews and experimentation.**

TrueCommand stable versions are available as two methods: [TrueCommand Cloud](https://portal.ixsystems.com) and [self-hosted containers with a specific release tag](https://hub.docker.com/r/ixsystems/truecommand/tags).

## Deploying Latest Development Builds

To deploy the latest TrueCommand development build as a self-hosted container, use this `docker` command:
{{< cli >}}docker run --detach -v “/*hostdir*:/data” -p port:*80* -p ssl:*443* ghcr.io/ixsystems/truecommand:latest{{< /cli >}}

Where *hostdir* is a directory on the host machine for Docker container data, *80* is the TrueCommand web interface port number, and *443* is the port number for secure web interface access.

For detailed deployment steps and requirements, see the full [Installing the TrueCommand Container article]({{< relref "InstallTCDocker.md" >}}).

## Release Schedule

{{< include file="/content/_includes/ReleaseScheduleWarning.md" >}}

{{< releaselist name=tc-releases >}}

## Development Notes

Check this space periodically for notes about the newest changes!
