---
title: "MinIO Clusters"
weight: 30
---

{{< toc >}}

On TrueNAS SCALE 20.12-ALPHA and later, users can create a MinIO S3 distributed instance to scale out and handle individual TrueNAS node failures.
In this example, we use four physical TrueNAS systems and creating a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## First Steps

Before getting started configuring the MinIO application, you must first create a dataset and shared directory to use for the persistent MinIO data. 
Go to **Storage > Pools** and select the pool you want to place the dataset in. 
You can use an existing pool or create a new pool. 

After creating the dataset, go to **System > Shell** and create the directory MinIO uses to store information used by and in the application. MinIO uses **/data** but allows users to replace this with the directory of their choice. Use **Service > Shell** to change to the */pool/dataset* directory and then use the `mkdir /mnt/data` command to create the **/data** directory. 

For a distributed configuration, repeat this on all system notes in advance. 

Make note of the system (node) IP addresses or hostnames and have them ready for configuration. Also, locate your S3 user and password and have it ready for later in the configuration process.

## Configuring MinIO

You can configure the MinIO application using either the **Launch Docker Image** button or the **Install** button on the MinIO application card on the **Available Applications** tab.

{{< tabs "Setup Methods" >}}
{{< tab "Setup Using Launch Docker Image" >}}
On your first node, go to **Apps > Launch Docker Image**.

![AppsLaunchDockerImage](/images/SCALE/22.02/AppsLaunchDockerImage.png "Launching a Docker Image")

First, enter a name in **Application Name** (for example, *minio* for a normal configuration or *minio-distributed* for a distributed MinIO configuration). 
A MinIO in distributed mode allows you to pool multiple drives (even if they are are different machines) into a single object storage server for better data protection in the event of single or multiple node failures because drives are distributed across several nodes. For more information refer to [Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide).

Click **Next** to continue after completing each section of the configuration form.

Enter **minio/minio** as the image name under **Image Repository**. Click **Next**.

![AppsMinioContainerImagesMinIO](/images/SCALE/22.02/AppsContainerImagesMinIO.png "MinIO Container Image")

Configure the **Container Entrypoint** arguments. 
Click the **Add** button to the right of **Configure Container Args** twice to add two **Arg** fields. 
In the first **Arg** field type **server**. 
In the second **Arg** field type the valid IP or host name of your individual TrueNAS systems on the network, the MinIO port number and the directory you created for MinIO. Use this format, <file>**http://*0.0.0.0*/9000/data**</file>.

Ror a distributed cluster add the other valid TrueNAS system IP addresses/hostnames of your various nodes.
The order is important for so each instance use the same order (across all the nodes).

MinIO containers use server port 9000. The MinIO Console communicates using port 9001.

Use the <file>/data</file> path which is set up in the next steps.

![AppsMinioContainerSettings](/images/SCALE/AppsMinioContainerSettings.png "Container Settings")

Next, create the **Container Environment Variables** and define the **MINIO_ROOT USER** and **MINIO_ROOT_PASSWORD** arguments and their values. 
For the ROOT_USER value use a name up to 20 characters, and for the ROOT_PASSWORD use a string of 8 to 40 randomize characters. 
MinIO recommends using a long password string of unique random characters. 
Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.
{< hint danger >}
As with all passwords and credentials, record and keep these passwords secure and backed up.
{< /hint >}

For a distributed cluster, make sure these are identical between nodes and fill the **Environment Variable Value** with proper random credentials.

![AppsContainerEnvironmentVariablesMinIO](/images/SCALE/22.02/AppsContainerEnvironmentVariablesMinIO.png "Environment Variables")

Click **Next** until the **Storage** section displays. 
Select the dataset you created for the MinIO container for the **Host Path** and enter the <file>**/data**</file> directory under **Mount Path**, then click **Next**.

![AppsStorageMinIO](/images/SCALE/22.02/AppsStorageMinIO.png "Host Path Volumes")

Click **Next** until the **Scaling/Upgrade Policy** screen displays. 
Select the  **Update Strategy** option you want to deploy. 
Use **Kill existing pods before creating new ones** to recreate the container or **Create new pods and then kill old ones** if you want rolling upgrades. Click **Next**.

![AppsScalingUpgradePolicyMinIO](/images/SCALE/22.02/AppsScalingUpgradePolicyMinIO.png "Scaling Upgrade Policy")

