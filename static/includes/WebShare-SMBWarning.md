&NewLine;

{{< hint type=warning title="WebShare and SMB File Sharing" >}}
When accessing files through a web file share (WebShare) and an SMB share, you must configure the SMB share with the **Multi-Protocol** share **Purpose** preset.
This configuration coordinates file access between the different protocols.
It reduces, but does not eliminate, the risk of file conflicts.
This configuration results in the SMB share experiencing a performance impact (slower response).

Note, even with this preset configuration, avoid simultaneous access to the same files from both protocols, since that can cause data corruption.
{{< /hint >}}
