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
* [TCG Opalite](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opalite_SSC_FAQ.pdf) which is a reduced form of OPAL 2
* TCG Pyrite [Version 1](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v1.00_r1.00.pdf) and [Version 2](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v2.00_r1.00_PUB.pdf) are similar to Opalite, but with hardware encryption removed
  Pyrite provides a logical equivalent of the legacy ATA security for non-ATA devices. Only the drive firmware protects the device.
  {{< hint type=warning >}}
  Pyrite Version 1 SEDs do not have PSID support and can become unusable if the password is lost.
  {{< /hint >}}
* [TCG Enterprise](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-SSC_Enterprise-v1.01_r1.00.pdf) designed for systems with many data disks.
  These SEDs cannot unlock before the operating system boots.
* [TCG Ruby 1.0](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage_SSC_Ruby_v1_r1_pub-1.pdf)

See this Trusted Computing Group and NVM Express® [joint white paper](https://nvmexpress.org/wp-content/uploads/TCGandNVMe_Joint_White_Paper-TCG_Storage_Opal_and_NVMe_FINAL.pdf) for more details about these specifications.

## TrueNAS Implementation

TrueNAS implements the security capabilities of [sedutil-cli](https://github.com/truenas/sedutil) for TCG compliant devices.

You can configure a SED before or after assigning the device to a pool.

By default, SEDs are not locked until the administrator takes ownership of them.
Ownership is taken by explicitly configuring a global or per-device password in the web interface and adding the password to the SEDs.
Adding SED passwords in the web interface also allows TrueNAS to automatically unlock SEDs.

A password-protected SED protects the data stored on the device when the device is physically removed from the system.
This allows secure disposal of the device without having to first wipe the contents.
Repurposing a SED on another system requires the SED password or a full cryptographic erase with [PSID revert](https://github.com/truenas/sedutil/blob/22ecc4f56e84239f780856b56185267e4b225d43/docs/sedutil-cli.8#L86C1-L87C1).

{{< hint type=note >}}
For TrueNAS High Availability (HA) systems, SED drives only unlock on the active controller!
{{< /hint >}}

## Deploying SEDs

TrueNAS supports setting a global password for all detected SEDs or setting individual passwords for each SED.
Using a global password for all SEDs is strongly recommended to simplify deployment and avoid maintaining separate passwords for each SED.

### Setting a Global Password for SEDs

Go to **System > Advanced > Self-Encrypting Drive** and click **Configure**.
A warning displays stating **Changing Advanced settings can be dangerous when done incorrectly. Please use caution before saving.**
Click **Close** to display the settings form.
Enter the password in **SED Password** and **Confirm SED Password** and click **Save**.

{{< hint type=warning >}}
Record this password and store it in a safe place!
{{< /hint >}}

### Creating Separate Passwords for Each SED

Go to **Storage** click the **Disks** dropdown in the top right of the screen and select **Disks**.
From the **Disks** screen, click the <span class="material-icons">expand_more</span> for the confirmed SED, then **Edit**.
Enter and confirm the password in the **SED Password** fields to override the global SED password.

Repeat this process for each SED and any SEDs added to the system in the future.

{{< hint type=warning >}}
Remember SED passwords! If you lose the SED password, you cannot unlock SEDs or access their data.
After configuring or modifying SED passwords, always record and store them in a secure place!
{{< /hint >}}

## Check SED Functionality

When SED devices are detected during system boot, TrueNAS checks for configured global and device-specific passwords.

Unlocking SEDs allows a pool to contain a mix of SED and non-SED devices.
Devices with individual passwords are unlocked with their password.
Devices without a device-specific password are unlocked using the global password.

## Managing SED Disks and Data

Additional SED management options are available using a shell session and the sedutil-cli utility.
Enter `sedutil-cli -h` or see [the sedutil-cli.8 man page](https://github.com/truenas/sedutil/blob/master/docs/sedutil-cli.8) for more information.

Most SEDs are TCG-E (Enterprise) or TCG-Opal.
Commands are different for the different drive types, so the first step is to identify the type in use.

{{< hint type=important >}}
Improper use of the sedutil-cli can be destructive to data and passwords.
Keep backups and use with caution.
{{< /hint >}}
