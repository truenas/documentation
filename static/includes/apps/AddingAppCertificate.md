&NewLine;

{{< expand "Adding an App Certificate" "v" >}}
1. Go to **Credentials > Certificates** to add a self-signed certificate authority (CA) and certificate for the application to use.

2. Click **Add** on the **Certificate Authorities (CA)** widget to open the **Add Certificate Authority** screen.

   a. Enter a name for the CA. For example, *minio*, *syncthing*, etc. 
      Accept the defaults for **Type** and **Profile**, then click **Next**.

   b. Accept the defaults on **Certificate Options** unless you want to set an expiration on the certificate. 
      Enter a new value in **Lifetime** to impose an expiration time, then click **Next**. 

   c. Enter location and organization values for your installation in the **Certificate Subject** fields. 
      Enter the email address you want to receive system notifications.

   d. Enter your system IP address in **Subject Alternate Names**, then click **Next**. 
      When configuring a multi-node multi-disk (MNMD) cluster, enter the system IP addresses for each system in the cluster.

   e. Accept the default values on **Extra Constraints**, then click **Next**.

   f. Review the CA configuration then click **Save**.

3. Click **Add** on the **Certificates** widget to open the **Add Certificate** screen.

   a. Enter a name for the certificate. For example, *minio*, *syncthing*, etc. 
      Select **Internal Certificate** as **Type**, **HTTPS RSA Certificate** in **Profiles**, then click **Next**.

   b. Select the newly-created CA in **Signing Certificate Authority**.
      Accept the rest of the defaults unless you want to set an expiration on the certificate. 
      Enter a new value in **Lifetime** to impose an expiration time, then click **Next**.

   c. Enter location and organization values for your installation in the **Certificate Subject** fields. 
      Enter the email address you want to receive system notifications.

   d. Enter your system IP address in **Subject Alternate Names**, then click **Next**.
      When configuring an MNMD cluster, enter the system IP addresses for each system in the cluster.

   e. Accept the default values on **Extra Constraints**, then click **Next**.

   f. Review the CA configuration then click **Save**.

4. Download the certificate and install it.
   
   a. Click the download icon on the **Certificates** widget to start the download. 
      If prompted to allow the download, click **Allow**. 
      If prompted to keep, click **Keep** for both the .crt and .key files.
      When complete, open these files in a File Explorer window.

   b. Right-click on the certificate.crt file, click **Open**, then click **Install Certificate** to open the **Certificate Import Wizard**.
   
   ![CertificateOpenCertificateWindow](/images/SCALE/Credentials/CertificateOpenCertificateWindow.png "Open Certificate Window")

   c. Select **Local Machine** on the **Welcome to the Certificate Import Wizard** window. Click **Next**.
   
   ![CertificateImportWizardSelectLocalMachine](/images/SCALE/Credentials/CertificateImportWizardSelectLocalMachine.png "Select Local Machine Install")

     If on a Windows system, allow changes to be made.

   d. Select **Place all certificates in the following store**, then select **Trusted Root Certificate Authorities** and click **OK**. 
   
   ![SelelectCertificateStore](/images/SCALE/Credentials/SelelectCertificateStore.png "Select Trusted Root Certificate Authorities")

   c. Click **Next** then **Finish**.
{{< /expand >}}
