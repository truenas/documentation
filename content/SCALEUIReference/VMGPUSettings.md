&NewLine;

{{< expand "GPU Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hide from MSR** | Select to enable the VM to hide the GPU from the Microsoft Reserved Partition (MSR). |
| **Ensure Display Device** | Select to ensure that the guest always has access to a video device. Required for headless installations like Ubuntu server for the guest to operate properly. Leave the checkbox clear for cases where want to use a graphic processing unit (GPU) passthrough and do not want a display device added. |
| **GPUs** | Select a physical GPU on your system from the dropdown list to use for the VM. |
{{< /truetable >}}
{{< /expand >}}
