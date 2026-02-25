&NewLine;

{{< hint type=warning title="WebShare and SMB File Sharing" >}}
When accessing files through a web file share (WebShare) and an SMB share, you must configure the SMB share with the **Multi-Protocol** share **Purpose** preset.
This configuration attempts to coordinate file access between the different protocols, reducing but not elminating the risks of file conflicts.
This configuration results in the SNB share experiencing a performance impact (slower response).

Note, even with this preset configuration, avoid simultaneous access to the same files from both protocols, since that can cause data corruption.
{{< /hint >}}
