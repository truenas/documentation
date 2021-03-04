---
title: "TrueNAS CORE Hardware Guide"
description: "Official hardware guide for custom TrueNAS CORE systems."
tags: ["TrueNAS CORE","Components"]
weight: 35
---

Long-time TrueNAS CORE/FreeNAS users will never forget the FreeNAS 8.0 days when flashing an IBM M1015 controller card with LSI firmware was a rite of passage, 3TB drives were the largest you could buy, and floods in Thailand would soon turn every hard drive into a valuable asset.

Fast-forward to the amazing new [TrueNAS Minis](https://www.truenas.com/truenas-mini/) and a streamlined user experience through the intuitive [web interface](https://www.truenas.com/truenas-core/) to see just how much has changed in the TrueNAS ecosystem.
While the TrueNAS Mini and FreeNAS certified are excellent turn-key systems, we appreciate that do-it-yourself users have always played a critical role in the growth and success of TrueNAS CORE/FreeNAS around the world.
From repurposed systems to highly-custom builds, the fundamental freedom of TrueNAS is the ability to run it on nearly any x86 computer.

In celebration of the TrueNAS software evolution, we have brought together the wisdom of our engineering staff and top blog posts to produce the first comprehensive TrueNAS CORE Hardware Guide to complement the [official hardware requirements](/hub/intro/COREHardwareGuide/) and the community’s highly-detailed [Hardware Recommendations Guide](https://www.ixsystems.com/community/resources/hardware-recommendations-guide.12/).
Have something to add? Please open a pull request or issue by clicking the buttons in the side panel!

Here’s to building your best NAS ever in 2020 and beyond!

**The TrueNAS Team**

## Introduction

The TrueNAS community has a rich ecosystem of advice when it comes to the art and science of choosing the ideal hardware for their favorite storage operating system.
From the [official Hardware Requirements](/hub/intro/COREHardwareGuide/) to the [Hardware Recommendations Guide](https://www.ixsystems.com/community/resources/hardware-recommendations-guide.12/) maintained by the community, to countless blog posts, users have a comprehensive, if not overwhelming choice of answers to the simple question, “What hardware should I buy?”
The [TrueNAS Mini](https://www.truenas.com/truenas-mini/) and [FreeNAS Certified](https://www.ixsystems.com/freenas-certified-servers/) lines of purpose-built TrueNAS systems from iXsystems are the official answers to this question, but they also serve to provide templates for users that want to build their own systems or repurpose existing ones.
Therefore, this guide will use the TrueNAS Mini and FreeNAS Certified systems as points of reference to all of the criteria to consider when building TrueNAS-compatible systems of any size.

## Storage Device Considerations

At the heart of any storage system is the symbiotic pairing of its file system and its physical storage devices.
The ZFS file system in TrueNAS provides the [best available data protection of any filesystem at any cost](https://www.ixsystems.com/blog/openzfs-vs-the-competition/) and makes very effective use of both spinning disk and all-flash storage, or a mix of the two.
ZFS is fully prepared for the eventual failure of storage devices and is highly-configurable to achieve the perfect balance of redundancy and performance to meet any storage goal.
A properly-configured TrueNAS system can tolerate the failure of multiple storage devices and even its boot media which can be quickly re-created with a copy of the [configuration file](/hub/tasks/administrative/backup-config/).
Choosing storage media is the first step in designing the storage system to meet immediate objectives and prepare for future capacity expansion.

### Spinning Disks

Until the next unforeseen scientific breakthrough in storage media, spinning hard disks are here to stay, thanks to their balance of capacity and cost.
The arrival of double-digit terabyte consumer and enterprise drives has provided more choices to TrueNAS users than ever.
TrueNAS Mini and FreeNAS Certified systems ship with Western Digital NAS and NL-SAS respectively for good reason, and understanding the alternatives will explain this decision.

### SATA NAS Disks

Serial Advanced Technology Attachment (SATA) is still the de facto standard disk interface and can be found in many desktop/laptop computers, servers, and some non-enterprise storage arrays.
SATA disks first arrived offering double-digit gigabyte capacities and have since been produced to meet a myriad of capacity, reliability, and performance goals.
While consumer desktop SATA disks are not as problematic as they used to be in terms of overall reliability, they are still not designed or warrantied for continuous operation or use in RAID groups.
Therefore, Enterprise SATA disks were introduced to address both the “always-on” factor, vibration tolerance, and drive error handling required in storage systems.
However, the price delta between desktop and enterprise SATA drives was (and still is) vast enough that it drove users to push their consumer drives into 24/7 service in pursuit of cost savings.

Drive vendors responded to this gap in the market (and likely grew tired of honoring warranties for failed desktop drives used in incorrect applications) by producing “NAS” drives, made famous by the original Western Digital (WD) Red™ drives with CMR/PMR technology (now called WD Red Plus).
WD Red™ Plus NAS drives (non-SMR) are designed for use in systems with up to eight hard drives, up to 16 drives in the case of the [WD Red™ Pro](https://www.westerndigital.com/products/internal-drives/wd-red-hdd) drives, and [WD UltraStar™](https://www.westerndigital.com/products/data-center-drives#hard-disk-hdd) drives for systems beyond 16 drives.

WD drives are known among the iXsystems Community Forum as the preferred hard drives for TrueNAS builds due to their exceptional quality and reliability.
All TrueNAS Minis ship with WD Red™ Plus drives unless requested otherwise.

### Nearline SAS Disks

“Nearline” SAS (NL-SAS) disks are essentially 7200 RPM enterprise SATA disks with the industry-standard SAS interface found in the majority of enterprise storage systems.
SAS stands for “Serial-Attached SCSI”, the traditional SCSI disk interface in serial form.
SAS systems are designed for data center storage applications and therefore have accurate, verbose error handling, predictable failure behavior, reliable hot swapping, and have the added feature of multipath support.
Multipath access means that each drive has two interfaces and can be connected to either two storage controllers, or one controller over two cables.
This redundancy protects against cable failure, controller card failure, or complete system failure in the case of the TrueNAS high-availability architecture in which each “controller” is in fact an independent server that accesses the same set of NL-SAS drives.
NL-SAS drives are also robust enough to handle the rigors of systems with more than 16 disks.
Therefore, capacity-oriented TrueNAS and certain [FreeNAS Certified](https://www.freenas.org/freenas-certified-servers/) systems ship with [Western Digital UltraStar](https://www.westerndigital.com/products/data-center-drives#hard-disk-hdd) NL-SAS disks thanks to the all-around perfect balance of capacity, reliability, performance, and flexibility that NL-SAS drives offer.

### SAS Disks

Enterprise SAS disks were the traditional heavy-lifters of the enterprise storage industry and are built for maximum performance and reliability that a spinning platter can provide.
SAS disk capacities are surprisingly low compared to NL-SAS or NAS drives, due to the speed at which the platters spin, reaching as high as 15,000 RPMs.
While SAS drives may sound like the ultimate answer for high-performance storage, the many consumer and enterprise flash-based options that have come onto the market have significantly reduced the competitiveness of SAS drives.
For example, Enterprise SAS drives were discontinued from the FreeNAS and TrueNAS product lines, and replaced almost entirely by flash drives (SSDs or NVMe) in 2016 due to their superior performance/cost ratio.

### SATA and SAS Flash Storage SSDs

Flash storage technology has made significant progress in recent years, enabling a revolution in mobile devices and the rise of flash storage in general-purpose PCs and servers.
Unlike hard disks, flash storage is not sensitive to vibration and can be significantly faster with comparable reliability.
Flash storage remains more expensive per gigabyte but is finding many ways into TrueNAS systems as that price gap continually narrows.

The shortest path for the introduction of flash storage into the mainstream market was for vendors to use standard SATA/SAS hard disk interfaces and form factors, effectively emulating standard hard disks but with no moving parts.
For this reason, flash storage Solid State Disks (SSDs) have SATA interfaces and are the size of 2.5” laptop hard disks, allowing them to be drop-in replacements for traditional hard disks.
Flash storage SSDs can be used in place of HDDs for primary storage on a FreeNAS system, resulting in a faster, though either smaller or more expensive storage solution.
If going “all-flash”, buy the highest-quality flash storage SSDs the budget allows with a focus on power safety and write endurance that matches your expected write workload.

### NVMe

While it made sense for SSDs to pretend they were HDDs for rapid adoption, the Non-Volatile Memory Express (NVMe) standard is a “native” flash protocol that takes full advantage of the non-linear and parallel nature of flash storage.
The key advantage of NVMe is generally its low-latency performance and it’s quickly becoming a mainstream option for boot and other tasks.
While it was originally limited to expansion-card form factors such as PCIe and M.2, the new U.2 interface offers a rather universal solution that includes the 2.5” drive form factor and an externally-accessible (but generally not hot-swappable) NVMe interface.
Note that NVMe devices can run quite hot and may require dedicated heat sinks.

### Hybrid Storage & Flash Cache (SLOG/ZIL/L2ARC)

With hard disks providing double-digit terabyte capacities and flash-based options providing significantly higher performance, a “best of both worlds” option is available.
With TrueNAS and OpenZFS, you can merge both flash and disk to create “hybrid storage”, which makes the most of both storage types.
In a hybrid configuration, large-capacity spinning disks store the data, while DRAM and flash act as hyper-fast read and write caching.
The technologies work in conjunction with a flash-based separate write log (SLOG), which can be thought of as a write cache that keeps what’s called the ZFS-intent log (ZIL), used to accelerate writes.
On the read side, flash can be used as a level two adaptive replacement (read) cache (L2ARC) to keep the hottest data sets on the faster flash media.
Workloads with synchronous writes such as NFS and databases consistently benefit from SLOG devices, while workloads with frequently-accessed data may benefit from an L2ARC device.
The reason that an L2ARC device is not always the best choice is because the level one ARC in RAM [will always provide a faster cache](https://www.ixsystems.com/blog/visualizing-zfs-performance/); also, some RAM will be used by the L2ARC table.

A SLOG device need not be large as it only needs to service five seconds of data writes delivered by the network or a local application.
A high-endurance, low-latency device between 8 GB and 32 GB in size is adequate for most modern networks, and multiple devices can be striped or mirrored for either performance or redundancy.
Paying attention to the published endurance claims of the device is imperative, since a SLOG will be the funnel point for a majority of the writes made to the system.

It is also vital that a SLOG device has power protection.
The purpose of the ZFS intent log (ZIL), and thus the SLOG, is to keep sync writes safe in the event of a crash or power failure.
If the SLOG isn’t power protected and its data is lost after a power failure, it defeats the purpose of using a SLOG in the first place!
Check the manufacturer’s specifications to ensure the SLOG device is power safe or has power loss/failure protection.

Random read performance is the most important quality to look for in an L2ARC device, as it needs to be able to support more IOPS than the primary storage media it is caching.
For example, a single SSD as an L2ARC is not effective in front of a pool of 40 SSDs; the 40 SSDs will be able to handle far more IOPS than the single L2ARC drive.
As for capacity, 5x to 20x larger than RAM size is a good guideline.
High-end TrueNAS systems can have NVMe-based L2ARC in the double digit terabytes in size, as an example.

Keep in mind that for every data block in the L2ARC, the primary ARC needs an 88 byte entry; this can cause the ARC to fill up unexpectedly and actually reduce performance in a poorly-designed system.
For example, a 480GB L2ARC filled with 4KiB blocks will need more than 10GiB of metadata storage in the primary ARC!

### Self Encrypting Drives

TrueNAS supports two forms of data encryption at rest to achieve privacy and compliance objectives: [Native ZFS encryption](https://www.truenas.com/docs/hub/initial-setup/storage/encryption/) and [Self Encrypting Drives (SEDs)](/hub/initial-setup/storage/sed-drives/).
SEDs do not experience the performance overhead introduced by software partition encryption but aren’t as readily-available as non-SED drives (and thus can cost a little bit more).

### USB Hard Disks

USB-connected hard disks should be avoided for primary storage with FreeNAS but can be used for very basic backups in a pinch.
While TrueNAS does not automate this process, a USB HDD can be connected, replicated at the command line, and ideally taken off-site for safe keeping.

### Boot Devices

It was once very popular to boot FreeNAS systems from 8 GB or larger USB flash drives, but with the wide variance in USB drive quality and the increased drive writes done to the boot pool by modern TrueNAS versions, it’s advisable to look at other options.
For this reason, all TrueNAS Mini and Certified systems ship with either M.2 drives or SATA DOMs.
SATA DOMs, or “disk-on-modules”, offer close to the reliability of consumer 2.5” SSDs with a smaller form factor that mounts to an internal SATA port and therefore doesn’t consume a drive bay.
Because SATA DOMs and motherboards with m.2 slots are not as common as the other storage devices mentioned here, it is popular to boot TrueNAS systems from 2.5” SSDs and HDDs (often mirrored for added redundancy).
8 GB is the recommended minimum size for the TrueNAS boot volume, but using 16 or 32 GB (or a 120 GB 2.5” SATA SSD) provides room for more boot environments.

### Hot Swapability

TrueNAS CORE systems come in all shapes and sizes, but it is highly desirable to have external access to all storage devices for efficient replacement if issues occur.
Most “hot swap” drive bays require a proprietary drive tray into which each drive is installed.
These bay and tray combinations also often include convenient features like activity and identification lights to both visualize activity and illuminate a failed drive with [sesutil(8)](https://www.freebsd.org/cgi/man.cgi?query=sesutil&sektion=8).
TrueNAS Mini systems ship with four or more hot swap bays and FreeNAS Certified systems can support dozens of drives in their head units and external expansion shelves.
Because pre-owned or repurposed hardware is popular among TrueNAS users, pay attention to the maximum performance offered by the hot swap backplanes of a given system, watching for at least 6 Gbps SATA III support.
Note that hot-swapping PCIe NVMe devices is not supported at this time.

### Storage Device Sizing

While [zpool layout](/hub/initial-setup/storage/pools/) (the organization of LUNs and volumes, in TrueNAS/ZFS parlance) is beyond the scope of this guide, the availability of double-digit terabyte drives raises a question that TrueNAS users have not traditionally had the luxury of asking: how many drives should I use to achieve my desired capacity?
Just because one can mirror two 16TB drives to achieve 16TB of available capacity, it doesn’t necessarily mean that one should.
Mirroring two large drives offers the advantage of redundancy and balancing reads between the two devices, potentially lowering power draw, but little else.
The write performance of two large drives will be at most that of a single drive.
By contrast, an array of eight 4TB drives would offer a wide range of configurations to optimize performance and redundancy at a lower cost.
If configured as striped mirrors, eight drives could yield four times greater write performance with similar total capacity.
You may also consider adding a “hot spare” drive with any zpool configuration to allow for the zpool to automatically rebuild itself in the event a primary drive fails in the zpool.

### Storage Device Burn-In

Spinning disk hard drives have moving parts, by definition. These parts are highly-sensitive to shock and vibration, and will eventually wear out with use. Consider pre-flighting every storage device before putting it into production, paying attention to:

* Start a long HDD self test (`smartctl -t long /dev/`)
* After the test is done (could take 12+ hours), check the results (`smartctl -a /dev/`)
* Pending sector reallocations (`smartctl -a /dev/ | grep Current_Pending_Sector`)
* Reallocated sector count (`smartctl -a /dev/ | grep Reallocated_Sector_Ct`)
* UDMA CRC errors (`smartctl -a /dev/ | grep UDMA_CRC_Error_Count`)
* HDD and SSD write latency consistency (`diskinfo -wS `) **Unformatted drives only!**
* HDD and SSD hours (`smartctl -a /dev/ | grep Power_On_Hours`)
* NVMe percentage used (`nvmecontrol logpage -p 2 nvme0 | grep “Percentage used”`)

Take time before deploying the system to create a pool and subject it to as close to the real-world workload as possible.
This may reveal individual drive issues but also can help determine if an alternative pool layout is better suited to that workload.
Be cautious of used drives as vendors may not be honest or informed about the age and health of any given drive.
Check the number of hours on all “new” drives using [smartctl(8)](https://www.ixsystems.com/community/resources/hard-drive-troubleshooting-guide-all-versions-of-freenas.17/) as they may in fact be “recertified” or simply untruthfully advertised.
A drive vendor may also zero the hours of a drive during recertification, masking its true age.
All storage devices sold by iXsystems are tested for a minimum of 48 hours prior to shipment.

### Storage Controllers

The uncontested most popular storage controllers used with TrueNAS are the 6 and 12 Gbps (“Gigabits per second”, sometimes expressed as “Gb/s”) Broadcom (formerly Avago, formerly LSI) SAS host bus adapters (HBA).
These occasionally ship as embedded controllers on some motherboards but are generally PCIe cards with four or more internal or external SATA/SAS ports.
The 6 Gbps LSI 9211 and its rebranded siblings that also use the LSI SAS2008 chip, such as the IBM M1015 and Dell H200 are legendary among TrueNAS users who are building systems using parts from the second hand market.
Broadcom controllers should be flashed with the latest IT or Target Mode firmware to disable the optional RAID functionality found in the “IR” firmware.
For those with the budget, newer models like the Broadcom 9300/9400 series give 12 Gbps SAS capabilities and even NVMe to SAS translation abilities with the 9400 series.
TrueNAS includes the `sas2flash`, `sas3flash`, and `storcli` commands to flash to perform reflashing operations on 9200, 9300, and 9400 series cards respectively.
The FreeNAS Certified line ships with Broadcom 12 Gbps controllers.

Onboard SATA controllers are popular with smaller builds, but motherboard vendors have been better at catering to the needs of NAS users by including more than the traditional four SATA interfaces.
Be aware that many motherboards ship with a mix of 3 Gbps and 6 Gbps onboard SATA interfaces and that choosing the wrong one could impact performance.
If a motherboard includes hardware RAID functionality, do not use or configure it, but note that disabling it in the BIOS may remove some SATA functionality, depending on the motherboard.
Fortunately, most SATA compatibility-related issues are immediately obvious.

In addition, there are countless warnings against using hardware RAID cards with TrueNAS, but it’s really not as cut and dry as that.
ZFS and TrueNAS provide built-in RAID that protects your data better than any hardware RAID card, eliminating the need for one entirely.
However, they can be used if it’s all you have, but like life, there are rules.
First and foremost, do not use their RAID facility (there is one caveat in the bullets below).
Ideally, the chosen hardware RAID card supports HBA mode, also known as “passthrough” or “JBOD” mode, which will allow it to perform indistinguishably from a standard HBA.
If your RAID card does not have this mode, you can configure a RAID0 for every single disk in your system.
It’s not ideal, but it works in a pinch.

If repurposing hardware RAID cards with TrueNAS, be aware that some hardware RAID cards:

* Mask disk serial number and S.M.A.R.T. health information
* May perform slower than their HBA equivalents
* Can cause data loss if a write cache is used with a dead battery backup unit (BBU)

### SAS Expanders

A direct-attached system where every disk is connected to an interface on the controller card is optimal but not always feasible.
A SAS expander is essentially a port multiplier or splitter that enables each SAS port on a controller card to service multiple disks.
They typically only reside on the drive backplane of servers or JBODs that have more than twelve drive bays.
For example, there are TrueNAS JBODs that eclipse 90 drives in only four rack units of space!
This wouldn’t be possible without the miracle of SAS expanders.
Otherwise, imagine how many eight port HBAs would be required to access 90 drives!

While SAS expanders are designed for SAS disks, they can often support SATA disks via the SATA Tunneling Protocol or STP.
SAS disks are still preferred for reasons mentioned in the NL-SAS section above but SATA disks will function on a SAS-based backplane.
Note that the opposite is not true: you can’t use a SAS drive in a port designed for SATA drives.

### Storage Device Cooling

There is a much-cited study floating around that asserts that drive temperature has little impact on drive reliability.
That makes for a great headline or conversation starter but when reading the report carefully, it is clear that the drives were all tested under optimal environmental conditions.
The average temperature that a well-cooled spinning hard disk will reach in production is around 28 °C and [one study](https://en.wikibooks.org/wiki/Minimizing_Hard_Disk_Drive_Failure_and_Data_Loss/Environmental_Control) found that disks experience twice the number of failures for every 12 °C increase in temperature.
While additional drive cooling often comes with additional noise, especially on older systems, there is always a risk of throwing money away by running a server in a data center or closet without noticing that the fans are set to their lowest setting.
Pay close attention to drive temperature in any chassis that supports 16 or more drives, especially if they are exotic, high-density designs.
Every chassis will have certain areas that are warmer for whatever reason but do watch for fan failures and the tendency for some models of 8TB drives to run hotter than other capacities.
In general, try to keep drive temperatures below the drive vendor’s specification.

## Memory, CPU, and Network Considerations

### Memory Sizing

TrueNAS has higher memory requirements than many Network Attached Storage solutions but for good reason: it shares [dynamic random-access memory](https://en.wikipedia.org/wiki/Dynamic_random-access_memory) (DRAM or simply RAM) between sharing services, add-on Plugins, Jails, and Virtual Machines, and sophisticated read caching.
RAM will rarely go unused on a TrueNAS system and sufficient RAM is key to maintaining peak performance.
A minimum of 8 GB of RAM is required for basic TrueNAS operations with up to eight drives.
Beyond that, there are use cases that each have distinct RAM requirements:

* An additional 1GB per additional drive after eight will benefit most use cases.
* In general, if there are more clients connecting to the FreeNAS system, it will need more RAM. A 20 TB pool backing lots of high-performance VMs over iSCSI might need more RAM than a 200 TB pool storing archival data. If using iSCSI to back VMs, plan to use at least 16 GB of RAM for reasonable performance and 32 GB or more for optimal performance.
* Directory Services require an additional 2 GB of RAM for the winbind internal cache
* Plugins and Jails each have specific application RAM requirements
* Virtual machines have specific guest operating system and application RAM requirements
* Deduplication depends on an in-RAM deduplication table with a suggestion of 5 GB per TB of storage.
* Attaching an L2ARC drive to a pool will actually use some RAM, too. ZFS needs metadata in ARC to know what data is in L2ARC. As a conservative estimate, plan to add about 1 GB of RAM for every 50 GB of L2ARC in your pool.

### Error Correcting Code Memory

Electrical or magnetic interference inside a computer system can cause a single bit of RAM to spontaneously flip to the opposite state, resulting in what’s known as a memory error.
Memory errors can cause security vulnerabilities, crashes, transcription errors, lost transactions, and corrupted or lost data.
Therefore, one of the most vital areas for preventing data loss is where data is temporarily stored: RAM.

Error Correcting Code or ECC RAM detects and corrects in-memory bit errors as they occur.
If the errors are severe enough to be uncorrectable, ECC memory will cause the system to “hang” (become unresponsive) rather than continue with errored bits.
For ZFS and FreeNAS, this behavior virtually eliminates any chances that RAM errors will be passed to the drives and cause corruption of the ZFS pools or errors in the files.

The lengthy, Internet-wide debate on whether or not to use Error Correcting Code (ECC) system memory with OpenZFS and TrueNAS can be summarized as:

* Using ECC RAM is *strongly* recommended as another data integrity defense

However:

* Not all CPUs or motherboards support ECC RAM
* Many FreeNAS systems operate every day without ECC RAM
* Any type or grade of RAM can fail and cause data loss
* Test all RAM before deployment as it is most likely to fail in the [first three months](https://media.kingston.com/images/usb/pdf/Server_Burn-in.pdf)


### Central Processing Unit (CPU) Selection

Choosing ECC RAM will significantly reduce the available CPU and motherboard options, but this is actually a good thing.
Intel<sup>®</sup> makes a point of limiting ECC RAM support to their lowest and highest-end CPUs, cutting out the mid-range i5 and i7 models.
All TrueNAS Mini systems ship with Intel Denverton C3000 CPUs and all FreeNAS Certified and TrueNAS systems ship with Intel Xeon® CPUs.

Exactly what CPU to choose can come down to a short list of key factors:

* An underpowered CPU can be a performance bottleneck due to the way OpenZFS checksums, compresses, and (optionally) encrypts data.
* Samba, the FreeNAS SMB daemon is lightly-threaded, so a higher-frequency CPU with fewer cores will usually perform best for SMB-only workloads.
* A higher-core-count CPU is better suited for parallel encryption and virtualization.
* AES-NI encryption acceleration support will improve the speed of file system and network encryption.
* Server-class CPUs are recommended for their power and ECC memory support.
* A Xeon E5 (or similar) CPU is recommended for use with software-encrypted pools.
* Intel Ivy Bridge or later CPUs are strongly recommended for virtual machine use.
* Watch for VT-d/AMD-Vi device virtualization support on the CPU and motherboard to pass PCIe devices to virtual machines.
* Be aware if a given CPU contains a GPU or requires an external one. Also note that many server motherboards include a BMC chip with a built-in GPU. See below for more details on BMCs.

AMD CPUs are making a comeback thanks to the Ryzen and EPYC (Naples/Rome) lines but support for these platforms has been relatively limited on FreeBSD and, by extension, TrueNAS.
They will work, but there has been less run time and performance tuning.

### Remote Management: IPMI

As a courtesy to *further* limit the motherboard choices, the Intelligent Platform Management Interface or IPMI, a.k.a. Baseboard Management Controller (or BMC, iLo, iDrac, and other names depending on the vendor) should be considered if you need:

* Remote power control and monitoring of remote systems
* Remote console shell access for configuration or data recovery
* Remote virtual media for TrueNAS installation or reinstallation

Because TrueNAS relies heavily on its web-based user interface (UI), console access can occasionally be needed to make network configuration changes.
TrueNAS administration and sharing default to a single network interface, and this becomes a challenge when it comes time to upgrade, for example, LACP aggregated networking.
The ideal solution is to have a dedicated subnet for access to the TrueNAS web UI, but this luxury is not available to all users.
This is why the occasional visit to the hardware console is necessary for global configuration and, possibly, system recovery.
The latest TrueNAS Mini and Certified systems ship with full-featured, HTML5-based IPMI support on a dedicated gigabit network interface.

### Power Supply Units

The top criteria to consider for a power supply unit or PSU on a TrueNAS system are its:

* Power capacity (in watts) for the motherboard and number of drives it must support
* Reliability
* Efficiency Rating
* Relative noise
* Optional redundancy to keep an important system running if one power supply fails

It is critical that PSU(s) are rated for the initial and future load that will be placed on them.
If the plan is to gradually populate a large storage chassis, be sure to have adequate power for the fully-populated chassis.
Also consider a hot-swappable redundant PSU to help guarantee uptime.
Users on a budget can keep a cold spare PSU to limit their potential downtime to hours, rather than days.
A good, modern PSU is efficient and is fully integrated into the IPMI management system to provide real time fan, temperature, and load information. 

Most power supplies are certified with an efficiency rating known as an [“80 Plus”](https://en.wikipedia.org/wiki/80_Plus) rating.
This rating indicates how much power drawn from the wall will be lost as heat, noise, and vibrations, instead of doing useful work like powering your components.
If a power supply needs to draw 600 watts from the wall to provide 500 watts of power to your components, it’s operating at 500/600 = \~83% efficiency.
The other 100 watts gets lost as heat, noise, and vibration.
Power supplies with higher ratings will be more efficient, but can also be far more expensive.
Do some return-on-investment calculations if you’re unsure what efficiency to purchase.
For example, if an 80 Plus Platinum PSU costs $50 more than the comparable 80 Plus Gold, it would need to save you at least $10 per year on your power bill for that investment to pay off over 5 years.
You can read more about 80 Plus ratings in [this post](https://www.tomshardware.com/news/what-80-plus-levels-mean,36721.html).

### Uninterruptible Power Supplies

TrueNAS provides the ability to communicate with a battery-backed, uninterruptible power supply (UPS) over a traditional serial or USB connection to coordinate a graceful shutdown in the case of power loss.
TrueNAS is known to work well with APC brand UPSs, followed by CyberPower, and consider budgeting for a UPS with pure sine wave output.
Some models of SSD can experience data corruption on power loss.
If multiple SSDs experience this simultaneously, this could cause total pool failure, making a UPS a critical investment.

### Ethernet Networking

The “Network” in “Network Attached Storage” is obviously just as important as Storage but the topic can be reduced to a few key points:

* Simplicity is often the secret to reliability with network configurations.
* Faster individual interfaces such as 10/25/40/100GbE are preferred to aggregating slower interfaces.
* Intel and Chelsio interfaces are the best [supported options](https://www.freebsd.org/releases/11.3R/hardware.html#ethernet).
* Only consider a “jumbo frames” [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) with dedicated connections such as between servers or video editors and TrueNAS that are not likely to experience packet fragmentation.
* Interfaces with [LRO](https://en.wikipedia.org/wiki/Large_receive_offload) and [LSO](https://en.wikipedia.org/wiki/Large_send_offload) offload features will generally alleviate the need for jumbo frames and their use can result in lower CPU overhead.

### High Speed Interconnects

As the pace of hardware developement increases and enterprises upgrade at a faster pace, higher bandwidth hardware is becoming more and more accessible.
It's now realistic for home labs to employ 40GB and higher networking components.
Home users are now discovering the same complications with these speeds that have been found by Enterprise customers.

iXsystems highly recommends using Optical Fiber over Direct Attached Copper (DAC) cables for the high speed interconnects listed below:

* 10Gb NICs: SFP+ connectors
* 25Gb NICs: SFP28 connectors
* 40Gb NICs: QSFP+ connectors
* 100Gb NICs: QSFP28 connectors
* 200Gb NICs: QSFP56 connectors
* 400Gb NICs: QSFP-DD connectors

iXsystems also recommends using optical fiber for any of the aforementioned transceiver form factors when using Fibre Channel.
Direct Attached Copper (DAC) cables could create interoperability issues between the NIC, cable and switch.

## Virtualized TrueNAS CORE

Finally, the ultimate TrueNAS hardware question is whether to use actual hardware at all or go with a virtualization solution.
TrueNAS developers [virtualize TrueNAS every day](https://www.ixsystems.com/blog/yes-you-can-virtualize-freenas/) as part of their work, and cloud services are obviously popular among users of all sizes.
The fact remains, however, that OpenZFS at the heart of TrueNAS has been designed from day one to work directly with physical storage devices, fully aware of their strengths and compensating for their weaknesses.
Also, at the heart of TrueNAS is FreeBSD, which offers exemplary hardware performance and health reporting.
When the need arises to virtualize TrueNAS:

* Pass hardware disks or the entire storage controller to the FreeNAS VM if possible (requires VT-d/AMD-Vi support)
* Disable automatic scrub pools on virtualized storage such as VMFS, and never scrub a pool while storage repair tasks are taking place on another layer
* Use a minimum of three vdevs to provide adequate metadata redundancy, even with a striped pool
* Remember to provide one or more 8GB or larger boot devices 
* Provide the FreeNAS VM with adequate RAM, as per its usual requirements
* Consider “jumbo frame” networking if supported by all devices
* Be prepared that the “guest tools” in FreeBSD may lack features found in other guest operating systems
* Enable MAC address spoofing on virtual interfaces and enable “promiscuous mode” to use VNET Jail and Plugins

Follow these rules when buying or building your next TrueNAS system to achieve maximum reliability, performance, and manageability.
[TrueNAS Mini](https://www.truenas.com/truenas-mini/) and [FreeNAS Certified](https://www.ixsystems.com/freenas-certified-servers/) systems are tailor made for TrueNAS and take each of these best practices into consideration for the very best TrueNAS experience.
