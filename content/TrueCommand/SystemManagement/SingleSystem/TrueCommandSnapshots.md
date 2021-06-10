---
title: "TrueCommand Snapshots"
weight: 40
---

{{< toc >}}

## View Snapshots

To view a system's already existing snapshots, click *EXPLORE* in that system's window and select a storage pool. Once the pool loads, select the *Snapshots* tab.

![TrueCommandSelectPool](/images/TrueCommand/TrueCommandSelectPool.png "Select a Pool") 

![TrueCommandViewSnapshots](/images/TrueCommand/TrueCommandViewSnapshots.png "View Snapshots")

## Create Single Snapshots

To create single snapshots, select a pool in the system's *EXPLORE* menu and click *CREATE SNAPSHOTS*, then select *Create One-Time Snapshot*.

![TrueCommandCreateOneTimeSnapshot](/images/TrueCommand/TrueCommandCreateOneTimeSnapshot.png "Create One-time Snapshot")

Name the snapshot and click *CONFIRM*.

## Create Recurring Snapshot Tasks

To create recurring snapshot tasks, select a pool in the system's *EXPLORE* menu and click *CREATE SNAPSHOTS*, then select *Create Snapshot Task*.

![TrueCommandCreateSnapshotTask](/images/TrueCommand/TrueCommandCreateSnapshotTask.png "Create Snapshot Task")

Set the task's schedule and determine the snapshot lifetime, then click *CONFIRM*.

## Timezones

When you create snapshot tasks, TrueCommand uses the system the dataset is mounted in to determine what timezone it will use. 

For example, if you are in New York and the dataset is mounted to a system with a Los Angeles timezone, a snapshot task set to occur at 12:00 P.M. will actually occur at 3:00 P.M. your time.

To see what timezone a system is in, go to that system's UI and navigate to **System > General** (**System Settings > General** in SCALE). 

That system's timezone information is in the *Localization* section. Administrators can change the system's timezone using the drop-down menu. 

![TrueCommandTimezone](/images/TrueCommand/TrueCommandTimezone.png "Timezones")
