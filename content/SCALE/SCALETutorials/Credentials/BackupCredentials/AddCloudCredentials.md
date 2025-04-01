---
title: "Adding Cloud Credentials"
description: "Provides basic instructions on adding backup cloud credentials and more detailed instructions for some cloud storage providers."
weight: 10
aliases:
tags:
 - cloud
 - credentials
 - webdav
 - s3
 - backup
keywords:
- enterprise data storage
- nas data storage
- cloud backup and recovery
---

The **Cloud Credentials** screen, accessed from the **Backup Credentials** screen allows users to integrate TrueNAS with cloud storage providers.

{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

To maximize security, TrueNAS encrypts cloud credentials when saving them.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable **Export Password Secret Seed** when generating that [configuration backup]({{< relref "/SCALE/SCALETutorials/SystemSettings/General/ManageSysConfigSCALE.md" >}}).
Remember to protect any downloaded TrueNAS configuration files.

Authentication methods for each provider could differ based on the provider security requirements.
You can add credentials for many of the supported cloud storage providers from the information on the [Cloud Credentials Screens]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/CloudCredentialScreens.md" >}}).
This article provides instructions for the more involved providers.

## Adding a Cloud Credential
We recommend you open another browser tab and log into the cloud storage provider account you intend to link with TrueNAS.

Some TrueNAS providers credentials require entering additional information generated while creating the provider account.
For example, the Storj iX account produces an access and secret key that must be entered in the **Cloud Credential** screen to create the credential.

Have the authentication information required by your cloud storage provider on hand to make the process easier.
Authentication information can include but is not limited to user credentials, access tokens, and access and security keys.

To add a cloud credential:

1. Select the cloud service from the **Provider** dropdown list. The provider required authentication option settings display.

   For details on each provider authentication settings see [Cloud Credentials Screens]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/CloudCredentialScreens.md" >}}).

2. Enter a name for the credential.

3. Enter the required authentication credentials, such as access token, access key and/or secret keys, and user credentials for the account into the appropriate fields.

4. Click **Verify Credentials** to verify the entered credentials work.

5. Click **Save**.

## Adding Storj Cloud Credentials
Storj iX is the default cloud storage provider in TrueNAS.

{{< include file="/static/includes/AddStorjCloudCredential.md" >}}

### Creating the Storj iX Account

{{< include file="/static/includes/CreateStorjiXAccount.md" >}}

### Setting Up S3 Access

{{< include file="/static/includes/SetUpStorjiXAccountS3Access.md" >}}

### Creating a TrueNAS Storj Bucket

You can either create a TrueNAS compatible Storj bucket while configuring cloud credentials or wait to do so while configuring a [TrueCloud back up]({{< relref "TrueCloudTasks.md" >}}) or [Cloud Sync]({{< relref "/SCALE/SCALETutorials/DataProtection/CloudSyncTasks" >}}) task.

{{< include file="/static/includes/StorjBucket.md" >}}

## Adding Amazon S3 Cloud Credentials
When adding an Amazon S3 cloud credential, you can either use the default authentication settings or advanced settings if you want to include endpoint settings.

To add a cloud credential for Amazon S3, select **Amazon S3** in **Provider**, enter a name and then:

1. Open a web browser tab to [Amazon AWS](https://aws.amazon.com/).

2. Navigate to **My account > Security Credentials > Access Keys** to obtain the Amazon S3 secret access key ID.
   Access keys are alphanumeric and between 5 and 20 characters.

   If you cannot find or remember the secret access key, go to **My Account > Security Credentials > Access Keys** and create a new key pair.

3. Enter or copy/paste the access key into **Access Key ID**.

4. Enter or copy/paste the Amazon Web Services alphanumeric password that is between 8 and 40 characters into **Secret Access Key**

5. (Optional) Enter a value to define the maximum number of chunks for a multipart upload in **Maximum Upload Ports**.
   Setting a maximum is necessary if a service does not support the 10,000-chunk AWS S3 specification.

6. (Optional) Select **Advanced Settings** to display the endpoint settings.

   a. Enter the [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html) in **Endpoint URL**.

      To use the default endpoint for the region and automatically fetch available buckets leave this field blank.
      For more information refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=).

   b. Enter an [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) in **Region**.

      To detect the correct public region for the selected bucket leave the field blank.
      Entering a private region name allows interaction with Amazon buckets created in that region.

   c. (Optional) Configure a custom endpoint URL.

   d. (Optional) Select **Disable Endpoint Region** to prevent automatic detection of the bucket region.
      Enable only if your AWS provider does not support regions.

   d. (Optional) Select **Use Signature Version 2** to force using signature version 2 with the custom endpoint URL.
      Select only if your AWS provider does not support default version 4 signatures.
      For more information on using this to sign API requests see [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html).

7. Click **Verify Credentials** to check your credentials for any issues.

8. Click **Save**

## Adding Cloud Credentials that Authenticate with OAuth
Cloud storage providers using OAuth as an authentication method are Box, Dropbox, Google Drive, Google Photos, pCloud, and Yandex.
Some providers like Google Drive and pCloud use additional settings to authenticate credentials.

{{< include file="/static/includes/OAuthCloudCredentialSetupSCALE.md" >}}

## Adding BackBlaze B2 Cloud Credentials
BackBlaze B2 uses an application key and key ID to authenticate credentials.

Open the **Cloud Credentials** screen, select **BackBlaze B2** in **Provider**, enter a name and then:

1. Log into the BackBlaze account, go to the **App Keys** page, and add a new application key. Copy and paste this into **Key ID**.

2. Generate a new application key on the BackBlaze B2 website.
   From the **App Keys** page, add a new application key. Copy the application Key string **Application Key**.

3. Click **Verify Credentials**.

4. Click **Save**.

## Adding Google Cloud Storage Credentials
Google Cloud Storage uses a service account JSON file to authenticate credentials.

Open the **Cloud Credentials** screen, select **Google Cloud Storage** in **Provider**, enter a name and then:

1. Go to your Google Cloud Storage website to download this file to the TrueNAS server.
   The [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials) creates the file.

2. Click **Choose File** to browse the server to locate the downloaded JSON file and upload it. The file populates **Preview JSON Service Account Key** 
   For help uploading a Google Service Account credential file [click here](https://rclone.org/googlecloudstorage/#service-account-support).

3. Click **Verify Credentials**.

4. Click **Save**.

## Adding OpenStack Swift Cloud Credentials
OpenStack Swift authentication credentials change based on selections made in **AuthVersion**.
All options use the user name, API key or password, and authentication URL, and can use the optional endpoint settings.
For more information on OpenStack Swift settings, see [rclone documentation](https://rclone.org/swift/#standard-options).

Open the **Cloud Credentials** screen, select **OpenStack Swift Cloud** in **Provider**, enter a name for the credential and then:

1. Enter your OpenStack OS_USERNAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **User Name**.

2. Enter the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **API Key or Password**.

3. (Optional) Select the version from the **AuthVersion**. For more information see [rclone documentation](https://rclone.org/swift/#standard-options).
   Select the desired option based on your use case.
   {{< expand "Set Auth(vx) to V1 or V2" "v" >}}
   If set to **Auth(vX)**, **V1** or **V2**:

   a. (Required) Enter the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **Tenant Name**.

   b. Enter the ID in **Tenant ID**. Required for **v2**.

   c. (Optional) Enter the alternative authentication token in **Auth Token**.

   d. Enter a region name in **Region Name**

   e. (Optional) Enter the URL in **Storage URL**.

   f. (Required) Select the service catalog option from the **Endpoint Type** dropdown. Options are **Public**, **Internal** and **Admin**. **Public** is recommended.
   {{< /expand >}}
   {{< expand "Set Auth(vx) to V3" "v" >}}
   If set to **v3** the **Advanced Options** settings displayed change.

   a. (Optional) Enter the user ID to log into OpenStack. Leave blank to log into most Swift systems.

   b. (Optional) Enter the **User Domain**.

   c. (Required) Enter the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **Tenant Name**.

   d. Enter the ID in **Tenant ID**. Required for **v2** and **v3** and (optional) enter a **Tenant Domain**.

   e. (Optional) Enter the alternative authentication token in **Auth Token**.

   f. Enter a region name in **Region Name**

   g. (Optional) Enter the URL in **Storage URL**.

   h. (Required) Select the service catalog option from the **Endpoint Type** dropdown. Options are **Public**, **Internal** and **Admin**. **Public** is recommended.
   {{< /expand >}}

4. Click **Verify Credentials**.

5. Click **Save**.

## Adding Microsoft OneDrive Credentials
Microsoft OneDrive uses OAuth authentication to connect TrueNAS to your cloud account.

Open the **Cloud Credentials** screen, select **Microsoft OneDrive** in **Provider**, enter a name and then:

1. Click **Log In To provider** to open the Microsoft sign-in page in a new window. You can confirm the intended authorization in the new window.

2. Confirm the authorization to enter your Microsoft login information. After logging in to your account, Microsoft prompts you to give TrueNAS access to your Microsoft information.

3. Give TrueNAS access to your Microsoft account and close the pop-up window. Your **Cloud Credentials** wizard should now say **Logged In To Provider** and have populated **OAuth Client ID**, **OAuth Client Secret**, **Access Token**, and **Drive Account Type** fields.

4. (Optional) Select an entry from the **Drives List** drop-down menu. This will also populate the **Drive ID** field.

5. Choose a drive from your OneDrive account and enter the ID in this field. If you selected an entry for **Drives List**, this field should already be populated with a valid ID.

6. Click **Save**.

## Using Automatic Authentication
Some providers can automatically populate the required authentication strings by logging in to the account.

To automatically configure the credential, click **Login to Provider** and enter your account user name and password.

![AutomaticAuthenticationSCALE](/images/SCALE/Credentials/AutomaticAuthenticationSCALE.png "Cloud Automatic Authentication")

We recommend verifying the credential before saving it.
