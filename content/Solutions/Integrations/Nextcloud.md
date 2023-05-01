---
title: "Nextcloud"
weight: 26
aliases:
  - /core/solutions/integrations/nextcloud/
---

## Nextcloud Plugin

The [Nextcloud](https://nextcloud.com/) plugin is a suite of client-server software for creating and using file hosting services. 

### Plugins Catalog

{{< expand "Before getting started..." "v" >}}
* You must have a [data pool]({{< relref "CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}}) available for plugin storage.
* You must connect the system to the internet.
Go to **Network > Interfaces**, edit the intended plugin interface, and set **Disable Hardware Offloading**.
{{< /expand >}}

To see the plugin catalog, go to the **Plugins** screen.
{{< expand "First time in this menu?" "v" >}}
{{< include file="content/_includes/JailsPluginsFirstTime.md" type="page" >}}
{{< /expand >}}

![PluginsList](/images/CORE/12.0/PluginsList.png "Plugins Catalog")
{{< expand "I don't see anything!" "v" >}}
If the catalog doesn't load:
* Go to **Network > Global Configuration** and confirm the **Default Gateway** and **DNS Servers** addresses are correct.
* Open the **Shell** and `ping` an Internet address. 
The output confirms the system is connected to the Internet.
{{< /expand >}}

TrueNAS organizes plugins into two **Collections**:

* [iXsystems](https://www.ixsystems.com/) maintained plugins
* Open source plugins created and maintained by TrueNAS users.

By default, TrueNAS shows the iXsystems-supported plugins.
To see the community plugins, open **Browse a Collection** and select **Community**.

### Installation

{{< tabs "Install Types" >}}
{{< tab "Basic Install" >}}
Go to **Plugins** and select **Nextcloud**, then click **INSTALL**.

![NextcloudInstall](/images/CORE/12.0/SolutionsIntegrationsNextcloudInstall.png "Nextcloud Install")

Type a **Jail Name** and click **SAVE**.

![NextcloudJailName](/images/CORE/12.0/SolutionsIntegrationsNextcloudJailName.png "Nextcloud Jail Name")

After Nextcloud installs successfully, you can manage your instance of the plugin.  

![NextcloudPostInstall](/images/CORE/12.0/SolutionsIntegrationsNextcloudPostInstall.png "Nextcloud Post Install")

Click **POST INSTALL NOTES** to obtain your Nextcloud admin user and  Nextcloud admin password information. 
Click **MANAGE** to access the Nextcloud login page within your browser.

![NextcloudLogin](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Login")

Enter the credentials from **POST INSTALL NOTES** and click **Log in** to access the Nextcloud Hub.

![NextcloudHub](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Hub")
{{< /tab >}}

{{< tab "Static IP Install" >}}
Go to **Plugins** and select **Nextcloud**, then click **INSTALL**.

![NextcloudInstall](/images/CORE/12.0/SolutionsIntegrationsNextcloudInstall.png "Nextcloud Install")

Type a **Jail Name**, then disable the **NAT** checkbox and enter an available IP in the **IPv4 Address** field. 
Select an **IPv4 Netmask** (iX recommends 24), then click **SAVE**.

![NextcloudStatic1](/images/CORE/NextcloudStatic1.png "Nextcloud Static Setup")

After Nextcloud installs, you must add your Nextcloud IP to your Nextcloud jail trusted domains.

Go to **Jails** and expand your Nextcloud jail, then click **> SHELL**.

Enter `ee /usr/local/www/nextcloud/config/config.php` to edit your Nextcloud config file.

Scroll to the `trusted_domains` section and type your Nextcloud IP as a new line item. Use the image below for reference.

![NextcloudTrustedDomain](/images/CORE/NextcloudTrustedDomain.png "Nextcloud Add Trusted Domain")

Type <kdb>CTRL+C</kdb> to close the editor, then type **exit** to close the config file.

Go back to **Plugins** and expand your Nextcloud instance. 
Click **POST INSTALL NOTES** to obtain your Nextcloud admin user and Nextcloud admin password information. Click **MANAGE** to access the Nextcloud login page within your browser.

![NextcloudLogin](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Login")

Enter the credentials from **POST INSTALL NOTES** and click **Log in**.  You are directed to the Nextcloud Hub.
{{< /tab >}}
{{< /tabs >}}

Refer to the Nextcloud documentation for details about using the Nextcloud platform:

* [Administrators Manual](https://docs.nextcloud.com/server/latest/admin_manual/)
* [Users Manual](https://docs.nextcloud.com/server/latest/user_manual/en/)
* [Nextcloud Developer Documentation](https://docs.nextcloud.com/server/latest/developer_manual/)
