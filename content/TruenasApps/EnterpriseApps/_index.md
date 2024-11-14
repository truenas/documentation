---
title: "Enterprise Apps"
description: "Tutorials for using TrueNAS applications in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 20
aliases: 
 - /scale/scaletutorials/apps/enterpriseapps/enterpriseapplicationsscale/
 - /scale/scaletutorials/apps/
 - /scale/scaletutorials/apps/enterpriseapplicationsscale/
 - /scale/scaletutorials/apps/enterpriseapps/
tags:
keywords:
- enterprise data storage
- nas data storage
- software storage solutions
related: false
---


{{< include file="/static/includes/ProposeArticleChange.md" >}}

{{< include file="/static/includes/SCALEEnterpriseApps.md" >}}

TrueNAS is certified with leading hypervisors and backup solutions to streamline storage operations and ensure compatibility with your existing IT infrastructure.
TrueNAS Enterprise storage appliances deliver a wide range of features and scalability for virtualization and private cloud environments, with the ability to create off-site backups with scheduled sync and replication features.
TrueNAS applications expand the capabilities of your system by adding third-party software but can add significant risk to system stability and security.

Keep these general best practices in mind when using applications with TrueNAS:

{{< expand "App Pool Selection" "v" >}}

{{< include file="/static/includes/apps/AppsPoolOrDataset.md" >}}

{{< /expand >}}

{{< expand "App Dataset and File Sharing" "v" >}}

{{< include file="/static/includes/apps/AppsFileSharing.md" >}}

{{< /expand >}}

{{< expand "Docker Compose Settings" "v" >}}

{{< include file="/static/includes/apps/AppsDockerCompose.md" >}}

{{< /expand >}}

{{< expand "Custom Apps" "v" >}}

{{< include file="/static/includes/apps/CustomAppIntro.md" >}}

{{< include file="/static/includes/apps/AppsCustomApp.md" >}}

{{< /expand >}}

{{< expand "App Directory Services" "v" >}}

{{< include file="/static/includes/apps/AppsDirectoryService.md" >}}

iXsystems Support can assist Enterprise customers with configuring directory service settings in TrueNAS with the [information customers provide]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}), but they do not configure customer Active Directory system settings.

{{< /expand >}}

For more information on configuring general application functions and installation wizard screens, see [TrueNAS Apps]({{< relref "/content/TruenasApps/_index.md" >}}).

## Understanding App Install Wizard Settings

{{< include file="/static/includes/apps/AppsInstallWizardSettings.md" >}}

For information on adding to or changing the train for the apps catalog, see [Managing App Trains]({{< relref "UsingTrains.md" >}}).

<div class="noprint">

## Enterprise Apps Contents

{{< children depth="1" description="true" >}}

</div>
