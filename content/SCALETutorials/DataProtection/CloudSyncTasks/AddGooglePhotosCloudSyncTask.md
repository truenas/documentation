---
title: "Adding a Google Photos Cloud Sync Task"
description: "Provides instructions on how to set up Google Photos API credentials and use them to create a cloud sync task."
weight: 40
tags:
- scalecloud
- scalesgooglephotos
- scalebackup
---

{{< toc >}}

Google Photos works best in TrueNAS using a Google Photos API key and [rclone](https://rclone.org/) token.

## Creating the API Credentials

On the [Google API dashboard](https://console.cloud.google.com/apis/dashboard), click the dropdown menu next to the Google Cloud logo and select your project. If you do not have a project, click **NEW PROJECT** and enter a value in **Project name**, **Organization**, and **Location**.

![GooglePhotosAPINewProject](/images/SCALE/22.12/GooglePhotosAPINewProject.png "New Project")

### Enable API

After you select your project, click **Enabled APIs & Services** on the left menu, then click **+ ENABLE APIS AND SERVICES**.

![GooglePhotosAPIEnableAPIsandServices](/images/SCALE/22.12/GooglePhotosAPIEnableAPIsandServices.png "Enable APIs and Services")

Enter **photos library api** in the search bar, then select **Photos Library API** and click **ENABLE**.

![GooglePhotosAPIPhotosLibraryAPISearch](/images/SCALE/22.12/GooglePhotosAPIPhotosLibraryAPISearch.png "Photos Library API Search")

![GooglePhotosAPIClickEnable](/images/SCALE/22.12/GooglePhotosAPIClickEnable.png "Click Enable")

### Configure Authentication

Next, click **OAuth consent screen** on the left menu, select **EXTERNAL**, then click **CREATE**.

![GooglePhotosAPICreateExternal](/images/SCALE/22.12/GooglePhotosAPICreateExternal.png "Create External")

Enter a value in **App name** and **User support email**. 

![GooglePhotosAPIAppInformation](/images/SCALE/22.12/GooglePhotosAPIAppInformation.png "Enter App Information")

Enter an email address in the **Developer contact information** section, then click **SAVE AND CONTINUE**.

![GooglePhotosAPIDeveloperContactInformation](/images/SCALE/22.12/GooglePhotosAPIDeveloperContactInformation.png "Enter Developer Contact Information")

Continue to the **Add users** section, enter your email address, then click **ADD**.

![GooglePhotosAPIAddTestingUser](/images/SCALE/22.12/GooglePhotosAPIAddTestingUser.png "Add Testing User")

On the **OAuth consent screen**, click **PUBLISH APP** under **Testing** and push the app to production.

![GooglePhotosAPIPublish](/images/SCALE/22.12/GooglePhotosAPIPublish.png "Publish Status")

{{< expand "Can I leave the app in testing mode?" "v" >}}
You can leave the app in testing mode, but your cloud sync task fails when your testing app credentials expire after seven days. 
{{< /expand >}}

### Create Credentials

Click **Credentials** on the left menu, then click **+ CREATE CREDENTIALS** and select **OAuth client ID**.

![GooglePhotosAPIAddCredentials](/images/SCALE/22.12/GooglePhotosAPIAddCredentials.png "Add Credentials")

Select **Desktop app** in the **Application type** dropdown, then enter a name for the client ID and click **CREATE**.

![GooglePhotosAPICreateOAuthClientID](/images/SCALE/22.12/GooglePhotosAPICreateOAuthClientID.png "Create OAuth Client ID")

Copy and save your client ID and secret, or download the JSON file.

![GooglePhotosAPICopyIDandSecret](/images/SCALE/22.12/GooglePhotosAPICopyIDandSecret.png "Copy ID and Secret")

## Configuring Rclone

Download [rclone](https://rclone.org/downloads/) for your OS and open it in a command line utility. The example photos in this article use Powershell in Windows OS.

Enter `rclone config`, then enter `n` to create a new remote.

![GooglePhotosAPIrcloneConfig](/images/SCALE/22.12/GooglePhotosAPIrcloneConfig.png "Configure rclone")

Enter a name for the new remote, then enter the number from the list corresponding to Google Photos.

Enter the client id and secret you saved when you created the Google Photos API credentials, then enter `false` to keep the Google Photos backend read-only.

![GooglePhotosAPIrcloneConfig2](/images/SCALE/22.12/GooglePhotosAPIrcloneConfig2.png "Configure rclone")

Do not edit the advanced config. When prompted about automatically authenticating rclone with the remote, enter `y`.

A browser window opens to authorize rclone access. Click **Allow**.

In the command line, enter `y` when prompted about media item resolution to complete the configuration.

Copy and save the type, client_id, client_secret, and token, then enter `y` to keep the new remote.

![GooglePhotosAPIrcloneConfig3](/images/SCALE/22.12/GooglePhotosAPIrcloneConfig3.png "Configure rclone")

## Creating Google Photos Cloud Credentials

![GooglePhotosAPIAddCloudCredentials](/images/SCALE/22.12/GooglePhotosAPIAddCloudCredentials.png "Add Cloud Credentials")

Open your TrueNAS Web UI. Go to **Credentials > Backup Credentials** and click **Add** in the **Cloud Credentials** widget.

Select Google Photos as the **Provider** and enter a name.

{{< hint warning >}}
Do not click **Log In To Provider**.
{{< /hint >}}

Paste the Google Photos API client ID and client secret in the **OAuth Client ID** and **OAuth Client Secret** fields.

Paste your rclone token into the **Token** field.

Click **Verify Credential** to ensure you filled out the fields correctly, then click **Save**.

## Creating the Cloud Sync Task

{{< include file="/content/_includes/CreateCloudSyncTaskScale.md" type="page" >}}
