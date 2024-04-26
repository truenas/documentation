&NewLine;

To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Cloudsync Task Wizard** opens.

![CloudSyncTaskWizardProviderScreen](/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png "Cloudsync Task Wizard Provider")

1. Select an existing backup credential from the **Credential** dropdown list.
   If not already added as a cloud credential, click **Add New** to open the **Cloud Credentials** screen to add the credential.
   Click **Save** to close the screen and return to the wizard.

2. Click **Next** to open the **Where and When** wizard screen.

   ![CloudSyncTaskWizardWhatandWhenScreen](/images/SCALE/DataProtection/CloudSyncTaskWizardWhatandWhenScreen.png "Cloudsync Task Wizard What and When")

3. Select the option from **Direction** and in **Transfer Mode**.
   Select the location where to pull from or push data to in the **Folder** field.

4. Select the dataset location in **Directory/Files**. Browse to the dataset to use on SCALE for data storage.
   Click the arrow to the left of the name to expand it, then click on the name to select it.

   If **Direction** is set to **PUSH**, click on the folder icon to add **/** to the **Folder** field.

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

5. Cloud provider settings change based on the credential you select. Select or enter the required settings that include where files are stored.
   If shown, select the bucket on the **Bucket** dropdown list.

6. Select the time to run the task from the **Schedule** options.

7. Click **Save** to add the task.

Use **Dry Run** to test the configuration before clicking **Save** or select the option on the **Cloud Sync Task** widget after you click **Save**.
TrueNAS adds the task to the **Cloud Sync Task** widget with the **Pending** status until the task runs on schedule.