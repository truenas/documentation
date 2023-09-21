&NewLine;

1. Select **Install/Upgrade**.
   
   ![SCALEInstallUpgrade](/images/SCALE/Install/SCALEInstallMainScreen.png "SCALE Install Main Screen")

2. Select the desired install drive.
   
   ![InstallDrive](/images/SCALE/Install/SCALEInstallDriveScreen.png "Install Drive Screen")

   Select **Yes**.
   
   ![InstallWarning](/images/SCALE/Install/SCALEInstallWarningScreen.png "Install Warning Screen")

3. Select **Fresh Install** to do a clean install of the downloaded version of TrueNAS SCALE.
   This erases the contents of the selected drive!
   
   ![InstallFresh](/images/SCALE/Install/SCALEInstallUpgradeFresh.png "Upgrade or Fresh Install Screen")
   
   When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance. Select **Create Swap** and press <kbd>Enter</kbd>.
   
   ![InstallPartition](/images/SCALE/Install/SCALEInstallPartitionScreen.png "Install Partition Screen")

   When existing versions of TrueNAS are present on the device, you can choose **Install in new boot environment** to create a partition or **Format the boot device** to remove previous boot environments.

   ![InstallUpdateMethodSelection](/images/SCALE/Install/SCALEInstallUpdateMethodSelection.png "Update Method Selection Screen")

4. Select option **1 Administrative user (admin)** and then **OK** to install SCALE, and create the admin user account. 
   SCALE Bluefin has implemented rootless login. Create an admin account and password. The system retains root as a fallback but it is no longer the default.
   This account has full control over TrueNAS and is used to log in to the web interface.
   Set a strong password and protect it.
   We do not recommend selecting **3 Configure using Web UI**.
   
   ![SCALEInstallerConsoleSetupAdminAccount](/images/SCALE/Install/SCALEInstallerConsoleSetupAdminAccount.png "Admin User Screen")

   Next, enter a password for the new admin user.

   ![SCALEInstallerConsoleSetupAdminPassword](/images/SCALE/Install/SCALEInstallerConsoleSetupAdminPassword.png "Install Password Screen")

5. Select **Boot via UEFI** at the **TrueNAS Boot Mode** prompt, then select **OK** and press <kbd>Enter</kbd> to begin the installation.
