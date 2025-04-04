---
title: "Content Styling"
description: "How to style your documentation contributions to TrueNAS."
weight: 5
tags:
- contributing
---

This guide has many examples of how to style your documentation contributions.
TrueNAS documentation uses standardized Commonmark Markdown, HTML, and Hugo syntax to transform text, add images, stylize tables, and link to other locations.
The guide is not exhaustive but contains examples of the elements that are most commonly used when writing TrueNAS documentation.
To learn more about each markup language, see these resources:

* Markdown: https://daringfireball.net/projects/markdown
* Commonmark: https://spec.commonmark.org/
* HTML: https://www.w3schools.com/html/default.asp
* Hugo: https://gohugo.io/documentation/

## Markdown Examples
TrueNAS Documentation Hub articles make use of the following formatting options:
{{< expand "Headers" "v" >}}
Use hashes (#) to designate a section of content:
```
# Level 1
## Level 2
### Level 3
```
On this website, the article title is designated as a level 1 heading.
The rest of the section content should be organized with level 2 and greater headings.
This populates the article navigation sidebar with links to the different sections of your article.

{{< /expand >}}
{{< expand "Inline Text Decoration" "v" >}}
Approved usage of in-line text formatting is as follows:

* Italics:		`*text*` used for variables in command strings or examples
* Bold:			`**text**` used for on-screen UI elements such as the name of a screen or field as it appears on the screen
* Preformatted/Code: 	\`text\` use for command strings

You can also use standard HTML tags to transform text. For example:

* Command with variables <code>command <i>variable</i></code>
* Marked/Highlighted:   `<mark>text</mark>`
* Insert:   `<ins>text</ins>`
* Underlined:   `<u>text</u>`
* Subscripted:  `<sub>text</sub>`
* Superscripted:    `<sup>TM</sup>`
* Deleted:  `<del>text</del>`
* Strikethrough:    `<strike>text</strike>`

{{< /expand >}}
{{< expand "Escape Characters" "v" >}}
To escape a syntax character so that the character is displayed without transformation, use a backslash (`\`).

You can also use HTML escapes to add comments: `<!-- this text does not display in the rendered article -->`
{{< /expand >}}
{{< expand "Linking" "v" >}}
Linking to a site that is outside docs.truenas.com is done with square brackets and parentheses:

`[example link text](www.example.com)`

You can also link directly just by typing the URL with no additional markup: `www.example.com`

HTML linking syntax is also allowed: `<a href="www.example.com">Example Site</a>`

You can also use the `relref` shortcode to link to documents on the TrueNAS Documentation Hub website.
For example, linking to an existing article such as a TrueNAS tutorial [Dashboard]({{ relref "/SCALE/SCALETutorials/Dashboard.md" }}).

To link to another section of the **same** article, use an anchor (`#`) to refer to that section header.
The header title needs to be in lower case and spaces replaced with dashes (-): `[Escape Characters](#escape-characters)`
{{< /expand >}}
{{< expand "Lists" "v" >}}
Lists can be ordered or unordered:

```
1. First
2. Second
3. Third

* Who
* What
* When
```
If inserting an image after a list number, indent the image to align with the text following the number to continue the numbering sequence for the remaining step numbers.
For example:

```
1. First step

   insert image link, preceded and followed by an empty line

2. Second step
3. Third step
```   
If inserting an image or text related to and between bullet points, indent the text over to align with the bullet point text. If an image, insert a blank line before and after the image link.
{{< /expand >}}
{{< expand "Code Blocks" "v" >}}
A backtick (\`) starts or stops an inline code-. For example, enter `ls` to list directory contents.
Using three \` backticks on a line starts or stops a multi-line block:

```
This is a multi-line code block.
foo
bar
baz
```

If including a variable in the code example, use the HTML `<code>` and `</code>` tags and the `<i>variable</i>` tags to enclose the variable.
{{< /expand >}}
{{< expand "Block Quotes" "v" >}}
Use the right carat (>) to designate a block quote:

```
> The entire paragraph is formatted as the quote.
>
> You can use a > for every line of the quote or at the beginning of each paragraph of text.
```
{{< /expand >}}
{{< expand "Tables" "v" >}}
You can use the Markdown table syntax to produce simple tables or the `truetable` shortcode to apply the Documentation Hub table formatting.
For example:

```
| Setting | Description |
|---------|-------------|
| **Field name** | Description of what to enter into this field. |
```
or use the '{{\< truetable >}}` and {{\< /truetable >}} tags to apply TrueNAS formatting to the table (do not include the escaping backslash \\).
For example:

```
{{\< truetable>}}
| Setting | Description |
|---------|-------------|
| **Field name** | Description of what to enter into this field. |
{{\< /truetable >}}
```
If you want to use specific column sizes, you can use HTML tags to customize how your table displays.
{{< /expand >}}
{{< expand "Expand/Collapse Text" "v" >}}
You can use the `{{\< expand >}}` shortcode to create an expandable section of text such as those used in this article (do not include the escaping backslash \\).
For example:
```
{{\< expand "Text for the expandable text block" "v" >}}
Enter the text or title for the expandable text in double quotes followed by the "v" to indicate the start of the expandable text:
End the section with the close tag.
{{\< /expand >}}
```
You can use the `expand` short code as a bullet point list item. the arrow is enough to indicate a point in a bullet list if all list items are also expandable.
{{< /expand >}}

## Hugo Style Elements
There are many style elements you can use that are built into the Hugo static site generator.
This site uses Hugo shortcode syntax for images, internal references, and admonition boxes.

The documentation website also uses the [Docsy](https://github.com/google/docsy) theme.
This theme has some additional styling elements that can be used to enhance your article.
See the [Docsy shortcodes guide](https://www.docsy.dev/docs/adding-content/shortcodes/) for a list of built-in reusable content snippets.

{{< expand "Linking to Other Articles on this Website" >}}
Internal references use the `ref` shortcode to look up a file by name, or the `relref` shortcode to link to another article on the Documentation Hub website:
```
[Creating a new ZFS Pool]({{\< relref "pools" >}})
(do not include the escaping backslash \)
```
If linking to file names that are not unique, you must also include the path to that file. For example:

```
[Creating a new Dataset]({{\< relref "/SCALETutorials/Storage/Datasets/datasetsScale" >}})
```

Linking to the index file of an article bundle requires using the generic linking syntax to point to the article location:
```
You find information on applications in the [Apps article]({{\< relref "/SCALE/ScaleTutorials/apps" >).
(do not include the escaping backslash \)
```

You can also use an anchor to link to a specific section within an article:
```
[Section Level 3]({{\< ref "example.md#section-level-3" >}})
(do not include the escaping backslash \)
```
{{< /expand >}}
{{< expand "Images" "v" >}}
To add an image to your article, you must add the image file to your article bundle.
You can insert an image without a caption with a simple image link using this markdown string:

```
![image name](\"path/directory/folder/imagename.png")
(do not include the escaping backslash \)
```

Or use the `trueimage` shortcode in your article to link to the image and define the additional caption parameters:

```
{{\< trueimage src="path/to/image.png" alt="Example Image" id="Example Image" >}}
(do not include the escaping backslash \)
```

You can also use HTML to link to an image file that is relative to the site `/static/` directory:

```
<img src="/images/network-interfaces.png" width='700px'>
```

{{< /expand >}}
{{< expand "Admonition Boxes" "v" >}}
To create a simple note box use the `hint` shortcode:

```
{{\< hint type="info" >}}
This is a simple note box with a blue background and a darker blue border
{{\< /hint >}}
(do not include the escaping backslash \)
```

You can apply a type to the alert boxes (i.e., `info` and `warning`) to define the color of the box:
```
{{\< hint type="warning" >}}
This is an alert that is titled Warning and uses a red coloration.
{{\< /hint >}}
(do not include the escaping backslash \)
```
You can include a title for the admonition using the `title=\"Title Text"` in the `{{\< hint >}}` string. For example:

```
{{\< hint type="info" title="Admonition Titles" >}}
This is the text in the information box.
{{\< /hint >}}
(do not include the escaping backslash \)
```
This renders as:
{{< hint type="info" title="Admonition Titles" >}}
This is the text in the information box.
{{< /hint >}}
{{< /expand >}}
{{< expand "Graphical Fonts and Icons" "v" >}}
You can call either the Font Awesome or Material Design graphical fonts in your text to be more precise about what buttons or icons to click in the TrueNAS web interface.
Below are examples of icons we already use on the Docs website, along with the exact code you would add to the Markdown file to call that icon.

To find icons that you can include with your text, please refer to the [Material Design](https://material.io/resources/icons/?style=baseline) or [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) Icon Libraries. Note that we only support the *Free* and *Solid* Font Awesome icons.

To improve accessibility assistance, please use the `aria-hidden` and `title` fields with your icon.
This allows users who require accessibility assistance like screen readers to know what icon is being used.

### Icon Examples

<i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> = `<i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>`

<i class="fa fa-cog" aria-hidden="true" title="Settings"></i> = `<i class="fa fa-cog" aria-hidden="true" title="Settings"></i>`

<span class="iconify" data-icon="fa:pencil"></span> = `<i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>`

<i class="fa fa-bell" aria-hidden="true" title="Alert"></i> = `<i class="fa fa-bell" aria-hidden="true" title="Alert"></i>`

<i class="fa fa-trash" aria-hidden="true" title="Delete"></i> = `<i class="fa fa-trash" aria-hidden="true" title="Delete"></i>`

<i class="fa fa-eye" aria-hidden="true" title="eye"></i> = `<i class="fa fa-eye" aria-hidden="true" title="eye"></i>`

<i class="fa fa-bars" aria-hidden="true" title="Menu"></i> = `<i class="fa fa-bars" aria-hidden="true" title="Menu"></i>`

<i class="material-icons" aria-hidden="true" title="System Update">system_update_alt</i> = `<i class="material-icons" aria-hidden="true" title="System Update">system_update_alt</i>`

### Key Strokes
When a specific keyboard key or key combination is used, use the `<kbd>` HTML code to highlight the keystrokes.  Here are a few examples:

<kbd>Ctrl + C</kbd> = `<kbd>Ctrl + C</kbd>`

<kbd>Delete</kbd> = `<kbd>Delete</kbd>`

<kbd>Command+c</kbd> = `<kbd>Command+c</kbd>`

<kbd>Shift+Insert</kbd> = `<kbd>Shift+Insert</kbd>`
{{< /expand >}}

## General Content Rules to Follow
Do not use the following in your articles:

* The word *will*. It either does or does not do something. Use active voice and present tense when writing content.
  For example, do not type "The system will restart." Instead, use "The system restarts."

* The word *may*. We all say it but we are not giving permission to do something, we are saying it *might* do something.
  You can also replace *may* with *can* or *should* if these words better describe the situation. Only use *may* when granting permission to do something.

* Do not use possessive case. Replace the ('s) instances with a statement. For example, do not say "The system's IP address." Instead, say "The IP address for the system."
  You can use *its* or *their*, but try to avoid possessives where possible.

* Do not use contractions. Contractions do not translate well for non-English and English as a second language reader populations.
  For example, change instances such as *doesn't* to *does not*.

* Spell out numbers between one and ten when referring to numbers of items in general terms.
  If you are referring to entering a number, type the digit (for example, enter *1* in the field). Use digits for numbers greater than ten.
