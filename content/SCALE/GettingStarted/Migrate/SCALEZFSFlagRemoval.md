---
title: "ZFS Feature Flags Removed"
description: "This article provides information on the removal of the ZFS feature flag merged into OpenZFS in June 29, 2021."
weight: 40
aliases:
  - /scale/notices/scalezfsflagremoval/
tags:
- scalemigrate
---

**Early testers of TrueNAS SCALE are advised**:

On June 29, 2021, a new feature was merged into the TrueNAS fork of OpenZFS`[1]` for developers to test and integrate with other parts of the system. This feature included a new pool feature flag to signify an on-disk format change to how xattr names are encoded on Linux. This original version of the feature was easily activated by a default pool configuration. We quickly decided that the default configuration should not activate this feature until it is available in upstream OpenZFS, and on July 15 we merged changes`[2]` which make the defaults prevent activation of the new feature.

`[1]`: https://github.com/truenas/zfs/pull/8</br>
`[2]`: https://github.com/truenas/zfs/pull/16

The new feature fixes a long standing issue in ZFS on Linux, which had from its start encoded xattr names in a way that is incompatible with ZFS implementations for every other platform. As one of the planned features of TrueNAS SCALE is the easy migration of pools from TrueNAS CORE, we have been developing this and other missing features to improve feature parity and compatibility across all platforms in OpenZFS. A pull request`[3]` for the xattr compatibility feature was opened with a request for comments in OpenZFS on April 20, 2021.

`[3]`: https://github.com/openzfs/zfs/pull/11919

On October 6, 2021, we received feedback that the feature flag will not be needed, as a bump to the ZFS POSIX Layer version number should be sufficient. As a result, we have removed the feature flag in question from TrueNAS SCALE to prevent the feature from being enabled moving forward in the release cycle. This is an unfortunate time to receive this insight, as nightly and now beta users of SCALE will have pools created or upgrade with this flag.  The impact for most users is negligible, as the pool is still fully operational with the feature flag enabled, as long as it is not active. These users will merely see the unsupported feature is present but inactive:

![ZFSFeatureFlagsRemovalExample1](/images/SCALE/ZFSFeatureFlagsRemovalExample1.png "ZFS Feature Flags Removal Example 1")

Users who created or upgraded a pool using a TrueNAS SCALE build from between June 29 and July 15 2021 or who have manually set `xattr_compat=all` on a dataset and written an xattr will have activated the feature. Once activated, the feature cannot be deactivated until all datasets (including snapshots) that have ever utilized the feature (writing an xattr with `xattr_compat=all` on Linux) have been destroyed. This can be hard to determine, as there is currently no way of checking the feature activation status of a dataset. Most people who did unwittingly activate the feature will merely see the new default value of `xattr_compat=linux` when checking the property.

The feature was marked as read-only compatible, so pools with the feature active are able to be imported read-only on versions of ZFS that do not support the feature. Users are advised to check if their pool has the feature active, and if so, the pool must be backed up and recreated on a version of ZFS without the feature. Builds of SCALE as of October 9, 2021 have the feature removed.

This pool has `feature@xattr_compat` enabled but not active, and can continue to be used on newer versions of TrueNAS SCALE and other ZFS systems:

![ZFSFeatureFlagsRemovaExample2](/images/SCALE/ZFSFeatureFlagsRemovalExample2.png "ZFS Feature Flags Removal Example 2")

Changing the `xattr_compat` property and writing an xattr in the user namespace activates the feature, preventing the pool from being used on TrueNAS SCALE and other ZFS systems moving forward. The feature is only activated by writing an xattr in the user namespace with `xattr_compat=all` on Linux. Once activated, it stays active even if `xattr_compat=linux` is restored and the file removed:

![ZFSFeatureFlagsRemovalExample3](/images/SCALE/ZFSFeatureFlagsRemovalExample3.png "ZFS Feature Flags Removal Example 3")

Creating a new pool with the feature explicitly disabled and replicating the desired datasets is one workaround if your pool has the feature active:

![ZFSFeatureFlagsRemovalExample4](/images/SCALE/ZFSFeatureFlagsRemovalExample4.png "ZFS Feature Flags Removal Example 4")

Please keep in mind these are simplified, contrived examples.  If you aren't sure of how to replicate your pool yourself, seek help on the [TrueNAS forums](https://www.truenas.com/community/forums/truenas-scale-discussion/).

After upgrade to 22.02-RC.1, the only visible artifact of the feature is that the unsupported flag is present in `zpool get all`:

`root@truenas[~]# zpool get all storage | grep xattr_compat`</br>
`storage unsupported@com.ixsystems:xattr_compat inactive         local` 

The unsupported feature will not presented by `zpool status`.

{{< hint info >}}
It is not possible to disable the feature once it is enabled; however, having the feature in the enabled state, should not cause a problem. 
The problem arises when the feature is active.
There is currently no practical way to tell which datasets or snapshots are keeping the feature active, so while destroying all traces of it should in theory return the feature from active back to enabled, in practice it is hard to know you won't have to end up destroying the whole pool anyway.
For information on how to perform data protection procedures, please refer to the TrueNAS SCALE [Data Protection]({{< relref "SCALE/SCALEUIReference/DataProtection/_index.md" >}}) documentation.
{{< /hint >}}

{{< taglist tag="scalemigrate" depth="2" >}}