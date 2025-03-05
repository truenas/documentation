&NewLine;

TrueNAS includes the ability to install third-party apps in Docker containers that allow users to deploy apps not included in the catalog.
Generally, any container that follows the [Open Container Initiative](https://opencontainers.org/) specifications can be deployed.

To deploy a custom application, go to **Apps** and click **Discover Apps**.
Click **Custom App** to open the **[Install iX App]({{< relref "installcustomappscreens.md #install-ix-app-screen" >}})** screen with a guided installation wizard.
Click <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** to open the **[Custom App]({{< relref "installcustomappscreens.md #custom-app-screen" >}})** screen with an advanced YAML editor for deploying apps using Docker Compose.

TrueNAS also allows users to convert already installed apps into custom applications. 
Select the app you wish to convert, and then click the triple dot icon button next to **Edit** to open the menu containing **Update** and **Convert to custom app** options.

{{< trueimage src="/images/SCALE/Apps/ConvertToCustomAppMenu.png" alt="Convert to Custom App Menu" id="Convert to Custom App Menu" >}}

Select **Convert to custom app** from the dropdown list, then select **Confirm** to convert the app. 

{{< trueimage src="/images/SCALE/Apps/ConvertToCustomAppConfirm.png" alt="Convert to Custom App Confirm" id="Convert to Custom App Confirm" >}}

After converting, clicking the **Edit** button within the **Application Info** window opens an **Edit App YAML** window. This gives users the option to enter a custom app configuration.

{{< trueimage src="/images/SCALE/Apps/CustomAppEditWindow.png" alt="Custom App Edit Window" id="Custom App Edit Window" >}}
