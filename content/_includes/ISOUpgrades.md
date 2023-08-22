---
---

Start by plugging the USB drive with the saved [SCALE ISO file](https://www.truenas.com/download-tn-scale/) into a USB port on the TrueNAS system to upgrade and then boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen displays, select **Install/Upgrade**.

![SCALEInstallUpgrade](/images/SCALE/22.12/SCALEInstallMainScreen.png "SCALE Install/Upgrade")

Next, select your TrueNAS boot disk.
Make sure this is the same boot disk previously used when TrueNAS was first installed.

![InstallDrive](/images/SCALE/22.12/SCALEInstallDriveScreen.png "Select the boot drive")

The installer asks if you want to preserve your existing configuration or start with a fresh installation.
Select **Upgrade Install** to keep the current system configuration in place when the new version installs.
Then select **Install in new boot environment**.

![InstallFresh](/images/SCALE/22.12/SCALEInstallUpgradeFresh.png "Preserve Existing Configuration")

![InstallUpdateMethodSelection](/images/SCALE/22.12/SCALEInstallUpdateMethodSelection.png "Install in new boot environment")

After choosing to install in new boot environment, the installer warns the boot disk can not be used for sharing data and requests confirmation.
Select **Yes** to continue with the upgrade.

![SCALEUpgrade4](/images/SCALE/22.12/SCALEUpgrade4.png "Proceed with the upgrade")

After the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.