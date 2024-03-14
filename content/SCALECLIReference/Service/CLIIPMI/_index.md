---
title: "IPMI"
description: "Provides information about the service ipmi namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 50
draft: false
aliases:
tags:
 - ipmi
---

## IPMI Namespace

The **ipmi** namespace has four commands and is based on IPMI management functions found in the SCALE API and web UI.
It provides access to ipmi service management methods through the **ipmi** commands.

## IPMI Commands

The following **ipmi** commands allow you to view and edit ipmi service properties.

You can enter commands from the main CLI prompt or from the ipmi namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Chassis Command

The `chassis` command allows you to toggle IPMI identify light and view IPMI service settings.

{{< expand "Using the Chassis Command">}}
#### Description
The `chassis` command has one required property, `identify`, and one optional property, `info`, described in **Viewing IPMI Service Settings** below.
`identify` has one property, `verb`, used to toggle the IPMI light on and off.
`verb` has two values, `ON` or `OFF`.
Enter `identify`, then enter the `verb` property argument using `=` to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

#### Usage
From the CLI prompt, enter:

<code>service ipmi chassis identify verb=<i>ON/OFF</i></code>

Where *ON* and *OFF* toggle the IPMI light on and off.

{{< expand "Command Example" "v" >}}
````
service ipmi chassis identify verb=ON
````
{{< /expand >}}
{{< /expand >}}

{{< expand "Viewing IPMI Service Settings">}}
#### Description
Use the `chassis` command `info` property to view IPMI service settings.
The `info` default value is `{}`. 
Enter the command string with the default value then press <kbd>Enter</kbd>.
The command returns a table of settings when successful.

#### Usage
From the CLI prompt, enter:

`service ipmi chassis info`

{{< expand "Command Example" "v" >}}
````
service ipmi chassis info
+------------------------+---------------+
|           system_power | on            |
|         power_overload | false         |
|              interlock | inactive      |
|            power_fault | false         |
|    power_control_fault | false         |
|   power_restore_policy | Always on     |
|       last_power_event | unknown       |
|      chassis_intrusion | inactive      |
|    front_panel_lockout | inactive      |
|            drive_fault | false         |
|      cooling/fan_fault | false         |
| chassis_identify_state | Indefinite on |
+------------------------+---------------+
````
{{< /expand >}}
{{< /expand >}}

### MC Command

The `mc` command allows you to view information on your management controller (MC).

{{< expand "Using the mc command">}}
#### Description
The `mc` command requires the `info` property.
`info` has no property arguments.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table of MC information when successful.

#### Usage
From the CLI prompt, enter:

`service ipmi mc info`

{{< expand "Command Example" "v" >}}
````
service ipmi mc info
+-----------------------------------------+-----------------------------------+
|                               device_id | 32                                |
|                         device_revision | 1                                 |
|                             device_sdrs | unsupported                       |
|                       firmware_revision | 1.71                              |
|                        device_available | yes (normal operation)            |
|                            ipmi_version | 2.0                               |
|                           sensor_device | supported                         |
|                   sdr_repository_device | supported                         |
|                              sel_device | supported                         |
|                    fru_inventory_device | supported                         |
|                     ipmb_event_receiver | supported                         |
|                    ipmb_event_generator | supported                         |
|                                  bridge | unsupported                       |
|                          chassis_device | supported                         |
|                         manufacturer_id | Super Micro Computer Inc. (10876) |
|                              product_id | 2398                              |
| auxiliary_firmware_revision_information | 00000011h                         |
+-----------------------------------------+-----------------------------------+
````
{{< /expand >}}
{{< /expand >}}

### Sel Command

The `sel` command manages the IPMI System Event Log (SEL).

{{< expand "Using the SEL Command">}}
#### Description
The `sel` command has three optional properties, `clear`, `elist`, and `info`, but can only use one at a time.
See **SEL Properties** below for details.
Enter the command string then press <kbd>Enter</kbd>.
The command returns completion percentages and a table of SEL information when successful.

{{< expand "SEL Properties" "v" >}}
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `clear`  | Clears the SEL. Clears the IMPI system event log. |
| `elist`  | Queries the SEL extended list. Queries the IPMI system event log extended list. |
| `info`   | Queries general information about the SEL. Returns general information about the IPMI system event log. |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>service ipmi sel <i>property</i></code>

Where *property* is the SEL property you want to run.

{{< expand "Command Example" "v" >}}
````
service ipmi sel info
[0%] ...
[78%] Enumerating general extended event log info...
[100%] Parsing general extended event log complete...
+----------------------------------------+----------------------+
|                            sel_version | 1.5                  |
|                  number_of_log_entries | 68                   |
|                   free_space_remaining | 8880 bytes           |
|                 recent_erase_timestamp | Post-Init 0 s        |
| get_sel_allocation_information_command | supported            |
|                    reserve_sel_command | supported            |
|          partial_add_sel_entry_command | unsupported          |
|                     delete_sel_command | unsupported          |
|    events_dropped_due_to_lack_of_space | No                   |
|    number_of_possible_allocation_units | 512                  |
|                   allocation_unit_size | 20 bytes             |
|        number_of_free_allocation_units | 444                  |
|                     largest_free_block | 444 allocation units |
|                    maximum_record_size | 20 allocation units  |
+----------------------------------------+----------------------+
````
{{< /expand >}}
{{< /expand >}}

