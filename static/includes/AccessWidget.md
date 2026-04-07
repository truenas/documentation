&NewLine;

The **Access** widget shows a list of all active sessions, including the current logged-in user and the time it started.

The **Login Banner** shows the custom text entered on the **Access Settings** screen. This text shows before the login screen.
When configured, users see the login banner and must click **Continue** to show the TrueNAS login splash screen.

Administrators can manage other active sessions and configure the session timeout for their accounts.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsAccessWidget.png" alt="Access Widget" id="Access Widget" >}}

**Terminate Other Sessions** ends all sessions except the current session. It opens the **Terminate session** dialog. Click **Confirm** then **Continue** to end other sessions. This does not terminate the currently logged-in administration user session.

The logout icon is inactive for the currently logged-in administrator session and active for any other current sessions.
It cannot be used to terminate the currently logged-in active administrator session.

The **Start Session time** shows the configured token duration for the current session (default is five minutes).
TrueNAS logs out user sessions that are inactive for longer than the configured token setting for the user.
New activity resets the token counter.

To change settings, click **Configure** to open the **Access Settings** screen, where you can add a login banner.

{{< trueimage src="/images/SCALE/SystemSettings/AccessSettingsScreen.png" alt="Access Settings Screen" id="Access Settings Screen" >}}
