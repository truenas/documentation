---
title: "Backing Up Google Drive to TrueNAS SCALE"
description: "This article provides instructions on adding Google Drives cloud credentials using **Add Cloud Credentials** and **Add Cloud Sync Task** screens. It also provides information on working with Google-created content."
weight: 10
alias: /scale/scaleuireference/dataprotection/cloud-sync-tasks/cloudsynctaskgoogledrive/
tags:
 - scalecloud
 - scalebackup
---

{{< toc >}}

Google Drive and G Suite are widely used tools for creating and sharing documents, spreadsheets, and presentations with team members. 
While cloud-based tools have inherent backups and replications included by the cloud provider, certain users might require additional backup or archive capabilities. 
For example, companies using G Suite for important work might be required to keep records for years, potentially beyond the scope of the G Suite subscription. 
TrueNAS offers the ability to easily back up Google Drive by using the built-in cloud sync.

## Setting up Google Drive Credentials

You can add Google Drive credentials using the **Add Cloud Credentials** screen accessed from the **Credentials > Backup Credentials > Cloud Credentials** screen, or you can add them when you create a cloud sync task using the **Add Cloud Sync Task** screen accessed from the **Data Protection > Cloud Sycn Task** screen.

### Adding Google Drive Credentials Using Cloud Credentials

{{< include file="/content/_includes/AddCloudCredentialStep1.md" type="page" >}}

2. Select **Google Drive** on the **Provider** dropdown list. The Google Drive authentication settings display on the screen.
   
3. Enter the Google Drive authentication settings.
   
   ![CloudCredentialsAddGoogleDrive](/images/SCALE/CredentialsAddCredentials.png "CredentialsAddCredentials")

   a. Enter the Google Drive user name and password.

   b. Click **Log In To Provider**. The Google **Authentication** window opens. 
      
      ![GoogleOAuthProceed](/images/TrueNASCommon/GoogleOAuthProceed.png "Google OAuth Proceed")
   
   c. Click **Proceed** to open the **Choose an Account** window.
      
      ![GoogleOAuthAccount](/images/TrueNASCommon/GoogleOAuthAccount.png "Google OAuth Account")
    
    d. Select the email account to use. Google displays the **Sign In** window. Enter the password and click **Next** to enter the password. Click **Next** again.
       Google might display a **Verify it's you** window. Enter a phone number where Google can text an verification code, or you can click **Try another way**. 

    e. Click **Allow** on the **TrueNAS wants to access your Google Account** window. TrueNAS populates **Access Token** with the token Google provides.
       
      ![GoogleOAuthPermissions](/images/TrueNASCommon/GoogleOAuthPermissions.png "Google OAuth Permissions")
    
4. Click **Verify Credentials** and wait for TrueNAS to display the verification dialog with verified status. Close the dialog.

5. Click **Save**. 
   The **Cloud Credentials** widget displays the new credentials. These are also available for cloud sync tasks to use.

### Adding A Google Drive Cloud Sync Task

You must add the cloud credential on the **Backup Credentials** screen before you create the cloud sync task. 

To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Add Cloud Sync Task** configuration screen opens.

1. (Required) Type a memorable task description in **Description**. For example, *googledrivepush* to represent the provider name and transfer direction.

2. Select your Google Drive credential on the **Credential** dropdown list to add a new backup credential. 

   ![AddGoogleDriveCloudSyncTask](/images/SCALE/22.12/AddGoogleDriveCloudSyncTask.png "Add Google Drive Cloud Sync Settings")

{{< include file="/content/_includes/AddCloudSyncTaskSteps3-8.md" type="page" >}}

See **Using Scripting and Environment Variables** for more information on [environment variables]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/AddCloudSyncTasks.md" >}}).

### Working with Google Created Content

{{< include file="content/_includes/GoogleDriveBadPermissions.md" type="page" >}}
