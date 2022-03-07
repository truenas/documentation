---
title: "Update"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

TrueNAS has several software branches (linear update paths) known as trains. SCALE is currently a Prerelease Train. Prerelease Trains have various preview/early build releases of the software. 

SCALE has several trains available for updates. However, the web interface only displays trains you can select as an upgrade. For more information on other available trains, see [Truenas Upgrades](https://www.truenas.com/docs/truenasupgrades/).

{{< hint danger >}}
**TrueNAS SCALE train is not suited for production use. Only use SCALE for testing.**

Before using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports at https://jira.ixsystems.com.
{{< /hint >}}


The TrueNAS SCALE Update screen lets users update their system using two different methods.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc). Most updates require a system reboot. 

Update during scheduled maintenance times to avoid disrupting user activities.


![UpdateSCALE](/images/SCALE/UpdateScale.png "Update SCALE")

## Automatic

Set the *Check for Updates Daily and Download if Available* box to automatically download updates.  

If an update is available, you can click *Apply Pending Update* to install it.

## Manual

Download the [SCALE Manual Update File](https://www.truenas.com/download-truenas-scale/).

To manually update TrueNAS, click **Install Manual Update File** and save your configuration.

![ManualUpdateSCALE](/images/SCALE/ManualUpdateSCALE.png "Manually Update SCALE")

Select a temporary location to store the update file and click **Choose File**. Select the <file>.iso</file> you want to upgrade to and click **Apply Update**.
