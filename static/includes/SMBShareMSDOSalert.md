&NewLine;

{{< hint type=important title="SMB1 Protocol Deprecation" >}}
As of TrueNAS 22.12 (Bluefin) and later, TrueNAS does not support SMB client operating systems that are labeled by their vendor as End of Life or End of Support.
This means MS-DOS (including Windows 98) clients, among others, cannot connect to TrueNAS SMB servers.

The upstream Samba project that TrueNAS uses for SMB features [notes in the 4.11 release](https://www.samba.org/samba/history/samba-4.11.0.html) that the SMB1 protocol is deprecated and warns portions of the protocol might be further removed in future releases.
Administrators should work to phase out any clients using the SMB1 protocol from their environments.
{{< /hint >}}
