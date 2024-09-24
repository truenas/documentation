&NewLine;

All TrueNAS apps are assigned default port numbers.
Accept the default port numbers, but if changing port number assignments, enter a number within the range 9000-65535.
Before changing default ports, refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned and available port numbers.

(Optional) To use a certificate, best practice is to create the self-signed certificate before you begin using the app installation wizard.
If you did not create a certificate before starting the installation wizard you can select the default **TrueNAS** certificate and edit the certificate after deploying the application.

{{< include file="/static/includes/apps/AddAppCertificate.md" >}}

Select the certificate created in TrueNAS for the app from the **Certificate** dropdown list.

**Host Network** is selected by default, but it is recommended to disable this as it binds to the host network.
Select to allow auto-discovery to work.
If not selected, enter the network settings for TrueNAS in the web portal for the application.