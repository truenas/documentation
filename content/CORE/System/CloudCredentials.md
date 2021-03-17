---
title: "Cloud Credentials"
weight: 100
---

{{< toc >}}

To begin integrating TrueNAS with a Cloud Storage provider, register the account credentials on the system.
After saving any credentials, a [Cloud Sync Task]({{< relref "CloudSyncTasks.md" >}}") allows sending or receiving data from that Cloud Storage Provider.

## Saving a Cloud Storage Credential

Transferring data from TrueNAS to the Cloud requires saving Cloud Storage Provider credentials on the system.

{{< expand "Is this secure?" "v" >}}
To maximize security, these credentials are encrypted when saved.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable *Export Password Secret Seed* when generating that [configuration backup]({{< relref "ConfigBackup.md" >}}).
Remember to protect any downloaded TrueNAS configuration files.
{{< /expand >}}

It is recommended to have another browser tab open and logged in to the Cloud Storage Provider account you intend to link with TrueNAS.
Some providers require additional information that is generated on the storage provider account page.
For example, saving an Amazon S3 credential on TrueNAS could require logging in to the S3 account and generating an access key pair on the *Security Credentials > Access Keys* page.

To save cloud storage provider credentials, go to **System > Cloud Credentials** and click *Add*.

![SystemCloudCredentialsAddS3](/images/CORE/12.0/SystemCloudCredentialsAddS3.png "Adding new Cloud Credential: S3")

Enter a credential *Name* and choose a *Provider*.
The rest of the options change according to the chosen *Provider*:

{{< tabs "Cloud Credentials Authentication Providers" >}}
{{< tab "Amazon S3" >}}

| Name | Description |
|------|-------------|
| Access Key ID | Amazon Web Services Key ID. This is found on [Amazon AWS](https://aws.amazon.com/) by going through **My account > Security Credentials > Access Keys** (Access Key ID and Secret Access Key). Must be alphanumeric and between 5 and 20 characters. |
| Secret Access Key | Amazon Web Services password. If the Secret Access Key cannot be found or remembered, go to **My Account > Security Credentials > Access Keys** and create a new key pair. Must be alphanumeric and between 8 and 40 characters. |
| Maximum Upload Ports | Define the maximum number of chunks for a multipart upload. This can be useful if a service does not support the 10,000 chunk AWS S3 specification. |

**Amazon S3 Advanced Options**

| Name | Description |
|------|-------------|
| Endpoint URL | [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html). When using AWS, the endpoint field can be empty to use the default endpoint for the region, and available buckets are automatically fetched. Refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=). |
| Region | [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html). Leave empty to automatically detect the correct public region for the bucket. Entering a private region name allows interacting with Amazon buckets created in that region. For example, enter us-gov-east-1 to discover buckets created in the eastern [AWS GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) region. |
| Disable Endpoint Region | Skip automatic detection of the Endpoint URL region. Set this when configuring a custom Endpoint URL. |
| User Signature Version 2 | Force using [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) to sign API requests. Set this when configuring a custom Endpoint URL. |

{{< /tab >}}
{{< tab "BackBlaze B2" >}}

| Name | Description |
|------|-------------|
| Key ID | Alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key ID. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the application keyID string to this field. |
| Application Key | [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the applicationKey string to this field. |

{{< /tab >}}
{{< tab "Box" >}}

| Name | Description |
|------|-------------|
| Access Token | A User Access Token for [Box](https://developer.box.com/). An [access token](https://developer.box.com/reference) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |

{{< /tab >}}
{{< tab "DropBox" >}}

| Name | Description |
|------|-------------|
| Access Token | Access Token for a Dropbox account. A [token must be generated](https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/) by the [Dropbox account](https://www.dropbox.com/) before adding it here. |

{{< /tab >}}
{{< tab "FTP" >}}

| Name | Description |
|------|-------------|
| Host | FTP Host to connect to. Example: ftp.example.com. |
| Port | FTP Port number. Leave blank to use the default port 21. |
| Username | A username on the FTP Host system. This user must already exist on the FTP Host. |
| Password | Password for the user account. |

{{< /tab >}}
{{< tab "Google Cloud Storage" >}}

| Name | Description |
|------|-------------|
| Preview JSON Service Account Key | Contents of the uploaded Service Account JSON file. |
| Choose File | Upload a Google [Service Account credential file](https://rclone.org/googlecloudstorage/#service-account-support). The file is created with the [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials). |

{{< /tab >}}
{{< tab "Google Drive" >}}

| Name | Description |
|------|-------------|
| Access Token | Token created with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically and must be refreshed. |
| Team Drive ID | Only needed when connecting to a Team Drive. The ID of the top level folder of the Team Drive. |

{{< /tab >}}
{{< tab "HTTP" >}}

| Name | Description |
|------|-------------|
| URL | HTTP host URL. |

{{< /tab >}}
{{< tab "Hubic" >}}

| Name | Description |
|------|-------------|
| Access Token | Access Token [generated by a Hubic account](https://api.hubic.com/sandbox/). |

{{< /tab >}}
{{< tab "Mega" >}}

| Name | Description |
|------|-------------|
| Username | [MEGA](https://mega.nz/) account username. |
| Password | MEGA account password. |

{{< /tab >}}
{{< tab "Microsoft Azure Blob Storage" >}}

| Name | Description |
|------|-------------|
| Account Name | [Microsoft Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account) account name. |
| Account Key | Base64 encoded key for Azure Account |

{{< /tab >}}
{{< tab "Microsoft One Drive" >}}

| Name | Description |
|------|-------------|
| Access Token | Microsoft Onedrive [Access Token](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/authentication). Log in to the Microsoft account to add an access token. |
| Drives List | Drives and IDs registered to the Microsoft account. Selecting a drive also fills the Drive ID field. |
| Drive Account Type | Type of Microsoft acount. Logging in to a Microsoft account automatically chooses the correct account type.  Options: Personal, Business, Document_Library |
| Drive ID | Unique drive identifier. Log in to a Microsoft account and choose a drive from the Drives List drop-down to add a valid ID. |

{{< /tab >}}
{{< tab "OpenStack Swift" >}}

| Name | Description |
|------|-------------|
| User Name | Openstack user name for login. This is the OS_USERNAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| API Key or Password | Openstack API key or password. This is the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Authentication URL | Authentication URL for the server. This is the OS_AUTH_URL from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Auth Version | AuthVersion - optional - set to (1,2,3) if your auth URL has no version ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Authentication Advanced Options |  |
| Tenant Name | This is the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Tenant ID | Tenant ID - optional for v1 auth, this or tenant required otherwise ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Auth Token | Auth Token from alternate authentication - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |

**Advanced Options**

| Name | Description |
|------|-------------|
| Region Name | Region name - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Storage URL | Storage URL - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Endpoint Type | Endpoint type to choose from the service catalogue. Public is recommended, see the [rclone documentation](https://rclone.org/swift/#standard-options). |

{{< /tab >}}
{{< tab "pCloud" >}}

| Name | Description |
|------|-------------|
| Access Token | [pCloud Access Token](https://docs.pcloud.com/methods/intro/authentication.html). These tokens can expire and require extension. |
| Hostname | Enter the hostname to connect to. |

{{< /tab >}}
{{< tab "SFTP" >}}

| Name | Description |
|------|-------------|
| Host | SSH Host to connect to. |
| Port | SSH port number. Leave empty to use the default port 22. |
| Username | SSH Username. |
| Password | Password for the SSH Username account. |
| Private Key ID | Import the private key from an existing SSH keypair or select Generate New to create a new SSH key for this credential. |

{{< /tab >}}
{{< tab "WebDav" >}}

| Name | Description |
|------|-------------|
| URL | URL of the HTTP host to connect to. |
| WebDav Service | Name of the WebDAV site, service, or software being used. |
| Username | WebDAV account username. |
| Password | WebDAV account password. |

{{< /tab >}}
{{< tab "Yandex" >}}

| Name | Description |
|------|-------------|
| Access Token | Yandex [Access Token](https://tech.yandex.com/direct/doc/dg-v4/concepts/auth-token-docpage/). |

{{< /tab >}}
{{< /tabs >}}

Enter the required *Authentication* strings to enable saving the credential.

## Automatic Authentication

Some providers can automatically populate the required *Authentication* strings by logging in to the account.
To automatically configure the credential, click *Login to Provider* and entering your account username and password.

![SystemCloudCredentialsOAuthLogin](/images/CORE/12.0/SystemCloudCredentialsOAuthLogin.png "Cloud Provider OAuth Login")

It is recommended to verify the credential before saving it.
