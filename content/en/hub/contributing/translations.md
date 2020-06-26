---
title: "Translating the Documentation"
linkTitle: "Translations"
description: "How to add a new translation to the Documentation Hub and begin translating articles."
weight: 3
---

TrueNAS is used around the world, but the majority of the documentation is only available in English. If you are fluent in another language, you can help fellow TrueNAS users by providing native translations for our guides and articles. 

This guide explains how to translate an existing English article and open a Pull Request to add the new file to the Documentation Hub.

## Request a New Language for the Documentation Hub

Before translated content can be proposed, the site must be adjusted to incorporate that language into the structure.
To request adding a new language, open an issue at https://github.com/freenas/documentation/issues.

The iXsystems Documentation Team will respond to the issue and make the necessary adjustments to the site structure to make that language available.

## Translating Articles

Once the site is configured for translating articles into your language, all that is needed is to download the English article, translate it, then upload the translated file to the same location in the new language directory tree.

For example, to begin translating this article into French, go to https://github.com/freenas/documentation/blob/master/content/en/hub/contributing/translations.md and click **Raw**. Right-click, select *Save Page As...*, and click **Save**.
You don't need to rename the file.

Now open `translations.md` in your preferred editor and replace the English text with your translations.
The Markdown and HTML syntax won't need to be changed at all and can be ignored.
See the [Updating Content](/hub/contributing/basic/#replacing-an-image) how-to for details about replacing an existing image.

When you're done translating, go to https://github.com/freenas/documentation/blob/master/content/fr/hub/contributing and click **Upload files**.
Drag the translated file into the upload area and enter a brief description of the translated file.
Make sure `Create a new branch for this commit` is selected, click **Propose changes**, then open your Pull Request (PR).

That's it! Other contributors will review and merge your contribution!
