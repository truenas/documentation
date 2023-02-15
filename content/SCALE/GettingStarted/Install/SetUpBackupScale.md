---
title: "Backing Up TrueNAS"
description: "This article provides general information and instructions on setting up data storage backup solutions and saving the system configuration and initial system debug files."
weight: 60
tags:
- scaleinstall
- scalemigrate
- scalebackup
- scalecluster
---

{{< toc >}}


After configuring your TrueNAS storage and data sharing, or any other function, service, or application, it is time to ensure effective back up of your data using the backup options TrueNAS provides. 

You should also download and save your system configuration file to protect your system configuration information.

## Backing Up TrueNAS Storage Data

TrueNAS provides for data backup through cloud sync or replication.

### Using Cloud Sync for Data Backup
{{< hint info>}}
Cloud sync requires an account with a cloud storage provider and a storage location created with that provider, like Amazon S3 bucket.
SCALE support major providers like Storj, Amazon S3, Google Cloud, Box and Microsoft Azure, along with a variety of other vendors.
These providers can charge fees for data transfer and storage, so please review the polices of your cloud storage provider before transferring your data.
{{< /hint >}}

You can configure TrueNAS to send, receive, or synchronize data with a cloud storage provider. To set up cloud sync:

1. Add your cloud storage credentials to TrueNAS.

   Go to **Credentials > Backup Credentials** and click **Add** to open the **Cloud Credentials** configuration screen.

   Some cloud storage providers, like Amazon S3, require you log into your cloud account to generate additional information like an access key. TrueNAS requires you to enter the Amazon S3 credentials you generate on their **Security Credentials > Access Keys** page before you can save and add the cloud credentials. 
   Check with your cloud storage provider to see what credentials they require TrueNAS to provide to complete data transfers.

   Some cloud storage providers, like Box, can automatically populate the required **Authentication** fields after you log into your account using OAuth Authentication. 

   ![AddCloudCredentialsBox](/images/SCALE/22.02/AddCloudCredentialsBox.png "Add Cloud Credential")

   To automatically configure this credential, click **Log In To Provider**. An Authorization screen displays where you click **Proceed** to continue to the login screen for that service. 
   
   ![CloudCredentialBoxLoginAuthorization](/images/SCALE/22.02/CloudCredentialBoxLoginAuthorization.png "Box Login Authorization")

   ![BoxLoginCredentialsScreen](/images/SCALE/22.02/BoxLoginCredentialsScreen.png "Box Login Screen")
   
   After you enter your cloud account login and password, the TrueNAS Cloud Credential authentication fields auto-populate with the required information. Click **Save** to complete the process of adding your cloud credentials.

   We recommend you verify the credential before saving it if you do not log into your cloud storage provider as part of the process.
   For more information on cloud credentials see [Adding Cloud Credentials]({{< relref "AddCloudCredentials.md" >}})

2. Create a data transfer task.

   Go to **Data Protection > Cloud Sync Tasks** and click **Add** to open the **Add Cloud Sync Task** configuration screen. 

   ![AddCloudSyncTaskTop](/images/SCALE/22.02/AddCloudSyncTaskTop.png "Add Cloud Sync Task")

   Type a memorable name for this in **Name**, select the **Direction** as either **Push** to send data to the cloud service or **Pull** to get data from the cloud service. You can set up a cloud sync task to send data to and another task to get data from the cloud storage provider. Select the **Transfer Mode** as **Copy**, **Move** or **Sync**. 
   
   Click in the **Credential** dropdown field to select the cloud credential  for the provider you want to use that you added on the **Add Cloud Credential** screen in step 1. 

   Either type the path into the **Directory/Files** field or click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the dataset options, and then click on the dataset, and then file if you want to narrow backup down that far, to populate the field with the full path.

   Next when you want this task to run using the **Schedule** dropdown list to select the frequency.

   ![AddCloudSyncTaskBottom](/images/SCALE/22.02/AddCloudSyncTaskBottom.png "Add Cloud Sync Task Save")

   Clear the **Enable** checkmark to make the configuration available without allowing the specified schedule to run the task. 
   
   To test the sync task, click **Dry Run** or click **Save** to add the task to the **Cloud Sync Task** widget. You can perform a dry run from the task on the widget.
   
   To manually activate a saved task, go to **Data Protection > Cloud Synch Tasks** click the <i class="fa fa-caret-right" aria-hidden="true"></i> for the cloud sync task you want to run. Select **Run Now** to start the cloud sync operation.

### Using Replication for Data Backup

Replication is the process of taking a moment-in-time *snapshot* of the data and copying that snapshot to another location. Snapshots typically use less storage than full file backups and have more management options. This instruction shows using the TrueNAS replication wizard to create a simple replication task.

1. Create a periodic snapshot task using the **[Periodic Snapshot Task]({{< relref "PeriodicSnapshotTasksSCALE.md" >}})**. 
   Replication requires you to configure this task before you can successfully create and run replication tasks.

2. Create the replication task.

   Go to **Data Protection > Replication** and click **Add**. The **Replication Task Wizard** displays the **What and Where** configuration screen. Select both the **Source Location** and **Destination Location** using the dropdown list options. You can back up your data on the same system or a different system. If you select **A different system** you must have SSH connection, destination and source information ready.

   Next enter the **Source** and **Destination** paths. You can either type the full path to the data you want to back up or click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the dataset options, and then click on the dataset, and then file if you want to narrow backup down that far, to populate the field with the full path.

   The task a name populates from the values in **Source** and **Destination**. Click **Next**.

3. Define when you want this task to occur.

   Select the radio button for **Run On a Schedule** and select the schedule you want to use. Or select **Run Once** to run the task manually.

   Select the radio button to specify how long the destination snapshot lifetime.

4. Click **START REPLICATION**

To confirm replication created your snapshot, look at the **Periodic Snapshot Tasks** widget and the **Replication Tasks** widget status. 

## Backing Up the System Configuration

Now that you configured your system network, storage and the data shares you wanted, and you have set up your data back up solution it is time to back up your system configuration.
{{< hint info >}}
If you plan to set up a cluster that includes this TrueNAS SCALE, wait to download your system configuration file until after the cluster is set up and working.
{{< /hint >}}
Go to System **Settings > General** and click on **Manage Configuration**. Select **Download File**.

![GeneralManageConfigurationOptions](/images/SCALE/22.02/GeneralManageConfigurationOptions.png "Download Configuration File")

The **Save Configuration** dialog displays. 

![SaveConfigurationWindow](/images/SCALE/22.02/SaveConfigurationWindow.png "Save Configuration")

Click **Export Password Secret Seed** and then click **Save**. The system downloads the system configuration. Save this file in a safe location on your network where files are regularly backed up. 

Anytime you change your system configuration, download the system configuration file again and keep it safe.

### Downloading the Initial System Debug File

After saving the system configuration, go to **System Settings > Advanced** and click **Save Debug**. After the download completes save this initial debug file with your system configuration file.

{{< taglist tag="scaleinstall" limit="10" >}}
{{< taglist tag="scalebackup" limit="10" title="Related Backup Articles" >}}
{{< taglist tag="scalecluster" limit="10" title="Related Cluster Articles" >}}