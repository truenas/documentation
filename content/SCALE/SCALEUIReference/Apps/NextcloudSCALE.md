---
title: "Nextcloud"
weight: 26
---

## NextCloud Plugin

The [NextCloud](https://nextcloud.com/) plugin is a suite of client-server software for creating and using file hosting services. 

### Plugin Installation

{{< hint info >}}
**Official Applications**
 
Official containers are pre-configured to only require a name during deployment.
{{< /hint >}}

Go to **Apps** and click the **INSTALL* button.  Enter an **Application Name** and click **Next**.

![SCALENextcloudInstall](/images/SCALE/SCALENextcloudInstall.png "SCALE Nextcloud Install")

For **Nextcloud Configuration** the **Username** value defaults to **admin** and the **Password** value defaults to **changeme**.  We recommend that you change both of these fields to entries specific to you as the user.  Ensure you employ a password that is both strong and memorable.

![SCALENextcloudConfiguration](/images/SCALE/SCALENextcloudConfiguration.png "SCALE Nextcloud Configuration")

For the **Storage**, **Scaling/Upgrading Policy** and **Advanced DNS Settings** you can use the defaults for basic installation by clicking **Next** or bypassing and going directly to **Confirm Options**.  To *Confirm Options*, review the information presented and ensure that it is all correct.  Click *Submit*.

![SCALENextcloudConfirmOptions](/images/SCALE/SCALENextcloudConfirmOptions.png "SCALE Nextcloud Confirm Options")

The Nextcloud application is now present on the **Installed Applications** page.  Select **Portal** and you are directed to the **Nextcloud** login page within your browser.

![SCALENextcloudLogin](/images/SCALE/SCALENextcloudLogin.png "SCALE Nextcloud Login")

Enter the credentials specified during installation and click *Log in**.  You are directed to the **Nextcloud Hub**.

![NextcloudHub](/images/CORE/12.0/SolutionsIntegrationsNextcloudLogin.png "Nextcloud Hub")

Refer to the Nextcloud documentation for details about using the Nextcloud platform:

* [Administrators Manual](https://docs.nextcloud.com/server/latest/admin_manual/)
* [Users Manual](https://docs.nextcloud.com/server/latest/user_manual/en/)
* [Nextcloud Developer Documentation](https://docs.nextcloud.com/server/latest/developer_manual/)