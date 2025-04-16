&NewLine;

The **Access** widget shows a list of all active sessions including the current logged-in user and the time it started.
The **Session Timeout** setting shows the number of minutes for the current session.

The **Login Banner** shows the custom text entered on the **Access Settings** screen. This text shows before the login screen.
When configured, users see the login banner and must click **Continue** to show the TrueNAS login splash screen.

Administrators can manage other active sessions and configure the session timeout for their accounts.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsAccessWidget.png" alt="Access Widget" id="Access Widget" >}}

**Terminate Other Sessions** ends all sessions except the current session.
To end individual sessions, click the logout <span class="iconify" data-icon="bi:box-arrow-in-right"></span> button next to that session.
You must check a confirmation box before the system allows you to end sessions.

The logout icon is inactive for the currently logged-in administrator session and active for any other current sessions.
It cannot be used to terminate the currently logged-in active administrator session.

**Session Timeout** shows the configured token duration for the current session (default is five minutes).
TrueNAS logs out user sessions that are inactive for longer than the configured token setting for the user.
New activity resets the token counter.

When the configured session timeout is exceeded, TrueNAS displays a **Logout** dialog with the exceeded ticket lifetime value and the time the session is scheduled to terminate.

{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

Click **Extend Session** to reset the token counter.
If not clicked, TrueNAS terminates the session automatically and returns to the login screen.

To change settings, click **Configure** to open the **Access Settings** screen, where you can configure a session timeout or add a login banner.

{{< trueimage src="/images/SCALE/SystemSettings/AccessSettingsScreen.png" alt="Access Settings Screen" id="Access Settings Screen" >}}
