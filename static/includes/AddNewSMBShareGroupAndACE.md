&NewLine;

To change the permission level for some share users, add a new group, reassign the user(s) to the new group, then modify the share dataset ACL to include this new group and the desired permissions.

1. Go to **Groups**, click **Add** and create the new group.

2. Go to **Users**, select a user, click **Edit**, remove the **builtin-user** entry from **Auxiliary Groups** and add the new group.
   Click **Save**. Repeat this step for each user or change the group assignment in the directory server to the new group.

3. Edit the filesystem (dataset) permissions. Use one of the methods to access the **Edit ACL** screen for the share dataset.

4. Add a new ACE entry for the new group. Click **Add Item**.

5. Select **Group** in the **Who** field, type the name into the **Group** field, then set the permission level.

6. Select **Basic** in the **Permissions** area then select the level of access you want to assign in the **Permissions** field.
   For more granular control, select **Advanced** then select on each permission option to include.

7. Click **Save Access Control List**.

If restricting this group to read only and the share dataset is nested under parent datasets, go to each parent dataset, edit the ACL.
Add an ACE entry for the new group, and select **Traverse**.
Keep the parent dataset permission set to either **Full_Control** or **MODIFY** but select **Traverse**.
