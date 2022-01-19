---
title: "M-Series: Recommended NVDIMM Update"
weight: 10
---

**April 13, 2021**

TrueNAS M-Series users are strongly recommended to update to [TrueNAS 12.0-U3]({{< relref "CORE/ReleaseNotes/12.0/12.0U3.md" >}}) to minimize the potential impact of a NVDIMM firmware bug that may not save ZIL/SLOG contents on a power failure.

NVDIMM (Non-Volatile Dual Inline Memory Module) is the primary Write Cache (ZFS SLOG or ZIL) for TrueNAS M-Series. It stores incoming data prior to it being written to the ZFS pool with its data protection. On a dual controller system (HA), each Write is stored on the NVDIMM of the active controller and then mirrored to the NVDIMM on the standby controller. On power failure or power loss, the NVDIMM saves the contents of DRAM to its flash devices. NVDIMM is used because it is the fastest (very low latency) and most reliable Write Cache available.

Protecting incoming data writes are important for virtualization workloads and databases and in some cases can be important for file workloads. NVDIMMs have been proven to be extremely reliable with no known data loss events in the last 3 years of operation.
 
The 16GB 2933MHZ NVDIMMs used in the M-series were qualified with Rev 2.2 and Rev 2.4 firmware. At some point, our vendor changed to supplying NVDIMMs with newer revision firmware that was not qualified. The change in firmware was not noticeable at the OS level and everything seemed to work well.
 
Later, with extensive testing, we found that with revisions after Rev 2.4 there is a low (approx 10% per controller) probability that on a power failure event, the NVDIMM will not save its data. This could cause data loss of acknowledged synchronous writes that have not yet been written to the main pool during a power loss event.
 
So far, we have no record of a data loss event. Most likely, this is because only one of the two controllers had the NVDIMM issue and the other NVDIMM retained the SLOG data. We do not have a root cause for why the event occurs 10% of the time and hope the estimate of 10% is inflated relative to real-world operation.
 
Since discovering this weakness, all new M-Series now ship with NVDIMM Rev 2.2 firmware. In TrueNAS 12.0-U3, we have added the tools and procedures to:

* Detect the NVDIMM firmware level
* Alert the administrator that the NVDIMM may cause data loss
* Upgrade or downgrade the NVDIMM firmware
* Upgrade the BIOS of each controller (necessary to change the NVDIMM firmware)

We recommend that, for use-cases where data is mission-critical, all M-Series systems be updated to 12.0-U3 and the latest BIOS within a reasonable period to minimize risk of disruption to your business. After that, we can verify these NVDIMM firmware levels and determine if the NVDIMM firmware needs to be changed.
 
If a NVDIMM firmware change is needed, it is important to note that the multi-step NVDIMM downgrade process takes multiple hours and requires two failovers on a dual controller, HA system. This is to ensure IPMI firmware, BIOS version, and NVDIMM firmware are all on the latest qualified versions. Apart from the failovers, there is no disruption to normal storage services. It should be scheduled with iX Support, who will walk you through the process while taking into account your situation and business needs.

By moving to TrueNAS 12.0-U3, many TrueNAS systems will be updating to TrueNAS 12.0 which has now been through extensive field testing and has received very positive reviews. The 12.0 version has been successfully deployed on over two hundred TrueNAS HA systems and provides additional features and performance improvements. Some production users have reported significant performance gains (>30%) by upgrading from 11.3 to 12.0.

{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
