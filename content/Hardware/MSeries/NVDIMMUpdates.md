---
title: "NVDIMM Updates"
description: "Procedure to update M-Series NVDIMMs firmware."
weight: 40
---

{{< toc >}}

{{< hint type=warning title="WARNING: Incorrect Action Results in Data Loss" >}}
Only use the iXsystems-provided NVDIMM firmware images from the table below.
Using update images other than the ones provided in this article can result in system malfunction and data loss.
Double check the downloaded firmware update file matches the NVDIMM model installed in TrueNAS.

This procedure is written for TrueNAS CORE Enterprise deployed systems only.
{{< /hint >}}

When there is an active support contract, iXsystems Support can assist with this procedure.
{{< expand "Contacting iX Support (Click to expand)" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /expand >}}

## Preconditions

Before updating your M-Series NVDIMMs:
* TrueNAS is up to date.
* Ensure HA is active and healthy in the web UI.
* Verify that all active alerts are non-critical.
* Ensure you have IPMI web access to both controllers.
* Know the IP addresses for both TrueNAS storage controllers.
* TrueNAS SSH Service is active and allows root access.
  For best security, only allow SSH root access to the system when specific procedures require it.
* Remove NVDIMMs (log device) from any storage pool before updating. Add the devices back to the pools when updates are done.
  {{< expand "Removing log devices from a storage pool (Click to expand)" "v" >}}
  1. Log in to the web UI and go to **Storage > Pools**.
  2. Open the <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Pool Operations) menu for the pool and click **Status**
  3. Find the **log** entries, click <span class="iconify" data-icon="mdi:dots-vertical"></span> (Options) for each log device, and click **Remove**.
  4. Confirm the choice and wait for the process to complete.
  {{< /expand >}}
  {{< expand "Adding log devices to a storage pool (Click to expand)" "v" >}}
  1. Log in to the web UI and go to **Storage > Pools**.
  2. Open the <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Pool Operations) menu for the pool and click **Add Vdevs**
  3. Open the **ADD VDEV** dropdown and select **Log**.
  4. Select the NVDIMM devices and click the <span class="iconify" data-icon="mdi:arrow-right"></span> (add) icon to add disks to the **Log VDev**.
  5. Click **ADD VDEVS**.
  {{< /expand >}}

## Identify the NVDIMM and Firmware Update File

1. Using the root account credentials, open an SSH session with the TrueNAS system.
2. Information about the storage controller and failover status displays after logging in.
   To view this information again, enter `hactl`:
   ```
   root@truenas-ha-examplea[~]# hactl
   Node status: Active
   Node serial: A1-##### (ACTIVE)
   Other node serial: A1-#####
   Failover status: Enabled
   root@truenas-ha-examplea[~]#
   ```
   Validate that the correct controller (**Active** or **Standby**) has been accessed before proceeding.
3. Enter `ixnvdimm /dev/nvdimm0` and read the output to find the correct NVDIMM firmware update in the table below.

{{< truetable >}}
| `ixnvdimm /dev/nvdimm0` Results                                                             | NVDIMM Model                | Firmware Update                                                                                                       |
|---------------------------------------------------------------------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------|
| vendor: 2c80 device: 4e32 revision: 31 <br> subvendor: 3480 subdevice: 4131 subrevision: 01 | Micron 16GB 2666 (Payette)  | <a href="https://www.truenas.com/docs/files/P_V26_ALL.img">Version 2.6</a>                                            |
| vendor: 2c80 device: 4e36 revision: 31 <br> subvendor: 3480 subdevice: 4231 subrevision: 02 | Micron 16GB 2933 (River16)  | <a href="https://www.truenas.com/docs/files/R16_V22_ALL.img">Version 2.2</a>                                          |
| vendor: 2c80 device: 4e33 revision: 31 <br> subvendor: 3480 subdevice: 4231 subrevision: 01 | Micron 32GB 2933 (River32)  | <a href="https://www.truenas.com/docs/files/AGIGA-SRI-RAM4ME.RIVER-V2.4-UPGRADE_ALL-signed.img">Version 2.4</a>       |
| vendor: ce01 device: 4e38 revision: 33 <br> subvendor: c180 subdevice: 4331 subrevision: 01 | Unigen 16GB 3200 (Komodo16) | <a href="https://www.truenas.com/docs/files/AGIGA-SRI-RAM4SEF.KMD1-16-V0.80-UPGRADE_ALL-Signed.img">Version 0.8</a>   |
| vendor: ce01 device: 4e39 revision: 34 <br> subvendor: c180 subdevice: 4331 subrevision: 01 | Unigen 32GB 3200 (Komodo32) | <a href="https://www.truenas.com/docs/files/AGIGA-SRI-RAM4SGH.KMD1-32-V0.8-UPGRADE_ALL-Signed.img">Version 0.8</a>    |
{{< /truetable >}}

