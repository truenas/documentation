---
title: "Updating SCALE"
description: ""
weight: 10
alias: /scale/scaleuireference/systemsettings/updatescale/
tags:
 - scaleupdate
---

{{< toc >}}

TrueNAS has several software branches (linear update paths) known as trains. SCALE is currently a Prerelease Train. Prerelease Trains have various preview/early build releases of the software. 

SCALE has several trains available for updates. However, the web interface only displays trains you can select as an upgrade. To view a list of the available trains, click on the arrow to the right of your current train.

![ListUpdateTrainSCALE](/images/SCALE/22.02/ScaleTrainSelection.png "Access Scale Update Trains")

For more information on other available trains, see [TrueNAS Upgrades](https://www.truenas.com/docs/truenasupgrades/).

{{< hint danger >}}
See the [Software Status page](https://www.truenas.com/software-status/) for the latest recommendations for software usage.
Bluefin and Nightlies are non-production trains.
If you are using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports and debug files at https://jira.ixsystems.com.
{{< /hint >}}

The TrueNAS SCALE **Update** screen lets users update their system using two different methods: manual or automatic.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc). Most updates require a system reboot. 

Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint warning >}}
All auxiliary parameters are subject to change between major versions of TrueNAS due to security and development issues. We recommend removing all auxiliary parameters from TrueNAS configurations before upgrading.
{{< /hint >}}

![UpdateTrainSCALE](/images/SCALE/22.02/ScaleUpdateTrain.png "Scale Update Train")

## Automatic

Select the **Check for Updates Daily and Download if Available** option to automatically download updates.  

If an update is available, click **Apply Pending Update** to install it.

## Manual

To do a manual update, click **Download Updates** and wait for the file to download to your system. 

Download the [SCALE Manual Update File](https://www.truenas.com/download-truenas-scale/).

To manually update TrueNAS, click **Install Manual Update File** and save your configuration.

![ManualUpdateSCALE](/images/SCALE/ManualUpdateSCALE.png "Manually Update SCALE")

Select a temporary location to store the update file and click **Choose File**. Select the <file>.iso</file> you want to upgrade to and click **Apply Update**.

{{< taglist tag="scaleupdate" limit="10" >}}
