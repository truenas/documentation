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
  * [TrueNAS EULA]({{< relref "SCALEEULA" >}})
  * [Software Development Life Cycle]({{< relref "/SCALE/GettingStarted/UserAgreements/SoftwareDevelopmentLifeCycleSCALE" >}})
  * [TrueNAS Data Collection Statement]({{< relref "/SCALE/GettingStarted/UserAgreements/DataCollectionStatement" >}})
* [Installation Instructions]({{< relref "/SCALE/GettingStarted/Install" >}})
  * [Preparing for UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise" >}})
  * [Installing]({{< relref "InstallingSCALE" >}})
  * [Using the Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE" >}})
* [Migrating Instructions]({{< relref "/SCALE/GettingStarted/Migrate" >}})
  * [Migrating from TrueNAS 13.0]({{< relref "/SCALE/GettingStarted/Migrate/MigratingFromCORE" >}})
* [Configuration Instructions]({{< relref "/SCALE/GettingStarted/Configure" >}})
  * [First Time Login]({{< relref "FirstTimeLogin" >}})
  * [Configuring using the UI]({{< relref "UIConfigurationSCALE" >}})
  * [Setting Up Storage]({{< relref "SetUpStorageSCALE" >}})
  * [Setting Up Data Sharing]({{< relref "SetUpSharing" >}})
  * [Backing Up TrueNAS]({{< relref "SetUpBackupSCALE" >}})
  * [Configuring Virtualization and Apps]({{< relref "VMandAppConfigSCALE" >}})
{{< /enterprise >}}

</div>
