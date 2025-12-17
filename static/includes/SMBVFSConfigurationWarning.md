&NewLine;

{{< hint type=info title="Manual VFS Configuration Is Not Supported" >}}
Many online guides recommend manually configuring SMB VFS options for macOS compatibility:

```
vfs objects = catia fruit streams_xattr
```

TrueNAS does not support manual VFS module configuration. Manually setting VFS objects via Auxiliary Parameters or CLI overrides TrueNAS defaults and breaks Asynchronous I/O (AIO), Access Control Lists (ACLs), and Shadow Copies.

{{< expand "Why does TrueNAS handle VFS modules differently?" "v" >}}
The TrueNAS SMB implementation integrates VFS modules with several advanced features:

Asynchronous I/O (AIO)
- TrueNAS uses AIO for SMB performance optimization
- Manual VFS configuration can override the VFS modules needed for AIO functionality
- This can lead to poor performance or stability issues

Access Control Lists (ACLs)
- The TrueNAS ACL implementation requires specific VFS module integration
- Manual VFS configuration can bypass or break ACL functionality
- This can result in incorrect permission handling

Shadow Copies
- TrueNAS Shadow Copies enable point-in-time recovery of files
- Manual VFS configuration can disable Shadow Copy functionality
- Users lose the ability to restore previous file versions

The **Final Cut Pro Storage Share** purpose preset automatically configures VFS modules to integrate properly with TrueNAS AIO, ACLs, and Shadow Copies. By using this preset instead of manual configuration, you get a share that works seamlessly with Final Cut Pro without risking system functionality.
{{< /expand >}}
{{< /hint >}}
