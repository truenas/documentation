---
title: "Enclosure"
description: "Provides information about the storage enclosure namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 20
aliases:
draft: false
tags:
- scaleclistorage
- scaleenclosure
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Listing Enclosures

Enter `query` to list the enclosure ID and name.

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureQuery.png" alt="Enclosure Query" id="1: Enclosure query on a system with a single enclosure." >}}

Some systems, such as the M-Series or R50BM with rear NVMe bays, have multiple enclosures.

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureQueryMultiple.png" alt="Enclosure Query" id="2: Enclosure query on a system with a multiple enclosures." >}}

You can also list enclosures using the `get_instance` command.

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureGetInstanceSingle.png" alt="Get Instance" id="3: Get instance command on a system with a single enclosure." >}}

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureGetInstanceMultiple.png" alt="Get Instance" id="4: Get instance command on a system with a multiple enclosures." >}}

## Setting Drive Slot Status

Drive slots have three possible statuses: 

* `FAULT` forces the slot into a faulted state
* `IDENTIFY` forces the slot identify light to flash
* `CLEAR` clears the `FAULT` and `IDENTIFY` statuses.

To change slot status, enter `set_slot_status enclosure_id=idofenclosure slot=slotnumber status=STATUS` where `idofenclosure` is the ID of the enclosure the slot is in, `slotnumber` is the slot you want to apply a status to and `STATUS` is the status you want to set.

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureSetSlotStatusIDENTIFY.png" alt="Set Slot Status" id="5: Setting slot status to IDENTIFY." >}}

## Changing Enclosure Labels

To change the enclosure ID and label, enter `update id=enclosure_id label=new_label` where `enclosure_id` is the enclosure you want to modify and `new_label` is the new label name.

{{< trueimage src="/images/SCALE//CLI/CLIStorageEnclosureUpdateLabel.png" alt="Update Label" id="6: Updating label to a different name." >}}

You can verify the system changed the label using the `query` or `get_instance` commands.

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaleenclosure" limit="10" title="Related Enclosure Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}