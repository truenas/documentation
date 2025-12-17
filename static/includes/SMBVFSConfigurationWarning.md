&NewLine;

{{< hint type=info title="About VFS Module Configuration" >}}
Many online guides recommend manually configuring SMB VFS options for macOS compatibility:

```
vfs objects = catia fruit streams_xattr
```

TrueNAS handles this differently. Instead of manual configuration, the TrueNAS **MacOS Media Share** purpose preset automatically configures these VFS modules in a way that integrates properly with TrueNAS architecture.

If you attempt to manually configure VFS options through Auxiliary Parameters, TrueNAS raises a validation error to prevent configuration conflicts.

{{< expand "Why does TrueNAS use a different approach?" "v" >}}
The TrueNAS SMB implementation includes advanced features that require careful integration with VFS modules:

Asynchronous I/O (AIO) Integration

- TrueNAS uses advanced AIO for SMB performance optimization
- Manual VFS configuration can conflict with the TrueNAS AIO implementation
- Conflicts can lead to poor performance or data integrity issues

Access Control List (ACL) Handling

- The TrueNAS ACL implementation requires specific VFS module integration
- Manual VFS configuration can bypass or break ACL functionality
- This can result in incorrect permission handling

Managed Configuration

- The **MacOS Media Share** preset ensures all components work together correctly
- VFS modules are configured with parameters specific to TrueNAS architecture
- Automatic configuration prevents common misconfiguration issues

By using TrueNAS purpose presets, you get a share that works seamlessly with Apple media and entertainment products such as Final Cut Pro, Logic Pro, Motion, and Compressor, without manually configuring VFS options.
{{< /expand >}}
{{< /hint >}}
