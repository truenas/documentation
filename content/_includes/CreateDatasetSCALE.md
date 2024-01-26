&NewLine;

To create a basic dataset using the default settings, go to **Datasets**.
Default settings include the settings datasets inherit from the parent dataset.

Select a dataset (root, parent, or child), then click **Add Dataset**.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetNameAndOptions.png" alt="Name and Options" id="Name and Options" >}}

Enter a value in **Name**.

Select the **Dataset Preset** option you want to use.
Options are:
* **Generic** for non-SMB share datasets such as iSCSI and NFS share datasets or datasets not associated with application storage.
* **Multiprotocol** for datasets optimized for SMB and NFS multi-mode shares or to create a dataset for NFS shares.
* **SMB** for datasets optimized for SMB shares.
* **Apps** for datasets optimized for application storage.

{{< expand "Dataset Preset Settings" "v" >}}
{{< truetable >}}
|                   | ACL Type   | ACL Mode    | Case Sensitivity | Enable atime |
|-------------------|------------|-------------|------------------|--------------|
| **Generic**       | POSIX      | n/a         | Sensitive        | Inherit      |
| **SMB**           | NFSv4      | Restricted  | Insensitive      | On           |
| **Apps**          | NFSv4      | Passthrough | Sensitive        | Off          |
| **Multiprotocol** | NFSv4      | Passthrough | Sensitive        | Off          |
{{< /truetable >}}

**Generic** sets permissions equivalent to Unix permissions 755, granting the owner full control and the group and other users read and execute privileges.
**SMB**, **Apps**, and **Multiprotocol** inherit ACL permissions based on the parent dataset, if defined. If there is no ACL to inherit, one is calculated granting full control to the owner@, group@, members of the builtin_administrators group, and domain administrators. Modify control is granted to other members of the builtin_users group and directory services domain users. **Apps** includes an additional entry granting modify control to group 568 (Apps).

{{< /expand >}}

If creating an SMB or multi-protocol (SMB and NFS) share the dataset name value auto-populates the share name field with the dataset name.

If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset, but this dataset is not used for application data storage.
If you want to store data by application, create the dataset first, then deploy your application.
When creating a dataset for an application, select **App** as the **Dataset Preset**. This optimizes the dataset for use by an application.

If you want to configure advanced setting options, click **Advanced Options**. 
For the **Sync** option, we recommend production systems with critical data use the default **Standard** choice or increase to **Always**.
Choosing **Disabled** is only suitable in situations where data loss from system crash or power loss is acceptable.

Select either **Sensitive** or **Insensitive** from the **Case Sensitivity** dropdown. The **Case Sensitivity** setting is found under **Advanced Options** and is not editable after saving the dataset.

Click **Save**.

{{< hint type=important >}}
Review the **Dataset Preset** and **Case Sensitivity** under **Advanced Options** on the **Add Dataset** screen before clicking **Save**.
You cannot change these or the **Name** setting after clicking **Save**.
{{< /hint >}}
