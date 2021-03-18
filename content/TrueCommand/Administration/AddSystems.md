---
title: "Systems"
weight: 20
---

{{< toc >}}

## Connecting Systems to TrueCommand

To connect a system to TrueCommand, open the **Configure** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> menu and click *Systems*.
This menu is organized into two tabs: **Systems** and **System Groups**.
The **Systems** and **System Groups** tabs contain all the options to connect and organize systems in TrueCommand.
All added systems are listed in the **Systems** tab with the current connection status.

### Adding a System Manually

To connect a new system, click *+ NEW SYSTEM*.

Enter the system IP address or DNS hostname, the nickname, and the password.
If you make a mistake, you can reset the form by clicking *RESET FORM*.

![Systems List](/images/TrueCommand/1.3/SystemsList.png "Systems List")

### Adjusting Systems

Systems that are misconfigured (e.g. if you entered an incorrect password) appear offline in both the TrueCommand **Dashboard** and **Systems** list.

You can edit a system from the **Systems** list and enter new connection details. To go back to the original contents of the fields, click *RESET FORM*.

To remove a system from TrueCommand monitoring, click *Delete*.

## Organizing Systems into Groups

Groups are collections of systems that are organized by TrueCommand administrators.
Grouping systems allows you to efficiently manage system permissions and reporting.

Open the **System Groups** tab to view the list of created groups and the systems they contain.
Create a Group by clicking **Configure <i class="fa fa-cog" aria-hidden="true" title="gear"></i>&nbsp; > Systems > + NEW GROUP**.
Enter a name for the new group and click *ADD SYSTEM* to add a system to the group.
When you've added all the desired systems to the group, click *CREATE GROUP*.

![SystemsNewGroup](/images/TrueCommand/1.3/SystemsSystems.png "New System Group")

Editing a group allows you to update the group name or change which systems are members of that group.

To delete a system group, click *Delete* <i class="fa fa-trash" aria-hidden="true" title="Delete"></i>.
Confirm the deletion by clicking *YES*.
