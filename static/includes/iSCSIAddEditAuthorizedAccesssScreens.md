&NewLine;

The **Add Target** and **Edit Target** screens show the same configuration settings.

{{< trueimage src="/images/SCALE/Shares/AddAuthorizedAccessScreen.png" alt="Add Authorized Access Screen" id="Add Authorized Access Screen" >}}

{{< expand "Authentication Method and Group Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Group ID** | Enter a number. Allows configuring different groups with different authentication profiles. For example, all users with a group ID of *1* inherit the authentication profile associated with *Group 1*. |
| **Discover Authentication** | Select the discovery method for authentication from the dropdown list. iSCSI supports multiple authentication methods that targets use to discover valid devices. Options are: <br><li>**None** - Select to allow anonymous discovery. When set to **None**, you can leave an iSCSI Group **Authentication Method** set to **None** or empty.<br><li>**CHAP** - Select to use CHAP as the authentication method. If set to **CHAP** enter or create a new group on the **Add iSCSI Target**screen.<br><li>Mutual Chap - Select to use the Mutual CHAP two-way authentication method. To show this option, configure the **Peer User** and the password.</li> |
{{< /truetable >}}
{{< /expand >}}

{{< expand "User Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User** | User account to create CHAP authentication with the user on the remote system. Many initiators use the initiator name as the user name. |
| **Secret** | Enter the user password. Secret must be at least 12 and no more than 16 characters long. The screen displays a **Password does not match** error until you enter the same password in **Secret (Confirm)**. |
| **Secret (Confirm)** | Enter the same password to confirm the user password. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "Peer Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Peer User** | (Optional) Enter only when configuring mutual CHAP. Usually the same value as **User**. Configure the peer user name and password to see **Mutual Chap** in the **Discover Authentication** dropdown list. |
| **Peer Secret** | Enter the mutual secret password. Required if entering a **Peer User**. Peer user must use a different password than the password in **Secret**. |
| **Peer Secret (Confirm)** | Enter the same password to confirm the mutual secret password. |
{{< /truetable >}}
{{< /expand >}}