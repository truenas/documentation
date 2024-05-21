&NewLine;

TrueNAS SCALE automatically renames components, such as disks and interfaces, migrated from TrueNAS CORE, but does not modify the component **Description**.
For example, the **Name** of an interface identified as *igb0* in TrueNAS CORE is updated to *eno1* after migration to TrueNAS SCALE, but the **Description** *igb0* is retained.
This difference is purely cosmetic and does not affect functionality.
