---
---

{{< hint warning >}}
As of SCALE 22.12 (Bluefin), MS-DOS SMB1 clients cannot connect to TrueNAS SCALE Bluefin. TrueNAS SCALE SMB does not support End-of-Life (EoL) Windows clients, including MS-DOS. 

The Samba project, which TrueNAS SCALE uses to provide SMB sharing features, has deprecated the SMB1 protocol for security concerns.
The Samba 4.16 release notes announced that they deprecated and disabled the whole SMB1 protocol as of 4.11. 
If needed, for security purposes or code maintenance, Samba continues to remove older protocol commands and unused dialects or those that are replaced in more modern SMB1 versions, refer to [Samba](https://www.samba.org/samba/latest_news.html) release notes for more information.

TrueNAS now uses Samba 4.17. TrueNAS still has SMB1 protocol support but:

* MS-DOS-based SMB clients cannot connect to TrueNAS Bluefin. 
* MS-DOS-based SMB clients are no longer able to connect to any TrueNAS servers. 
* SMB clients determined to be end-of-life (EOL) by their vendor are not supported. 

Administrators should work to phase out any clients using the SMB1 protocol from their environments.

Client systems that can only use the SMB1 protocol for SMB shares are no longer capable of connecting to SMB shares created in TrueNAS SCALE 22.12 or later. 
Refer to the Samba release notes for more information.
{{< /hint >}}
