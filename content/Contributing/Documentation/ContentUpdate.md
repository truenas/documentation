---
title: "Updating Content"
description: "How to contribute changes to the TrueNAS documentation."
weight: 10
tags:
- contributing
---


Changes wanted!
Contributing changes to the TrueNAS documentation has never been easier.
The Documentation Hub is specifically built to allow users to quickly propose changes to the content without having to install any special applications.
All that is required is to have a [GitHub account](https://github.com) and a basic understanding of [Markdown](https://daringfireball.net/projects/markdown/).

You need to log in to your GitHub account to propose any changes.
The repository automatically builds a preview site for each open pull request (PR) created in GitHub.
The link to this preview site is added to the PR as a comment.
The preview updates with the changes you make to the pull request, so you can always see an accurate preview of the changes you make to the website.

## Making Quick Changes to an Article
We welcome community contributions to keep the documentation current!

Click **Edit Page** in the top right corner of an article screen to propose changes to the article.

To check your changes for bugs in the Markdown or HTML syntax, switch to the **Preview changes** tab.
The preview renders generic Markdown but does not render Hugo-specific syntax.

### Replacing an Image
To update an existing image, click **Edit Page** and find the image location and name in the article source text.
Name a replacement image with the same name as the existing image you are replacing.

In the repository, click **Code** and go to the image location in the repository.
Images are located in the <file>/static/images/</file> directory and in the same folder location as indicated in the image path found in the article text file as part of an article bundle.

[![ImageLocation](/images/Contribute/GitHubImagesLocation.png)](/images/Contribute/GitHubImagesLocation.png)

Click **Upload files** and either drag and drop the new or replacement image into the file upload area or open the file browser to select your image.
Naming the new image name the same as the old image automatically replaces the old image with the new one in every article that includes it. 

If adding a new image to the article, give the PNG image a descriptive name, such as *Adding an SMB Share* or *Add SMB Share Advanced Settings* and save it in the appropriate <file>/static/images/</file> folder.
Enter the path to the image and the image name to the image link in the article.

### Editing an Included File
Some article content comes from a separate `include file` statement, also referred to as a shortcode.
This statement pulls in content from a different location and allows using common text in multiple website articles simultaneously.
These files are called *snippets*.
Updating an <file>/static/includes/</file> file updates the content in every article that uses that included snippet file!

For example, the snippet file <file>AdvancedScheduler.md</file> is called into articles where the procedure mentions creating a custom schedule for tasks that can run on a schedule, such as for replication, cloud sync, and other data protection tasks.
You can insert the `include file` shortcode anywhere in the body of an article.
The example below shows this inside the `expand` tags.

Clicking **Edit Page** opens the article markdown file, but only these lines are visible for the included content (the added `\` characters prevent rendering the shortcodes in this article):
```
{{\< expand "Advanced Scheduler" "v" >}}
{{\< include file="/static/includes/AdvancedScheduler.md" >}}
{{\< /expand >}}
(Do not include the escaping backslashes \)
```

In the above example, the `expand` and `/expand` shortcode tags create an expansion/collapse function in the document.
The include shortcode is within the expandable element: `{{\< include file="/static/includes/AdvancedScheduler.md" >}}`.
(Do not include the escaping backslashes \)

The [repository](https://github.com/truenas/documentation/) file <file>static/includes/AdvancedScheduler.md</file> contains the text for the included snippet.
To update the content, edit the <file>AdvancedScheduler.md</file> file.
Multiple documents can use a snippet file, so only make changes to snippet content that applies to this included file.
Changing the snippet content makes the same changes in all articles calling this file.
Make changes directly in the article that are specific to the article but not applicable to all other articles that share the snippet.
For example, make only content changes that apply to the advanced scheduler in the snippet, but do not include mentions about tasks that use the scheduler.

##  Master and Version Branch Differences
TrueNAS documentation uses branches to organize content related to specific software releases and updates, for example, the ***24.04*** and ***23.10*** SCALE branches of the Documentation Hub. 

+ Content changes in the ***master*** branch result in changes to the TrueNAS SCALE Nightly Development Documentation content.
  To make changes in the ***master*** branch, *fork* this branch to create a simple copy of the main repository.
  Make changes in your forked *master* as the *base* for your changes.
  Do not make changes directly to the TrueNAS **master** branch of the Documentation Hub repository.

+ To make content changes in the ***24.04*** branch, select the ***24.04*** as the **base**, then create a fork of that main repository.
  This ensures approved modifications are added to the TrueNAS SCALE 24.04 (Dragonfish) Documentation content.

+ To make content changes in the ***23.10*** branch, select the ***23.10*** as the **base**, then create a fork of that main repository.
  This ensures that approved modifications are added to the TrueNAS SCALE 23.10 (Cobia) Documentation content.

## Fork the Repo
To submit a change or a new article, create a *fork* (local copy) of the main repository, edit your local copy, and then propose merging your changes back into the main repository.

To start, click the **Edit Page** link in the top right of the site.

[![ArticletoEdit](/images/Contribute/ArticletoEdit.png)](/images/Contribute/ArticletoEdit.png)

To fork the repo to your GitHub account, click the green **Fork this repository** button.

[![ForktheRepository](/images/Contribute/GitHubForktheRepository.png)](/images/Contribute/GitHubForktheRepository.png)

{{< expand "Syncing an Existing Fork" "v" >}}
When you already have a fork of the documentation repository, we recommend you sync your fork before continuing on to make changes. This updates your local copy with changes made to the main repository after you forked it.
1. Open your fork repository, typically found by opening the GitHub profile drop-down and clicking **Your repositories**.
2. Find the sync status bar and click **Pull request**.
3. Set the **base repository** to your fork and the **head repository** to *truenas/documentation*.
   You might need to click **compare across forks** first.

  [![CompareFork](/images/Contribute/GitHubCompareFork.png)](/images/Contribute/GitHubCompareFork.png)

4. Click **Create pull request** and continue to merge the pull request.
{{< /expand >}}

Edit the page as needed.

[![EditForkNotice](/images/Contribute/GitHubEditForkNotice.png)](/images/Contribute/GitHubEditForkNotice.png)

When the changes are complete, add a quick overview of the changes made in the** Description** box, and click the green **Commit changes** button.

[![CommitChanges](/images/Contribute/GitHubEditCommitChanges.png)](/images/Contribute/GitHubEditCommitChanges.png)

When the page refreshes the changes are complete in your forked repository.
Now you can request merging these changes to the main repository using a pull request (PR).
Click on **Pull Requests**.

[![RepositoryFork](/images/Contribute/GitHubRepositoryFork.png)](/images/Contribute/GitHubRepositoryFork.png)

After the **Pull Requests** page opens, click the green **New Pull Request** button.

[![ForkPullRequests](/images/Contribute/GitHubRepositoryForkPullrequests.png)](/images/Contribute/GitHubRepositoryForkPullrequests.png)

Confirm that the **base repository** is set to **truenas/documentation** and  **base** is set to **master** or the version branch you are changing (i.e., if you are using 24.04, set that as the **base**).
Set **head repository** to your forked repository, for example, *q5sys/documentation*.
Set **compare** to **master**, or the version branch if proposing changes to either of those branches.
Ensure these options are correct, then click the green **Create pull request** button to create the PR.

[![RepositoryComparison](/images/Contribute/GitHubRepositoryComparison.png)](/images/Contribute/GitHubRepositoryComparison.png)

Describe your changes and click the green **Create pull request** button.

[![CreatePullRequest](/images/Contribute/GitHubPullRequestCreate.png)](/images/Contribute/GitHubPullRequestCreate.png)

That is it!
Other contributors review and merge your changes!

As part of the review process, automation builds a preview of the docs site with your changes.
When the build completes, a comment appears in the PR that shows the automation result.
Click on **Show all checks** and **Details** to see a live demo of the site with your changes.

[![PullRequestSummary](/images/Contribute/GitHubPullRequestSummary.png)](/images/Contribute/GitHubPullRequestSummary.png)
