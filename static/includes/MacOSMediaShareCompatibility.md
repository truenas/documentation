&NewLine;

{{< hint type=warning title="Final Cut Pro Storage Share Compatibility" >}}
The Final Cut Pro Storage Share purpose enables **Use Apple-style Character Encoding**, which translates NTFS illegal characters to the Unicode private range. This ensures compatibility with Final Cut Pro.

Enabling this feature on shares with existing data might cause unexpected behavior for files that were written without Apple character encoding enabled. Test thoroughly before applying to production shares with existing content.

This share purpose requires Apple SMB2/3 Protocol Extensions to be enabled globally in the SMB service configuration.
{{< /hint >}}
