---
title: "Contributing to Apps"
description: "Information on requesting new apps, reporting issues with or making changes to existing apps."
weight: 10
tags:
- contributing
- issues
- support
- apps
---

We welcome community user contributions, issue reporting, and suggestions for new features or new apps to create the best possible TrueNAS app user experience!

## App Updates and Releases
Updates to TrueNAS apps occurs independent from the TrueNAS SCALE release schedule.
This means apps can be refreshed before or after a SCALE software major or maintenance release.
App refreshes include changes to the SCALE UI app install wizard or an app release version.
SCALE alerts users when a new app version is available by displaying the **Update** button and a badge on any deployed application instance on the **Installed** application screen.
Users can choose to apply the update(s) individually or collectively and at a convenient time based on needs.

## Contributing to TrueNAS-Charts project
Users can submit changes or new application requests through either the GitHub TrueNAS-Charts repository or by submitting a Jira ticket to either the TrueNAS (NAS) or TrueNAS-Charts projects.

To see a current list of apps, visit the [TrueNAS Charts repository](https://github.com/truenas/charts) on GitHub.
Click on [charts](https://github.com/truenas/charts/tree/master/charts) to view catalog files for each TrueNAS-Charts app.
Click on [community](https://github.com/truenas/charts/tree/master/community) to view catalog files for community apps.

### Submitting App Contributions in GitHub
Click **Issues** on the TrueNAS-Charts GitHub page to view a current list of open issue reports and requests.
Click **New Issue** to submit a request to add or change an existing application or to report an issue.

Enter a title to describe the request, for example, *Add Portainer App*.

Next enter a description with details about your request, information on the requested application, and reason for the request.
For example, *This app provides this functionality, not available from any other app in the TrueNAS-Charts catalog* or *Details on this app is found at this url*.

Users can submit pull requests against files in  the **TrueNAS/Charts** repository.

### Submitting App Suggestions through Jira
Users can submit issue tickets for either the **TrueNAS-Charts (TNCHARTS)** or **TrueNAS (NAS)** projects.

If opening a [Jira](https://www.atlassian.com/software/jira) ticket for an app, select **TrueNAS-Charts (TNCHARTS)** in **Project**, then select the **Issue Type** that fits your request:

* **Improvement** to suggest a change to an existing app.
* **New Feature** to request adding a new app to the catalog.
* **Bug** to report a problem with an existing application.

Enter a brief, relevant, and easily-searchable description of the request in **Summary**.

Next, enter a detailed description of the request or report in **Description**.

Field types change based on the **Issue Type** selected, but users only need to populate these three fields and provide their current release information in the **Affects versions** field before clicking **Create** to submit the request.
Jira sends an email to the registered user with a link to the new ticket. 

If uncertain of your SCALE release, go to the main SCALE **Dashboard** where you can find the version information on the **System Information** widget.

If using a nightly release not listed as in the **Affects Versions** field, include the release information in the ticket description.

For bug reports, wait to attach a debug file until you receive the email notifying you of the new ticket.
Use the link to the secure attachment area to upload the debug and link that private ticket to your issue ticket before you click **Save**.
This links the two tickets so that developers have the required information while keeping your information private and only accessible to authorized individuals.

Using the secure attachment link allows us to keep the ticket public while protecting your sensitive data.

Tickets with debugs directly attached are marked private.
Private tickets are not searchable or viewable but any other user, only authorized iXsystems employees are permitted to view private tickets.
Private tickets can result in duplicate issue reports.
iXsystems closes duplicate reports to allow developers to focus their efforts on the original report. 

For more information on submitting Jira tickets, see [Issue Reporting in Jira](https://www.truenas.com/docs/contributing/issuereporting/jiraissuereporting/).