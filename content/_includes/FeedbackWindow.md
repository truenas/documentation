&NewLine;

The **How would you rate this page?** ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") icon opens a feedback window.
Alternately, go to **System Settings** > **General**, find the **Support** widget, and click **File Ticket** to see the feedback window.

The feedback window allows users to send page ratings, comments, and report issues or suggest improvements directly to the TrueNAS development team.
Submitting a bug report or improvement suggestion requires a free [Atlassian account](https://id.atlassian.com/signup).

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindow.png" alt="The Feedback Window" id="The Feedback Window" >}}

Click between the different tabs at the top of the window to see different options for your specific feedback.

{{< expand "Rate this page" "v" >}}
Use the **Rate this page** tab to quickly review and provide comments on the currently active TrueNAS user interface screen.
You can include a screenshot of the current page and/or upload additional images with your comments.
{{< /expand >}}

{{< expand "Report a bug or Suggest an improvement" "v" >}}
Use the **Report a bug** or **Suggest an improvement** tabs to notify the development team when a TrueNAS screen or feature is either not working as intended or can be evolved with new functionality.
For example, report a bug when a middleware error and traceback appears while saving a configuration change or enter an improvement suggestion when a feature can be configured in fewer clicks.

Both bug reports and improvement suggestions are created in the publicly-visible [TrueNAS Jira project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/) and have the same reporting fields.

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
When an Enterprise license is applied to the system, the Feedback window has a single **Report a bug** tab for sending bug reports directly to iXsystems.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindowEnterpriseBugReport.png" alt="SCALE Enterprise Bug Report Form" id="SCALE Enterprise Bug Report Form" >}}

Filling out the entire form with precise details and accurate contact information ensures a prompt response from the iXsystems Customer Support team.
{{< /enterprise >}}
{{< /expand >}}