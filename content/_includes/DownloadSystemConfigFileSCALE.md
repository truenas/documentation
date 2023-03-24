---
---

When you download the configuration file, you have the option to **Export Password Secret Seed**, which includes encrypted passwords in the configuration file. 
This allows you to restore the configuration file to a different operating system device where the decryption seed is not already present. 
Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

We recommend backing up the system configuration regularly. 
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues. 
Save the configuration file each time the system configuration changes.
{{< hint info >}}
If you plan to set up a cluster that includes this TrueNAS SCALE, wait to download your system configuration file until after the cluster is set up and working.
{{< /hint >}}
Go to System **Settings > General** and click on **Manage Configuration**. Select **Download File**.

![GeneralManageConfigurationOptions](/images/SCALE/22.02/GeneralManageConfigurationOptions.png "Download Configuration File")

The **Save Configuration** dialog displays. 

![SaveConfigurationWindow](/images/SCALE/22.02/SaveConfigurationWindow.png "Save Configuration")

Click **Export Password Secret Seed** and then click **Save**. The system downloads the system configuration. Save this file in a safe location on your network where files are regularly backed up. 

Anytime you change your system configuration, download the system configuration file again and keep it safe.