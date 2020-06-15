---
title: "Translating the Documentation"
linkTitle: "Translations"
description: "How to add a new translation to the Documentation Hub and begin translating articles."
weight: 3
---

TrueNAS is used around the world, but the majority of the documentation is only available in English. If you are fluent in another language, you can help fellow TrueNAS users by providing native translations for our guides and articles. 

This guide explains how to add a new language to the Documentation Hub and translate the existing documentation.

## Add a New Language to the Site Structure

Before translated content can be proposed, the site must be adjusted to incorporate that language into the structure.
This requires editing the primary configuration file of the Documentation Hub, located at https://github.com/freenas/documentation/blob/master/config.toml.

Find the `[languages]` section of `config.toml` and add a new section for the language.
For example, to add French as a language option, add this section to the `[languages]`:

```
[languages.fr]
contentDir = "content/fr"
languageName = "Français"
weight = 20
```

See the [Updating Content](/docs/contributing-docs/basic/) article for detailed instructions.

### Copy English Site Structure

Once the site is configured for another language, copy over the English site structure to the new language directory. Go to `documentation/content/` and create a subdirectory for the language to be added. Please use proper [il8n language codes](https://www.loc.gov/standards/iso639-2/php/English_list.php) and use the same directory name that was added to the `config.toml` file.

Copy the site structure from `/documentation/content/en/` over to the new language directory.
This copies all the English content to the new language version of the website and makes the files ready for translation.

Once these files are created, commit these files and open a pull request. If assistance is needed, file a ticket in the [Issues Tracker](https://github.com/freenas/documentation/issues/new?title=Adding%20a%20New%20Langauge)

## Translating Articles

Once the site is configured for documents of another language, the translation process of articles can begin. 

First, find the copied English article in the directory tree of the new language.
For example, to translate the front page of the Documentation Site into French, open `documentation/content/fr/docs/index.html` and replace the English text and images with the French translations.
See the [Updating Content](/docs/contributing-docs/basic/#replacing-an-image) how-to for details about replacing an existing image.

Open a Pull Request with the translated files when you're finished with the translation.

That's it! Other contributors will review and merge your contribution!
