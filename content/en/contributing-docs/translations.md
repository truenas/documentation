---
title: "Contribute Translations"
linkTitle: "Contribute Translations"
weight: 1
type: docs
---
TrueNAS has users around the world, however the majority of the documentation is only available in English.  If you are fluent in another language, you can help fellow TrueNAS users by providing native translations for our guides and articles. 

This guide will explain the process needed to submit translations of existing documentation

Before documents can be submitted, the site must be prepared to take advantage of those translated documents.  The first step ensures that the site is prepared. 

Find the `[languages]` section and add a new section for the language to be added. The file can be found here: https://github.com/freenas/documentation/blob/master/config.toml
Using French as an example add this section to the `[languages]` section:

```
[languages.fr]
contentDir = "content/fr"
languageName = "Français"
weight = 20
```

Reference the [Make a Quick Change](https://docs.ixsystems.com/contributing-docs/basic/) guide for instructions to complete this.

Once the site is configured for another language, the initial tree files needs to be created within that language directory.  Navigate to `documentation/content/` and create a subdirectory for the language to be added.  Please use proper il8n language codes.

The following files need to be translated and added:

+ documentation/content/fr/_index.html
+ documentation/content/fr/docs/_index.md
+ documentation/content/fr/docs/TrueNAS/_index.md
+ documentation/content/fr/docs/TrueNAS/software-guides/_index.md 
+ documentation/content/fr/docs/TrueNAS/hardware-guides/_index.md
+ documentation/content/fr/contributing-docs/_index.md
+ documentation/content/fr/contributing-docs/basic.md

Once these files are create, commit these files and file a pull request.  If assistance is needed in this area, file a ticket in the [Issues Tracker](https://github.com/freenas/documentation/issues/new?title=Adding%20a%20New%20Langauge)

Once the site is configured for documents of another lanuage, the translation process of articles can bring. 

First, locate the existing document that you wish to translate from the [documentation/content/en subdirectory](https://github.com/freenas/documentation/tree/master/content/en).  Make a copy of this document and place it within the new language tree.  It is critical that the file name and relative location be exactly the same as it is in the `content/en/` tree.

For example:
+ `documentation/content/en/contributing-docs/new-articles/_index.md`

Becomes :
+ `documentation/content/fr/contributing-docs/new-articles/_index.md`

Submit the translated document when translation has been complete.   
Reference the [Adding a New Article](https://docs.ixsystems.com/contributing-docs/new-articles/) guide for instructions to complete this.

That's it! Other contributors will review and merge your contribution!
