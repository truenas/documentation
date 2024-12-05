&NewLine;

* Set a pool for applications to use if not already assigned.
  
  {{< hint type=warning title="Encrypted Pools" >}}
   Do not select an encrypted pool as the app pool!
  Selecting an encrypted pool can cause app issues after upgrading the system when pools and any datasets in the pool are locked.
  If using the encrypted root dataset of the pool, the dataset for the containers do not mount, and the containers do not start.
  To resolve issues, enter the passphrase/key to unlock datasets, and then all nested datasets can mount and start.
  {{< /hint >}}
  
  Go to **Apps**. If prompted, set the pool for apps.
  TrueNAS creates the **ix-apps** (hidden) dataset in the pool set as the application pool.
  This dataset is internally managed, so you cannot use this as the parent when you create required application datasets.

  {{< trueimage src="/images/SCALE/Apps/AppsChooseAPoolForApps.png" alt="Choose A Pool for Apps" id="Choose A Pool for Apps" >}}

  After setting the pool, the **Installed Applications** screen displays **Apps Service Running** on the top screen banner.