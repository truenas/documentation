&NewLine;

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget.
The **Cloud Credentials** screen opens with Storj displayed as the default provider in the **Provider** field.

{{< trueimage src="/images/SCALE/Credentials/AddingStorjCloudCredential.png" alt="Adding Storj Cloud Credentials" id="Adding Storj Cloud Credentials" >}}

Enter a descriptive name to identify the credential in the **Name** field.

You can create your Storj iX cloud service account using two methods:

* Go to the [TrueNAS Storj web page](https://www.truenas.com/ix-storj/) and click **Sign Up & Log in - iX-Storj**.
* Go to **Credentials > Backup Credentials** and click **Add**.
   Select **Storj iX** as the **Provider** on the **Cloud Credentials** screen, then click **Sign up for account**.

The [Storj Create your Storj account](https://us1.storj.io/signup?partner=ix-storj-1) web page opens.

{{< hint type=important >}}
You must use this link to create your Storj account to take advantage of the benefits of the Storj iX pricing!
{{< /hint >}}

Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, and click the button at the bottom of the screen.
The Storj main dashboard opens.

{{< trueimage src="/images/SCALE/DataProtection/StorjMainDashboard.png" alt="Storj Main Dashboard" id="Storj Main Dashboard" >}}

After setting up your Storj iX account, set up [Storj S3 access](#setting-up-s3-access) and [create your Storj bucket](#creating-a-truenas-storj-bucket).

The endpoint set in the Storj credential applies to all Cloud Sync Tasks that use that credential.
