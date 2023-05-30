---
title: "S3 Service Screen"
description: "Provides information on the the S3 service screen settings."
weight: 45
alias: 
tags:
 - scales3
 - scaleminio
 - scaleservices
---


{{< toc >}}


{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}


The **Services > S3** screen allows you to specify settings to connect to TrueNAS from a networked client system with the Minio browser, s3cmd, or S3 browser.

![S3ServiceSettingsTLS](/images/SCALE/22.12/S3ServiceSettingsTLS.png "S3 Service Options")

{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **IP Address** | Select an IP address from the dropdown list options **0.0.0.0**, **::**, or to enter the IP address that runs the S3 service. Select **0.0.0.0** to tell the server to listen on all addresses. Select the TrueNAS IP address to constrain it to a specific network. |
| **Port** | Enter the TCP port that provides the S3 service.   |
| **Console Port** | Enter a static port for the MinIO web console. Default is 9001. |
| **Access Key** | Enter the S3 access ID. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| **Secret Key** | Enter the S3 secret access key. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| **Disk** | Enter or use <iconify-icon icon="bxs:right-arrow"></iconify-icon> to the left of <span class="material-icons">folder</span> **/mnt** to browse to a directory to define the S3 file system path. |
| **Enable Browser** | Enables the S3 service web UI. Access the MinIO web UI by entering the IP address and port number separated by a colon in the browser address bar. Example: *192.168.1.0:9000*. |
| **Certificate** | Use an SSL [certificate]({{< relref "CertificatesSCALE.md" >}}) created or imported in **Credentials > Certificates** for secure S3 connections. |
| **TLS Server Hostname**  | Displays after selecting an SSL certificate. Enter the TLS server host name. Or enter a MinIO server address that can be a proxy. |
{{< /truetable >}}

{{< taglist tag="scales3" limit="10" >}}