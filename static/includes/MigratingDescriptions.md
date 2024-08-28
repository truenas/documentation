&NewLine;

TrueNAS SCALE automatically renames components, such as disks and interfaces, migrated from TrueNAS 13, but does not modify the component **Description**.
For example, the **Name** of an interface identified as *igb0* in TrueNAS 13 is updated to *eno1* after migration to TrueNAS 24.04, but the **Description** *igb0* is retained.
This difference is purely cosmetic and does not affect functionality.
