&NewLine;

{{< hint type=warning title="One-Way Operation" >}}
Migrating TrueNAS from CORE to SCALE is a one-way operation.
Attempting to activate or roll back to a CORE boot environment can break the system.

Upgrade your CORE system to the latest publicly-available 13.0-U6.2 (or later) release before attempting to migrate from CORE to SCALE.

The only path to side-grade or migrate from CORE 13.0-U6.2 or CORE 13.3 to SCALE is to install or upgrade to 24.10 (earlier).
Later releases of SCALE do not support migrations from CORE releases. These migrations cannot be done, and either fail or result in error conditions that cannot be resolved.
Download the <file>iso</file> for the latest maintenance release of TrueNAS 24.04 (see [Software Releases](https://www.truenas.com/docs/softwarereleases/)) and follow the instruction articles in this section.
Enterprise customers should [contact Support](https://www.truenas.com/docs/scale/gettingstarted/migrate/migratecorehatoscaleha/) for assistance with migrating.
{{< /hint >}}
