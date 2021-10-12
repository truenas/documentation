---
title: "Update"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

The TrueNAS SCALE Update screen lets users update their system using two different methods.

We recommend updating TrueNAS when the system is idle (no clients connected, no disk activity, etc). Most updates require a system reboot. 

Update during scheduled maintenance times to avoid disrupting user activities.

{{< hint danger >}}
**TrueNAS SCALE is not currently on a production release. Only use SCALE for testing.**
{{< /hint >}}

![UpdateSCALE](/images/SCALE/UpdateSCALE.png "Update SCALE")

## Automatic

Set the *Check for Updates Daily and Download if Available* box to automatically download updates.  

If an update is available, you can click *Apply Pending Update* to install it.

## Manual

If you want to update TrueNAS manually, click *Install Manual Update File*. TrueNAS will prompt you to save your current configuration before you continue.

![ManualUpdateSCALE](/images/SCALE/ManualUpdateSCALE.png "Manually Update SCALE")

Select a temporary location to store the update file and click *Choose File*. Select the <file>.iso<file> you want to upgrade to and click *Apply Update*.

TrueNAS SCALE update files can be found [here](https://www.truenas.com/download-tn-scale).
