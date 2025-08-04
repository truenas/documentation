&NewLine;

To set up a bridge interface, go to **System > Network > Interfaces**.
Locate the interface you want to use as the bridge parent interface.

If using an existing interface, note the interface IP Address and subnet mask, then click the **Edit** option for the interface to open the **Edit Interface** screen.

{{< trueimage src="/images/SCALE/Network/NetworkInterfacesSCALE.png" alt="Network Interfaces" id="Network Interfaces" >}}

If using a newly added network interface, click **Add** to open the **Add Interface** screen to configure the new interface as a bridge.

### Converting an Existing Interface to a Bridge

Before making a change, Note the MAC address for the interface in the **Interfaces** widget, click on the edit option to open the **Edit Interface** screen and take note of any static IP addresses associated with the interface.
Disable DHCP if it is enabled, and clear the static IP addresses assigned to the interface.
After clicking **Save** TrueNAS prompts you to test the changes before making it permanent.

Alternatively, after obtaining the MAC address and IP address information you can exit the **Edit Interface** screen, and then select the **Reset Configuration** option for the interface to clear the interface settings.
After selecting **Confirm** and then **Reset**, TrueNaS prompts you to test the changes before making it permanent.

TrueNAS prompts you to test any network change before it makes the change permanent so you do not loose access to the interface or your TrueNAS system.
Refer to [Testing Network Interface Changes]({{< relref "/SCALE/SCALETutorials/Network/Interfaces/_index.md#testing-network-interface-changes" >}}) for more information on validating network interface changes.

After resetting the interface configuration, click **Add** to open the **Add Interface** screen to reconfigure the interface as documented below.

### Adding a New Interface as a Bridge

While on the **System > Network** screen, click **Add** on the **Interfaces** widget to open the **Add Interfaces** screen.

1. Select **Bridge** in **Type**. Name populates with the default **br1** or increments to the next available number if other bridge interfaces exist on your system.
  
   {{< trueimage src="/images/SCALE/Network/AddInterfaceBridgeSettings.png" alt="Bridge Interface Settings" id="Bridge Interface Settings" >}}

   You cannot change the **Type** field value after clicking **Save**!

   You cannot change the **Name** of the interface after clicking **Save**.

2. (Optional but recommended) Enter any notes or reminders about this particular bridge in **Description**.

3. Select **Define Static IP Addresses**, then click **Add** to the right of **Static IP Addresses** to show the IP address and netmask fields.

   If adding an interface after resetting the configuration for an existing interface, enter the IP address from that reset interface.

   If adding a new interface, enter the new static IP address.

   Click **Add** for each IP address to associate with this interface.

   If you want DHCP to assign an IP address, select **Get IP Address Automatically from DHCP**.

4. Select the interfaces to include in this bridge on the **Bridge Members** dropdown list.

5. Leave **Enable Learning** selected unless you want to defer interface learning until runtime.
   Disabling learning prevents premature state transitions and potential issues during system startup.

6. Click **Save** when finished. The created bridge shows in **Interfaces** with its associated IP address information.

7. Click **Test Changes** to determine if network changes are successful.
   See [Testing Network Interface Changes]({{< ref "/SCALE/SCALETutorials/Network/Interfaces#Testing-Network-Interface-Changes">}})

   {{< expand "Troubleshooting Network Changes" "v" >}}

   Occasionally, a misconfigured bridge or a conflict with a running application, VM, or service can cause the network changes test to fail.
   Typically, this is because the bridge is configured using an IP address that is already in use.
   If the system does not receive a **Save Changes** check-in before the test times out (default 60 seconds), TrueNAS automatically reverts all unsaved changes.

   The following troubleshooting options are available if you cannot save the new bridge and network changes.
   Options are ordered from the least to the most disruptive.
   Try options one and two before proceeding with options three and four.

   1. Ensure that there are no currently running applications.
   2. Stop any running VMs.
   3. (Optional) Go to **Services**.
      Click <span class="material-icons">edit</span> **Configure** to view the current configuration of sharing services including **SMB** and **NFS**.
      Stop any services that have a bind IP address matching the bridge IP address.
      Restart the service(s) after network changes are tested and saved.
   4. (Optional) Stop running apps.
      After network changes are tested and saved, restart apps.
{{< /expand >}}
