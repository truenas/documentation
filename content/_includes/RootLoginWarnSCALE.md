---
---

{{< hint type=important >}}

Starting with SCALE Bluefin 22.12.0, root account logins are deprecated for security hardening and to comply with Federal Information Processing Standards (FIPS).
All TrueNAS users should [create a local administrator account]({{< relref "/content/SCALE/SCALETutorials/Credentials/ManageLocalUsersSCALE.md" >}}) with all required permissions and begin using it to access TrueNAS.
When the root user password is disabled, only an administrative user account can log in to the TrueNAS web interface.

A future update of TrueNAS SCALE will permanently disable *root* account access.
{{< /hint >}}