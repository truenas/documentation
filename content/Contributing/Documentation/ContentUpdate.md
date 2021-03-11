---
title: "Updating Content"
weight: 10
---

{{< toc >}}

Changes wanted!
Contributing changes to the TrueNAS documentation has never been easier.
The Documentation Hub has been specifically built to allow users to quickly propose changes to the content without having to install any special applications.
All that is required is to have a [GitHub account](https://github.com) and a basic understanding of [Markdown](https://daringfireball.net/projects/markdown/).

The repository automatically builds a preview site for each open Pull Request (PR).
The link to this preview site is added to the PR as a comment.
The preview updates with any changes to the pull request, so you can always see an accurate preview of the changes you're making to the website.

## Making Quick Changes to an Article

If you find text that needs to be fixed or improved in an article, click *Edit this page* to view the article source text in a new browser tab.
To check your changes for bugs in the Markdown or HTML syntax, switch to the **Preview changes** tab.
The preview renders generic Markdown, but won't render any Hugo-specific syntax.
You'll need to log in to your GitHub account to propose any changes.

### Replacing an Image

To update an existing image, click *Edit this page* and find the image location and name in the article source text.
Make sure your replacement image has the same name as the image to be replaced.

In the repository, click *Code* and go to the image location in the repository.
Images are located in either the <file>/static/images/</file> directory or are in the same location as the article text file as part of an article bundle.

![ImageLocation](/images/Contribute/GitHubImagesLocation.png)

Click *Upload files* and either drag and drop your image or open the file browser to select your image.
As long as the new image name is the same as the old image, the old image is replaced and the article automatically uses the new image.

### Editing an Included File

Some article content comes from a separate *include* statement.
This statement pulls in content from a different location and allows using common text in many different website article simultaneously.
Updating an <file>include/</file> file updates the content in every single affected article!

An example of this is in the [Cron Jobs]({{< relref "CronJobs.md" >}}) article.
The expandable *Advanced Scheduler* content is pulled from another location in the repository (<file>static/includes/AdvancedScheuler.md.part</file>).
The <file>AdvancedScheuler.md.part</file> is included in the [Cloud Sync Tasks]({{< relref "CloudSyncTasks.md" >}}) and other **Tasks** content.

Clicking the *Edit this Page* link opens the article markdown file, but only these lines are visible for the included content (the `/` characters are added to prevent rendering the shortcodes):
```
{{/< expand "Advanced Scheduler" "v" >}}
{{/< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{/< /expand >}}
```

The *expand* and */expand* shortcodes handle the expansion/collapse section of the document and don't need to change.
The include statement is within the expandable element:
`{{/< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}`.

The [repository](https://github.com/truenas/documentation/) file <file>static/includes/AdvancedScheduler.md.part</file> contains the documentation for this section.
To update this section, edit the <file>.md.part</file> file.
Remember that this snippet file is used in multiple documents, so only content that generally applies is included in the snippet.
Changes that are specific to a certain piece of content are added directly to that article.

## Forking the Repo

To submit a change, you'll create a simple copy ("fork") of the main repository, edit your copy, then propose "merging" your changes back into the main repository.
To start, click the *Edit this Page* link in the top right of the site.

![ArticletoEdit](/images/Contribute/ArticletoEdit.png)

To fork the repo to your GitHub account, click the green *Fork this repository* button.

![ForktheRepository](/images/Contribute/GitHubForktheRepository.png)

{{< expand "Syncing an Existing Fork" "v" >}}
When you already have a fork of the documentation repository, it is recommended to sync your fork before continuing on to make changes:
* Open your fork repository, typically found by opening the GitHub profile drop down and clicking *Your repositories*.
* Find the sync status bar and click *Pull request*.
* Set the *base repository* to your fork and the *head repository* to truenas/documentation.
  You might need to click *compare across forks* first.
  ![CompareFork](/images/Contribute/GitHubCompareFork.png)
  <br>
* Click **Create pull request** and continue to merge the pull request.
{{< /expand >}}

Edit the page as needed.

![EditForkNotice](/images/Contribute/GitHubEditForkNotice.png)

When the changes are complete, add a quick overview of what changes were made in the description box, and click the green *Commit changes* button.

![CommitChanges](/images/Contribute/GitHubEditCommitChanges.png)

When the page refreshes the changes are complete in your forked repository.
Now you can request merging these changes main repository using a "Pull Request" (PR).
Click on *Pull Requests*.

![RepositoryFork](/images/Contribute/GitHubRepositoryFork.png)

After the **Pull Requests** page opens, click on the green *New Pull Request* button.

![ForkPullRequests](/images/Contribute/GitHubRepositoryForkPullrequests.png)

Confirm that the *base repository* is set to *truenas/documentation* and  *base* is set to *master*.
*head repository* must be set to your forked repository, for example *q5sys/documentation*.
*compare* needs to be set to *master*.
Make sure these options are correct, then click the green *Create pull request* button to create the PR.

![RepositoryComparison](/images/Contribute/GitHubRepositoryComparison.png)

Describe your changes and click the green *Create pull request* button.

![CreatePullRequest](/images/Contribute/GitHubPullRequestCreate.png)

That's it!
Other contributors review and merge your changes!

As part of the review process, automation builds a preview of the Docs site with your changes.
When the build is completed, a comment appears in the PR that shows the automation result.
Click on *Show all checks* and *Details* to see a live demo of the site with your changes.

![PullRequestSummary](/images/Contribute/GitHubPullRequestSummary.png)
