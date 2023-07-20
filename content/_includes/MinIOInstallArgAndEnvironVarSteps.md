---
---

The MinIO application defaults include all the arguments you need to deploy a container for the application. 

Enter a name in **Root User** to use as the MinIO access key. Enter a name of five to 20 characters in length, for example *admin* or *admin1*. 
Next enter the **Root Password** to use as the MinIO secret key. Enter eight to 40 random characters, for example *MySecr3tPa$$w0d4Min10*.

{{< trueimage src="/images/SCALE/23.10/InstallMinioS3Screen.png" alt="Install Minio (S3) Screen" id="4: Install Minio (S3) Screen" >}}

Click **Add** twice to enter these two **MinIO Image Environment** variables, **MINIO_ROOT_USER** and **MINIO_ROOT_PASSWORD**. 
These are the user credentials to access MinIO. For example, enter *admin* in **MINIO_ROOT_USER** and a strong password in **MINIO_ROOT_PASSWORD**.

Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}