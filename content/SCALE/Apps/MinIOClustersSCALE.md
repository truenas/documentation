---
title: "MinIO Clusters"
weight: 30
---

{{< toc >}}

On TrueNAS SCALE 20.12-ALPHA and later, users can create a MinIO S3 distributed instance to scale out and handle individual TrueNAS node failures.
In this example, we will be using four physical TrueNAS systems and creating a distributed cluster.
For more information on MinIO distributed setups, please refer to their [documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## Creating Datasets

Before getting started, create a dataset or other shared directory on your storage pool to be used for the persistent MinIO data (e.g. <file>/mnt/tank/minio01</file>).
Create datasets across all nodes in advance.

{{< tabs "Setup Methods" >}}
{{< tab "Basic Setup" >}}
On your first node, go to **Apps > Launch Docker Image**.

![AppsLaunchDockerImage](/images/SCALE/AppsLaunchDockerImage.png "Launching a Docker Image")

First, enter an application name (we picked “minio-distributed").

Enter **minio/minio** as the image name under **Image Repository**.

![AppsMinioImagesAndPolicies](/images/SCALE/AppsMinioImagesAndPolicies.png "Images and Policies")

Now you need to configure your container arguments (args) to set up your cluster.
Start by entering the “server” argument, and then follow it up with the IP address/hostnames of your various nodes.
Keep in mind that the order is important and should be used across all the nodes identically.
The IP/Hostname should be the valid address of your individual TrueNAS systems on the network.
The <file>/data</file> path should be used and will be set up in the next steps.

![AppsMinioContainerSettings](/images/SCALE/AppsMinioContainerSettings.png "Container Settings")

Next, you will need to create Container Environment Variables and define your MINIO_ACCESS_KEY and MINIO_SECRET_KEY values.
Make sure these are identical between nodes and fill the **Environment Variable Value** with proper random credentials.

![AppsMinioEnvironmentVariables](/images/SCALE/AppsMinioEnvironmentVariables.png "Environment Variables")

In the **Storage** section, select the directory or dataset you created earlier and enter the <file>/data</file> directory under **Mount Path**, then click **Next**.

![AppsMinioHostPathVolumes](/images/SCALE/AppsMinioHostPathVolumes.png "Host Path Volumes")

In the **Scaling/Upgrade Policy** screen, select **Kill existing pods before creating new ones** under **Update Strategy**, then click **Next**.

![AppsMinioScaling](/images/SCALE/AppsMinioScaling.png "Scaling")

Confirm your options, then click **Save** to complete the first node.

![AppsMinioSummary](/images/SCALE/AppsMinioSummary.png "Summary")

Now that the first node is complete, you can create datasets for any remaining nodes.

## Accessing the Minio Distributed Setup

Once you're done creating datasets, you can browse to any of the TrueNAS addresses at port *:9000*, where you will be greeted by the MinIO login screen.
Log in with the Access and Secret keys previously created.

![MinioLogin](/images/SCALE/MinioLogin.png "MinIO Login")
{{< /tab >}}
{{< tab "Advanced Setup" >}}
Go to **Apps** and click **Install** in the MinIO window to open the MinIO configuration wizard.

### Application Name

Enter a name for the cluster, then click **Next**.

![AppsMinioAdvanced1](/images/SCALE/AppsMinioAdvanced1.png "Application Name")

### Workload Configuration

Select an update strategy. We recommend **Kill existing pods before creating new ones**.

![AppsMinioAdvanced2](/images/SCALE/AppsMinioAdvanced2.png "Application Name")

### MinIO Configuration

If you want to run your MinIO instance to connect to a distributed minio cluster, set **Enable Distributed Mode** and input your Distributed Minio Instance URI. 

![AppsMinioAdvanced3](/images/SCALE/AppsMinioAdvanced3.png "Application Name")

Under **Configure MinIO Extra Arguments**, enter the “server” argument, then click **Add** and follow it up with the IP address/hostnames of your various nodes.
Keep in mind that the order is important and should be used across all the nodes identically.

![AppsMinioAdvanced3args](/images/SCALE/AppsMinioAdvanced3args.png "Application Name")

Enter the root user and password, then create Container Environment Variables and define your MINIO_ACCESS_KEY and MINIO_SECRET_KEY values.

![AppsMinioAdvanced3vars](/images/SCALE/AppsMinioAdvanced3vars.png "Application Name")

You may configure the API and UI access node ports, and the MinIO domain name if you have TLS configured for MinIO. You may also a MinIO certificate if you wish.

### Storage

If you want to use a host path to store your MinIO data volume, set **Enable Host Path for MinIO Data Volume** and select a path. 

Under **Configure Extra Host Path Volumes**, enter the <file>/data</file> directory under **Mount Path in Pod**, then select the directory or dataset you created earlier and click **Next**.

![AppsMinioAdvanced4](/images/SCALE/AppsMinioAdvanced4.png "Application Name")

### Advanced DNS Settings

You can configure additional DNS options in Advanced DNS Settings. Click **Add** to add more DNS option entries. 

![AppsMinioAdvanced5](/images/SCALE/AppsMinioAdvanced5.png "Application Name")

### Confirm Options

Make sure the configuration summary meets your needs, then click **Save**.
{{< /tab >}}
{{< /tabs >}}