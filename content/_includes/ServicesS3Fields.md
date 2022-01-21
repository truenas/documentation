---
---

**S3 Configuration Options**

| Name | Description |
|------|-------------|
| IP Address | Enter the IP address that runs the S3 service. *0.0.0.0* tells the server to listen on all IPv4 addresses. *::* allows the same for any IPv6 address. Select the TrueNAS IP address to constrain it to a specific network. |
| Port | Enter a static port for the MinIO web console. Default is 9001. |
| Console Port | Enter the TCP port that provides the S3 service. |
| Access Key | Enter the S3 access ID. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| Secret Key | Enter the S3 secret access key. See [Access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) for more information. |
| Disk | Browse to a directory to define the S3 filesystem path. |
| Enable Browser | Enables the S3 service web UI. Access the MinIO web UI by entering the IP address and port number separated by a colon in the browser address bar. Example: *192.168.1.0:9000*. |
| Certificate | Use an SSL [certificate]({{< relref "CertificatesSCALE.md" >}}) created or imported in **Credentials > Certificates** for secure S3 connections. |
| TLS Server URI  | If using an SSL certificate, enter the MinIO server's proxy-able address |