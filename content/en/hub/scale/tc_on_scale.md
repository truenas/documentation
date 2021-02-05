---
title: "Deploying TrueCommand on TrueNAS SCALE"
description: "How to deploy the TrueCommand application in TrueNAS SCALE."
tags: ["TrueCommand Docker","SCALE"]
---

A [TrueCommand](https://www.truenas.com/truecommand/) Docker image can be deployed on TrueNAS SCALE.
The SCALE installation will need [Internet access](/hub/initial-setup/networking/) and a [storage pool](https://www.truenas.com/docs/hub/initial-setup/storage/) with at least 20 GiB of space available for the image.

After logging in to SCALE, go to the **Apps** page.
The first time the Apps page opens, you will need to select an existing pool to store any installed Applications.
It is recommended to choose a pool that has enough space available for all the different applications you intend to install and maintain.
Select the desired pool from the drop down and click **Choose**.
<img src="/images/SCALE-TCAp2.png" width='700px'><br>
This can be changed later by opening the **Settings** drop down and clicking **Choose Pool**.

After selecting a pool, click **Launch Docker Image**.
<img src="/images/SCALE-TCAp3.png" width='700px'><br>
This opens a wizard to install a custom application from a Docker image repository.

Use lowercase alphanumeric characters for the application name and enter `ixsystems/truecommand` for the *Image Repository*.
Enter `latest` for the *Image Tag*.
<img src="/images/SCALE-TCAp4.png" width='700px'><br>

While not required, you can customize the *Container Settings* according to your use case or environment.
<img src="/images/SCALE-TCAp5.png" width='700px'><br>

As before, modifying the *Networking Settings* is not required, but you might need to customize according to your environment.
<img src="/images/SCALE-TCAp6.png" width='700px'><br>

To access the TrueCommand interface after installing the application, add one or two entries to the *Port Forwarding List*.
For HTTP access to TrueCommand, enter `80` for the *Container Port* and `9004` for the *Node Port*.
To include HTTPS access, click the **+** button to add another port forwarding dialog.
In the second form, enter `443` for the *Container Port* and `9005` for the *Node Port*.
<img src="/images/SCALE-TCAp7.png" width='700px'><br>

You can link additional SCALE storage to this application by adding *Host Path Volumes* entries.
<img src="/images/SCALE-TCAp8.png" width='700px'><br>
This is not typically required for TrueCommand.

*Volumes* is for creating additional storage datasets inside the previously selected Applications Pool.
<img src="/images/SCALE-TCAp9.png" width='700px'><br>
This is not typically required for TrueCommand.

Review the settings and verify the *Image Repository* is correct.
<img src="/images/SCALE-TCAp10.png" width='700px'><br>

Click **Submit** to download and begin deploying TrueCommand.
A new card is added to **Installed Applications** and shows the container deployment status.
<img src="/images/SCALE-TCAp11.png" width='700px'><br>

When deployment is complete, the card updates to show TrueCommand is active.
<img src="/images/SCALE-TCAp12.png" width='700px'><br>

To access TrueCommand, open a new browser tab and enter the address of your TrueNAS SCALE with `:9004` or `:9005` appended.
<!-- markdown-link-check-disable-next-line -->
Example: *https://www.truenasscale01.ixsystems.com:9005*
The TrueCommand login screen appears and asks to create the new [Administrator account](https://www.truenas.com/docs/truecommand/installupdate/install/#creating-the-administrator-account).
<img src="/images/SCALE-TCAp13.png" width='700px'><br>
If the login screen fails to appear, double-check your system networking settings, open networking ports, and if the `9004` or `9005` *Node Port* values are already in use by another application.

For documentation about configuring and using TrueCommand, see the [TrueCommand documentation section](https://www.truenas.com/docs/truecommand/).
