---
title: "How To Back Up Google Drive to TrueNAS SCALE"
weight: 100
---

Google Drive and G Suite are widely used tools for creating and sharing documents, spreadsheets, and presentations with team members. While cloud-based tools have inherent backups and replications included by the cloud provider, certain users may require additional backup or archive capabilities. For example, companies using G Suite for important work may be required to keep records for years, potentially beyond the scope of the G Suite subscription. TrueNAS offers the ability to easily back up Google Drive by using the built-in cloud sync.


## Setting up Google Drive credentials

Set up the credentials under **Credentials > Backup Credentials**.  

![CredentialsBackupCredentials](/images/SCALE/CredentialsBackupCredentials.png "Credentials Backup Credentials")

Next click **ADD** for *Cloud Credentials*.

Name the Credential and select *Google Drive* for the Provider. 
Click **LOGIN TO PROVIDER** and login with the appropriate Google user account. 

![CredentialsAddCredentials](/images/SCALE/CredentialsAddCredentials.png "CredentialsAddCredentials")

Google will request to allow access to all the Google Drive files for the FreeNAS device.

![GoogleOAuthProceed](/images/TrueNASCommon/GoogleOAuthProceed.png "Google OAuth Proceed")

![GoogleOAuthAccount](/images/TrueNASCommon/GoogleOAuthAccount.png "Google OAuth Account")

![GoogleOAuthPermissions](/images/TrueNASCommon/GoogleOAuthPermissions.png "Google OAuth Permissions")

Allow access and the appropriate access key will be inserted to the FreeNAS access token. Assign a Team ID if required, but it is not necessary in all cases. 

Click **VERIFY CREDENTIAL** and wait for the credential to verify.

![CredentialsVerify](/images//TrueNASCommon/CredentialsVerify.png "Credentials Verify")

 Once successful, click **SUBMIT**. The new cloud credentials will be visible in the web interface.

![CredentialsBackupCredentialsNew](/images/SCALE/CredentialsBackupCredentialsNew.png "Credentials Backup Credentials New")


### Set the cloud sync task

Click on **Data Protection** to open the Tasks page.
Click on **+** icon for *Cloud Sync Tasks* to create a new Cloud Sync Task.

Set the backup time frame, frequency, and folders – both the cloud-based folder and TrueNAS dataset. 
Set whether the synchronization should sync all changes, just copy new files, or move files. 
Files are removed from the cloud source or TrueNAS source depending on push or pull.
Add a description for the task and select the cloud credentials.
Choose the appropriate cloud folder target and TrueNAS storage location.

Select the file transfer mode: 

+ **Sync**: Keep files newly created or deleted the same.
+ **Copy**: Copy new files to the appropriate target (i.e., TrueNAS pulls files from Google Drive or pushes files to Google Drive).
+ **Move**: Copies files to the target and then delete files from the source. Using Move, users can set a folder in Google Drive for archival, and move older documents to that folder from their Drive account. Those files would then automatically get backed up to their TrueNAS storage.

![TasksCloudSyncTask](/images/SCALE/TasksCloudSyncTask.png "TasksCloudSyncTask")


Once created, attempt a dry run of the task. 

![CloudSyncDryRun](/images/TrueNASCommon/CloudSyncDryRun.png "Cloud Sync Dry Run")

![CloudSyncDryRunLog](/images/CORE/12.0/CloudSyncDryRunLog.png "Cloud Sync Dry Run Log")

If the Dry run succeeds, click **SUBMIT** to save the task.

![CloudSyncTaskNew](/images/CORE/12.0/CloudSyncTaskNew.png "Cloud Sync Task New")

Expand the section down to see the options for the task.

![CloudSyncTaskNewExpanded](/images/CORE/12.0/CloudSyncTaskNewExpanded.png "Cloud Sync Task New Expanded")

Clicking **RUN NOW** will prompt the task to start immediately.

![CloudSyncRunNow](/images/CORE/12.0/CloudSyncRunNow.png "Cloud Sync Run Now")

![CloudSyncTaskStarted](/images/CORE/12.0/CloudSyncTaskStarted.png "Cloud Sync Task Started")

![CloudSyncTaskRunning](/images/CORE/12.0/CloudSyncTaskRunning.png "Cloud Sync Task Running")

The web interface will show the status as **RUNNING** and **SUCCESS** upon completion. Details can be accessed via the **Task Manager** icon in the upper right-hand corner. 

Once the sync reports a status of *SUCCESS* you can verify this by opening the folder on another computer if it is a share, through SSH access, or by checking the destination directory through the TrueNAS CLI.

![CloudSyncTaskSuccess](/images/CORE/12.0/CloudSyncTaskSuccess.png "Cloud Sync Task Success")


### Working with Google created content

{{< include file="static/includes/GoogleDriveBadPermissions.md.part" markdown="true" >}}
