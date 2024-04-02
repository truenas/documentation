&NewLine;

{{< hint type=important >}}
TrueNAS must be joined to Active Directory or have at least one local SMB user before creating an SMB share. When creating an SMB user, ensure that **Samba Authentication** is enabled.
You cannot access SMB shares using the root user, TrueNAS built-in user accounts, or those without **Samba Authentication** selected.
{{< /hint >}}
