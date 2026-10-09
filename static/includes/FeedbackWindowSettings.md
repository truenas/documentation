&NewLine;


The {{< themed-icon src="/images/SCALE/Dashboard/FeedbackIcon.svg" alt="Feedback Icon" title="Feedback Icon" >}} icon on the toolbar at the top of all UI screens, and the **File Ticket** button on the **System > General Settings > Support** card open the **Send Feedback** window. 

There are two version of the **Send Feedback** window: community and Enterprise.

#### Send Feedback (Community Version)

The **Send Feedback** window community version allows non-Enterprise users to submit bug reports and open Jira tickets if they have a Jira account.

{{< trueimage src="/images/SCALE/SystemSettings/SendFeedbackWindowCommunity.png" alt="Send Feedback Window" id="Send Feedback Window" >}}

**Login To Jira To Submit** opens a Jira login screen where you enter your Jira credentials so TrueNAS can create the ticket using your credentials. 

{{< expand "Community Report a bug Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Subject** | Brief statement or description of the issue being reported. This becomes the title for the Jira ticket. For example, *Traceback received when pressing Save*. |
| **Message** | Specifies a full description of the nature of the issue encountered, steps taken before the issue occured, and the result or steps taken. Provides examples of what to enter. Populates the Jira ticket description field after clicking **Login to Jira to Submit**. |
| **Attach debug** | Downloads a system debug and attaches it to a Jira ticket in the **Private Attachement Area** for TrueNAS, which provides a secure way for users to submit confidential but required data included in the debug file. |
| **Take screenshot of the current page** | Takes a screenshot of the currently active TrueNAS screen and attaches it to the ticket created. |
| **Attach additional images** | Opens a file browser to select additional files or screenshots to attach to the ticket. Allowed files are screenshots, video files, or other files (logs, etc) to further clarify the issue reported. |
{{< /truetable >}}
{{< /expand >}}

{{< enterprise >}}
#### Send Feedback (Enterprise Version)

The Enterprise version of the **Send Feedback** window includes contact, system, and other details required to support Enterprise customer reports. If the system is down or impacting a prodcution system please contact TrueNAS support directly.

{{< trueimage src="/images/SCALE/Dashboard/SendFeedbackEnterprise.png" alt="Enterprise Send Feedback Window" id="Enterprise Send Feedback Window" >}}

**User Guide** opens the Documentation hub.

**EULA** opens the **End User License Agreement (EULA)** screen showing a copy of the TrueNAS end user license agreement. **I Agree** digitally marks it as signed, then closes the screen and updates the **Support** card with the license and hardware information.

**Submit** sends the bug report to TrueNAS.

{{< expand "Enterprise Report a bug Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the Enterprise contact person reporting the issue or the person TrueNAS should contact regarding the reported issue. |
| **Phone** | Specifies the phone number for the contact person. |
| **Email** | Specifies the email for the contact person. |
| **CC** | Specifies any additional email addresses to receive follow-up communication regarding the reported issue. |
| **Type** | Specifies the type of issue being reported. For problems use the default **Bug** as the type setting. |
| **Environment** | Specifies the environment the system operates in. Select **Production** for systems in production environments rather than test systesm. |
| **Criticality** | Sets the level of importance for the ticket. For example, production systems in a down state are critical where others might only require the inquiry level. For downed systems impacting production please contact support directly! |
| **Subject** | Brief statement or description of the issue being reported. This becomes the title for the Jira ticket. |
| **Message** | Specifies a full description of the nature of the issue encountered, steps taken before the issue occured, and the result or steps taken. Provides examples of what to enter. Populates the Jira ticket description field after clicking **Login to Jira to Submit**. |
| **Attach debug** | Downloads a system debug and attaches it to a Jira ticket in the **Private Attachement Area** for TrueNAS, which provides a secure way for users to submit confidential but required data included in the debug file. |
| **Take screenshot of the current page** | Takes a screenshot of the currently active TrueNAS screen and attaches it to the ticket created. |
| **Attach additional images** | Opens a file browser to select additional files or screenshots to attach to the ticket. Allowed files are screenshots, video files, or other files (logs, etc) to further clarify the issue reported. |
{{< /truetable >}}
{{< /expand >}}
{{< /enterprise >}}
