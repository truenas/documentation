---
title: "Updating Existing Content"
linkTitle: "Updating Content"
weight: 1
type: docs
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
You'll need to log in to your GitHub account to propose any changes.

<img src="/images/article-source.png"><br><br>

Make any text changes as needed.
To check your changes for bugs in the Markdown or HTML syntax, switch to the **Preview changes** tab.
The preview won't render the Hugo-specific syntax.

### Replacing an Image

To update an existing image, click **Edit this page** and find the image location and name in the article source text.
Make sure your replacement image has the same name as the image to be replaced.

In the repository, click **Code** and navigate to the image location in the repository.
Images are located in either the */static/images/* directory or are in the same location as the article text file as part of an article bundle.

<img src="/images/image-location.png"><br><br>

Click **Upload files** and either drag and drop your image or open the file browser to select your image.
As long as the new image name is the same as the old image, the old image will be replaced and the article will automatically use the new image.

## Opening a Pull Request

When finished with your changes, scroll down to the **Commit changes** section and write a summary and description of your changes.
Select **Create a new branch for this commit and start a pull request.** and click **Propose file change**.
Make sure you're happy with your summary and description, then click **Create pull request**.

After the pull request is created, the repository automatically builds a preview of the documentation site that has your changes included.
The link to this preview is added to the Pull Request after the build completes.

That's it! Other contributors will review and merge your contribution!
