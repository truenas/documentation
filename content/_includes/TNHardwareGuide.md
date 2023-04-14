---
---

{{< toc >}}

From repurposed systems to highly custom builds, the fundamental freedom of TrueNAS is the ability to run it on almost any x86 computer.

## Minimum Hardware Requirements

Our recommended system requirements to install TrueNAS:

| Processor | Memory | Boot Device | Storage |
|-----------|--------|-------------|---------|
| 2-Core Intel 64-Bit or AMD x86_64 processor | 8 GB Memory | 16 GB SSD boot device | Two identically-sized devices for a single storage pool |

The TrueNAS installer recommends 8 GB of RAM. TrueNAS installs, runs, and operates jails. It also hosts SMB shares and replicates TBs of data with less. iXsystems recommends the above for better performance and fewer issues.

You do not need an SSD boot device, but we discourage using a spinner or a USB stick.
We do not recommend installing TrueNAS on a single disk or striped pool unless you have a good reason to do so. You can install and run TrueNAS without any data devices, but we strongly discourage it.

TrueNAS does not require two cores, as most halfway-modern 64-bit CPUs likely already have at least two.

For help building a system according to your unique performance, storage, and networking requirements, keep reading.

## Storage Considerations

The heart of any storage system is the symbiotic pairing of its file system and physical storage devices.
The ZFS file system in TrueNAS provides the [best available data protection of any file system at any cost](https://www.ixsystems.com/blog/openzfs-vs-the-competition/) and makes effective use of both spinning-disk and all-flash storage or a mix of the two.
ZFS is prepared for the eventual failure of storage devices, and is highly configurable to achieve the perfect balance of redundancy and performance to meet any storage goal.
A properly-configured TrueNAS system can tolerate multiple storage device failures and recreate its boot media with a copy of the [configuration file]({{< relref "/content/CORE/CORETutorials/SystemConfiguration/UsingConfigurationBackups.md" >}}).

### Storage Device Quantities

TrueNAS can manage many storage devices as part of a single storage array. With more Enterprise-level tuning in the mature 13.0 release and similar tuning in the upcoming SCALE Cobia release, TrueNAS can manage as many as 1,250 drives in a single storage array!

### Storage Media

Choosing storage media is the first step in designing the storage system to meet immediate objectives and prepare for future capacity expansion.

{{< expand "Spinning Disks" "v" >}}
Until the next scientific breakthrough in storage media, spinning hard disks are here to stay thanks to their balance of capacity and cost.
The arrival of double-digit terabyte consumer and enterprise drives provides more choices to TrueNAS users than ever.
TrueNAS Mini systems ship with Western Digital NAS and NL-SAS by default. Understanding the alternatives explains why.
{{< /expand >}}

{{< expand "SATA NAS Disks" "v" >}}
Serial Advanced Technology Attachment (SATA) is still the de facto standard disk interface found in many desktop/laptop computers, servers, and some non-enterprise storage arrays.
The first SATA disks offered double-digit gigabyte capacities. Newer SATA disks meet many size, reliability, and performance goals.
While consumer desktop SATA disks do not have the overall reliability issues they once had, they are still not designed or warrantied for continuous operation or use in RAID groups.
Enterprise SATA disks address the always-on factor, vibration tolerance, and drive error handling required in storage systems. However, the price gap between desktop and enterprise SATA drives is so vast that many users push their consumer drives into 24/7 service pursuing cost savings.

Drive vendors, likely tired of honoring warranties for failed desktop drives used in incorrect applications, responded to this gap in the market by producing NAS drives. NAS drives achieved fame from the original Western Digital (WD) Red™ drives with CMR/PMR technology (now called WD Red Plus).
Western Digital Designed the WD Red™ Plus NAS drives (non-SMR) for systems with up to 8 hard drives, the [WD Red™ Pro](https://www.westerndigital.com/products/internal-drives/wd-red-pro-sata-hdd) for systems with up to 16 drives, and the [WD UltraStar™](https://www.westerndigital.com/products/data-center-platforms) for systems beyond 16 drives.

The iXsystems Community Forum preferres WD drives for TrueNAS builds due to their exceptional quality and reliability.
All TrueNAS Minis ship with WD Red™ Plus drives unless requested otherwise.
{{< /expand >}}

{{< expand "Nearline SAS Disks" "v" >}}
Nearline SAS (NL-SAS) disks are 7200 RPM enterprise SATA disks with the industry-standard SAS interface in most enterprise storage systems.
SAS stands for **Serial Attached SCSI**, with the traditional SCSI disk interface in serial form.
SAS systems, designed for data center storage applications, have accurate, verbose error handling, predictable failure behavior, reliable hot swapping, and the added feature of multipath support.
Multipath access means that each drive has two interfaces and can connect to two storage controllers or one controller over two cables.
This redundancy protects against cable, controller card, or complete system failure in the case of the TrueNAS high-availability architecture in which each controller is an independent server that accesses the same set of NL-SAS drives.
NL-SAS drives are also robust enough to handle the rigors of systems with more than 16 disks.
So, capacity-oriented TrueNAS systems ship with [Western Digital UltraStar](https://www.westerndigital.com/products/data-center-platforms) NL-SAS disks thanks to the all-around perfect balance of capacity, reliability, performance, and flexibility that NL-SAS drives offer.
{{< /expand >}}

{{< expand "SAS Disks" "v" >}}
Enterprise SAS disks, built for the maximum performance and reliability that a spinning platter can provide, are the traditional heavy-lifters of the enterprise storage industry.
SAS disk capacities are low compared to NL-SAS or NAS drives due to the speed at which the platters spin, reaching as high as 15,000 RPMs.
While SAS drives may sound like the ultimate answer for high-performance storage, many consumer and enterprise flash-based options have come onto the market and significantly reduced the competitiveness of SAS drives.
For example, we almost completely replaced enterprise SAS drives discontinued from the TrueNAS product lines with flash drives (SSDs or NVMe) in 2016 due to their superior performance/cost ratio.
{{< /expand >}}

{{< expand "SATA & SAS Flash Storage SSDs" "v" >}}
Flash storage technology has progressed significantly in recent years, leading to a revolution in mobile devices and the rise of flash storage in general-purpose PCs and servers.
Unlike hard disks, flash storage is not sensitive to vibration and can be much faster with comparable reliability.
Flash storage remains more expensive per GB, but is becoming more common in TrueNAS systems as the price gap narrows.

The shortest path for introducing flash storage into the mainstream market was for vendors to use standard SATA/SAS hard disk interfaces and form factors that emulate standard hard disks without moving parts.
For this reason, flash storage Solid State Disks (SSDs) have SATA interfaces and are the size of 2.5" laptop hard disks, allowing them to be drop-in replacements for traditional hard disks.
Flash storage SSDs can replace HDDs for primary storage on a TrueNAS system, resulting in a faster, albiet smaller or more expensive storage solution.
If you plan to go all-flash, buy the highest-quality flash storage SSDs your budget allows, focusing on power, safety, and write endurance that matches your expected write workload.
{{< /expand >}}

{{< expand "NVMe" "v" >}}
While SSDs pretending to be HDDs made sense for rapid adoption, the Non-Volatile Memory Express (NVMe) standard is a native flash protocol that takes full advantage of the flash storage non-linear, parallel nature.

The main advantage of NVMe is its low-latency performance. NVMe is becoming a mainstream option for boot and other tasks. At first, NVMe only came in expansion-card form factors such as PCIe and M.2. The new U.2 interface offers a universal solution that includes the 2.5" drive form factor and an externally accessible (but generally not hot-swappable) NVMe interface.

NVMe devices can run quite hot and may need dedicated heat sinks.

{{< hint info >}}
Manual S.M.A.R.T. tests on NVMe devices is currently not supported.
{{< /hint >}}
{{< /expand >}}

{{< expand "USB Hard Disks" "v" >}}
Avoid using USB-connected hard disks for primary storage with TrueNAS. You can use USB Hard Disks for very basic backups in a pinch.
While TrueNAS does not automate this process, you can connect a USB HDD, replicate at the command line, and then take it off-site for safekeeping.

{{< hint warning >}}
**Warning:** USB-connected media (including SSDs) may report their serial numbers inaccurately, making them indistinguishable.
{{< /hint >}}
{{< /expand >}}

These storage device media arrange together to create powerful storage solutions.

### Storage Solutions

{{< expand "Hybrid Storage & Flash Cache (SLOG/ZIL/L2ARC)" "v" >}}
With hard disks providing double-digit terabyte capacities and flash-based options providing even higher performance, a best-of-both-worlds option is available.
With TrueNAS and OpenZFS, you can merge flash and disk to create hybrid storage that makes the most of both types.
Hybrid setups use high-capacity spinning disks to store data, while DRAM and flash perform hyper-fast read and write caching.
The technologies work together with a flash-based separate write log (SLOG). Think of it as a write cache keeping the ZFS-intent log (ZIL) that speeds up writes.
On the read side, flash is a level two adaptive replacement (read) cache (L2ARC) to keep the hottest data sets on the faster flash media.
Workloads with synchronous writes, such as NFS and databases, benefit from SLOG devices, while workloads with frequently-accessed data might benefit from an L2ARC device.
An L2ARC device is not always the best choice because the level one ARC in RAM [always provides a faster cache](https://www.ixsystems.com/blog/visualizing-zfs-performance/), and the L2ARC table uses some RAM.

SLOG devices do not need a large capacity since they only need to service five seconds of data writes delivered by the network or a local application.
A high-endurance, low-latency device between 8 GB and 32 GB is adequate for most modern networks, and you can strip or mirror several devices for either performance or redundancy.
Pay attention to the published endurance claims for the device since a SLOG acts as the funnel point for most of the writes made to the system.

SLOG devices also need power protection.
The purpose of the ZFS intent log (ZIL), and thus the SLOG, is to keep sync writes safe during a crash or power failure.
If the SLOG is not power-protected and loses data after a power failure, it defeats the purpose of using a SLOG in the first place.
Check the manufacturer specifications for the device to ensure the SLOG device is power-safe or has power loss/failure protection.

The most important quality to look for in an L2ARC device is random read performance. 
The device must support more IOPS than the primary storage media it caches.
For example, using a single SSD as an L2ARC is ineffective in front of a pool of 40 SSDs, as the 40 SSDs can handle far more IOPS than the single L2ARC drive.
As for capacity, 5x to 20x more than the RAM size is a good guideline.
High-end TrueNAS systems can have NVMe-based L2ARC in double-digit terabyte sizes.

Remember that for every data block in the L2ARC, the primary ARC needs an 88-byte entry. 
Poorly-designed systems can cause an unexpected fill-up in the ARC and reduce performance.
For example, a 480 GB L2ARC filled with 4KiB blocks needs more than 10GiB of metadata storage in the primary ARC.
{{< /expand >}}

{{< expand "Self Encrypting Drives" "v" >}}
TrueNAS supports two forms of data encryption at rest to achieve privacy and compliance objectives: [Native ZFS encryption]({{< relref "CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}) and [Self Encrypting Drives (SEDs)]({{< relref "/CORE/CORETutorials/Storage/SED.md" >}}).
SEDs do not experience the performance overhead introduced by software partition encryption but are not as readily available as non-SED drives (and thus can cost a little more).
{{< /expand >}}

{{< expand "Boot Devices" "v" >}}
Booting legacy FreeNAS systems from 8 GB or larger USB flash drives was once very popular. 
We recommend looking at other options since USB drive quality varies widely, and modern TrueNAS versions perform increased drive writes to the boot pool.
For this reason, all pre-built [TrueNAS Systems]({{< relref "/hardware/_index.md" >}}) ship with either M.2 drives or SATA DOMs.

SATA DOMs, or disk-on-modules, offer reliability close to consumer 2.5" SSDs with a smaller form factor that mounts to an internal SATA port and does not use a drive bay.
Because SATA DOMs and motherboards with M.2 slots are not as common as the other storage devices mentioned here, users often boot TrueNAS systems from 2.5" SSDs and HDDs (often mirrored for added redundancy).
The recommended size for the TrueNAS boot volume is 8 GB, but 16 or 32 GB (or a 120 GB 2.5" SATA SSD) provides room for more boot environments.
{{< /expand >}}

{{< expand "Hot Swapability" "v" >}}
TrueNAS systems come in all shapes and sizes. 
Many users want external access to all storage devices for efficient replacement if issues occur.
Most hot-swap drive bays need a proprietary drive tray into which you install each drive.
These bay and tray combinations often include convenient features like activity and identification lights to visualize activity and illuminate a failed drive with sesutil(8) (https://www.freebsd.org/cgi/man.cgi?query=sesutil&sektion=8 for CORE, https://manpages.debian.org/testing/sg3-utils/sg3_utils.8.en.html for SCALE).
TrueNAS Mini systems ship with four or more hot-swap bays. 
TrueNAS R-Series systems can support dozens of drives in their head units and external expansion shelves.
Pre-owned or repurposed hardware is popular among TrueNAS users.  
Pay attention to the maximum performance offered by the hot-swap backplanes of a given system. 
Aim for at least 6 Gbps SATA III support.
Note that hot-swapping PCIe NVMe devices is not currently supported.
{{< /expand >}}

{{< hint warning >}}
TrueNAS SCALE does not officially support T10-DIF drives. [Users on our forums have developed a workaround for using T10-DIF drives in TrueNAS SCALE](https://www.truenas.com/community/threads/troubleshooting-disk-format-warnings-in-bluefin.106051/), but using unsupported storage devices imposes data-loss risks.
{{< /hint >}}

### Storage Device Sizing

[Zpool layout]({{< relref "PoolCreate.md#vdev-layout" >}}) (the organization of LUNs and volumes, in TrueNAS/ZFS parlance) is outside of the scope of this guide. 
The availability of double-digit terabyte drives raises a question TrueNAS users now have the luxury of asking: How many should I use to achieve my desired capacity?
You can mirror two 16 TB drives to achieve 16 TB of available capacity, but that does not mean you should.
Mirroring two large drives offers the advantage of redundancy and balancing reads between the two devices, which could lower power draw, but little else.
The write performance of two large drives is similar to that of a single drive.
By contrast, an array of eight 4 TB drives offers a wide range of configurations to optimize performance and redundancy at a lower cost.
If configured as striped mirrors, eight drives could yield four times greater write performance with a similar total capacity.
You might also consider adding a hot-spare drive with any zpool configuration, which lets the zpool automatically rebuild itself if one of its primary drives fails.

### Storage Device Burn-In

Spinning disk hard drives have moving parts that are highly sensitive to shock and vibration and wear out with use. 
Consider pre-flighting every storage device before putting it into production.

* Start a long HDD self-test (`smartctl -t long /dev/`), and after the test completes (could take 12+ hrs)
* Check the results (`smartctl -a /dev/`)
* Check pending sector reallocations (`smartctl -a /dev/ | grep Current_Pending_Sector`)
* Check reallocated sector count (`smartctl -a /dev/ | grep Reallocated_Sector_Ct`)
* Check the UDMA CRC errors (`smartctl -a /dev/ | grep UDMA_CRC_Error_Count`)
* Check HDD and SSD write latency consistency (`diskinfo -wS `) *Unformatted drives only!*
* Check HDD and SSD hours (`smartctl -a /dev/ | grep Power_On_Hours`)
* Check NVMe percentage used (`nvmecontrol logpage -p 2 nvme0 | grep “Percentage used”`)

Take time to create a pool before deploying the system. 
Subject it to as close to a real-world workload as possible to reveal individual drive issues and help determine if an alternative pool layout is better suited to that workload.
Be cautious of used drives, as vendors may not be honest or informed about their age and health.
Verify vendors have not recertified all new drives by checking the hours using `smartctl(8)`.
A drive vendor could also zero the hours of a drive during recertification, masking its age.
iXsystems tests all storage devices it sells for at least 48 hours before shipment.

### Storage Controllers

The uncontested most popular storage controllers used with TrueNAS are the 6 and 12 Gbps (Gigabits per second, sometimes expressed as Gb/s) Broadcom (formerly Avago, formerly LSI) SAS host bus adapters (HBA).
Controllers ship embedded on some motherboards but are generally PCIe cards with four or more internal or external SATA/SAS ports.
The 6 Gbps LSI 9211 and its rebranded siblings with the LSI SAS2008 chip, such as the IBM M1015 and Dell H200, are legendary among TrueNAS users who build systems using parts from the second-hand market. 
Flash using the latest IT or Target Mode firmware to disable the optional RAID functionality found in the IR firmware on Broadcom controllers.
For those with the budget, newer models like the Broadcom 9300/9400 series give 12 Gbps SAS capabilities and even NVMe to SAS translation abilities with the 9400 series.
TrueNAS includes the `sas2flash`, `sas3flash`, and `storcli` commands to flash or perform re-flashing operations on 9200, 9300, and 9400 series cards.

Onboard SATA controllers are popular with smaller builds, but motherboard vendors are better at catering to the needs of NAS users by including more than the traditional four SATA interfaces.
Be aware that many motherboards ship with a mix of 3 Gbps and 6 Gbps onboard SATA interfaces and that choosing the wrong one could impact performance.
If a motherboard includes hardware RAID functionality, do not use or configure it, but note that disabling it in the BIOS might remove some SATA functionality, depending on the motherboard.
Most SATA compatibility-related issues are immediately apparent.

There are countless warnings against using hardware RAID cards with TrueNAS. 
ZFS and TrueNAS provide a built-in RAID that protects your data better than any hardware RAID card.
You can use a hardware RAID card if it is all you have, but there are limitations.
First and most importantly, do not use their RAID facility if your hardware RAID card supports HBA mode, also known as passthrough or JBOD mode (there is one caveat in the bullets below). When used, it allows it to perform indistinguishably from a standard HBA.
If your RAID card does not have this mode, you can configure a RAID0 for every disk in your system.
While not the ideal setup, it works in a pinch.
If repurposing hardware RAID cards with TrueNAS, be aware that some hardware RAID cards:

* Could mask disk serial number and S.M.A.R.T. health information
* Could perform slower than their HBA equivalents
* Could cause data loss if using a write cache with a dead battery backup unit (BBU))

### SAS Expanders

A direct-attached system, where every disk connects to an interface on the controller card, is optimal but not always possible.
A SAS expander (a port multiplier or splitter) enables each SAS port on a controller card to service many disks.
You find SAS expanders only on the drive backplane of servers or JBODs with more than twelve drive bays.
For example, a [TrueNAS JBOD that eclipses 90 drives]({{< relref "ES102BSG.md" >}}) in only four rack units of space is not possible without SAS expanders.
Imagine how many eight-port HBAs you need to access 90 drives without SAS expanders.

While SAS expanders, designed for SAS disks, can often support SATA disks via the SATA Tunneling Protocol or STP, we still prefer SAS disks for reasons mentioned in the NL-SAS section above (SATA disks function on a SAS-based backplane).
Remember that you cannot use a SAS drive in a port designed for SATA drives.

### Storage Device Cooling

A much-cited study floating around the Internet asserts that drive temperature has little impact on drive reliability.
The study makes for a great headline or conversation starter, but carefully reading the report indicates that they tested the drives under optimal environmental conditions.
The average temperature that a well-cooled spinning hard disk reaches in production is around 28 °C, and [one study](https://en.wikibooks.org/wiki/Minimizing_Hard_Disk_Drive_Failure_and_Data_Loss/Environmental_Control) found that disks experience twice the number of failures for every 12 °C increase in temperature.
Before adding drive cooling that often comes with added noise (especially on older systems), know that you risk throwing money away by running a server in a data center or closet without noticing that the internal cooling fans are at their lowest setting.
Pay close attention to drive temperature in any chassis that supports 16 or more drives, especially if they are exotic, high-density designs.
Every chassis has certain areas that are warmer for whatever reason. Watch for fan failures and the tendency for some models of 8 TB drives to run hotter than other drive capacities.
In general, try to keep drive temperatures below the drive specification provided by the vendor.

## Memory, CPU, and Network Considerations

### Memory Sizing

TrueNAS has higher memory requirements than many Network Attached Storage solutions for good reason: it shares [dynamic random-access memory](https://en.wikipedia.org/wiki/Dynamic_random-access_memory) (DRAM or simply RAM) between sharing services, add-on plugins, jails, and virtual machines, and sophisticated read caching.
RAM rarely goes unused on a TrueNAS system, and enough RAM is vital to maintaining peak performance.
You should have 8 GB of RAM for basic TrueNAS operations with up to eight drives. Other use cases each have distinct RAM requirements:

* Add 1 GB for each drive added after eight to benefit most use cases.
* Add extra RAM (in general) if more clients will connect to the TrueNAS system. A 20 TB pool backing many high-performance VMs over iSCSI might need more RAM than a 200 TB pool storing archival data. If using iSCSI to back up VMs, plan to use at least 16 GB of RAM for good performance and 32 GB or more for optimal performance.
* Add 2 GB of RAM for directory services for the Winbind internal cache.
* Add more RAM for plugins and jails, as each has specific application RAM requirements.
* Add more RAM for virtual machines with a guest operating system and application RAM requirements.
* Add the suggested 5 GB per TB of storage for deduplication that depends on an in-RAM deduplication table.
* Add approximately 1 GB of RAM (conservative estimate) for every 50 GB of L2ARC in your pool. Attaching an L2ARC drive to a pool uses some RAM, too. ZFS needs metadata in ARC to know what data is in L2ARC.  

### Error Correcting Code Memory

Electrical or magnetic interference inside a computer system can cause a spontaneous flip of a single bit of RAM to the opposite state, resulting in a memory error.
Memory errors can cause security vulnerabilities, crashes, transcription errors, lost transactions, and corrupted or lost data.
So RAM, the temporary data storage location, is one of the most vital areas for preventing data loss.

Error-correcting code or ECC RAM detects and corrects in-memory bit errors as they occur.
If errors are severe enough to be uncorrectable, ECC memory causes the system to hang (become unresponsive) rather than continue with errored bits.
For ZFS and TrueNAS, this behavior virtually eliminates any chances that RAM errors pass to the drives to cause corruption of the ZFS pools or file errors.

To summarize the lengthy, Internet-wide debate on whether to use error-correcting code (ECC) system memory with OpenZFS and TrueNAS:

Most users *strongly* recommend ECC RAM as another data integrity defense.

However:

* Some CPUs or motherboards support ECC RAM but not all
* Many TrueNAS systems operate every day without ECC RAM
* RAM of any type or grade can fail and cause data loss
* RAM failures usually occur in the [first three months](https://media.kingston.com/images/usb/pdf/Server_Burn-in.pdf), so test all RAM before deployment.  

### Central Processing Unit (CPU) Selection

Choosing ECC RAM limits your CPU and motherboard options, but that can be beneficial.
Intel<sup>®</sup> limits ECC RAM support to their lowest and highest-end CPUs, cutting out the mid-range i5 and i7 models.

Which CPU to choose can come down to a short list of factors:

* An underpowered CPU can create a performance bottleneck because of how OpenZFS compresses and encrypts (optional) data and performs checksums.
* A higher-frequency CPU with fewer cores usually performs best for SMB-only workloads because of Samba, the lightly-threaded TrueNAS SMB daemon.
* A higher-core-count CPU is better suited for parallel encryption and virtualization.
* A CPU with AES-NI encryption acceleration support improves the speed of the file system and network encryption.
* A server-class CPU is recommended for its power and ECC memory support.
* A Xeon E5 CPU (or similar) is recommended for software-encrypted pools.
* An Intel Ivy Bridge CPU or later recommended for virtual machine use.

Watch for VT-d/AMD-Vi device virtualization support on the CPU and motherboard to pass PCIe devices to virtual machines.
Be aware if a given CPU contains a GPU or requires an external one. Also note that many server motherboards include a BMC chip with a built-in GPU. See below for more details on BMCs.

AMD CPUs are becoming more popular thanks to the Ryzen and EPYC (Naples/Rome) lines. Support for these platforms is limited on FreeBSD and, by extension, TrueNAS CORE. However, Linux has more support, and TrueNAS SCALE should work with AMD CPUs without issue.

{{< expand "SHA Extensions for x86 instruction set architecture" "v" >}}
SHA Extensions in the x86 instruction set architecture support Secure Hash Algorithm family hardware acceleration.

Intel Goldmont (and later), Ice Lake (and later), and Rocket Lake (and later), as well as AMD Zen (and later) processors support the SHA instruction set.
{{< /expand >}}

### Remote Management: IPMI

As a courtesy to further limit the motherboard choices, consider the Intelligent Platform Management Interface or IPMI (a.k.a. baseboard management controller, BMC, iLo, iDrac, and other names depending on the vendor) if you need:

* Remote power control and monitoring of remote systems
* Remote console shell access for configuration or data recovery
* Remote virtual media for TrueNAS installation or reinstallation

TrueNAS relies on its web-based user interface (UI), but you might occasionally need console access to make network configuration changes.
TrueNAS administration and sharing use a single network interface by default, which can be challenging when you upgrade features like LACP aggregated networking.
The ideal solution is to have a dedicated subnet to access the TrueNAS web UI, but not all users have this luxury. The occasional visit to the hardware console is necessary for global configuration and system recovery.
The latest TrueNAS Mini and R-Series systems ship with full-featured, HTML5-based IPMI support on a dedicated gigabit network interface.

### Power Supply Units

The top criteria to consider for a power supply unit (or PSU) on a TrueNAS system are:

* Power capacity (in watts) for the motherboard and the number of drives it must support
* Reliability
* Efficiency rating
* Relative noise
* Optional redundancy to keep critical systems running if one power supply fails

Select a PSU rated for the initial and a future load placed on it.
Have a PSU with adequate power to migrate from a large-capacity chassis to a fully-populated chassis.
Also, consider a hot-swappable redundant PSU to help guarantee uptime.
Users on a budget can keep a cold spare PSU to limit their potential downtime to hours rather than days.
A good, modern PSU is efficient and integrates into the IPMI management system to provide a real-time fan, temperature, and load information. 

Most power supplies carry a certified efficiency rating known as an [80 Plus](https://en.wikipedia.org/wiki/80_Plus) rating.
The 80 plus rating indicates the PSU loses the power drawn from the wall as heat, noise, and vibration instead of powering your components.
If a power supply needs to draw 600 watts from the wall to provide 500 watts of power to your components, it operates at 500/600 = \~83% efficiency.
The other 100 watts get lost as heat, noise, and vibration.
Power supplies with higher ratings are more efficient but also far more expensive.
Do some return-on-investment calculations if you are unsure what efficiency to buy.
For example, if an 80 Plus Platinum PSU costs $50 more than the comparable 80 Plus Gold, it should save you at least $10 per year on your power bill for that investment to pay off over five years.
You can read more about 80 Plus ratings in [this post](https://www.tomshardware.com/news/what-80-plus-levels-mean,36721.html).

### Uninterruptible Power Supplies

TrueNAS allows the system to comunicate with a battery-backed, uninterruptible power supply (UPS) over a traditional serial or USB connection to coordinate a graceful shutdown in the case of power loss.
TrueNAS works well with APC brand UPS, followed by CyberPower. Consider budgeting for a UPS with pure sine wave output.
Some models of SSD can experience data corruption on power loss.
If several SSDs experience simultaneous power loss, it could cause total pool failure, making a UPS a critical investment.

### Ethernet Networking

The network in Network Attached Storage is as important as storage, but the topic reduces to a few key points:

* Simplicity - Simplicity is often the secret to reliability with network configurations.
* Individual interfaces - Faster individual interfaces such as 10/25/40/100GbE are preferable to aggregating slower interfaces.
* Interface support - Intel and Chelsio interfaces are the best-supported options.
* Packet fragmentation - Only consider a *jumbo frames* [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) with dedicated connections, such as between servers or video editors and TrueNAS that are unlikely to experience packet fragmentation.
* LRO/LSO offload features - Interfaces with [LRO](https://en.wikipedia.org/wiki/Large_receive_offload) and [LSO](https://en.wikipedia.org/wiki/Large_send_offload) offload features generally alleviates the need for jumbo frames, and their use can result in lower CPU overhead.

### High-Speed Interconnects

Higher-band hardware is becoming more accessible as the hardware development pace increases and enterprises upgrade more quickly.
Home labs can now deploy and use 40 GB and higher networking components. Home users are now discovering the same issues and problems with these higher speeds found by Enterprise customers.

iXsystems recommends using optical fiber over *direct attached copper* (DAC) cables for the high-speed interconnects listed below:

* 10Gb NICs: SFP+ connectors
* 25Gb NICs: SFP28 connectors
* 40Gb NICs: QSFP+ connectors
* 100Gb NICs: QSFP28 connectors
* 200Gb NICs: QSFP56 connectors
* 400Gb NICs: QSFP-DD connectors

iXsystems also recommends using optical fiber for any transceiver form factors mentioned when using fiber channels.
Direct attached copper (DAC) cables can create interoperability issues between the NIC, cable, and switch.

## Virtualized TrueNAS 

Finally, the ultimate TrueNAS hardware question is whether to use actual hardware or choose a virtualization solution. 
At the heart of the TrueNAS design is OpenZFS. OpenZFS works best with physical storage devices. It is aware of their strengths and compensates for their weaknesses.

TrueNAS developers [virtualize TrueNAS every day](https://www.ixsystems.com/blog/yes-you-can-virtualize-freenas/) as part of their work, and it is intended only for use as a development environment. 
{{< hint warning >}}
While possible to deploy TrueNAS in a virtual environment, we do not recommend doing so for regular deployment of TrueNAS when storing production or critical data.
Virtualizing TrueNAS and using virtual disks for your zpool is fine for ad hoc proof-of-concept, but it is not a supported configuration and might result in data corruption. 
{{< /hint >}}

When the need arises to virtualize TrueNAS (for ad hoc proof-of-concept):

* Pass hardware disks or the entire storage controller to the TrueNAS VM if possible (requires VT-d/AMD-Vi support).
* Disable automatic scrub pools on virtualized storage such as VMFS, and never scrub a pool while running storage repair tasks on another layer.
* Use a least three vdevs to provide adequate metadata redundancy, even with a striped pool.
* Provide one or more 8 GB or larger boot devices. 
* Provide the TrueNAS VM with adequate RAM per its usual requirements.
* Consider jumbo frame networking if all devices support it.
* Understand that the guest tools in FreeBSD might lack features other guest operating systems have.
* Enable MAC address spoofing on virtual interfaces and enable promiscuous mode to use VNET jail and plugins.
