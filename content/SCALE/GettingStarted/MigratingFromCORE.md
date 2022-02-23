---
title: "Migrating from TrueNAS CORE"
weight: 11
---

{{< toc >}}

{{< hint danger >}}
Migrating TrueNAS from CORE to SCALE is a one-way operation. Attempting to activate or roll back to a CORE boot environment can break the system.
{{< /hint >}}

{{< hint danger >}}
#### Migrating GELI-encrypted Pools to SCALE
TrueNAS SCALE is based on Linux, which does not support FreeBSD GELI encryption.
If you have GELI-encrypted pools on your system that you plan to import into SCALE, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* migrating to SCALE.
{{< /hint >}}

{{< tabs "Migration Methods" >}}
{{< tab "ISO File" >}}

Start by saving the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) to a USB drive (see the **Physical Hardware tab** in [Installing SCALE]({{< relref "InstallingSCALE.md" >}})). Plug the USB drive into the CORE system that you want to sidegrade and boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen appears, select *Install/Upgrade*.

![SCALEUpgrade1](/images/SCALE/SCALEUpgrade1.png "Install/Upgrade SCALE")

The installer asks if you want to preserve your existing configuration or start with a fresh installation. We recommend selecting *Upgrade Install* when migrating from CORE to SCALE to keep your configuration data. Then select *Install in new boot environment*.

![SCALEUpgrade2](/images/SCALE/SCALEUpgrade2.png "Preserve Existing Configuration")

![SCALEUpgrade3](/images/SCALE/SCALEUpgrade3.png "Install in new boot environment")

{{< hint warning>}}
Although TrueNAS attempts to keep most of your CORE configuration data when upgrading to SCALE, some CORE-specific items do not transfer.
GELI Encrypted pools, NIS data, metadata, jails, tunables, and boot environments do not migrate from CORE to SCALE. AFP shares also do not transfer, but can be migrated into an SMB share with AFP compatability enabled. Init/shutdown scripts transfer, but can break and should be reviewed before use.
The CORE netcli utility is also swapped for a new CLI utility that is used for the Console Setup Menu and other commands issued in a CLI.
{{< /hint >}}

After choosing to install in new boot environment, the installer warns that SCALE installs into the boot pool previously used for CORE. Select *Yes*.

![SCALEUpgrade4](/images/SCALE/SCALEUpgrade4.png "Proceed with the upgrade")

Once the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/Network/_index.md" >}}) to enable GUI accessibility.

{{< /tab >}}

{{< tab "Manual Update File" >}}

Start by downloading the SCALE manual update file.
Confirm that the TrueNAS system is on the latest public, 12.0-U8 or better, release.

Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

Click **INSTALL MANUAL UPDATE FILE**.
![SCALEManualSidegrade](/images//SCALE/SidegeadeInstallManualUpdate.png "Install the Manual Upgrade")

Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.
This is recommended but it not required.
![SCALEConfigSidegrade](/images/SCALE/SidegradeSaveConfig.png "Save the Config file")

Select a **Temporary Storage Location** (Memory Device or a Pool) for the manual update file.
Click **Choose File** and select the <file>TrueNAS-SCALE.update</file> file you downloaded.
![SCALEFileSidegrade](/images/SCALE/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")
Then click **APPLY UPDATE**.
  
After the update completes, reboot the system.
![SCALESidegradeReboot](/images/SCALE/SidegradeRestart.png  "Reboot to Finish")
  
{{< /tab >}}
{{< /tabs >}}
