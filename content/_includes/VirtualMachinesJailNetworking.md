---
---

**Jail Networking**

If you have installed TrueNAS in VMware, you need functional networking to create a jail.

For the jail to have functional networking, you have to change the VMware settings to allow Promiscuous, MAC address changes, and Forged Transmits.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Promiscuous Mode** | When enabled at the virtual switch level, objects defined within all portgroups can receive all incoming traffic on the vSwitch. |
| **MAC Address Changes** | When set to **Accept**, ESXi accepts requests to change the effective MAC address to a different address than the initial MAC address. |
| **Forged Transmits** | When set to **Accept**, ESXi does not compare source and effective MAC addresses. |
{{< /truetable >}}
