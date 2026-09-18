&NewLine;

{{< trueimage src="/images/SCALE/Datasets/AddZvolScreen.png" alt="Add Zvol Screen" id="Add Zvol Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies a short name for the zvol that is not longer than 63 characters to prevent potential problems accessing zvols as devices. For example, you cannot use a zvol with a 70-character file name or path as an iSCSI extent. |
| **Size** | Specifies a size and value such as 10 GiB. You can include units like **t** as in TiB, or **G**. You can increase the size of the zvol later, but you cannot reduce the size. If the size is greater than 80% of the available capacity, the creation fails with an out-of-space error unless you select **Force size**. |
{{< /truetable >}}

### Additional Options
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Force size** | Sets the system to restrict creating a zvol that brings the pool to over 80% capacity. When set, forces creation of the zvol (not recommended). By default, the system does not let you create a zvol if that operation brings the pool to over 80% capacity. Setting this overrides this rule. |
| **Sparse** | Enables using [thin provisioning]({{< ref "thinprovisioning" >}}) where disk space for this volume is allocated on-demand as new writes are received. Use caution when enabling, as writes can fail when the pool is low on space. |
| **Comments** | Enter any notes about the zvol. Descriptions show on the iSCSI screens when the zvol is used in a block share. |
| **Sync** | Sets the data write synchronization. Options: <ul><li>**Inherit** - Gets the sync settings from the parent dataset.</li><li>**Standard** - Uses the sync settings requested by the client software.</li><li>**Always** - Waits for data writes to complete.</li><li>**Disabled** - Never waits for writes to complete.</li></ul> |
| **Compression** | Sets the compression algorithm. Compression encodes information in less space than the original data occupies. We recommend choosing a compression algorithm that balances disk performance against the amount of space saved. Options: <ul><li>**LZ4** - Generally recommended as it maximizes performance and dynamically identifies the best files to compress.</li><li>**ZSTD** - Uses the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm. Has several options for balancing speed and compression.</li><li>**Gzip** - Has options that range from **1** for least compression with best performance to **9** for maximum compression with greatest performance impact.</li><li>**ZLE** - Has a fast algorithm that only eliminates runs of zeroes.</li><li>**LZJB** - A legacy algorithm that is not recommended for use.</li></ul> |
| **ZFS Deduplication** | Sets TrueNAS to transparently reuse a single copy of duplicated data to save space based on the selected option. Options: <ul><li>**Inherit** - Uses the parent or root dataset settings.</li><li>**On** - Uses deduplication.</li><li>**Off** - Does not use deduplication.</li><li>**Verify** - Performs a byte-to-byte comparison when two blocks have the same signature to verify that the block contents are identical.</li></ul> Deduplication can improve storage capacity, but it is RAM-intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! Do not change this setting unless instructed to by your TrueNAS support engineer. |
| **Read-only** | Allows or prevents storage volume (zvol, dataset) modification. **Inherit** ues the the parent setting. **On** prevents modifying the dataset. **Off** allows users to access the dataset to modify its contents.|
| **Block size** | Sets the zvol default block size. Automatically chosen based on the number of disks in the pool for general use cases. The default is **16KiBt**, other options are **4KiB**, **8KiB**, **16KiB**, **32KiB**, **64KiB**, **128KiB**. |
| **Snapdev** | Controls visibility of the volume snapshot devices in the <file>.zfs</file> directory under <file>/dev/zvol/<i>poolname</i></file> on the dataset. Options are **Visible** shows the directory, **Invisible** hides the directory, or **Disabled** disables access to the directory (default setting). |
| **Use Metadata (Special) VDEVs** | Stores data blocks in a [special allocation class (fusion pool)]({{< ref "CreatingFusionPools" >}}) metadata VDEV. Options: <ul><li>**Inherit** - Uses the parent dataset setting. Displays the inherited value in human-readable form, for example, **Inherit (128 KiB)** or **Inherit (off)**.</li><li>**On** - Enables the special allocation class for this dataset. Shows the **Threshold** field where you enter the maximum block size to store in the special class. Valid values are 1 byte to 16 MiB. The default threshold is 16 MiB. Blocks smaller than or equal to the threshold are assigned to the special allocation class; larger blocks are assigned to the regular class.</li><li>**Off** - Disables storing blocks in the special allocation class.</li></ul> Before enabling this setting, you must add a [metadata special class VDEV]({{< ref "CreatingFusionPools" >}}) to the pool. |
{{< /truetable >}}

### Encryption

Encryption settings secure data within this zvol. These settings establish the level and type of encryption applied.
The default setting is **Inherit (non-encrypted)** when the root or parent dataset for the new storage is unencrypted.
If encrypted, it shows **Inherit (encrypted)**.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenEncryption.png" alt="Add Zvol Encryption" id="Add Zvol Encryption" >}}

When a zvol is encrypted, **Edit** on the **Encryption** card found on the **Datesets** screen opens a configuration screen where you can change the passphrase for a zvol encrypted with the passphrase type, but you cannot change to a key encryption type. If the zvol is not encrypted, you do not see encryption options on the **Edit Zvol** screen.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Inherit (non-encrypted/encrypted)** | Inherits encryption from the parent dataset when selected. Default setting. Clearing shows the **Encryption** settings. When the parent is encrypted, this option defaults to **Inherit (encrypted)**; otherwise, it shows **(non-encrypted)**. If the parent is encrypted with the passphrase type, the zvol can only use passphrase encryption. When the parent is encrypted with a key, the zvol can use either key or passphrase encryption. Refer to the [Encryption Settings]({{< relref "EncryptionScreen" >}}) article for more details. |
| **Encryption** | Secures data within this zvol. Data is unusable until unlocked with an encryption key or passphrase. If parent dataset has encryption enabled, it is not possible to disable this option. The default encryption type is key. Clearing the **Encryption** checkmark hides the encryption settings. For detailed encryption configuration and management that covers pool-level encryption settings refer to the [ZFS encryption man page](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html), and [ZFS key management](https://openzfs.github.io/openzfs-docs/man/8/zfs-load-key.8.html). |
{{< /truetable >}}

Disabling the inheirt option shows the **Encryption Type** setting the **Key** and **Passphrase** options. Each shows different settings.

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenKeyEncryption.png" alt="Add Zvol Key Encryption" id="Add Zvol Key Encryption" >}}

{{< trueimage src="/images/SCALE/Shares/AddZvolScreenPassphraseEncryption.png" alt="Add Zvol Passphrase Encryption" id="Add Zvol Passphrase Encryption" >}}

{{< include file="/static/includes/EncryptionSettings.md" >}}
