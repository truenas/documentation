---
title: "Cloud Credentials Screens"
description: "Provides information on the Cloud Credentials widget, screens, and settings."
weight: 10
alias: 
tags:
- cloud
- credentials
- webdav
- s3
- backup
---

The **Backup Credentials** screen displays the **Cloud Credentials**, **SSH Connections** and **SSH Keypairs** widgets.

## Cloud Credentials Widget

The **Cloud Credentials** widget displays a list of cloud storage credentials configured on the system.

![BackupCredentialsCloudCredentialsWidget](/images/SCALE/Credentials/BackupCredentialsCloudCredentialsWidget.png "Cloud Credentials Widget")

Before adding cloud credentials for a cloud storage provider, the **Cloud Credentials** widget displays **No Cloud Credentials configured**.

![CloudCredentialsNoCredentials](/images/SCALE/Credentials/CloudCredentialsNoCredentials.png "Cloud Credentials No Cloud Credentials")

**Add** opens the **[Cloud Credentials](#cloud-credentials-screen)** configuration screen.

Click the name of a cloud credential to open the **Cloud Credentials** configuration screen populated with the settings for that credential.

## Cloud Credentials Screen

The **Cloud Credentials** configuration screen displays settings to add or edit cloud credentials TrueNAS uses to integrate with cloud storage providers.

![CloudCredentialsAdd](/images/SCALE/Credentials/CloudCredentialsAdd.png "Cloud Credentials Add")

{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

Use **Verify Credentials** after entering the authentication settings to verify you can access the cloud storage provider account with the credentials you entered.

### Name and Provider Settings

The selection in **Provider** changes the **Authentication** settings.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Provider** | Required. Default is set to **Storj**. Select the cloud storage provider from the options on the dropdown list. |
| **Name** | Enter a name for this cloud credential. For example, *cloud1* or *amazon1*. |
{{< /truetable >}}

### Storj Authentication Settings

Storj authentication includes going to the Storj-TrueNAS sign-in screen to either create a new Storj-TrueNAS account or log into an existing Storj-TrueNAS account, and then returning to SCALE to enter the S3 credentials provided by Storj for this credential.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsAdd](/images/SCALE/Credentials/CloudCredentialsAdd.png "Cloud Credentials Add for Storj")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Signup for account** | Link to the Storj-TrueNAS account sign-up page where you either create a new account or sign into your Storj-TrueNAS account. |
| **Access Key ID** | Enter the alphanumeric key provided by Storj when you [create the S3 account access]({{< ref "AddStorjCloudSyncTask" >}}) associated with the storage buckets added in Storj. |
| **Secret Access Key** | Enter the alphanumeric key provided by Storj when you [create the S3 account access]({{< ref "AddStorjCloudSyncTask" >}}) associated with the storage buckets added in Storj. |
{{< /truetable >}}

{{< /expand >}}

### Amazon S3 Authentication Settings

Amazon S3 has basic authentication and advanced authentication settings. This section provides information on the basic authentication settings.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsAmzon3AuthenticationSetting](/images/SCALE/Credentials/CloudCredentialsAmzon3AuthenticationSetting.png "Amazon S3 Authentication Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Access Key ID** | Enter the alphanumeric key that is between 5 and 20 characters for the Amazon Web Services Key ID. Find this on [Amazon AWS](https://aws.amazon.com/) by going through **My account > Security Credentials > Access Keys** (Access Key ID and Secret Access Key). |
| **Secret Access Key** | Enter the alphanumeric key that is between 8 and 40 characters for the Amazon Web Services password. If you cannot find the Secret Access Key, go to **My Account > Security Credentials > Access Keys** and create a new key pair. |
{{< /truetable >}}
{{< /expand >}}

### Amazon S3 Advanced Authentication Options

This section provides information on Amazon S3 advanced authentication settings for endpoints. The basic authentication settings are required when using the advanced settings.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsAmzon3AdvancedAuthSettings](/images/SCALE/Credentials/CloudCredentialsAmzon3AdvancedAuthSettings.png "Amazon S3 Advanced Authentication Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Maximum Upload Ports** | Enter a value to define the maximum number of chunks for a multipart upload. Setting a maximum is necessary if a service does not support the 10,000 chunk AWS S3 specification. |
| **Endpoint URL** | Optional. When using AWS, you can leave the endpoint field empty to use the default endpoint for the region and automatically fetch available buckets, or enter an [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html).  Refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=). |
| **Region** | Optional. Enter an [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html). Leave empty to detect the correct public region for the bucket. Entering a private region name allows interacting with Amazon buckets created in that region. For example, enter *us-gov-east-1* to discover buckets created in the eastern [AWS GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) region. |
| **Disable Endpoint Region** | Select to prevent automatic detection of the bucket region. Select only if your AWS provider does not support regions. |
| **Use Signature Version 2** | Select to force using [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) to sign API requests. Select only if your AWS provider does not support default version 4 signatures. |
{{< /truetable >}}
{{< /expand >}}

