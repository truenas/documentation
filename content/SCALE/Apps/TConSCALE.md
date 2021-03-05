---
title: "Deploying TrueCommand on TrueNAS SCALE"
weight: 20
---

A [TrueCommand](https://www.truenas.com/truecommand/) Docker image can be deployed on TrueNAS SCALE.
The SCALE installation needs internet access and a storage pool with at least *20 GiB* of space available for the image.

After logging in to SCALE, go to the **Apps** page.
The first time the Apps page opens, select an existing pool to store any installed Applications.
It is recommended to choose a pool that has enough space available for all the different applications you intend to install and maintain.
Select the desired pool from the drop down and click **Choose**.

![AppsChoosePool](/images/SCALE/AppsChoosePool.png "Choosing a Pool for Apps")

This can be changed later by opening the *Settings* drop down and clicking *Choose Pool*.

After selecting a pool, click *Launch Docker Image*.

![AppsLaunchDockerImage](/images/SCALE/AppsLaunchDockerImage.png "Launch Docker Image")

This opens a wizard to install a custom application from a Docker image repository.

Use lowercase alphanumeric characters for the application name and enter `ixsystems/truecommand` for the *Image Repository*.
Enter `latest` for the *Image Tag*.

![AppsTrueCommandImageAndPolicies](/images/SCALE/AppsTrueCommandImageAndPolicies.png "TrueCommand Image and Policies")

While not required, you can customize the *Container Settings* according to your use case or environment.

![AppsTrueCommandContainerSettings](/images/SCALE/AppsTrueCommandContainerSettings.png "TrueCommand Container Settings")

As before, modifying the *Networking Settings* is not required, but you might need to customize according to your environment.

![AppsTrueCommandNetworking](/images/SCALE/AppsTrueCommandNetworking.png "TrueCommand Networking")

To access the TrueCommand interface after installing the application, add one or two entries to the *Port Forwarding List*.
For HTTP access to TrueCommand, enter *80* for the *Container Port* and *9004* for the *Node Port*.

To include HTTPS access, click the **+** button to add another port forwarding dialog.
In the second form, enter *443* for the *Container Port* and *9005* for the *Node Port*.

![AppsTrueCommandPortForwardingList](/images/SCALE/AppsTrueCommandPortForwardingList.png "TrueCommand Port Forwarding List")

You can link additional SCALE storage to this application by adding *Host Path Volumes* entries.

![AppsTrueCommandHostPathVolumes](/images/SCALE/AppsTrueCommandHostPathVolumes.png "TrueCommand Host Path Volumes")

This is not typically required for TrueCommand.

*Volumes* is for creating additional storage datasets inside the previously selected Applications Pool.

![AppsTrueCommandVolumes](/images/SCALE/AppsTrueCommandVolumes.png "TrueCommand Volumes")

This is not typically required for TrueCommand.

Review the settings and verify the *Image Repository* is correct.

![AppsTrueCommandSummary](/images/SCALE/AppsTrueCommandSummary.png "TrueCommand Summary")

Click **Submit** to download and begin deploying TrueCommand.
A new card is added to **Installed Applications** and shows the container deployment status.

![AppsTrueCommandDeploying](/images/SCALE/AppsTrueCommandDeploying.png "TrueCommand Deploying")

When deployment is complete, the card updates to show TrueCommand is active.

![AppsTrueCommandActive](/images/SCALE/AppsTrueCommandActive.png "TrueCommand Active")

To access TrueCommand, open a new browser tab and enter the address of your TrueNAS SCALE with `:9004` or `:9005` appended.
Example: `https://www.truenasscale01.ixsystems.com:9005`
The TrueCommand login screen appears and asks to create the new [Administrator account](https://www.truenas.com/docs/truecommand/installupdate/install/#creating-the-administrator-account).

![AppsTrueCommandUILogin](/images/SCALE/AppsTrueCommandUILogin.png "TrueCommand UI Login")

If the login screen fails to appear, double-check your system networking settings, open networking ports, and if the `9004` or `9005` *Node Port* values are already in use by another application.

For more details about TrueCommand, see the [TrueCommand section](/TrueCommand/).
