---
title: "S3 for MinIO"
weight: 105
---

MinIO connections and service is configured using the **Services** [S3 screen]({{< relref "/CORE/UIReference/Services/S3Screen.md" >}}).

{{< hint warning >}}
MinIO deprecated Access key and Secret key replacing them respectively with the MINIO_ROOT USER and MINIO_ROOT_PASSWORD arguments and their values. For the ROOT_USER value, use a name up to 20 characters. For the ROOT_PASSWORD, use a string of 8 to 40 randomized characters. MinIO recommends using a long password string of unique random characters.
{{< /hint >}}

## Testing Minio Connections

When **Enable Browser** is select, test access to the MinIO Browser by opening a web browser and typing the TrueNAS IP address with the TCP port.
The port specified in **Port** must be allowed through the network firewall to permit bucket creation and file uploads.
For example: *https://192.168.0.3:9000*.

## MinIO Connection Methods

There are different methods for connecting to and using MinIO:

{{< expand "s3cmd" >}} 

Linux or macOS users must have the [s3cmd](https://s3tools.org/s3cmd) service installed before beginning this setup.
On Windows, users can also refer to [S3Express](https://www.s3express.com/) for a similar command line experience.

{{< hint ok >}}
Ubuntu or other Linux distributions can access the configuration by running command `s3cmd --configure` to walk through important settings.
{{< /hint >}}

Enter the specified access key and the secret key.
Under the **S3 Endpoint**, enter the TrueNAS IP address followed by TCP port, and reply **N** to the DNS-style bucket+hostname. 

Save the file.
On Linux, the default is in the home directory <file>\~/.s3cfg</file>.

If the connection has any issues, open <file>.s3cfg</file> again to troubleshoot.
In Ubuntu, use command `nano .s3cfg` or `vi .s3cfg` or `gedit .s3cfg` depending on the preferred text editor.
For other operating systems, .s3cfg file location and editing tools may vary. 

Scroll down to the host_bucket area and make sure the %(bucket)s. portion is removed and the address points to the *IP_address:TCP_port* for the system.

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

In the settings, select **S3 Compatible Storage** as the **Account Type**, then enter the MinIO access point similar to the command `s3cmd` setup (TrueNAS_IP_address:9000 or other port if set differently).
Select the SSL settings appropriate for the particular setup.
The default assumes SSL in S3 Browser, but for a LAN attached session, this may or may not already be set.

![AmazonS3EditAccount](/images/CORE/AmazonS3EditAccount.png)

It is possible to access, create new buckets, or upload files to created buckets.

![AmazonS3Browser](/images/CORE/AmazonS3Browser.png "S3 Browser")
{{< /expand >}}

## Additional Information

[S3 screen]({{< relref "/CORE/UIReference/Services/S3Screen.md" >}}) 