---
title: "Media Workflows"
description: "Best practices when using TrueNAS for Media and Entertainment workflows."
weight: 20
aliases:
  - /core/solutions/optimizations/mediaentertainment/
---

{{< toc >}}

Developing and delivering media content that reaches audiences whenever and wherever they are has increased in importance and complexity.
In today’s highly connected, entertainment-driven world, media and entertainment (M&E) companies need to stay competitive to succeed.
These organizations need to produce information and entertainment in a variety of different formats to display on mobile devices, desktops, workstations, Blu-ray players, game consoles, set-top boxes, and TVs as well as in digital and analog movie theaters.
Workflows grow in complexity daily and time-to-market windows continue to shrink.
Where and how to store and archive all this content remains top-of-mind. M&E projects run on multiple heterogeneous environments, need an enterprise- grade storage array’s features, and require multiple protocols.

Most M&E production houses purchase data storage based on capacity and performance dictated by the needs of existing applications.
As a result, businesses often end up with multiple classes of application-specific storage or storage silos including SAN, NAS, all-flash arrays, and many forms of direct attached storage (DAS) from a multitude of vendors.

Creative organizations are often forced to over-provision and over-purchase capacity or performance, or use an all-flash array to meet their production needs. This reactive purchasing drives up the cost of media production.
As media files grow, it becomes complex to manage and inefficient to increase the capacity or performance of DAS or consumer-grade NAS, so many turn to cloud storage.
The security risk and expense of cloud storage are a top priority of IT and Media Managers.
These factors and others put intense pressure on your budget and data storage infrastructure to keep up with the demand.

A TrueNAS storage system from iXsystems brings an enterprise-grade storage solution supporting multiple protocols to M&E production houses that is capable and affordable for many M&E applications.
It is designed to enable M&E customers to address media capacity and performance requirements while reducing total cost of ownership (TCO), consolidating digital assets, accelerating media workflows, and providing the features needed to protect all media assets.
Read more to learn how TrueNAS can be optimized for typical M&E production house usage.

{{< hint type=note >}}
General tuning recommendations are changing constantly!
Check back often to see what's changed or [add your own recommendations]({{< relref "/Contributing/_index.md" >}})!
{{< /hint >}}

## General Optimizations

* Use SMB3 sharing on both the TrueNAS and any client systems.
* A typical recommendation is to use Mixed RAID (*2+1 RAIDZ*) in most cases with added *Read* and *Write* cache.
  The Write cache is optional if the system is only using SMB sharing.
  {{< expand "What about RAIDZ2 Configurations?" "v" >}}
  *6* or *7* disk wide *RAIDZ2* (Protection-X or Protection) is possible for tier2, nearline, or archival storage. It also works when the system has extensive data storage of a few hundred Terabytes or more.
  {{< /expand >}}
* Setting jumbo frames (*MTU: 9000*) on the network, TrueNAS, and client side is important for large file streams.
* Do not store Media Cache Files and Media Cache Databases on a NAS. These files must stay local on clients. Ideally, client systems use SSDs and NVMe devices to store these files.
* With standard (non flash) systems, don't move or copy files or footage while editing. This causes choppy playback.

## Software-specific Tuning

Beyond general optimization for Media and Entertainment workflows are tunings or TrueNAS usage recommendations for specific applications.

{{< tabs "Software Tunings" >}}
{{< tab "Adobe Premier" >}}
### Adobe Premiere®

System size is a primary factor when tuning TrueNAS for Adobe Premiere workflows.

4K workflows typically want *20* disks or more.
8K can be all-flash demanding, but Premiere has the *proxies* feature to reduce the performance impact.
Make sure your client systems or other applications support this feature too.

To get some performance improvement when scrubbing through long video files with audio tracks, de-select *play audio while scrubbing* under **Preferences > Audio**

Shared projects must enable *Project Locking* in Premiere.
{{< /tab >}}
{{< /tabs >}}
