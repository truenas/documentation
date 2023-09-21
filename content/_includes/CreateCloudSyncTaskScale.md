&NewLine;

To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Add Cloud Sync Task** configuration screen opens.

{{< trueimage src="/images/SCALE/DataProtection/AddCloudSyncTaskPushTransferRemote.png" alt="Adding a Cloud Sync Task" id="Adding a Cloud Sync Task" >}}

1. (Required) Type a memorable task description in **Description**. 

2. Select an existing backup credential from the **Credential** dropdown list. 
   If you have not added the cloud credential, click **Manage Credentials** to open the **Backup Credentials** screen. 

3. Select the option from **Direction** and in **Transfer Mode**. 
   Select the location where to pull from or push data to in the **Folder** field. A **Bucket** field also displays for some cloud providers.

4. Select the dataset location in **Directory/Files**.

5. Cloud provider settings change based on the credential you select. Select or enter the required settings that include where files are stored.

6. Select the time from the **Schedule** options.

7. Click **Save** to add the task.

You can use **Dry Run** to test your configuration before you click **Save** or select the option on the **Cloud Sync Task** widget after you click **Save**.