---
title: "Bugs and Features"
weight: 5
---

{{< toc >}}

iXsystems uses [Jira](https://www.atlassian.com/software/jira) for bug tracking and feature development.
Public issues are viewable without logging in, but you will need to create a Jira account to report bugs or suggest features.

![TrueNAS Jira Project](/images/Contribute/Jira.png "TrueNAS Jira Project")

## Bug Reports

Go to the [TrueNAS project on Jira](https://jira.ixsystems.com/browse/NAS) and click *Create* in the top bar.

![Create Ticket](/images/Contribute/JiraCreate.png "Create Ticket")

Set the *Issue Type* to *Bug* and form reloads with more fields.
Most of the fields are used by the developers, but fill out the *Summary* and *Description* to provide a useful report:

The *Summary* is a short, descriptive title that helps developers find the issue and understand the topic.

![SummaryField](/images/Contribute/JiraSummary.png "Issue Summary")

The *Description* is for specific issue details.

![DescriptionField](/images/Contribute/JiraDescription.png "Description Field")

A good bug report includes these elements:

* A "to the point" description of the issue.
  Try to clearly describe the problem that was encountered.

* Reproducing the issue.
  This can be a simple bullet point list of the steps you took to see the issue.

* What should have happened.
  Explain what you expected to happen while taking the steps listed above.

* What did happen.
  Describe what actually happened while taking the steps listed above.

* Software version.
  The TrueNAS **Dashboard** shows the installed version

* Current configuration.
  When the bug is related to a service, include the current configuration of the service.  This helps the developers reproduce your system as close as possible.

* Debugs and console logs.
  Always include a TrueNAS Debug file and, if the error is a web interface issue, please include a console log.
  When unsure how to save these, refer to [Creating a Debug]({{< relref "Debug.md" >}}) and [Saving the Console Log]({{< relref "SaveWebConsoleLog.md" >}})

* Screenshots
  When the bug is a web interface glitch or a formatting problem, screenshots are very helpful.

* Video
  When screenshots do not adequately show the issue, you can include a video recording of the issue.

* Additional information.
  When there is any additional details that you think can be helpful for the developer investigation, please include it.

When finished filling out the *Description*, click *Create* at the bottom of the form.

![Submit Ticket](/images/Contribute/JiraCreateBottom.png "Submit Ticket")

The ticket will be reviewed and updated when any additional information is needed.
The Jira account receives emails about the ticket status.
Check the ticket periodically as developers can request additional details as they work to resolve the issue.

## Feature Suggestions

{{< include file="static/includes/CreateJiraSuggestion.md.part" markdown="true" >}}
