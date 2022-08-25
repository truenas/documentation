---
title: "Adding Cloud Credentials"
description: "This article provides basic instructions on how to add backup cloud credentials, and more detialed instructions for some cloud storage providers."
weight: 10
alias:
tags:
 - scalecloud
 - scalecredentials
 - scalewebdav
 - scalenextcloud
 - scales3
---

{{< toc >}}


The **Cloud Credentials** widget on the **Backup Credentials** screen allows users to integrate TrueNAS with cloud storage providers. 

{{< expand "Is this secure?" "v" >}}
To maximize security, TrueNAS encrypts cloud credentials when saving them.
However, this means that to restore any cloud credentials from a TrueNAS configuration file, you must enable *Export Password Secret Seed* when generating that [configuration backup]({{< relref "GeneralSettings.md" >}}).
Remember to protect any downloaded TrueNAS configuration files.
{{< /expand >}}

TrueNAS SCALE supports linking to 18 cloud storage providers. Authentication methods for each provider could differ based on the provider security requirements.
You can add credentials for many of the supported cloud storage providers from the information on the [Cloud Credentials Screens]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/CloudCredentialScreens.md" >}}).
This article provides instructions for the more involved providers.

## Before You Begin
We recommend users open another browser tab to open and log into the cloud storage provider account you intend to link with TrueNAS.

Some providers require additional information that they generate on the storage provider account page.
For example, saving an Amazon S3 credential on TrueNAS could require logging in to the S3 account and generating an access key pair found on the **Security Credentials > Access Keys** page.

Have the whatever authentication information your cloud storage provider requires ready to make the process easier. Authentication information could include but are not limited to user credentials, access tokens, and access and security keys.

## Adding Cloud Credentials
To set up a cloud credential, go to **Credentials > Backup Credentials** and click **Add** in the **Cloud Credentials** widget.

![CloudCredentialsAdd](/images/SCALE/22.02/CloudCredentialsAdd.png "Add Cloud Credential")

1. Enter a credential name.

2. Select the cloud service from the **Provider** dropdown list. The provider required authentication option settings display.
   
   For details on each provider authentication settings see [Cloud Credentials Screens]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/CloudCredentialScreens.md" >}}).

3. Click **Verify Credentials** to test the entered credentials and verify they work.

4. Click **Save**.

### Adding Amazon S3 Cloud Credentials
If adding an Amazon S3 cloud credential, you can use the default authentication settings or use advanced settings if you want to include endpoint settings.
{{< expand "Click here for more information" "v" >}}
After entering a name and leaving **Amazon S3** as the **Provider** setting:

1. Open a web browser tab open with [Amazon AWS](https://aws.amazon.com/) open.

2. Navigated to **My account > Security Credentials > Access Keys** to obtain the Amazon S3 secret access key ID.
   Access keys are alphanumeric and between 5 and 20 characters.

   If you cannot find or remember the secret access key, go to **My Account > Security Credentials > Access Keys** and create a new key pair.

3. Enter or copy/paste the access key into **Access Key ID**. 

4. Enter or copy/paste the Amazon Web Services alphanumeric password that is between 8 and 40 characters into **Secret Access Key** 

5. (Optional) Enter a value to define the maximum number of chunks for a multipart upload in **Maximum Upload Ports**. 
   Setting a maximum is necessary if a service does not support the 10,000 chunk AWS S3 specification. 
   
6. (Optional) Select **Advanced Settings** to display the endpoint settings.

   a. Enter the [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html) in **Endpoint URL**.
      
      To use the default endpoint for the region and automatically fetch available buckets leave this field blank. 
      For more information refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=).

   b. Enter an [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) in **Region**. 
      
      To detect the correct public region for the selected bucket leave the field blank. 
      Entering a private region name allows interacting with Amazon buckets created in that region.

   c. (Optional) Configure a custom endpoint URL. Select **Disable Endpoint Region**. 

   d. (Optional) Select **User Signature Version 2** to force using signature version 2 with the custom endpoint URL.       
      For more information on using this to sign API requests see [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html).

7. Click **Verify Credentials** to check your credentials for any issues. 

8. Click **Save**
{{< /expand >}}

### Adding Cloud Credentials that  Authenticate with OAuth
Cloud storage providers using OAuth as an authentication method are Box, Dropbox, Google Drive, Google Photo, pCloud and Yandex.
{{< expand "Click here for more information" "v" >}}
After logging into the provider with the OAuth credentials, the provider provides the access token.
Google Drive and pCloud use one more setting to authenticate credentials.

1. Enter the name and select the cloud storage provider from the **Provider** dropdown list.

2. Enter the provider account email in **OAuth Client ID** and the password for that user account in **OAuth Client Secret**.

3. Click **Log In To Provider**. The **Authentication** window opens. Click **Proceed** to open the OAuth credential account sign in window.

   Yandex displays a cookies message you must accept before you can enter credentials.

   Enter the provider account user name and password to verify the credentials.

4. (Optional) Enter the value for any additional authentication method. 
   For pCloud, enter the pCloud host name for the host you connect to in **Hostname**. 
   For Google Drive when connecting to **Team Drive**, enter the Google Drive top-level folder ID.

