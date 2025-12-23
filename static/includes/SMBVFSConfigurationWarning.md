&NewLine;

{{< hint type=info title="Manual VFS Configuration Is Not Supported" >}}
Many online guides recommend manually configuring SMB VFS options for macOS compatibility:

```
vfs objects = catia fruit streams_xattr
```

TrueNAS does not support manual VFS module configuration. Manually setting VFS objects via auxiliary parameters or CLI overrides TrueNAS defaults and breaks Asynchronous I/O (AIO), Access Control Lists (ACLs), and Shadow Copies.

{{< expand "Why does TrueNAS handle VFS modules differently?" "v" >}}
The TrueNAS SMB implementation integrates VFS modules with several advanced features. Manual VFS configuration breaks functionality including:

* Asynchronous I/O (AIO): Overrides modules needed for SMB performance optimization, causing poor performance or stability issues.
* Access Control Lists (ACLs): Bypasses or breaks ACL functionality, causing incorrect permission handling.
* Shadow Copies: Disables Shadow Copy functionality, preventing file restoration.

The **Final Cut Pro Storage Share** purpose preset automatically configures VFS modules to integrate properly with TrueNAS AIO, ACLs, and Shadow Copies. By using this preset instead of manual configuration, you get a share that works seamlessly with Final Cut Pro without risking system functionality.
{{< /expand >}}
{{< /hint >}}
