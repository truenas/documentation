---
---
{{< hint info >}}
As of SCALE 22.12 (Bluefin), TrueNAS SCALE SMB no longer supports End of Life (EoL) Windows clients, including MS-DOS.
The Samba project, which TrueNAS SCALE integrates to provide SMB sharing features, had previously deprecated the SMB1 protocol for security concerns. TrueNAS SCALE 22.12 (Bluefin) updated Samba to version 4.17, which eliminated SMB1 support entirely. Client systems that can only use the SMB1 protocol for SMB shares are no longer capable of connecting to SMB shares created in TrueNAS SCALE 22.12 or later. Refer to the [Samba](https://www.samba.org/samba/latest_news.html) release notes for more information.
{{< /hint >}}
