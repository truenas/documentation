---
title: "Shortcodes"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

## Hugo Shortcodes
These are build directly into Hugo and are supported regardless of theme implementation.

### Highlight

{{< highlight html >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}

### Instagram

Embed directly from Instagram.

```
{{ instagram }}
```
### Tweets

Embedded directly from Twitter.

`{{/< tweet 877500564405444608 />}}`

### Vimeo

Embedded directly from Vimeo.

{{< vimeo 146022717 >}}

### Youtube

Embedded directly from Vimeo.

{{< youtube w7Ft2ymGmfc >}}

## Geekdocs Shortcodes

### Buttons!

{{< button relref="/" class="..." >}}Home{{< /button >}}

### Columns!

{{< columns >}} <!-- begin columns block -->
# Left Content
Dolor sit, sumo unique argument um no ...

<--->

# Mid Content
Dolor sit, sumo unique argument um no ...

<--->

# Right Content
Dolor sit, sumo unique argument um no ...
{{< /columns >}}

### Expanders!

{{< expand >}}
## Markdown content
Dolor sit, sumo unique ...
{{< /expand >}}

{{< expand "Custom Label" "..." >}}
## Markdown content
Dolor sit, sumo unique ...
{{< /expand >}}

### Admonition Boxes!

Known as a "hint" box in Geekdoc:

{{< hint info >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint ok >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint warning >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint danger >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

### Includes!

These allow for true "single sourcing" of our content (fix once, updates many).

The include shortcode can include files of different types.
By specifying a language, the included file will have syntax highlighting.

#### Attributes:

| Name | Usage | default |
|---|---|---|
|  file | path to the included file relative to the hugo root | empty value |
| language* | language for [syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages)  | empty value |
| markdown | included file is markdown | false |
| options | highlighting [options](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode) | linenos=table |

\* if not set, the content will be rendered as plain HTML

#### Example

{{< include file="static/includes/iXsystemsSupportContact.html.part" >}}

### SVG Charts from Text!
Geekdocs uses [mermaid](https://mermaid-js.github.io/mermaid/) to represent diagrams using text and code. It is Javascript based.

{{< mermaid class="text-center">}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{< /mermaid >}}

{{< mermaid class="text-center">}}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
{{< /mermaid >}}

{{< mermaid class="text-center">}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{< /mermaid >}}

### Tab Boxes!

Side by side representation of content.
Allows for linear flow or a progressive revealing of information.

{{< tabs "uniqueid" >}}
{{< tab "macOS" >}} # macOS Content {{< /tab >}}
{{< tab "Linux" >}} # Linux Content {{< /tab >}}
{{< tab "Windows" >}} # Windows Content {{< /tab >}}
{{< /tabs >}}

### Table of Contents!

Candidate to replace the auto-generated article ToC from Docsy.
Would be added to the beginning of lengthy content files.
Requires proper document organization and Markdown header syntax.

{{< toc >}}

## Docsy Shortcodes

These have been ported from the existing Docsy implementation and been made functional with Geekdocs.
Additional styling might be required, or the shortcode retired for a similar Geekdoc implementation.

### Page Info

{{% pageinfo %}}
This API namespace was depricated in version 1.1, and removed in version 1.2. 
Please look at the alertplugins/* API namespace for the repacement for this functionality.
{{% /pageinfo %}}

### API Link

{{< api-link "users/get_data" >}}

### Notice

{{< notice >}}
Example Text
{{< /notice >}}

### Alert

{{% alert title="Warning" color="warning" %}}
Some text for the example.
{{% /alert %}}
