---
title: "Style Guide"
weight: 3
---

Ce guide contient de nombreux exemples sur la manière de styliser vos contributions documentaires.
La documentation TrueNAS utilise la syntaxe standardisée Markdown, HTML et Hugo pour transformer le texte, ajouter des images et créer des liens vers d'autres sites.
Le guide n'est pas exhaustif, mais contient des exemples des éléments les plus couramment utilisés lors de la rédaction de la documentation TrueNAS.
Pour en savoir plus sur chaque langage de balisage, consultez ces ressources:

* Markdown: https://daringfireball.net/projects/markdown
* HTML: https://www.w3schools.com/html/default.asp
* Hugo: https://gohugo.io/documentation/

## Exemples de Markdown

### Têtes

Utilisez les hashs (#) pour désigner une section de contenu:
```
# Niveau 1
## Niveau 2
### Niveau 3
```

Sur ce site, le titre de l'article est désigné comme titre de niveau 1.
Le reste du contenu doit être organisé avec des titres de niveau 2 et plus.
Cela permet à la barre latérale de navigation de l'article de se remplir de liens vers les différentes sections de votre article.

### Décoration du texte en ligne

* Italique:		`*texte*`
* Gras:			`**texte**`
* Préformaté/Code: 	\`texte\`

Vous pouvez également utiliser des balises HTML standard pour transformer le texte :

* Marqué / mis en évidence:		`<mark>texte</mark>`
* Insert/Souligné:		`<ins>texte</ins>`
* Souscrité:			`<sub>texte</sub>`
* Superscripté:		`<sup>TM</sup>`
* Supprimé/Traverser:	`<del>texte</del>`

### Personnages d'évasion

Pour échapper à un caractère syntaxique de sorte que le caractère soit affiché sans transformation, utilisez une barre oblique inversée (`\`).
Vous pouvez également utiliser des échappements HTML pour ajouter des commentaires : `<!-- ce texte ne sera pas affiché dans l'article rendu -->`

### Lien

La création de liens vers un site extérieur à docs.truenas.com se fait à l'aide de crochets et de parenthèses :

`[example link text](www.example.com)`

Vous pouvez également créer un lien direct en tapant simplement l'URL sans aucune balise supplémentaire: `www.example.com`
La syntaxe de liaison HTML est également autorisée: `<a href="www.example.com">Example Site</a>`

Pour créer un lien vers une autre section du même article, utilisez une ancre pour vous référer à l'en-tête de cette section: `[Linking](#linking)`
Le titre de l'en-tête doit être en minuscules et les espaces doivent être remplacés par des tirets (-): `[Escape Characters](#escape-characters)`

### Listes

Les listes peuvent être commandées ou non:

```
1. D'abord
2. Deuxième
3. Troisième

* Qui
* Quoi
* Quand
```

### Blocs de code

Un backtick (\`) démarre ou arrête un bloc de code en ligne : Entrez `ls` pour lister le contenu du répertoire.
L'utilisation de trois \`stick sur une ligne démarre ou arrête un bloc multi-lignes:

```
Il s'agit d'un bloc de code à plusieurs lignes.
foo
bar
baz
```

### Citations en bloc

Utilisez le bon carat (>) pour désigner une citation en bloc :

```
> Le paragraphe entier est formaté comme la citation.
>
> Vous pouvez utiliser un > pour chaque ligne de la citation ou au début de chaque paragraphe du texte.
```

## Éléments de style Hugo

Il existe un certain nombre d'éléments de style que vous pouvez utiliser et qui sont intégrés dans le générateur de site statique Hugo.
Ce site utilise la syntaxe de raccourci Hugo pour les images, les références internes et les boîtes d'avertissement.

Le site de documentation utilise également le thème [Docsy](https://github.com/google/docsy). Ce thème comporte des éléments de style supplémentaires qui peuvent être utilisés pour améliorer votre article. Consultez le [Docsy shortcodes guide](https://www.docsy.dev/docs/adding-content/shortcodes/) pour obtenir une liste des extraits de contenu réutilisables intégrés.

### Lien vers d'autres articles sur ce site

Les références internes utilisent le shortcode Hugo `ref` pour rechercher un fichier par son nom :
```
[Creating a new ZFS Pool]({{\< ref "pools.md" >}})
(supprimer la barre oblique inversée qui s'échappe \)
```

L'établissement d'un lien vers le fichier d'index d'un lot d'articles nécessite l'utilisation de la syntaxe générique [linking](#linking) pour pointer vers l'emplacement de l'article :
```
Vous pouvez copier le [article template](/docs/contributing-docs/template/).
```


Vous pouvez également utiliser une ancre pour créer un lien vers une section spécifique d'un article :
```
[Section Level 3]({{\< ref "example.md#section-level-3" >}})
(supprimer la barre oblique inversée qui s'échappe \)
```

### Images

Pour ajouter une image à votre article, vous devez ajouter le fichier image à votre lot d'articles.
Ensuite, utilisez le raccourci `figure` dans votre article pour faire un lien vers l'image et définir les paramètres supplémentaires :

```
{{\< figure src="hardware-image" title="Exemple d'image" />}}
(supprimer la barre oblique inversée qui s'échappe \)
```

Vous pouvez également utiliser le HTML pour créer un lien vers un fichier image relatif au répertoire `/static/` du site :

```
<img src="/images/network-interfaces.png">
```

### Boîtes d'admonestation

Une simple boîte de notes est créée avec le shortcode "pageinfo" :

```
{{\% pageinfo %}}
Il s'agit d'une simple boîte de notes à fond gris et à bordure bleue
{{\% /pageinfo %}}
(supprimer la barre oblique inversée qui s'échappe \)
```

Les boîtes d'alerte peuvent avoir n'importe quel titre et utiliser des `info` et des `warning` pour définir la couleur :

```
{{\% alert title="Avertissement" color="warning" %}}
Il s'agit d'une alerte qui s'intitule Avertissement et qui utilise une coloration rouge.
{{\% /alert %}}
(supprimer la barre oblique inversée qui s'échappe \)
```