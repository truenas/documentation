---
title: "Translating the Documentation"
linkTitle: "Translations"
description: "How to add a new translation to the Documentation Hub and begin translating articles."
weight: 3
---

TrueNAS est utilisé dans le monde entier, mais la majorité de la documentation n'est disponible qu'en anglais. Si vous parlez couramment une autre langue, vous pouvez aider les autres utilisateurs de TrueNAS en fournissant des traductions natives pour nos guides et articles. 

Ce guide explique comment traduire un article anglais existant et ouvrir une demande d'extraction pour ajouter le nouveau fichier au centre de documentation.

## Demander une nouvelle langue pour le centre de documentation

Avant de pouvoir proposer un contenu traduit, le site doit être ajusté pour intégrer cette langue dans la structure.
Pour demander l'ajout d'une nouvelle langue, ouvrez un numéro à l'adresse https://github.com/freenas/documentation/issues.

L'équipe de documentation d'iXsystems répondra au problème et apportera les ajustements nécessaires à la structure du site pour rendre cette langue disponible.

## Traduction d'articles

Une fois que le site est configuré pour la traduction d'articles dans votre langue, il suffit de télécharger l'article en anglais, de le traduire, puis de télécharger le fichier traduit au même endroit dans l'arborescence du nouveau répertoire linguistique.

Par exemple, pour commencer la traduction de cet article en français, allez à https://github.com/freenas/documentation/blob/master/content/fr/docs/contributing-docs/translations.md et cliquez sur **Raw**. Faites un clic droit, sélectionnez *Save Page As...*, et cliquez sur **Save**.
Vous n'avez pas besoin de renommer le fichier.

Ouvrez maintenant `translations.md` dans votre éditeur préféré et remplacez le texte anglais par vos traductions.
La syntaxe du Markdown et du HTML n'aura pas besoin d'être modifiée du tout et peut être ignorée.
Voir le [Updating Content](/docs/contributing-docs/basic/#replacing-an-image) comment obtenir des détails sur le remplacement d'une image existante.

Quand vous aurez fini de traduire, allez à https://github.com/freenas/documentation/blob/master/content/fr/docs/contributing-docs et cliquez sur **Upload files**.
Faites glisser le fichier traduit dans la zone de téléchargement et entrez une brève description du fichier traduit.
Assurez-vous que l'option `Create a new branch for this commit` est sélectionnée, cliquez sur **Propose changes**, puis ouvrez votre demande d'extraction (PR).

C'est tout ! D'autres contributeurs examineront et fusionneront votre contribution !
