---
title: "Editing a Physical Interface"
weight: 50
aliases: /core/network/interfaces/editingphysicalinterface/
---

{{<toc>}}

## Interface Editing ###

{{< hint warning >}}
Be careful when configuring the network interface that controls the TrueNAS® web interface or you may lose web connectivity.
{{< /hint >}}

**Network > Interfaces** lists all the physical [Network Interface Controllers (NICs)]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) connected
to your TrueNAS® system. 

![NetworkInterfaceOverview](/images/CORE/12.0/NetworkInterfaceOverviewPage.png "Network Interface Overview")


To edit an interface, click **>** next to it to expand the view and provide a general description about the chosen interface, then click *EDIT*.

{{< hint info >}}
If you are a TrueNAS Enterprise customer, remember that you cannot edit an interface if High Availability (HA) is enabled.  
Go to **System > Failover** and check the **Disable Failover** box, then click **SAVE**.
{{< /hint >}}

![NetworkInterfaceDescription](/images/CORE/12.0/NetworkInterfaceDescriptionView.png "Network Interface Description")


{{< hint note >}}
Interface editing options are dependent on the **Type** of interface that you are modifying.
{{< /hint >}}

See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

## Saving Changes ##

After you're done editing, click **SAVE**. You have the option to **TEST CHANGES** or **REVERT CHANGES**. The default time for testing any changes is 60 seconds, but you can change it to your desired setting.  

![NetworkInterfaceTestChanges](/images/CORE/12.0/NetworkInterfaceTestChanges.png "Network Interface Test Changes")

After clicking **TEST CHANGES**, confirm your choice and click **TEST CHANGES** again.

![NetworkInterfaceTestChangesNotice](/images/CORE/12.0/NetworkInterfaceTestChangesNotice.png "Network Interface Test Changes Notice")

Users can either **SAVE CHANGES** or **REVERT CHANGES**. A user has the time they specified to make their choice. If you select **SAVE CHANGES**, a dialog box asks you to **CANCEL** or **SAVE** network interface changes. Click **SAVE**.

![NetworkInterfaceEditSaveChanges](/images/CORE/12.0/NetworkInterfaceEditSaveChanges.png "Network Interface Edit Save Changes ")


![NetworkInterfaceSaveChangesOption](/images/CORE/12.0/NetworkInterfaceSaveChangesOption.png "Network Interface Save Changes Option ")

The system displays a dialog box to show that network interface changes are made permanent.

![NetworkInterfaceDialog](/images/CORE/12.0/NetworkInterfaceDialogBox.png "Network Interface Dialog Box ")


