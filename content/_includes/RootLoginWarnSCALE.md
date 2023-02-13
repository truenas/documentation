---
---

{{< hint warning >}}

Enterprise customers should contact [iXsystems Support](https://www.ixsystems.com/support/) before making any changes to their system.

In SCALE Bluefin, the root administrator login is being deprecated for security hardening and to comply with Federal Information Processing Standards (FIPS).

All users should [create the local administrator account]({{< relref "/content/SCALE/SCALETutorials/Credentials/ManageLocalUsersSCALE.md" >}}) with all the permissions it requires, and stop using root.

Note that in SCALE Bluefin when the root user password is disabled, only the **admin** user account can log in to the TrueNAS web interface. 

As iXsystems plans to completely disable root login in a future release, system administrators should create and begin using a new root-level user before this function goes away.
{{< /hint >}}
