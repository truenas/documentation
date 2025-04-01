---
title: "Getting Started"
description: "This guide provides step-by-step tutorials to install and configure TrueNAS. An additional guide shows how to apply and configure TrueNAS Enterprise licensed systems."
geekdocCollapseSection: true
weight: 20
cascade:
  - _target:
    book: "SCALEGettingStarted"
related: false
aliases:
 - /hub/gettingstarted/intro/
---

This section guides you through installing TrueNAS, or migrating from a FreeBSD-based TrueNAS version to a Linux-based TrueNAS version, and using the UI to access and configure TrueNAS.
Configuration includes setting up initial storage, backup, and data sharing, and expanding TrueNAS with different application solutions.

{{< hint type=tip >}}
The [Evaluation Guide](https://www.truenas.com/evaluating-truenas-scale/) also provides video tutorials for installing and exploring the full potential of TrueNAS.
{{< /hint >}}

<div class="noprint">

## Contents

{{< children depth="1" description="true" >}}

## Enterprise Deployment Guide

{{< enterprise >}}
This Table of Contents is a specific article arrangement that guides deploying TrueNAS Enterprise hardware purchased from the TrueNAS team.

* [User Agreements]({{< relref "/SCALE/GettingStarted/UserAgreements" >}})
  * [TrueNAS EULA]({{< relref "SCALEEULA.md" >}})
  * [Software Development Life Cycle]({{< relref "/SCALE/GettingStarted/UserAgreements/SoftwareDevelopmentLifeCycleSCALE.md" >}})
  * [TrueNAS Data Collection Statement]({{< relref "/SCALE/GettingStarted/UserAgreements/DataCollectionStatement.md" >}})
* [Installation Instructions]({{< relref "/SCALE/GettingStarted/Install" >}})
  * [Preparing for UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}})
  * [Installing]({{< relref "InstallingSCALE.md" >}})
  * [Using the Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE.md" >}})
* [Migrating Instructions]({{< relref "/SCALE/GettingStarted/Migrate" >}})
  * [Migrating from TrueNAS 13.0]({{< relref "/MigratingFromCORE.md" >}})
* [Configuration Instructions]({{< relref "/SCALE/GettingStarted/Configure" >}})
  * [First Time Login]({{< relref "FirstTimeLogin.md" >}})
  * [Configuring using the UI]({{< relref "UIConfigurationSCALE.md" >}})
  * [Setting Up Storage]({{< relref "SetUpStorageSCALE.md" >}})
  * [Setting Up Data Sharing]({{< relref "SetUpSharing.md" >}})
  * [Backing Up TrueNAS]({{< relref "SetUpBackupSCALE.md" >}})
  * [Configuring Virtualization and Apps]({{< relref "VMandAppConfigSCALE.md" >}})
{{< /enterprise >}}

</div>
