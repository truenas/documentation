&NewLine;

The icon buttons in the top toolbar menu link to the iXsystems site, display the status of TrueCommand and directory servers, and show system processes and configuration menus. You can also collapse and expand the main function menu on the left side of the screen.

{{< trueimage src="/images/SCALE/Dashboard/TopToolbar.png" alt="TrueNAS SCALE Top Toolbar Icons" id="TrueNAS SCALE Top Toolbar Icons" >}}

The SCALE top navigation top toolbar provides access to functional areas of the UI that you might want to directly access while on other screens in the UI.
Icon buttons provide quick access to dropdown lists of options, dropdown panels with information on system alerts or tasks, and can include access to other information or configuration screens.
{{< expand "iXsystems" "v" >}}
The iXsystems logo opens the [iXsystems home page](https://www.ixsystems.com/). There, users can find information about storage and server systems.

Users can also use the iXsystems home page to access their customer portal and the community section for support.
{{< /expand >}}

{{< expand "How would you rate this page?" "v" >}}
{{< include file="/_includes/FeedbackWindow.md" >}}
{{< /expand >}}

{{< expand "Status of TrueCommand" "v" >}}

{{< include file="/content/_includes/StatusOfTrueCommand.md" >}}

{{< /expand >}}
{{< expand "Directory Services Monitor" "v" >}}

{{< include file="/content/_includes/DirectoryServicesMonitor.md" >}}

{{< /expand >}}

{{< expand "Jobs" "v" >}}
{{< include file="/content/_includes/Jobs.md" >}}
{{< /expand >}}

{{< expand "Alerts" "v" >}}

{{< include file="/_includes/AlertsSCALE.md" >}}

{{< /expand >}}

{{< expand "Settings" "v" >}}
The **Settings** <span class="material-icons">account_circle</span> icon opens a dropdown list of options for passwords, API keys, and TrueNAS information.
{{< expand "Change Password" >}}

{{< include file="/content/_includes/ChangeLoggedInUserPassword.md" >}}

{{< /expand >}}
{{< expand "API Keys" "v" >}}
Click on **API Keys** <span class="material-icons">laptop</span> to add an API key. API keys identify an outside resource or application without a principal.
For example, when adding a new system to TrueCommand you are required to add an API key to authenticate the system. Use this function to create an API key for this purpose.

Click **API Docs** to access the API documentation portal with information on TrueNAS SCALE API commands.

See [API Keys]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Settings/APIKeysScreen.md" >}}) for more information on adding or managing API keys.
{{< /expand >}}
{{< expand "Guide and About" "v" >}}
Click on **Guide** <span class="material-icons">library_books</span> to open the TrueNAS Documentation Hub in a new tab.

Click on **About** <span class="iconify" data-icon="ant-design:info-circle-outlined"></span> to display the information window with links to the TrueNAS Documentation Hub, TrueNAS Community Forums, FreeNAS Open Source Storage Appliance GitHub repository, and iXsystems home page.

{{< trueimage src="/images/SCALE/Dashboard/TrueNASAboutScreenSCALE.png" alt="About Window" id="About Window" >}}

{{< /expand >}}
{{< /expand >}}

{{< expand "Power Options" "v" >}}
Click the **Power** <span class="material-icons">power_settings_new</span> button to open the dropdown list of power options. Options are **Log Out** which logs you out of the SCALE UI but does not power off the system, **Restart** which logs you out of the SCALE UI and restarts the server, or **Shut Down** which logs you out of the SCALE UI and powers off the system as though you pressed the power button on the physical server.
{{< /expand >}}
