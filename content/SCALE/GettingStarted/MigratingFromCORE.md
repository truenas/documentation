---
title: "Migrating from TrueNAS CORE"
weight: 11
---

{{< toc >}}

To migrate from TrueNAS CORE to SCALE, use a TrueNAS SCALE <file>.iso</file> file. This is currently the only method to migrate a CORE system to SCALE.

{{< hint danger >}}
#### Migrating GELI-encrypted Pools to SCALE
TrueNAS SCALE is based on Linux, which does not support FreeBSD GELI encryption.
If you have GELI-encrypted pools on your system that you plan to import into SCALE, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* sidegrading to SCALE. 
{{< /hint >}}

Start by saving the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) to a USB drive (detailed in the Physical Hardware tab). Plug the USB drive into the CORE system that you want to sidegrade and boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.
  
When the SCALE console setup screen appears, select *Install/Upgrade*.

![SCALEUpgrade1](/images/SCALE/SCALEUpgrade1.png "Install/Upgrade SCALE")

The installer asks if you want to preserve your existing configuration or start with a fresh installation. We recommend selecting *Upgrade Install* when migrating from CORE to SCALE to keep your configuration data. Then select *Install in new boot environment*.

![SCALEUpgrade2](/images/SCALE/SCALEUpgrade2.png "Preserve Existing Configuration")

![SCALEUpgrade3](/images/SCALE/SCALEUpgrade3.png "Install in new boot environment")

{{< hint warning>}}
Although TrueNAS attempts to keep most of your CORE configuration data when upgrading to SCALE, some CORE-specific items do not transfer.
GELI Encrypted pools, NIS data, AFP shares, metadata, jails, tunables, and boot environments do not migrate from CORE to SCALE. Init/shutdown scripts transfer, but can break and should be reviewed before use.
{{< /hint >}}

After choosing to install in new boot environment, the installer will warn you that you you will be installing SCALE into the boot pool previously used for CORE. Select *Yes*.

![SCALEUpgrade4](/images/SCALE/SCALEUpgrade4.png "Proceed with the upgrade")

Once the installation completes, you will be asked to reboot the system and remove the USB with the SCALE <file>.iso<file> file. 
  
When TrueNAS SCALE boots, you may need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/Network/_index.md" >}}) so that you may access the GUI.