5. If not populated by the provider after OAuth authentication, enter the access token from the provider. Obtaining the access token varies by provider.
   
   | Provider | Access Token |
   |----------|--------------|
   | Box | For more information the User Access Token for Box [click here](https://developer.box.com/). An [access token](https://developer.box.com/reference/) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |
   | Dropbox | Create an access [token](https://dropbox.tech/developers/generate-an-access-token-for-your-own-account) from the [Dropbox account](https://www.dropbox.com/). |
   | Google Drive | Create the token with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically, so you must refresh them. |
   | Google Photo | does not used an access token. |
   | pCloud | Create the pCloud Access Token [here](https://docs.pcloud.com/methods/intro/authentication.html). These tokens can expire and require an extension. |
   | Yandex | Create the Yandex Access Token [here](https://yandex.com/dev/direct/doc/dg-v4/concepts/auth-token.html). |

6. Click **Verify Credentials** to make sure you can connect with the entered credentials.

7. Click **Save**.
{{< /expand >}}
### Adding BackBlaze B2 Cloud Credentials
BackBlaze B2 uses an application key and key ID to authenticate credentials.
{{< expand "Click here for more information" "v" >}}
From the **Cloud Credentials** widget, click **Add** and then:

1. Enter the name and select **BackBlaze B2** from the **Provider** dropdown list.

2. Log into the BackBlaze account, go to **App Keys** page and add a new application key. Copy and past this into **Key ID**.

3. Generate a new application key on the BackBlaze B2 website. 
   From the **App Keys** page, add a new application key. Copy the application Key string **Application Key**.

4. Click **Verify Credentials**. 

5. Click **Save**.
{{< /expand >}}
### Adding Google Cloud Storage Credentials
Google Cloud Storage uses a service account json file to authenticate credentials. 
{{< expand "Click here for more information" "v" >}}
From the **Cloud Credentials** widget, click **Add** and then:

1. Enter the name and select **Google Cloud Storage** from the **Provider** dropdown list.

2. Go to your Google Cloud Storage website to download this file to the TrueNAS SCALE server. 
   The [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials) creates the file.

3. Upload the json file to **Preview JSON Service Account Key** using **Choose File** to browse the server to locate the downloaded file.  
   For help uploading a Google Service Account credential file [click here](https://rclone.org/googlecloudstorage/#service-account-support).

4. Click **Verify Credentials**.

5. Click **Save**.
{{< /expand >}}

### Adding Microsoft OneDrive Cloud Credentials
Microsoft OneDrive Cloud uses OAuth authentication, an access token, and Drives list, account tpye and IDs to authenticate credentials.
{{< expand "Click here for more information" "v" >}}
From the **Cloud Credentials** widget, click **Add** and then:

1. Enter the name and select **Google Cloud Storage** from the **Provider** dropdown list.

2. Enter your account credentials in **OAuth Client ID** and **OAuth Client Secret**. Click **Log In To Provider**.
   Click **Proceed** on the **Authentication** window, and then enter your user credentials on the sign in screen. 

3. Enter the token generated by the Microsoft OneDrive website through the OAuth authentication in **Access Token** if not populated by this process. 
   For help with the authentication token click Microsoft Onedrive [Access Token](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/authentication).  

4. Enter the Microsoft OneDrive drive information. 

   a. Select the drive(s) from the **Drives List** dropdown options of drives and IDs registered to the Microsoft account. This should populate **Drive ID**.

   b. Select the Microsoft account type from the **Drive Account Type** dropdown options.

   c. Enter the unique drive identifier in **Drive ID** if not already populated by selecting the drive(s) in **Drives List**. 
      If necessary to add valid drive IDs, from your Microsoft account and choose a drive from the **Drives List** dropdown list.

5. Click **Verify Credentials**.

6. Click **Save**.
{{< /expand >}}

### Adding OpenStack Swift Cloud Credentials
OpenStack Swift authentication credentials change based on selections made in **AuthVersion**. All options use the user name, API key or password and authentication URL, and can use the optional endpoint settings.
{{< expand "Click here for more information" "v" >}}
For more information on OpenStack Swift settings see [rclone documentation](https://rclone.org/swift/#standard-options).

From the **Cloud Credentials** widget, click **Add** and then:

1. Enter the name and select **OpenStack Swift** from the **Provider** dropdown list.

2. Enter your OpenStack OS_USERNAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **User Name**. 
   
3. Enter the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **API Key or Password**.

4. (Optional) Select the version from the **AuthVersion**. For more information see [rclone documentation](https://rclone.org/swift/#standard-options).
   If set to **v3** the **Advanced Options** settings display. 

   a. (Optional) Enter the user ID to log into OpenStack. Leave blank to log into most Swift systems. (Optional) Enter the **User Domain**.
   
   b. (Required) Enter the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file) in **Tenant Name**.

   c. Enter the ID in **Tenant ID**. Required for **v2** and **v3**. (Optional) Enter a **Tenant Domain**.

   d. (Optional) Enter the alternative authentication token in **Auth Token**.

5. (Optional) Enter endpoint settings.

   a. Enter a region name in **Region Name**

   b. (Optional) Enter the URL in **Storage URL**. 

   c. (Optional) Select service catalogue option from the **Endpoint Type** dropdown. Options are **Public**, **Internal** and **Admin**. **Public** is recommended.

6. Click **Verify Credentials**.

7. Click **Save**.
{{< /expand >}}

## Using Automatic Authentication

Some providers can automatically populate the required authentication strings by logging in to the account.
To automatically configure the credential, click **Login to Provider** and entering your account user name and password.

![AutomaticAuthenticationSCALE](/images/SCALE/AutomaticAuthenticationSCALE.png "Cloud Automatic Authentication")

We recommend verifying the credential before saving it.

{{< taglist tag="scalecloud" limit="10" >}}

