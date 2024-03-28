&NewLine;

1. Select **Install/Upgrade**.

   ![SCALEInstallUpgrade](/images/SCALE/Install/SCALEInstallMainScreen.png "SCALE Install Main Screen")

2. Select the desired install drive.

   ![InstallDrive](/images/SCALE/Install/SCALEInstallDriveScreen.png "Install Drive Screen")

   Select **Yes** to proceed with a clean installation of TrueNAS SCALE from the <file>.iso</file>.
   This erases the contents of the selected drive!

   ![InstallWarning](/images/SCALE/Install/SCALEInstallWarningScreen.png "Install Warning Screen")

3. (Optional) Select **Create Swap** and press <kbd>Enter</kbd>.
   When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.

   ![InstallPartition](/images/SCALE/Install/SCALEInstallPartitionScreen.png "Install Partition Screen")

4. Select option **1 Administrative user (admin)** then **OK** to install SCALE and create the admin user account and password.
   SCALE has implemented the administrator login as a replacement for the root user login as a security hardening measure.
   The system retains root as a fallback but it is no longer the default.
   The admin account has full control over TrueNAS and is used to log in to the web interface.
   Set a strong password and protect it.

   ![SCALEInstallerConsoleSetupAdminAccount](/images/SCALE/Install/SCALEInstallerConsoleSetupAdminAccount.png "Admin User Screen")

   Next, enter a password for the new admin user.

   ![SCALEInstallerConsoleSetupAdminPassword](/images/SCALE/Install/SCALEInstallerConsoleSetupAdminPassword.png "Install Password Screen")

5. Select **Boot via UEFI** at the **TrueNAS Boot Mode** prompt, then select **OK** and press <kbd>Enter</kbd> to begin the installation.
