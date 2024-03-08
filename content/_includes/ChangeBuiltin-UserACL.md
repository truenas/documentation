&NewLine;

To change permissions for the **builtin_users** group, go to **Datasets**, select the share dataset, and scroll down to the **Permissions** widget.

1. Click **Edit** to open the **Edit ACL** screen.
   Locate the ACE entry for the **builtin-users** group and click on it.

2. Check the **Access Control List** area to see the if the permissions are correct.

   {{< trueimage src="/images/SCALE/Datasets/EditACLBuiltin_UserGroupForSMBShare.png" alt="Edit ACL Permissions" id="Edit ACL Permissions" >}}

3. Enter or select **Group** in the **Who** field.

4. Begin typing **builtin_users** in the **Group** field until it displays, then click on it to populate the field.

5. Select **Basic** in the **Permissions** area then select the level of access you want to assign in the **Permissions** field.
   For more granular control, select **Advanced** then select on each permission option to include.

6. Click **Save Access Control List** to add the ACE item or save changes.
7. 