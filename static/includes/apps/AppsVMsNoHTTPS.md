&NewLine;

Give special consideration when TrueNAS is installed in a VM, as VMs are not configured to use HTTPS.

Enabling HTTPS redirect can interfere with the accessibility of some apps.
To determine if the HTTPS redirect is active, go to **System** > **General Settings** > **GUI** > **Settings** and locate the **Web Interface HTTP -> HTTPS Redirect** checkbox.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsGUISettingsSCALE.png" alt="General System Settings" id="General System Settings" >}}

To disable HTTPS redirects, clear the checkbox and click **Save**, then clear the browser cache before attempting to connect to the app again.
