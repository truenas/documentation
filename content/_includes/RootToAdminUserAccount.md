&NewLine;

{{< hint type=important title="SCALE Administrator Accounts" >}}
Root is the system administration account for CORE and the Angelfish and early Bluefin releases of SCALE.
Users migrating from CORE to SCALE or from the pre 22.12.3 release of SCALE Bluefin must manually create an admin user account.
Only fresh installations using an <file>iso</file> file provide the option to create the admin user during the installation process.

SCALE Bluefin systems with only the **root** user account can log in to the TrueNAS web interface as the root user and then create the admin account.
After logging in as root, TrueNAS alerts you to create the local administrator account.

As part of security hardening and to comply with Federal Information Processing standards (FIPS), iXsystems plans to completely disable root login in a future release.

System administrators should create and begin using a new admin user.
{{< /hint >}}