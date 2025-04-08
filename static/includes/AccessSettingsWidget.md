&NewLine;

The **Access** widget displays a list of all active sessions including the current logged-in user and the time it started, the **Session Timeout** setting for your current session, and the UI **Login Banner**.
It allows administrators to manage other active sessions and to configure the session timeout for their account.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsAccessWidget.png" alt="Access Widget" id="Access Widget" >}}

The **Terminate Other Sessions** button ends all sessions except the current session.
You can also end individual sessions by clicking the logout <span class="iconify" data-icon="bi:box-arrow-in-right"></span> button next to that session.
You must check a confirmation box before the system allows you to end sessions.

The logout icon is inactive for the currently logged-in administrator session and active for any other current sessions.
It cannot be used to terminate the currently logged-in active administrator session.

**Session Timeout** displays the configured token duration for the current session (default five minutes).
TrueNAS logs out user sessions that are inactive for longer than the configured token setting for the user.
New activity resets the token counter.

If the configured session timeout is exceeded, TrueNAS displays a **Logout** dialog with the exceeded ticket lifetime value and the time the session is scheduled to terminate.

{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

Click **Extend Session** to reset the token counter.
If the button is not clicked, the TrueNAS terminates the session automatically and returns to the login screen.

**Login Banner** displays the custom text that TrueNAS displays before the login screen.
If configured, users see the login banner and must click **Continue** to show the TrueNAS login splash screen.

To change settings, click **Configure** to open the **Access Settings** screen, where you can configure **Session Timeout** or **Login Banner**.

{{< trueimage src="/images/SCALE/SystemSettings/AccessSettingsScreen.png" alt="Access Settings Screen" id="Access Settings Screen" >}}

Select a value that fits user needs and security requirements.
Enter the value in seconds.

{{< hint type=tip title="Session Timeout Requirements" >}}
The default session timeout setting is 300 seconds or five minutes.

The minimum value allowed is 30 seconds and the maximum is 2147482 seconds, or 20 hours, 31 minutes, and 22 seconds.
{{< /hint >}}

Click **Save**.
