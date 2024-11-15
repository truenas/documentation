---
title: "Backing Up Google Drive to TrueNAS"
description: "Provides instructions on adding Google Drive cloud credentials using the Add Cloud Credentials and Add Cloud Sync Task screens, and on working with Google-created content."
weight: 10
aliases: /scale/scaleuireference/dataprotection/cloud-sync-tasks/cloudsynctaskgoogledrive/
tags:
 - cloud
 - backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
---

Google Drive and G Suite are widely used tools for creating and sharing documents, spreadsheets, and presentations with team members.
While cloud-based tools have inherent backups and replications included by the cloud provider, certain users might require additional backup or archive capabilities.
For example, companies using G Suite for important work might be required to keep records for years, potentially beyond the scope of the G Suite subscription.
TrueNAS offers the ability to easily back up Google Drive by using the built-in cloud sync.

## Setting up Google Drive Credentials

You can add Google Drive credentials using the **Add Cloud Credentials** screen accessed from the **Credentials > Backup Credentials > Cloud Credentials** screen, or you can add them when you create a cloud sync task using the **Add Cloud Sync Task** screen accessed from the **Data Protection > Cloud Sycn Task** screen.

### Adding Google Drive Credentials Using Cloud Credentials

{{< include file="/static/includes/AddCloudCredentialStep1.md" >}}

2. Select **Google Drive** on the **Provider** dropdown list. The Google Drive authentication settings display on the screen.

3. Enter the Google Drive authentication settings.

   ![CloudCredentialsGoogleDriveAuthentication](/images/SCALE/DataProtection/CloudCredentialsGoogleDriveAuthentication.png "Google Drive Authentication")

   a. Click **Log In To Provider**. The Google **Authentication** window opens.

      ![GoogleOAuthProceed](/images/TrueNASCommon/GoogleOAuthProceed.png "Google OAuth Proceed")

   b. Click **Proceed** to open the **Choose an Account** window.

      ![GoogleOAuthAccount](/images/TrueNASCommon/GoogleOAuthAccount.png "Google OAuth Account")

    c. Select the email account to use. Google displays the **Sign In** window. Enter the password and click **Next** to enter the password. Click **Next** again.
       Google might display a **Verify it's you** window. Enter a phone number where Google can text an verification code, or you can click **Try another way**.

    d. Click **Allow** on the **TrueNAS wants to access your Google Account** window. TrueNAS populates **Access Token** with the token Google provides.

      ![GoogleOAuthPermissions](/images/TrueNASCommon/GoogleOAuthPermissions.png "Google OAuth Permissions")

4. Click **Verify Credentials** and wait for TrueNAS to display the verification dialog with verified status. Close the dialog.

5. Click **Save**.
   The **Cloud Credentials** widget displays the new credentials. These are also available for cloud sync tasks to use.

### Adding A Google Drive Cloud Sync Task

You must add the cloud credential on the **Backup Credentials** screen before you create the cloud sync task.

To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Cloudsync Task Wizard** opens.

1. Select Google Drive on the **Credential** dropdown list, then enter your credentials.

2. Click **Next**.

{{< include file="/static/includes/AddCloudSyncTaskSteps3-8.md" >}}

See **Using Scripting and Environment Variables** for more information on [environment variables]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks/_index.md" >}}).

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Working with Google Created Content

{{< include file="/static/includes/GoogleDriveBadPermissions.md" >}}
