&NewLine;

{{< hint type=info title="Storj Bucket Compatibility" >}}
Not all Storj buckets are TrueNAS compatible.
To create a TrueNAS compatible bucket, you must either log in to Storj using the [ix Storj affiliate link](https://us1.storj.io/signup?partner=ix-storj-1) before creating the bucket in the Storj UI, or create the bucket using the **Add New** option in the TrueNAS UI.
{{< /hint >}}

To create a Storj bucket from the TrueNAS UI:

1. Go to **Data Protection**.
   Click **Add** on either the **TrueCloud Backup Tasks** or **Cloud Sync Tasks** widget.
   This can be done as part of setting up a task.

2a. If using the [Add TrueCloud Backup Task]() screen, 

2b. If using the [Cloud Sync Task Wizard](), 







2. Enter a name in **Bucket Name** using lowercase alphanumeric characters, with no spaces between characters, then click **Create Bucket**.
   Your new bucket displays on the **Browse Buckets** screen.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateABucketScreen.png" alt="Storj New Bucket" id="Storj New Bucket" >}}

3. Click on the new bucket to open the **Enter passphrase** window and configure encryption.
   Enter a secure passphrase in **Encryption Passphrase**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjEncryptYourBucketScreen.png" alt="Storj Enter Passphrase" id="Storj Enter Passphrase" >}}

4. Click **Continue** to complete the process and open the **Browse Files** screen with your new bucket.

   {{< trueimage src="/images/SCALE/DataProtection/StorjBucketAdded.png" alt="Storj Browse Files" id="Storj Browse Files" >}}