---
title: "Device"
description: "Provides information about the system device namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 45
aliases:
draft: false
---

## Device Namespace

The **device** namespace has two commands.
It provides access to device information through the **device** commands.

## Device Commands

The following **device** commands allow you to view properties for devices in your system.

You can enter commands from the main CLI prompt or from the device namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Get_Info Command

The `get_info` command returns details for a specified device type.

{{< expand "Viewing Device Details">}}
#### Description
The `get_info` command has one property, `type`.
Enter the `type` property argument using `=` to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table of device details when successful.

{{< expand "Device Types" "v" >}}
{{< truetable >}}
| Type     | Description                                   |
|----------|-----------------------------------------------|
| `SERIAL` | Returns information for system serial ports.  |
| `DISK`   | Returns information for system storage disks. |
| `GPU`    | Returns information for system GPUs.          |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system device get_info type=<i>TYPE</i></code>

Where:
* *TYPE* is the device type you want details for.

{{< expand "Command Example" "v" >}}
```
system device get_info type=SERIAL
+-------+-----------------------------+------------+-------------+-------+
| name  | location                    | drivername | description | start |
+-------+-----------------------------+------------+-------------+-------+
| ttyS1 | handle=\_SB_.PC00.LPC0.UAR2 | uart       | 16550A      | 0x2f8 |
| ttyS0 | handle=\_SB_.PC00.LPC0.UAR1 | uart       | 16550A      | 0x3f8 |
+-------+-----------------------------+------------+-------------+-------+
```
{{< /expand >}}
{{< /expand >}}

### GPU_PCI_IDs_Choices Command

The `gpu_pci_ids_choices` retrieves choices for GPU PCI IDs in the system.

{{< expand "Retrieving GPU PCI ID Choices">}}
#### Description
The `gpu_pci_ids_choices` command has no required properties.
Enter the commands then press <kbd>Enter</kbd>.
The command returns a table of GPU PCI ID choices when successful.

#### Usage
From the CLI prompt, enter:

`system device gpu_pci_ids_choices`

{{< expand "Command Example" "v" >}}
```
system device gpu_pci_ids_choices
+------------------------------------------------+--------------+
| ASPEED Technology, Inc. ASPEED Graphics Family | 0000:03:00.0 |
+------------------------------------------------+--------------+
```
{{< /expand >}}
{{< /expand >}}
