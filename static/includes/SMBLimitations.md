&NewLine;

{{< expand "SMB Limitations" "v" >}}

#### Windows, Linux, and MacOS Client SMB Limitations 

{{< truetable >}}
|  | Windows | Linux (Ext4) | Linux (XFS) | MacOS |
|--|---------|--------------|-------------|-------|
| Maximum file name length (characters) | 255 | 255 | 255 | 255 |
| Maximum share name length (characters) | 255 | 255 | 255 | 255 |
| Maximum length for path (characters) | 260<sup>1</sup> | 4096 | 4096 | 255<sup>3</sup> |
| Invalid characters | angle brackets < ><br>colon :<br>asterick *<br>slashes / \<br>pipe | | NULL (?0)<br>slash (/) | NULL (?0)<br>slash (/) | slash /<br>colon :<br> |
| Case sensitivity | Yes | No | No | Yes |
| Single file size/write size<sup>2</sup> | 16 TB | 16 TB | 8 EB | <sup>4</sup> |
| Maximum volume size | 256 TB | 1 EB | 8 EB | # |
| Available file descriptors | 1024 | 1024 | 1024 | 256 |
| File permissions: ACL entries (ACEs) per ACL, per file or directory | 1025 | 32 | 1000+ | 64 |
| Maximum file descriptors simultaneously opened by a process | set limit | 1024+ | 1024+ | 256 |
{{< /truetable >}}


<sup>1</sup> Maximum number of characters in the path length includes the drive letter, colon (:), and slashes in the path.

<sup>2</sup> Maximum file size is limited by both disk size and storage volume capacity, and SMB protocol version

<sup>3</sup> Maximum path length in a MacOS client is limited by the SMB version and OS configuration. Path includes server name, share name, and file/folder path.

<sup>4 </sup> Maximum file size for MacOS clients is determined by the SMB protocol version.

* File and share name character lengths include spaces (spaces in names are not recommended).
* Trailing and preceding spaces in names are not allowed by Windows clients. Trailing spaces are stripped by the Windows client.
* Linux clients allow trailing spaces, but they cause problems when accessing files with a Windows client.
* Linux characters in file, share, and path names are case-sensitive, but Windows names are not case-sensitive.
* Maximum number of files is tied to the volume size and intern file system structure.
  Apple File System (APFS) supports up to 8 EB, HFS supports up to 8 TB. In theory, based on SMB prtocol and configuration, can be up to 16 EB.
* File permission limits are influenced and limited by internal SMB protocol versions and the underlying operating file system.
* File descriptors available for SMB processes are a limiting factor.
  Operating systems have a limit on the number of simultaneous file descriptors opened by a process.
  Set network and file descriptor limits to allow SMB to operate optimally in Windows clients.
  Change the system limits in Linux <file>limits.conf</file> file to increase the default number of file descriptors allowed.


#### Samba SMB Limitations
Samba SMB is not designed to work well in distributed file systems like Ceph or GlusterFS without careful configuration.

Performance is impacted by single-threaded connections that are handled one at a time. These can become a bottleneck in high-demand environments.
Samba SMB might not achieve the same raw I/O as native SMB implementations, especially in high-number file access or large file environments.

Large numbers of concurrent connections can strain the SMB server CPU, RAM, and network bandwidth.
Samba can consume significant amounts of memory when handling many concurrent sessions, large files, or high numbers of shares.
Higher numbers of clients increase memory requirements exponentially.

The Samba SMB server might need heavy optimization or to be scaled horizontally to avoid bottlenecks in environments with massive numbers of clients connecting simultaneously.

#### SMB Protocol File Size Limitations
{{< truetable >}}
|  | SMB1* | SMB2 | SMB3 |
|--|-------|------|------|
| Maximum file size/write size | 2 GB | 256 TB | 256 TB |
| Large file and volume size support | No | 16 EB | 16 EB |
{{< /truetable >}}

\ *SMB1 is deprecated

#### File Caching and Data Consistency Limitations
Samba SMB relies heavily on local file system caches to speed up file access.
When multiple clients access the same files concurrently issues with cached data becoming inconsistent with the version stored on the SMB server can occur.
Inconsistency occurs because Samba does not always immediately update the cache when another client modifies the file.
Samba uses cache invalidation to validate or refresh the file cache when necessary.
It might delay cache invalidation to improve performance, which leads to one client seeing outdated data after another client writes to the same file.

Directory listing caching speeds up access to files.
After an initial listing, the cache might serve subsequent requests for the same directory rather than queries to the file system.
This introduces a delay in reflecting changes made to the directory by other clients. Metadata changes might not immediately reflect across all clients, which leads to outdated views of a file or directory.

Buffered I/O improves read/write performance by reading and writing in larger chunks, which reduces the number of I/O operations needed.
This can lead to problems in environments where data consistency and immediate visibility of changes are crucial.
Samba might buffer write operations locally before sending them to disk. Buffering can lead to delays in reflecting changes made by one client on the system of another client.
If the other client system disconnects before the write from buffer occurs, the changes might be lost.
Buffered writes can cause a backlog of uncommitted writes. As a result of buffering, the reading client might get inconsistent or outdated data.

Samba can handle large files, but caching can present challenges.
The buffer size for large files might be insufficient, and lead to inefficient use of memory and I/O.
Reading and writing large files in small chunks due to buffering can lead to performance issues.
Samba buffer and cache management might run into memory limitations. If the buffer cache becomes too large, the system might experience memory pressure, slow performance, or memory exhaustion on the server.
For systems with limited RAM, caching large files can create significant bottlenecks.

