&NewLine;

Manual update files are available from the [TrueNAS Download page](https://www.truenas.com/download-truenas-scale/). Use this option to install a specific build directly.

Click **Install** to the right of **Manual Update**.
The **Save configuration settings from this machine before updating?** window opens.
Click **Export Password Secret Seed** then click **Save Configuration**.
The **Manual Update** screen opens.

{{< trueimage src="/images/SCALE/SystemSettings/ManualUpdateScreen.png" alt="Manual Update Screen" id="Manual Update Screen" >}}

Click **Choose File** to locate the update file on your system.
Select a location from the **Update File Temporary Storage Location** dropdown. Select **Memory Device** to store the update file in system RAM during installation, or select a pool mount path to store it on disk if the system has limited memory available.

Click **Apply Update** to start the update process. A status window opens displaying installation progress.
When complete, the system automatically **Restarts**.