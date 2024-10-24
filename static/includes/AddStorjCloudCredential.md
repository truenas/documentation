&NewLine;

The instructions in this section cover adding the Storj iX account and configuring the cloud service credentials in SCALE and Storj.
The process includes going to Storj to create a new Storj iX account and returning to SCALE to enter the S3 credentials provided by Storj.

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget.
The **Cloud Credentials** screen opens with Storj displayed as the default provider in the **Provider** field.

{{< trueimage src="/images/SCALE/Credentials/AddingStorjCloudCredential.png" alt="Adding Storj Cloud Credentials" id="Adding Storj Cloud Credentials" >}}

1. Enter a descriptive name to identify the credential in the **Name** field.

2. Click **Signup for account** to create your Storj iX account. This opens the Storj new account screen for TrueNAS.

   {{< hint type=important >}}
   You must use this link to create your Storj account to take advantage of the benefits of the Storj iX pricing!
   {{< /hint >}}

   After setting up your Storj iX account, [create your Storj bucket](#adding-the-storj-truenas-bucket) and the [Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

3. Enter the authentication information provided by Storj in the **Access Key ID** and **Secret Access Key** fields.

4. Click **Verify Credentials** and wait for the system to verify the credentials.

   {{< trueimage src="/images/SCALE/Credentials/CloudCredentialsVerified.png" alt="Verify Cloud Credentials" id="Verify Cloud Credentials" >}}

5. Click **Save**.
