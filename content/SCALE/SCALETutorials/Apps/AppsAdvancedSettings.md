---
title: "Advanced (Kubernetes) Settings"
description: "Tutorials for using the advanced applications settings that are derived from the Kubernetes implementation in TrueNAS SCALE. Includes notes on configuring host path safety checks."
geekdocCollapseSection: true
weight: 25
aliases:
 - /scale/scaletutorials/apps/customizing-advanced-kubernetes-settings/
 - /scale/scaletutorials/apps/appadvancedsettings/configuring-host-path-safety-checks/
---

{{< toc >}}

The **Kubernetes Settings** screen allows users to customize network, system, and cluster settings for all apps in TrueNAS SCALE.

![AppsAdvancedSettingsKubernetesSettings](/images/SCALE/Apps/AppsAdvancedSettingsKubernetesSettings.png "Apps Advanced Settings")

## Configuring Host Path Validation

TrueNAS SCALE uses host path safety checks to ensure that host path volumes are secure when creating apps. We recommend creating datasets for applications that do not share the same host path as an SMB or NFS share.

Since TrueNAS considers shared host paths non-secure, apps that use shared host paths (such as an SMB shared dataset) fail to deploy.

### Using Shared Host Paths with Safety Checks Enabled

If you group share and application data under a common dataset (such as *media*) where both use a path such as */tank/media/*, the application fails to deploy.

You can still group shares and applications under *media*, but you must alter the path for shares and apps, such as */tank/media-shares* or */tank/media/shares/sharename*, and */tank/media-apps* or */tank/media/apps/appname*.

The paths differ enough to use host path validation and avoid issues that prevent application deployment.

### Using Shared Host Paths with Safety Checks Disabled

{{< hint type=important >}}
We do not recommend disabling host path safety checks since shared host paths are non-secure.
{{< /hint >}}

If you want apps to deploy in a shared host path, disable **Enable Host Path Safety Checks**.

Disabling host path safety checks might be helpful if you intend to have an app running in a shared dataset. For example, if you have apps that perform virus detection or media management and want them to work on files in your shared dataset.
