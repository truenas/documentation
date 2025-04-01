&NewLine;

{{< expand "Using Rufus" "v" >}}
Rufus is a Windows program that allows you to create a bootable USB drive from an ISO file. 

Rufus supports most Linux and Windows operating systems, including TrueNAS. For a list of supported ISO, see the [Rufus non-exhaustive list](https://rufus.ie/en/).

{{< expand "How does Rufus work?" "v" >}}
Rufus formats and erases all data from the USB drive.
Transfer any files you want to keep off the drive before using Rufus.

Rufus usually auto-detects the USB drive, but you can manually select the drive in the **Devices** field of the Rufus UI.
In most cases, the USB drive shows as **No_Label**.

Rufus allows selecting the <file>iso</file> file from a file browser.

To use Rufus on a Mac, create a Windows VM on your Mac, then create the bootable USB drive with Rufus.
{{< /expand >}}

To create a bootable USB with Rufus:

1. Download the package from the [Rufus downloads page](https://rufus.ie/en/).

2. Open Rufus by double-clicking on Rufus. Downloaded files are in your **Downloads** folder.

3. Insert a USB drive in any free USB port on the system.

4. Locate and select the <file>iso</file> file to populate the **Boot Selection** field.
   Click **SELECT** and select the ISO file.

5. Check the settings and adjust any to suit your use case.

6. Enter a name for the volume Rufus creates in **Volume Label**.

7. Click **START**.

For more information on this tool, refer to [Rufus documentation](https://rufus.ie/en/) or the [user guide](https://www.wikihow.com/Use-Rufus).
{{< /expand >}}
