&NewLine;

1. Select **Install/Upgrade**.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallMainScreen.png" alt="Console Setup Screen" id="Console Setup Screen" >}}

2. Select the desired install drive.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallDriveScreen.png" alt="Destination Media Screen" id="Destination Media Screen" >}}

   Select **Yes** to proceed with a clean installation of TrueNAS SCALE from the <file>.iso</file>.
   This erases the contents of the selected drive!

   {{< trueimage src="/images/SCALE/Install/SCALEInstallWarningScreen.png" alt="Install Warning Screen" id="Install Warning Screen" >}}

3. Select option **1 Administrative user (admin)** then **OK** to install SCALE and create the admin user account and password.
   SCALE has implemented the administrator login as a replacement for the root user login as a security hardening measure.
   The system retains root as a fallback, but it is no longer the default.
   The admin account has full control over TrueNAS and is used to log in to the web interface.
   Set a strong password and protect it.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerConsoleSetupAdminAccount.png" alt="Authentication Method Screen" id="Authentication Method Screen" >}}

   Next, enter a password for the new admin user.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallerConsoleSetupAdminPassword.png" alt="Admin Password Screen" id="Admin Password Screen" >}}

4. (Optional) Select **Yes** and press <kbd>Enter</kbd>.
   When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallPartitionScreen.png" alt="Swap Screen" id="Swap Screen" >}}

5. Select **Yes** at the **Legacy Boot** prompt to allow the system to boot via UEFI, or select **No** if your system hardware requires legacy BIOS boot. Press <kbd>Enter</kbd> to begin the installation.

   {{< trueimage src="/images/SCALE/Install/SCALEInstallLegacyBoot.png" alt="Legacy Boot Screen" id="Legacy Boot Screen" >}}
