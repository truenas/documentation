&NewLine;

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Quota for this dataset**<br> **Quota for this dataset and all children** | Sets the maximum allowed space for dataset. 0 disables quotas. # the same for **This Dataset** and the **This Dataset and Child Datasets** fields. |
| **Quota warning alert at, %** | Sets the percentage value to generate a warning level [alert]({{< ref "/SCALE/TopToolbar/Alerts/AlertSettingsScreen" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Quota critical alert at, %** | Sets the percentage value to generate a critical level [alert]({{< ref "/SCALE/TopToolbar/Alerts/AlertSettingsScreen" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Reserved space for this dataset**<br> **Reserved space for this dataset and all children** | Sets a reserve of additional space for datasets that contain logs that could eventually take up all the available free space. **0** is unlimited. |
{{< /truetable >}}