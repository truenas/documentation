&NewLine;

{{< hint type=warning title="Apple Name Mangling and Data Compatibility" >}}
The MacOS Media Share purpose forcibly enables Apple name mangling (aapl_name_mangling), which translates NTFS illegal characters to the Unicode private range. This ensures compatibility with Apple Media & Entertainment applications like Final Cut Pro and Logic Pro.

Enabling this feature on shares with existing data may cause unexpected behavior for files that were written without name mangling enabled. Test thoroughly before applying to production shares with existing content.

This share purpose requires Apple SMB2/3 Protocol Extensions to be enabled globally in the SMB service configuration.
{{< /hint >}}
