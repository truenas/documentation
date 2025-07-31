&NewLine;

{{< hint type=note >}}
You cannot access SMB shares with the root user. Change the SMB dataset ownership to the admin user (Full Admin user).
{{< /hint >}}

To configure share owner, user and group permissions for the dataset Access Control List (ACL), use the **Edit Filesystem ACL** option.
This modifies the ACL entry for the SMB share the path (defined in **Path**) at the dataset level.
To customize permissions, add Access Control Entries (ACEs) for users or groups.

To access the dataset (filesystem) permissions, click on the <span class="material-icons">more_vert</span> dropdown list to the right of each share then on **Edit Filesystem ACL** to open the **Edit ACL** screen for the dataset associated with the share.
You can also go to **Datasets**, select the dataset (same name as the share), then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.

**Samba Authentication** selected by default when SMB share users are created or added to TrueNAS manually or through a directory service, and these users are automatically added to the **builtin-users** group.
Users in this group can add or modify files and directories in the share.

The share dataset ACL includes an ACE for the **builtin-users** group, and the **@owner** and **@group** are set to **root** by default.
Change the **@owner** and **@group** values to the admin (Full admin) user and click **Apply** under each.

To restrict or grant additional file permissions for some or all share users, do not modify the **builtin-users** group entry.
Best practice is to create a new group for the share users that need different permissions, reassign these users to the new group and remove them from **builtin-users** group.
Next, edit the ACL by adding a new ACE entry for the new group, and then modify the permissions of that group.

Private dataset (home share) users can modify the **builtin-users** group ACE entry to grant **FULL_CONTROL**

If you need to restrict or increase permissions for some share users, create a new group and add an ACE entry with the modified permissions.
