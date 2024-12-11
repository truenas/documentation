&NewLine;

* Set a pool for applications to use if not already assigned.
  
  {{< hint type=warning title="Encrypted Pools" >}}
   Do not select an encrypted pool as the app pool!
  Selecting an encrypted pool can cause app issues after upgrading the system when pools and any datasets in the pool are locked.
  If using the encrypted root dataset of the pool, the dataset for the containers does not mount, and the containers do not start.
  To resolve issues, unlock the dataset(s) by entering the passphrase/key to allow all nested datasets to mount and start.
  {{< /hint >}}
  
  You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).
  Go to **Apps**. If the pool for apps is not already set, do it when prompted.
  TrueNAS creates the **ix-apps** (hidden) dataset in the pool set as the application pool.
  This dataset is internally managed, so you cannot use this as the parent when you create required application datasets.
  After setting the pool, the **Installed Applications** screen displays **Apps Service Running** on the top screen banner.

  {{< trueimage src="/images/SCALE/Apps/AppsChooseAPoolForApps.png" alt="Choose A Pool for Apps" id="Choose A Pool for Apps" >}}
