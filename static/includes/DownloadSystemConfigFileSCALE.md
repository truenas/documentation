&NewLine;

{{< hint type=info title="System Admin Required" >}}
{{< include file="/static/includes/ConfigRestrictions.md" >}}
{{< /hint >}}

When downloading the configuration (config) file, select the **Export Password Secret Seed** option to include the secret seed in the config file.
Downloading the config file allows you to restore the system to a different operating system device where the secret seed is not already present.

{{< include file="/static/includes/SecretSeed.md" >}}

{{< hint type="warning" title="Keep Files Protected">}}
Physically secure the config file with the secret seed, and any encryption key files to decrypt encrypted datasets or pools.
{{< /hint >}}

We recommend backing up the system configuration regularly.
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues.
Save the configuration file each time the system configuration changes.

To download the configuration file:

Go to **System > Advanced Settings** and click on **Manage Configuration**.
Select **Download File**.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedManageConfigurationOptions.png" alt="Download Configuration File" id="Download Configuration File" >}}

The **Save Configuration** dialog opens.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigurationWindow.png" alt="Save Configuration" id="Save Configuration" >}}

Select **Export Password Secret Seed** and then click **Save**. The system downloads the system configuration.
Keep this file in a safe location on your network where files are regularly backed up.