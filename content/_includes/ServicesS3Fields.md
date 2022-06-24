---
---

**S3 Configuration Options**

| Name | Description |
|------|-------------|
| **IP Address** | Select an IP address from the dropdown list options **0.0.0.0**, **::**, or enter the IP address that runs the S3 service. Select **0.0.0.0** to tell the server to listen on all addresses. Select the TrueNAS IP address to constrain it to a specific network. |
| **Port** | Enter a static port for the MinIO web console. Default is 9001. |
| **Console Port** | Enter the TCP port that provides the S3 service. |
| **Access Key** | Enter the S3 access ID. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| **Secret Key** | Enter the S3 secret access key. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| **Disk** | Browse to a directory to define the S3 file system path. |
| **Enable Browser** | Enables the S3 service web UI. Access the MinIO web UI by entering the IP address and port number separated by a colon in the browser address bar. Example: *192.168.1.0:9000*. |
| **Certificate** | Use an SSL [certificate]({{< relref "CertificatesSCALE.md" >}}) created or imported in **Credentials > Certificates** for secure S3 connections. |
| **TLS Server Hostname / TLS Server URI**  | Displays if using an SSL certificate. Enter the MinIO server proxy-able address. |
