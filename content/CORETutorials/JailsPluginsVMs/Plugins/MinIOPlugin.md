---
title: "MinIO Plugin"
description: "Describes how to configure the MinIO plugin on TrueNAS CORE and gives migration instructions from the deprecated S3 built-in service."
weight: 20
tags:
- coreplugins
- corejailspluginsvm
- cores3
- minio
---

{{< toc >}}

The **Minio** official plugin from the iXsystems catalog is a High-performance object (S3) storage suite, natively available on TrueNAS CORE.

{{< expand "Background" "v" >}}
S3 is an object storage protocol used by many major cloud providers, including Amazon Web Services™. You can view these files with a web browser. S3 is the de facto standard for cloud-based storage. Organizations or online application developers can use TrueNAS with the Minio plugin to manage S3 storage. This can replace or archive expensive cloud storage.
{{< /expand >}}

This tutorial describes how to install the Minio plugin on TrueNAS and also how to migrate data from the deprecated S3 built-in service to the Minio plugin.

{{< expand "S3 Service Deprecation and Migration" "v" >}}
{{< include file="/_includes/S3Deprecation.md" >}}

The TrueNAS S3 service is based on version 2021-11-24T23:19:33Z and utilizes MinIO Filesystem/Gateway mode. Filesystem/Gateway mode is deprecated, beginning with MinIO version RELEASE.2022-10-24T18-35-07Z. Newer deployments of MinIO are unable to access data from the TrueNAS S3 service.

The MinIO client provides provisions for properly migrating and converting MinIO data stored in buckets. However, all configuration data must be migrated by manually recreating users, policies, buckets, and other resources on the new deployment.

