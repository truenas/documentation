&NewLine;

* (Optional) Create a new TrueNAS user account to manage this application.
  When creating a new user account to manage this application or using an existing TrueNAS [administrator]({{< relref "ManageLocalUsersSCALE.md" >}}) account, enable sudo permissions for that TrueNAS user account, select **Create New Primary Group**, and add the appropriate group in the **Auxiliary Group** for the type of user you want to create. Make note of the UID for the new user to add in the installation wizard.

  Add the user ID to the dataset ACL permissions when setting up app storage volumes in the Install app wizard.