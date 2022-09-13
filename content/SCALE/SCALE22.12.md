---
title: "SCALE 22.12 Bluefin"
aliases:
 - /scale/scalenextversion/
weight: 1000
---

### Bluefin Unstable Nightly Images (Unstable Branch, developers and brave testers)

[ISO Installation Files](https://download.truenas.com/truenas-scale-bluefin-nightly/ "SCALE Angelfish Nightly .iso files")

[Manual Update File](https://update.freenas.org/scale/TrueNAS-SCALE-Bluefin-Nightlies/TrueNAS-SCALE-Bluefin-Nightly.update)


## Tips and Tricks

### Alderlake GPU Support

TrueNAS SCALE Bluefin include Linux Kernel 5.15 which can enable Alderlake GPU acceleration by using the following boot loader tunable and rebooting:

`midclt call system.advanced.update '{"kernel_extra_options": "i915.force_probe=4690" }'`

NOTE: 4690 can be replaced with your specific Alderlake GPU version.

