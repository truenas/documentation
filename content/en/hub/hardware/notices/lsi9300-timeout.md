---
title: "LSI 9300-xx Firmware Update"
description: "Updating the LSI 9300-xx Firmware."
tags: ["TrueNAS Products", "errata"]
---

## Firmware Information

Servers with the LSI 9300 HBA may experience some performance issues causing the controller to reset when
using SATA HDDs.

iXsystems has worked with Broadcom to provide a firmware update that resolves the controller reset issue. If
you have the LSI 9300 HBA with firmware version 16.00.12.00 or earlier installed and would like to resolve the
occasional controller reset from this issue, follow these instructions. Please note that the firmware update is
only available from iXsystems.”

Please Note: This problem only applies to firmware versions below 16.00.12.00 and only affects SATA drives.
SAS drives are not affected.

<object data="https://www.truenas.com/docs/files/LSI9300xxFirmwareUpdatev1_0.pdf" type="application/pdf" width="95%" height="1000">
  There was an error displaying this PDF, <a href="https://www.truenas.com/docs/files/LSI9300xxFirmwareUpdatev1_0.pdf">please click here to download the file.</a>
</object>
