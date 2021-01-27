---
title: "Updating Content"
weight: 1
---

Changes wanted!
Contributing changes to the TrueNAS documentation has never been easier.
The Documentation Hub has been specifically built to allow users to quickly propose changes to the content without having to install any special applications.
All that is required is to have a [GitHub account](https://github.com) and a basic understanding of [Markdown](https://daringfireball.net/projects/markdown/).

The repository automatically builds a preview site for each open Pull Request (PR).
The link to this preview site is added to the PR as a comment.
The preview updates with any changes to the pull request, so you can always see an accurate preview of the changes you're making to the website.

## Making Quick Changes to an Article

If you find text that needs to be fixed or improved in an article, click **Edit this page** to view the article source text in a new browser tab.
To check your changes for bugs in the Markdown or HTML syntax, switch to the **Preview changes** tab.
The preview renders generic Markdown, but won't render any Hugo-specific syntax.
You'll need to log in to your GitHub account to propose any changes.

### Replacing an Image

To update an existing image, click **Edit this page** and find the image location and name in the article source text.
Make sure your replacement image has the same name as the image to be replaced.

In the repository, click **Code** and navigate to the image location in the repository.
Images are located in either the */static/images/* directory or are in the same location as the article text file as part of an article bundle.

<img src="/images/ImageLocation.png"><br><br>

Click **Upload files** and either drag and drop your image or open the file browser to select your image.
As long as the new image name is the same as the old image, the old image will be replaced and the article will automatically use the new image.

## Forking the Repo

To submit a change, you'll create a simple copy ("fork") of the main repository, edit your copy, then propose "merging" your changes back into the main repository.
To start, click the **Edit this Page** link in the top right of the site. 

<img src="/images/ForkingContribution-00.png" width='700px'>
<br><br>

To fork the repo to your GitHub account, click the green **Fork this repository** button.

<img src="/images/ForkingContribution-01.png" width='700px'>
<br>

{{% pageinfo %}}
If you already have a fork of the documentation repository, it is recommended to sync your fork before continuing on to make changes:
* Open your fork repository, typically found by opening the GitHub profile drop down and clicking **Your repositories**.
* Find the sync status bar and click **Pull request**.
* Set the *base repository* to your fork and the *head repository* to freenas/documentation. You might need to click **compare across forks** first.
  <img src="/images/GitHubCompareFork.png">
  <br>
* Click **Create pull request** and continue to merge the pull request.
{{% /pageinfo %}}

Edit the page as needed.

<img src="/images/ForkingContribution-02.png" width='700px'>
<br><br>

When the changes are complete, add a quick overview of what changes were made in the description box, and click the green **Commit changes** button.

<img src="/images/ForkingContribution-03.png" width='700px'>
<br><br>

When the page refreshes the changes are complete in your forked repository.
Now you can request merging these changes main repository using a "Pull Request" (PR).
Click on **Pull Requests**.

<img src="/images/ForkingContribution-04.png" width='700px'>
<br><br>

After the Pull Requests page opens, click on the green **New Pull Request** button.

<img src="/images/ForkingContribution-05.png" width='700px'>
<br><br>

Confirm that the *base repository* is set to **freenas/documentation** and  *base* is set to **master**.
*head repository* must be set to your forked repository, for example **q5sys/documentation**.
*compare* needs to be set to **master**.
Make sure these options are correct then click the green **Create pull request** button to create the PR.

<img src="/images/ForkingContribution-06.png" width='700px'>
<br><br>

Describe your changes and click the green **Create pull request** button.

<img src="/images/ForkingContribution-07.png" width='700px'>
<br><br>

That's it!
Other contributors will review and merge your changes!

As part of the review process, automation will build a preview of the Docs site with your changes.
When the build is completed, a comment will be added to the PR that says *All checks have passed 1 successful check*.
Click on **Show all checks** and **Details** to see a live demo of the site with your changes.

<img src="/images/fForkingContribution-08.png" width='700px'>
