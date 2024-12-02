&NewLine;

* Set a pool for applications to use if not already assigned.
  
  You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).
  Go to **Apps**. If the pool for apps is not already set, do it when prompted.
  TrueNAS creates the **ix-apps** (hidden) dataset in the pool set as the application pool.
  This dataset is internally managed, so you cannot use this as the parent when you create required application datasets.
  After setting the pool, the **Installed Applications** screen displays **Apps Service Running** on the top screen banner.

  {{< trueimage src="/images/SCALE/Apps/AppsChooseAPoolForApps.png" alt="Choose A Pool for Apps" id="Choose A Pool for Apps" >}}