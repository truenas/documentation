---
title: "Managing Network Settings (Enterprise HA)"
description: "This article provides instructions on how to make changes to network settings on SCALE Enterprise (HA) systems."
weight: 25
aliases:
tags:
- scaleenterprise
- scalefailover
- scalenetwork
---


{{< enterprise >}}
The instructions in the article only apply to SCALE Enterprise (HA) systems.
{{< /enterprise >}}

{{< include file="/_includes/EnterpriseHANetworkIPs.md" type="page" >}}

## Configuring Enterprise (HA) Network Settings
{{< hint warning >}}
You must disable the failover service before you can configure network settings!
{{< /hint >}}

To configure network settings:

1. Disable the failover service.
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** and click **Save**.

2. [Edit the Global Network settings]({{< relref "AddingGlobalConf.md" >}}) to add or change the host and domain names, DNS name server and default gateway address. 
   If enabled on your network, TrueNAS uses DHCP to assign global network addresses as well as the SCALE UI access IP address. If not enabled in your network, you must enter these values yourself. 
   Review the **Global Configuration** settings to verify they match the information your network administrator provided.

3. Edit the primary network interface.
   Go to **Network** and click on the primary interface **eno1** to open the **Edit Interface** screen for this interface.

   a. Turn DHCP off. Select **DHCP** to clear the checkbox.
      
      ![EditInterfaceInterfaceSettingsHA](/images/SCALE/22.12/EditInterfaceInterfaceSettingsHA.png "Edit Network Interface Settings")

   b. Add the failover settings. Select **Critical**, and then select **1** on the **Failover Group** dropdown list.
   
      ![EditInterfaceFailoveSettingsrHA](/images/SCALE/22.12/EditInterfaceFailoveSettingsrHA.png "Edit Network Interface Failover Settings")

   c. Add the virtual IP (VIP) and controller 2 IP. Click **Add** for **Aliases** to displays the additional IP address fields. 
      
      ![EditInterfaceAddAliasesHA](/images/SCALE/22.12/EditInterfaceAddAliasesHA.png "Edit Network Interface Add Alias IP Addresses")

      1. Type the IP address for controller 1 into **IP Address (This Controller)** and select the CIDR number from the dropdown list.

      2. Type the controller 2 IP address into **IP Address (TrueNAS Controller 2)** field.

      3. Type the VIP address into **Virtual IP Address (Failover Address)** field.

      4. Click **Save**

   After editing the interface settings the **Test Changes** button displays. You have 60 seconds to test and then save changes before they revert. If this occurs, edit the interface again.

4. Turn the failover service back on. 
   Go to **System Settings > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**. 

   The system might reboot. Monitor the status of controller 2 and wait until the controller is back up and running then click **Sync To  Peer**. 
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation. The controller reboots and SCALE syncs controller 2 with controller 1 which adds the network settings and pool to controller 2.

   ![FailoverSyncToPeerDialog](/images/SCALE/22.12/FailoverSyncToPeerDialog.png "Failover Sync To Peer")


{{< taglist tag=*scalefailover" limit="10" title="Related Failover Articles" >}}
{{< taglist tag=*scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
