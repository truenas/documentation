&NewLine;

{{< hint type=important title="SCALE Administrator Accounts" >}}
Root is the default system administration account for CORE, SCALE Angelfish, and early Bluefin releases.

Users migrating from CORE to SCALE or from pre 22.12.3 releases must manually create an admin user account.
Only fresh installations using an <file>iso</file> file provide the option to create the admin user during the installation process.

SCALE systems with only the **root** user account can log in to the TrueNAS web interface as the root user.
After logging in as root, TrueNAS alerts you to create the local administrator account.

System administrators should create and begin using the admin login, and then disable the root user password.

SCALE 24.04 (Dragonfish) introduces administrators privileges and role-based administrator accounts.
The root or local administrator user can create new administrators with limited privileges based on their needs.
Predefined administrator roles are read only, share admin, and the default full access local administrator account.
<!-- The local administrator or root user can create custom admin roles and privileges to suit individual use cases. -->

As part of security hardening and to comply with Federal Information Processing standards (FIPS), iXsystems plans to completely disable root login in a future release.
{{< /hint >}}