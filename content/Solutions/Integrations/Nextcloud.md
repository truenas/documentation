---
title: "Nextcloud"
description: "Guide for deploying Nextcloud in TrueNAS."
weight: 26
aliases:
  - /core/solutions/integrations/nextcloud/
---

## Nextcloud in TrueNAS

[Nextcloud](https://nextcloud.com/) is a suite of client-server software for creating and using file hosting services.

TrueNAS offers one deployment option for setting up Nextcloud, a Linux Debian-based TrueNAS version application available in TrueNAS releases 24.10 and later.
For the Linux Debian-based app instructions, see [Nextcloud](https://apps.truenas.com/catalog/nextcloud/).

TrueNAS offered a FreeBSD-based TrueNAS Nextcloud plugin in releases 13.0 and earlier, and 13.3, but it is no longer available in TrueNAS 13.0 because of changes in FreeBSD, and it is soon to be unavailable in 13.3.
Refer to release notes for more information on upcoming and current changes.

This article provides instructions for the FreeBSD-based Nextcloud plugin.

## Plugin Catalogs

{{< expand "Before You Begin" "v" >}}
Before installing the Nextcloud plugin:
* Create a new or use an existing data pool to use for plugin storage.
* Connect the system to the Internet.
  Go to **Network > Interfaces**, edit the intended plugin interface, and set **Disable Hardware Offloading**.
{{< /expand >}}

To see the plugin catalog, go to the **Plugins** screen.
{{< expand "First time in this menu?" "v" >}}
{{< include file="/static/includes/JailsPluginsFirstTime.md" >}}
{{< /expand >}}

![PluginsList](/images/CORE/Plugins/PluginsList.png "Plugins Catalog")
{{< expand "I do not see anything!" "v" >}}
If the catalog does not load:
* Go to **Network > Global Configuration** and confirm the **Default Gateway** and **DNS Servers** addresses are correct.
* Open the **Shell** and enter the `ping` command and an Internet address. 
The output confirms the system is connected to the Internet.
{{< /expand >}}

TrueNAS organizes plugins into two **Collections**:

* [iXsystems](https://www.ixsystems.com/) maintained plugins
* Open source plugins created and maintained by TrueNAS users.

By default, TrueNAS shows the iXsystems-supported plugins.
To see the community plugins, open **Browse a Collection** and select **Community**.

### Installing a Plugin
You have two plugin installation options:
{{< expand "Basic Install" "v" >}}
Go to **Plugins** and select **Nextcloud**, then click **INSTALL**.

![NextcloudInstall](/images/Solutions/SolutionsIntegrationsNextcloudInstall.png "Nextcloud Install")

Enter a name in **Jail Name** and click **SAVE**.

![NextcloudJailName](/images/Solutions/SolutionsIntegrationsNextcloudJailName.png "Nextcloud Jail Name")

After Nextcloud installs successfully, you can manage your plugin instance.  

![NextcloudPostInstall](/images/Solutions/SolutionsIntegrationsNextcloudPostInstall.png "Nextcloud Post Install")

Click **POST INSTALL NOTES** to obtain your Nextcloud admin user and  Nextcloud admin password information. 
Click **MANAGE** to access the Nextcloud login page within your browser.

![NextcloudLogin](/images/Solutions/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Login")

Enter the credentials from **POST INSTALL NOTES** and click **Log in** to access the Nextcloud Hub.

![NextcloudHub](/images/Solutions/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Hub")
{{< /expand >}}

{{< expand "Static IP Install" "v" >}}
Go to **Plugins** and select **Nextcloud**, then click **INSTALL**.

![NextcloudInstall](/images/Solutions/SolutionsIntegrationsNextcloudInstall.png "Nextcloud Install")

Enter a name in **Jail Name**, then select the **NAT** checkbox to clear it, and then enter an available IP in the **IPv4 Address** field. 
Select an **IPv4 Netmask** (iX recommends 24), then click **SAVE**.

![NextcloudStatic1](/images/Solutions/NextcloudStatic1.png "Nextcloud Static Setup")

After Nextcloud installs, you must add your Nextcloud IP to your Nextcloud jail trusted domains.

Go to **Jails** and expand your Nextcloud jail, then click **> SHELL**.

Enter `ee /usr/local/www/nextcloud/config/config.php` to edit your Nextcloud config file.

Scroll to the `trusted_domains` section and type your Nextcloud IP as a new line item. Use the image below for reference.

![NextcloudTrustedDomain](/images/Solutions/NextcloudTrustedDomain.png "Nextcloud Add Trusted Domain")

Type <kdb>CTRL+C</kdb> to close the editor, then type **exit** to close the config file.

Go back to **Plugins** and expand your Nextcloud instance.

Click **POST INSTALL NOTES** to obtain your Nextcloud admin user and Nextcloud admin password information.
Click **MANAGE** to access the Nextcloud login page within your browser.

![NextcloudLogin](/images/Solutions/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Login")

Enter the credentials from **POST INSTALL NOTES** and click **Log in**.  You are directed to the Nextcloud Hub.
{{< /expand >}}

Refer to the Nextcloud documentation for details about using the Nextcloud platform:

* [Administrators Manual](https://docs.nextcloud.com/server/latest/admin_manual/)
* [Users Manual](https://docs.nextcloud.com/server/latest/user_manual/en/)
* [Nextcloud Developer Documentation](https://docs.nextcloud.com/server/latest/developer_manual/)
