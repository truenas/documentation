&NewLine;

TrueNAS includes the ability to install third-party apps in Docker containers that allow users to deploy apps not included in the catalog.
Generally, any container that follows the [Open Container Initiative](https://opencontainers.org/) specifications can be deployed.

To deploy a custom application, go to **Apps** and click **Discover Apps**.
Click **Custom App** to open the **[Install iX App]({{< relref "installcustomappscreens.md #install-ix-app-screen" >}})** screen with a guided installation wizard.
Click <i class="material-icons" aria-hidden="true" title="more_vert">more_vert</i> > **Install via YAML** to open the **[Custom App]({{< relref "installcustomappscreens.md #custom-app-screen" >}})** screen with an advanced YAML editor for deploying apps using Docker Compose.
