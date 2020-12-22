---
title: "MinIO Clusters in TrueNAS SCALE"
description: "How to deploy MinIO Clusters in TrueNAS SCALE."
weight: 1
tags: ["SCALE", "MinIO"]
---

On TrueNAS SCALE 20.12 and later, users can create a MinIO S3 distributed instance to scale out and handle individual TrueNAS node failures. In this example, we will be using four physical TrueNAS systems and creating a distributed cluster.

## Creating datasets

Before getting started, create a dataset or other shared directory on your storage pool to be used for the persistent minIO data (e.g. **/mnt/tank/minio01**). Create datasets across all nodes in advance.

On your first node, go to **Apps > Launch Docker Image**.

<img src="/images/minIO 1 - Launch Docker Image.png">
<br><br>

First, enter an application name (we picked “minIO-distributed").

Enter “minIO/minIO” as the image name under **Image Repository** and select _Kill existing pods before creating new ones_ under **Update Strategy**.

<img src="/images/minIO 2 - Name Your Instance.png">
<br><br>

Now you need to configure your container arguments (args) to setup your cluster. Start by entering the “server” argument, and then follow it up with the IP address/hostnames of your various nodes. Keep in mind that the order is important and should be used across all the nodes identically. The IP/Hostname should be the valid address of your individual TrueNAS systems on the network. The _/data_ path should be used, and will be setup in the next steps.

TIP: For more information on MinIO Distributed setups, please refer to their documentation.

<img src="/images/minIO 3 - Enter Container Args.png">
<br><br>

Next you will need to create Container Environment Variables and define your MINIO_ACCESS_KEY and MINIO_SECRET_KEY values. Make sure these are identical between nodes and fill the **Environment Variable Value** with proper random credentials.

<img src="/images/minIO 4 - Environmental Variable Name.png">
<br><br>

In the **Networking** section, be sure to select _Host Network_, then click **NEXT** until you reach the **Host Path Volumes** section.

<img src="/images/minIO 5 - Host Network.png">
<br><br>

In the **Host Path Volumes** section, select the directory or dataset you created earlier and enter the "/data" directory under **Mount Path**, then click **NEXT**.

<img src="/images/minIO 6 - Host Path Volumes.png">
<br><br>

Confirm your options, then click **SUBMIT** to complete the first node.

<img src="/images/minIO 7 - Confirm Options.png">
<br><br>

Now that the first node is complete, you can create datasets for any remaining nodes. 

## Accessing your MinIO distributed setup

Once you're done creating datasets, you can browse to any of the TrueNAS addresses at port :9000, where you will be greeted by a MinIO login screen. Log in with the Access/Secret keys you setup in the previous steps. You should now be able to access your MinIO distributed setup.

<img src="/images/minIO 8 - minIO Login Scren.png">
<br><br>
