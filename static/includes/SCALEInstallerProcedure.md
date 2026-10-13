&NewLine;

1. Select **Install/Upgrade**.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallMainScreen.png" alt="Console Setup Screen" id="Console Setup Screen" >}}

2. Select the drive to use as the boot device. Press the <kbd>Spacebar</kbd> to select a drive, and select more than one drive to mirror the boot device for redundancy.
   The installer recommends SATA, SAS, or NVMe flash media and discourages USB flash drives.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallDriveScreen.png" alt="Destination Media Screen" id="Destination Media Screen" >}}

   Select **Yes** to proceed with a clean installation of TrueNAS from the <file>.iso</file>.
   This erases the contents of the selected drive!

   {{< trueimage src="/images/SCALE/Install/SCALEInstallWarningScreen.png" alt="Install Warning Screen" id="Install Warning Screen" >}}

3. Select how to authenticate to the web interface. Select **Administrative user (truenas_admin)** then **OK** to create the **truenas_admin** user account and password during installation.
   Select **Configure using Web UI** to set up the administrator account the first time you open the web interface.
   TrueNAS has implemented an administrator login as a replacement for the root user login as a security hardening measure.
   The system retains root as a fallback, but it is no longer the default.
   The *truenas_admin* account has full control over TrueNAS and is used to log in to the web interface.
   
   Set a strong password and protect it.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerAuthenticationMethod.png" alt="Authentication Method Screen" id="Authentication Method Screen" >}}

   Next, enter a password for the new **truenas_admin** user.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerConsoleSetupAdminPassword.png" alt="Admin Password Screen" id="Admin Password Screen" >}}

4. If you booted the installer in legacy BIOS mode, a **Legacy Boot** prompt asks whether to allow EFI boot. Select **Yes** for systems with newer components such as NVMe devices, or select **No** if your system hardware requires the legacy BIOS boot workaround.
   This prompt does not show when you booted the installer in UEFI mode.
   Press <kbd>Enter</kbd> to begin the installation.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallLegacyBoot.png" alt="Legacy Boot Screen" id="Legacy Boot Screen" >}}

5. Select **OK** when the **Installation Succeeded** screen shows and press <kbd>Enter</kbd> to exit from the installer.