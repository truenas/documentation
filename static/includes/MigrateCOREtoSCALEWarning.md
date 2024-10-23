&NewLine;

{{< hint type=warning title="One-Way Operation" >}}
Migrating TrueNAS from CORE to SCALE is a one-way operation.
Attempting to activate or roll back to a CORE boot environment can break the system.

Upgrade your CORE system to the latest publicly-available 13.0-U6.1 (or later) release before attempting to migrate from CORE to SCALE.

The only path to side-grade or migrate from CORE 13.0-U6.2 or CORE 13.3 to SCALE is to install or upgrade to 24.04 (latest).
Later releases of SCALE do not support migrations from CORE releases. These migrations cannot be done, and either fail or result in error conditions that cannot be resolved.
Download the <file>iso</file> for the [latest maintenace release of SCALE 24.04](https://download.truenas.com/TrueNAS-SCALE-Dragonfish/24.04.2.3/) and follow the instruction articles in this section.
{{< /hint >}}
