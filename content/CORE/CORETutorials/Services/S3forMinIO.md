---
title: "S3 for MinIO"
description: "Provides information on how to configure S3 for MinIO on your TrueNAS."
weight: 105
tags:
- cores3
- cores3minio
---

MinIO connections and service is configured using the **Services** [S3 screen]({{< relref "/CORE/UIReference/Services/S3Screen.md" >}}).

{{< hint type=important >}}
MinIO deprecated Access key and Secret key. MinIO now utilizes MINIO_ROOT USER and MINIO_ROOT_PASSWORD arguments and their values. For the ROOT_USER value, use a name up to 20 characters. For the ROOT_PASSWORD, use a string of 8 to 40 randomized characters. MinIO recommends using a long password string of unique random characters.
{{< /hint >}}

## Testing Minio Connections

To test access to the MinIO Browser, select **Enable Browser**. Open a web browser and type the TrueNAS IP address with the TCP port. Example: *https://192.168.0.3:9000*.  Allow the port specified in **Port** through the network firewall. This permits bucket creation and file uploads.

## MinIO Connection Methods

Different methods are used for connecting to and using MinIO:

{{< expand "s3cmd" >}} 

Linux or macOS users must have the [s3cmd](https://s3tools.org/s3cmd) service installed before beginning this setup.
On Windows, users can also refer to [S3Express](https://www.s3express.com/) for a similar command line experience.

{{< hint type=tip >}}
The `s3cmd --configure` command is available for Ubuntu or other Linux distributions. Using this command you can configure important settings step by step.
{{< /hint >}}

Enter the specified access key and the secret key.
Under the **S3 Endpoint**, enter the TrueNAS IP address followed by TCP port, and reply **N** to the DNS-style bucket+hostname. 

Save the file.
On Linux, the default is in the home directory <file>\~/.s3cfg</file>.

If the connection has any issues, open <file>.s3cfg</file> again to troubleshoot.
In Ubuntu, use command `nano .s3cfg` or `vi .s3cfg` or `gedit .s3cfg` depending on the preferred text editor.
For other operating systems, .s3cfg file location and editing tools may vary. 

Scroll down to the host_bucket area. Make sure the %(bucket)s. portion is removed. The IP address should point to the *IP_address:TCP_port* for the system.

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

Poll the buckets using command `s3cmd ls` to see the buckets created with the MinIO Browser.

For more information on using MinIO with command `s3cmd`, see https://docs.minio.io/docs/s3cmd-with-minio.html and https://s3tools.org/s3cmd.
{{< /expand >}}

{{< expand "S3 Browser (Windows)" >}}
On Windows PCs, the S3 Browser is another convenient way to connect to the MinIO S3 on a TrueNAS system.

To set it up, first [install the S3 Browser](https://s3-browser.en.uptodown.com/windows).

After installation completes, add a new account. 

![AmazonS3NewAccount](/images/CORE/AmazonS3NewAccount.png "S3 Browser: New Account")

In the S3 Browser settings, select **S3 Compatible Storage** as the **Account Type**. Enter the MinIO access point. Example: (TrueNAS_IP_address:9000 or other port).
Select the SSL settings appropriate for the particular setup.
The default assumes SSL in S3 Browser, but for a LAN attached session, this may or may not already be set.

![AmazonS3EditAccount](/images/CORE/AmazonS3EditAccount.png)

It is possible to access, create new buckets, or upload files to created buckets.

![AmazonS3Browser](/images/CORE/AmazonS3Browser.png "S3 Browser")
{{< /expand >}}

{{< taglist tag="cores3" limit="10" >}}
 