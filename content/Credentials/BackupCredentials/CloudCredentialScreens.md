---
title: "Cloud Credentials Screens"
description: "Provides information on the Cloud Credentials screens and settings."
weight: 30
tags:
- cloud
- credentials
- webdav
- s3
- backup
doctype: reference
---



{{< include file="/static/includes/CloudServiceProvidersSCALE.md" >}}

## Cloud Credentials Card

The **Cloud Credentials** card displays a list of cloud storage credentials configured on the system.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsCloudCredentialsWidget.png" alt="Cloud Credentials Card" id="Cloud Credentials Card" >}}

Before adding cloud credentials for a cloud storage provider, the **Cloud Credentials** card displays **No Cloud Credentials configured**.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsNoCredentials.png" alt="Cloud Credentials Card No Credentials" id="Cloud Credentials Card No Credentials" >}}

**Add** opens the **[Cloud Credentials](#cloud-credentials-screen)** configuration screen.

## Cloud Credentials Screen

The **Cloud Credentials** configuration screen opens pre-populated with Storj-iX as the provider.
It shows settings to add or edit cloud credentials TrueNAS uses to integrate with cloud storage providers.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsAdd.png" alt="Cloud Credentials Configuration Screen" id="Cloud Credentials Configuration Screen" >}}

**Provider** shows a list of available providers.
Select the name of a cloud provider to populate the configuration screen with credential settings for that provider.

**Verify Credentials** uses the credentials entered to verify access to the cloud storage provider account.

### Name and Provider Settings

The selection in **Provider** changes the **Authentication** settings.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Provider** | Sets the required service provider. Default is set to **Storj**. Cloud storage provider options show in the dropdown list. |
| **Name** | Specifies a name for this cloud credential. For example, *cloud1* or *amazon1*. |
{{< /truetable >}}

### Storj iX Credential

Storj authentication includes going to the Storj iX sign-in screen to either create a new Storj iX account or log into an existing Storj iX account.
After configuring the Storj account in the Storj-iX portal, return to TrueNAS to enter the S3 credentials provided by Storj.

{{< trueimage src="/images/SCALE/Credentials/AddingStorjCloudCredential.png" alt="Cloud Credentials Storj iX" id="Cloud Credentials Storj iX" >}}

{{< expand "Storj iX Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Signup for account** | Opens the Storj iX account sign-up page where you either create a new account or sign in to your Storj iX account. |
| **Access Key ID** | Specifies the alphanumeric key provided by Storj when you [create the S3 account access]({{< ref "TrueCloudTasks" >}}) associated with the storage buckets added in Storj. |
| **Secret Access Key** | Specifies the alphanumeric key provided by Storj when you [create the S3 account access]({{< ref "TrueCloudTasks" >}}) associated with the storage buckets added in Storj. |
| **Endpoint** | Shows an optional custom Storj S3-compatible endpoint to use a specific tier, such as Global or Select. Automatically set to the default. |
{{< /truetable >}}
{{< /expand >}}

### Amazon S3 Credential

Amazon S3 has basic authentication and advanced authentication settings. This section provides information on the basic authentication settings.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsAmzon3AuthenticationSetting.png" alt="Amazon S3 Authentication Settings" id="Amazon S3 Authentication Settings" >}}

{{< expand "Amazon S3 Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Access Key ID** | Specifies the alphanumeric key that is between five and 20 characters for the Amazon Web Services Key ID. Find this on [Amazon AWS](https://aws.amazon.com/) by going through **My account > Security Credentials > Access Keys** (Access Key ID and Secret Access Key). |
| **Secret Access Key** | Specifies the alphanumeric key that is between eight and 40 characters for the Amazon Web Services password. If you cannot find the Secret Access Key, go to **My Account > Security Credentials > Access Keys** and create a new key pair. |
{{< /truetable >}}
{{< /expand >}}

### Amazon S3 Advanced Authentication Options

This section provides information on Amazon S3 advanced authentication settings for endpoints. The basic authentication settings are required when using the advanced settings.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsAmzon3AdvancedAuthSettings.png" alt="Amazon S3 Advanced Authentication Settings" id="Amazon S3 Advanced Authentication Settings" >}}

{{< expand "Amazon S3 Advanced Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Maximum Upload Ports** | Specifies a value that defines the maximum number of chunks for a multipart upload. Setting a maximum is necessary if a service does not support the 10,000-chunk AWS S3 specification. |
| **Endpoint URL** | Specifies an optional [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html). When using AWS, you can leave the endpoint field empty to use the default endpoint for the region and automatically fetch available buckets, or enter a new endpoint. Refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=). |
| **Region** | Specifies an optional [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html). When left empty, it detects the correct public region for the bucket. Entering a private region name allows interacting with Amazon buckets created in that region. For example, enter *us-gov-east-1* to discover buckets created in the eastern [AWS GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) region. |
| **Disable Endpoint Region** | Prevents automatic detection of the bucket region. Only select if your AWS provider does not support regions. |
| **Use Signature Version 2** | Forces using [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) to sign API requests. Only select if your AWS provider does not support default version 4 signatures. |
| **Sign Accept-Encoding** | Includes the Accept-Encoding header as part of the signature. Disable if your S3 server is behind a proxy that modifies HTTP headers and you are experiencing **Signature Does Not Match** errors. |
{{< /truetable >}}
{{< /expand >}}

### BackBlaze B2 Credential

This section provides information on the BackBlaze B2 authentication settings.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsBackBlazeB2Authentication.png" alt="BackBlaze B2 Authentication Settings" id="BackBlaze B2 Authentication Settings" >}}

{{< expand "Backblaze B2 Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Key ID** | Specifies the alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key ID string. If you need to generate a new application key, log in to the Backblaze account, go to the **App Keys** page, and add a new application key. |
| **Application Key** | Specifies the alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key string. If you need to generate a new application key, log in to the Backblaze account, go to the **App Keys** page, and add a new application key. |
{{< /truetable >}}
{{< /expand >}}

### OAuth and Access Token Authentication Credentials

Several cloud storage providers use OAuth authentication and a required access token to authenticate the cloud storage account.
Providers using these methods are Box, Dropbox, Google Photos, pCloud, and Yandex.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsOAuthAccessTokenAuthentication.png" alt="OAuth and Access Token Authentications" id="OAuth and Access Token Authentication" >}}

{{< expand "OAuth and Access Token Authentication Settings" "v" >}}
Use **Login to Provider** to enter the account username and password.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **OAuth Client ID** | Specifies the public identifier for the cloud application. |
| **OAuth Client Secret** | Specifies the secret phrase known only to the cloud application and the authorization server. |
| **Token** | Specifies a User Access Token for [Box](https://developer.box.com/). An [access token](https://developer.box.com/reference/) enables Box to verify a request belongs to an authorized session. Example token: *T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl*. |
| **Access Token** | Specifies the access token for pCloud. This token can expire and require extension. |
| **Hostname** | Specifies the hostname to connect to for the pCloud provider. |
{{< /truetable >}}
{{< /expand >}}

### FTP and SFTP Credentials

FTP and SFTP cloud storage providers use host name, port, and user credentials to authenticate accounts. SMTP uses SSH hosts, port, and user credentials and also uses a private key.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsHostPortUserCredPrivateKeyAuth.png" alt="Host, Port User Credentials Authentication" id="Host, Port User Credentials Authentication" >}}

{{< expand "FTP and SFTP Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Host** | Specifies the FTP hostname, or for SFTP, the SSH hostname to connect. For example, *ftp.example.com*. |
| **Port** | Specifies the FTP or, for SFTP, the SSH port number. Leave blank to use the default port **21** for FTP or **22** for SFTP. |
| **Username** | Specifies a username on the FTP or SFTP host system, the SSJ username. This user must already exist on the host. |
| **Password** | Specifies the password for the user account. |
| **Private Key ID** | (SFTP only) Imports the private key from an existing SSH key pair. When key pairs do not exist on the system, add a new SSH key pair. |
{{< /truetable >}}
{{< /expand >}}

### Google Cloud Storage Credential

Google Cloud Storage authentication uses a Google [service account JSON key credential file](https://rclone.org/googlecloudstorage/#service-account-support) to authenticate the account.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsGoogleCloudAuth.png" alt="Google Cloud Storage Authentication" id="Google Cloud Storage Authentication" >}}

{{< expand "Google Cloud Storage Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Service Account Key** | Specifies the account key for the service. **Choose File** allows browsing to the file location on the server in a file browser to select the Google service account key credential file generated by the [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials) to authenticate the account. |
| **Preview JSON Service Account Key** | Shows the JSON file downloaded to the system server from Google Cloud Storage and uploaded with **Choose File**.  |
{{< /truetable >}}
{{< /expand >}}

### Google Drive Credential

Google Drive also uses OAuth authentication, a required access token, and a team drive ID to authenticate accounts.
Google Drive adds one additional authentication setting to the general OAuth settings.

{{< trueimage src="/images/SCALE/DataProtection/CloudCredentialsGoogleDriveAuthentication.png" alt="Google Drive Authentication" id="Google Drive Authentication" >}}

{{< expand "Google Drive Authentication Settings" "v" >}}
Use **Login to Provider** to enter the account username and password.
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **OAuth Client ID** | Specifies the public identifier for the cloud application. |
| **OAuth Client Secret** | Specifies the secret phrase known only to the cloud application and the authorization server. |
| **Access Token** | Specifies the required token created with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically, so you must refresh them. |
| **Team Drive ID** | Specifies the optional ID of the top-level folder of the team drives in Google Drive. Only required when connecting to a team drive. |
{{< /truetable >}}
{{< /expand >}}

### HTTP Credential

HTTP uses an HTTP host URL to authenticate account credentials.
It is a read-only client that supports directory listings from popular web servers like Apache and Nginx.

### Hubic Credential

Hubic uses an access token to authenticate the account.
Enter the token generated by a [Hubic account](https://api.hubic.com/sandbox/) into the **Access Token** field.

### Microsoft Azure Blob Storage Credential

Microsoft Azure Blob Storage uses the Microsoft Azure account name and account key to authenticate the account credentials.

![CloudCredentialsMSAzureBlogStorageAuth](/images/SCALE/Credentials/CloudCredentialsMSAzureBlogStorageAuth.png "Microsoft Azure Blob Storage Authentication")
{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsNoCredentials.png" alt="Cloud Credentials Card No Credentials" id="Cloud Credentials Card No Credentials" >}}

{{< expand "Microsoft Azure Blob Storage Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Account Name** | Specifies the [Microsoft Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account) account name. |
| **Account Key** | Specifies the base64 encoded key for Azure account. |
| **Endpoint** | Specfies an endpoint. For example, *blob.core.usgovcloudapi.net*. |
{{< /truetable >}}
{{< /expand >}}

### OpenStack Swift Credential

OpenStack Swift uses several required settings to authenticate credential accounts.
The **AuthVersion** setting selection changes the setting options displayed in **[Advanced Options](#openstack-authentication-advanced-options)**.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsOpenStackAuthentication.png" alt="OpenStack Swift Authentication" id="OpenStack Swift Authentications" >}}

{{< expand "OpenStack Swift Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User Name** | Specifies the required OpenStack username (OS_USERNAME) from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **API Key or Password** | Specifies the required OpenStack API key or password. This is the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Authentication URL** | Specifies the required authentication URL for the server. This is the OS_AUTH_URL from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **AuthVersion**|Sets the authentication version. Options are **Auto(vX)**, **v1**, **v2**, or **v3** to specify a different authentication version ([rclone documentation](https://rclone.org/swift/#standard-options)). |
{{< /truetable >}}
{{< /expand >}}

#### OpenStack Authentication Advanced Options

The **Authentication Advanced Options** screen shows different options based on the **AuthVersion** setting.
**Auto(vX)**, **v1**, and **v2** use the same advanced authentication settings.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsOpenStackAuthAdvanced.png" alt="OpenStack Swift Authentication Advanced" id="OpenStack Swift Authentication Advanced" >}}

{{< expand "Auto(vx), V1 and V2 Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Tenant Name** | Specifies the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Tenant ID** | Specifies the tenant ID. Enter the tenant ID (optional for v1 auth). For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Auth Token** | Specifies the optional auth token from alternate authentication. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Region Name** | Specifies the optional region name. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Storage URL** | Specifies the optional storage URL. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Endpoint Type** | Sets the service catalog option. Options are **Public**, **Internal** and **Admin**. **Public** is recommended. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
{{< /truetable >}}
{{< /expand >}}

{{< expand "V3 Authentication Settings" "v" >}}
Setting **AuthVersion** to **v3** shows additional authentication settings.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsOpenStackAuthAdvancedV3.png" alt="OpenStack Swift Authentication Advanced V3" id="OpenStack Swift Authentication Advanced V3" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User ID** | (Optional) Enter the user ID to log in. To log into most Swift systems, leave this blank. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **User Domain** | Specifies an optional user domain. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Tenant Name** | Specifies the require OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| **Tenant ID** | Specifies the tenant ID. Required for **v2** and **v3**. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Tenant Domain** | Specifies the optional tenant domain. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Auth Token** | Specifies the optional auth token from alternate authentication. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Region Name** | Specifies the optional region name. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Storage URL** | Specifies the optional storage URL. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
| **Endpoint Type** | Specifies an endpoint from the service catalog. For more information, see [rclone documentation](https://rclone.org/swift/#standard-options). |
{{< /truetable >}}
{{< /expand >}}

### WebDAV Credential

WebDAV uses a URL, service type, and user credentials to authenticate the cloud account.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialWebDAVAuthentication.png" alt="WebDAV Authentication Settings" id="WebDAV Authentication Settings" >}}

{{< expand "WebDAV Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **URL** | Specifies the required URL of the HTTP host to connect to. |
| **WebDAV Service** | Sets the required name of the WebDAV site, service, or software used from the dropdown list. Options are **NEXTCLOUD**, **OWNCLOUD**, **SHAREPOINT**, or **OTHER**. |
| **Username** | Specifies the required WebDAV account username. |
| **Password** | Specifies the required WebDAV account password. |
{{< /truetable >}}
{{< /expand >}}

### Microsoft OneDrive Credential

Microsoft OneDrive uses several required settings to authenticate credential accounts.

{{< trueimage src="/images/SCALE/Credentials/CloudCredentialsMicrosoftOneDrive.png" alt="Microsoft OneDrive Cloud Credentials" id="Microsoft OneDrive Cloud Credentials" >}}

{{< expand "Microsoft OneDrive Authentication Settings" "v" >}}

**Configure manually** shows the **OAuth Client ID** and **OAuth Client Secret** settings to manually configure OAuth.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Access Token** | Specifies the required OneDrive access token found in your Microsoft account. |
| **Drives List** | Specifies the drives and IDs registered to your Microsoft account. Entering a value in this field also fills out the **Drive ID** field. |
| **Drive Account Type** | Sets the required type of OneDrive account you are authorizing. This is automatically selected when you log in to your Microsoft account. |
| **Drive ID ** | Specifies a unique drive identifier or keeps the auto-filled entry that shows after filling out the **Drives List** field. |
{{< /truetable >}}
{{< /expand >}}
