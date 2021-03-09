---
title: "MinIO Clusters"
weight: 30
---

{{< toc >}}

On TrueNAS SCALE 20.12-ALPHA and later, users can create a MinIO S3 distributed instance to scale out and handle individual TrueNAS node failures.
In this example, we will be using four physical TrueNAS systems and creating a distributed cluster.
For more information on MinIO distributed setups, please refer to their [documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## Creating Datasets

Before getting started, create a dataset or other shared directory on your storage pool to be used for the persistent MinIO data (e.g. "/mnt/tank/minio01").
Create datasets across all nodes in advance.

On your first node, go to **Apps > Launch Docker Image**.

![AppsLaunchDockerImage](/images/SCALE/AppsLaunchDockerImage.png "Launching a Docker Image")

First, enter an application name (we picked “minio-distributed").

Enter *minio/minio* as the image name under *Image Repository* and select *Kill existing pods before creating new ones* under *Update Strategy*.

![AppsMinioInstallName](/images/SCALE/AppsMinioImagesAndPolicies.png "Images and Policies")

Now you need to configure your container arguments (args) to set up your cluster.
Start by entering the “server” argument, and then follow it up with the IP address/hostnames of your various nodes.
Keep in mind that the order is important and should be used across all the nodes identically.
The IP/Hostname should be the valid address of your individual TrueNAS systems on the network.
The <file>/data</file> path should be used and will be set up in the next steps.

![AppsMinioContainerSettings](/images/SCALE/AppsMinioContainerSettings.png "Container Settings")

Next, you will need to create Container Environment Variables and define your MINIO_ACCESS_KEY and MINIO_SECRET_KEY values.
Make sure these are identical between nodes and fill the *Environment Variable Value* with proper random credentials.

![AppsMinioEnvironmentVariables](/images/SCALE/AppsMinioEnvironmentVariables.png "Environment Variables")

In the **Networking** section, select *Host Network* then click *NEXT* until you reach the **Host Path Volumes** section.

![AppsMinioNetworking](/images/SCALE/AppsMinioNetworking.png "Networking")

In the **Host Path Volumes** section, select the directory or dataset you created earlier and enter the <file>/data</file> directory under *Mount Path*, then click *NEXT*.

![AppsMinioHostPathVolumes](/images/SCALE/AppsMinioHostPathVolumes.png "Host Path Volumes")

Confirm your options, then click *SUBMIT* to complete the first node.

![AppsMinioSummary](/images/SCALE/AppsMinioSummary.png "Summary")

Now that the first node is complete, you can create datasets for any remaining nodes.

## Accessing the Minio Distributed Setup

Once you're done creating datasets, you can browse to any of the TrueNAS addresses at port *:9000*, where you will be greeted by the MinIO login screen.
Log in with the Access and Secret keys previously created.

![MinioLogin](/images/SCALE/MinioLogin.png "MinIO Login")
