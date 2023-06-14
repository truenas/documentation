---
title: "Setting Up MinIO Clustering"
description: "Provides configuration instructions using the MinIO Offical Charts application widget. It includes instructions on setting up a distributed cluster configuration."
weight: 20
aliases:
 - /scale/scaleuireference/apps/minioclustersscale/
 - /scale/scaletutorials/apps/minioclustersscale/minioclustering/
tags:
- scaleminio
- scaleapps
- scaleclustering
---

{{< toc >}}


{{< hint info >}}
This article applies to the public release of the **MinIO Official Charts** application.
{{< /hint >}}

On TrueNAS SCALE 20.12-ALPHA and later, users can create a MinIO S3 distributed instance to scale out and handle individual node failures. A node is a single TrueNAS storage system in a cluster.

The examples below use four TrueNAS systems to create a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## First Steps

Before configuring MinIO, you must [create a dataset]({{< relref "DatasetsSCALE.md" >}}) and shared directory for the persistent MinIO data. 
Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
You can use either an existing pool or [create a new one]({{< relref "CreatePoolSCALE.md" >}}). 

After creating the dataset, create the directory where MinIO stores information the application uses. 
There are two ways to do this, one as the root user and the other as the local administrator (admin).
The root user can use either SCALE Shell or create a share that then creates the directory.
The local administrator account (admin) can only create the share, then creates the directory.
MinIO uses **/data** but allows users to replace this with the directory of their choice. 

If logged in as root, go to **System Settings > Shell**, change to the */pool/dataset* directory and then use the `mkdir /mnt/data` command to create the **/data** directory. 
If logged in as admin, create a share (i.e, an SMB share), log into that share, then create the directory.

For a distributed configuration, repeat this on all system nodes in advance. 

Take note of the system (node) IP addresses or host names and have them ready for configuration. Also, have your S3 user name and password ready for later.

## Configuring MinIO

You can configure the MinIO application using either **Launch Docker Image** at the top right of the **Apps** screen, or the **Install** option on the **MinIO Official Charts** application widget. found on the **Available Applications** screen.

We recommend using the **Install** option on the **MinIO** application widget. 

If your system has sharing (SMB, NFS, iSCSI) configured, disable the share service before adding and configuring a new MinIO deployment. 
After completing the installation and starting MinIO, enable the share service.

If the dataset for the MinIO share has the same path as the MinIO application, disable host path validation before starting MinIO. 
To use host path validation, set up a new dataset for the application with a completely different path. For example, for the share */pool/shares/minio* and for the application */pool/apps/minio*.

### Configuring MinIO Using Install
{{< hint ok >}}
Turn the share service off before starting the MinIO application. After MinIO is running, enable the share service.
{{< /hint >}}

On your first node (system in the cluster). 
Go to **Apps**, click **Available Applications**, locate the **MinIO Official Chart** widget, and click **Install** to open the **minio** wizard.

![MinIOChartsWidget](/images/SCALE/22.12/MinIOChartsWidget.png "MinIO Official Charts Widget")

Enter a name in **Application Name** (e.g. *minio* for a standard configuration or *minio-distributed* for a distributed MinIO configuration). 

![AppsMinIOAppNameAndScaling](/images/SCALE/22.12/AppsMinIOAppNameAndScaling.png "MinIO Setup Wizard")

Select the update strategy from the **Minio update strategy** dropdown list. The best practice is to keep the default **Create new pods and then kill old ones** setting.

Next, enter the **MinIO Configuration** settings.

Select **Enable Distributed Mode** when setting up a cluster of SCALE systems in a distributed cluster. 
A MinIO in distributed mode allows you to pool multiple drives or TrueNAS SCALE systems (even if they are different machines) into a single object storage server for better data protection in the event of single or multiple node failures because MinIO distributes the drives across several nodes. 
For more information, see the [Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide).

Click **Add** to the right of **Container Args** twice to add two **Arg** fields to configure the **Container Entrypoint** arguments. 

![AppsMinIOConfigurationArgs](/images/SCALE/22.12/AppsMinIOConfigurationArgs.png "MinIO Container Entrypoint Arguments")

In the first **Arg** field, type **server**. 
In the second **Arg** field, type the valid IP or host name of each TrueNAS system on the network, the MinIO port number, and the directory you created for MinIO. 
Use this format: <file>**http://*0.0.0.0*/9000/data**</file>.

To create a distributed cluster, add all the valid TrueNAS system (node) IP addresses/host names. Use the same order across all the nodes.

MinIO containers use server port 9000. The MinIO Console communicates using port 9001.
Use the /data path that the following steps set up.

Enter the MinIO S3 root user in **Root User** and the S3 password in **Root Password**. 

Next, create the **Minio Environment Variables**. Click **Add** twice to enter two blocks of settings. 

![AppsMinIOEnvironmentVariables](/images/SCALE/22.12/AppsMinIOEnvironmentVariables.png "MinIO Environment Variables")

Define the **MINIO_ROOT USER** and **MINIO_ROOT_PASSWORD** arguments and their values. 
For the values, use a name of up to 20 characters. For a password, use a string of 8 to 40 randomized characters. 
MinIO recommends using a long password string of unique random characters. 
Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}

For a distributed cluster, ensure the values are identical between nodes and fill the **Minio image environment** values with proper random credentials.

You can configure the API and UI access node ports and the MinIO domain name if you have TLS configured for MinIO. 

To store your MinIO container audit logs, select **Enable Log Search API** box and enter the amount of storage space logs may consume.

![AppsMinIOLogSearchAPI](/images/SCALE/22.12/AppsMinIOLogSearchAPI.png "MinIO LogSearchAPI")

You can also configure a MinIO certificate if you wish.

Enter the **Storage** settings. 
Select the dataset you created for the MinIO container for the **Host Path** and enter the <file>**/data**</file> directory under **Mount Path**.

![AppsMinIOStorage](/images/SCALE/22.12/AppsMinIOStorage.png "Host Path Volumes")

If you want to use a host path to store your MinIO data volume, select **Enable Host Path for MinIO Data Volume** and then select the path. 

Under **Extra Host Path Volumes**, enter the <file>/data</file> directory under **Mount Path in Pod**, then select the directory or dataset you created earlier and click **Next**.

![MinIOStorageAddExtraHostPathVolumes](/images/SCALE/22.12/MinIOStorageAddExtraHostPathVolumes.png "Storage Host Path")

(Optional) Add the **Advanced DNS Settings** if you want to configure additional DNS options in Advanced DNS Settings. 
Click **Add** to add more DNS option entries. Click **Next**.

Click **Save** to complete the first node.

Now that the first node is complete, configure any remaining nodes (including datasets and directories).

After installing MinIO on all systems (nodes) in the cluster. Turn off (disable) the share service. Start the MinIO applications. When running, turn the share service back on (enable).

## Accessing the MinIO Setup

After you create datasets, you can navigate to the TrueNAS address at port **:9000** to see the MinIO UI. After creating a distributed setup, you can see all your TrueNAS addresses.

Log in with the **ROOT_USER** and **ROOT_PASSWORD** keys you created as Container Environment Variables.

![MinioLogin](/images/SCALE/MinioLogin.png "MinIO Login")


{{< taglist tag="scaleminio" limit="10" >}}
{{< taglist tag="scaleclustering" limit="10" title="Related Clustering Articles" >}}
