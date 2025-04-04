---
title: "Getting Started"
description: "This guide provides step-by-step tutorials to install and configure SCALE. An additional guide shows how to apply and configure SCALE Enterprise licensed systems."
geekdocCollapseSection: true
weight: 20
cascade:
  - _target:
    book: "SCALEGettingStarted"
related: false
---

This section guides you through installing TrueNAS SCALE, or migrating from CORE to SCALE, and using the UI to access and configure TrueNAS SCALE.
Configuration includes setting up initial storage, backup, and data sharing, and expanding TrueNAS with different application solutions.

{{< hint type=tip >}}
The [SCALE Evaluation Guide](https://www.truenas.com/evaluating-truenas-scale/) also provides video tutorials for installing and exploring the full potential of TrueNAS SCALE.
{{< /hint >}}

<div class="noprint">

## TrueNAS SCALE Getting Started Contents

{{< children depth="1" description="true" >}}

## Enterprise Deployment Guide

{{< enterprise >}}
This Table of Contents is a specific article arrangement that guides deploying TrueNAS Enterprise hardware purchased from iXsystems, inc.

* [User Agreements]({{< ref "/GettingStarted/UserAgreements/" >}})
  * [TrueNAS SCALE EULA]({{< ref "SCALEEULA" >}})
  * [Software Development Life Cycle]({{< ref "/GettingStarted/UserAgreements/SoftwareDevelopmentLifeCycleSCALE" >}})
  * [TrueNAS Data Collection Statement]({{< ref "/GettingStarted/UserAgreements/DataCollectionStatement" >}})
* [Installation Instructions]({{< ref "/GettingStarted/Install/" >}})
  * [Preparing for SCALE UI Configuration (Enterprise)]({{< ref "InstallPrepEnterprise" >}})
  * [Installing SCALE]({{< ref "InstallingSCALE" >}})
  * [Using the Console Setup Menu]({{< ref "ConsoleSetupMenuSCALE" >}})
* [Migrating Instructions]({{< ref "/GettingStarted/Migrate/" >}})
  * [Migrating from TrueNAS CORE]({{< ref "/GettingStarted/Migrate/MigratingFromCORE" >}})
* [Configuration Instructions]({{< ref "/GettingStarted/Configure/" >}})
  * [First Time Login]({{< ref "FirstTimeLogin" >}})
  * [Configuring SCALE Using the UI]({{< ref "UIConfigurationSCALE" >}})
  * [Setting Up Storage]({{< ref "SetUpStorageSCALE" >}})
  * [Setting Up Data Sharing]({{< ref "SetUpSharing" >}})
  * [Backing Up TrueNAS]({{< ref "SetUpBackupSCALE" >}})
  * [Configuring Virtualization and Apps in TrueNAS SCALE]({{< ref "VMandAppConfigSCALE" >}})
{{< /enterprise >}}

</div>
