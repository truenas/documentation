---
title: "Connecting Systems"
weight: 20
---

{{< toc >}}

## Connecting Systems to TrueCommand

To connect a system to TrueCommand, open the **Configure** menu and click *Systems*.
This menu is organized into three tabs: **Systems**, **System Groups**, and **Discovered Systems**.
These tabs contain all the options to connect and organize systems in TrueCommand.
All added systems are listed in the **Systems** tab with the current connection status.

### Adding an Automatically Detected System

The **Discovered Systems** tab has a list of all the systems TrueCommand has detected on the local network.

![SystemsDiscoveredSystems](/images/TrueCommand/1.2/SystemsDiscoveredSystems.png "Systems Discovered Systems")

Click the *+* to connect that system to TrueCommand.
This requires entering a nickname and password for the system.

### Adding a System Manually

To manually connect a new system, open the **Systems** tab and click *+ NEW SYSTEM*.

Enter the system IP address or DNS hostname, nickname, and password.
If a mistake is made, the contents of the fields can be reset by clicking *RESET FORM*.

![SystemsNewSystem](/images/TrueCommand/1.2/SystemsNewSystem.png "Adding a new system")

### Adjusting Systems

Systems that have been misconfigured with something like an incorrect password show as offline in both the TrueCommand **Dashboard** and **Systems** list.

You can edit a system from the systems list and enter new connection details. To go back to the original contents of the fields, click *RESET FORM*.

To remove a system from TrueCommand monitoring, click *delete*.

## Organizing Systems into Groups

Groups are collections of systems that are organized by TrueCommand administrators.
Grouping systems allows efficient management of system permissions and reporting.

Open the **System Groups** tab to view the list of created groups and the systems they contain.
Groups are created by clicking *Configure (Gear) ‣ Systems ‣ + NEW GROUP*.
Enter a name for the new group and click *ADD SYSTEM* to add a system to the group.
When all the desired systems are added to the group, click *CREATE GROUP*.

![SystemsSystemGroupsAdd](/images/TrueCommand/1.2/SystemsSystemGroupsAdd.png "Adding a new system group")

Editing a group allows updating the group name or changing which systems are members of that group.

To delete a system group, click *Delete (Trash Can)*.
Confirm the delete by clicking *YES*.
