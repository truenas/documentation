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

If you find text that needs to be fixed or improved in an article, click **Edit this page** to view the article source text in a new browser tab.  To check your changes for bugs in the Markdown or HTML syntax, switch to the **Preview changes** tab.  The preview won't render the Hugo-specific syntax.
You'll need to log in to your GitHub account to propose any changes.

### Replacing an Image

To update an existing image, click **Edit this page** and find the image location and name in the article source text.
Make sure your replacement image has the same name as the image to be replaced.

In the repository, click **Code** and navigate to the image location in the repository.
Images are located in either the */static/images/* directory or are in the same location as the article text file as part of an article bundle.

<img src="/images/image-location.png"><br><br>

Click **Upload files** and either drag and drop your image or open the file browser to select your image.
As long as the new image name is the same as the old image, the old image will be replaced and the article will automatically use the new image.


## Forking the Repo

To start the process of submitting a change, click the **Edit this Page** link in the top right of the site. 

<img src="/images/forking-contribution-00.PNG" width='700px'>
<br><br>

You will need to fork the repo in to your github account.  Click the green **Fork this repository** button to continue.

<img src="/images/forking-contribution-01.PNG" width='700px'>
<br><br>

Edit the page as needed. 

<img src="/images/forking-contribution-02.PNG" width='700px'>
<br><br>

When the changes are complete, add a quick overview of what changes were made in the description box, and click the green **Commit changes** button.

<img src="/images/forking-contribution-03.PNG" width='700px'>
<br><br>

Once the page refreshes the changes will have been made to your repository.  
Now these changes need to be merged into the main repo with a Pull Request (PR). To start this process, click on **Pull Requests**

<img src="/images/forking-contribution-04.PNG" width='700px'>
<br><br>

Once the Pull Requests page opens, click on the green **New Pull Request** button.

<img src="/images/forking-contribution-05.PNG" width='700px'>
<br><br>

Confirm that the *base repository* is set to **freenas/documentation** and  *base* is set to **master**.  *head repository* will need to be set to your forked repository name, in this example **q5sys/documentation**.  *compare* needs to be set to **master**.  Once this is correct, click the green **Create pull request** button to create the PR.


<img src="/images/forking-contribution-06.PNG" width='700px'>
<br><br>

Make a short note about what changes were made, and click the green **Create pull request** button. 

<img src="/images/forking-contribution-07.PNG" width='700px'>
<br><br>

At this point the PR has been created and the automated build system will build your changes.  A live demo of the site with the changes will be created.  Once the build is completed a comment will be added that says *All checks have passed 1 successful check* Click on **Show all checks** to reveal the **Details** link.  Click this link to see the live demo of the site with the requested changes.

<img src="/images/forking-contribution-08.PNG" width='700px'>
<br><br>


That's it! Other contributors will review and merge your contribution!
