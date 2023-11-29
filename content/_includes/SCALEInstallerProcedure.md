&NewLine;

1. Select **Install/Upgrade**.

   ![SCALEInstallUpgrade](/images/SCALE/23.10/SCALEInstallMainScreen.png "SCALE Install Main Screen")

2. Select the desired install drive.

   ![InstallDrive](/images/SCALE/23.10/SCALEInstallDriveScreen.png "Install Drive Screen")

   Select **Yes** to proceed with a fresh installation of TrueNAS SCALE from the <file>.iso</file>.
   This erases the contents of the selected drive!

   ![InstallWarning](/images/SCALE/23.10/SCALEInstallWarningScreen.png "Install Warning Screen")

3. When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.
   Select **Create Swap** and press <kbd>Enter</kbd>.

   ![InstallPartition](/images/SCALE/23.10/SCALEInstallPartitionScreen.png "Install Partition Screen")

4. Select option **1 Administrative user (admin)** then **OK** to install SCALE and create the admin user account.
   SCALE Bluefin has implemented rootless login. Create an admin account and password. The system retains root as a fallback but it is no longer the default.
   This account has full control over TrueNAS and is used to log in to the web interface.
   Set a strong password and protect it.
   We do not recommend selecting **3 Configure using Web UI**.

   ![SCALEInstallerConsoleSetupAdminAccount](/images/SCALE/23.10/SCALEInstallerConsoleSetupAdminAccount.png "Admin User Screen")

   Next, enter a password for the new admin user.

   ![SCALEInstallerConsoleSetupAdminPassword](/images/SCALE/23.10/SCALEInstallerConsoleSetupAdminPassword.png "Install Password Screen")

5. Select **Boot via UEFI** at the **TrueNAS Boot Mode** prompt, then select **OK** and press <kbd>Enter</kbd> to begin the installation.
