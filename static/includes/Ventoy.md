&NewLine;

{{< expand "Using Ventoy" "v" >}}
[Ventoy](https://www.ventoy.net/en/index.html) is an open-source tool that prepares a USB drive once, after which you copy one or more <file>iso</file> files onto the drive like regular files.
At boot, Ventoy shows a menu of the <file>iso</file> files on the drive.
This is convenient when you install or update TrueNAS often, because you only copy the new <file>iso</file> to the drive and do not rewrite it.

To use Ventoy:

1. Download Ventoy from the [Ventoy download page](https://www.ventoy.net/en/download.html) and extract it.

2. Insert the USB drive. Ventoy erases all data on the drive when you install it.

3. Install Ventoy to the drive.
   * In Windows, run <file>Ventoy2Disk.exe</file>, select the USB drive in **Device**, and click **Install**.
     To update Ventoy on a drive that already has it, click **Update**, which keeps the <file>iso</file> files on the drive.
   * In Linux, run `sudo sh Ventoy2Disk.sh -i /dev/sdX`, replacing `/dev/sdX` with the path to the USB drive.
     Be very careful to specify the correct device path!

4. Copy the TrueNAS <file>iso</file> file to the large data partition on the USB drive.

5. Boot the system from the USB drive, select the TrueNAS <file>iso</file> in the Ventoy menu, and press <kbd>Enter</kbd>.
   If the installer does not start in the default mode, restart and try the **GRUB2 mode** option shown after you select the <file>iso</file>.

Ventoy does not boot with Secure Boot enabled unless you enroll the Ventoy key.
Disable Secure Boot or set it to **Other OS** in the system firmware (BIOS/UEFI) settings. See [Installing From the Device Media](#installing-from-the-device-media).

If Ventoy fails to install from Windows, security software or other programs that lock the drive are often the cause.
Close those programs and try again, or refer to the [Ventoy documentation](https://www.ventoy.net/en/doc_start.html) for alternative installation methods.
{{< /expand >}}&NewLine;
