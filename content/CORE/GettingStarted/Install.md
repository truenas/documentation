---
title: "Installing TrueNAS"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

## ISO Verification

The iXsystems Security Team cryptographically signs TrueNAS ISO files so that users can verify the integrity of their downloaded file.
This article demonstrates how to verify an ISO file using the [Pretty Good Privacy (PGP)](https://tools.ietf.org/html/rfc4880) and [SHA256](https://tools.ietf.org/html/rfc6234) methods.

### PGP ISO Verification

You will need an OpenPGP encryption application for this method of ISO verification.
There are many different free applications available, but the OpenPGP group provides a list of available software for different operating systems at https://www.openpgp.org/software/.
The examples in this section show verifying the TrueNAS `.iso` using [gnupg2](https://gnupg.org/software/index.html) in a command prompt, but [Gpg4win](https://www.gpg4win.org/) is also a good option for Windows users.

To verify the `.iso` source, go to https://www.truenas.com/download-tn-core/ , expand the **Security** option,  and click **PGP Signature** to download the Gnu Privacy Guard (`.gpg`) signature file. Open the [PGP Public key link](http://keys.gnupg.net/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string .

Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

Go to the `.iso` and `.iso.gpg` download location and import the public key using the keyserver address and search results string:

```
q5sys@athena /tmp>  gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
gpg: requesting key 12CF7946 from hkp server keys.gnupg.net
gpg: key 12CF7946: "IX SecTeam <security-officer@ixsystems.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
q5sys@athena /tmp>
```

Use `gpg --verify` to compare the `.iso` and `.iso.gpg` files:

```
q5sys@athena /tmp>  gpg --verify TrueNAS-12.0-BETA2.1.iso.gpg TrueNAS-12.0-BETA2.iso
gpg: Signature made Thu Aug 27 10:06:02 2020 EDT using RSA key ID 12CF7946
gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
q5sys@athena /tmp>
```

This response means the signature is correct but still untrusted. Go back to the browser page that has the **PGP Public key** open and manually confirm that the key was issued for `IX SecTeam <security-officer@ixsystems.com>` (iX Security Team) on October 15, 2019 and has been signed by an iXsystems account.

### SHA256 Verification

The command to verify the checksum varies by operating system:

+ BSD: `sha256 isofile`
+ Linux: `sha256sum isofile`
+ Mac: `shasum -a 256 isofile`
+ Windows or Mac users can install additional utilities like [HashCalc](https://hashcalc.soft112.com/) or [HashTab](http://implbits.com/products/hashtab/).

The value produced by running the command must match the value shown in the `sha256.txt` file. Different checksum values indicate a corrupted installer file that should not be used.

## Installing TrueNAS

With the installer added to a device, you can now install TrueNAS onto the desired system.
Insert the install media and reboot or boot the system.
At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to boot into the motherboard UEFI/BIOS.

Choose to boot in UEFI mode or legacy CSM/BIOS mode.
When installing TrueNAS, make the matching choice for the installation.
For Intel chipsets manufactured in 2020 or later, UEFI is likely the only option.

If your system supports SecureBoot, you will need to either disable it or set it to "Other OS" to be able to boot the install media.

Select the install device as the boot drive, exit, and reboot the system.
If the USB stick is not shown as a boot option, try a different USB slot.
Which slots are available for boot differs by hardware.

After the system has booted into the installer, follow these steps.

{{< imgproc InstallerConsoleSetup Fit "1920x1080" >}}
Select <i>Install/Upgrade</i>.
{{< /imgproc >}}

{{< imgproc InstallerDestinationMedia Fit "1920x1080" >}}
Select the desired install drive.
{{< /imgproc >}}

{{< imgproc InstallerEraseDisk Fit "1920x1080" >}}
Select <i>Yes</i>
{{< /imgproc >}}

{{< imgproc InstallerUpgradeChoice Fit "1920x1080" >}}
Select <i>Fresh Install</i> to do a clean install of the downloaded version of TrueNAS.
<b>This will erase the contents of the selected drive</b>!
{{< /imgproc >}}

{{< imgproc InstallerSwapPartition Fit "1920x1080" >}}
When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.
{{< /imgproc >}}

{{< imgproc InstallerRootPassword Fit "1920x1080" >}}
Enter a password for the <code>root</code> user to log in to the web interface.
{{< /imgproc >}}

After following the steps to install, reboot the system and remove the install media.

Congratulations!
TrueNAS is now installed.

The next steps are to either wait for the system to boot and [access the web interface](/hub/initial-setup/FirstTimeLogin/webuilogin/) or boot the system and configure the [console setup menu](/hub/initial-setup/FirstTimeLogin/cli-menu/).

## Installation Troubleshooting

If the system does not boot into TrueNAS, there are several things that can be checked to resolve the situation:

* Check the system BIOS and see if there is an option to change the USB emulation from CD/DVD/floppy to hard drive. If it still will not boot, check to see if the card/drive is UDMA compliant.
* If the system BIOS does not support EFI with BIOS emulation, see if it has an option to boot using legacy BIOS mode.
* If the system starts to boot but hangs with this repeated error message: `run_interrupt_driven_hooks: still waiting after 60 seconds for xpt_config`, go into the system BIOS and look for an onboard device configuration for a `1394 Controller`. If present, disable that device and try booting again.
* If the burned image fails to boot and the image was burned using a Windows system, wipe the USB stick before trying a second burn using a utility such as [Active@ KillDisk](https://www.killdisk.com/eraser.html). Otherwise, the second burn attempt will fail as Windows does not understand the partition which was written from the image file. Be very careful to specify the correct USB stick when using a wipe utility!



