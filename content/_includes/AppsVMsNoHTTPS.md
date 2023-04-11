---
---

Special consideration should be given when TrueNAS is installed in a VM, as VMs are not configured to use HTTPS. Enabling HTTPS redirect can interfere with the accessibility of some apps. To determine if HTTPS redirect is active, go to **System Settings** > **GUI** > **Settings** and locate the **Web Interface HTTP -> HTTPS Redirect** checkbox. To disable HTTPS redirects, clear this option and click **Save**, then clear the browser cache before attempting to connect to the app again.
