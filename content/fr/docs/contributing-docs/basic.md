---
title: "Mise à jour du contenu existant"
linkTitle: "Mise à jour du contenu"
weight: 1
---

Changements souhaités !
Il n'a jamais été aussi facile d'apporter des modifications à la documentation TrueNAS.
Le centre de documentation a été spécialement conçu pour permettre aux utilisateurs de proposer rapidement des modifications au contenu sans avoir à installer d'applications spéciales.
Il suffit d'avoir un [GitHub account](https://github.com) et une compréhension de base de [Markdown](https://daringfireball.net/projects/markdown/).

Le référentiel construit automatiquement un site de prévisualisation pour chaque demande d'extraction (Pull Request, PR) ouverte.
Le lien vers ce site de prévisualisation est ajouté à la PR en tant que commentaire.
L'aperçu se met à jour en fonction des modifications apportées à la demande d'extraction, de sorte que vous pouvez toujours voir un aperçu précis des modifications que vous apportez au site web.

## Apporter des modifications rapides à un article

Si vous trouvez du texte qui doit être corrigé ou amélioré dans un article, cliquez sur **Edit this page** pour afficher le texte source de l'article dans un nouvel onglet du navigateur.
Vous devrez vous connecter à votre compte GitHub pour proposer des modifications.

<img src="/images/article-source.png"><br><br>

Apportez les modifications nécessaires au texte.
Pour vérifier que vos modifications ne présentent pas de bogues dans la syntaxe Markdown ou HTML, passez à l'écran **Preview changes** onglet.
L'aperçu ne rendra pas la syntaxe propre à Hugo.

### Remplacement d'une image

Pour mettre à jour une image existante, cliquez sur **Edit this page** et trouvez l'emplacement et le nom de l'image dans le texte source de l'article.
Assurez-vous que votre image de remplacement porte le même nom que l'image à remplacer.

Dans le dépôt, cliquez sur **Code** et naviguez jusqu'à l'emplacement de l'image dans le dépôt.
Les images se trouvent soit dans le répertoire */static/images/*, soit au même endroit que le fichier texte de l'article faisant partie d'un ensemble d'articles.

<img src="/images/image-location.png"><br><br>

Cliquez sur **Upload files** et soit faites glisser votre image, soit ouvrez le navigateur de fichiers pour sélectionner votre image.
Tant que le nom de la nouvelle image est le même que celui de l'ancienne, l'ancienne image sera remplacée et l'article utilisera automatiquement la nouvelle image.

## Ouverture d'une demande de retrait

Lorsque vous avez terminé vos modifications, faites défiler la page jusqu'à la section **Commit changes** et rédigez un résumé et une description de vos modifications.
Sélectionnez **Create a new branch for this commit and start a pull request.** and click **Propose file change**.
Assurez-vous que vous êtes satisfait de votre résumé et de votre description, puis cliquez sur **Create pull request**.

Après la création de la demande d'extraction, le dépôt construit automatiquement un aperçu du site de documentation qui contient vos modifications.
Le lien vers cet aperçu est ajouté à la demande d'extraction une fois que la construction est terminée.

C'est tout ! Les autres contributeurs examineront et fusionneront votre contribution !