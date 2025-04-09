&NewLine;

To configure a new privilege, go to **Credentials > Groups**, click on **Privileges** to open the **Privileges** screen.

Click **Add** to define a new privilege. For example, if you want to create an group with the ability to only perform and manage backup, replication, or some other task.
You can create a new privilege to customize the functional access you want to grant.

On the **New Privilege** screen:

1. Enter a name for the new privilege. Names can include the dash (-) or underscore(_) special characters, and upper and lowercase alphanumeric characters.
 Make the name descriptive of the privilege. For example, *Replication Administrator* *Backup Administrator*, *iSCSI Share Admin*, etc.
 You can create a privilege that can only manage iSCSI shares or one that can manage applications based on the selections made in the **Roles** field.

2. Click in the **Local Groups** field to see a list of groups on the system. To add another group, click in the field to select another group.
 Click the *x* to the right of the group name to remove that group from the privilege.

3. Click the down arrow at the right of the **Roles** field to show the list of roles configured on the system. Select all roles to include.
 Use the scroll bar at the right of the field to see all options.

4. Select **Web Shell Access** to allow access to the shell screen in the TrueNAS UI.

5. Click **Save** to create the new privilege.

Users assigned to the group show on the **Users** screen with the new privilege granted to the user in the **Roles** column, and the new group shows on the **Groups** screen with privilege listed in the **Roles** column.