Confirm your options, then click **Save** to complete the first node.

![AppsConfirmOptionsMinio](/images/SCALE/22.02/AppsConfirmOptionsMinio.png "Options Summary")

Now that the first node is complete, you can create the configuration including datasets and directories for any remaining nodes.

## Accessing the Minio Setup

Once you're done creating datasets, you can browse to the TrueNAS address at port **:9000**. The MinIO login screen displays. If you created a distributed setup you can see all the TrueNAS addresses.
Log in with the ROOT_User and ROOT_PASSWORD keys previously created as Container Environment Variables.

![MinioLogin](/images/SCALE/MinioLogin.png "MinIO Login")

{{< /tab >}}
{{< tab "Setting Up Using MinIO Install" >}}
Go to **Apps** and select the **Available Applications** tab to display the MinIO application card. Click **Install** on the MinIO card to open the MinIO configuration wizard.

### Application Name

Enter a name for the MinIO cluster. Click **Next**.

![AppsMinIOApplicationName](/images/SCALE/22.02/AppsMinIOApplicationName.png "Application Name")

### Workload Configuration

Select an update strategy. Use **Kill existing pods before creating new ones** to recreate the container or **Create new pods and then kill old ones** if you want rolling upgrades. 
We recommend **Kill existing pods before creating new ones**. Click **Next**.

![AppsMininIOWorkloadConfiguration](/images/SCALE/22.02/AppsMininIOWorkloadConfiguration.png "Upgrade Strategy")

### MinIO Configuration

If you want to run your MinIO instance to connect to a distributed minio cluster, set **Enable Distributed Mode** and input your Distributed Minio Instance URI. Refer to the [Distributed MinIO Quickstart Guide]9https://docs.min.io/docs/distributed-minio-quickstart-guide) for more information.

![AppsMinIOConfiguration](/images/SCALE/22.02/AppsMinIOConfiguration.png "MinIO Configuration")

Click the **Add** button to the right of **Configure MinIO Extra Arguments** twice to display two **Arg** fields. 
In the first **Arg** field type **server**. 
In the second **Arg** field type the valid IP or host name of your individual TrueNAS systems on the network, the MinIO port number and the directory you created for MinIO. Use this format, <file>**http://*0.0.0.0*/9000/data**</file>.

Add the other valid TrueNAS system IP addresses/hostnames of your various nodes.
The order is important so use the same order across all the nodes.
MinIO containers use server port 9000. The MinIO UI communicates using port 9002.

![AppsMinIOConfiguration2](/images/SCALE/22.02/AppsMinIOConfiguration2.png "Configuration Arguments")

Enter the S3 root user in **Root User** and the S3 password in the **Root Password** fields. 

Click the **Add** button to the right of **Container Environment Variables** and enter the MINIO_ROOT_USER and MINIO_ROOT_PASSWORD arguments and values.
For the ROOT_USER value use a name up to 20 characters, and for the ROOT_Password use 8 to 40 randomize characters. 
MinIO recommends using a long password string of unique random characters. 
Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.
{< hint danger >}
As with all passwords and credentials, record and keep these passwords secure and backed up.
{< /hint >}

![AppsMinioAdvanced3vars](/images/SCALE/AppsMinioAdvanced3vars.png "Application Name")

You can configure the API and UI access node ports, and the MinIO domain name if you have TLS configured for MinIO. You can also configure a MinIO certificate if you wish.

### Storage

If you want to use a host path to store your MinIO data volume, select the **Enable Host Path for MinIO Data Volume** checkbox and select a path. 

Under **Configure Extra Host Path Volumes**, enter the <file>/data</file> directory under **Mount Path in Pod**, then select the directory or dataset you created earlier and click **Next**.

![AppsMinIOStorage](/images/SCALE/22.02/AppsMinIOStorage.png "Storage Host Path")

### Advanced DNS Settings

You can configure additional DNS options in Advanced DNS Settings. Click **Add** to add more DNS option entries. Click **Next**.

![AppsMinIOAdvancedDNSSettings](/images/SCALE/22.02/AppsMinIOAdvancedDNSSettings.png "Advanced DNS Options")

### Confirm Options

Make sure the configuration summary meets your needs, then click **Save**.
{{< /tab >}}
{{< /tabs >}}