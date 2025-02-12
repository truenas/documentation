&NewLine;

{{< hint type=info title="System Admin Required" >}}
{{< include file="/static/includes/ConfigRestrictions.md" >}}
{{< /hint >}}

When you download the configuration (config) file, you have the option to include encrypted passwords in the config file. Select **Export Password Secret Seed** to download this file.
Downloading both the config file and the secret seed file allows you to restore the system to a different operating system device where the decryption seed is not already present.

{{< hint type="warning" title="Keep Files Protected">}}
Physically secure the config file, any encryption key files, and the secret seed file as it contains the seed to prevent unauthorized access or password decryption.
{{< /hint >}}

We recommend backing up the system configuration regularly.
Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues.
Save the configuration file each time the system configuration changes.

Go to **System > General Settings** and click on **Manage Configuration**.
Select **Download File**.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralManageConfigurationOptions.png" alt="Download Configuration File" id="Download Configuration File" >}}

The **Save Configuration** dialog opens.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigurationWindow.png" alt="Save Configuration" id="Save Configuration" >}}

Select **Export Password Secret Seed** and then click **Save**. The system downloads the system configuration.
Save this file in a safe location on your network where files are regularly backed up.

To maintain a current file, download the config file anytime you change your system configuration. Keep the config file safe.
