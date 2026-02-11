&NewLine;

{{< hint type=important title="Encrypt Individual Datasets and Zvols" >}}
Encrypting the root dataset (pool-level encryption) creates a single point of failure.
Losing one key makes the entire pool inaccessible.

**Best practice:** Create an unencrypted pool with individually encrypted datasets.
Benefits: independent key management, selective unlock, isolated failures, simplified recovery.
{{< /hint >}}
