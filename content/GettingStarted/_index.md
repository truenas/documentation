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

* [User Agreements]({{< ref "/GettingStarted/UserAgreements" >}})
  * [TrueNAS EULA]({{< ref "SCALEEULA" >}})
  * [Software Development Life Cycle]({{< ref "/GettingStarted/UserAgreements/SoftwareDevelopmentLifeCycleSCALE" >}})
  * [TrueNAS Data Collection Statement]({{< ref "/GettingStarted/UserAgreements/DataCollectionStatement" >}})
* [Installation Instructions]({{< ref "/GettingStarted/Install" >}})
  * [Preparing for UI Configuration (Enterprise)]({{< ref "InstallPrepEnterprise" >}})
  * [Installing]({{< ref "InstallingSCALE" >}})
  * [Using the Console Setup Menu]({{< ref "ConsoleSetupMenuSCALE" >}})
* [Migrating Instructions]({{< ref "/GettingStarted/Migrate" >}})
  * [Migrating from TrueNAS 13.0]({{< ref "/GettingStarted/Migrate/MigratingFromCORE" >}})
* [Configuration Instructions]({{< ref "/GettingStarted/Configure" >}})
  * [First Time Login]({{< ref "FirstTimeLogin" >}})
  * [Configuring using the UI]({{< ref "UIConfigurationSCALE" >}})
  * [Setting Up Storage]({{< ref "SetUpStorageSCALE" >}})
  * [Setting Up Data Sharing]({{< ref "SetUpSharing" >}})
  * [Backing Up TrueNAS]({{< ref "SetUpBackupSCALE" >}})
  * [Configuring Virtualization and Apps]({{< ref "VMandAppConfigSCALE" >}})
{{< /enterprise >}}

</div>
