---
title: "Contributing with Jira"
weight: 10
---

iXsystems' utilizes Jira for bug tracking and feature development.
A login is required to use Jira, so you will need to create a Jira account.

![TrueNAS Jira Project](/images/Jira.png "TrueNAS Jira Project")


## Creating a bug

Open [The TrueNAS project on Jira](https://jira.ixsystems.com/browse/NAS), and click **Create** in the top bar.

![Create Ticket](/images/JiraCreate.png "Create Ticket")

Select Bug or Suggestion depending on the nature of your contribution.
If bug is selected, the form will reload and include more fields.

The Summary field is required.  Add a short summary for the developers.  
![SummaryField](/images/JiraSummary.png "Summar Field")

Add as much information as you can in the description field.
![DescriptionField](/images/JiraDescription.png "Description Field")

A good bug report will include the following information:

 + A "to the point" description of the issue.
 > The Summary field was a short explination, this field is where you will clearly describe the problem you are facing.

 + The exact steps you can take to reproduce the issue.
 > This can be a simple bullet point list of the steps you take to reproduce the issue.

 + What you expect should happen.
 > Explain what you expected would happen while taking the steps listed above.

 + What does happen.
 > Describe what actually happened while taking the steps listed above.

 + Software version 
 > The version string of TrueNAS can be copied from the Dashboard of the NAS.  

 + Current configuration
 > If the bug is related to a service, include the current configuration of the service.  This helps the developers reproduce your system as close as possible.

 + Debugs and console logs
 > Always include a TrueNAS Debug file and if the error is a WebUI issue, please include a console log.  If you are unsure how to save these, refer to the articles about [Creating a Debug](/Contributing/IssueReporting/Debug/) and [Saving the Console Log](/Contributing/IssueReporting/SaveWebConsoleLog/)

 + Screenshots
 > If the bug is a UI bug or a formatting problem, screenshots are very helpful.

 + Video
 > If screenshots will not adequately explain the problem, you can include a video recording of the issue.

 + Any additional Information.
 > If there is any additional information that you feel may be helpful for the developers to know, please include it.

When you are finished filling out the description, click the **Create** button at the bottom of the form window.

![Submit Ticket](/images/JiraCreateBottom.png "Submit Ticket")

Your ticket will be reviewed shortly and if any additional information is needed, you will receive an email requesting clarification and/or additional information.  As the ticket is processed, you will be updated to its status.  Developers may leave comments requesting additional input from you as they work to resolve the issue.

## Suggesting a New Feature

{{< include file="static/includes/CreateJiraSuggestion.md.part" markdown="true" >}}



