&NewLine;

Select the certificate you created for MinIO from the **Certificates** dropdown list.

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, http://*ipaddress*:30000.
Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, http://*ipaddress*:30001.

Scroll down to or click on **Storage Configuration** on the list of section at the right of the screen. 
Click **Add** three times in the **Storage Configuration** section to add three more sets of storage volume settings. 
In the first set of storage volume settings, select **Host Path (Path that already exists on the system)** and accept the default **/data1** in **Mount Path**. 
Enter or browse to the data1 dataset to populate **Host Path** with the mount path. For example, */mnt/tank/apps/data1*.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOSNMDStorageConfigData1andData2.png" alt="Add Storage Volumes /data1 And /data2" id="Add Storage Volumes /data1 And /data2" >}}

Scroll down to the next set of storage volume settings and select **Host Path (Path that already exists on the system)**. 
Change the **Mount Path** to **/data2**, and enter or browse to the location of the **data2** dataset to populate the **Host Path**.

Scroll down to the next set of storage volume settings and select **Host Path (Path that already exists on the system)**. 
Change the **Mount Path** to **/data3**, and enter or browse to the location of the **data3** dataset to populate the **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOSNMDStorageConfigData3andData4.png" alt="Add Storage Volumes /data3 And /data4" id="Add Storage Volumes /data3 And /data4" >}}

Scroll down to the last set of storage volume settings and select **Host Path (Path that already exists on the system)**. 
Change the **Mount Path** to **/data4**, and enter or browse to the location of the **data4** dataset to populate the **Host Path**.