Samba file-locking mechanisms can conflict with the caching behavior.
A file locked by one client might not immediately reflect changes to other clients reading or writing to the same file.
Race conditions or data corruption can occur if the cache is not updated or stale cached data is used.

Samba also caches network data to minimize disk I/O, but when accessing a file over a slow network connection, the cache might not be large enough to avoid frequent disk access.
If the server disk is slow, the performance bottleneck can shift from a network issue to a disk I/O issue.
Samba can optimize the tradeoff between network and disk caching but is limited by the speed of the underlying system hardware.
Samba supports file change notifications, but the notifications might not be timely and lead to clients remaining unaware of changes to files or directories.
Additionally, multiple clients reading and writing small files simultaneously might be buffered and not immediately propagated to other clients.
This also leads to outdated data being accessed.

#### File Locking Limitations
Samba SMB file locking plays a crucial role in managing file access by multiple clients, preventing race conditions, and ensuring data integrity.
Samba offers both byte-range locking that can lock portions of files and whole file locking. Both have limitations.
Byte locking can result in performance degradation in highly concurrent environments because it allows clients to lock portions of a file rather than the entire file.
Byte locking creates limitations with network latency when large files are involved.
Whole file locking is less efficient for applications that require finer control over file access but is easier to maintain.
It can lead to unnecessary blocking or contention for large files when only small sections of a file need protection.

Samba SMB does not enforce lock requests, clients must honor the locks. If a client does not correctly honor the locks, the other clients can experience data corruption or race conditions.
Samba SMB might allow conflicting locks that can result in unexpected behaviors, data corruption, or race conditions.

Samba SMB can struggle with scalability in environments that have high levels of concurrent activity where multiple clients are simultaneously accessing and locking files. They can experience bottlenecks.
The overhead of managing locks can result in significant resource (CPU and memory) consumption.

Advisory locking can be limited, or behave differently compared to native SMB.
Advisory locks do not force other processes to respect locks, it merely notifies clients a lock is in place.
This can lead to situations where a client ignores a lock and the potential for conflicts or data corruption if multiple clients access the file without proper coordination.
Not all clients handle file locks consistently or correctly respect advisory locks.

Samba does not provide mandatory file locking, enforcing locks when the client does not cooperate. This means some applications might not behave as expected if they are designed to rely on mandatory locking.
Samba might struggle to maintain consistent locks if the clients access files through different protocols, like NFS clients accessing the same files as SMB clients.
File locks across platforms can lead to conflicts and unpredictable behaviours because of how each protocol manages locks - how locks are granted, released, or honored.

Samba SMB uses caching mechanisms for lock management. This can lead to synchronization issues where the lock status is not propagated to multiple clients, locks that do not immediately release, or clients unaware of the current lock status.
Clients might wait to perform operations based on stale information about file availability.

File locking is not well suited for database applications that require more robust and high-performance locking mechanisms.
Databases implement their locking mechanisms to handle concurrent access to data files.
When accessed over Samba SMB, the advisory locks can conflict with database internal locking systems and lead to poor performance, deadlocks, and data corruption.

When Samba SMB is used in cross-platform, environments such as a Windows client, it could have issues translating lock types between different operating systems.
Windows and Linux systems use different mechanisms for managing file locks. Lock types might not perfectly map, leading to inconsistent behavior between the OS and Samba SMB.

In high-availability environments or failover configurations, Samba SMB handling of lock leases can be problematic.
If the server fails or a network partition occurs, locks can improperly release or not be properly cleaned up, leading to stale locks or other clients being blocked. This is especially problematic in clustered or HA configurations where failovers are expected to occur.

Samba SMB has limited support for heavy locking requirements, rather it is designed for simpler file-sharing needs. Applications that require frequent or complex locking can face significant problems with the Samba SMB locking mechanism.

Samba SMB can experience issues when clients using different SMB versions attempt to access the same file. This can result in inconsistent lock states or lost lock notifications.

#### Alternative Third-Party File Manager Limitations
Using alternative third-party file managers can introduce performance degradation issues that impact file transfer efficiency and speed, and network access to shares.
When using alternative file manager applications or programs that do not have SMB-specific optimizations or compatibility with SMB2 or SMB3 protocols, users can experience slow transfer speeds, excessive resource consumption, higher system overhead, and other performance issues.
They include bugs not seen in native file tools and are therefore not recommended.

Alternative third-party file managers might not support the SMB authentication methods (i.e., Kerberos, NTLMv2) which can lead to connection failures or slower performance when connecting to the SMB server.
Features of file managers such as backwards file indexing, thumbnail generation, real-time synching with cloud storage services can strain the SMB server and network, reducing performance when multiple files are transfered or accessed.
File managers might not honor the SMB file-locking mechanisms that prevent multiple users from simultaneously modifying the same file.
This can lead to file corruption or delays when accessing files concurrently.
If the file manager does not support SMB encryption on data transfers, this can also lead to performance problems as the client tries to encrypt or decrypt the shared files.
The file manager might add overhead by using non-optimized or additional layers to handle SMB that require intermediate steps or by increasing the resource consumption for file operation processing.

When using an alternative file manager program and experiencing performance problems, if the file manager program includes advanced SMB options try fine-tuning it to improve speed and performance.
Optimizing bulk operations such as copying, renaming, or deleting multiple files to improve transfer speeds for large numbers of files, can help improve performance.
Adjusting packet size and the number of concurrent sessions with the SMB server to reduce bottlenecks and improve data transfer speeds.

{{< /expand >}}