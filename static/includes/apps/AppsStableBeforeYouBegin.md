&NewLine;

* Set a pool for applications to use if not already assigned.
  
  Go to **Apps**. If the pool for apps is not already set, do it when prompted.

 {{< trueimage src="/images/SCALE/Apps/AppsChooseAPoolForApps.png" alt="Choose A Pool for Apps" id="Choose A Pool for Apps" >}}
  
  TrueNAS creates the **ix-apps** (hidden) dataset in the pool set as the application pool.
  This dataset is internally managed, so you cannot use this as the parent when you create required application datasets.

  After setting the pool, the **Installed Applications** screen displays **Apps Service Running** on the top screen banner.

* (Optional) Create a new TrueNAS user to serve as the administrator for the app.
  You can use the default user or add a new user.
  When you [create a new user]({{< relref "ManageLocalUsersSCALE.md#creating-user-accounts" >}}) select **Create New Primary Group**, and select the appropriate group in the **Auxiliary Group** for the type of user you want to create. Make note of the UID for the new user to add in the installation wizard.

* Create the required dataset(s).