&NewLine;

We encourage TrueNAS users to report bugs and to vote for or suggest new TrueNAS features in the project Jira instance.
You must have an Atlassian account and join the TrueNAS Jira instance to create a bug ticket.
Signing in to your Atlassian account does not give you access to the TrueNAS instance.
For the steps to join the instance, see [Joining the TrueNAS Jira Instance](https://www.truenas.com/docs/contributing/issuereporting/jiraissuereporting/#joining-the-truenas-jira-instance).

If you encounter a bug or other issue while using TrueNAS, you can report issues in one of two ways:

* Log into Jira and use **Create** to open a new ticket [details](https://www.truenas.com/docs/contributing/issuereporting/jiraissuereporting/).
* Use the **Send Feedback** ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") icon or **File Ticket** option on the **System > General Settings** screen to create a bug report in the [TrueNAS Jira Project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/issues).

The web interface provides a form to report issues without logging out of TrueNAS.
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
