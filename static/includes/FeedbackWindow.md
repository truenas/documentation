&NewLine;

The **Send Feedback** ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") icon opens a feedback window.
Alternately, go to **System** > **General**, find the **Support** widget, and click **File Ticket** to see the feedback window.

The feedback window allows users to send page ratings, comments, vote for new features on the community forum, report issues, or suggest improvements directly to the TrueNAS development team.
Submitting a bug report requires a free [Atlassian account](https://id.atlassian.com/signup).

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindow.png" alt="Send Feedback Window" id="Send Feedback Window" >}}

Click between the tabs at the top of the window to see options for your specific feedback.

{{< expand "Rate this page" "v" >}}
Use the **Rate this page** tab to quickly review and provide comments on the currently active TrueNAS user interface screen.
You can include a screenshot of the current page and/or upload additional images with your comments.
{{< /expand >}}
{{< expand "Report a bug" "v" >}}
Use the **Report a bug** tab to notify the development team when a TrueNAS screen or feature is not working as intended.
For example, report a bug when a middleware error and traceback appears while saving a configuration change.

Bug reports are created in the publicly-visible [TrueNAS Jira project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/).

Enter a descriptive summary in the **Subject**.
TrueNAS can show a list of existing Jira tickets with similar summaries.
When there is an existing ticket about the issue, consider clicking on that ticket and leaving a comment instead of creating a new one.
Duplicate tickets are closed in favor of consolidating feedback into one report.

Enter details about the issue in the **Message**.
Keep the details concise and focused on how to reproduce the issue, what the expected result of the action is, and what the actual result of the action was.
This helps ensure a speedy ticket resolution.
Include system debug and screenshot files to also speed up the issue resolution.
{{< /expand >}}
{{< expand "Bug Reports from Enterprise Licensed Systems" "v" >}}
{{< enterprise >}}
When an Enterprise license is applied to the system, the **Report a bug** tab has additional environment and contact information fields for sending bug reports directly to the TrueNAS team.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindowEnterpriseBugReport.png" alt="TrueNAS Enterprise Bug Report Form" id="TrueNAS Enterprise Bug Report Form" >}}

Filling out the entire form with precise details and accurate contact information ensures a prompt response from the TrueNAS Customer Support team.
{{< /enterprise >}}
{{< /expand >}}
