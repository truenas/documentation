&NewLine;

{{< hint type=important title="SCALE Administrator Accounts" >}}
Root is the default system administration account for CORE, SCALE Angelfish, and early Bluefin releases.

Users migrating from CORE to SCALE or from pre 22.12.3 releases must manually create an admin user account.
Only fresh installations using an <file>iso</file> file provide the option to create the admin user during the installation process.

SCALE systems with only the **root** user account can log in to the TrueNAS web interface as the root user and then create an admin account.
After logging in as root, TrueNAS alerts you to create the **Local Administrator** account.

System administrators should create and begin using the admin user.

<!-- Commenting out until ready to show this content for the RC.1 or the major release documentation keyword=adminRoles
SCALE 24.04 introduces administrators privileges or roles.
The root or Local Administrator user can create new administrators limit privileges according to their needs.
Predefined roles limted to read only, managing only shares, and managing only replication are available, or the Local Administrator account or root user can create custom roles and privileges to suit their needs. 
-->

As part of security hardening and to comply with Federal Information Processing standards (FIPS), iXsystems plans to completely disable root login in a future release.
{{< /hint >}}