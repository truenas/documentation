---
title: "TrueNAS Systems"
geekdocCollapseSection: true
weight: 40
---

{{< toc >}}

{{< trueimage src="/images/Hardware/R40R50Front.png" alt="R40 and R50" id="1 - R40 (Front) and R50 (Back)" >}}

iXsystems sells a variety of hardware solutions that are rigorously qualified and built to maximize TrueNAS performance.
Each line of products are tailored to meet your specific needs, whether you are a home user, Small and Medium Enterprise (SME), or extended business environment.
To help visualize the system placement in a networking environment, iXsystems also provides a [Visio stencil pack]({{< relref "Stencils.md" >}}) of these products.
Legacy documentation for discontinued iXsystems products is also archived here.

## TrueNAS Systems

{{< expand "TrueNAS Mini" "v" >}}

{{< trueimage src="/images/Hardware/MiniFamilyFront.png" alt="Mini E+ (Left), Mini X+ (Middle), and Mini XL+ (Right)" id="2 - Mini E+ (Left), Mini X+ (Middle), and Mini XL+ (Right)" >}}

TrueNAS Minis allow you to easily store and manage your important data using any storage protocol, including NFS, SMB, AFP, iSCSI, S3, and many others.
All Minis are backed by the OpenZFS (ZFS) enterprise-class file system that provides software RAID to protect your data from drive failure, data corruption, file deletion, and even malware attacks.

TrueNAS Minis are built with professional-grade components including ECC RAM and IPMI for remote management. Whisper-quiet fans and low power footprints make them ideal for a quiet office environment.

[Mini Basic Setup Guide]({{< relref "/Hardware/Mini/MiniBSG.md" >}})<br>
{{< /expand >}}

{{< expand "TrueNAS R-Series" "v" >}}
{{< trueimage src="/images/Hardware/R40R50Front.png" alt="R40 and R50" id="3 - R40 (Front) and R50 (Back)" >}}

The TrueNAS R-Series is a family of single controller systems that leverage ZFS and TrueNAS to provide the industry's best storage value.
Models range from hybrid or all-flash configurations in 1U, 2U, and 4U form factors.
Individual system specifications are highly customizable, with expansion shelves, Fibre Channel, CPU options, and Read & Write Cache SSDs supported.

A single R50 array can support up to two petabytes of raw capacity and grow HDD capacity at less than $50/TB.
All-Flash options can grow at less than $200/TB.

[R-Series Basic Setup Guide]({{< relref "/Hardware/RSeries/RSeriesBSG.md" >}})
{{< /expand >}}

{{< expand "TrueNAS X-Series" "v" >}}
{{< trueimage src="/images/Hardware/X10Front.png" alt="X10" id="4 - X10" >}}

The TrueNAS X-Series is our compact 2U enterprise storage system built on the powerful OpenZFS file system for unbeatable value and performance.
Available in hybrid or all-flash configurations, the X-Series easily integrates into any environment with support for all major block, file, and object protocols.

A single X-Series system can support up to 1 petabyte of raw capacity and is over 70% more cost-effective over five years compared to AWS and other cloud-based solutions.
Powerful enterprise features, like ZFS data protection and high-availability, ensure up to 99.999% uptime to keep your business running even when components fail.

[X-Series Basic Setup Guide]({{< relref "/Hardware/XSeries/XSeriesBSG.md" >}})<br>
{{< /expand >}}

{{< expand "TrueNAS M-Series" "v" >}}
{{< trueimage src="/images/Hardware/M50Front.png" alt="M50" id="5 - M50" >}}

The TrueNAS M-Series is the flagship model of TrueNAS Enterprise systems and is ideally suited for heavy IT storage workloads and intensive data center applications.
The TrueNAS M-Series provides High Availability (HA), hybrid capacity, and all-flash performance configurations.
The M-Series grows to support multiple 100GbE ports and over 20PB of storage.
All TrueNAS Enterprise systems use OpenZFS to give you unbelievable performance with legendary protection and reliability for your mission-critical data.

[M-Series Basic Setup Guide]({{< relref "/Hardware/MSeries/MSeriesBSG.md" >}})<br>
[M-Series SATADOM Replacement Guide]({{< relref "/Hardware/LegacyHardware/MSeriesGen2/MSeriesGen2SatadomReplace.md" >}})
{{< /expand >}}

{{< expand "TrueNAS Expansion Shelves" "v" >}}
{{< trueimage src="/images/Hardware/ES60Front.png" alt="ES60" id="6 - ES60" >}}

Add storage to your datacenter without hassle or downtime.
Whether you need a few drives or hundreds, iXsystems offers a variety of customizable solutions to fit any of your storage requirements.

[ES12 Basic Setup Guide]({{< relref "ES12BSG.md" >}})<br>
[ES24 Basic Setup Guide]({{< relref "ES24BSG.md" >}})<br>
[ES24F Basic Setup Guide]({{< relref "ES24FBSG.md" >}})<br>
[ES60 Basic Setup Guide]({{< relref "ES60BSG.md" >}})<br>
[ES102 Basic Setup Guide]({{< relref "ES102BSG.md" >}})
{{< /expand >}}

{{< expand "Legacy Systems" "v" >}}
{{< trueimage src="/images/Hardware/ZseriesFront.jpg" alt="Z-Series" id="7 - Z-Series" >}}
Archived documentation about discontinued iXsystems hardware products.

[FreeNAS Certified]({{< relref "FNCertifiedBSG.md" >}})<br>
[TrueNAS Z-Series]({{< relref "ZSeriesBSG.md" >}})<br>
[2nd Generation FreeNAS Minis]({{< relref "/Hardware/LegacyHardware/MiniSeries/FreeNAS Minis (2nd Gen)/MiniFamilyBSG2.0.md" >}})<br>
[Discontinued Expansion Shelves]({{< relref "/Hardware/LegacyHardware/ExpansionShelves/_index.md" >}})
{{< /expand >}}

## Hardware/Software Compatibility

{{< truetable >}}
| TrueNAS System | CORE Software Compatible | SCALE Software Compatible |
| -------- | --------------- | ---------------- |
| Mini E | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| Mini E+ | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| Mini X | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| Mini X+ | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| Mini XL+ | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| Mini R | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| R10 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| R20 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| R30 | <span class="iconify" data-icon="oi:x"></span> No | <span class="iconify" data-icon="oi:check"></span> Yes |
| R40 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| R50 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| M40 (Gen 1) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M50 (Gen 1) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M60 (Gen 1) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M40 (Gen 2) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M50 (Gen 2) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M60 (Gen 2) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| M30 (Gen 3) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| M40 (Gen 3) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| M50 (Gen 3) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| M60 (Gen 3) | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:check"></span> Yes |
| X10 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| X20 | <span class="iconify" data-icon="oi:check"></span> Yes | <span class="iconify" data-icon="oi:x"></span> No |
| F1 | <span class="iconify" data-icon="oi:x"></span> No | <span class="iconify" data-icon="oi:check"></span> Yes |
{{< /truetable >}}

## Notices

Product announcements, unspecific FAQs, and articles about specific hardware components.

[Component Articles]({{< relref "/Hardware/Notices/ComponentArticles/_index.md" >}})

[End of Life Announcements]({{< relref "/Hardware/Notices/EoLNotices/_index.md" >}})