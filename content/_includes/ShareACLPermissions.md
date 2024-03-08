&NewLine;

{{< hint type=note >}}
You cannot access SMB shares with the root user. Change the SMB dataset ownership to the admin user (Full Admin user).
{{< /hint >}}

Using the **Edit Share ACL** option configures the permissions for just the share and not the dataset the share users.
It means the permissions apply at the entire SMB share level for the selected share. 
They do not apply to other file sharing protocol clients, other SMB shares that export the same share path (i.e., */poolname/shares* specified in **Path**), or to the dataset the share uses.

After creating the share and dataset, modify the share permissions to grant user or group access.

Click on <span class="material-icons">share</span> **Edit Share ACL** icon to open the **Edit Share ACL** screen if you want to modify permissions at the share level.

{{< trueimage src="/images/SCALE/Shares/SMBShareACLScreen.png" alt="SMB Share ACL Screen" id="SMB Share ACL Screen" >}}

Select either **User** in **Who**, then the user name in **User**, and then set the permission level using **Permissions** and **Type**.

(Optional) Click **Add** then select **Group**, the group name, and then set the group permissions.

Click **Save**.

See [Permissions]({{< relref "PermissionsSCALE.md" >}}) for more information on setting user and group settings. 