&NewLine;

{{< hint type=important >}}
Both controllers must be powered on and ready before you configure network settings.

You must disable the failover service before you can configure network settings!

Only configure network settings on controller 1! When ready, click **Sync to Peer** to haveTrueNAS apply settings to controller 2.
{{< /hint >}}

{{< include file="/static/includes/EnterpriseHANetworkIPs.md" >}}

To configure network settings on controller 1:

1. Disable the failover service. 
   Go to **System > Advanced Settings**, scroll down to the **Failover** widget, then click **Configure**.
   Select **Enable Automatic Failover** to clear the checkmark, then select **Default TruNAS Controller** to enable it, and then click **Save** to disable failover.

2. Go to **System > Network** and click **Settings** to [edit the global network settings]({{< ref "ManagingGlobalConfig" >}}).
   Add the controller and virtual host names and update any other network settings.

3. Edit the primary network interface to add failover settings.
   Click on the <span class="material-icons">more_vert</span> to the right of the the primary interface **eno1**, and select **Edit** to open the **Edit Interface** screen for this interface.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceInterfaceSettingsHA.png" alt="Edit Network Interface Settings" id="Edit Network Interface Settings" >}}

   a. Turn DHCP off if it is on by selecting **Define Static Ip Addresses**. Click **Add** to show IP address fields for each interface.
      Enter the IP address assigned to controller 1 in **IP Address (TrueNAS Controller 1)**, the IP address assinged to controller 2 in **IP Address (This Congroller)**, and the IP address assigned as the virtual IP in **Virtual IP Address (Failover Address)**.

      If **Define Static IP Addresses** is already selected, verify the three static IP addresses assigned to the system show in the correct fields.
      First, enter the IP address for controller 1 into **IP Address (This Controller)** and select the netmask (CIDR) number from the dropdown list.
      Next, enter the controller 2 IP address into **IP Address (TrueNAS Controller 2)**.
      Finally, enter the VIP address into **Virtual IP Address (Failover Address)**.
      
   b. Add the failover settings. Select  **1** on the **Failover Group** dropdown list.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceFailoveSettingsHA.png" alt="Edit Failover Setting" id="Edit Failover Setting" >}}

4. Click **Save**

5. Click **Test Changes** after editing the interface settings. Open a new broswer window and enter the VIP IP address to access the web UI.
   Go to **System > Network** and click **Save Changes** to make the changes permanent.
   You have 60 seconds to test and then save changes before they revert. If this occurs, edit the interface again.

6. Enable failover. Go to **System > Advanced Settings**, scroll down to the **Failover** widget, then click **Configure**.
   Select **Enable Automatic Failover** to re-enable failover, then click **save**.

   {{< trueimage src="/images/SCALE/Network/EnableAutomaticFailover.png" alt="Re-Enable Failover" id="Re-Enable Failover" >}}
