---
title: "Troubleshooting Heat Issues"
weight: 50
---

{{< toc >}}

This article demonstrates how to diagnose and fix overheating issues in the FreeNAS Mini and Mini XL. While unlikely, overheating can occur when the Mini is kept in a non-optimal environment for operation, such as a room with high dust accumulation or poor ventilation. Incorrect BIOS settings might also cause overheating.

## Symptoms

When overheating, the Mini might display these symptoms:

* Powers on but fails to boot.

* Shuts down unexpectedly.

* Refuses to turn on.

* Displays `Potential hardware failure` message during boot.

## Fixes

Multiple measures can be taken to fix or prevent overheating issues.

### Adjust the BIOS

Follow these steps to adjust the BIOS fan settings for the Mini.

1. Power on or reboot the system.

2. At the start of the boot process, press the <kbd>F2</kbd> or <kbd>Delete</kbd> key several times until the `BIOS Main menu` appears:

   ![BIOSMainMenu](/images/Hardware/LegacyBIOSMainMenu.png)

3. Press the <kbd>right arrow</kbd> to go to the `H/W Monitor` tab:

   ![BIOSMainMenu](/images/Hardware/LegacyHWMonitor.png)

4. Use the <kbd>down arrow</kbd> to scroll to the **REAR_FAN2** setting, then press <kbd>Enter</kbd>.

5. Scroll down to **Full On** and press <kbd>Enter</kbd>.

### Choosing the right environment

The FreeeNAS Mini is designed to be kept in a typical office environment where the room temperature does not exceed *77° F (25° C)*. When choosing the right environment for the Mini, follow these guidelines:

* Keep room temperature between *68° F* and *77° F* (*20° C* and *25° C*) with a maximum of *50%* relative humidity (RH).

* The air vents on the front of the Mini and the fan on the back must be unobstructed to provide adequate airflow.

* Do not operate the Mini in a closet or room without adequate air circulation.

* Keep the environment clean. Excess dust and dirt can block vents and disrupt fan performance.

* Keep the Mini away from direct sunlight or any other heat sources.
