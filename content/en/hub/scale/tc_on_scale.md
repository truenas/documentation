---
title: "Deploying TrueCommand on TrueNAS SCALE"
description: "How to deploy TrueCommand container in TrueNAS SCALE."
tags: ["TrueCommand Docker","SCALE"]
---

TrueCommand can be deployed on TrueNAS SCALE using docker.

Start by ensuring that a storage pool exists, and click on **Apps**.

The first time the Apps page opens, you will need to select a target pool for the Applications.  Select the desired pull from the drop down and click **Choose**
<img src="/images/scale-tc-apps-02.png" width='700px'><br>

Once the target has been set, click **Launch Docker Image** in the upper right.
<img src="/images/scale-tc-apps-03.png" width='700px'><br>

Fill in the desired name for the application and enter `ixsystems/truecommand` for the *Image Repository*.  Set the *Image Tag* to `latest`
<img src="/images/scale-tc-apps-04.png" width='700px'><br>

Leave the Container Settings blank, and click **Next** to continue.
<img src="/images/scale-tc-apps-05.png" width='700px'><br>

Leave the Networking Settings blank, and click **Next** to continue.
<img src="/images/scale-tc-apps-06.png" width='700px'><br>

Enter `80` for the *Container Port* and `9004` for the *Node Port*.  Click the **+** button to add another port forwarding dialog.  In this second form enter `443` for the *Container Port* and `9005` for the *Node Port*.  Then click Next.
<img src="/images/scale-tc-apps-07.png" width='700px'><br>

Leave the Host Path Volumes Settings blank, and click **Next** to continue.
<img src="/images/scale-tc-apps-08.png" width='700px'><br>

Leave the Volumes Settings blank, and click **Next** to continue.
<img src="/images/scale-tc-apps-09.png" width='700px'><br>

Review the settings and verify the *Image Repository* is correct. To Confirm these settings click **Submit**
<img src="/images/scale-tc-apps-10.png" width='700px'><br>

A new card will appear and show that the container is being deployed.
<img src="/images/scale-tc-apps-11.png" width='700px'><br>

When completed the card will show that the container is active.
<img src="/images/scale-tc-apps-12.png" width='700px'><br>

To open TrueCommand, enter the address of your TrueNAS SCALE, along with the port 9004.  The first start TrueCommand UI will appear. 
<img src="/images/scale-tc-apps-13.png" width='700px'><br>