### Sensors Command

The `sensors` command allows you to view IPMI sensor data.

{{< expand "Using the Sensors Command">}}
#### Description
The `sensors` command has required property, `query`.
`query` does not require a property argument.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table of SEL information when successful.

#### Usage
From the CLI prompt, enter:

`service ipmi sensors query`

{{< expand "Command Example" "v" >}}
```
service ipmi sensors query
+------+-----------------+-------------+----------+---------+-----------+-----------------------+----------------+--------------------+--------------------+----------------+-----------------------+-------+
| id   | name            | type        | state    | reading | units     | lower-non-recoverable | lower-critical | lower-non-critical | upper-non-critical | upper-critical | upper-non-recoverable | event |
+------+-----------------+-------------+----------+---------+-----------+-----------------------+----------------+--------------------+--------------------+----------------+-----------------------+-------+
| 4    | CPU Temp        | Temperature | Nominal  | 38.00   | degrees C | 5.00                  | 5.00           | 10.00              | 85.00
       | 90.00           | 90.00       | ok                             |
| 71   | PCH Temp        | Temperature | Nominal  | 57.00   | degrees C | 5.00                  | 5.00           | 10.00              | 85.00
       | 90.00           | 105.00      | ok                             |
| 138  | System Temp     | Temperature | Nominal  | 41.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 205  | Peripheral Temp | Temperature | Nominal  | 46.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 272  | VRMCpu Temp     | Temperature | Nominal  | 47.00   | degrees C | 5.00                  | 5.00           | 10.00              | 95.00
       | 100.00          | 105.00      | ok                             |
| 339  | VRMABC Temp     | Temperature | Nominal  | 54.00   | degrees C | 5.00                  | 5.00           | 10.00              | 95.00
       | 100.00          | 105.00      | ok                             |
| 406  | VRMDEF Temp     | Temperature | Nominal  | 46.00   | degrees C | 5.00                  | 5.00           | 10.00              | 95.00
       | 100.00          | 105.00      | ok                             |
| 473  | FAN1            | Fan         | Nominal  | 4000.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 540  | FAN2            | Fan         | Nominal  | 1200.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 607  | FAN3            | Fan         | Nominal  | 1600.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 674  | FAN4            | Fan         | Nominal  | 1600.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 741  | FAN5            | Fan         | N/A      | N/A     | RPM       | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 808  | FANA            | Fan         | Nominal  | 6800.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 875  | FANB            | Fan         | Nominal  | 6500.00 | RPM       | 300.00                | 500.00         | 700.00             | 25300.00           | 25400.00       | 25500.00              | ok |
| 942  | FANC            | Fan         | N/A      | N/A     | RPM       | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 1009 | DIMMA1 Temp     | Temperature | Nominal  | 40.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 1076 | DIMMA2 Temp     | Temperature | N/A      | N/A     | degrees C | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 1143 | DIMMB1 Temp     | Temperature | Nominal  | 43.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 1210 | DIMMC1 Temp     | Temperature | N/A      | N/A     | degrees C | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 1277 | DIMMD1 Temp     | Temperature | Nominal  | 41.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 1344 | DIMMD2 Temp     | Temperature | N/A      | N/A     | degrees C | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 1411 | DIMME1 Temp     | Temperature | Nominal  | 41.00   | degrees C | 5.00                  | 5.00           | 10.00              | 80.00
       | 85.00           | 90.00       | ok                             |
| 1478 | DIMMF1 Temp     | Temperature | N/A      | N/A     | degrees C | N/A                   | N/A            | N/A                | N/A
       | N/A             | N/A         | n/a                            |
| 1545 | 12V             | Voltage     | Nominal  | 12.23   | Volts     | 10.22                 | 10.34          | 10.83              | 12.96
       | 13.33           | 13.45       | ok                             |
| 1612 | 5VCC            | Voltage     | Nominal  | 5.15    | Volts     | 4.16                  | 4.28           | 4.52               | 5.60
       | 5.72            | 5.81        | ok                             |
| 1679 | 3.3VCC          | Voltage     | Nominal  | 3.28    | Volts     | 2.74                  | 2.82           | 2.98               | 3.71
       | 3.77            | 3.84        | ok                             |
| 1746 | VBAT            | Battery     | N/A      | N/A     | N/A       | N/A                   | N/A            | N/A                | N/A
```
{{< /expand >}}
{{< /expand >}}
