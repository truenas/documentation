&NewLine;

The **Access** widget displays a list of all active sessions, including the user who initiated the session and what time it started.
It also displays the **Token Lifetime** setting for your current session.
It allows administrators to manage other active sessions and to configure the token lifetime for their account.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsAccessWidget.png" alt="Accesss Widget" id="Access Widget" >}}

The **Terminate Other Sessions** button ends all sessions except for the one you are currently using.
You can also end individual sessions by clicking the logout <span class="iconify" data-icon="bi:box-arrow-in-right"></span> button next to that session.
You must check a confirmation box before the system allows you to end sessions.

The logout icon is inactive for the currently logged in administrator session and active for any other current sessions.
It cannot be used to terminate the currently logged in active administrator session.

**Token Lifetime** displays the configured token duration for the current session (default five minutes).
TrueNAS SCALE logs out user sessions that are inactive for longer than that configured token setting for the user.
New activity resets the token counter.

If the configured token lifetime is exceeded, TrueNAS SCALE displays a **Logout** dialog with the exceeded ticket lifetime value and the time that the session is scheduled to terminate.

{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

Click **Extend Session** to reset the token counter.
If the button is not clicked, the TrueNAS SCALE terminates the session automatically and returns to the log in screen.

Click **Configure** to open the **Token Settings** screen and configure **Token Lifetime** for the current account.

{{< trueimage src="/images/SCALE/SystemSettings/TokenSettingsScreen.png" alt="Token Settings Screen" id="Token Settings Screen" >}}

Select a value that fits user needs and security requirements.
Enter the value in seconds.

{{< hint type=tip >}}
The default lifetime setting is 300 seconds, or five minutes.

The minimum value allowed is 30 seconds.

The maximum is 2147482 seconds, or 20 hours, 31 minutes, and 22 seconds.
{{< /hint >}}

Click **Save**.
