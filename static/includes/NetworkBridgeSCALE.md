&NewLine;

## Adding a Bridge

To set up a bridge interface:

1. Go to **Apps** and the **Containers** screens to verify all apps and containers are stopped.
   If still running, stop all apps and containers listed on the **Applications** and the **Containers** screens.

2. Go to **Virtual Machines**, expand each VM, and click **Power Off** to stop each VM.
   Powering off the VM disconnects any NIC device used by the VM, where stopping the VM might not.

3. Go to **System > Network** and take a screenshot showing your **Interfaces** and the **Global Configuration** widgets.
   
   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesAndGlobalConfigWidgets.png" alt="Network Interfaces and Global Configuration Widgets" id="Network Interfaces and Global Configuration Widgets" >}}

4. Click the <span class="material-icons">more_vert</span> icon for the interface, to open the **Edit Interface** screen.
   Click the **x** to the right of **Static IP Addresses** to remove the current static IP address assignment, and then click **Save**.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceForBridge.png" alt="Edit Interface for a Bridge" id="Edit Interface for a Bridge" >}}

5. Click **Add** to open the **Add Interface** screen. Configure the interface:

   {{< trueimage src="/images/SCALE/Network/AddInterfaceBridgeSettings.png" alt="Bridge Interface Settings" id="Bridge Interface Settings" >}}

   a. Set **Type** to **Bridge**. **Name** automatically populates with the correct name.
      You cannot change the **Type** field value or the name after clicking **Save**!
   
   b. (Optional) Enter a short description for the bridge. This is optional but recommended if configuring multiple bridges on your system to help identify their use or location.
   
   c. Select **Define Static IP Addresses**, then click **Add** to the right of **Static IP Addresses**.
   Enter the IP address and select the netmask for the interface edited in step 4 above. Refer to the screenshot if you do not remember the IP address and netmask.
   
   d. Select the interface name in **Bridge Members**. You only need to add the interface name edited in step 4 above.
   Leave **Enable Learning** selected unless you want to defer interface learning until runtime.
   Disabling learning prevents premature state transitions and potential issues during system startup.

   e. Click **Save**.

   TrueNAS shows the bridge on the Interfaces widget.

6. Click **Test Changes**. See **Testing Network Changes** above for details on testing and saving network changes.
   
TrueNAS shows the bridge as working.

{{< expand "Troubleshooting Network Changes" "v" >}}

Occasionally, a misconfigured bridge or a conflict with a running application, VM, or service can cause the network changes test to fail.
Typically, this is because the bridge is configured using an IP address that is already in use.
If the system does not receive a **Save Changes** check-in before the test times out (default 60 seconds), TrueNAS automatically reverts all unsaved changes.

The following troubleshooting options are available if you cannot save the new bridge and network changes.
Options are ordered from the least to the most disruptive.
Try options one and two before proceeding with options three and four.

* Ensure that there are no currently running applications.
* Stop any running VMs.
* (Optional) Go to **Services**.
   Click <span class="material-icons">edit</span> **Configure** to view the current configuration of sharing services, including **SMB** and **NFS**.
   Stop any services that have a bind IP address matching the bridge IP address.
   Restart the service(s) after network changes are tested and saved.
* (Optional) Stop running apps. After network changes are tested and saved, restart apps.
{{< /expand >}}
