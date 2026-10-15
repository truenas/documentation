&NewLine;

{{< expand "Using Rufus" "v" >}}
[Rufus](https://rufus.ie/) is a free Windows program that creates a bootable USB drive from an <file>iso</file> file.
Rufus formats and erases all data on the USB drive. Move any files you want to keep off the drive first.

To create a bootable USB drive with Rufus:

1. Download Rufus from the [Rufus website](https://rufus.ie/) and run it.

2. Insert a USB drive in a free USB port. Rufus normally detects the drive and shows it in **Device**.
   If more than one drive shows, check that you select the correct one.

3. Click **SELECT** and choose the TrueNAS <file>iso</file> file to populate the **Boot selection** field.

4. Set **Partition scheme** to **GPT** for systems that boot in UEFI mode, or **MBR** for systems that boot in legacy BIOS mode.
   Check the system firmware (BIOS/UEFI) settings for the boot mode.

5. Click **START**.
   If Rufus asks whether to write in **ISO Image mode** or **DD Image mode**, select **DD Image mode**, which copies the image to the drive as it is, like the `dd` command.

6. Wait for Rufus to finish, then close it and remove the drive.

For more information on this tool, refer to the [Rufus documentation](https://github.com/pbatard/rufus/wiki/FAQ).
{{< /expand >}}&NewLine;
