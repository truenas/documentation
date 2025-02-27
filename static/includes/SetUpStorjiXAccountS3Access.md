&NewLine;

After creating your Storj TrueNAS account, add S3 access credentials.

1. Click **Access Keys** to open the **Access Keys** dashboard, then click **New Access Key**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjAccessManagementScreen.png" alt="Storj Access Keys Screen" id="Storj Access Keys Screen" >}}

   The **New Access** window opens.

2. Enter the name you want to use for this credential.
   Select **S3 Credentials** for access type, then click **Next**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateAccessWindow.png" alt="Storj New Access Key Window" id="Storj New Access Key Window" >}}

3. Select the permissions you want to allow this access key.
   Choose **Full Access** to allow permanent full permissions to all buckets and data then click **Create Access** or select **Advanced** then click **Next** to customize access configuration.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateAccessSelectConfig.png" alt="Storj Access Permissions Window." id="Storj Access Permissions Window." >}}

   {{< hint type=note >}}
   To enable TrueNAS to [create new Storj buckets](#setting-up-the-truecloud-backup-task), set the access configuration to **Full Access**.
   {{< /hint >}}

4. (Optional) If configuring advanced access options:

   a. Select the permissions to allow.
   Choose one or more of **Read**, **Write**, **List**, **Delete**, or choose **All Permissions**.
   Click **Next**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateAccessSelectPermissions.png" alt="Storj Access Select Permissions" id="Storj Access Select Permissions" >}}

   b. Select the buckets to allow access to.
   Click **All Buckets** or click **Select Buckets** and use the **Buckets** dropdown to select one or more bucket(s).
   Click **Next**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateAccessSelectBuckets.png" alt="Storj Access Select Buckets." id="Storj Access Select Buckets." >}}

   c. Select an expiration date if you want to set the duration or length of time to allow this credential to exist.
   You can select a preset period, click **Set Custom Expiration Date** to use the calendar to set the duration, or select **No expiration**.
   Click **Next** to open the **Access Encryption** window.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateAccessSelectDuration.png" alt="Storj Create Access Select Duration" id="Storj Create Access Select Duration" >}}

   d. Review access details and then click **Create Access**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjS3ConfirmDetails.png" alt="Storj Create Access Confirm Details" id="Storj Create Access Confirm Details" >}}

5. Use **Copy All** or **Download All** to obtain the access key, secret key, and endpoint.
   Keep these in a safe place where you can back up the file.

   {{< trueimage src="/images/SCALE/DataProtection/StorjS3CredentialsGenerated.png" alt="Storj S3 Credentials Generated" id="Storj S3 Credentials Generated" >}}

6. Click **Close**.

Enter these keys in the **Authentication** fields in TrueNAS on the **[Cloud Credentials](#adding-storj-cloud-credentials)** screen to complete setting up the cloud credential.

1. Enter the authentication information provided by Storj in the **Access Key ID** and **Secret Access Key** fields.

2. Click **Verify Credentials** and wait for the system to verify the credentials.

   {{< trueimage src="/images/SCALE/Credentials/CloudCredentialsVerified.png" alt="Verify Cloud Credentials" id="Verify Cloud Credentials" >}}

3. Click **Save**.
