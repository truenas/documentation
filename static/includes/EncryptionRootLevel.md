&NewLine;

{{< hint type=important title="Pool-level Encryption is Not Recommended" >}}
TrueNAS 22.12.3 or later forces encryption for all child datasets and zvols within an encrypted root or parent dataset that are using the TrueNAS UI.
However, datasets created outside of the UI, such as those created programmatically or manually via shell access, might not inherit encryption unless properly configured.
For more granular control and awareness, we do not recommend users configure pool-level encryption of the root dataset.
Instead, create an unencrypted pool and populate it with encrypted or unencrypted child datasets, as needed.
{{< /hint >}}
