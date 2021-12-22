---
title: "Systems"
weight: 10
---

{{< toc >}}

## Connecting Systems to TrueCommand

To connect a system to TrueCommand, open the **Configure** <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click **Systems**.
The Systems menu has two tabs: **Systems** and **System Groups**.
The **Systems** and **System Groups** tabs contain all the options to connect and organize systems in TrueCommand.
TrueCommand lists all added systems in the **Systems** tab with their current connection statuses.

![SystemsPage](/images/TrueCommand/2.0/SystemsPage.png "Systems List")

### Adding a System Manually

To connect a new system, click **+ NEW SYSTEM**.

Enter the system IP address or DNS hostname, the nickname, and the password.
If you make a mistake, you can reset the form by clicking **RESET FORM**.

![SystemsAddFirstSystemForm](/images/TrueCommand/2.0/SystemsAddFirstSystemForm.png "Systems Add")

### Managing Systems

You can manage systems by clicking the <i class="material-icons" aria-hidden="true">more_vert</i> in the system's row to open the [system managment menu]({{< relref "/content/TrueCommand/SystemManagement/_index.md" >}}).

## Organizing Systems into Groups

TrueCommand administrators can organize systems into collections called Groups.
Grouping systems lets you efficiently manage system permissions and reporting.

Open the **System Groups** tab to view the list of created groups and the systems they contain.

![SystemsGroups](/images/TrueCommand/2.0/SystemsGroups.png "System Groups")

Create a Group by clicking **Configure <i class="material-icons" aria-hidden="true" title="Settings">settings</i>&nbsp; > Systems > + NEW GROUP**.
Name the new group and click **ADD SYSTEM** to add a system to the group.
When you've added all the desired systems to the group, click **CREATE GROUP**.

![SystemsNewGroup](/images/TrueCommand/2.0/SystemsGroupsNewGroup.png "New System Group")

### Managing Groups

Each group has two management options:

+ Edit System : <i class="material-icons" aria-hidden="true" title="Configure">edit</i>
+ Delete System : <i class="material-icons" aria-hidden="true" title="Delete">delete</i>

{{< tabs "Group Control Options" >}}
{{< tab "Edit" >}}
Clicking the edit button <i class="material-icons" aria-hidden="true" title="Configure">edit</i> opens a side bar menu.  Adjustments can be made to the Group in this manner.  Systems can be added or removed from the group by using the **Add System** button or the Remove <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button.  Click **Save Changes** when finished with your changes to update the Group to the new group settings.

![Groups Edit](/images/TrueCommand/2.0/SystemsGroupsEditGroup.png "Groups Edit")
{{< /tab >}}
{{< tab "Delete" >}}

Clicking the <i class="material-icons" aria-hidden="true" title="Delete">delete</i> button initiates a popup confirmation box to delete a group. 

![Groups Delete](/images/TrueCommand/2.0/SystemsGroupsDeleteGroup.png "Group Delete")
{{< /tab >}}
{{< /tabs >}}