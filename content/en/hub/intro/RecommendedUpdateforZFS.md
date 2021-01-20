---
title: "Recommended ZFS Update"
tags: ["FreeNAS","TrueNAS Enterprise", "ZFS"]
---

*August 24, 2020*

ZFS is the primary file system for FreeNAS and TrueNAS.
It manages stored data and provides both disk protection (mirror, RAID-Z) and data protection (snapshots, replication) services.
It is used in FreeNAS/TrueNAS because it is the most reliable open source file system available.

While ZFS is extremely reliable, there have been bug fixes and improvements made over the years.
While reviewing our support data, iXsystems identified one bug ([NAS-102541](https://jira.ixsystems.com/browse/NAS-102541)) that has caused multiple instances of pool corruption or disruption in some specific circumstances.
Fortunately, pool data has been recoverable and the issue only occurs on replication targets where there are more than a dozen Access Control Lists (ACLs) on a source file.
The bug could be triggered by performing a scrub of the replicated pool, but **the issue was resolved in FreeNAS and TrueNAS 11.3**.

Based on the maturity of the 11.3 version, we recommend that FreeNAS and TrueNAS users upgrade to 11.3-U4.1.
Upgrading avoids any possibility of data loss from that bug and ensures that your system will have all ZFS improvements from the past several years.
FreeNAS 11.3-U4.1 is currently the most popular version of FreeNAS with over 20,000 successful deployments!

By upgrading to TrueNAS 11.3-U4.1, many TrueNAS systems will be obtaining the new user interface, which has now been through extensive field testing and received very positive reviews.
TrueNAS 11.3-U4.1 has been successfully deployed on over a hundred TrueNAS High Availablility (HA) systems.

One production user reported significant performance gains from the upgrade to 11.3.
These performance improvements are also welcome:

> “Additionally, it appears the software upgrade from 11.2 U5.1 to 11.3 U4 has brought notable performance increases.
> Our load average would typically hover around 10-15 during the majority of our initial backup windows; tonight it hovered much closer to 5-8.
> I've also noticed a substantial decline in overall disk busy time, moving from a prior average around 65% to an average closer to 45%.
> All of this while a scrub was running…“
 
TrueNAS Enterprise users should [contact iXsystems Support](/hub/initial-setup/support/#support-in-truenas-enterprise) to schedule the software update and discuss any potential challenges with this update.
