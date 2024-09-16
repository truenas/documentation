&NewLine;

1. Select **Install/Upgrade**.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallMainScreen.png" alt="Console Setup Screen" id="Console Setup Screen" >}}

2. Select the desired install drive.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallDriveScreen.png" alt="Destination Media Screen" id="Destination Media Screen" >}}

   Select **Yes** to proceed with a clean installation of TrueNAS from the <file>.iso</file>.
   This erases the contents of the selected drive!

   {{< trueimage src="/images/SCALE/Install/SCALEInstallWarningScreen.png" alt="Install Warning Screen" id="Install Warning Screen" >}}

3. Select option **1 Administrative user (truenas_admin)** then **OK** to install TrueNAS and create the **truenas_admin** user account and password.
   TrueNAS has implemented an administrator login as a replacement for the root user login as a security hardening measure.
   The system retains root as a fallback, but it is no longer the default.
   The *truenas_admin* account has full control over TrueNAS and is used to log in to the web interface.
   
   Set a strong password and protect it.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerAuthenticationMethod.png" alt="Authentication Method Screen" id="Authentication Method Screen" >}}

   Next, enter a password for the new **truenas_admin** user.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerConsoleSetupAdminPassword.png" alt="Admin Password Screen" id="Admin Password Screen" >}}

4. Select **Yes** at the **Legacy Boot** prompt to allow the system to boot via UEFI, or select **No** if your system hardware requires legacy BIOS boot.
   Press <kbd>Enter</kbd> to begin the installation.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallLegacyBoot.png" alt="Legacy Boot Screen" id="Legacy Boot Screen" >}}

5. Select **OK** when the **Installation Succeeded** screen shows and press <kbd>Enter</kbd> to exit from the installer.