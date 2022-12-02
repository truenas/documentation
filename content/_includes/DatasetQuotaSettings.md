---
---

| Setting | Description |
|---------|-------------|
| **Quota for this dataset**<br> **Quota for this dataset and all children** | Enter a value to define the maximum allowed space for the dataset. **0** disables quotas. |
| **Quota warning alert at, %** | Enter a percentage value to generate a warning level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Quota critical alert at, %** | Enter a percentage value to generate a critical level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Reserved space for this dataset**<br> **Reserved space for this dataset and all children** | Enter a value to reserve additional space for datasets that contain logs which could eventually take up all the available free space. **0** is unlimited. |