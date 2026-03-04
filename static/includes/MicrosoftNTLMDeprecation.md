&NewLine;

{{< hint type=info title="Microsoft NTLM Network Authentication Changes" >}}
Microsoft is deprecating NTLM network authentication in a staged process.
Windows 11 version 24H2, Windows Server 2025, and later versions have removed NTLMv1 network authentication.
See [Upcoming changes to NTLMv1 in Windows 11 version 24H2 and Windows Server 2025](https://support.microsoft.com/en-us/topic/upcoming-changes-to-ntlmv1-in-windows-11-version-24h2-and-windows-server-2025-c0554217-cdbc-420f-b47c-e02b2db49b2e) for more information.
Microsoft also plans to disable all NTLM authentication by default in a future major Windows release.
See [Advancing Windows Security: Disabling NTLM by Default](https://techcommunity.microsoft.com/blog/windows-itpro-blog/advancing-windows-security-disabling-ntlm-by-default/4489526) for more information.

Enterprise and Active Directory deployments are not affected by either change.
TrueNAS SMB deployments that use Active Directory rely on Kerberos authentication and are unaffected by these changes.
Active Directory remains the recommended configuration for business and enterprise SMB deployments.

Home and workgroup deployments that use local TrueNAS accounts are affected as follows:

- The **NTLMv1 Auth** setting in the TrueNAS SMB service has no effect for Windows 11 (version 24H2 and later) or Windows Server 2025 clients, which no longer send NTLMv1.
  This setting might still be relevant for legacy or non-Windows devices that use NTLMv1.
- Windows clients using NTLMv2 (standard for workgroup and local account SMB access) currently connect without issue.
  These clients will lose SMB access when Microsoft enforces the full NTLM disable-by-default in a future Windows release.
  macOS, Linux, older Windows versions, and network-attached devices such as printers and MFPs are not affected.
  When that change takes effect, re-enabling NTLM in Windows security policy is a temporary workaround.

TrueNAS plans to add local Kerberos (KDC) support for local account authentication in a future release, dependent on upstream development in MIT Kerberos and Samba.
{{< /hint >}}
