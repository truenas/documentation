---
title: "Managing Self-Encrypting Drives (SED)"
description: "Covers self-encrypting drives including supported specifications, implementing and managing SEDs in TrueNAS, and managing SED passwords and data."
weight: 40
aliases:
 - /scale/scaletutorials/storage/sedscale/
tags:
- sed
- disks
keywords:
- nas storage device
- enterprise data storage solutions
- nas data storage
- persistent storage
---

{{< include file="/static/includes/SEDEnterpriseAdmonition.md" >}}

## Supported Specifications

* Legacy interface for older ATA devices (Not recommended for security-critical environments!)
* [TCG Opal 1](https://trustedcomputinggroup.org/wp-content/uploads/Opal_SSC_1.00_rev3.00-Final.pdf) legacy specification
* [TCG Opal 2](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opal_SSC_v2.01_rev1.00.pdf) standard for newer consumer-grade devices
* [TCG Opalite](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opalite_SSC_FAQ.pdf), which is a reduced form of OPAL 2
* TCG Pyrite [Version 1](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v1.00_r1.00.pdf) and [Version 2](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v2.00_r1.00_PUB.pdf) are similar to Opalite, but with hardware encryption removed
  Pyrite provides a logical equivalent of the legacy ATA security for non-ATA devices. Only the drive firmware protects the device.
  {{< hint type=warning >}}
  Pyrite Version 1 SEDs do not have PSID support and can become unusable if the password is lost.
  {{< /hint >}}
* [TCG Enterprise](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-SSC_Enterprise-v1.01_r1.00.pdf) is designed for systems with many data disks.
  These SEDs cannot unlock before the operating system boots.
* [TCG Ruby 1.0](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage_SSC_Ruby_v1_r1_pub-1.pdf)

See this Trusted Computing Group and NVM Express® [joint white paper](https://nvmexpress.org/wp-content/uploads/TCGandNVMe_Joint_White_Paper-TCG_Storage_Opal_and_NVMe_FINAL.pdf) for more details about these specifications.

## TrueNAS Implementation

TrueNAS implements the security capabilities of [sedutil-cli](https://github.com/truenas/sedutil) for TCG-compliant devices.

You can configure a SED before or after assigning the device to a pool.

By default, SEDs are not locked until the administrator takes ownership of them.
Ownership is taken by explicitly configuring a global or per-device password in the web interface and adding the password to the SEDs.
Adding SED passwords in the web interface also allows TrueNAS to automatically unlock SEDs on boot.

A password-protected SED protects the data stored on the device when the device is physically removed from the system.
This allows secure disposal of the device without having to first wipe the contents.
Repurposing a SED on another system requires the SED password or a full cryptographic erase with [PSID revert](https://github.com/truenas/sedutil/blob/22ecc4f56e84239f780856b56185267e4b225d43/docs/sedutil-cli.8#L68).

## Deploying SEDs

TrueNAS supports setting a global password for all detected SEDs or setting individual passwords for each SED.
Using a global password for all SEDs is strongly recommended to simplify deployment and avoid maintaining separate passwords for each SED.

SED passwords are used during initial setup and for unlocking SEDs.

### Configuring Global SED Settings

{{< include file="/static/includes/SEDGlobalPW.md" >}}

## Check SED Functionality

When SED devices are detected during system boot, TrueNAS checks for configured global and device-specific passwords.

Unlocking SEDs allows a pool to contain a mix of SED and non-SED devices.
Devices with individual passwords are unlocked with their password.
Devices without a device-specific password are unlocked using the global password.

## Managing SED Disks and Data

{{< hint type=warning >}}
Improper use of the sedutil-cli can be destructive to data and passwords.
Keep backups and use with caution.
{{< /hint >}}

Additional SED management options are available using a shell session and the sedutil-cli utility.
Enter `sedutil-cli -h` or see [the sedutil-cli.8 man page](https://github.com/truenas/sedutil/blob/master/docs/sedutil-cli.8) for more information.

{{< enterprise >}}
TrueNAS Enterprise customers should contact TrueNAS Enterprise Support for assistance with the initial setup and management of SEDs using sedutil-cli.

{{< expand "Contacting TrueNAS Enterprise Support" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}
