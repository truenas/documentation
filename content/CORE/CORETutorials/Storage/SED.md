---
title: "Self-Encrypting Drives"
description: "This article describes Self-Encrypting Drive (SED) support on TrueNAS CORE."
weight: 40
aliases: /core/storage/sed/
tags:
- coresed
- corestorage
- coreencryption
---

{{< toc >}}

TrueNAS version 11.1-U5 introduced Self-Encrypting Drive (SED) support.

## Supported Specifications

* Legacy interface for older ATA devices (Not recommended for security-critical environments!)
* [TCG Opal 1](https://trustedcomputinggroup.org/wp-content/uploads/Opal_SSC_1.00_rev3.00-Final.pdf) legacy specification
* [TCG OPAL 2](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opal_SSC_v2.01_rev1.00.pdf) standard for newer consumer-grade devices
* [TCG Opalite](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opalite_SSC_FAQ.pdf) which is a reduced form of OPAL 2
* TCG Pyrite [Version 1](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v1.00_r1.00.pdf) and 
  [Version 2](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Pyrite_SSC_v2.00_r1.00_PUB.pdf) are similar to Opalite, but with hardware encryption removed
  Pyrite provides a logical equivalent of the legacy ATA security for non-ATA devices. Only the drive firmware protects the device.
  {{< hint type=warning >}}
  Pyrite Version 1 SEDs do not have PSID support and can become unusable if the password is lost.
  {{< /hint >}}
* [TCG Enterprise](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-SSC_Enterprise-v1.01_r1.00.pdf) designed for systems with many data disks
  These SEDs cannot unlock before the operating system boots.

See this Trusted Computing Group and NVM Express® [joint white paper](https://nvmexpress.org/wp-content/uploads/TCGandNVMe_Joint_White_Paper-TCG_Storage_Opal_and_NVMe_FINAL.pdf) for more details about these specifications.

## TrueNAS Implementation

TrueNAS implements the security capabilities of [camcontrol](https://www.freebsd.org/cgi/man.cgi?query=camcontrol) for legacy devices and [sedutil-cli](https://www.mankier.com/8/sedutil-cli) for TCG devices. 
When managing a SED from the command line, it is recommended to use the `sedhelper` wrapper script for `sedutil-cli` to ease SED administration and unlock the full capabilities of the device. Examples of using these commands to identify and deploy SEDs are provided [below](#deploying-seds).

A SED can be configured before or after assigning the device to a pool.

By default, SEDs are not locked until the administrator takes ownership of them. Ownership is taken by explicitly configuring a global or per-device password in the web interface and adding the password to the SEDs. Adding SED passwords in the web interface also allows TrueNAS to automatically unlock SEDs.

A password-protected SED protects the data stored on the device when the device is physically removed from the system. This allows secure disposal of the device without having to first wipe the contents. Repurposing a SED on another system requires the SED password.

{{< hint type=note >}}
For TrueNAS High Availability (HA) systems, SED drives only unlock on the active controller!
{{< /hint >}}

## Deploying SEDs

Enter command `sedutil-cli --scan` in the **Shell** to detect and list devices. The second column of the results identifies the drive type:

| Character | Standard   |
|-----------|------------|
| no        | non-SED device |
| 1         | Opal V1    |
| 2         | Opal V2    |
| E         | Enterprise |
| L         | Opalite    |
| p         | Pyrite V1  |
| P         | Pyrite V2  |
| r         | Ruby       |

Example:

```
root@truenas1:~ # sedutil-cli --scan
Scanning for Opal compliant disks
/dev/ada0  No  32GB SATA Flash Drive SFDK003L
/dev/ada1  No  32GB SATA Flash Drive SFDK003L
/dev/da0   No  HGST    HUS726020AL4210  A7J0
/dev/da1   No  HGST    HUS726020AL4210  A7J0
/dev/da10    E WDC     WUSTR1519ASS201  B925
/dev/da11    E WDC     WUSTR1519ASS201  B925
```

TrueNAS supports setting a global password for all detected SEDs or setting individual passwords for each SED. Using a global password for all SEDs is strongly recommended to simplify deployment and avoid maintaining separate passwords for each SED.

### Setting a Global Password for SEDs

Go to **System > Advanced > SED Password** and enter the password. 
{{< hint type=warning >}}
Record this password and store it in a safe place!
{{< /hint >}}
Now configure the SEDs with this password. Go to the **Shell** and enter command `sedhelper setup <password>`, where `<password>` is the global password entered in **System > Advanced > SED Password**.

`sedhelper` ensures that all detected SEDs are properly configured to use the provided password:

```
root@truenas1:~ # sedhelper setup abcd1234
da9                  [OK]
da10                 [OK]
da11                 [OK]
```

Rerun command `sedhelper setup <password>` every time a new SED is placed in the system to apply the global password to the new SED.

### Creating Separate Passwords for Each SED

Go to **Storage > Disks**. Click the **>** next to an SED, then select **Edit**. Enter and confirm the password in the **SED Password** field.

You must configure the SED to use the new password. Go to the **Shell** and enter command `sedhelper setup --disk <da1> <password>`, where `<da1>` is the SED to configure and `<password>` is the created password from **Storage > Disks > Edit Disks > SED Password**.

Repeate this process for each SED and any SEDs added to the system in the future.

{{< hint type=warning >}}
Remember SED passwords! If you lose the SED password, you cannot unlock SEDs or access their data.
Always record SED passwords whenever they are configured or modified and store them in a secure place!
{{< /hint >}}

## Check SED Functionality

When SED devices are detected during system boot, TrueNAS checks for configured global and device-specific passwords.

Unlocking SEDs allows a pool to contain a mix of SED and non-SED devices. Devices with individual passwords are unlocked with their password. Devices without a device-specific password are unlocked using the global password.

To verify SED locking is working correctly, go to the **Shell**. Enter command `sedutil-cli --listLockingRange 0 <password> </dev/da1>`, where `<dev/da1>` is the SED and `<password>` is the global or individual password for that SED. The command returns `ReadLockEnabled: 1`, `WriteLockEnabled: 1`, and `LockOnReset: 1` for drives with locking enabled:

```
root@truenas1:~ # sedutil-cli --listLockingRange 0 abcd1234 /dev/da9
Band[0]:
    Name:            Global_Range
    CommonName:      Locking
    RangeStart:      0
    RangeLength:     0
    ReadLockEnabled: 1
    WriteLockEnabled:1
    ReadLocked:      0
    WriteLocked:     0
    LockOnReset:     1
```

## Managing SED Passwords and Data

This section contains command line instructions to manage SED passwords and data. The command used is [sedutil-cli(8)](https://www.mankier.com/8/sedutil-cli). Most SEDs are TCG-E (Enterprise) or TCG-Opal ([Opal v2.0](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Storage-Opal_SSC_v2.01_rev1.00.pdf)). Commands are different for the different drive types, so the first step is identifying which type is used.

{{< hint type=important >}}
These commands can be destructive to data and passwords. Keep backups and use the commands with caution.
{{< /hint >}}

Check SED version on a single drive, */dev/da0* in this example:

```
root@truenas:~ # sedutil-cli --isValidSED /dev/da0
/dev/da0 SED --E--- Micron_5N/A U402
```

All connected disks can be checked at once:

```
root@truenas:~ # sedutil-cli --scan
Scanning for Opal compliant disks
/dev/ada0 No 32GB SATA Flash Drive SFDK003L
/dev/ada1 No 32GB SATA Flash Drive SFDK003L
/dev/da0 E Micron_5N/A U402
/dev/da1 E Micron_5N/A U402
/dev/da12 E SEAGATE XS3840TE70014 0103
/dev/da13 E SEAGATE XS3840TE70014 0103
/dev/da14 E SEAGATE XS3840TE70014 0103
/dev/da2 E Micron_5N/A U402
/dev/da3 E Micron_5N/A U402
/dev/da4 E Micron_5N/A U402
/dev/da5 E Micron_5N/A U402
/dev/da6 E Micron_5N/A U402
/dev/da9 E Micron_5N/A U402
No more disks present ending scan
root@truenas:~ #
```
{{< expand "Instructions for Specific Drives" >}}
{{< expand "TCG-Opal Instructions" >}}
Reset the password without losing data with command: 

`sedutil-cli --revertNoErase <oldpassword> </dev/device>`

Use **both** of these commands to change the password without destroying data:

```
sedutil-cli --setSIDPassword <oldpassword> <newpassword> </dev/device>
sedutil-cli --setPassword <oldpassword> Admin1 <newpassword> </dev/device>
```

Wipe data and reset password to default MSID with this command: 

`sedutil-cli --revertTPer <oldpassword> </dev/device>`

Wipe data and reset password using the PSID with this command: 

`sedutil-cli --yesIreallywanttoERASEALLmydatausingthePSID <PSINODASHED> </dev/device>` where <PSINODASHED> is the PSID located on the pysical drive with no dashes (-).
{{< /expand >}}
{{< expand "TCG-E Instructions" >}}
### Change or Reset the Password without Destroying Data

Run these commands for every *LockingRange* or *band* on the drive.
To determine the number of bands on a drive, use command `sedutil-cli -v --listLockingRanges </dev/device>`.
Increment the `BandMaster` number and rerun the command with `--setPassword` for every band that exists.

Use **all** of these commands to reset the password without losing data:

```
sedutil-cli --setSIDPassword <oldpassword> "" </dev/device>
sedutil-cli --setPassword <oldpassword> EraseMaster "" </dev/device>
sedutil-cli --setPassword <oldpassword> BandMaster0 "" </dev/device>
sedutil-cli --setPassword <oldpassword> BandMaster1 "" </dev/device>
```

Use **all** of these commands to change the password without destroying data:

```
sedutil-cli --setSIDPassword <oldpassword* newpassword */dev/device*
sedutil-cli --setPassword <oldpassword> EraseMaster <newpassword> </dev/device>
sedutil-cli --setPassword <oldpassword> BandMaster0 <newpassword> </dev/device>
sedutil-cli --setPassword <oldpassword> BandMaster1 <newpassword> </dev/device>
```

### Reset Password and Wipe Data

Reset to default MSID:

```
sedutil-cli --eraseLockingRange 0 <password> </dev/device>
sedutil-cli --setSIDPassword <oldpassword> "" </dev/device>
sedutil-cli --setPassword <oldpassword> EraseMaster "" </dev/device>
```

Reset using the PSID: 

`sedutil-cli --PSIDrevertAdminSP <PSIDNODASHS> /dev/<device>`

If it fails use:

`sedutil-cli --PSIDrevert <PSIDNODASHS>  /dev/<device>`
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="corestorage" limit="10" title="Related Storage Articles" >}}
