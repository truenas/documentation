---
title: "Deploying TrueCommand on TrueNAS SCALE"
description: "How to deploy the TrueCommand application in TrueNAS SCALE."
tags: ["TrueCommand Docker","SCALE"]
---

A [TrueCommand](https://www.truenas.com/truecommand/) Docker image can be deployed on TrueNAS SCALE.
<!-- markdown-link-check-disable-next-line -->
The SCALE installation will need [Internet access](CORE/Networking/) and a [storage pool](/CORE/Storage/) with at least 20 GiB of space available for the image.

After logging in to SCALE, go to the **Apps** page.
The first time the Apps page opens, you will need to select an existing pool to store any installed Applications.
It is recommended to choose a pool that has enough space available for all the different applications you intend to install and maintain.
Select the desired pool from the drop down and click **Choose**.
![Apps Choose Pool Example](/images/CORE/12.0/AppsChoosePoolExample.png "Apps Choose Pool Example")
This can be changed later by opening the **Settings** drop down and clicking **Choose Pool**.

After selecting a pool, click **Launch Docker Image**.
![Apps Catalog](/images/CORE/12.0/AppsCatalog.png "Apps Catalog")
This opens a wizard to install a custom application from a Docker image repository.

Use lowercase alphanumeric characters for the application name and enter `ixsystems/truecommand` for the *Image Repository*.
Enter `latest` for the *Image Tag*.
![Apps Install True Command Image](/images/CORE/12.0/AppsInstallTrueCommandImage.png "Apps Install True Command Image")

While not required, you can customize the *Container Settings* according to your use case or environment.
![Apps Install True Command Container Settings](/images/CORE/12.0/AppsInstallTrueCommandContainerSettings.png "Apps Install True Command Container Settings")

As before, modifying the *Networking Settings* is not required, but you might need to customize according to your environment.
![Apps Install True Command Networking](/images/CORE/12.0/AppsInstallTrueCommandNetworking.png "Apps Install True Command Networking")

To access the TrueCommand interface after installing the application, add one or two entries to the *Port Forwarding List*.
For HTTP access to TrueCommand, enter `80` for the *Container Port* and `9004` for the *Node Port*.
To include HTTPS access, click the **+** button to add another port forwarding dialog.
In the second form, enter `443` for the *Container Port* and `9005` for the *Node Port*.
![Apps Install True Command Port Forwarding List](/images/CORE/12.0/AppsInstallTrueCommandPortForwardingList.png "Apps Install True Command Port Forwarding List")

You can link additional SCALE storage to this application by adding *Host Path Volumes* entries.
![Apps Install True Command Host Path Volumes](/images/CORE/12.0/AppsInstallTrueCommandHostPathVolumes.png "Apps Install True Command Host Path Volumes")
This is not typically required for TrueCommand.

*Volumes* is for creating additional storage datasets inside the previously selected Applications Pool.
![Apps Install True Command Volumes](/images/CORE/12.0/AppsInstallTrueCommandVolumes.png "Apps Install True Command Volumes")
This is not typically required for TrueCommand.

Review the settings and verify the *Image Repository* is correct.
![Apps Install True Command Volumes](/images/CORE/12.0/AppsInstallTrueCommandVolumes.png "Apps Install True Command Volumes")

Click **Submit** to download and begin deploying TrueCommand.
A new card is added to **Installed Applications** and shows the container deployment status.
![Apps Installed True Command Deploying](/images/CORE/12.0/AppsInstalledTrueCommandDeploying.png "Apps Installed True Command Deploying")

When deployment is complete, the card updates to show TrueCommand is active.
![Apps Installed True Command Active](/images/CORE/12.0/AppsInstalledTrueCommandActive.png "Apps Installed True Command Active")

To access TrueCommand, open a new browser tab and enter the address of your TrueNAS SCALE with `:9004` or `:9005` appended.
Example: *https://www.truenasscale01.ixsystems.com:9005*
The TrueCommand login screen appears and asks to create the new [Administrator account](https://www.truenas.com/docs/truecommand/installupdate/install/#creating-the-administrator-account).
![Apps Installed True Command UI Login](/images/CORE/12.0/AppsInstalledTrueCommandUILogin.png "Apps Installed True Command UI Login")
If the login screen fails to appear, double-check your system networking settings, open networking ports, and if the `9004` or `9005` *Node Port* values are already in use by another application.

For documentation about configuring and using TrueCommand, see the [TrueCommand documentation section](https://www.truenas.com/docs/truecommand/).
