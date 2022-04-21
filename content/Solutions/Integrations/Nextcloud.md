---
title: "Nextcloud"
weight: 26
aliases:
  - /core/solutions/integrations/nextcloud/
---

## Nextcloud Plugin ##

The [Nextcloud](https://nextcloud.com/) plugin is a suite of client-server software for creating and using file hosting services. 

### Plugin Installation ###

{{< tabs "TrueNAS Options" >}}
{{< tab "TrueNAS CORE" >}}
### Plugins Catalog

{{< expand "Before getting started..." "v" >}}
* A [data pool]({{< relref "PoolCreate.md" >}}) must be available for plugin storage.
* The system must be connected to the internet.
* Go to **Network > Interfaces**, edit the intended plugin interface, and set *Disable Hardware Offloading*.
{{< /expand >}}

To see the plugin catalog, go to the **Plugins** screen.
{{< expand "First time in this menu?" "v" >}}
{{< include file="static/includes/CORE/JailsPluginsFirstTime.md.part" markdown="true" >}}
{{< /expand >}}

![PluginsList](/images/CORE/12.0/PluginsList.png "Plugins Catalog")
{{< expand "I don't see anything?" "v" >}}
If the catalog doesn't load:
* Go to **Network > Global Configuration** and confirm the **Default Gateway** and **DNS Servers** addresses are correct.
* Open the **Shell** and `ping` an Internet address. The output confirms the system is connected to the Internet.
{{< /expand >}}

Plugins are organized into two **Collections**:

* [iXsystems](https://www.ixsystems.com/) maintained plugins
* Open Source plugins created and maintained by the TrueNAS community.

By default, the iXsystems-supported plugins are shown.
To view the community-supported plugins, open *Browse a Collection* and select *Community*.

### Basic Install 

Go to **Plugins** select *Nextcloud* and click the *INSTALL* button.

![NextcloudInstall](/images/CORE/12.0/SolutionsIntegrationsNextcloudInstall.png "Nextcloud Install")

For *Plugins / Add* choose a *Jail Name* and click *SAVE*

![NextcloudJailName](/images/CORE/12.0/SolutionsIntegrationsNextcloudJailName.png "Nextcloud Jail Name")

Once Nextcloud has installed successfully, you can then begin to manage your instance of the plugin.  

![NextcloudPostInstall](/images/CORE/12.0/SolutionsIntegrationsNextcloudPostInstall.png "Nextcloud Post Install")

Select *POST INSTALL NOTES* to obtain your *Nextcloud Admin User* and *Nextcloud Admin Password* information.  Select *MANAGE* and you will be directed to the Nextcloud login page within your browser.

![NextcloudLogin](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Login")

Enter the credentials obtained from *POST INSTALL NOTES* and click *Log in*.  You will be directed to the *Nextcloud Hub*.

![NextcloudHub](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Hub")
{{< /tab >}}
{{< tab "TrueNAS SCALE" >}}

### Applications 

{{< expand "Before getting started..." "v" >}}
* A [data pool]({{< relref "SCALE/SCALEUIReference/Storage/Pools/_index.md" >}}) must be available for application storage.
* The system must be connected to the internet.
* Go to **Network > Interfaces**, edit the intended application interface, and set *Disable Hardware Offloading*.
{{< /expand >}}

To see the Applications catalog, go to the **Apps** screen.  Going to the **Apps** screen for the first time prompts to select a location on the system for storing application related data.  
![JailsApplicationStorage](/images/SCALE/SCALEJailAppsStorage.png "Choosing a Storage Pool for Applications")

By default, this location stores all data related to applications, including downloaded applications, data managed by applications, and any application snapshots.

{{< hint warning >}}
 Disconnecting or deleting the pool that stores application data can result in **permanent data loss!** Make sure to back up any critical data or snapshots that are stored in a application before changing the storage configuration.
{{< /hint >}}

To change the applications storage location, click *Settings* on the Applications page and select *Choose Pool* from the dropdown menu.

![AppsList](/images/SCALE/SCALEAppsList.png "Applications List")

{{< expand "I don't see anything?" "v" >}}
If the catalog doesn't load:
* Go to **Network > Global Configuration** and confirm the **Default Gateway** and **DNS Servers** addresses are correct.
* Open the **Shell** and `ping` an Internet address. The output confirms the system is connected to the Internet.
{{< /expand >}}

By default, the iXsystems-supported applications are shown.

### Basic Install 

{{< hint info >}}
**Official Applications**
 
Official containers are pre-configured to only require a name during deployment.
{{< /hint >}}

Go to **Apps** and click the *INSTALL* button.  Enter an *Application Name* and click *Next*.

![SCALENextcloudInstall](/images/SCALE/SCALENextcloudInstall.png "SCALE Nextcloud Install")

For *Nextcloud Configuration* the *Username* defaults to *admin* and *Password* defaults to *changeme*.  It is recommended that you change both of these fields to entries specific to you as the user.  Ensure you employ a password that is both strong and can be remembered.

![SCALENextcloudConfiguration](/images/SCALE/SCALENextcloudConfiguration.png "SCALE Nextcloud Configuration")

For *Storage*, *Scaling/Upgrading Policy* and *Advanced DNS Settings* the defaults can be used for basic installation by clicking *Next* or bypassing and going directly to *Confirm Options*.  To *Confirm Options*, review the information presented and ensure that it is all correct.  Click *Submit*.

![SCALENextcloudConfirmOptions](/images/SCALE/SCALENextcloudConfirmOptions.png "SCALE Nextcloud Confirm Options")

The Nextcloud application will now be present on the *Installed Applications* page.  Select *Portal* and you will be directed to the *Nextcloud* login page within your browser.

![SCALENextcloudLogin](/images/SCALE/SCALENextcloudLogin.png "SCALE Nextcloud Login")

Enter the credentials specified during installation and click *Log in*.  You will be directed to the *Nextcloud Hub*.

![NextcloudHub](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Hub")
{{< /tab >}}
{{< /tabs >}}

Refer to the Nextcloud documentation for details about using the Nextcloud platform:

* [Administrators Manual](https://docs.nextcloud.com/server/latest/admin_manual/)
* [Users Manual](https://docs.nextcloud.com/server/latest/user_manual/en/)
* [Nextcloud Developer Documentation](https://docs.nextcloud.com/server/latest/developer_manual/)