For additional information please review [Migrate from Gateway or Filesystem Mode](https://min.io/docs/minio/container/operations/install-deploy-manage/migrate-fs-gateway.html) on the MinIO Documentation hub.
{{< /expand >}}

## First Steps

[Create a dataset]({{< relref "Datasets.md" >}}) to use for Minio Plugin storage.
MinIO manages files as objects.
These objects cannot mix with other dataset files.

In order to migrate data from an existing S3 service deployment running on TrueNAS CORE, the new destination dataset must have available storage capacity at least equal to the existing S3 service configuration.
Data can be migrated to a different networked device with enough storage capacity, however transfer rates may be slower depending on network configuration.

For better performance, total pool capacity should not exceed 80%.
For example, if the original S3 dataset is 25TB and the destination dataset is created in the same pool, the total pool capacity should be at least 62.5TB (25TB for each dataset plus 20% overhead).

## Installing the Minio Plugin

Go to the **Plugins** screen.
If you have not previously configured plugins on the system, follow the initial setup instructions in [Managing Plugins]({{< relref "ManagingPlugins.md" >}}).

{{< trueimage src="images/CORE/13.0/MinioPluginDetails.png" alt="Minio Plugin Details Screen" id="Minio Plugin Details Screen" >}}

Select the **Minio** plugin from the iXsystems collection.
Click **INSTALL**.

{{< trueimage src="images/CORE/13.0/MinioPluginInstall.png" alt="Install Minio Plugin" id="Install Minio Plugin" >}}

Enter a name for the plugin in **Jail Name** and adjust the networking settings as needed.
You can use the default [Network Address Translation (**NAT**)](https://datatracker.ietf.org/wg/nat/about/), enable **DHCP**, or manually define IP addresses.

{{< hint type=tip >}}
If migrating data from an existing S3 service deployment, ensure ports for the Minio plugin are different from the existing service.

{{< /hint >}}

Click **Save** to install.
A dialog confirms when the installation completes and shows post-install notes, including the `MINIO_ACCESS_KEY` and `MINIO_SECRET_KEY`.
You can view the post-install notes later by expanding the entry for the installed plugin in **Plugins** and clicking <i class="fa fa-file-alt" aria-hidden="true" title="File"></i> **Post Install Notes**.

The **Plugins** screen shows the installed plugin.

{{< trueimage src="images/CORE/13.0/MinioPluginInstalled.png" alt="Minio Plugin Installed" id="Minio Plugin Installed" >}}

Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand the Minio plugin details and management options.
Click <i class="fa fa-stop" aria-hidden="true" title="Stop"></i>&nbsp;**STOP** to stop the jail before making any changes.

Click <span class="material-icons">device_hub</span>&nbsp;**MOUNT POINTS** and follow the instructions in [Setting Up Jail Storage]({{< relref "SettingUpJailStorage.md" >}}) to mount the destination dataset you created in [First Steps](#first-steps).

Click <span class="material-icons">play_arrow</span>&nbsp;**START** to restart the plugin and then click <span class="material-icons">settings</span>&nbsp;**MANAGE** to go to the **MinIO Console** and log in.

{{< trueimage src="images/CORE/13.0/MinioPluginConsole.png" alt="MinIO Console" id="MinIO Console" >}}

## Migrating from S3 Service to Minio Plugin

After completing the initial install of the Minio plugin, users with an existing S3 service deployment need to migrate S3 data from the previous service deployment to the new plugin.
Migrating from the built-in S3 service to the Minio plugin could require an extended service window.

{{< enterprise >}}
Beginning in CORE 13.0-U6, Enterprise customers with the S3 service running or enabled are prevented from upgrading to the next major version.

TrueNAS Enterprise customers are strongly encouraged to contact iXsystems Support for assistance with the migration process.

{{< expand "Contacting Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

### Migration Overview
Users with the S3 service enabled must upgrade CORE to version **13.0-U6** and complete the migration process **before** upgrading to a later major version.

The migration path involves [installing a MinIO Client](#installing-the-minio-client) (`mc`) release with the required feature and function support to migrate the S3 service deployment.

Next [configure the Minio plugin](#configuring-the-minio-plugin-for-migration) deployment and then [migrate data](#migrating-data) from the MinIO S3 service deployment to it.

After migrating data, you can either create an archive of the TrueNAS S3 service or delete it.

### Installing the MinIO Client

The [MinIO Client](https://min.io/docs/minio/linux/reference/minio-mc.html) (`mc`) is command line tool with support for both filesystems and S3-compatible cloud storage services.
Install `mc` to facilitate data the migration.
Versions are available for Windows, Linux, and Mac.

This tutorial uses the Windows Subsystem for Linux (WSL), but any standard Linux distribution follows the same process.
Users should be familiar with WSL or the standard Linux CLI interface.

{{< hint type=important >}}
Installed MinIO client software version must be between **RELEASE.2022-06-26T18-51-48Z** and **RELEASE.2022-10-29T10-09-23Z**.
Newer or older versions will not work properly.
{{< /hint >}}

To install the most recent compatible version of `mc`, enter:

```
curl https://dl.min.io/client/mc/release/linux-amd64/archive/mc.RELEASE.2022-10-29T10-09-23Z \
  --create-dirs \
  -o $HOME/minio-binaries/mc

chmod +x $HOME/minio-binaries/mc
export PATH=$PATH:$HOME/minio-binaries/
```

{{< trueimage src="images/CORE/13.0/MinioClientInstall.png" alt="MinIO Client Installed" id="MinIO Client Installed" >}}

After installation completes, enter `mc --version` to confirm the compatible `mc` version is installed.

### Configuring the Minio Plugin for Migration

Due to incompatibility between versions, `mc` is unable to export configuration data from the S3 service.
Manual configuration of the Mino plugin is needed to enable data migration.

1. If you have not done so, configure the network ports for the Minio plugin.

    a. Go to **Jails** and locate the jail matching the **Jail Name** entered during [installation of the Minio plugin](#installing-the-minio-plugin).
        {{< trueimage src="images/CORE/13.0/MinioPluginJail.png" alt="Jails Screen" id="Jails Screen" >}}

    b. Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand details and management options.

    c. Click <i class="fa fa-stop" aria-hidden="true" title="Stop"></i>&nbsp;**STOP** to stop the jail before making any changes.

    d. Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i>&nbsp;**EDIT** to open the **Jails / Edit** screen. Then click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i>&nbsp;to expand **Network Properties**.
        {{< trueimage src="images/CORE/13.0/MinioPluginPortForwarding.png" alt="Network Properties NAT Port Forwarding" id="Network Properties NAT Port Forwarding" >}}

    e. Edit the **Host Port Number** values to use any currently unused ports.
        The Minio plugin must use different ports than the S3 service, which uses 9000 and 9001 by default.
        Before selecting port numbers, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/).
        Record the ports used for the Minio plugin.

    f. Click **Save**

2. Ensure that the destination dataset created in [First Steps](#first-steps) is mounted on the Minio Plugin, and not the dataset used for the S3 service.

    a. Go to **Plugins** and locate the installed Minio plugin or go to **Jails** and locate the jail matching the **Jail Name** entered during [installation of the Minio plugin](#installing-the-minio-plugin).

    b. Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand Minio details and management options.

    c. Click <span class="material-icons">device_hub</span>&nbsp;**MOUNT POINTS** and ensure configured mount point matches the destination dataset you created in [First Steps](#first-steps).
        If needed, follow the instructions in [Setting Up Jail Storage]({{< relref "SettingUpJailStorage.md" >}}) to mount the destination dataset.

3. Use the **MinIO Console** to recreate the configuration settings from the S3 service MinIO deployment in the Minio plugin deployment.

    a. Go to the MinIO web UI portal for the S3 service deployment and note existing configuration settings including users, groups, access keys, and all other MinIO settings.

    b. Go to **Plugins** and locate the installed Minio plugin or go to **Jails** and locate the jail matching the **Jail Name** entered during [installation of the Minio plugin](#installing-the-minio-plugin).

    c. Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand Minio details and management options.

    d. Click <span class="material-icons">play_arrow</span>&nbsp;**START** to start the plugin (if needed) and then click <span class="material-icons">settings</span>&nbsp;**MANAGE** to go to the **MinIO Console** and log in.

    e. Configure MinIO settings in the new deployment to match those of the existing deployment.

4. Use the **MinIO Console** to manually recreate data buckets from the existing S3 service deployment in the Minio Plugin, including rules, versioning, quotas, and locks.
    Bucket names do not need to be identical for this process, but your workflow may benefit from using identical names.

### Migrating Data

After installing and configuring the Minio plugin and installing the MinIO Client (`mc`), begin migrating data.

1. From the Linux or WSL command line, enter the command `mc alias set NEWALIAS PATH ACCESSKEY SECRETKEY` for both the origin MinIO service deployment and the destination Minio plugin deployment.

    {{< trueimage src="images/CORE/13.0/MinioClientSetAlias.png" alt="MinIO Client Set Alias" id="MinIO Client Set Alias" >}}

2. Enter `mc mirror --preserve --watch SOURCE/BUCKET TARGET/BUCKET` to begin copying data to the Minio plugin deployment.

    {{< trueimage src="images/CORE/13.0/MinioClientMirror.png" alt="MinIO Client Mirror" id="MinIO Client Mirror" >}}

    The `mc mirror` operation with the `--watch` flag does not end when the transfer is completed, as it continually looks for new files added to the source.
    The transfer rate also does not reach 0, as it is an average throughout the operation.

3. Verify the transfer has completed successfully by comparing bucket size and items through the web UI of each deployment.
    **Usage** size may vary slightly due to rounding differences between versions, but the total number of objects should be the same.

    {{< trueimage src="images/CORE/13.0/MinioPluginVerifyBuckets.png" alt="Compare Buckets to Verify Completion" id="Compare Buckets to Verify Completion" >}}

4. Use <kbd>CTRL+C</kbd> to end the `mc mirror` operation.
5. Go to **Services** and toggle the **RUNNING** S3 service to **STOPPED**.
6. If needed, edit the Minio plugin to reflect the correct port numbers using the process in [Configuring the Minio Plugin for Migration](#configuring-the-minio-plugin-for-migration), step one.
7. Configure access keys and secret keys for the Minio plugin deployment with any services using MinIO as a data storage target.
    Monitor and verify that the new deployment is operating properly.
8. (Optional) Delete the original dataset from the S3 service deployment.
    If storage capacity allows, we suggest retaining an archive the original dataset, at least until you have confirmed that the plugin deployment is fully functional.
