---
title: "Updating SCALE"
description: "Provides instructions on how to update SCALE releases in the UI."
weight: 10
alias:
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

## Upgrading when Apps are Deployed
If upgrading from Bluefin to Cobia when applications are deployed, the upgrade is a one-way operation.

You cannot return to or roll back to an earlier SCALE release by simply activating an earlier release boot environment.
You also cannot easily roll back app on-disk data after updating the structure to Cobia. 
After upgrading to Cobia, deployed apps do not work in the earlier release boot environment because the path to ***system dataset*/ix-applications/docker** does not exist in Cobia and is removed from the earlier release as a result of the upgrade. 

To rollback to an earlier SCALE release and bring your applications back online, before you upgrade to Cobia you must have snapshots of all datasets apps use, then create and run replication tasks to back up those snapshots. 
After upgrading you use these backed up snapshots and replication tasks to restore the early release to a state where you can get apps running again. 

You need pre-upgrade snapshots of the **ix-applications** dataset and a recursive snapshot of **ix-applications** to get the **docker** dataset, and then snapshots of all datasets apps use as host paths.
Without these snapshots, to downgrade to Bluefin requires deleting the app(s) and redeploying it/them. 

Replication tasks should copy the snapshots to a remote server used for backups of your data. 
If you do not have a remote server to store backed up snapshots, you can create a new pool and dataset on the system but this is not recommended or best practices.

When you rollback the local server, copy the snapshots from the remote server to the local server but do not save the snapshots in the **ix-applications** dataset. Create a new dataset on the same pool as the **ix-applications** dataset (the pool apps use).

### Before Upgrading

1. Verify your Bluefin apps are running (not stopped or in the deploying state), and that you have access to your data and the application web portals. 

2. Create and run a replication tasks to a remote server. 
   See [Setting Up a Remote Replication Task]({{< relref "RemoteReplicationSCALE.md" >}}) for more information. 
   Before upgrading to Cobia create and run replicated snapshots for:

   * The **ix-applications** dataset to restore the migration json files to the earlier version.
   * A recursive replication of the **ix-applications** dataset to see the docker snapshot.
   * Snapshots of any datasets apps use for storage, such as the MinIO app **data** dataset.

   If a Bluefin apps uses host path(s) to existing datasets, such as with the MinIO and the **/data** dataset, create and run remote replication tasks for these datasets. 
   If you nested these datasets for apps under a parent dataset, set up a recursive remote replication of the parent dataset to create the snapshots of all the nested child datasets the apps use.

3. Upgrade to Cobia and save the configuration file. This is always recommended so you can restore your system configuration if necessary.

### Rolling Back to SCALE Bluefin
Do not replicate the snapshot back to the **ix-applications** dataset! 
Create a dataset or use an existing dataset on the same pool as the **ix-applications** dataset to hold these snapshots. 

1. Select the earlier release boot environment, make it the active boot environment, then reboot the system. 
   See [Managing Boot Environments]({{< relref "ManageBootEnvironSCALE.md" >}}) for more information.

2. Go to the remote system and create and run a replication task to copy the snapshots back to the system you rolled back to an earlier SCALE release. 
   Alternatively, you can create a **Pull** replication task on the rolled-back system to bring the snapshots from the remote system to the local system. 

   Replicate each snapshot: the **ix-applications**, **ix-applications/docker**, and all snapshots of datasets set up as host paths in an application.
   
   If moving a snapshot from a different pool on the same server, replicate to a dataset on the same pool as the **ix-applications** dataset (for example, *tank/repsnaps* if **ix-applications** is in the *tank* pool). 
 
3. Go to the location of the snapshots, then:
   
   a. Roll back to the **ix-applications** snapshot taken before the upgrade. This updates the migration json files to the pre-upgrade version of the files.

   b. Locate the **ix-applications/docker** snapshot, click on it to expand it, then click **Clone to Dataset**. 
      Rename the dataset to ***poolname*/ix-applications/docker** to create the missing **docker** dataset from this snapshot.

   c. Roll back the snapshots for any dataset used as a host path in an application to the snapshots taken before the upgrade.

4. Go to **Shell** or open an SSH session and verify the docker dataset exists. Enter:

   <code>
   cd /mnt/<i>poolname</i>/ix-applications

   ls
   </code>

   Where *poolname* is the name of the pool assigned as the pool for applications to use and with the **ix-applications** dataset.

   The command output should now show the docker dataset.

5. Reboot the system.

The applications should now show on the **Applications > Installed Applications** screen. It takes a while for apps to return to the **Active** state.

After doing the above, if the applications do not show on the **Installed Applications** screen, either open an SSH session or go to **Shell** and run the command to remove the app_migrations.json and migrations.json files. Enter at the prompt:

`sudo rm -rf app_migrations.json`

When prompted, enter the admin password. 
Repeat the command for the migrations.json file.

{{< trueimage src="/images/SCALE/22.12/CLICommandToRemoveMigrateJsonFiles.png" alt="Removing the Json Migration Files" id="Removing the Json Migration Files" >}}

Reboot the system, then return to the **Applications > Installed Applications** screen. The applications should show. 
Wait for the apps to return to the **Active** state, then check the web portal for your apps.

{{< taglist tag="scaleupdate" limit="10" >}}
