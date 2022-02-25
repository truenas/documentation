---
title: "Update"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

TrueNAS defines software branches, known as trains.
There are several trains available for updates, but the web interface only displays trains that can be selected as an upgrade.

Update trains are labeled with a numeric version followed by a short description.
The current version receives regular bug fixes and new features.
Supported older versions of TrueNAS only receive maintenance updates.
See the [Software Development Life Cycle]({{< relref "SofDevLifecycle.md" >}}) for more details about the development and support timeline for TrueNAS versions.

Several specific words are used to describe the type of train:

**STABLE**: Bug fixes and new features are available from this train. Upgrades available from a STABLE train are tested and ready to apply to a production environment.

**Nightlies**: Experimental train used for testing future versions of TrueNAS.

**SDK**: Software Developer Kit train. This has additional tools for testing and debugging TrueNAS.

{{< hint warning >}}
The UI shows a warning when the currently selected train is not suited for production use.
Before using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports at https://jira.ixsystems.com.
{{< /hint >}}


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

To manually update TrueNAS, click **Install Manual Update File** and save your configuration.

![ManualUpdateSCALE](/images/SCALE/ManualUpdateSCALE.png "Manually Update SCALE")

Select a temporary location to store the update file and click **Choose File**. Select the <file>.iso</file> you want to upgrade to and click **Apply Update**.

TrueNAS SCALE update files can be found [here](https://www.truenas.com/download-tn-scale).
