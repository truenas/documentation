---
title: "Migrating from MinIO S3"
description: "Provides migration instructions on how to move from the deprecated MinIO S3 service to MinIO server app."
weight: 10
aliases:
tags:
- scaleminio
- scales3service
- enterprise
---


{{< toc >}}

This tutorial provides instructions on migrating from the MinIO S3 Filesystem service deployed through the TrueNAS S3 service, deprecated in SCALE Bluefin and removed in Cobia, to the latest release of the MinIO Server application in Bluefin.

MinIO has deprecated both the S3 Gateway and Filesystem services.
MinIO no longer supports these offerings, do not provide a direct upgrade path for either, and require users to migrate from these S3 services to a later release of the MinIO Server.

TrueNAS SCALE offers access to the current MinIO release through the SCALE Bluefin MinIO app.
Using the SCALE MinIO app simplifies the installation process by allowing users to install and deploy MinIO in a container pod.
SCALE handles the MinIO download and installation process so users only configure their app deployment through the easy to use SCALE app screens.
After completing the SCALE MinIO app installation, users log into the MinIO web portal to customize their MinIO deployments.

Community users can follow these instructions to migrate the TrueNAS S3 service to the MinIO Server application, and migrate the MinIO S3 service deployment to new MinIO Server deployment.

{{< enterprise >}}
TrueNAS Enterprise customers are strongly encouraged to contact iXsystems Support for assistance with the migration process.

