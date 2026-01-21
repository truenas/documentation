{{< hint type=important title="NetBIOS Name Requirements" >}}
NetBIOS names (workgroup, domain, and computer names) are limited to 15 characters and cannot contain the following characters: `\ / : * ? " < > |`

Microsoft and RFC 852 define reserved words that should not be used as NetBIOS names. TrueNAS 25.04 and later enforce these restrictions through validation.

{{< expand "View complete list of reserved words" "v" >}}
The following words cannot be used as NetBIOS names (case-insensitive):

Microsoft Reserved Words:
ANONYMOUS, AUTHENTICATED USER, BATCH, BUILTIN, DIALUP, DOMAIN, ENTERPRISE, INTERACTIVE, INTERNET, LOCAL, NETWORK, NULL, PROXY, RESTRICTED, SELF, SERVER, USERS, WORLD

RFC 852 Reserved Words:
GATEWAY, GW, TAC
{{< /expand >}}

If you encounter validation errors when joining Active Directory or configuring SMB services, verify that your NetBIOS Name, Workgroup, and Domain Name comply with these requirements.
{{< /hint >}}
