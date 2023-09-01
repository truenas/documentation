---
title: "TrueCommand Update Options"
description: "Descriptions of the various requirements and methods for updating TrueCommand."
weight: 15
---

{{< toc >}}

## Minimum Supported TrueNAS Versions

Due to the changes in integrating with the TrueNAS middleware, the minimum version for full-support of functionality has changed with TrueCommand 2.1:

* FreeNAS/TrueNAS 11.3 series - No longer supported. Does not provide realtime statistics or storage information, but you can still connect to them and use TrueCommand to initiate updates.
* TrueNAS 12 CORE/Enterprise - Supported after 12.0-U3. 12.0-U2.1 and older are missing some key metrics in the realtime stats (disk/network usage metrics in particular), but work otherwise.
* TrueNAS SCALE 21.03+ - Fully Supported (SCALE-20.12+ is supported excluding cluster functionality)

## Release Downloads

Login to the [TrueCommand Account Portal](https://portal.ixsystems.com) for downloads, documentation links, and licensing options.
For storage clusters with more than 50 disks, the account portal also offers a *free 60-day trial license with unlimited disks*.

## Release Updates

{{< hint type=note >}}
**Prior To Updating**
 
As a best practice, TrueCommand admins should backup their instance's data directory before deploying TrueCommand updates. If issues arise after updating, admins can simply pull the previous TC docker image and redeploy with their previous data directory. 
{{< /hint >}}

{{< hint type=important >}}
**Important Note for Upgrading from v1.3**
 
Updating from TrueCommand v1.3 to v2.0 or newer involves a database migration process. This preserves all configuration data, but does not preserve old performance statistics.
Additionally, it is not possible to roll back to TrueCommand v1.3 from v2.1. Please use caution when upgrading production TrueCommand systems. If necessary, run TrueCommand 1.3 and TrueCommand 2.1 in parallel for a transition period. Simply use the "ixsystems/truecommand:1.3.2" docker image to continue using that specific version of TrueCommand.
{{< /hint >}}
 
**Docker:** Re-run `docker pull ixsystems/truecommand` to fetch the latest version of TrueCommand, and then restart your docker instance.
**Cloud Deployments:** iXsystems coordinates a time when cloud based deployments update to the latest version.

## Nightly Docker Images

Nightly images for TrueCommand are built every 24 hours.
These images are automatically pushed to the “nightly” tag on DockerHub if they pass the automated QA testing procedure.

Download information:

* [DockerHub](https://hub.docker.com/r/ixsystems/truecommand)
* [Example in Documentation]({{< relref "/TCGettingStarted/Install/_index.md" >}}), replace “latest” with “nightly” in the docker pull commands.

### Current Status

The nightly images are always considered a “work-in-progress” toward the next release of TrueCommand.
They should be suitable for adventurous users and developers who are not afraid of diagnosing issues and opening up bug reports with the TrueCommand developers.

Ticket Tracker: [Jira](https://ixsystems.atlassian.net/projects/TC)

