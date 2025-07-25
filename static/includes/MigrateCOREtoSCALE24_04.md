&NewLine;

TrueNAS users wanting to migrate from the latest FreeBSD-based 13.0 or 13.3 CORE release to the Linux-based TrueNAS version 24.10 or later can migrate to 24.04 and earlier using the UI update process, but must clean install if migrating to later releases.
Attempting to migrate directly to 24.10 or later using the UI is not supported.

TrueNAS community users can download a copy of the <file>iso</file> for the latest maintenance release of the target major version, then follow the migration instructions in [Performing a Clean Install](/gettingstarted/migrate/migratingfromcore/#performing-a-clean-install) or use the UI update screen or download a manual update file then follow the instructions in [Updating to 24.04](/gettingstarted/migrate/migratingfromcore/#updating-to-2404) to move from the FreeBSD-based to the Linux-based version of TrueNAS.

{{< enterprise >}}
{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}
{{< /enterprise >}}
