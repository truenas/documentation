&NewLine;

You can create your Storj iX cloud service account using two methods:

* Go to the [TrueNAS Storj web page](https://www.truenas.com/ix-storj/) and click **Sign Up & Log in - iX-Storj**.
* Go to **Credentials > Backup Credentials** and click **Add**.
  Select **Storj iX** as the **Provider** on the **Cloud Credentials** screen, then click **Sign up for account**.

The [Storj Create your Storj account](https://us1.storj.io/signup?partner=ix-storj-1) web page opens.
Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, and click the button at the bottom of the screen.
The Storj main dashboard opens.

{{< trueimage src="/images/SCALE/DataProtection/StorjMainDashboard.png" alt="Storj Main Dashboard" id="Storj Main Dashboard" >}}

Now you can add the storage bucket you want to use in your Storj iX account and TrueNAS TrueCloud Backup task.

From the Storj main dashboard:

1. Click **Browse** on the navigation panel on the left side of the screen to open the **Browse Buckets** screen.
   Click **New Bucket** to open the **New Bucket** window.

   {{< trueimage src="/images/SCALE/DataProtection/StorjAddBucket.png" alt="Storj Browse Buckets Screen" id="Storj Browse Buckets Screen" >}}

2. Enter a name in **Bucket Name** using lowercase alphanumeric characters, with no spaces between characters, then click **Create Bucket**.
   Your new bucket displays on the **Browse Buckets** screen.

   {{< trueimage src="/images/SCALE/DataProtection/StorjCreateABucketScreen.png" alt="Storj New Bucket" id="Storj New Bucket" >}}

3. Click on the new bucket to open the **Enter passphrase** window and configure encryption.
   Enter a secure passphrase in **Encryption Passphrase**.

   {{< trueimage src="/images/SCALE/DataProtection/StorjEncryptYourBucketScreen.png" alt="Storj Enter Passphrase" id="Storj Enter Passphrase" >}}

4. Click **Continue** to complete the process and open the **Browse Files** screen with your new bucket.

   {{< trueimage src="/images/SCALE/DataProtection/StorjBucketAdded.png" alt="Storj Browse Files" id="Storj Browse Files" >}}