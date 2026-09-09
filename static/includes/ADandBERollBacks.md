&NewLine;

When the system is joined to Active Directory and you roll back to (activate) an earlier boot environment, or in the case where you migrated from a FreeBSD-based version to a current Debian-Linux version of TrueNAS and then need to revert back to FreeBSD-based, this can result in desynchronization of the system account password in AD between the different environments.
The directory service-stored secret moves forward with upgrades, while the rolled-back boot environment retains the old one.
If desynchronization occurs, you might see a Kerberos credentials not valid error message.

To avoid possible issues, leave AD, then rollback or revert to the earlier version, and then rejoin AD.

To recover from the error, leave and then rejoin Active Directory.