4. Download the [manual update file](https://www.truenas.com/download-truenas-core/) for the latest TrueNAS version.
   Look for the **Manual Update** expandable on the download page.

## Update 1st Controller NVDIMMs

{{< expand "Ensure the 1st Controller IPMI/BMC Firmware Version is Up-To-Date (If Needed)" "v" >}}
{{< hint type=note >}}
Updating IPMI resets IPMI but does not affect the active controller.
{{< /hint >}}

1. Log in to the standby controller IPMI web UI, click the **Maintenance** tab, and select **Firmware Update**. 
2. Select **Enter Update Mode** in the confirmation window.
3. Select **Choose File** and choose the IPMI <file>.bin</file> file in IPMI folder received from iXsystems Support.
4. Click **Upload Firmware**.
5. Make sure to select **Preserve Configuration/Preserve** and **SDR/Preserve SSL certificate**.
6. Select **Start Upgrade**
7. Follow all the prompts until the IPMI web interface reappears.

{{< hint type=tip >}}
If nothing appears to have changed, use <kbd>shift+ctrl+r</kbd> | <kbd>cmd+shift+r</kbd> to refresh the page and clear the cache.
{{< /hint >}}
{{< /expand >}}

{{< expand "Update the 1st Controller BIOS (If Needed)" "v" >}}

### Update TrueNAS BIOS

{{< hint type=tip >}}
Use a non-Chrome browser like Firefox to update the BIOS.
Chrome might freeze when uploading the BIOS file.
{{< /hint >}}

1. Go to the standby controller IPMI web UI. Click the **Maintenance** tab and select **BIOS Update**.
2. Select **Choose File** and choose the BIOS <file>.rom</file> file you got from iX Support.
3. Click **Upload BIOS**
4. Make sure you enable **Preserve SMBIOS**, but not **Preserve ME Region** or **Preserve NVRAM**.
5. Click **Start Upgrade**
6. When you are ready to reboot the system, select **YES** on the confirmation popup.

The system resets and reboots. Monitor the TrueNAS web UI and wait for HA to recover.
{{< /expand >}}

### Check NVDIMM Version

Open a command line utility and SSH into the standby controller. 

Enter `ixnvdimm /dev/nvdimm0`. Make sure that firmware slot 1 is selected and running.

{{< trueimage src="/images/Hardware/NVDIMMFirmwareUpdates/Selected1Running1.png" alt="Firmware Slot 1 Selected and Running" id="1: Firmware Slot 1 Selected and Running." >}}

Enter `ixnvdimm /dev/nvdimm0 |grep -o "slot1: [0-9A-F][0-9A-F]"`. The two digits after `slot1:` indicate the firmware version. For example, a `22` indicates version 2.2. The latest firmware version is 2.6.

{{< trueimage src="/images/Hardware/NVDIMMFirmwareUpdates/FirmwareVersion.png" alt="Slot1 Firmware Version" id="2: Slot1 Firmware Version." >}}

### Update NVDIMM

Enter <code>ixnvdimm -f <i>P_V26_All.img</i>  /dev/nvdimm0</code> where <code><i>P_V26_All.img</i></code> is the downloaded firmware update file.

{{< trueimage src="/images/Hardware/NVDIMMFirmwareUpdates/SuccesfulNVDIMMUpdate1.png" alt="Succesful NVDIMM Update" id="3: Succesful NVDIMM Update on 1st Controller." >}}

{{< hint type=note >}}
The `Validate Firmware Image` step can take up to 30 minutes. If it fails, rerun the command.
{{< /hint >}}

When the upgrade succeeds, run `poweroff` and leave your system powered off for at least 10 minutes.

After 10 minutes, open a browser and go to the IPMI web interface. Click the **Remote Control** tab, then select **Power Control**.

Select **Power On Server**, then **Perform Action**.

### Failover

When the TrueNAS web interface shows that HA is active and healthy, click **Initiate Failover** on the **Dashboard**. Wait for the web UI to recover and show that HA is active and healthy again. The controller with updated firmware becomes the active controller, and the formerly active controller becomes the standby controller.

## Update 2nd Controller NVDIMMs

{{< expand "Ensure the 2nd Controller IPMI/BMC Firmware Version is Up-To-Date (If Needed)" "v" >}}
{{< hint type=note >}}
Updating IPMI resets IPMI but does not affect the active controller.
{{< /hint >}}

1. Go to the standby controller IPMI web UI, click the **Maintenance** tab, and select **Firmware Update**. 
2. Select **Enter Update Mode** in the confirmation window.
3. Select **Choose File** and choose the IPMI <file>.bin</file> file in IPMI folder that you got from iXSupport.
4. Click **Upload Firmware**.
5. Make sure to select **Preserve Configuration/Preserve** and **SDR/Preserve SSL certificate**.
6. Select **Start Upgrade**
7. Follow all the prompts until the IPMI web ui reappears.

{{< hint type=tip >}}
You may need to do <kbd>shift+ctrl+r</kbd>/<kbd>cmd+shift+r</kbd> to refresh the page and clear the cache.
{{< /hint >}}
{{< /expand >}}

{{< expand "Update the 2nd Controller BIOS (If Needed)" "v" >}}

### Update TrueNAS BIOS

{{< hint type=tip >}}
Use a non-Chrome browser like Firefox to update the BIOS.
Chrome might freeze when uploading the BIOS file.
{{< /hint >}}

1. Go to the standby controller IPMI web UI, click the **Maintenance** tab, and select **BIOS Update**.
2. Select **Choose File** and choose the BIOS <file>.rom</file> file you got from iX Support.
3. Click **Upload BIOS**
4. Make sure you enable **Preserve SMBIOS**, but not **Preserve ME Region** or **Preserve NVRAM**.
5. Click **Start Upgrade**
6. When you are ready to reboot the system, select **YES** on the confirmation popup.

The system resets and reboots. Monitor the TrueNAS web UI and wait for HA to recover.
{{< /expand >}}

### Update NVDIMM

Open a command line utility and SSH into the standby controller. 

Enter `ixnvdimm -f P_V26_All.img  /dev/nvdimm0` where `P_V26_All.img` is the firmware update file you downloaded.

{{< trueimage src="/images/Hardware/NVDIMMFirmwareUpdates/SuccesfulNVDIMMUpdate2.png" alt="Succesful NVDIMM Update" id="4: Succesful NVDIMM Update on 2nd Controller." >}}

{{< hint type=note >}}
The `Validate Firmware Image` step can take up to 30 minutes. If it fails, rerun the command.
{{< /hint >}}

When the upgrade succeeds, run `poweroff` and leave your system powered off for at least 10 minutes.

After 10 minutes, open a browser and go to the IPMI web UI. Click the **Remote Control** tab, then select **Power Control**.

Select **Power On Server**, then **Perform Action**.

## Validate System Health

After updating the NVDIMMs in both controllers, clear all BIOS and NVDIMM alerts and any other new alerts in the TrueNAS web UI.

{{< hint type=tip >}}
Failing over again might help the system recover if HA is not healthy after updating both controller NVDIMMs.
{{< /hint >}}
