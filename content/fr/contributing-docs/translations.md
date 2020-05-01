---
title: "Traductions d'articles"
linkTitle: "Traductions d'articles"
weight: 1
type: docs
---
TrueNAS a des utilisateurs dans le monde entier, mais la majorité de la documentation n'est disponible qu'en anglais.  Si vous parlez couramment une autre langue, vous pouvez aider vos collègues utilisateurs de TrueNAS en fournissant des traductions natives pour nos guides et articles. 

Ce guide explique la procédure à suivre pour soumettre des traductions de la documentation existante

Avant que les documents puissent être soumis, le site doit être préparé à tirer parti de ces documents traduits.  La première étape consiste à s'assurer que le site est prêt. 

Trouvez la section `[languages]` et ajoutez une nouvelle section pour la langue à ajouter. Le fichier peut être trouvé ici : https://github.com/freenas/documentation/blob/master/config.toml
En utilisant le français comme exemple, ajoutez cette section à la section `[languages]`:

```
[languages.fr]
contentDir = "content/fr"
languageName = "Français"
weight = 20
```
Consultez le guide [Make a Quick Change] (https://docs.ixsystems.com/contributing-docs/basic/) pour savoir comment procéder.


Une fois que le site est configuré pour une autre langue, les fichiers de l'arborescence initiale doivent être créés dans ce répertoire de langue.  Naviguez vers  `documentation/content/` et créez un sous-répertoire pour la langue à ajouter.  Veuillez utiliser les codes de langue appropriés il8n.

Les fichiers suivants doivent être traduits et ajoutés:

+ documentation/content/fr/_index.html
+ documentation/content/fr/docs/_index.md
+ documentation/content/fr/docs/TrueNAS/_index.md
+ documentation/content/fr/docs/TrueNAS/software-guides/_index.md
+ documentation/content/fr/docs/TrueNAS/hardware-guides/_index.md
+ documentation/content/fr/contributing-docs/_index.md
+ documentation/content/fr/contributing-docs/basic.md

Une fois ces fichiers créés, validez-les et déposez une demande d'extraction.  Si une assistance est nécessaire dans ce domaine, déposez un ticket dans le [Issues Tracker](https://github.com/freenas/documentation/issues/new?title=Adding%20a%20New%20Langauge)

Une fois que le site est configuré pour les documents d'une autre langue, le processus de traduction des articles peut apporter. 

Tout d'abord, localisez le document existant que vous souhaitez traduire à partir de la [documentation/content/en subdirectory](https://github.com/freenas/documentation/tree/master/content/en).  Faites une copie de ce document et placez-le dans le nouvel arbre linguistique.  Il est essentiel que le nom du fichier et son emplacement relatif soient exactement les mêmes que dans l'arbre "content/en/".

Par exemple :
+ `documentation/content/en/contributing-docs/new-articles/_index.md`

Devient :
+ `documentation/content/fr/contributing-docs/new-articles/_index.md`

Soumettez le document traduit lorsque la traduction est terminée.   
Faites référence à la [Adding a New Article](https://docs.ixsystems.com/contributing-docs/new-articles/) guide pour les instructions à suivre.

C'est tout! D'autres contributeurs examineront et fusionneront votre contribution!
