---
title: "Adding a New Article"
linkTitle: "New Articles"
weight: 20
---

{{% pageinfo %}}
To contribute new articles, you need to have a [GitHub account](https://github.com)!
{{% /pageinfo %}}

Thanks for your interest in submitting documentation articles!
This article shows you how to contribute documentation for publication on the iXsystems [documentation website](docs.ixsystems.com).

## Find a Spot for a New Article

Go to https://github.com/freenas/documentation find the location within the **content/** directory to place the new article.

{{< figure src="docrepo-truenas-articles-location.png" title="Picking an Article Location" >}}

Click **Create new file** to open the GitHub editor for a new file within the directory.
Enter a descriptive name for the file. For content files, make sure to add `.md` to the end!

{{< figure src="newarticle-github.png" title="GitHub File Editor" >}}


## Writing an Article

The first few lines are reserved for an intro "block" that contains the document title and link information.
For example, this article uses a simple intro block:

```
---
title: "Adding a New Article"
linkTitle: "New Articles"
weight: 40
---
```

After the intro block, continue writing your article.
Raw text is supported, or you can add [Markdown](https://daringfireball.net/projects/markdown/) syntax.
Markdown is designed to be easy to write and read, but also supports directly adding HTML elements.
You can style your article however you like, but please be aware that there are a few standard practices that apply to all articles.
Other contributors might review the article later and edit it to add new content or style elements.

The documentation website also uses the [Docsy](https://github.com/google/docsy) theme.
This theme has some additional styling elements that can be used to enhance your article.
See the [Docsy shortcodes guide](https://www.docsy.dev/docs/adding-content/shortcodes/) for a list of built-in reusable content snippets.

You can click the **Preview** to see a rough estimate of what the article will look like on the website.
This is useful for simple build testing to make sure you don't have any Markdown syntax errors.

{{< figure src="preview-newarticle-github.png" title="GitHub File Preview" >}}

## Publishing an Article

When all the article content is complete, commit your changes to a new branch and open a GitHub Pull Request.
Using the default commit title is fine, but be sure to add some notes about the article to the description box.
Set the **Create a new branch** option and click **Propose new file** to continue.

{{< figure src="commit-newarticle-github.png" title="Committing a New Article" >}}

Type an *x* in the box to acknowledge the documentation license and click **Create pull request**.
Another documentation contributor will review and merge your commits into the repository.
The website will rebuild and make your article immediately viewable!

### Uploading a Page Bundle Article

Instead of adding a single file, you can contribute a [Page Bundle](https://gohugo.io/content-management/page-bundles/) consisting of a directory with additional files to enhance your article (images, additional content files, videos, etc). To see a simple example of a page bundle, see the [FreeNAS Getting Started](https://github.com/freenas/documentation/tree/master/content/en/articles/FreeNAS) directory in the documentation repository.

To contribute a new Page Bundle, go to the relevent [repository content section](https://github.com/freenas/documentation/tree/master/content/en) for your article and click **Create new file**.
To add a new directory to the file path, type the name of the directory and `/`.
Use the directory name as the name for your article, then name the new file `_index.md`.

{{% pageinfo %}}
You can also [use the command line to add files](https://help.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to the repository.
{{% /pageinfo %}}

When finished adding content to `_index.md`, create a new repository branch and open a Pull Request.
Next, open the **Branch** drop down menu and switch the repository to show the branch you created for your Pull Request.
Open the directory you created for the Pull Request and click **Upload files**.
Drag and drop your additional files into the browser or click **choose your files** to use a file browser to select files stored on your local system.

{{< figure src="pagebundle-article-files.png" title="Adding Files to a Pull Request Branch" >}}

Add any notes about these files to the description, make sure the **Commit directly** option is set and pointed to your Pull Request branch, then click **Commit changes*. Your PR will update to include all the additional files you needed for your article!
