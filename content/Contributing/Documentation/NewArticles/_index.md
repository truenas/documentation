---
title: "Adding a New Article"
description: "How to contribute a new article bundle to the TrueNAS documentation."
weight: 20
tags:
- corecontributing
- scalecontributing
- corearticle
- scalearticle
---

{{< toc >}}

Thanks for your interest in submitting documentation articles!
This article shows you how to add a new article to the TrueNAS Documentation Hub.
All that is required is a [GitHub account](https://github.com) and your favorite text editor.
Taking screenshots for your article is also recommended.

To add an article, construct a bundle that contains your text file and any images, then open a pull request on the repository.
There is an [Article Template]({{< relref "/Contributing/Documentation/Template/_index.md" >}}) available that can simplify creating your article.

## Creating an Article Bundle

Find a place on your local system to create a directory for your article.
Name the directory according to the title of your article.

[![ArticleBundle](/images/Contribute/HugoNewArticleBundle.png "Creating an Article Bundle")](/images/Contribute/HugoNewArticleBundle.png)

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
See the [Style Guide]({{< ref "Style.md" >}}) for syntax help and other suggestions for writing the article.
You can generally style the article however you like, but please be aware that other contributors can review the article and change the styling.

### Adding Images

If you want to include screenshots of the TrueNAS User Interface with your article, add these files to your article bundle.
Be sure to have unique names for each image file.

[![AddingImages](/images/Contribute/HugoArticleBundle.png "Adding Images")](/images/Contribute/HugoArticleBundle.png)

## Uploading the Article Bundle

Open the [User Recommendations]({{< ref "/CORE/CORETutorials/CommunityGuides/_index.md" >}}) section of the repository.

[![UploadImages](/images/Contribute/UploadingNewArticleBundle.png "Uploading Images")](/images/Contribute/UploadingNewArticleBundle.png)

Click *Upload files* and drag and drop the article bundle directory into the repository.
GitHub shows all the files to upload.

[![AddNewArticlePhotosRepo](/images/Contribute/AddNewArticlePhotosRepo.png "Adding Images Repo")](/images/Contribute/AddNewArticlePhotosRepo.png)

## Opening a Pull Request

{{< hint type=note >}}
[Forking the repository]({{< relref "ContentUpdate.md#forking-the-repo" >}}) might be needed as part of opening a Pull Request.
{{< /hint >}}

Make sure all your files have been uploaded then scroll down to the **Commit changes** section and write a summary and description of your changes.
Select *Create a new branch for this commit and start a pull request.* and click *Propose changes*.
GitHub can take a few moments to process the files.

Make sure you're happy with the summary and description of your article, then click *Create pull request*.

After the pull request is created, the repository automatically builds a preview of the documentation site that has your changes included.
The link to this preview is added to the Pull Request after the build completes.

[![ArticlePreview](/images/Contribute/NewArticlePreview.png "Article Preview")](/images/Contribute/NewArticlePreview.png)

Other contributors will review and merge your article!  

{{< taglist tag="corecontributing" limit="10" >}}
