---
---

As part of security hardening and improving feature maintainability, SCALE Bluefin 22.12.3 deprecated several TrueNAS systems services in preparation for full removal in SCALE 23.10 Cobia.
Users with TrueNAS SCALE Bluefin installed should review the deprecated features table and migrate any currently used services before upgrading to TrueNAS SCALE Cobia 23.10.
Beginning in SCALE Bluefin 22.12.3, the SCALE web interface generates an alert when a deprecated service is in use.

{{< enterprise >}}
To avoid any possible service interruptions, customers with a TrueNAS Enterprise licensed system and Silver or Gold -tier support are prevented from upgrading to TrueNAS SCALE Cobia 23.10 until a guided upgrade with iXsystems Support is scheduled.
{{< /enterprise >}}

These software features are affected:

{{< truetable >}}
| Feature | Migration Path |
|---------|----------------|
| Dynamic DNS | Deploy the **DDNS Updater** application and port any existing configuration from **System Settings > Services > Dynamic DNS** into the deployed application. |
| OpenVPN Client | The current service is deprecated with no replacement available. |
| OpenVPN Server | This service is deprecated as several solutions are now available in the Apps menu. Choose a new VPN solution from the Apps menu and configure to provide similar functionality. |
| Rsyncd Server | Determine if enabling an rsync server is necessary on the system. Rsync tasks that have **Rsync Mode** set to **SSH** or are externally configured with SSH don't need the rsync service enabled. The **rsyncd** application is available when TrueNAS must be used to create insecure non-SSH rsync tasks. |
| S3 | Deploy the **minio** application from the TrueNAS Enterprise catalog and port any existing configuration from **System Settings > Services > S3** to the deployed application. |
| TFTP | Deploy the **tftpd-hpa** application and port any existing configuration from **System Settings > Services > TFTP** to the deployed application. |
| WebDAV | Deploy the **webdav** application and port any existing configuration from **Shares > WebDAV** and **System Settings > Services > WebDAV** to the deployed application. |
{{< /truetable >}}
