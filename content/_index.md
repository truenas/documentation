---
title: "Documentation Hub"
geekdocCollapseSection: true
---

# TrueNAS: Your Data Storage Solution

Basic overview of the software: what it is, what it does, why I care, etc.

# First Steps

Simple pointers for new users who are coming to the Docs immediately after downloading the .iso:

* link to getting started guide
* link to resources for new customers

# Using the Documentation Hub

Overview of site and how to use or search.

<!--
# What is TrueNAS?

TrueNAS is the world’s most popular Open Source storage operating system and is the most efficient solution for managing and sharing data over a network.
It is the simplest way to create a safe, secure, centralized, and easily accessible place for your data.
TrueNAS Open Storage provides unified storage for file, block, object, and application data.
<br><br>

TrueNAS can be installed on virtually any hardware platform and is suitable for home, business, and enterprise applications.
There are three editions of TrueNAS that enable a broad range of applications while sharing common management tools and enabling data transfers:

<img src="/images/tn-core-logo.png" style="float:left;width:240px;height:50px;margin: 10px 50px 10px 0px;">

**TrueNAS CORE** is free and Open Source and is the successor to the wildly popular FreeNAS.
It runs on virtually any x86_64 system and provides a broad set of features for many users.
Plugin applications like Plex, NextCloud, and Asigra allow the functionality of a system to be customized for many use cases.
<br><br>

<img src="/images/tn-enterprise-logo.png" style="float:left;width:240px;height:50px;margin: 10px 50px 10px 0px;">

**TrueNAS Enterprise** is provided as a system with either single or dual controllers to enable High Availability (HA).
It can also be provided with Enterprise-grade support from iXsystems.
Coupled with the TrueNAS M-Series system, it scales to 15GB/s and 20 PB with five 9’s of uptime.
<br><br>

<img src="/images/tn-scale-logo.png" style="float:left;width:240px;height:50px;margin: 10px 50px 10px 0px;">

**[TrueNAS SCALE](/SCALE/)** is the latest member of the TrueNAS family and provides Open Source HyperConverged Infrastructure including Linux containers and VMs.
TrueNAS SCALE includes the ability to cluster systems and provide scale-out storage with capacities of up to hundreds of Petabytes.
It is currently in development and will be available for deployment in 2021. TrueNAS SCALE uses much of the same TrueNAS CORE source code, but adds a few different capabilities which are defined by this acronym:

**S**cale-out ZFS<br>
**C**onverged<br>
**A**ctive-active<br>
**L**inux containers<br>
**E**asy-to-manage<br>

## TrueNAS Delivers a Rich Set of Features

There are an enormous number of features in each TrueNAS edition.
You can read through the documentation, try out TrueNAS at zero cost, or have a look through this chart which summarizes the key features. TrueNAS 12.0 features are in blue.

<img src="/images/truenas-features.png">
<br><br>

{{< tabs "TrueNAS Features" >}}
{{< tab "OpenZFS" >}}
# OpenZFS provides Maximum Protection and Performance
All TrueNAS editions leverage the enterprise-grade OpenZFS file system to provide an all-inclusive data management solution that is designed for decades of continuous use.
To provide the perfect balance between total storage capacity and data redundancy, storage pools can be configured in a variety of RAIDZ or Mirrored configurations.
Pools can even be expanded when new disks or SSDs are added to the system, allowing your storage environment to grow with application requirements. 

ZFS protects your data with features like Copy-on-Write, Checksums, Scrubbing, and 2-Copy Metadata.
Automated replication ensures you can keep a bit-for-bit identical copy of your data safe in a remote storage location and fast resilvering times mean that if a disk fails, a replacement disk can be quickly integrated into the degraded data storage pool.
ZFS uses efficient snapshot and cloning techniques to maximize available space, as well as in-line data compression, thin provisioning, and deduplication.
{{< /tab >}}
{{< tab "Security Focused" >}}
# Security-focused to give you Peace of Mind
TrueNAS supports a variety of security solutions including self-encrypted drives (SEDs) and ZFS native dataset encryption.
Access control lists are fully customizable and provide another layer of protection for sensitive data.
TrueNAS supports FIPS 140-2 Level 2 drives and installs with secure defaults in place, including encryption for file transfers and disabling SSH.
Local users and groups can be managed, along with integrating TrueNAS with LDAP, Active Directory, Kerberos, and NIS.
For enterprises, centralized key management (KMIP) is also available.
{{< /tab >}}
{{< tab "Easy Sharing" >}}
# Sharing Your Data has Never Been Easier
TrueNAS supports all the prominent network file sharing and remote backup options, and can even be expanded with applications from FreeBSD or Linux.
Supported sharing protocols include NFS (v3,4), SMB (v1,2,3,4), AFP, FTP, WebDAV, and rsync.
TrueNAS fully supports block sharing (iSCSI, Fibre Channel) and has been certified for use with vSphere, Citrix, and Veeam.
Want to securely import or back up data with a Cloud Storage Provider?
No problem!
TrueNAS can even store and sync your S3 data with an automated schedule.
{{< /tab >}}
{{< tab "Run on Any System" >}}
# Run TrueNAS on Any System
TrueNAS delivers Software Defined Storage (SDS) and runs on any x86_64 server, no matter how old or modern.
Intel and AMD processors or any generation are supported, whether it’s a single core or a sixty-four core behemoth.
The TrueNAS Hardware Guide provides recommendations to assist you in building your own systems.

TrueNAS software has been developed under the sponsorship of iXsystems since 2009 and uses a large team of professionals who develop, build, QA, document, and support the Open Source software and the TrueNAS community.

Because the TrueNAS software is free, iXsystems grows its business by building professional and enterprise-grade systems that have similar reliability to the major NAS vendors, but at a much lower Total Cost of Ownership (TCO).
The iXsystems proposition is that TrueNAS enables dramatic storage cost savings through Open Source economics.
TrueNAS provides the industry’s most powerful Open Storage.
Learn more about [TrueNAS hardware](/Hardware/).
{{< /tab >}}
{{< tab "TrueCommand" >}}
# TrueCommand Manages your NAS Fleet
[TrueCommand](https://www.truenas.com/truecommand/) is a single Pane-of-Glass management application that takes the repetitive work out of multi-TrueNAS management by centralizing system alerts, reports, and analytics in one easy to use interface. It supports users and teams with 24x365 global operations, role-based access control, and a full log of every TrueNAS configuration change.
<img src="/images/truecommand-overview.png"><br>

TrueCommand runs on Docker, Virtual Machines, or as a [cloud service](https://portal.ixsystems.com/portal/login/index.php) and is free to users with less than 50 drives and affordable for those with larger installations.
[TrueCommand documentation](/TrueCommand/) is also available here on the TrueNAS Documentation Hub.
{{< /tab >}}
{{< tab "Expert Community" >}}
# Join the Expert Community
TrueNAS comprises both the Open Source software and an experienced and expert community developed over the last dozen years.
Ask for advice and contribute your experiences for others to use.
The [Community](https://www.truenas.com/community/) can save you many hours and be a great resource for new projects and applications.
If you need more professional support, iXsystems offers Bronze/Silver/Gold [Enterprise support](https://support.ixsystems.com) including 24x365 coverage and onsite support with its systems.
{{< /tab >}}
{{< /tabs >}}
-->
