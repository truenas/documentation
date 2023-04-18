---
title: "Configuring S3 Service"
description: "This article provides information on configuring S3 service in SCALE."
weight: 45
alias: 
tags:
 - scales3
 - scaleminio
 - scaleservices
---


{{< toc >}}



S3 allows you to connect to TrueNAS from a networked client system with the MinIO browser, s3cmd, or S3 browser.

{{< expand "Background" "v" >}}
S3 is an object storage protocol that many major cloud providers like Amazon Web Services™ use.
On TrueNAS, the service is another way to store files and can be viewed with a web browser.
Because S3 is the de facto standard for cloud-based storage, setting up an S3 service allows organizations or online application developers to use TrueNAS to replace or archive expensive cloud storage.
{{< /expand >}}

## Setting up the S3 service

{{< hint type=important >}}
Having large numbers of files (>100K for instance) in a single bucket with no sub-directories can harm performance and cause stability issues.
{{< /hint >}}

Go to the **System Settings > Services** and find **S3**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > S3** screen to configure the service.

![S3ServiceSettings](/images/SCALE/22.12/S3ServiceSettings.png "S3 Service Options")

First, select a clean dataset, one that does not have existing data files. If you do not have a clean dataset, [create a dataset]({{< relref "DatasetsSCALE.md" >}}).
MinIO manages files as objects that you *cannot* mix with other dataset files.

Configure the remaining options as needed in your environment and start the service after saving any changes.

## Making MinIO Connections

When **Enable Browser** is selected, test the MinIO browser access by opening a web browser and typing the TrueNAS IP address with the TCP port.
You must allow the port entered in the **Services > S3** screen **Port** through the network firewall to permit creating buckets and uploading files.
Example: `https://192.168.0.3:9000`.

MinIO supports two different connection methods.

### Using s3cmd

Linux or macOS users must have the [s3cmd](https://s3tools.org/s3cmd) service installed before beginning this setup.
On Windows, users can also refer to [S3Express](https://www.s3express.com/) for a similar command-line experience.

{{< hint type=tip >}}
Ubuntu or other Linux distributions can access the configuration by running `s3cmd --configure` to walk through critical settings.
{{< /hint >}}

Enter the specified access key and the secret key.
Enter the TrueNAS IP address followed by TCP port under `S3 Endpoint`, and reply `N` to the DNS-style bucket+hostname. 

Save the file.
On Linux, the default is in the home directory <file>\~/.s3cfg</file>.

If the connection has issues, open <file>.s3cfg</file> again to troubleshoot.
In Ubuntu, use `nano .s3cfg` or `vi .s3cfg` or `gedit .s3cfg` depending on the preferred text editor.
For other operating systems, <file>.s3cfg</file> file location and editing tools might vary. 

Scroll down to the host_bucket area and ensure the configuration removed the `%(bucket)s.` portion and the address points to the *IP_address:TCP_port* for the system.

**Correct Example**
```
host_base = `192.168.123.207:9000`
host_bucket = `192.168.123.207:9000`
```

**Incorrect Example**
```
host_base = `192.168.123.207`
host_bucket = `%(bucket)s.192.168.123.207`
```

Poll the buckets using `s3cmd ls` to see the buckets created with the MinIO browser.

For more information on using MinIO with `s3cmd`, see https://docs.minio.io/docs/s3cmd-with-minio.html and https://s3tools.org/s3cmd.

### Using S3 Browser (Windows)

The Windows PC S3 browser is another convenient way to connect to the MinIO S3 from TrueNAS.

To set it up, first [install the S3 browser](https://s3-browser.en.uptodown.com/windows).

After installation completes, add a new account. 

![AmazonS3NewAccount](/images/CORE/AmazonS3NewAccount.png "S3 Browser: New Account")

In the settings, select **S3 Compatible Storage** as the **Account Type**, then enter the MinIO access point similar to the `s3cmd` setup (TrueNAS_IP_address:9000 or other port if set differently).
Select the SSL settings appropriate for the particular setup.
The S3 browser assumes SSL by default, but it can be unset for a LAN attached session.

![AmazonS3EditAccount](/images/CORE/AmazonS3EditAccount.png)

It is possible to access, create new buckets, or upload files to created buckets.

![AmazonS3Browser](/images/CORE/AmazonS3Browser.png "S3 Browser")


{{< taglist tag="scales3" limit="10" >}}