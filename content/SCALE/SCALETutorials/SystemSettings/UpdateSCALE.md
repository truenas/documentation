---
title: "Updating SCALE"
description: "This article provides instructions on how to update SCALE releases in the UI."
weight: 10
alias: /scale/scaleuireference/systemsettings/updatescale/
tags:
- scaleupdate
---

{{< toc >}}

TrueNAS has several software branches (linear update paths) known as trains. SCALE is currently a Prerelease Train. Prerelease Trains have various preview/early build releases of the software. 

SCALE has several trains available for updates. However, the web interface only displays trains you can select as an upgrade. To view a list of the available trains, click on the arrow to the right of your current train.

![ListUpdateTrainSCALE](/images/SCALE/22.02/ScaleTrainSelection.png "Access SCALE Update Trains")

For more information on other available trains, see [TrueNAS Upgrades](https://www.truenas.com/docs/truenasupgrades/).

{{< hint type=warning >}}
See the [Software Status page](https://www.truenas.com/software-status/) for the latest recommendations for software usage.
Bluefin and Nightlies are non-production trains.
If you are using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports and debug files at https://github.com/truenas/documentation/pull/1809/files#diff-ec4462e55ad21a92f5368a10510591a6ae7fe1ed297916798828c05f752ff25fR24.
{{< /hint >}}

The TrueNAS SCALE **Update** screen lets users update their system using two different methods: manual or automatic.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc). Most updates require a system reboot. 

Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint type=important >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues. We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

![UpdateTrainSCALE](/images/SCALE/22.02/ScaleUpdateTrain.png "SCALE Update Train")

## Automatic

Select the **Check for Updates Daily and Download if Available** option to automatically download updates.  

If an update is available, click **Apply Pending Update** to install it.

## Manual

To do a manual update, click **Download Updates** and wait for the file to download to your system. 

Download the [SCALE Manual Update File](https://www.truenas.com/download-truenas-scale/).

To manually update TrueNAS, click **Install Manual Update File** and save your configuration.

![ManualUpdateSCALE](/images/SCALE/ManualUpdateSCALE.png "Manually Update SCALE")

Select a temporary location to store the update file and click **Choose File**. Select the <file>.iso</file> you want to upgrade to and click **Apply Update**.

## Updating Pools

After updating, you might find that you can update your storage pools and boot-pool to enable some supported and requested features that are not enabled on the pool.

Go to **System Settings > Shell** and enter `zpool status` to show which pools you can update.

![BootPoolUpgradeStatus](/images/SCALE/22.12/BootPoolUpgradeStatus.png "Boot-pool Status")

To update the pools, enter <code>zpool upgrade <i>poolname</i></code>, where *poolname* is the name of the storage pool or boot-pool you want to update.

{{< hint type=important >}}
Upgrading pools is a one-way operation. After upgrading pools to the latest zfs features, you might not be able to boot into older versions of TrueNAS.
{{< /hint >}}

{{< taglist tag="scaleupdate" limit="10" >}}
