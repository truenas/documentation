---
title: "Ajout d'un nouvel article"
linkTitle: "Nouveaux articles"
weight: 2
type: docs
---

{{% pageinfo %}}
Pour contribuer à de nouveaux articles, vous devez avoir un [Compte GitHub] (https://github.com) !
{{% /pageinfo %}}

Merci de votre intérêt pour la soumission d'articles de documentation !
Cet article vous montre comment contribuer à la documentation pour la publication sur le site iXsystems [documentation website] (docs.ixsystems.com).

## Trouver une place pour un nouvel article

Allez sur https://github.com/freenas/documentation pour trouver l'emplacement dans le répertoire **content/** où placer le nouvel article.

{{< figure src="docrepo-truenas-articles-location.png" title="Choisir l'emplacement d'un article" >}}

Cliquez sur **Create new file** pour ouvrir l'éditeur GitHub afin de créer un nouveau fichier dans le répertoire.
Entrez un nom descriptif pour le fichier. Pour les fichiers de contenu, veillez à ajouter ".md" à la fin !

{{< figure src="newarticle-github.png" title="Éditeur de fichiers GitHub" >}}

## Rédaction d'un article

Les premières lignes sont réservées à un "bloc" d'introduction qui contient le titre du document et les informations sur les liens.
Par exemple, cet article utilise un simple bloc d'introduction :

```
---
title: "Adding a New Article"
linkTitle: "New Articles"
weight: 40
---
```

Après le bloc d'introduction, continuez à écrire votre article.
Le texte brut est pris en charge, ou vous pouvez ajouter la syntaxe [Markdown](https://daringfireball.net/projects/markdown/).
Markdown est conçu pour être facile à écrire et à lire, mais il permet également d'ajouter directement des éléments HTML.
Vous pouvez donner à votre article le style que vous souhaitez, mais sachez qu'il existe quelques pratiques standard qui s'appliquent à tous les articles.
Les autres contributeurs peuvent revoir l'article plus tard et le modifier pour ajouter de nouveaux éléments de contenu ou de style.

Le site de documentation utilise également le thème [Docsy](https://github.com/google/docsy).
Ce thème comporte des éléments de style supplémentaires qui peuvent être utilisés pour améliorer votre article.
Consultez le [Docsy shortcodes guide](https://www.docsy.dev/docs/adding-content/shortcodes/) pour obtenir une liste des extraits de contenu réutilisables intégrés.

Vous pouvez cliquer sur le bouton **Preview** pour obtenir une estimation approximative de l'aspect de l'article sur le site web.
Ceci est utile pour des tests de compilation simples afin de s'assurer que vous n'avez pas d'erreurs de syntaxe de Markdown.

{{< figure src="preview-newarticle-github.png" title="GitHub File Preview" >}}

## Publication d'un article

Lorsque tout le contenu de l'article est complet, vous devez valider vos modifications dans une nouvelle branche et ouvrir une demande de retrait GitHub.
L'utilisation du titre par défaut du commit est acceptable, mais assurez-vous d'ajouter quelques notes sur l'article dans la boîte de description.
Définissez l'option **Create a new branch** et cliquez sur **Propose new file** pour continuer.

{{< figure src="commit-newarticle-github.png" title="Commettre un nouvel article" >}}

Tapez un *x* dans la case pour reconnaître la licence de documentation et cliquez sur **Create pull request**.
Un autre contributeur à la documentation examinera et fusionnera vos documents dans le dépôt.
Le site web se reconstruira et rendra votre article immédiatement visible !

### Téléchargement d'un article d'un lot de pages

Au lieu d'ajouter un seul fichier, vous pouvez contribuer à un [Page Bundle] (https://gohugo.io/content-management/page-bundles/) composé d'un répertoire avec des fichiers supplémentaires pour améliorer votre article (images, fichiers de contenu supplémentaire, vidéos, etc.). Pour voir un exemple simple d'un ensemble de pages, consultez le répertoire [FreeNAS Getting Started](https://github.com/freenas/documentation/tree/master/content/fr/articles/FreeNAS) dans le dépôt de documentation.

Pour contribuer à un nouveau lot de pages, allez dans le répertoire [repository content section](https://github.com/freenas/documentation/tree/master/content/fr) de votre article et cliquez sur **Create new file**.
Pour ajouter un nouveau répertoire au chemin d'accès au fichier, tapez le nom du répertoire et `/`.
Utilisez le nom du répertoire comme nom pour votre article, puis nommez le nouveau fichier `_index.md`.

{{% pageinfo %}}
Vous pouvez également [use the command line to add files](https://help.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) au dépôt.
{{% /pageinfo %}}

Lorsque vous avez fini d'ajouter du contenu à `_index.md`, créez une nouvelle branche de dépôt et ouvrez une demande d'extraction.
Ensuite, ouvrez le menu déroulant **Branch** et changez de dépôt pour afficher la branche que vous avez créée pour votre demande d'extraction.
Ouvrez le répertoire que vous avez créé pour la demande d'extraction et cliquez sur **Upload files**.
Faites glisser et déposez vos fichiers supplémentaires dans le navigateur ou cliquez sur **choisissez vos fichiers** pour utiliser un navigateur de fichiers afin de sélectionner les fichiers stockés sur votre système local.

{{< figure src="pagebundle-article-files.png" title="Ajout de fichiers à une branche de demande de retrait" >}}

Ajoutez toutes les notes concernant ces fichiers à la description, assurez-vous que l'option **Commit directly** est activée et qu'elle pointe vers votre branche Pull Request, puis cliquez sur **Commit changes*. Votre PR sera mis à jour pour inclure tous les fichiers supplémentaires dont vous avez besoin pour votre article !
