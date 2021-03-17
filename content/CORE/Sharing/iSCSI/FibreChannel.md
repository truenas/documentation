---
title: "Fibre Channel"
weight: 20
---

{{< toc >}}

Fibre Channel is a high-speed data transfer protocol providing in-order, lossless delivery of raw block data.
Fibre Channel is primarily used to connect computer data storage to servers in storage area networks in commercial data centers.
The Fibre Channel protocol is fast, cost effective, and reliable over a wide variety of storage workloads.

{{< expand "Which TrueNAS Products can use Fibre Channel?" "v" >}}

* [TrueNAS R-Series](https://www.truenas.com/r-series/)(4x16 Gbps)
* [TrueNAS X-10](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS X-20](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS M-40](https://www.truenas.com/m-series/)(4x16 Gbps)
* [TrueNAS M-50](https://www.truenas.com/m-series/)(4x16 Gbps or 2x32 Gbps)
* [TrueNAS M-60](https://www.truenas.com/m-series/)(4x32 Gbps)

{{< /expand >}}

{{< hint info >}}
This is a TrueNAS Enterprise feature.
TrueNAS systems licensed for Fibre Channel have *Fibre Channel Ports* added to **Sharing > Block Shares (iSCSI)**.

![Sharing ISCSI Fibre Channel Ports](/images/CORE/12.0/SharingISCSIFibreChannelPorts.png "Sharing ISCSI Fibre Channel Ports")
{{< /hint >}}

## Fibre Channel ISCSI Share Example

{{< hint info >}}
**Initiators** and **Authorized Access** screens only apply to iSCSI and can be ignored when configuring Fibre Channel.
{{< /hint >}}

Go to **Storage > Pools**.
Find an existing pool, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; and *Add zvol* to create a new zvol.

![StoragePoolsZvolFibreEnterprise](/images/CORE/12.0/StoragePoolsZvolFibreEnterprise.png "Creating a Zvol for Fibre Channel")

Configure these tabs in **Sharing > Block Shares (iSCSI)**:

{{< tabs "iSCSI Config Tabs" >}}
{{< tab "Portals" >}}
If a portal with listen interface `0.0.0.0:3260` does not exist, click *Add* and add this portal.
{{< /tab >}}

{{< tab "Initiators Groups" >}}

| Name | Description |
|------|-------------|
| Connected Initiators | Initiators currently connected to the system. Shown in IQN format with an IP address. Set initiators and click an -> (arrow) to add the initiators to either the Allowed Initiators or Authorized Networks lists. Clicking Refresh updates the Connected Initiators list. |
| Allowed Initiators | Initiators allowed access to this system. Enter an [iSCSI Qualified Name (IQN)](https://tools.ietf.org/html/rfc3720#section-3.2.6) and click + to add it to the list. Example: iqn.1994-09.org.freebsd:freenas.local |
| Authorized Networks | Network addresses allowed use this initiator. Each address can include an optional [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) netmask. Click + to add the network address to the list. Example: `192.168.2.0/24`. |
| Description | Any notes about initiators. |
{{< /tab >}}

{{< tab "Authorized Access" >}}

| Name | Description |
|------|-------------|
| Group ID | Allow different groups to be configured with different authentication profiles. Example: all users with a group ID of 1 will inherit the authentication profile associated with Group 1. |
| User | User account to create for CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| Secret  | User password. Must be at least 12 and no more than 16 characters long. |
| Peer User | Only entered when configuring mutual CHAP. Usually the same value as User. |
| Peer Secret | Mutual secret password. Required when Peer User is set. Must be different than the Secret. |
{{< /tab >}}

{{< tab "Targets" >}}
*Add* a new target.

![Sharing ISCSI Targets Add Fibre](/images/CORE/12.0/SharingISCSITargetsAddFibre.png "ISCSI Targets: Fibre")

Enter or select values specific to your use case for the *Target Name*, *Target Alias*, *Target Mode*, and *Portal Group*. The *Initiator Group ID* selects which existing initiator group has access to the target.  Options for the *Authentication Method* are None, Auto, CHAP, or Mutual CHAP. *Authentication Group Number* can be set to none or an integer. This value represents the number of existing authorized accesses.

{{< hint info >}}
An extra *Target Mode* option appears after going to *Targets* and clicking *ADD*.
This new option is to select whether the target to create is iSCSI, Fibre Channel, or both.

The *Target* [Reporting]({{< relref "/CORE/Administration/Reporting.md" >}}) tab provides Fibre Channel port bandwidth graphs.
{{< /hint >}}
{{< /tab >}}
{{< tab "Extents" >}}
*Add* a new extent.

![ISCSIExtentsAddFibre](/images/CORE/12.0/ISCSIExtentsAddFibre.png "ISCSI Extents Add Fibre")

| Name | Description |
|------|-------------|
| Name | Name of the extent. If the Extent size is not 0, it cannot be an existing file within the pool or dataset. |
| Description | Notes about this extent. |
| Enabled | Set to enable the iSCSI extent. |
| Extent Type | Device provides virtual storage access to zvols, zvol snapshots, or physical devices. File provides virtual storage access to a single file. |
| Device | Only appears if Device is selected. Select the unformatted disk, controller, or zvol snapshot. |
| Logical Block Size | Leave at the default of 512 unless the initiator requires a different block size. |
| Disable Physical Block Size Reporting | Set if the initiator does not support physical block size values over 4K (MS SQL). |
| Enable TPC | Set to allow an initiator to bypass normal access control and access any scannable target. This allows xcopy operations which are otherwise blocked by access control. |
| Xen initiator compat mode | Set when using Xen as the iSCSI initiator. |
| LUN RPM | Do NOT change this setting when using Windows as the initiator. Only needs to be changed in large environments where the number of systems using a specific RPM is needed for accurate reporting statistics. |
| Read-only | Set to prevent the initiator from initializing this LUN. |

{{< /tab >}}
{{< tab "Associated Targets" >}}
*Add* a new Associated Target.

![ISCSIAssocTargetAddFibre](/images/CORE/12.0/ISCSIAssocTargetAddFibre.png "ISCSI Assoc Target: Add Fibre")

Select values for *Target* and *Extent*.  The LUN ID is  a value between 0 and 1023. Some initiators expect a value below 256. Leave this field blank to automatically assign the next available ID.
{{< /tab >}}
{{< tab "Fibre Channel Ports" >}}
Click <i class="fa fa-chevron-right"></i>&nbsp; to expand the option, select options as presented under test data, and *Save*.
{{< /tab >}}
{{< /tabs >}}

The iSCSI share does not work when the service is not turned on.
To turn on the iSCSI service, go to **Services** and toggle **iSCSI**.

## NPIV (N_Port ID Virtualization)

NPIV allows the administrator to use switch zoning to configure each virtual port as if it was a physical port in order to provide access control.
This is important in an environment with a mix of Windows systems and virtual machines in order to prevent automatic or accidental reformatting of targets containing unrecognized filesystems.
It can also be used to segregate data; for example, to prevent the engineering department from accessing data from the human resources department.
Refer to the switch documentation for details on how to configure zoning of virtual ports.

To create virtual ports on the TrueNAS system, go to **System > Tunables** and click *ADD*.
Enter these options:

* *Variable* : `input hint.isp.X.vports`, replacing *X* with the number of the physical interface.
* *Value* : input the number of virtual ports to create. There cannot be more then *125* SCSI target ports, including all physical Fibre Channel ports, all virtual ports, and all configured combinations of iSCSI portals and targets.
* *Type* : make sure *loader* is selected.

![SystemTunablesFibre](/images/CORE/11.3/SystemTunablesFibre.png "Virtual Ports for Fibre Channel")

In the example shown, two physical interfaces were each assigned *4* virtual ports.
Two tunables were required, one for each physical interface.
After the tunables are created, the configured number of virtual ports appears in **Sharing > Block Shares (iSCSI) > Fibre Channel Ports** screen so they can be associated with targets.
They are also advertised to the switch so zoning can be configured on the switch.

After a virtual port has been associated with a target, it is added to the *Target* tab of [Reporting]({{< relref "/CORE/Administration/Reporting.md" >}}) where its bandwidth usage can be viewed.
