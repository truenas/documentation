# Server Message Block (SMB)

Server Message Block shares, also known as Common Internet File System (CIFS) shares, are accessible by Windows, macOS, Linux, and BSD computers.
Access is slower than an NFS share due to the single-threaded design of Samba.
SMB provides more configuration options than NFS and is a good choice on a network for Windows or Mac systems.
However, it is a poor choice if the CPU on the TrueNAS system is limited.
If it is maxed out, upgrade the CPU or consider a different type of share.


%brand% uses `Samba <https://www.samba.org/>`__ to share pools using
Microsoft's SMB protocol. SMB is built into the Windows and macOS
operating systems and most Linux and BSD systems pre-install the Samba
client in order to provide support for SMB. If the distro did not,
install the Samba client using the distro software repository.

The SMB protocol supports many different types of configuration
scenarios, ranging from the simple to complex. The complexity of the
scenario depends upon the types and versions of the client operating
systems that will connect to the share, whether the network has a
Windows server, and whether Active Directory is being used. Depending on
the authentication requirements, it might be necessary to create or
import users and groups.

Samba supports server-side copy of files on the same share with clients
from Windows 8 and higher. Copying between two different shares is not
server-side. Windows 7 clients support server-side copying with
`Robocopy
<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc733145(v=ws.11)>`__.

This chapter starts by summarizing the available configuration options.
It demonstrates some common configuration scenarios as well as offering
some troubleshooting tips. Reading through this entire chapter before
creating any SMB shares is recommended to gain a better understanding of
the configuration scenario that meets the specific network requirements.

`SMB Tips and Tricks <https://forums.freenas.org/index.php?resources/smb-tips-and-tricks.15/>`__
shows helpful hints for configuring and managing SMB networking.
The
`FreeNAS and Samba (CIFS) permissions <https://www.youtube.com/watch?v=RxggaE935PM>`__
and
`Advanced Samba (CIFS) permissions on FreeNAS <https://www.youtube.com/watch?v=QhwOyLtArw0>`__
videos clarify setting up permissions on SMB shares. Another helpful
reference is
`Methods For Fine-Tuning Samba Permissions <https://forums.freenas.org/index.php?threads/methods-for-fine-tuning-samba-permissions.50739/>`__.

.. warning:: `SMB1 is disabled by default for security <https://www.ixsystems.com/blog/library/do-not-use-smb1/>`__.
   If necessary, SMB1 can be enabled in
   :menuselection:`Services --> SMB Configure`.


Samba disables NTLMv1 authentication by default for security. Standard
configurations of Windows XP and some configurations of later clients
like Windows 7 will not be able to connect with NTLMv1 disabled.
`Security guidance for NTLMv1 and LM network authentication
<https://support.microsoft.com/en-us/help/2793313/security-guidance-for-ntlmv1-and-lm-network-authentication>`__
has information about the security implications and ways to enable
NTLMv2 on those clients. If changing the client configuration is not
possible, NTLMv1 authentication can be enabled by selecting the
:guilabel:`NTLMv1 auth` option in
:menuselection:`Services --> SMB -->` |ui-configure|.


.. _fruit-warning:

.. warning:: Be careful when using multiple SMB shares, some with and
   some without *fruit*. macOS clients negotiate SMB2 AAPL protocol
   extensions on the first connection to the server, so mixing shares
   with and without fruit will globally disable AAPL if the first
   connection occurs without fruit. To resolve this, all macOS clients
   need to disconnect from all SMB shares and the first reconnection to
   the server has to be to a fruit-enabled share.


To view all active SMB connections and users, enter :command:`smbstatus`
in the :ref:`Shell`.


Most configuration scenarios require each user to have their own user
account and to authenticate before accessing the share. This allows
the administrator to control access to data, provide appropriate
permissions to that data, and to determine who accesses and modifies
stored data. A Windows domain controller is not needed for authenticated
SMB shares, which means that additional licensing costs are not
required. However, because there is no domain controller to provide
authentication for the network, each user account must be created on the
%brand% system. This type of configuration scenario is often used in
home and small networks as it does not scale well if many user accounts
are needed.


`Shadow Copies <https://en.wikipedia.org/wiki/Shadow_copy>`__,
also known as the Volume Shadow Copy Service (VSS) or Previous
Versions, is a Microsoft service for creating volume snapshots. Shadow
copies can be used to restore previous versions of files from
within Windows Explorer. Shadow Copy support is built into Vista and
Windows 7. Windows XP or 2000 users need to install the
`Shadow Copy client
<http://www.microsoft.com/en-us/download/details.aspx?displaylang=en&id=16220>`__.

When a periodic snapshot task is created on a ZFS pool that is
configured as a SMB share in %brand%, it is automatically configured
to support shadow copies.

Before using shadow copies with %brand%, be aware of the following
caveats:

* If the Windows system is not fully patched to the latest service
  pack, Shadow Copies may not work. If no
  previous versions of files to restore are visible, use Windows Update
  to ensure the system is fully up-to-date.

* Shadow copy support only works for ZFS pools or datasets. This means
  that the SMB share must be configured on a pool or dataset, not
  on a directory.

* Datasets are filesystems and shadow copies cannot traverse
  filesystems. To see the shadow copies in the
  child datasets, create separate shares for them.

* Shadow copies will not work with a manual snapshot. Creating
  a periodic snapshot task for the pool or dataset being shared by
  SMB or a recursive task for a parent dataset is recommended.

* The periodic snapshot task should be created and at least one
  snapshot should exist **before** creating the SMB share. If the
  SMB share was created first, restart the SMB service in
  :menuselection:`Services`.

* Appropriate permissions must be configured on the pool or dataset
  being shared by SMB.

* Users cannot delete shadow copies on the Windows system due to the
  way Samba works. Instead, the administrator can remove snapshots
  from the %brand% |web-ui|. The only way to disable shadow
  copies completely is to remove the periodic snapshot task and delete
  all snapshots associated with the SMB share.


macOS includes the
`Time Machine <https://support.apple.com/en-us/HT201250>`__ feature
which performs automatic backups. %brand% supports Time Machine
backups for both :ref:`SMB <Windows (SMB) Shares>` and
:ref:`AFP <Apple (AFP) Shares>` shares.

Configuring a quota for each Time Machine share helps prevent backups
from using all available space on the %brand% system. Time Machine waits
two minutes before creating a full backup. It then creates ongoing
hourly, daily, weekly, and monthly backups. **The oldest backups are
deleted when a Time Machine share fills up, so make sure that the quota
size is large enough to hold the desired number of backups.**
Note that a default installation of macOS is over 20 GiB.

Configure a global quota using the instructions in
`Set up Time Machine for multiple machines with OSX Server-Style Quotas
<https://forums.freenas.org/index.php?threads/how-to-set-up-time-machine-for-multiple-machines-with-osx-server-style-quotas.47173/>`__
or create individual share quotas.


`vfs_fruit(8) <https://www.samba.org/samba/docs/current/man-html/vfs_fruit.8.html>`__
`Apple documentation <https://support.apple.com/en-us/HT201250>`__ for detailed Time Machine configuration instructions.
