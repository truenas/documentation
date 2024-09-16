---
title: "Contributing to Apps"
description: "Information on requesting new apps, reporting issues with or making changes to existing apps."
weight: 20
tags:
- contributing
- issues
- support
- apps
---


We welcome community user contributions, issue reporting, and suggestions for new features and apps to create the best possible TrueNAS app user experience!

## App Updates and Releases
Application maintenance is independent of TrueNAS version release cycles.
App version information, features, configuration options, and installation behavior during access might vary from those in documented tutorials.

TrueNAS apps show the **Update** button and a badge on any deployed application instance on the **Installed** application screen when a new version is available.
Users can apply the update(s) individually or collectively and at a convenient time based on needs.

## Contributing to TrueNAS Application Catalogs
Users can submit changes to an existing application catalogs through:

* GitHub PRs

  Users can submit bug reports either by creating an issue ticket in Jira or filing an issue report in the correct charts, community, or apps repository.
  Use either of the following methods:

  * Click **Issues** on the TrueNAS-Charts GitHub page to view a current list of open issue reports and requests.
  * Click **New Issue** to submit a request to add or change an existing application or to report an issue.

  Enter a title to describe the request.
  Populate the Description field with details about the issue.
  Select the currently installed release from the **Affects Version** dropdown list. If not on the list, include this in the description.
  
  For more information on submitting Jira tickets, see [Issue Reporting in Jira](https://www.truenas.com/docs/contributing/issuereporting/jiraissuereporting/).

* Community Forum Feature Requests

  To request a feature change, go to the [TrueNAS Community Forum](https://forums.truenas.com/), and click **Feature Request**.
  Read the **About the Feature Requests category - README First** topic, then click **Open Draft** on the top right of the screen.
  Populate the new request form with the relevant information for each section, **Problem/Justification**, **Impact**, and **User Story**.
  The form provides guidance on how to populate these sections.
  Click **Create Topic** to add your suggestion to the list of topics.

  Users vote and comment on these suggestions.
  iXsystems actively monitors this channel and discusses the feasibility of each request both internally and in the forum posts.

  If approved and requested to submit a PR to add the new application, submit a PR against the [TrueNAS/Community](https://github.com/truenas/charts/tree/master/community) repository.
  Include the relevant files in the PR, including a ReadMe.txt file with any installation notes for iXsystems developers.

To see a current list of apps, visit the [TrueNAS Apps repository](https://github.com/truenas/apps) on GitHub.
The list of apps is also available in each of the two catalog repositories.
Click on [charts](https://github.com/truenas/charts/tree/master/charts) to view repository files for each TrueNAS Charts app.
Click on [community](https://github.com/truenas/charts/tree/master/community) to view catalog files for community apps.

## Contributing to TrueNAS Application Documentation
Community members can submit change requests or add new tutorials to the Community Apps tutorials section of the Documentation Hub.
For more information on submitting change requests, forking repos, and submitting PRs, see [Content Updates]({{< relref "/Contributing/Documentation/ContentUpdate.md" >}}).

When submitting new tutorials or requesting changes to existing TrueNAS Documentation Hub application tutorials:
  
  * Create the PR against a forked copy of the [TrueNAS Documentation Hub public repository](https://github.com/truenas/documentation/tree/master).
    
    In your local forked repository, open the existing article file in either the **CommunityApps** or the **ChartApps** folder of the **/content/SCALE/SCALETutorials/Apps/** directory.
     
    If submitting a new tutorial, add the new tutorial to the **CommunityApps** folder in your local copy of the repository.
    
    Use the text editor of your choice to make changes to the [application tutorial template]({{< relref "/Contributing/Documentation/AppArticleTemplate.md" >}}) as the basis for your new article.
    Article content is written in Commonmark Markdown.
    
    (Optional) Save images in the **/documentation/static/scale/apps** folder of your local branch.
    
    Submit the PR against the **Master** branch.
  
  * Click **Edit Article** at the top of the Documentation Hub article to request changes to an existing article.
    Refer to the [Content Updates]({{< relref "/Contributing/Documentation/ContentUpdate.md" >}}) article for more details.
