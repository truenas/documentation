&NewLine;

TrueNAS provides two feedback options, one to rate a UI screen and the other to report a problem encountered with the system.

To send feedback, click the Send Feedback {{< themed-icon src="/images/SCALE/Dashboard/FeedbackIcon.svg" alt="Feedback Icon" title="Feedback Icon" >}} icon on the top toolbar to open the **Send Feedback** window.
Alternatively, go to **System** > **General Settings** and click **File Ticket** on the **Support** widget.

### Rating a UI Screen

Click **Rate this page** to send feedback on a UI page.
You can include a screenshot of the current page and/or upload additional images with your comments.
You can also click the link to visit the TrueNAS forum, where you can vote for new features, report problems, or suggest improvements directly to the development team.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindow.png" alt="Rate This Page" id="Rate This Page" >}}

### Reporting an Issue

Click **Report a bug** to create an engineering ticket when a TrueNAS screen or feature is not working as intended.
This submits the ticket directly to the TrueNAS development team.
Submitting a bug report requires a free [Atlassian account](https://id.atlassian.com/signup).

{{< trueimage src="/images/SCALE/SystemSettings/SendFeedbackReportABugWindow.png" alt="Report a Bug" id="Report a Bug" >}}

{{< expand "Issue Reporting Example" "v" >}}
Click **Report a bug** to see the fields to create an engineering ticket for system errors, bugs, or unexpected behavior.
For example, report a bug where a middleware error and traceback occurred while saving a configuration change.

Bug reports are created in the publicly visible [TrueNAS Jira project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/).

Enter a descriptive summary in the **Subject**.
For example, if a configuration change does not update after clicking **Save** and you get an error message or traceback after attempting the change, enter *XYZ setting fails to save with a traceback* in **Subject**.
Enter the details of actions taken that resulted in the error or failed action in **Message**.
With the same example, enter more details on the issue:
*I clicked the edit XYZ settings option, modified the XYZ setting, and clicked Save. The operation failed and showed the following traceback message: [include the traceback text]. My system is running TrueNAS 25.10.0.*
Keep the details concise and focused on how to reproduce the issue, what you expected from the actions taken, and the actual result.
This helps ensure a speedy ticket resolution.

Include system debug and screenshot files to speed up the issue resolution.
Select **Attach debug**.
To attach a screenshot of the current page, select **Take screenshot of the current page**.
Or, before using this form, take screenshots of the screen, traceback or other error message, copy a log into a text file, or create any other file to attach.
Open this form and attach those files by selecting **Attach additional images** and clicking **Choose File** to open a **File Explorer** window where you can browse to select the files you want to attach to the report.

TrueNAS can show a list of existing Jira tickets with similar summaries.

{{< trueimage src="/images/SCALE/SystemSettings/ReportSimilarIssues.png" alt="Similar Issues Reported" id="Similar Issues Reported" >}}

When there is an existing ticket about the issue, consider clicking on that ticket and leaving a comment instead of creating a new one.
Duplicate tickets are closed in favor of consolidating feedback into one report.

Click **Login To Jira To Submit** to finish and submit the report.
{{< /expand >}}

### Reporting an Issue - Enterprise Licensed Systems

{{< enterprise >}}
When an Enterprise license is applied to the system, the **Report a bug** screen includes additional environment and contact information fields for sending bug reports directly to the TrueNAS team.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindowEnterpriseBugReport.png" alt="TrueNAS Enterprise Bug Report Form" id="TrueNAS Enterprise Bug Report Form" >}}

Filling out the entire form with precise details and accurate contact information ensures a prompt response from the TrueNAS Customer Support team.
{{< /enterprise >}}
