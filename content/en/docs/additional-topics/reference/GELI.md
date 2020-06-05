---
Title: "GELI Encryption in Legacy FreeNAS/TrueNAS"
linkTitle: "GELI Encryption in Legacy FreeNAS/TrueNAS"
---

{{% alert title="Notice" color="info" %}}
TrueNAS replaced GELI encryption with ZFS native cryptography in the version 12.0 release.
This article is provided as a historical reference for encryption management in FreeNAS/TrueNAS 11.3 and earlier.
{{% /alert %}}

## GELI Encryption

FreeNAS/TrueNAS 11.3 and earlier used
`GELI <https://www.freebsd.org/cgi/man.cgi?query=geli>`__ to provide
full disk encryption for ZFS pools. This type of encryption is
intended to protect against the risks of data being read or copied when
the system is powered down, when the pool is locked, or when disks are
physically stolen.

GELI encrypts disks and pools, not individual filesystems. The partition
table on each disk is not encrypted, but only identifies the location of
partitions on the disk. On an encrypted pool, the data in each partition
is encrypted. These are generally called "encrypted drives", even though
the partition table is not encrypted.

For GELI encryption, using a processor that supports the
`AES-NI <https://en.wikipedia.org/wiki/AES_instruction_set>`__
instruction set is strongly recommended. These processors can handle
encryption of a small number of disks with negligible performance impact.
They also retain performance better as the number of disks increases.
Older processors without the AES-NI instructions could see significant
performance impact with even a single encrypted disk. This
`forum post <https://forums.freenas.org/index.php?threads/encryption-performance-benchmarks.12157/>`__
compares the performance of various processors.

All drives in a GELI-encrypted pool are encrypted, including L2ARC (read
cache) and SLOG (write cache). Drives added to an existing GELI encrypted
pool are encrypted with the same method specified when the pool was
created. Data in memory, including ARC, is not encrypted. ZFS data on
disk, including L2ARC and SLOG, are encrypted if the underlying disks
are encrypted. Swap data on disk is always encrypted.

Creating a GELI-encrypted pool means GELI encrypts the data on the disk
and generates a *master key* to decrypt this data. This master key is
also encrypted. Loss of a disk master key due to disk corruption is
equivalent to any other disk failure, and in a redundant pool, other
disks will contain accessible copies of the uncorrupted data. While it
is *possible* to separately back up disk master keys, it is usually not
necessary or useful.

There are two *user keys* that can be used to unlock the
master key and then decrypt the disks. In FreeNAS/TrueNAS 11.3 and earlier,
these user keys are named the **encryption key** and the **recovery key**.
Because data cannot be read without first providing a key, encrypted disks
containing sensitive data can be safely removed, reused, or discarded
without securely wiping or physically destroying the media.

When discarding disks that still contain GELI-encrypted sensitive data,
the encryption and recovery keys should also be destroyed or securely
deleted. Keys that are not destroyed must be stored securely and kept
physically separate from the discarded disks. Data is vulnerable to
decryption when the encryption key is present with the discarded disks
or can be obtained by the same person who gains access to the disks.

This encryption method is **not** designed to protect against
unauthorized access when the pool is already unlocked. Before sensitive
data is stored on the system, ensure that only authorized users have
access to the FreeNAS/TrueNAS web interface and that permissions with
appropriate restrictions are set on shares.

Here are some important points about FreeNAS/TrueNAS 11.3 behavior to
remember when creating or using a GELI-encrypted pool:

* There is no one-step way to use GELI to encrypt an existing pool. The
  data must be copied to an existing or new encrypted pool. After that,
  the original pool and any unencrypted backup should be destroyed to
  prevent unauthorized access and any disks that contained unencrypted
  data should be wiped.

* Hybrid pools are not supported with GELI encryption. Added vdevs must
  match the existing encryption scheme. Extending a Pool automatically
  encrypts a new vdev being added to an existing GELI-encrypted pool.

* GELI encryption differs from the encryption used in the Oracle
  proprietary version of ZFS. To convert between these formats, both
  pools must be unlocked, and the data copied between them.

* Each pool has a separate GELI encryption key. Pools can also add a
  unique recovery key to use if the passphrase is forgotten or
  encryption key invalidated.

* GELI encryption applies to a pool, not individual users. The data
  from an unlocked pool is accessible to all users with permissions to
  access it. GELI encrypted pools with a passphrase can be locked on
  demand by users that know the passphrase. Pools are automatically
  locked when the system is shut down.

* GELI encrypted data cannot be accessed when the disks are removed or
  the system has been shut down. On a running system, GELI encrypted
  data cannot be accessed when the pool is locked.

* GELI encrypted pools that have no passphrase are unlocked at startup.
  Pools with a passphrase remain locked until a user enters the
  passphrase to unlock them.

### Encryption and Recovery Keys

FreeNAS/TrueNAS 11.3 and earlier generates a randomized *encryption key*
whenever a new GELI encrypted pool is created. This key is stored in the
system dataset. It is the primary key used to unlock the pool each time
the system boots. Creating a passphrase for the pool adds a passphrase
component to the encryption key and allows the pool to be locked.

A pool encryption key backup can be downloaded to allow disk decryption
on a different system in the event of failure or to allow the stored key
to be deleted for extra security. The combination of encryption key
location and passphrase usage provide several different security
scenarios:

* *Key stored locally, no passphrase*: the GELI encrypted pool is
  decrypted and accessible when the system running. Protects
  "data at rest" only.

* *Key stored locally, with passphrase*: the GELI encrypted pool is not
  accessible until the passphrase is entered by the system
  administrator.

* *Key not stored locally*: the GELI encrypted pool is not accessible
  until the system administrator uploads the key file. When the
  key also has a passphrase, it must be provided with the key file.

GELI encrypted pools cannot be locked in the FreeNAS/TrueNAS 11.3 web
interface until a passphrase is created for the encryption key.

The recovery key is an optional keyfile that is generated, provided for
download, and wiped from the system. It is designed as an emergency
backup to unlock or import an encrypted pool if the passphrase is
forgotten or the encryption key is somehow invalidated. This file is
not stored anywhere on the system and only one recovery key can exist
for each GELI encrypted pool. Adding a new recovery key invalidates any
previously downloaded recovery key file for that pool.

Existing encryption or recovery keys can be invalidated in several
situations:

* A GELI encryption re-key invalidates all encryption and recovery keys as
  well as an existing passphrase.

* Using a recovery key file to import a GELI encrypted pool invalidates the
  existing encryption key and passphrase for that pool. FreeNAS/TrueNAS 11.3
  generates a new encryption key for the imported pool, but a new
  passphrase must be created before the pool can be locked.

* Creating or changing a passphrase invalidates any existing recovery
  key.

* Adding a new recovery key invalidates any existing recovery key files
  for the pool.

* Expanding a pool invalidates all encryption and recovery keys as well
  as an existing passphrase.

Be sure to download and securely store copies of the most current
encryption and recovery keys. Protect and backup encryption key
passphrases. **Losing the encryption and recovery keys or the passphrase
can result in irrevocably losing all access to the data stored in the
GELI encrypted pool!**