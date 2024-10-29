&NewLine;

{{< hint type=warning title="One-Way Operation" >}}
Enterprise customers should [contact iX Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/) for assistance with migrating.

Migrating TrueNAS from CORE to SCALE is a one-way operation.
Attempting to activate or roll back to a CORE boot environment can break the system.

Upgrade your CORE system to the latest publicly-available 13.0-U6.2 (or later) release before attempting to migrate from CORE to SCALE.

You can use the UI update screens to migrate from CORE 13.0-U6.2 or CORE 13.3 to SCALE 24.04 (or earlier).
Later releases of SCALE do not support migrations from CORE releases.
These migrations cannot be done, and either fail or result in error conditions that cannot be resolved.

Alternately, fresh installing TrueNAS from an <file>.iso</file> file and restoring a previously downloaded 13.0 or 13.3 configuration file can migrate a system to 24.04.
This requires careful review of the system settings and recreation of TrueNAS administrator accounts after the configuration file restore process completes.

Download the <file>iso</file> or <file>.update</file> for the latest maintenance release of TrueNAS 24.04 (see [Software Releases](https://www.truenas.com/docs/softwarereleases/)) and follow the instructions in this section.
{{< /hint >}}
