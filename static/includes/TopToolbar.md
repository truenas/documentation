&NewLine;

The TrueNAS top navigation top toolbar provides access to functional areas of the UI that you might want to directly access while on other screens in the UI.
Icon buttons provide quick access to dropdown lists of options, dropdown panels with information on system alerts or tasks, and can include access to other information or configuration screens.
It also shows the name of the user currently logged into the system to the left of the **Settings** icon.

You can also collapse or expand the main function menu on the left side of the screen.

{{< trueimage src="/images/SCALE/Dashboard/TopToolbar.png" alt="TrueNAS Top Toolbar" id="TrueNAS Top Toolbar" >}}

{{< expand "Search UI" "v" >}}
The **Search UI** global search bar allows users to search for screens and elements within the TrueNAS UI or to redirect search terms to the TrueNAS Documentation Hub.

{{< include file="/static/includes/UsingGlobalSearch.md" >}}
{{< /expand >}}

{{< expand "TrueNAS" "v" >}}
The TrueNAS logo returns to the **Dashboard** from any other screen.
{{< /expand >}}

{{< expand "Send Feedback" "v" >}}
{{< include file="/static/includes/FeedbackWindow.md" >}}
{{< /expand >}}

{{< expand "Status of TrueCommand" "v" >}}
{{< include file="/static/includes/StatusOfTrueCommand.md" >}}
{{< /expand >}}

{{< expand "Status of TrueNAS Connect" "v" >}}
{{< include file="/static/includes/TNCService.md" >}}
{{< /expand >}}

{{< expand "Directory Services Monitor" "v" >}}
{{< include file="/static/includes/DirectoryServicesMonitor.md" >}}
{{< /expand >}}

{{< expand "Jobs" "v" >}}
{{< include file="/static/includes/Jobs.md" >}}
{{< /expand >}}

{{< expand "Alerts" "v" >}}
{{< include file="/static/includes/AlertsSCALE.md" >}}
{{< /expand >}}

{{< expand "Settings" "v" >}}
The **Settings** <span class="material-icons">account_circle</span> icon opens a dropdown list of options to change passwords, modify two-factor authentication settings (when configured), create and manage API keys, access the TrueNAS documentation, and to log out of the TrueNAS UI.
{{< expand "Change Password" >}}
{{< include file="/static/includes/ChangeLoggedInUserPassword.md" >}}
{{< /expand >}}

{{< expand "My API Keys" "v" >}}
Click on **My API Keys** <span class="material-icons">laptop</span> to go to the [User API Keys]({{< ref "/SCALE/SCALEUIReference/TopToolbar/Settings/APIKeysScreen" >}}) screen.
API keys identify an outside resource or application without a principal.
For example, when adding a new system to TrueCommand if you are required to add an API key to authenticate the system.
Use this function to create an API key for this purpose.

Click **API Docs** to access the API documentation portal with information on TrueNAS API commands.

See [API Keys]({{< ref "/SCALEUIReference/TopToolbar/Settings/APIKeysScreen" >}}) for more information on adding or managing API keys.
See [API Keys]({{< ref "/SCALETutorials/TopToolbar/ManagingAPIKeys" >}}) for more information on adding or managing API keys.
{{< /expand >}}

{{< expand "Guide" "v" >}}
Click on **Guide** <span class="material-icons">library_books</span> to open the TrueNAS Documentation Hub in a new tab.
{{< /expand >}}

{{< expand "Log Out" "v" >}}
**Log Out** logs the current user out of the TrueNAS UI, but does not power off the system.
The **Read-Only Admin** and **Sharing Admin** roles only have access to the **Log Out** option.
{{< /expand >}}
{{< /expand >}}

{{< expand "Power Options" "v" >}}
Click the **Power** <span class="material-icons">power_settings_new</span> button to open the dropdown list of power options.
**Restart** logs you out of the TrueNAS UI and restarts the server. **Shut Down** logs you out of the TrueNAS UI and powers off the system as though you pressed the power button on the physical server.

{{< enterprise >}}
Please consult your specific [hardware documentation](https://www.truenas.com/docs/hardware/) to find notes about possible hardware-specific controls for power-on or off behaviors.
{{< /enterprise >}}

With the implementation of administrator roles, the power options are locked based on the level of privileges for the administrator role.
The full administrator has access to both power options, but read-only and sharing admin roles do not.
The power options that show a lock icon indicate the function is not permitted.
{{< /expand >}}
