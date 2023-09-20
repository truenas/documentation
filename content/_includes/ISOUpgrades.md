&NewLine;

Start by plugging the USB drive with the saved [SCALE ISO file](https://www.truenas.com/download-tn-scale/) into a USB port on the TrueNAS system to upgrade and then boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen displays, select **Install/Upgrade**.

{{< trueimage src="/images/SCALE/Install/SCALEInstallMainScreen.png" alt="Console Setup Install/Upgrade" id="Console Setup Install/Upgrade" >}}

Next, select your TrueNAS boot disk.
Make sure this is the same boot disk previously used when TrueNAS was first installed.

{{< trueimage src="/images/SCALE/Install/SCALEInstallDriveScreen.png" alt="Select the Boot Drive" id="Select the Boot Drive" >}}

The installer asks if you want to preserve your existing configuration or start with a fresh installation.
Select **Upgrade Install** to keep the current system configuration in place when the new version installs.

{{< trueimage src="/images/SCALE/Install/SCALEInstallUpgradeFresh.png" alt="Preserve Existing Configuration" id="Preserve Existing Configuration" >}}

Then select **Install in new boot environment**.

{{< trueimage src="/images/SCALE/Install/SCALEInstallUpdateMethodSelection.png" alt="Install in New Boot Environment" id="Install in New Boot Environment" >}}

After choosing to install in new boot environment, the installer warns the boot disk can not be used for sharing data and requests confirmation.
Select **Yes** to continue with the upgrade.

{{< trueimage src="/images/SCALE/Install/SCALEUpgrade4.png" alt="Proceed with the Upgrade" id="Proceed with the Upgrade" >}}

After the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.
