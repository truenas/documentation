---
title: "NVDIMM Updates"
description: "Process to update out-of-date M-Series NVDIMMs firmware."
weight: 40
---

{{< toc >}}

## Preconditions

Before updating your M-Series NVDIMMs:
* Ensure HA is active and healthy in the web UI.
* Verify that all active alerts are non-critical.
* Ensure you have IPMI web access to both controllers.
* Download the latest NVDIMM firmware <a href="https://www.truenas.com/docs/files/P_V26_ALL.img">here</a>. 

Optional:
* Contact iX Support for the latest IPMI and BIOS versions.
* Download the manual update file for the latest version of TrueNAS.

## Update 1st Controller NVDIMMs

{{< expand "Ensure the 1st Controller IPMI/BMC Firmware Version is Up-To-Date (If Needed)" "v" >}}
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

{{< expand "Update the 1st Controller BIOS and TrueNAS Version (If Needed)" "v" >}}

**Update TrueNAS**

1. Download the manual update file on the [TrueNAS/FreeNAS Download Page](https://download.freenas.org/) and save it in the standby controller /root directory.
2. On the standby controller web UI, open the **Shell** and enter `freenas-update /root/<UPDATE FILE>` where `<UPDATE FILE>` is the TrueNAS manual update file.
3. Wait for TrueNAS to finish updating before updating the BIOS.

**Update BIOS**

{{< hint type=tip >}}
We recommend using Firefox to update the BIOS. Chrome may freeze when uploading the BIOS file.
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

Enter `ixnvdimm -f P_V26_All.img  /dev/nvdimm0` where `P_V26_All.img` is the firmware update file you downloaded.

{{< trueimage src="/images/Hardware/NVDIMMFirmwareUpdates/SuccesfulNVDIMMUpdate1.png" alt="Succesful NVDIMM Update" id="3: Succesful NVDIMM Update on 1st Controller." >}}

{{< hint type=note >}}
The `Validate Firmware Firmware Image` step can take up to 30 minutes. If it fails, rerun the command.
{{< /hint >}}

When the upgrade succeeds, run `poweroff` and leave your system powered off for at least 10 minutes.

After 10 minutes, open a browser and go to the IPMI web UI. Click the **Remote Control** tab, then select **Power Control**.

Select **Power On Server**, then **Perform Action**.

### Failover

When the TrueNAS web UI shows that HA is active and healthy, click **Initiate Failover** on the **Dashboard**. Wait for the web UI to recover and show that HA is active and healthy again. The controller with updated firmware becomes the active controller, and the formerly active controller becomes the standby controller.

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

{{< expand "Update the 2nd Controller BIOS and TrueNAS Version (If Needed)" "v" >}}

**Update TrueNAS**

1. Download the manual update file on the [TrueNAS/FreeNAS Download Page](https://download.freenas.org/) and save it in the standby controller /root directory.
2. On the standby controller web UI, open the **Shell** and enter `freenas-update /root/<UPDATE FILE>` where `<UPDATE FILE>` is the TrueNAS manual update file.
3. Wait for TrueNAS to finish updating before updating the BIOS.

**Update BIOS**

{{< hint type=tip >}}
We recommend using Firefox to update the BIOS. Chrome may freeze when uploading the BIOS file.
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
Failing over again may help the system recover if HA is not healthy after updating both controller NVDIMMs.
{{< /hint >}}