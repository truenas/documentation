&NewLine;

1. Click **Add Item** below the **Access Control List** on the left side of the screen.
   If the list includes one or more **User Obj** entries, TrueNAS adds a new ACE shown as a **Mask** on the **Access Control List**.
   With this new item selected (highlighted), set the type of entry and the permissions level.

2. Click in the **Who** field under **Access Control Entry** on the right side of the screen.
   Change **Mask** to **user** if adding a user to the ACL. This gives the selected user permissions to access this dataset.
   Selecting **User** shows the **User** field.

   Change **Mask** to **group** if granting a group of users permission to access the dataset.
   This shows the **Group** field.
   The group must be defined on the system.
   In most cases, and if TrueNAS is set to create a new primary group for a new user, this group automatically created when you add a new users.
   Active Directory can also provision groups and assign users to that group.

3. Select the user name on the **User** dropdown list. Or if creating a group, select the name of the group in **Group**.

4. Select the permission or access level to grant the user/group.