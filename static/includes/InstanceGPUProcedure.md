(Optional) Configure **GPU Devices** to attach available GPU devices, enabling the instance to utilize hardware acceleration for graphics or computation tasks.

  {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceGPU.png" alt="GPU Devices" id="GPU Devices" >}}

  Select one or more devices.

  {{< hint type="note" title="Supported GPUs" >}}
  TrueNAS does not have a list of approved GPUs at this time but TrueNAS does support various GPU from Nvidia, Intel, and AMD.
  As of 24.10, TrueNAS does not automatically install NVIDIA drivers. Instead, users must manually install drivers from the UI. For detailed instructions, see [Installing NVIDIA Drivers](https://www.truenas.com/docs/truenasapps/#installing-nvidia-drivers) in TrueNAS Apps.
  {{< /hint >}}
