&NewLine;

If restricting permissions to read only where the share dataset is nested under other datasets (parents), you must add the **Traverse** permission at the parent dataset ACL level(s) to allow users to move through directories within an SMB share without having write or execute privileges.

After adding the group and assigning it to the user(s), next modify the dataset ACLs for each dataset in the path to the share dataset (parent datasets and the share dateset).

1. Add the new group to the share ACL. Use one of the methods to access the **Edit ACL** screen for the share dataset.

2. Add a new ACE entry for the new group. Click **Add Item** to create an ACE for the new group. 

3. Select **Group** in the **Who** field, type the name into the **Group** field, then set the permission level.

4. Click **Save Access Control List**.

5. Return to the **Datasets** screen, locate the parent dataset for the share dataset, use one of the methods to access the **Edit ACL** screen for the parent dataset.

6. Add a new ACE entry for the new group. Click **Add Item** to create an ACE for the new group.

7. Select **Group** in the **Who** field, type the name into the **Group** field, then select **Traverse**. Leave the permission level set to full or modify.

8. Click **Save Access Control List**.

9. Repeat for each parent dataset in the path. This allows the restricted share group to navigate through the directories in the path to the share dataset.