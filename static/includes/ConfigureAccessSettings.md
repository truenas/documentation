&NewLine;

#### Changing the Session Timeout

Enter a value in the number of seconds to suit your needs and security requirements. For example, to change the timeout to 10 minutes, enter 6000.

{{< hint type=tip title="Session Timeout Requirements" >}}
The default session timeout setting is 300 seconds or five minutes.

The minimum value allowed is 30 seconds and the maximum is 2147482 seconds, or 20 hours, 31 minutes, and 22 seconds.
{{< /hint >}}

Click **Save**.

#### Adding a Banner

To show a login banner before the login screen shows, enter the text in the **Login Banner** field.
Use carriage returns to break up a large block up text and to improve readability of the text.

After saving the text. The next time an administrative user logs into the UI, the banner shows.
To advance to the login screen, click **Continue**.

{{< enterprise >}}
#### Allowing Directory Service Users to Access the UI

TrueNAS allows Enterprise users to show the UI to users in an Active Directory group.
To configuring this access, first, adding the selected AD users to a group that is granted a TrueNAS privilege that permits it, and enabling the **Allow Directory Service users to access WebUI** option on the **Access Settings** screen. This option only shows on Enterprise-licensed systems.

{{< trueimage src="/images/SCALE/SystemSettings/AccessSettingsScreenEnterprise.png" alt="Access Settings Screen Enterprise Systems" id="Access Settings Screen Enterprise Systens" >}}

When TrueNAS joins AD, it automatically creates a new privilege entry in the **Privileges** screen table, and it is automatically populated with the domain admins group for the domain.
You can add additional AD groups to this privilege.
To expand or alter the privilege, seiect it on the list and click **Edit**.
Never modify the settings for the standard pre-defined privileges (listed below)! Changing these pre-defined roles can result in lost access to the UI!

Active Directory can provision the group in TrueNAS or you can add a new group that you assign to users in AD.
After adding a group, verify or edit the privilege(s) granted to the users in the group.

Pre-defined TrueNAS privileges are:
* **Read-Only Administrator** which allows the user to view settings but not make changes in the UI.
* **Sharing Administrator** which allows the user to create new shares and the share dataset.
* **Local Administrator** with full Control which gives the user full read/write/execute permissions in the UI.

{{< include file="/static/includes/AddPrivilege.md" >}}
{{< /enterprise >}}