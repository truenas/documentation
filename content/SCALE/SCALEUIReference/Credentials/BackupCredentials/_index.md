---
title: "Backup Credentials"
geekdocCollapseSection: true
weight: 40
aliases:
  - /scale/credentials/backupcredentials/cloudcredentialsscale/
  - /scale/credentials/backupcredentials/sshconnections/
  - /scale/credentials/backupcredentials/sshkeypairsscale/
---

The **Backup Credentials** section lets users integrate TrueNAS with Cloud Storage providers and set up SSH Connections and Keypairs.

![BackupCredentialsSCALE](/images/SCALE/BackupCredentialsSCALE.png "Backup Credentials Screen")

{{< tabs "Credential Types" >}}
{{< tab "Cloud Credentials" >}}
The *Cloud Credentials* window allows users to integrate TrueNAS with Cloud Storage providers. 

{{< expand "Is this secure?" "v" >}}
To maximize security, TrueNAS encrypts cloud credentials when saving them.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable *Export Password Secret Seed* when generating that [configuration backup]({{< relref "GeneralSettings.md" >}}).
Remember to protect any downloaded TrueNAS configuration files.
{{< /expand >}}

We recommend users open another browser tab open and log in to the Cloud Storage Provider account you intend to link with TrueNAS.
Some providers require additional information that they generate on the storage provider account page.
For example, saving an Amazon S3 credential on TrueNAS could require logging in to the S3 account and generating an access key pair on the *Security Credentials > Access Keys* page.

To set up a Cloud Credential, go to **Credentials > Backup Credentials** and click *Add* in the *Cloud Credentials* window.

![CloudCredentialsSCALE](/images/SCALE/CloudCredentialsSCALE.png "Cloud Credentials Form")

Enter a credential *Name* and choose a *Provider*. The rest of the options change according to the chosen *Provider*:

{{< expand "Amazon S3" "v" >}}
Dolor sit, sumo unique ...
| Name | Description |
|------|-------------|
| Access Key ID | Amazon Web Services Key ID. This is found on [Amazon AWS](https://aws.amazon.com/) by going through **My account > Security Credentials > Access Keys** (Access Key ID and Secret Access Key). Must be alphanumeric and between 5 and 20 characters. |
| Secret Access Key | Amazon Web Services password. If the Secret Access Key cannot be found or remembered, go to **My Account > Security Credentials > Access Keys** and create a new key pair. Must be alphanumeric and between 8 and 40 characters. |
| Maximum Upload Ports | Define the maximum number of chunks for a multipart upload. Setting a maximum is necessary if a service does not support the 10,000 chunk AWS S3 specification. |

**Amazon S3 Advanced Options**

| Name | Description |
|------|-------------|
| Endpoint URL | [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html). When using AWS, the endpoint field can be empty to use the default endpoint for the region and automatically fetch available buckets. Refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=). |
| Region | [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html). Leave empty to detect the bucket's correct public region. Entering a private region name allows interacting with Amazon buckets created in that region. For example, enter us-gov-east-1 to discover buckets created in the eastern [AWS GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) region. |
| Disable Endpoint Region | Skip automatic detection of the Endpoint URL region. Set this when configuring a custom Endpoint URL. |
| User Signature Version 2 | Force using [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) to sign API requests. Set this when configuring a custom Endpoint URL. |
{{< /expand >}}

