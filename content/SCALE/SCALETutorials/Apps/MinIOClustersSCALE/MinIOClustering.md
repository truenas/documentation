---
title: "Setting Up MinIO Clustering"
description: "This article provides information on configuring MinIO, including instructions for a distributed cluster configuration, using the official application widget for MinIO."
weight: 20
aliases: /scale/scaleuireference/apps/minioclustersscale/
tags:
- scaleminio
- scaleapps
- scaleclustering
---

{{< toc >}}

On TrueNAS SCALE 20.12-ALPHA and later, users can create a MinIO S3 distributed instance to scale out and handle individual node failures. A node is a single TrueNAS storage system in a cluster.

The examples below use four TrueNAS systems to create a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## First Steps

Before configuring MinIO, you must create a dataset and shared directory for the persistent MinIO data. 
Go to **Datasets** and select the pool and dataset where you want to place the MinIO dataset. 
You can use an existing pool or [create a new one]({{< relref "CreatePoolSCALE.md" >}}). 

After creating the dataset, go to **System Settings > Shell** and create the directory MinIO stores information the application uses. 
MinIO uses **/data** but allows users to replace this with the directory of their choice. 
Change to the */pool/dataset* directory and then use the `mkdir /mnt/data` command to create the **/data** directory. 

For a distributed configuration, repeat this on all system nodes in advance. 

Note the system (node) IP addresses or host names and have them ready for configuration. Also, have your S3 user name and password ready for later.

## Configuring MinIO

You can configure the MinIO application using either the **Launch Docker Image** option or the **Install** option on the MinIO application widget on the **Available Applications** tab. The best practice is to use the MinIO widget **Install** option, which pre-populates the version and other configuration settings the **Launch Docker Image** option requires you to populate.

On your first node, go to **Apps**, click **Available Applications**, locate the MinIO widget, and click **Install** to open the **minio** wizard.

![AppsMinIOAppNameAndScaling](/images/SCALE/22.12/AppsMinIOAppNameAndScaling.png "MinIO Setup Wizard")

First, enter a name in **Application Name** (e.g. *minio* for a standard configuration or *minio-distributed* for a distributed MinIO configuration). 

Select the update strategy you want to use from the **Minio update strategy** dropdown list. The best practice is to select **Create new pods and then kill old ones**.

Select **Enable Distributed Mode** if you want to set up a cluster of SCALE systems in a distributed cluster. 
A MinIO in distributed mode allows you to pool multiple drives or TrueNAS SCALE systems (even if they are different machines) into a single object storage server for better data protection in the event of single or multiple node failures because MinIO distributes the drives across several nodes. 
For more information, see the [Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide).

Configure the **Container Entrypoint** arguments. 

![AppsMinIOConfigurationArgs](/images/SCALE/22.12/AppsMinIOConfigurationArgs.png "MinIO Container Entrypoint Arguments")

Click **Add** to the right of **Container Args** twice to add two **Arg** fields. 
In the first **Arg** field, type **server**. 
In the second **Arg** field, type the valid IP or host name of each TrueNAS system on the network, the MinIO port number, and the directory you created for MinIO. Use this format: <file>**http://*0.0.0.0*/9000/data**</file>.

To create a distributed cluster, add all the valid TrueNAS system (node) IP addresses/host names. Use the same order across all the nodes.

MinIO containers use server port 9000. The MinIO Console communicates using port 9001.
Use the <file>/data</file> path that the following steps set up.

Enter the S3 root user in **Root User** and the S3 password in the **Root Password** fields. 

Next, create the **Minio Environment Variables**. Click **Add** twice to enter two blocks of settings. 

![AppsMinIOEnvironmentVariables](/images/SCALE/22.12/AppsMinIOEnvironmentVariables.png "MinIO Environment Variables")

Define the **MINIO_ROOT USER** and **MINIO_ROOT_PASSWORD** arguments and their values. 
For the values, use a name of up to 20 characters. For a password, use a string of 8 to 40 randomized characters. 
MinIO recommends using a long password string of unique random characters. 
Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}

For a distributed cluster, ensure the values are identical between nodes and fill the **Environment Variable Value** with proper random credentials.

![LaunchDockerImageAddContainerEnvironmentVariables](/images/SCALE/22.12/LaunchDockerImageAddContainerEnvironmentVariables.png "Environment Variables")

You can configure the API and UI access node ports and the MinIO domain name if you have TLS configured for MinIO. 

To store your MinIO container audit logs, check the **Enable Log Search API** box and enter the amount of storage space logs may consume.

![AppsMinIOLogSearchAPI](/images/SCALE/22.12/AppsMinIOLogSearchAPI.png "MinIO LogSearchAPI")

You can also configure a MinIO certificate if you wish.

Enter the **Storage** settings. 
Select the dataset you created for the MinIO container for the **Host Path** and enter the <file>**/data**</file> directory under **Mount Path**.

![AppsMinIOStorage](/images/SCALE/22.12/AppsMinIOStorage.png "Host Path Volumes")

If you want to use a host path to store your MinIO data volume, select **Enable Host Path for MinIO Data Volume** and then select the path. 

Under **Extra Host Path Volumes**, enter the <file>/data</file> directory under **Mount Path in Pod**, then select the directory or dataset you created earlier and click **Next**.

![AppsMinIOStorage](/images/SCALE/22.02/AppsMinIOStorage.png "Storage Host Path")

(Optional) Add the **Advanced DNS Settings** if you want to configure additional DNS options in Advanced DNS Settings. 
Click **Add** to add more DNS option entries. Click **Next**.

Click **Save** to complete the first node.

Now that the first node is complete, you can configure any remaining nodes (including datasets and directories).

## Accessing the Minio Setup

After you create datasets, you can navigate to the TrueNAS address at port **:9000** to see the MinIO UI. After creating a distributed setup, you can see all your TrueNAS addresses.

Log in with the **ROOT_USER** and **ROOT_PASSWORD** keys you created as Container Environment Variables.

![MinioLogin](/images/SCALE/MinioLogin.png "MinIO Login")


{{< taglist tag="scaleminio" limit="10" >}}
{{< taglist tag="scaleclustering" limit="10" title="Related Clustering Articles" >}}
