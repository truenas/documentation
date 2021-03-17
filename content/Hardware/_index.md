---
title: "TrueNAS Hardware"
geekdocCollapseSection: true
weight: 40
---
<div style="text-align:center;">

![R40R50](/images/Hardware/R40R50Front.png "R40 & R50")

</div>

iXsystems sells a variety of hardware solutions that are rigorously qualified and built to maximize TrueNAS performance.
Each line of products are tailored to meet your specific needs, whether you are a home user, Small and Medium Enterprise (SME), or extended business environment.
To help visualize the system placement in a networking environment, iXsystems also provides a [Visio stencil pack]({{< relref "Stencils.md" >}}) of these products.
Legacy documentation for discontinued iXsystems products is also archived here.

{{< tabs "TrueNAS Hardware" >}}
{{< tab "TrueNAS Mini" >}}
<div style="text-align:center;">

![MiniFamily](/images/Hardware/MiniFamilyFront.png "TrueNAS Mini Family")

</div>
TrueNAS Minis allow you to easily store and manage your important data using any storage protocol, including NFS, SMB, AFP, iSCSI, S3, and many others.
All Minis are backed by the OpenZFS (ZFS) enterprise-class file system that provides software RAID to protect your data from drive failure, data corruption, file deletion, and even malware attacks.

TrueNAS Minis are built with professional-grade components including ECC RAM and IPMI for remote management. Whisper-quiet fans and low power footprints make them ideal for a quiet office environment.

[Mini Basic Setup Guide]({{< relref "/Hardware/Mini/MiniBSG.md" >}})<br>
{{< /tab >}}
{{< tab "R-Series" >}}
<div style="text-align:center;">

![R40R50](/images/Hardware/R40R50Front.png "R40 & R50")

</div>
The TrueNAS R-Series is a family of single controller systems that leverage ZFS and TrueNAS to provide the industry's best storage value.
Models range from hybrid or all-flash configurations in 1U, 2U, and 4U form factors.
Individual system specifications are highly customizable, with expansion shelves, Fibre Channel, CPU options, and Read & Write Cache SSDs supported.

A single R50 array can support up to two petabytes of raw capacity and grow HDD capacity at less than $50/TB.
All-Flash options can grow at less than $200/TB.

[R-Series Basic Setup Guide]({{< relref "/Hardware/RSeries/RSeriesBSG.md" >}})
{{< /tab >}}
{{< tab "X-Series" >}}
<div style="text-align:center;">

![XSeries](/images/Hardware/X10Front.png "TrueNAS X10")

</div>
The TrueNAS X-Series is our compact 2U enterprise storage system built on the powerful OpenZFS file system for unbeatable value and performance.
Available in hybrid or all-flash configurations, the X-Series easily integrates into any environment with support for all major block, file, and object protocols.

A single X-Series system can support up to 1 petabyte of raw capacity and is over 70% more cost-effective over five years compared to AWS and other cloud-based solutions.
Powerful enterprise features, like ZFS data protection and high-availability, ensure up to 99.999% uptime to keep your business running even when components fail.

[X-Series Basic Setup Guide]({{< relref "/Hardware/XSeries/XSeriesBSG.md" >}})<br>
[Controller Replacement Guide]({{< relref "/Hardware/XSeries/XSeriesControllerReplacement.md" >}})
{{< /tab >}}
{{< tab "M-Series" >}}
<div style="text-align:center;">

![MSeries](/images/Hardware/M50Front.png "TrueNAS M50")

</div>
The TrueNAS M-Series is the flagship model of TrueNAS Enterprise systems and is ideally suited for heavy IT storage workloads and intensive data center applications.
The TrueNAS M-Series provides High Availability (HA), hybrid capacity, and all-flash performance configurations.
The M-Series grows to support multiple 100GbE ports and over 20PB of storage.
All TrueNAS Enterprise systems use OpenZFS to give you unbelievable performance with legendary protection and reliability for your mission-critical data.

[M-Series Basic Setup Guide]({{< relref "/Hardware/MSeries/MSeriesBSG.md" >}})<br>
[M-Series SATADOM Replacement Guide]({{< relref "/Hardware/LegacyHardware/MSeriesGen2/MSeriesGen2SatadomReplace.md" >}})
{{< /tab >}}
{{< tab "Expansion Shelves" >}}
<div style="text-align:center;">

![ES60](/images/Hardware/ES60Front.png "ES60 Expansion Shelf")

</div>
Add storage to your datacenter without hassle or downtime.
Whether you need a few drives or hundreds, iXsystems offers a variety of customizable solutions to fit any of your storage requirements.

[ES12 Basic Setup Guide]({{< relref "ES12BSG.md" >}})<br>
[ES24 Basic Setup Guide]({{< relref "ES24BSG.md" >}})<br>
[ES24F Basic Setup Guide]({{< relref "ES24FBSG.md" >}})<br>
[ES60 Basic Setup Guide]({{< relref "ES60BSG.md" >}})<br>
[ES102 Basic Setup Guide]({{< relref "ES102BSG.md" >}})
{{< /tab >}}
{{< tab "Notices" >}}
<div style="text-align:center;">

![Promote](/images/PromoteSmall.jpg "Promote")

</div>
Product announcements, unspecific FAQs, and articles about specific hardware components.

[Component Articles]({{< relref "/Hardware/Notices/ComponentArticles/_index.md" >}})<br>
[Hardware FAQs]({{< relref "/Hardware/Notices/FAQs/_index.md" >}})<br>
[End of Life Announcements]({{< relref "/Hardware/Notices/EoLNotices/_index.md" >}})
{{< /tab >}}
{{< tab "Legacy" >}}
<div style="text-align:center;">

![ZSeries](/images/Hardware/ZseriesFront.jpg "Z Series")

</div>
Archived documentation about discontinued iXsystems hardware products.

[FreeNAS Certified]({{< relref "FNCertifiedBSG.md" >}})<br>
[TrueNAS Z-Series]({{< relref "ZSeriesBSG.md" >}})<br>
[2nd Generation FreeNAS Minis]({{< relref "/Hardware/LegacyHardware/FNMini/MiniFamilyBSG2.0.md" >}})<br>
[Discontinued Expansion Shelves]({{< relref "/Hardware/LegacyHardware/ExpansionShelves/_index.md" >}})
{{< /tab >}}
{{< /tabs >}}
