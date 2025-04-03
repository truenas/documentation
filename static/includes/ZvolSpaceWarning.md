&NewLine;

{{< hint type=important >}}
Storage space you allocate to a zvol is only used by that volume, it does not get reallocated back to the total storage capacity of the pool or dataset where you create the zvol if it goes unused. 
Plan your anticipated storage need before you create the zvol to avoid creating a zvol that exceeds your storage needs for this volume. 
Do not assign capacity that exceeds what is required for TrueNAS to operate properly. For more information, see [TrueNAS Hardware Guide]({{< ref "SCALEHardwareGuide" >}}) for CPU, memory and storage capacity information.
{{< /hint >}}