{{< expand "BackBlaze B2" "v" >}}
| Name | Description |
|------|-------------|
| Key ID | Alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key ID. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the application keyID string to this field. |
| Application Key | [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the *applicationKey* string to this field. |
{{< /expand >}}

{{< expand "Box" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | A User Access Token for [Box](https://developer.box.com/). An [access token](https://developer.box.com/reference/) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |
{{< /expand >}}

{{< expand "DropBox" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | Access Token for a Dropbox account. You must create a [token](https://dropbox.tech/developers/generate-an-access-token-for-your-own-account) from the [Dropbox account](https://www.dropbox.com/) before adding it here. |
{{< /expand >}}

{{< expand "FTP" "v" >}}
| Name | Description |
|------|-------------|
| Host | FTP Host to connect. Example: ftp.example.com. |
| Port | FTP Port number. Leave blank to use the default port 21. |
| Username | A username on the FTP Host system. This user must already exist on the FTP Host. |
| Password | Password for the user account. |
{{< /expand >}}

{{< expand "Google Cloud Storage" "v" >}}
| Name | Description |
|------|-------------|
| Preview JSON Service Account Key | Contents of the uploaded Service Account JSON file. |
| Choose File | Upload a Google [Service Account credential file](https://rclone.org/googlecloudstorage/#service-account-support). The [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials) creates the file. |
{{< /expand >}}

{{< expand "Google Drive" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | Token created with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically, so you must refresh them. |
| Team Drive ID | Only needed when connecting to a Team Drive. The Team Drive's top-level folder ID. |
{{< /expand >}}

{{< expand "Google Photos" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
{{< /expand >}}

{{< expand "HTTP" "v" >}}
| Name | Description |
|------|-------------|
| URL | HTTP host URL. |
{{< /expand >}}

{{< expand "Hubic" "v" >}}
| Name | Description |
|------|-------------|
| Access Token | Access Token [generated by a Hubic account](https://api.hubic.com/sandbox/). |
{{< /expand >}}

{{< expand "Mega" "v" >}}
| Name | Description |
|------|-------------|
| Username | [MEGA](https://mega.nz/) account username. |
| Password | MEGA account password. |
{{< /expand >}}

{{< expand "Microsoft Azure Blob Storage" "v" >}}
| Name | Description |
|------|-------------|
| Account Name | [Microsoft Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account) account name. |
| Account Key | Base64 encoded key for Azure Account. |
{{< /expand >}}

{{< expand "Microsoft One Drive" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | Microsoft Onedrive [Access Token](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/authentication). Log in to the Microsoft account to add an access token. |
| Drives List | Drives and IDs registered to the Microsoft account. Selecting a drive also fills the Drive ID field. |
| Drive Account Type | Type of Microsoft account. Logging in to a Microsoft account selects the correct account type.  Options: Personal, Business, Document_Library |
| Drive ID | Unique drive identifier. Log in to a Microsoft account and choose a drive from the Drives List drop-down to add a valid ID. |
{{< /expand >}}

{{< expand "OpenStack Swift" "v" >}}
| Name | Description |
|------|-------------|
| User Name | Openstack user name (OS_USERNAME) from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| API Key or Password | Openstack API key or password. This is the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Authentication URL | Authentication URL for the server. This is the OS_AUTH_URL from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Auth Version | AuthVersion - optional - set to (1,2,3) if your auth URL has no version ([rclone documentation](https://rclone.org/swift/#standard-options)). |

**Advanced Options**

| Name | Description |
|------|-------------|
| Tenant Name | This is the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Tenant ID | Tenant ID - optional for v1 auth, this or tenant required otherwise ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Auth Token | Auth Token from alternate authentication - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |

**Endpoint Advanced Options**

| Name | Description |
|------|-------------|
| Region Name | Region name - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Storage URL | Storage URL - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Endpoint Type | Endpoint type to choose from the service catalogue. Public is recommended, see the [rclone documentation](https://rclone.org/swift/#standard-options). |
{{< /expand >}}

{{< expand "pCloud" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | [pCloud Access Token](https://docs.pcloud.com/methods/intro/authentication.html). These tokens can expire and require an extension. |
| Hostname | Enter the hostname to connect to. |
{{< /expand >}}

{{< expand "SFTP" "v" >}}
| Name | Description |
|------|-------------|
| Host | SSH Host to connect to. |
| Port | SSH port number. Leave empty to use the default port 22. |
| Username | SSH Username. |
| Password | Password for the SSH Username account. |
| Private Key ID | Import the private key from an existing SSH keypair or select Generate New to create a new SSH key for this credential. |
{{< /expand >}}

{{< expand "WebDav" "v" >}}
| Name | Description |
|------|-------------|
| URL | URL of the HTTP host to connect to. |
| WebDav Service | Name of the WebDAV site, service, or software being used. |
| Username | WebDAV account username. |
| Password | WebDAV account password. |
{{< /expand >}}

{{< expand "Yandex" "v" >}}
| Name | Description |
|------|-------------|
| OAuth Client ID | The public identifier for the cloud application. |
| OAuth Client Secret | The secret phrase known only to the cloud application and the authorization server. |
| Access Token | Yandex [Access Token](https://yandex.com/dev/direct/doc/dg-v4/concepts/auth-token.html). |
{{< /expand >}}

Enter the required *Authentication* strings to enable saving the credential.

## Automatic Authentication

Some providers can automatically populate the required *Authentication* strings by logging in to the account.
To automatically configure the credential, click *Login to Provider* and entering your account username and password.

![AutomaticAuthenticationSCALE](/images/SCALE/AutomaticAuthenticationSCALE.png "Cloud Automatic Authentication")

We recommend verifying the credential before saving it.
{{< /tab >}}

{{< tab "SSH Connections" >}}
The *SSH Connections* window in the **Backup Credentials** screen allows users establish [Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) connections.

To begin setting up a SSH Connection, navigate to **Credentials > Backup Credentials** and click the *Add* button in the *SSH Connections* window.

## Create a Connection

{{< expand "Semi-Automatic" "v" >}}
Semi-automatic simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without logging in to that system to transfer SSH keys.
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
You must configure the remote system to allow root access with SSH.
You can generate the keypair as part of the semiautomatic configuration or a manually created one in **Backup Credentials**.

![SSHConnectionsSCALE](/images/SCALE/SSHConnectionsSCALE.png "SSH Connections Form")

{{< include file="static/includes/Reference/SystemSSHConnectionsAddSemiAutoFields.md.part" markdown="true" >}}

Be sure to use a valid URL scheme for the remote TrueNAS URL.
Leave the username as *root* and enter the account password for the remote TrueNAS system.
You can import the private key from a previously created SSH keypair or create one with a new SSH keypair.

Saving the new configuration automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
{{< /expand >}}
{{< expand "Manual" "v" >}}
To manually set up an SSH connection, you must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.

### Adding a Public SSH Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **Credentials > Backup Credentials**. Click the <i class="material-icons" aria-hidden="true">more_vert</i>.
Open the keypair for the SSH connection and copy the text of the public SSH key or download the public key as a text file.

Log in to the TrueNAS system you want to register the public key on and go to **Credentials > Local Users**.
Edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.
![AccountsUsersRootSSHKeySCALE](/images/SCALE/AccountsUsersRootSSHKeySCALE.png "Accounts Users Root SSH Key")

Start by generating a new SSH keypair in **Credentials > Backup Credentials**.
Copy or download the value for the public key.
Add the public key to the remote NAS.
If the remote NAS is not a TrueNAS system, please see the documentation for that system for instructions on adding a public SSH key.

### Manually Configuring the SSH Connection on the Local TrueNAS

Log back in to the local TrueNAS system. Go to **Credentials > Backup Credentials** and add a new SSH connection.
Change the setup method to *Manual*.

![SSHConnectionsManualSCALE](/images/SCALE/SSHConnectionsManualSCALE.png "SSH Connections: Manual Options")

{{< include file="static/includes/Reference/SystemSSHConnectionsAddManualFields.md.part" markdown="true" >}}

Select the private key from the SSH keypair that you used to transfer the public key on the remote NAS.
{{< /expand >}}

{{< tab "SSH Keypairs" >}}
TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs in **Credentials > Backup Credentials**.
Keypairs are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**.
TrueNAS does not support encrypted keypairs or keypairs with passphrases.

TrueNAS automatically generates keypairs as needed when creating new **SSH Connections** or **Replication** tasks.
To manually create a new keypair, go to **System > SSH Keypairs**, click *ADD*, and give the keypair a unique *Name*.

## Creating an SSH Keypair

![AccountsUsersRootSSHKeySCALE](/images/SCALE/AccountsUsersRootSSHKeySCALE.png "SSH Keypairs Form")

Clicking *Generate Keypair* adds values to the public and private key fields.
Copy these strings or download them into text files for later use.
{{< /tab >}}
{{< /tabs >}}
