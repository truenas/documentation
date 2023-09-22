&NewLine;

To set up a bridge interface, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget.
The **Add Interface** configuration screen displays.

![AddInterfaceNicDeviceSCALE](/images/SCALE/Network/AddInterfaceNicDeviceSCALE.png "Add Bridge Interface")

2. Select **Bridge** from the **Type** dropdown list.
You cannot change the **Type** field value after you click **Save**.

3. Enter a name for the interface.
Use the format *bondX*, *vlanX*, or *brX* where *X* is a number representing a non-parent interface.
Read-only when editing an interface.
You cannot change the **Name** of the interface after you click **Save**.

4. (Optional but recommended) Enter any notes or reminders about this particular bridge in the **Description** field.

5. Select the interfaces on the **Bridge Members** dropdown list.

6. Next to **Aliases** click **Add** to enter the IP address for this bridge interface.
(Optional) click **Add** to display an additional IP address field for each additional IP address you want to add.

![AddInterfaceNicDeviceOtherSettingsSCALE](/images/SCALE/Network/AddInterfaceNicDeviceOtherSettingsSCALE.png "Add IP and Subnet Mask")

7. Click **Save** when finished.
The created bridge shows in **Interfaces** with its associated IP address information.
