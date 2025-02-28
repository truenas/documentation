&NewLine;

To set up a bridge interface:

1. Go to **Network > Interfaces** and find the active interface you want to use as the bridge parent interface.
   Note the interface IP Address and subnet mask.
   Click the interface to open the **Edit Interface** screen.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesSCALE.png" alt="Network Interfaces" id="Network Interfaces" >}}

2. If enabled, clear the **DHCP** checkbox.
   Note the IP address and mask under **Aliases**.
   Click the **X** next to the listed alias to remove the IP address and mask.
   The **Aliases** field now reads **No items have been added yet**.
   Click **Save**.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceNicDeviceSCALE.png" alt="Edit Network Interface" id="Edit Network Interface" >}}

3. The **Interfaces** widget displays the edited interface without IP information.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesNoIPSCALE.png" alt="Network Interface Widget" id="Network Interface Widget" >}}

4. Select **Bridge** from the **Type** dropdown list.
   You cannot change the **Type** field value after clicking **Save**!

   {{< trueimage src="/images/SCALE/Network/AddInterfaceNicDeviceSCALE.png" alt="Add Bridge Interface" id="Add Bridge Interface" >}}

5. Enter a name for the interface.
   Use the correct format based on the interface type:

   ***bond*X*** for a LAGG interface
   **vlan*X*** for a VLAN interface
   **br*x*** for a bridge interface

   Where *X* is a number representing a non-parent interface. Assign the first bridge interface **br0**.

   You cannot change the **Name** of the interface after clicking **Save**.

6. (Optional but recommended) Enter any notes or reminders about this particular bridge in **Description**.

7. Select the interfaces on the **Bridge Members** dropdown list.

8. Click **Add** to the right of **Aliases** to show the IP address fields, and enter the IP address for this bridge interface.
   Click **Add** again to show additional IP address fields for each additional IP address you want to add.

   {{< trueimage src="/images/SCALE/Network/AddInterfaceNicDeviceOtherSettingsSCALE.png" alt="Add IP and Subnet Mask" id="Add IP and Subnet Mask" >}}

9. Click **Save** when finished. The created bridge shows in **Interfaces** with its associated IP address information.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesBridgeSCALE.png" alt="Network Interfaces with Bridge" id="Network Interfaces with Bridge" >}}

10. Click **Test Changes** to determine if network changes are successful.
   See [Testing Network Interface Changes]({{< relref "/SCALETutorials/Network/Interfaces/_index.md#Testing-Network-Interface-Changes">}})

   {{< trueimage src="/images/SCALE/Virtualization/VMTestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

11. After TrueNAS finishes testing the interface, click **Save Changes** to keep the changes.
   Click **Revert Changes** to discard the changes and return to the previous configuration.

{{< trueimage src="/images/SCALE/Virtualization/VMSaveNetworkChanges.png" alt="Save Network Changes" id="Save Network Changes" >}}

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
