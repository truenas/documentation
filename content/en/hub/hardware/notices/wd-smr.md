---
title: "WD Red SMR Drive Compatibility with ZFS"
description: "WD Red SMR Drive Compatibility with ZFS"
tags: ["errata"]
---

## WD Red SMR Drive Compatibility with ZFS

Thanks to the TrueNAS community, we have uncovered a potential ZFS compatibility issue with some capacities of newer WD Red drives that use [Shingled Magnetic Recording (SMR)](https://en.wikipedia.org/wiki/Shingled_magnetic_recording) technology.

Western Digital’s WD Red hard drives are commonly used in FreeNAS Minis due to good affordability and low power/acoustic footprint. They are also a popular choice among FreeNAS community members building systems of up to 8 drives. In general, the WD Reds have a normal workload rating of 180TB/year and are specified to work with NAS and RAID systems with up to 8 drives. Most NAS systems will write their drive capacity less than once per month, and most applications where WD Reds are used will typically write far less than that, which is why they were selected as the companion drive for the FreeNAS Mini.

Previous generation WD Red drives and higher capacity (8TB or greater) models in the current generation drives use CMR (Conventional Magnetic Recording), as do WD Red Pro and all the Enterprise-class drives such as WD Gold and Ultrastar. These CMR drives all perform well and are very reliable under ZFS.

Smaller WD Red drives (2 to 6TB) from their newest generation, released in late 2018, use a different recording technology known as [DM-SMR (Device-Managed Shingled Magnetic Recording)](https://blog.westerndigital.com/wd-red-nas-drives/) .  The 2TB, 3TB, 4TB, and 6TB WD Red DM-SMR drives can be identified by the letters “EFAX” in their product code. There are also the previous generation WD Red drives in the same capacities that are CMR drives (identified by “EFRX” in their product codes). The 8TB and larger drives with the “EFAX” code use CMR technology.  Realizing this is a little difficult to track, Western Digital has provided a chart to [identify all of their drives with DM-SMR](https://blog.westerndigital.com/wp-content/uploads/2020/04/2020_04_22_WD_SMR_SKUs_1Slide.pdf).

iXsystems and Western Digital have been working to identify and resolve the ZFS compatibility issue with the WD Red DM-SMR drives. The testing is not yet complete, but at this stage, we can confirm:

Some SMR drives are indeed compatible with ZFS, though due to a lack of a ratified industry standard implementation of the technology, they don’t all necessarily behave the same.  Further study is needed to determine each implementation’s suitability with ZFS.  At present, we are focused on testing the WD Red DM-SMR implementation.
In general, SMR drives are used for their power efficiency and affordability. With regard to performance, sequential write speeds can be faster, but random write speeds are lower and do slow down operations such as resilvering. We recommend CMR drives for more uniform performance. For a list of SMR drives, see the [community post from Yorick](https://www.ixsystems.com/community/resources/list-of-known-smr-drives.141/).
The WD Red DM-SMR drives use an indirect Logical Block Addressing model, which is similar to SSDs. After random writes to the drive, the drives do need to perform some background garbage collection which does reduce their sustained random write performance. When adding a DM-SMR drive to a ZFS pool, it is better that the drive is erased beforehand.
At least one of the WD Red DM-SMR models (the 4TB WD40EFAX with firmware rev 82.00A82) does have a ZFS compatibility issue which can cause it to enter a faulty state under heavy write loads, including resilvering. This was confirmed in our labs this week during testing, causing this drive model to be disqualified from our products. We expect that the other WD Red DM-SMR drives with the same firmware will have the same issue, but testing is still ongoing to validate that assumption.
In the faulty state, the WD Red DM-SMR drive returns IDNF errors, becomes unusable, and is treated as a drive failure by ZFS.  In this state, data on that drive can be lost. Data within a vdev or pool can be lost if multiple drives fail.
ZFS incompatibility causing drive failure is a rare event. While we have shipped approximately one hundred FreeNAS Mini systems with the DM-SMR 2TB and 6TB drives, we have had only one reported issue. More testing will be done to understand the ZFS compatibility issues and how to avoid them.
Of iXsystems products, the FreeNAS Mini Series is the only product line that uses WD Red drives. Most of the FreeNAS Mini systems shipped have not used DM-SMR drives. Only systems shipped with 2TB or 6TB drives since September 2019 may have the DM-SMR drives.
Both iXsystems and Western Digital treat data loss as a serious event. We will be doing more work with them to identify and resolve the drive ZFS compatibility issue. Any solution will then be validated with some heavy ZFS workloads with FreeNAS 11.3 and TrueNAS CORE 12.0 before we report back to the community. Follow [Western Digital’s blog](https://blog.westerndigital.com/wd-red-nas-drives/) for more information.
Any existing systems with these drives should have a backup strategy, as should all systems with valuable data. If anyone experiences the IDNF errors with FreeNAS, please [contact us](https://www.ixsystems.com/contact-us/) and we will advise on how best to handle the situation. Any FreeNAS Mini users will be covered under the standard warranty. There will be more communication when we understand how best to mitigate or resolve the ZFS compatibility issues.

In the meantime, iXsystems will not ship Minis with the impacted WD Red DM-SMR drives. We will instead be using other WD Red drives or WD Red Pro drives. None of the Mini systems available on Amazon use these DM-SMR drives. It is also recommended that the FreeNAS community avoid using these WD Red DM-SMR drives in their own FreeNAS builds until further information is available.

We expect to resume the use of WD Red DM-SMR drives for specific configurations after we have validated a ZFS-compatible firmware version. We will also characterize the performance of these DM-SMR drives for the community. There will always be options for configuring FreeNAS Minis with drives using CMR technology.

If you have any questions about what to use for your next FreeNAS system, please use the community forum or [contact iXsystems](https://www.ixsystems.com/contact-us/).
