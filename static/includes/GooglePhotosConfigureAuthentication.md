&NewLine;

Next, click **OAuth consent screen** on the left menu, select **EXTERNAL**, then click **CREATE**.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPICreateExternal.png" alt="Create External" id="Create External" >}}

Enter a value in **App name** and **User support email**. 

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIAppInformation.png" alt="Enter App Information" id="Enter App Information" >}}

Enter an email address in the **Developer contact information** section, then click **SAVE AND CONTINUE**.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIDeveloperContactInformation.png" alt="Enter Developer Contact Information" id="Enter Developer Contact Information" >}}

Continue to the **Add users** section, enter your email address, then click **ADD**.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIAddTestingUser.png" alt="Add Testing User" id="Add Testing User" >}}

On the **OAuth consent screen**, click **PUBLISH APP** under **Testing** and push the app to production.

{{< trueimage src="/images/SCALE/22.12/GooglePhotosAPIPublish.png" alt="Publish Status" id="Publish Status" >}}

{{< expand "Can I leave the app in testing mode?" "v" >}}
You can leave the app in testing mode, but configured cloud sync tasks fail when your testing app credentials expire after seven days.
{{< /expand >}}