### BackBlaze B2 Authentication Settings

This section provides information on the BackBlaze B2 authentication settings.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsBackBlazeB2Authentication](/images/SCALE/Credentials/CloudCredentialsBackBlazeB2Authentication.png "BackBlaze B2 Authentication Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Key ID** | Enter or copy and paste the alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key ID string into this field. To generate a new application key, log in to the Backblaze account, go to the **App Keys** page, and add a new application key. |
| **Application Key** | Enter or copy and paste the alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key string into this field. To generate a new application key, log in to the Backblaze account, go to the **App Keys** page, and add a new application key. |
{{< /truetable >}}
{{< /expand >}}

### OAuth and Access Token Authentication Settings

Several cloud storage providers use OAuth authentication and a required access token to authenticate the cloud storage account. Providers that use these methods are Box, Dropbox, Google Photo, pCloud, and Yandex.
{{< expand "Click here for Settings" "v" >}}

![CloudCredentialsOAuthAccessTokeAuthentication](/images/SCALE/Credentials/CloudCredentialsOAuthAccessTokeAuthentication.png "OAuth and Access Token Authentication")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **OAuth Client ID** | Enter the public identifier for the cloud application. |
| **OAuth Client Secret** | Enter the secret phrase known only to the cloud application and the authorization server. |
| **Token** | Enter a User Access Token for [Box](https://developer.box.com/). An [access token](https://developer.box.com/reference/) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |
| **Hostname** | pCloud only. Optional. Enter the host name to connect to.  |
{{< /truetable >}}

Use **Login to Provider** to enter the account username and password.
{{< /expand >}}

### FTP and SMTP Authentication Settings

FTP and SMTP cloud storage providers use host name, port, and user credentials to authenticate accounts. SMTP uses SSH hosts, port, and user credentials and also uses a private key.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsHostPortUserCredPrivateKeyAuth](/images/SCALE/Credentials/CloudCredentialsHostPortUserCredPrivateKeyAuth.png "Host, Port User Credentials Authentication")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host** | Enter the FTP host name or for SMTP the SSH host name to connect. For example, *ftp.example.com*. |
| **Port** | Enter the FTP or for SMTP, the SSH port number. Leave blank to use the default port **21** for FTP or **22** for SMTP. |
| **Username** | Enter a username on the FTP or for the SMTP host system the SSJ user name. This user must already exist on the host. |
| **Password** | Enter the password for the user account. |
| **Private Key ID** | SNMP only. Import the private key from an existing SSH keypair or, if no keypairs exist on the system, select **Add** on the **SSH Keypairs** widget to open the **SSH Keypairs** screen. Enter a name, and then click **Generate New** to create a new SSH key for this credential. |
{{< /truetable >}}
{{< /expand >}}

### Google Cloud Storage Authentication Settings

Google Cloud Storage authentication uses a Google [service account json key credential file](https://rclone.org/googlecloudstorage/#service-account-support) generated by the [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials) to authenticate the account. Obtain the json file, download it to the system server and then upload it to the **Preview JSON Service Account Key** field. Use **Choose File** to browse to the file location on the server.

### Google Drive Authentication Settings

Google Drive uses OAuth authentication, a required access token, and a team drive ID to authenticate accounts.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsGoogleDriveAuthentication](/images/SCALE/DataProtection/CloudCredentialsGoogleDriveAuthentication.png "Google Drive Authentication")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **OAuth Client ID** | Enter the public identifier for the cloud application. |
| **OAuth Client Secret** | Enter the secret phrase known only to the cloud application and the authorization server. |
| **Access Token** | Required. Token created with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically, so you must refresh them. |
| **Team Drive ID** | Optional. Only needed when connecting to a Team Drive, and is the top-level folder ID for the Team Drive. |
{{< /truetable >}}

Use **Login to Provider** to enter the account username and password.
{{< /expand >}}

### HTTP Authentication Settings

HTTP uses an HTTP host URL to authenticate account credentials.

### Hubic Authentication Settings

Hubic uses an access token to authenticate the account. Enter the token generated by a [Hubic account](https://api.hubic.com/sandbox/) into the **Access Token** field.

### Mega Authentication Settings

Mega uses the username and password for the [MEGA user account](https://mega.nz/) to authenticate the account credentials.

### Microsoft Azure Blob Storage Authentication Settings

Microsoft Azure Blob Storage uses the Microsoft Azure account name and account key to authenticate the account credentials.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsMSAzureBlogStorageAuth](/images/SCALE/Credentials/CloudCredentialsMSAzureBlogStorageAuth.png "Microsoft Azure Blob Storage Authentication")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Account Name** | Enter the [Microsoft Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account) account name. |
| **Account Key** | Enter the base64 encoded key for Azure account. |
| **Endpoint** | Enter an endpoint. For example, *blob.core.usgovcloudapi.net*. |
{{< /truetable >}}
{{< /expand >}}

### OpenStack Swift Authentication Settings

OpenStack Swift uses several required settings to authenticate credential accounts. The **AuthVersion** setting selection changes setting options displayed in **[Advanced Options](#openstack-authentication-advanced-options)**.
{{< expand "Click Here for Settings" "v" >}}

![CloudCredentialsOpenStackAuthentication](/images/SCALE/Credentials/CloudCredentialsOpenStackAuthentication.png "OpenStack Swift Authentication")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User Name** | Required. Enter the OpenStack user name (OS_USERNAME) from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **API Key or Password** | Required. Enter the Openstack API key or password. This is the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Authentication URL** | Required. Enter the authentication URL for the server. This is the OS_AUTH_URL from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **AuthVersion**| Select the authentication version from the dropdown list if your auth URL has no version ([rclone documentation](https://rclone.org/swift/#standard-options)). |
{{< /truetable >}}
{{< /expand >}}

#### OpenStack Authentication Advanced Options

The **AuthVersion** option selected changes the settings displayed in **Authentication Advanced Options**. **Auto(vX)**, **v1**, and **v2** use the same advanced authentication settings but **V3** displays additional settings.

{{< expand "Auto(vx), V1 and V2" "v" >}}

![CloudCredentialsOpenStackAuthAdvanced](/images/SCALE/Credentials/CloudCredentialsOpenStackAuthAdvanced.png "OpenStack Swift Authentication Advanced")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Tenant Name** | Enter the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Tenant ID** | (Optional for v1 auth) Enter the tenant ID Enter the tenant ID. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Auth Token** | (Optional) Enter the auth token from alternate authentication. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Region Name** | (Optional) Enter the region name. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Storage URL** | (Optional) Enter the storage URL. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Endpoint Type** | Select service catalog option from the **Endpoint Type** dropdown. Options are **Public**, **Internal** and **Admin**. **Public** is recommended. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
{{< /truetable >}}
{{< /expand >}}

{{< expand "V3" "v" >}}
When **v3** is the **AuthVersion** option settings **Authentication Advanced Options** displays additional settings.

![CloudCredentialsOpenStackAuthAdvancedV3](/images/SCALE/Credentials/CloudCredentialsOpenStackAuthAdvancedV3.png "OpenStack Swift Authentication Advanced V3")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User ID** | Optional. Enter the user ID to log in. To log into most swift systems leave this blank. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **User Domain** | Optional. Enter the user domain. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Tenant Name** | Required. Enter the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Tenant ID** | Required for **v2** and **v3**. Enter the tenant ID. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Tenant Domain** | Optional. Enter the tenant domain. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Auth Token** | Optional. Enter the auth token from alternate authentication. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Region Name** | Optional. Enter the region name. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Storage URL** | Optional. Enter the storage URL. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Endpoint Type** | Select service catalog option from the **Endpoint Type** dropdown. Options are **Public**, **Internal** and **Admin**. **Public** is recommended. For more information see [rclone documentation](https://rclone.org/swift/#standard-options). |
{{< /truetable >}}
{{< /expand >}}

### WebDAV Authentication Settings

WebDAV uses the URL, service type and user credentials to authenticate the account credentials.
{{< expand "Chick Here for Settings" "v" >}}

![CloudCredentialWebDAVAuthentication](/images/SCALE/Credentials/CloudCredentialWebDAVAuthentication.png "WebDAV Authentication Settings")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **URL** | Required. Enter the URL of the HTTP host to connect to. |
| **WebDAV Service** | Required. Select the name of the WebDAV site, service, or software used from the dropdown list. Options are **NEXTCLOUD**, **OWNCLOUD**, **SHAREPOINT**, or **OTHER**. |
| **Username** | Required. Enter the WebDAV account user name. |
| **Password** | Required. Enter the WebDAV account password. |
{{< /truetable >}}
{{< /expand >}}
