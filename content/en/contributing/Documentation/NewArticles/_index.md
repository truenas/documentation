---
title: "Adding a New Article"
description: "How to contribute a new article bundle to the TrueNAS documentation."
weight: 20
tags:
- contributing
---

Thanks for your interest in submitting documentation articles!
This article shows you how to add a new article to the TrueNAS Documentation Hub.
All that is required is a [GitHub account](https://github.com) and your favorite text editor.
Taking screenshots for your article is also recommended.

To add an article, construct a bundle that contains your text file and any images, then open a pull request on the repository.
There is an [Article Template]({{< ref "/contributing/documentation/template" >}}) available that can simplify creating your article.

## Creating an Article Bundle

Find a place on your local system to create a directory for your article.
Name the directory according to the title of your article.

{{< trueimage src="/images/Contribute/HugoNewArticleBundle.png" alt="Creating an Article Bundle" id="Creating an Article Bundle" >}}

Open the directory and create a new file called <file>index.md</file>.
This file contains all the text for your article.

### Writing the Article

The first few lines of the <file>index.md</file> are reserved for an intro block called the "front matter" that contains the document title and other information.
For example, this article uses basic front matter:

```
---
title: "Adding a New Article"
weight: 20
---
```

After setting the front matter, continue writing your article.
Raw text is supported, or you can add [Markdown](https://daringfireball.net/projects/markdown/) syntax.
Markdown is designed to be easy to write and read, but also supports directly adding HTML elements.
See the [Style Guide]({{< ref "/contributing/documentation/style" >}}) for syntax help and other suggestions for writing the article.
You can generally style the article however you like, but please be aware that other contributors can review the article and change the styling.

### Adding Images

If you want to include screenshots of the TrueNAS User Interface with your article, add these files to your article bundle.
Be sure to have unique names for each image file.

{{< trueimage src="/images/Contribute/HugoArticleBundle.png" alt="Adding Images" id="Adding Images" >}}

## Uploading the Article Bundle

Open the appropriate repository section for the new content article.

{{< trueimage src="/images/Contribute/UploadingNewArticleBundle.png" alt="Uploading Images" id="Uploading Images" >}}

Click *Upload files* and drag and drop the article bundle directory into the repository.
GitHub shows all the files to upload.

{{< trueimage src="/images/Contribute/AddNewArticlePhotosRepo.png" alt="Adding Images Repo" id="Adding Images Repo" >}}

## Opening a Pull Request

{{< hint type=note >}}
[Forking the repository]({{< ref "/contributing/Documentation/content-update#forking-the-repo" >}}) might be needed as part of opening a Pull Request.
{{< /hint >}}

Make sure all your files have been uploaded then scroll down to the **Commit changes** section and write a summary and description of your changes.
Select *Create a new branch for this commit and start a pull request.* and click *Propose changes*.
GitHub can take a few moments to process the files.

Make sure you're happy with the summary and description of your article, then click *Create pull request*.

After the pull request is created, the repository automatically builds a preview of the documentation site that has your changes included.
The link to this preview is added to the Pull Request after the build completes.

{{< trueimage src="/images/Contribute/NewArticlePreview.png" alt="Article Preview" id="Article Preview" >}}

Other contributors will review and merge your article!  
