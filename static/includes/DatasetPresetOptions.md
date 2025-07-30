&NewLine;

* **Generic** for non-SMB share datasets such as iSCSI and NFS share datasets.
  Also use for datasets for containers, virtual machines, and other datasets not associated with application storage.
* **Multiprotocol** for datasets optimized for SMB and NFS multi-mode shares or to create a dataset for NFS shares.
* **SMB** for datasets optimized for SMB shares.
* **Apps** for datasets optimized for application storage.

**Generic** sets ACL permissions equivalent to Unix permissions 755, granting the owner full control and the group and other users read and execute privileges.

**SMB**, **Apps**, and **Multiprotocol** inherit ACL permissions based on the parent dataset.
When no ACL exists to inherit, TrueNAS calculates one that grants full control to the owner@, group@, members of the builtin_administrators group, and domain administrators.
TrueNAS grants modify control to other members of the builtin_users group and directory services domain users.

**Apps** includes an additional entry granting modify control to group 568 (Apps).

{{< expand "ACL Settings for Dataset Presets" "v" >}}
{{< truetable >}}
|                   | ACL Type   | ACL Mode    | Case Sensitivity | Enable atime |
|-------------------|------------|-------------|------------------|--------------|
| **Generic**       | POSIX      | n/a         | Sensitive        | Inherit      |
| **SMB**           | NFSv4      | Restricted  | Insensitive      | Inherit           |
| **Apps**          | NFSv4      | Passthrough | Sensitive        | Off          |
| **Multiprotocol** | NFSv4      | Passthrough | Sensitive        | Off          |
{{< /truetable >}}
{{< /expand >}}