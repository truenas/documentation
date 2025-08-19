&NewLine;

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hide from MSR** | Hides the GPU from the model-specific registers (MSRs). MSRs are the low-level CPU registers that enable the hardware features necessary for GPU virtualization to work properly. They control processor features and behaviors, store configuration settings, provide hardware information, and enable/disable specific GPU capabilities. In GPU passthrough configurations, MSRs control PCIe settings for direct GPU access. VMware ESXi uses MSRs for vGPU configuration, Proxmox/QEMU MSRs enable GPU passthrough, and Hyper-V MSRs control RemoteFX/GPU-P features. |
| **Ensure Display Device** | Ensures the guest always has access to a video device. For headless installations like an Ubuntu server, this is required for the guest to operate properly. However, for cases where a consumer wants to use GPU passthrough and does not want a display device added, do not enable this option. |
| **GPUs** | Sets the GPU to the option selected on the dropdown list. |
{{< /truetable >}}
{{< /expand >}}