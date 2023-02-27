---
---

1. Select **Install/Upgrade**.
   
   ![SCALEInstallUpgrade](/images/SCALE/SCALEInstallMainScreen.png "SCALE Install Main Screen")

2. Select the desired install drive.
   
   ![InstallDrive](/images/CORE/12.0/InstallDriveScreen.png "Install Drive Screen")

   Select **Yes**.
   
   ![InstallWarning](/images/CORE/12.0/InstallWarningScreen.png "Install Warning Screen")

3. Select **Fresh Install** to do a clean install of the downloaded version of TrueNAS SCALE.
   This erases the contents of the selected drive!
   
   ![InstallFresh](/images/CORE/12.0/InstallWarningScreen.png "Upgrade or Fresh Install Screen")
   
   When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.
   
   ![InstallPartition](/images/CORE/12.0/InstallPartitionScreen.png "Install Partition Screen")

4. Select option **1 Administrative user (admin)** and then **OK** to install SCALE, and create the admin user account. 
   SCALE Bluefin has implemented rootless login. Create an admin account and password. The system retains root as a fallback but it is no longer the default.
   This account has full control over TrueNAS and is used to log in to the web interface.
   Set a strong password and protect it.
   
   ![SCALEInstallerConsoleSetupAdminAccount](/images/SCALE/22.12/SCALEInstallerConsoleSetupAdminAccount.png "Admin User Screen")

   Next, enter a password for the new admin user.

   ![SCALEInstallerConsoleSetupAdminPassword](/images/SCALE/22.12/SCALEInstallerConsoleSetupAdminPassword.png "Install Password Screen")

5. Select **Create Swap** at the **Create 16 GB Swap** prompt, then arrow down to select **OK** and press <kbd>Enter</kbd>.

6. Select **Boot via UEFI** at the **TrueNAS Boot Mode** prompt, then select **OK** and press <kbd>Enter</kbd> to begin the installation.
