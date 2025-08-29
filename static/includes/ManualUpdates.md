&NewLine;

TrueNAS Manual update files are available from the [TrueNAS Download page](https://www.truenas.com/download-truenas-scale/) website.
If using the **Developer** update profile and a nightly build, you can use the manual update option to update the release running on your system if an update is not shown in the **Update Available** section of the **Update** screen.

Click **Install** to the right of **Manual Update**.
The **Save configuration settings from this machine before updating?** window opens.
Click **Export Password Secret Seed**, then click **Save Configuration**.
The **Manual Update** screen opens.

{{< trueimage src="/images/SCALE/SystemSettings/ManualUpdateScreen.png" alt="Manual Update Screen" id="Manual Update Screen" >}}

Click **Choose File** to locate the update file on your system.
Select a temporary location to store the update file.
Select **Memory Device** or the mount location from the dropdown list to keep a copy in the server.

Click **Apply Update** to start the update process. A status window opens and displays the installation progress.
When complete, the system automatically **Restarts**.
