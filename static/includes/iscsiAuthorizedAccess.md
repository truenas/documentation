&NewLine;

The **Authorized Access** screen displays settings to create new authorized access networks or edit existing ones in the list.

If you have not set up authorized access yet, the **No Authorized Access** screen displays with the **Add Authorized Access** button in the center of the screen. **Add Authorized Access** or **Add** at the top of the screen opens the **Add Authorized Access** screen.

![iSCSIManualNoAuthAccess](/images/SCALE/Shares/iSCSIManualNoAuthAccess.png "iSCSI No Authorized Access")

After adding authorized access to the system, the **Authorized Access** screen displays a list of users.

![SharingiSCSIAuthorizedAccessScreen](/images/SCALE/Shares/SharingiSCSIAuthorizedAccessScreen.png "iSCSI Authorized Access Screen")

**Add** opens the **Add Authorized Access** screen.

The <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to each entry displays two options, **Edit** and **Delete**. **Edit** opens the **Edit Authorized Access** screen, and **Delete** opens a dialog to delete the authorized access for the selected user.
The **Add** and **Edit** screens display the same settings.

![iSCSIManualAddAuthAccess](/images/SCALE/Shares/iSCSIManualAddAuthAccess.png "iSCSI Add Authorized Access Screen")

#### Group Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **Group ID** | Enter a number. This allows configuring different groups with different authentication profiles. Example: all users with a group ID of *1* inherit the authentication profile associated with *Group 1*. |
{{< /truetable >}}

#### User Settings

{{< truetable >}}
| Setting | Description |
|---------|-------|
| **User** | User account to create CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| **Secret** | Enter the user password. Secret must be at least 12 and no more than 16 characters long. The screen displays a "password does not match" error until you enter the same password in **Secret (Confirm)**.  |
| **Secret (Confirm)** | Enter the same password to confirm the user password. |
{{< /truetable >}}

#### Peer User Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Peer User** | Optional. Enter only when configuring mutual CHAP. Usually the same value as **User**. |
| **Peer Secret** | Enter the mutual secret password. Required if entering a **Peer User**. Must be a different password than the password in **Secret**. |
| **Peer Secret (Confirm)** | Enter the same password to confirm the mutual secret password. |
{{< /truetable >}}
