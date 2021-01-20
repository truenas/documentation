---
title: "ASRock Rack C2750D4I BMC Watchdog Issue"
description: "FAQ about the 2nd generation FreeNAS Mini motherboard firmware issue."
---

(*Original Publish Date: September 19, 2017*)

iXsystems has verified a firmware-related issue with the Board Management Controller (BMC) on the ASRock Rack C2750D4I motherboard used in the second generation FreeNAS Mini and FreeNAS Mini XL. In December of 2016, we provided a software fix starting in FreeNAS 9.10.1-U3 that mitigates this issue and protects your board from experiencing damage. ASRock Rack has since provided a [BMC firmware update](https://www.asrockrack.com/general/productdetail.asp?Model=C2750D4I#Download) (Version: 00.30.00) that resolves the issue. For more information about the issue and our plan to address it please read below.

## What exactly is this BMC or “watchdog” issue?

The BMC contains a hardware watchdog that starts a timer at 300 seconds. There is a software daemon inside FreeNAS 9.x called “watchdogd” that pings the hardware watchdog every 10 seconds to check and make sure the system is in an alive state. If the hardware watchdog receives the signal from the watchdogd daemon, it will reset the timer and start counting down again.

On these particular motherboards, the BMC creates a backup copy of its configuration every time the watchdogd daemon resets the hardware watchdog. This process is not how a watchdog timer is designed to function. This constant re-writing in the BMC expedites the wear of the BMC’s onboard flash and, in some cases, may lead to motherboard failure. The updated BMC firmware version 00.30.00 and later corrects this behavior and resolves the issue.

## How do I protect my system?

The best way to protect your system is to update the BMC firmware from ASRock Rack’s website to the newest version: [ASRock Rack C2750D4I](https://www.asrockrack.com/general/productdetail.asp?Model=C2750D4I#Download) BMC firmware update (Version: 00.30.00).

## Is the data in my FreeNAS Mini safe?

Don’t worry! This issue only affects the BMC on the motherboard and should not cause any loss of data or affect your storage disks.

## Is this issue dangerous?

No. The affected system will simply fail to boot. It is not related to overheating or other hazardous types of damage.

## Is this issue specific to FreeNAS?

No. This issue applies to all ASRock Rack C2750D4I and C2550D4I (which is not used in the FreeNAS Mini) motherboards.

## Which models of the FreeNAS Mini are affected?

This issue affects only the second generation of the FreeNAS Mini and FreeNAS Mini XL. The first generation of the FreeNAS Mini is not affected by this issue.

## How do I know which generation of the FreeNAS Mini I have?

Second generation FreeNAS Minis will have a FreeNAS badge on the front of the case and a lock immediately to the right. Another way to tell is by looking at the USB ports. The first generation FreeNAS Mini will have USB ports visible on the front of the machine. On the second generation FreeNAS Mini, the front USB ports are hidden behind the lockable door.

## Are there instructions for updating the BMC firmware?

Yes. You can view the instructions on how to update your system to the latest [BMC firmware update by IPMI](https://www.asrockrack.com/support/faq.asp?id=6) (Version: 00.30.00).

## Will iXsystems replace my FreeNAS Mini motherboard under warranty if I experience this issue? What if my warranty is expired?**

iXsystems is proud to stand behind its products. We’re extending the warranty on all second generation FreeNAS Mini motherboards shipped before February 2017 to a total of three (3) years. Any FreeNAS Minis shipped in February and after will have the BMC firmware update installed that fixes this issue and will have our standard one year warranty.

## What should I do if I think my FreeNAS Mini has stopped working because of this issue?

[Contact iXsystems Customer Support](/hub/initial-setup/support/#support-in-truenas-enterprise) and we will be glad to assist you!

## How does the return process work and how long does it take?

We offer an advanced replacement option if you have experienced a failure related to your FreeNAS Mini motherboard. This means that we will ship you a motherboard ahead of receiving the defective motherboard.

## What if I didn’t get an answer to my question in this FAQ?

[Contact iXsystems Customer Support](/hub/initial-setup/support/#support-in-truenas-enterprise) and we will be glad to assist you!

Thank you for your loyalty as an iXsystems customer. We stand behind the FreeNAS Mini and the FreeNAS Mini XL and will continue to support our customers.
