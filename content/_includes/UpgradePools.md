&NewLine;

Storage pool upgrades are typically not required unless the new OpenZFS feature flags are deemed necessary for required or improved system operation.
Consider these factors before upgrading a storage pool to the latest OpenZFS feature flags.

* Upgrading can affect data.
  Before performing any operation that affects data on a storage disk, always [back up]({{< relref "/SCALE/SCALETutorials/DataProtection/_index.md" >}}) data first and verify the backup integrity.

* New OpenZFS feature flags are permanently applied to the upgraded pool.
  An upgraded pool cannot be reverted or downgraded to an earlier OpenZFS version.
  A storage pool with the latest feature flags cannot import into another operating system that does not support those feature flags.

* Upgrading a ZFS pool is optional.
  Do not upgrade the pool when reverting to an earlier TrueNAS version or repurposing the disks in another operating system that supports ZFS is a requirement.
