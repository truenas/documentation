&NewLine;

When the TrueNAS boot pool fails and cannot be repaired, reinstall TrueNAS and restore your system configuration. This process involves a complete system rebuild while preserving your data pools and configuration settings.

### Recovery Steps

1. **Replace the failed boot drive** - Install a new drive to serve as the boot device.

2. **Perform a clean TrueNAS installation** - Follow the standard [installation procedure]({{< ref "InstallingSCALE" >}}) to install TrueNAS on the new boot drive.

3. **Upload your configuration file** - Use your previously saved configuration backup to restore system settings:
   - Go to **System > General > Manage Configuration** 
   - Click **Upload Config** and select your configuration backup file
   - Follow the prompts to restore your settings

4. **Import existing data pools** - Your data pools should be automatically detected and imported after the configuration restore. If not:
   - Go to **Storage > Import Pool**
   - Select your existing pools and import them

### Important Considerations

{{< hint type=warning >}}
This recovery process depends entirely on having a current configuration backup saved externally. Boot pool failures result in complete loss of system configuration if no backup exists.
{{< /hint >}}

- **Keep external backups** - Always maintain current configuration backups stored outside the TrueNAS system
- **Regular backup schedule** - Export configuration files regularly, especially after making system changes
- **Data pools preserved** - This process only affects the boot pool - your data pools and their contents remain intact
- **Boot environments lost** - All boot environments are lost and must be recreated after recovery

### After Recovery

After completing the recovery:
- Verify all pools are imported and healthy
- Check that sharing services are working correctly  
- Recreate any custom boot environments as needed
- Update your configuration backup to reflect the new system state
