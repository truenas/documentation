---
title: "Interfaces"
description: "Provides instructions on how to edit a network physical interface and a list of other TrueNAS CORE network interface tutorials."
geekdocCollapseSection: true
weight: 30
tags:
 - network 
 - interfaces
---

## Editing an Interface ###

{{< hint type=important >}}
Be careful when configuring the network interface that controls the TrueNAS® web interface. An error can result in the loss of web connectivity.
{{< /hint >}}

**Network > Interfaces** lists all physical [Network Interface Controllers (NICs)]({{< relref "InterfacesScreen.md" >}}) connected
to your TrueNAS® system.

![NetworkInterfaces](/images/CORE/Network/NetworkInterfaces.png "Interfaces List")

To edit an interface, click **>** next to it to expand the view. This provides a general description about the chosen interface. Click **EDIT**.

{{< hint type=note >}}
TrueNAS Enterprise customers: you cannot edit an interface with High Availability (HA) enabled.  
Go to **System > Failover** and check the **Disable Failover** box, then click **SAVE**.
{{< /hint >}}

![NetworkInterfaceDescription](/images/CORE/Network/NetworkInterfaceDescriptionView.png "Network Interface Description")

{{< hint type=note >}}
The **Type** of interface determines the interface editing options available.
{{< /hint >}}

See [Interfaces Screen]({{< relref "InterfacesScreen.md" >}}) for more information on settings.

## Saving Interface Changes ##

After completing interface editing, click **SAVE**.
You have the option to **TEST CHANGES** or **REVERT CHANGES**.
The default time for testing changes is 60 seconds, but you can change it to your desired setting.  

![NetworkInterfacesChangesPresent](/images/CORE/Network/NetworkInterfacesChangesPresent.png "Interface Changes Detected")

After clicking **TEST CHANGES**, confirm your choice and click **TEST CHANGES** again.

![NetworkInterfaceTestChangesNotice](/images/CORE/Network/NetworkInterfaceTestChangesNotice.png "Network Interface Test Changes Notice")

Either click **SAVE CHANGES** or **REVERT CHANGES**.
You have the time specified to make this choice.
Clicking **SAVE CHANGES** opens a dialog with the option to **CANCEL** or **SAVE** network interface changes. Click **SAVE**.

![NetworkInterfaceEditSaveChanges](/images/CORE/Network/NetworkInterfaceEditSaveChanges.png "Network Interface Edit Save Changes ")

![NetworkInterfaceSaveChangesOption](/images/CORE/Network/NetworkInterfaceSaveChangesOption.png "Network Interface Save Changes Option ")

The system displays a dialog that shows the network interface changes are now permanent.

![NetworkInterfaceDialog](/images/CORE/Network/NetworkInterfaceDialogBox.png "Network Interface Dialog Box ")

## Interface Articles

{{< children depth="2" description="true" >}}
