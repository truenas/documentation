---
---
{{< hint info >}}
As of SCALE 22.12, TrueNAS Bluefin no longer supports MS-DOS based SMB clients, or EOL OS. TrueNAS now uses Samba 4.17. Samba 4.16 announced in their release notes that they deprecated and disabled the whole SMB1 protocol as of 4.11. If needed for security purposes or code maintenance they continue to remove older protocol commands and unused dialects or those that are replaced in a more modern SMB1 version. Refer to [Samba](https://www.samba.org/samba/latest_news.html) release notes for more information.
{{< /hint >}}