---
---

If your system has active sharing configurations (SMB, NFS, iSCSI), disable these sharing services in **System Settings > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the install and starts.

Multimode configurations require a self-signed certificate. 

{{< include file="/_includes/AddMinIOCertificate.md" type="page" >}} Add a self-signed certificate for the MinIO application to use.

Create three datasets named, data1, data2 and data3. 
Do not nest these datasets under each other. Select the parent dataset, for example *apps*, before you click **Create Dataset**.
Set the **Share Type** to **apps** for each dataset. 
MinIO assigns the correct properties during the installation process so you do not need to configure the ACL or permissions. 