&NewLine;

Go to **Credentials > Groups** and select the row for primary group of the admin user to expand it.
Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit**.

{{< trueimage src="/images/SCALE/Credentials/EditGroup.png" alt="Edit Group Screen" id="Edit Group Screen" >}}

Alternatively, click **Add** to create a new group for administrative users, such as *Share_Administrators*.

Use the **Privileges** dropdown to select assign permissions as **Local Administrator** to allow full administrative access or select **Read-Only Administrator** or **Sharing Administrator** to limit permissions.

When required, select the sudo authorization permissions to allow the admin group.
For improved security, deny sudo permissions unless required for specific, recurring administrative tasks or allow sudo permissions only when needed to perform a discrete task and then deny again when finished.
Do not allow sudo permissions for read-only administrators.

Click **Save**.

After creating a new group, click <i class="material-icons" aria-hidden="true" title="Members">group</i> **Members** to open the **Update Members** screen and assign one or more administrative user accounts to the group.
Click **Save**.

Log out of the TrueNAS system and then log back in using the new user credentials to verify that the admin credentials work properly with your network configuration.
