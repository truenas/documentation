---
title: "Contributing to Apps"
description: "Information on requesting new apps, reporting issues with or making changes to existing apps."
weight: 20
tags:
- contributing
- issues
- support
- apps
aliases:
- /contributing/documentation/appcontributions/
---


We welcome community user contributions, issue reporting, and suggestions for new features and apps to create the best possible TrueNAS app user experience!

## App Updates and Releases
Application maintenance is independent of TrueNAS SCALE version release cycles.
App version information, features, configuration options, and installation behavior during access might vary from those in documented tutorials.

TrueNAS apps show the **Update** badge and button on any deployed application instance on the **Installed** application screen when a new version is available.
Users can apply the update(s) individually or collectively and at a convenient time based on needs.

## Contributing to TrueNAS Application Catalogs
Users can submit changes to an existing application catalogs through:

* GitHub Contributions

  {{< hint type=note title="Coming Soon" >}}
  We are actively working on making the core application library more user-friendly. This process might involve breaking changes to the API. Therefore, please wait for an update on when you can start submitting pull requests.

  Thank you for your understanding.
  {{< /hint >}}

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

## Contributing to TrueNAS Application Documentation
Community members can submit change requests or add new tutorials to the Community Apps tutorials section of the Documentation Hub.
For more information on submitting change requests, forking repos, and submitting PRs, see [Updating Content]({{< relref "/Contributing/Documentation/ContentUpdate.md" >}}).

When submitting new tutorials or requesting changes to existing TrueNAS Documentation Hub application tutorials:
  
* Create the PR against a forked copy of the [TrueNAS Documentation Hub public repository](https://github.com/truenas/documentation/tree/master).

  In your local forked repository, open the existing article file in either the **CommunityApps** or the **StableApps** folder of the **/content/TrueNASApps/** directory.

  If submitting a new tutorial, add the new tutorial to the **CommunityApps** folder in your local copy of the repository.

  Use the text editor of your choice to make changes to the [application tutorial template]({{< relref "/Contributing/Applications/AppArticleTemplate.md" >}}) as the basis for your new article.
  Article content is written in Commonmark Markdown.

  (Optional) Save images in the **/documentation/static/images/scale/apps** folder of your local branch.

  Submit the PR against the **Master** branch.

* Click **Edit Article** at the top of the Documentation Hub article to request changes to an existing article.
  Refer to the [Content Updates]({{< relref "/Contributing/Documentation/ContentUpdate.md" >}}) article for more details.
