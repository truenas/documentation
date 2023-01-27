---
---

To set up a bridge interface, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget. The **Add Interface** configuration screen displays.
 
![AddInterfaceNicDeviceSCALE](/images/SCALE/22.12/AddInterfaceNicDeviceSCALE.png "Add Bridge Interface")

2. Select **Bridge** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Save**.

3. Enter a name for the interface. Use the format *bondX*, *vlanX*, or *brX* where *X* is a number representing a non-parent interface. Read-only when editing an interface. You cannot change the **Name** of the interface after you click **Save**.

3. (Optional but recommended) Enter any notes or reminders about this particular bridge in the **Description** field.

4. Select the interfaces on the **Bridge Members** dropdown list.

5. Next to **Aliases** click **Add** to enter the IP address for this bridge interface. (Optional) click **Add** to display an additional IP address field for each additional IP address you want to add.
 
![AddInterfaceNicDeviceOtherSettingsSCALE](/images/SCALE/22.12/AddInterfaceNicDeviceOtherSettingsSCALE.png "Add IP and Subnet Mask")

6. Click **Save** when finished. You should see the bridge name you created in **Interfaces** with its associated IP address information.
