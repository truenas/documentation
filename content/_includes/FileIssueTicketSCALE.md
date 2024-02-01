&NewLine;

We encourage TrueNAS SCALE users to report bugs and to vote for or suggest new TrueNAS features in the project Jira instance.
You must have [a Jira account](https://id.atlassian.com/signup?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252F94e022be-3595-4f54-979f-780bfeff904d%26continue%3Dhttps%253A%252F%252Fixsystems.atlassian.net%252Fplugins%252Fservlet%252Foauth%252Fauthorize%253Foauth_token%253Dz4KC1gtOt92BMtgTSMeJVf4Ku3sgNIls&application=jira) to create a bug ticket.

If you encounter a bug or other issue while using TrueNAS SCALE, you can report issues in one of two ways:

* Log into Jira and use **Create** to open a new ticket [details]({{< relref "JiraIssueReporting.md" >}}).
* Use the **How would you rate this page?** ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") icon or **File Ticket** option on the **System Settings > General** screen to create a bug report in the [TrueNAS Jira Project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/issues).

The web interface provides a form to report issues without logging out of SCALE.
The form prompts you to provide the information and attachments we need to assist users.

New Jira tickets are publicly viewable so it is possible to search the project first to see if another user already reported the issue.

Each Jira ticket sends a link to a private file attachment area to safeguard user personal and private data.
We encourage users to use the [link](https://ixsystems.atlassian.net/servicedesk/customer/portal/15/group/37/create/153) in the automated report response to keep the debug file secure and restrict access to only those that require the information to diagnose the cause of the issue reported.

If the attached files do not require privacy, attach them to the Jira ticket.
All incoming tickets are triaged.
If private files are attached to a new ticket, the ticket or files can be made private at that time.

{{< hint type=warning title="Debug Files Contain Sensitive Information">}}
System debugs contain log files which can include personal information such as usernames, and other identifying information about your system such as networking configuration, device serial numbers, etc.
Users can use a file archiver utility, such as 7-Zip File Manager, to open compressed debug archives and review log contents.
Redact any personal data you have concerns about sharing and save the debug file before attaching and linking it to a Jira ticket in the TrueNAS project.
{{< /hint >}}
