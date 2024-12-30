&NewLine;

* Create datasets for the storage volumes for the app.
  
  {{< hint type=warning title="Encrypted Datasets" >}}
  Do not create encrypted datasets for apps if not required!
  Using an encrypted dataset can result in undesired behaviors after upgrading TrueNAS when pools and datasets are locked.
  When datasets for the containers are locked, the container does not mount, and the apps do not start.
  To resolve issues, unlock the dataset(s) by entering the passphrase/key to allow datasets to mount and apps to start.
  {{< /hint >}}

  Go to **Datasets** and select the pool or dataset where you want to place the dataset(s) for the app.
  For example, */tank/apps/appName*.