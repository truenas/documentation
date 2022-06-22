---
title: "String Translations"
weight: 5
---

# How to Contribute CORE Text String Translations

Users can contribute text string translations for the CORE project. The first step is to sign into GitHub, and then to navigate to the trueNAS webui.

## Fork the trueNAS webui

Once located, create a new repo fork from the trueNAS webui by selecting **Fork** from the list of options at the top.

This will be a screen shot of how to fork the trueNAS webui repository:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")

Navigate to this location in the new fork: /webui/src/assets/i18n/. The .po language conversion files are located within the "src/assets/i18n" directory. Choose the language .po file that represents the translation language.

This will be a screen shot of the webui/src/assets/i18n/ directory showing the .po files within:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")

## Edit the Article

Click the <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i> **Edit** icon at the right of the .po filename. The file opens in GitHub's web-based file editor.

This will be a screen shot of the webui/src/assets/i18n/ .po language file which lists the English strings and translated strings:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")

Lines that begin with "msgid" are the English strings. Lines that begin with "msgstr" are the translated strings.

This will be a screen shot of the .po language file open in the editor displaying the "msgid" and "msgstr" tags:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")

## Translate the Text Strings

<--How to do the translation-->Translate the text strings. Fill out the form at the bottom as you progress. Click **Commit changes** to save the file each time you fill out the form.

This will be a screen shot of the .po language file open in the editor displaying the translated "msgstr" tags, as well as the **Commit changes** button at bottom of web editor:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")

## Begin a New Pull Request

The translated text strings need to be sent to TrueNAS in order to be reviewed and then merged into the master branch. This part of the process happens as part of a pull request. In order to begin this process, go to your GitHub repo and click the **New pull request** button at the top right of the first page:

This will be a screen shot of the new pull request window:
![Image Name Text](/images/CORE/13.0/imagename.png "Image Name Text")



