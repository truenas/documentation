---
title: "Updating: TrueNAS Enterprise with HA"
linkTitle: "Updating: TrueNAS Enterprise with HA"
description: "How to update a High Availability TrueNAS Enterprise system"
---

# Process Summary

Go to **System > Update**

  * Click **Download Updates** or **Apply Pending Updates**.
  * Save a backup of the system configuration.
    * SSH keys must be backed up separately: located in */usr/local/etc/ssh/*. Root user keys are in */root/.ssh*.
    * Click **Export Password Secret Seed** to include all passwords in the config backup (Security Risk - please secure backup file).
    * Click **Export Pool Encryption Keys** to include GELI encryption keys of any encrypted pools (Security Risk). Encryption Keys are automatically restored when the config file is uploaded to the system.
  * Both controllers begin updating. Progress is shown in a dialog.
    * Update warning dialog and icon appears for all logins.
    * "Standby" controller reboots when it is finished updating.
    * Dialog requests failover to finish the update procedure.
  * Fail over to reboot the current “active” Controller and promote the “standby” controller to “active”
    * Go to the **Dashboard**, find the **System Information (Standby)** card, and click **INITIATE FAILOVER**.
      * System services are interrupted.
      * Set **Confirm** and click **FAILOVER**.
      * UI logs out, a status dialog shows failover progress, then the UI log in screen is shown when failover is complete.
    * Log back in to the UI and go to the **Dashboard**.
      * **Dashboard** shows that the "standby" controller is now "active" in the **System Information** card.
      * HA is disabled while the previously "active" controller reboots as the new "standby" controller.
        * UI alerts might be generated while a controller is offline.
        * Reboot can take a long time.
        * HA status icon (cloud) shows more details when clicked.
    * Wait for “standby” (previously active) controller to come back online
      * Don’t change any system settings.
    * Apply the update to the Standby (previously active) controller
      * **Pending Upgrade** dialog appears when the standby controller is online.
      * Click **CONTINUE** to finish applying the update to the standby controller.
        * Standby controller reboots.
        * **Dashboard** might not immediately show the new version applied to the standby controller.
   * Wait for the standby controller to come back online and confirm update was successful in the **Dashboard**.
     * Compare versions shown on both **System Information** and **System Information (Standby)** cards.
     * UI alert appears if the update fails.
     * Details are written to */data/update.failed*.

# Updating a TrueNAS Enterprise system that has High Availability (HA)

Detailed article about update process.