{{< expand "Contacting Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Migration Overview
The migration path involves downloading and installing a MinIO Client (MC) release with the required feature and function support to migrate the MinIO S3 deployment.

Users must upgrade SCALE to the latest release of Bluefin and complete the migration process **before** upgrading to TrueNAS SCALE Cobia or a later major version.

Next, using the MinIO web portal, create a new MinIO app deployment and then migrate the MinIO S3 service deployment to it.

After migrating data, you can either create an archive of the TrueNAS S3 service or delete it.

Finally, you can upgrade Bluefin to Cobia.

## Requirements
* TrueNAS SCALE upgraded to the latest publicly available release of Bluefin.

* A TrueNAS system with double the storage capacity used by the S3 service and that does not cause the pool to exceed 80% utilization.

* A TrueNAS self-signed certificate for the MinIO **Enterprise** app (not required for the community **Charts** app).

* New port number for the MinIO **Charts** app.
  Do not use the same port numbers as the S3 service (**9000** and **9001**).
  Refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/) to identify available port numbers.
  The MinIO **Enterprise** app can use the default port numbers **30000** and **30001**.

* A MinIO Client (MC) release that supports the commands and functions required to migrate from the S3 service to later MinIO releases.
  Download and install a MinIO Client (MC) within the **RELEASE.2022-06-26T18-51-48Z** and **RELEASE.2022-10-29T10-09-23Z** range.

## Migrating the MinIO S3 Service
This procedure uses the MinIO Client (MC), TrueNAS SCALE, and the MinIO web portal.

1. Create a new [dataset]({{< relref "Datasetsscale.md" >}}) named **data** for the MinIO app.
   Do not use the same dataset(s) or path(s) consumed by the existing S3 service!
   For example, if the the existing S3 service path is */tank/s3/data*, create a new dataset and path */tank/minio/data* to use for the MinIO app.

   You need at least double the storage capacity of the current S3 MinIO deployment on the TrueNAS SCALE system.
   Data storage should not cause the pool to exceed 80% utilization through the migration process.

   This tutorial uses the same system for the S3 service and the MinIO app deployment.
   Using a secondary system for storage capacity slows data transfer rates to and from the server.
2. Identify two new port numbers to use for the community **Charts** MinIO app.
   The community **Charts** MinIO app default ports are the same as the S3 service so select new ports to use.
   Do not use the existing MinIO S3 service ports (**9000** and **9001**).
   See [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers before deciding on the transitional app port numbers.
   The **Enterprise** MinIO app uses ports **30000** and **30001**.

4. Download and install a MinIO Client release on your computer to facilitate the migration.
   Windows, Linux, and Mac version are available.
   Select a version that is between **RELEASE.2022-06-26T18-51-48Z** and **RELEASE.2022-10-29T10-09-23Z**.
   Versions outside of this range do not support the commands required to migrate the S3 service deployment to newer MinIO releases.
   Attempting to use a release outside the provided range can result in migration failure and the MinIO app failing to launch.
   This procedure uses MC **RELEASE.2022-10-29T10-09-23Z**.

   This procedure uses the [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/basic-commands) to install the client, and assumes user familiarity with WSL or standard Linux CLI.
   You cannot use other PowerShell or other Command Propmpt to execute this command.
   Open the WSL command-line tool, then enter this command to install the MC client software:

   ```
   /mnt/wsl/minio-client$ curl https://dl.min.io/client/mc/release/linux-amd64/archive/mc.RELEASE.2022-10-29T10-09-23Z \
   --create-dirs \
   -o $HOME/minio-binaries/mc

   chmod +x $HOME/minio-binaries/mc
   export PATH=$PATH:$HOME/minio-binaries/
   ```
   After installation completes, enter `mc --version` to verify a compatible version installed.

5. Log into the MinIO web portal to migrate the S3 service configuration settings and bucket(s) with bucket settings.
   The S3 service does not support commands in the MinIO MC `admin` utility needed to export/import configuration data from the the S3 service due to the age of the release.
   Therefore, to migrate the S3 service deployment to the MinIO app deployment you must manually recreate all S3 configuration settings and buckets in the new MinIO deployment.
   {{< expand "Recreating the S3 Deployment in the MinIO App Deployment" "v" >}}
   1. Log into the MinIO web portal.

      You can have two browser sessions open, one logged into the S3 deployment and the other into the MinIO app deployment, to view the S3 settings while you recreate them in the new deployment.

   2. Manually recreate the all settings including:
      * Configuration settings
      * All users and user mappings
      * All groups and group mappings
      * All access keys for services using the S3 deployment for storage
      * All policies
      * STS users and STS user mappings
      * All buckets and the bucket targets, lifecycle rules, notifications, quotas, locks, and versioning.

   3. Create new access keys to use with any services using MinIO as a data storage object if these access keys did not get saved when initially created.

   4. Create a new bucket for the MinIO app. If the S3 service deployment has multiple buckets, create the same number for the MinIO app deployment.
      The lifecycle rules, versioning, quotas, and locks for the new buckets should match those applied to the S3 deployment buckets.

      Identically naming the buckets in the new deployment to match the S3 deployment bucket names is not required but the workflow can benefit from identical names.
      {{< /expand >}}
      After manually recreating all settings and buckets, you can migrate bucket contents with the `mc mirror` command (see step 8).

6. Install the TrueNAS MinIO app.
   {{< enterprise >}}
   TrueNAS Enterprise customers with a active support contract can contact iXsystems Support for assistance with the MinIO **Enterprise** app.

   The MinIO Enterprise app requires you to create a self-signed certificate.
   {{< /enterprise >}}
   {{< expand "Installing MinIO Charts App" "v" >}}
   Go to **Apps > Available Applications**, locate the MinIO **Charts** app widget, then click **Install**.
   1. Accept both the **Application Name** and **version** default values.

   2. Add two arguments.
      Click **Add** to the right of **Minio Extra Arguments** twice to add two **Argument** fields.

      Enter **server** in the first **Argument** field.

      Enter the **https://*ipaddress*/*newport#*/data** in the second **Argument** field.
      Do not use the same port numbers the S3 service uses.

      Enter new MinIO administrator login credentials in the **Root User** and **Root Password** fields.
      Do not use the same user credentials as the S3 service. For example, *admin* and *newpa$$w0rd*.

   3. Add two environment variables.
      Click **Add** to the right of **Minio image environment** twice to add two sets of environment variable fields.

      Enter **MINIO_ROOT_USER** in **Name** and a new admin username in **Value** in one set of environment variable fields.

      Enter **MINIO_ROOT_PASSWORD** and a new password for the new admin user in the other set of environment variable fields.
      Passwords are a string of eight to 40 random alphanumeric and special characters.

   4. Add the storage for this app.
      Leave  **Mount Path in Pod** set to **/data**, then select the new host path for the dataset created for this app.

   5. (Optional) Edit the **Resource Limits** to limit the amount of CPU and memory the application can use.

   6. Click **Save** to complete the TrueNAS app installation/deployment.
      When complete, the application widget shows on the **Installed Applications** screen. Start the application.
   {{< /expand >}}

7. Create an alias for both the MinIO service deployment and the MinIO app deployment using the MC client software.
   Use either the Linux or WSL command line to enter this command twice, first for the S3 Service alias, then for the MinIO app alias:

   <code>mc alias set <i>newalias path admin pa$$w0rd</i></code>

   Where:
   * *newalias* is the alias for the S3 service or the MinIO app.
   * *path* is the system host name or IP and port number, for example, *https://10.234.123.160:9000* for the S3 service or *https://10.234.123.161:30000* for the MinIO app.
   * *admin* is the username for the MinIO web portal.
   * *pa$$w0rd* is the password for the admin user.

8. Mirror the S3 service deployment to move bucket data contents to the MinIO app deployment buckets.
   {{< hint type=warning >}}
   This process can take days to complete based on the amount of data in the S3 service deployment.
   {{< /hint >}}

   Mirror each bucket, one at a time, and waiting until the first bucket mirror operation completes before starting the next mirror operation.
   Enter this command using in the WSL or Linux command line tool:

   <code>mc mirror --preserve --watch <i>source/bucket target/bucket</i></code>

   Where:
   * *source/bucket* is the alias for the S3 service and name of the bucket for the service deployment, for example, *service/origin*.
   * *target/bucket* is the alias for the MinIO app and the name of the bucket for the app deployment, for example, *newapp/destination*.

   Wait for the mirror operation to complete before migrating the next bucket.

   The `--watch` flag monitors the S3 service deployment for new data throughout the process, which allows using the S3 service until the migration process completes but this greatly slows the data transfer.
   The `--watch` flag does not end when the transfer completes as it continually looks for new files added to the source.
   The transfer rate does not reach zero as it is an average throughout the transfer.
   To verify the transfer completed look at the number of objects and usage sizes of the source and target buckets.
   Objects should match and the usage size should be similar but can differ slightly due to rounding differences between version.

9. Verify the  migration is successful, then archive the S3 service.
   Check the MinIO app deployment to make sure it has all the settings, users, groups, policies, and that you can access stored data in the buckets.
   If everything is correct and you can access your data, either create an S3 archive copy, offline to a backup server, or delete the S3 dataset to free up storage capacity on the TrueNAS SCALE server.

10. Stop the S3 service in SCALE and disable **Start Automatically**, then end the MC mirror command using the WSL or Linux CLI (<kbd>Ctrl C</kbd>).

11. Edit the MinIO **Charts** app configuration port numbers to use the default **9000** and **9001**.

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
