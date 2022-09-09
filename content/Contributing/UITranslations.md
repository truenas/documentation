---
title: "Web Interface Translations"
description: "How to contribute TrueNAS interface text string translations."
weight: 5
tags:
- coretranslate
- scaletranslate
---

## How to Contribute CORE and SCALE Text String Translations

By default, TrueNAS is available in English.
However, users can contribute text string translations for the TrueNAS web interface to help make TrueNAS available in many other languages!
Contributing requires a GitHub account and the ability to translate English text into other languages.

To translate the TrueNAS web interface, sign into GitHub and go to the TrueNAS **webui** repository. Find the appropriate translation file, edit it, and send a Pull Request with your translations to the project.
For step-by-step instructions, see the rest of this article.

### Go to the Localization Directory

Go to this location: [TrueNAS translation directory](https://github.com/truenas/webui/tree/master/src/assets/i18n).  
The .json language conversion files are located within the **webui/src/assets/i18n** directory.

![GitHubWebUIDirectory](/images/Contribute/GitHubWebUIDirectory.png "GitHub TrueNAS webui directory")

### Select the Translation File

Choose the .json file that represents the specific translation language.
More information about 2 letter ISO 639-1 codes located at: [ISO 639-1 Codes](https://www.loc.gov/standards/iso639-2/php/code_list.php).

Click the .json filename. The file opens in GitHub's web-based file editor. Click the pencil icon to begin editing the file.  

![GitHubWebUITranslationFile](/images/Contribute/GitHubWebUITranslationFile.png "TrueNAS language translation file")

### Edit the Article

Work from the last line of code in the file back up to the beginning.
Start at the last line of the file, and check for a translation. Some files have no translations listed. In this instance, begin with the last line of the file.  

If the last line of the file contains a translation, scroll up (descending numerical order). Look for the next available line of code for which there is no language translation listed. Begin translating at this point.

Some strings can use [ICU Message Format](https://formatjs.io/docs/core-concepts/icu-syntax/#plural-format) for pluralization. You can move tokens around and adjust them for your language.

![GitHubWebUIEditTranslationFile](/images/Contribute/GitHubWebUIEditTranslationFile.png "TrueNAS edit language translation file")

### Translate the Text Strings

 The string in English that needs translation appears first, enclosed with double quotes. After that there is a colon, followed by a second pair of double quotes. Enter your translation within the second pair of double quotes. Click on the **Preview changes** tab to view your changes as you make them. If you don't want to save your changes click **Cancel changes**.  

![GitHubWebUITranslationEntry](/images/Contribute/GitHubWebUITranslationEntry.png "TrueNAS language translation snippet")

### Begin a New Pull Request

 Click **Propose changes** to save the file. This will create a new fork of the repository. It will also open a pull request. A pull request sends the translated text strings to TrueNAS for review. Once approved, these translations get merged into the master branch.

Before submitting the pull request, please consider the following:
 * Do you intend to continue working in the same language file? If so, continue working in the same forked repository & branch. Mark the pull request as draft. A draft pull request cannot merge until you mark it ready for review.  

More information on draft pull requests located at: 
[GitHub pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
 
![GitHubWebUIProposeChange](/images/Contribute/GitHubWebUIProposeChange.png "TrueNAS translation pull request")

* Would you like to submit string translations for a different language file? If so, open a new branch off the original forked repository you created. Begin working on the second language file in this new branch. Complete your changes in this second language file. Merge the second language file back into the branch that has the draft pull request open. This splits up the pull requests by language and can make the approval process go faster.

{{< taglist tag="coredocumentation" limit="10" >}}
