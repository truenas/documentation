&NewLine;

{{< hint type=important >}}
Both controllers must be powered on and ready before you configure network settings.

You must disable the failover service before you can configure network settings!

Only configure network settings on controller 1! When ready to sync to peer, TrueNAS applies settings to controller 2 at that time.
{{< /hint >}}

{{< include file="/static/includes/EnterpriseHANetworkIPs.md" >}}

To configure network settings on controller 1:

1. Disable the failover service.
   Go to **System > Services** locate the **Failover** service and click edit.
   Select **Disable Failover** and click **Save**.

2. [Edit the global network settings]({{< relref "ManagingGlobalConfig" >}}) to add the controller and virtual hostnames and update any other network settings.

3. Edit the primary network interface to add failover settings.
   Go to **Network** and click on the primary interface **eno1** to open the **Edit Interface** screen for this interface.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceInterfaceSettingsHA.png" alt="Edit Network Interface Settings" id="Edit Network Interface Settings" >}}

   a. Turn DHCP off if it is on. Select **DHCP** to clear the checkbox.

   b. Add the failover settings. Select **Critical**, and then select **1** on the **Failover Group** dropdown list.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceFailoveSettingsHA.png" alt="Edit Network Interface Failover Settings" id="Edit Network Interface Failover Settings" >}}

   c. Add the virtual IP (VIP) and controller 2 IP. Click **Add** for **Aliases** to display the additional IP address fields.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceAddAliasesHA.png" alt="Add Alias IP Addresses" id="Add Alias IP Addresses" >}}

      First, enter the IP address for controller 1 into **IP Address (This Controller)** and select the netmask (CIDR) number from the dropdown list.

      Next, enter the controller 2 IP address into **IP Address (TrueNAS Controller 2)**.

      Finally, enter the VIP address into **Virtual IP Address (Failover Address)**.

4. Click **Save**

5. Click **Test Changes** after editing the interface settings.
   You have 60 seconds to test and then save changes before they revert. If this occurs, edit the interface again.
