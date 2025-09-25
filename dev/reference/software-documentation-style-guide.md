# Software Documentation Style Guide

The purpose of this guide is to help users create a clean and consistent presentation of all non-PDF content published to truenas.com/docs/.

Use this guide to:

Review all existing and internally generated content for publication.

Review and update content submitted by community contributors, after the pull request process.

This guide is influenced by style guides developed by Microsoft, Google and others, and adopts many of the technical writing tenants and approaches in their guides.

## Article Enhancements

### Formatting Enhancements

Utilize these pages for further understanding on topics, such as: lists, emphasis, and characters.

#### Special Characters

Temperature in degrees

Use 75&deg;F becomes 75°F in your Markdown articles

#### Icons

Icons are used to reproduce symbols that are present in a user interface and are intended to help the reader associate the documentation to the software interface.

iXsystems software uses three styles of icons but occasionally a custom icon might be used as well as those found on these sites:

Font Awesome icon library and syntax: <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>

Material Design icon library and syntax: <i class="material-icons" aria-hidden="true" title="System Update">system_update_alt</i>

Using Iconify to call MDI (icon library) icons and add inline as an SVG: <span class="iconify" data-icon="mdi:test-tube"></span>

Note: Starting with the TrueNAS Connect docs site, and more generally following the Docs Hub Refresh, the legacy syntax (above) needs to be replaced with <iconify-icon icon="mdi:test-tube"></iconify-icon>


##### Using Inspect to Find the Icon Code

If you are unable to locate a specific icon in the three options above, used in the web UI, try to highlight the icon on the screen and right click to see the options.

Click on Inspect to see the code for the highlighted item display in code panels on the right side of the screen.

Sometimes you are not able to highlight the icon but get either right before or after it to have the code display either before what you selected or after it based on your cursor position. Look for the icon syntax to copy.

With the icon selected or highlighted, right click and select Inspect,. The side panel displays with the portion of the code for what you selected highlighted in blue. If you look below in the red-circled area you also see the icon syntax.

##### Creating Custom SVG Icons from Inspect Tool

Some UI icons are unique to TrueNAS and cannot be found in the normal icon libraries. To recreate these custom icons for documentation, you need to extract them from the web interface and convert them to theme-compatible SVG files.

If you need to create a local SVG file from an icon found in the UI using the browser's Inspect tool:

1. Extract the SVG code: Right-click on the icon and select Inspect. Look for <svg> elements or <ix-icon> components containing SVG data. Right-click on the highlighted element in the inspector and select Copy > Copy outerHTML.

2. Clean and normalize with Claude: Paste the HTML from the inspect tool and use this prompt:

```
Can you clean up this icon to work with the themed-icon shortcode and save it as
/static/images/SCALE/[SCREEN]/[ICONNAME].svg?

Requirements:

- Remove Angular attributes, framework classes, and wrapper elements

- Normalize viewBox to "0 0 24 24" and scale coordinates proportionally

- Set fill="currentColor" for theme compatibility

- For icons with backgrounds, use SVG masking for proper cutouts

 [paste the HTML from inspect tool here]
```

**Use the themed-icon shortcode**:
Reference the icon in markdown tables or content:
`{{< themed-icon src="/images/SCALE/Dashboard/IconName.svg" alt="Icon Description" >}}`

The themed-icon shortcode automatically applies theme-aware styling using CSS variables, ensuring icons display correctly in both light and dark modes while maintaining proper contrast.

Test the icon in a local build. If anything appears off with the rendered icon, you may need to ask Claude to make adjustments to the new SVG file.

#### Applying Emphasis (Markup Syntax)

##### Article Emphasis

To emphasize text in article content:

* Use Bold (**word or phrase**) for:

Any on-screen UI element but only when specifically talking about the screen element not the function.
Examples:

Use for, "click Snapshot and then ADD."

Do not use for, "when using a snapshot to back up your dataset."

The navigation path to a specific location in a web interface.
Example:

Go to Storage > Pools and click ADD.

* Use Italics for:

Variables typed into fields in the UI.
Examples:

Type tank into the Name field.

Variables included in commands or URL. Explain the variable following the example.
Example:

Type the URL http://IP:PORT/ where IP:PORT are the IP address and port number assigned to your system.

First instance of a new term followed by the definition of the term.
Example:

Encryption is the process of encoding information known as plaintext, into an alternative form known as ciphertext.

* Use the <kbd></kbd> tags for any button on a typical keyboard such as Enter, Ctrl, Alt, etc.

Example:

Press  <kbd>Enter</kbd> to continue.

* Use the <file> </file> tags for any specific file name that ends in a file extension or full directory path.

Examples:

Save the <file>console.log</file> file.

Open <file>~/GitHub/documentation/temp/filename.txt</file> to see the text.

* Use the ` tags for:

Any specific CLI commands or strings typed into a CLI.
Examples:

The `ls` command lists objects in the directory

Enter `ls ~/GitHub/documentation/` to list all objects in your local documentation directory.

Any block of command line output or larger procedure.

#### Enterprise Shortcode

##### Enterprise Shortcode Purpose

The new enterprise shortcode inserts a  color box with the heading into articles to clearly identify either an entire article or section of the article as only for Enterprise customers.

###### Shortcode
{{< enterprise >}}

text here

{{< /enterprise >}}

###### Best Practices

* Use at the top of an article or section that only applies to Enterprise customers. Insert the shortcode after the {{<toc>}} shortcode.

{{< enterprise >}}

This content applies to TrueNAS Enterprise Customers Only

{{< /enterprise >}}

* Use where appropriate to enclose sections or notes that only apply to Enterprise customers. For example

Example:

{{< enterprise >}}

Type the content that only applies to Enterprise Customers inside the start and end shortcodes.

{{< /enterprise >}}

#### Admonition Boxes

##### Hugo-admonitions (Connect Docs)

Starting with the TrueNAS Connect site and later (following the broader docs hub redesign project) in the rest of the documentation, we are moving from the Geekdocs native hint shortcode to integrating the [hugo-admonitions](https://github.com/KKKZOZ/hugo-admonitions) module as part of our theme. Hugo-admonitions is “A lightweight Hugo module that adds beautiful and customizable admonition blocks to your content.”
As of 9/12/25 this applies only to the connect-docs project.

This involves changing syntax, but gives us access to a wider range of admonition types and the ability to more easily create custom admonitions with scss rules.

See the link above for fuller documentation, but the usage of these blocks is as follows:

###### Usage
See demo.md for examples.

Use the blockquote in this way:

```
> [!NOTIFY]
> System notification: Your password will expire in 30 days.
```

###### Available Callouts List

--------------------------------------------------------------------------
| Alerts & Emphasis | Information & Elaboration | Guidance & Interaction |
| [!DANGER]         | [!INFO]                   | [!TIP]                 |
| [!ERROR]          | [!NOTE]                   | [!TASK]                |
| [!WARNING]        | [!ABSTRACT]               | [!GOAL]                |
| [!CAUTION]        | [!CONCLUSION]             | [!IDEA]                |
| [!IMPORTANT]      | [!EXAMPLE]                | [!QUESTION]            |
| [!SUCCESS]        | [!QUOTE]                  | [!NOTIFY]              |
|                   | [!CODE]                   |                        |
|                   | [!EXPERIMENT]             |                        |
|                   | [!MEMO]                   |                        |
--------------------------------------------------------------------------

[!NOTE]
Unsupported callout types will default to [!NOTE]

Or you can customize the title by using any of them:

```
> [!IDEA] Summary
> This is a summary using the `IDEA` callout
```

```
> [!MEMO] Summary
> This is a summary using the `MEMO` callout
```

Use the Header Only mode by including a title only:

```
> [!TIP] You can choose to only to show the header!
> [!NOTIFY] System notification: Your password will expire in 30 days
> [!SUCCESS] Congratulations! Your code has been successfully deployed to production
> [!WARNING] Warning: This operation will delete all data. 
```

Use the [extended syntax](https://gohugo.io/render-hooks/blockquotes/#extended-syntax) to make a foldable alert:

```
> [!TIP]- Click here to view the tips
> [!TIP]+ Click here to view the tips
```

You can use nested admonitions too:

```
> [!QUESTION] Can admonitions be nested?
> > [!TODO] Yes!, they can.
> > > [!EXAMPLE]  You can even use multiple layers of nesting.
```

###### Customization
There are two main ways to customize the styles:

Variable Overrides (Recommended for most users): Modify colors, opacities, dark mode selectors, etc., by overriding SASS variables. This method is update-friendly.

Advanced SCSS Override: For deep changes to the styling logic and CSS rules, you can override the main SCSS file.

####### Variable Overrides (Recommended)
This is the simplest and most common way to customize admonition styles. You only need to create a single SASS file in your project to specify your custom variable values.

Create the user settings SASS file:

In your Hugo project's root directory, create the following file (including the directories if they don't exist): assets/sass/vendors/_admonitions-user-settings.scss

You can use these commands from the root of your project:

```
mkdir -p assets/sass/vendors
touch assets/sass/vendors/_admonitions-user-settings.scss
```

The resulting directory structure in your project will look like this:

```
your-hugo-project/
└── assets/
    └── sass/
        └── vendors/
            └── _admonitions-user-settings.scss  <-- Your custom settings file
```

Define your custom variables in this file:

Open assets/sass/vendors/_admonitions-user-settings.scss and add your SASS variable overrides.

[This file](https://github.com/KKKZOZ/hugo-admonitions/blob/main/assets/sass/vendors/_admonitions-user-settings.scss) contains a minimal example.

[!IMPORTANT]
Do not use !default in this file for your overrides.

In _admonitions-user-settings.scss, you can change these colors:

```
// --- Theme Colors ---
// Define the colors used for admonition elements in both light and dark modes.
// Light Mode Colors
$admonition-light-bg: #ffffff; // Content background
$admonition-light-text: #000000; // Content text
$admonition-light-code-bg: #f5f5f5; // Inline code & code block background
$admonition-light-code-text: #24292e; // Inline code & code block text
$admonition-light-blockquote-border: #e0e0e0; // Blockquote left border
// Dark Mode Colors
$admonition-dark-bg: #1d1e20; // Content background
$admonition-dark-text: #e6e6e6; // Content text
$admonition-dark-code-bg: #313244; // Inline code & code block background
$admonition-dark-code-text: #cdd6f4; // Inline code & code block text
$admonition-dark-blockquote-border: #45475a; // Blockquote left border
// --- Header Background Opacity ---
// Controls the opacity of the background color tint applied to the whole admonition block.
// Value should be between 0 (transparent) and 1 (opaque).
$admonition-light-header-bg-opacity: 0.1; // Opacity for light mode background tint
$admonition-dark-header-bg-opacity: 0.1; // Opacity for dark mode background tint
```

To change the colors for specific admonition types (like note, tip, warning), define the $admonition-colors-overrides SASS map. This map will be merged with the module's default type colors, with your definitions taking precedence.

```
// Example: assets/sass/vendors/_admonitions-user-settings.scss
// --- Admonition Colors ---
$admonition-colors-overrides: (
  note: #007bff,       // Make 'note' admonitions blue
  tip: #28a745,        // Make 'tip' admonitions green
  warning: #ffc107,    // Make 'warning' admonitions yellow
  danger: #dc3545,
);
```

The default types and their base colors available for override can be found in the $admonition-colors-base map within the module's main _admonitions.scss file.

Dark Mode Support
By default, hugo-admonitions attempts to automatically detect and apply dark mode styling to match your website's theme.

How it Works:

Instead of relying on the operating system's preference (prefers-color-scheme), this module checks for the presence of specific CSS selectors on your <html> or <body> tags. The default configuration looks for a wide range of common selectors used by popular Hugo themes and CSS frameworks:

html[data-theme="dark"], body[data-theme="dark"]

html[data-bs-theme="dark"]

html[data-scheme="dark"], body[data-scheme="dark"]

html[data-color-mode="dark"], body[data-color-mode="dark"]

body.dark, body.dark-mode, body.theme-dark

html.dark, html.dark-mode

This list is defined by the $admonition-dark-selector variable within the module's SCSS file.

When Customization is Needed:

If your theme uses a different CSS class or data attribute not included in the default list above, the admonition blocks might remain in light mode even when your site switches to dark mode.

How to Customize the Dark Mode Trigger:

You can easily tell hugo-admonitions which selector(s) your theme uses by overriding the $admonition-dark-selector SCSS variable in _admonitions-user-settings.scss.

[!NOTE]
If you encounter difficulties getting dark mode to work correctly with your specific theme, even after following these steps, or if anything in this guide is unclear, please don't hesitate to open an issue!

####### Advanced SCSS Override (Modifying Rendering Logic)
If you need to make more fundamental changes to the admonition styles beyond what variables allow (e.g., altering CSS rules for structure, spacing, animations, or adding entirely new CSS), you will need to override the main _admonitions.scss file from the module.

[!CAUTION]
You will be responsible for merging any upstream changes from the module's _admonitions.scss into your overridden copy if you want to receive bug fixes or new SCSS features from the module.

Create a copy of the module's main SCSS file:
 In your Hugo project's root directory, create the following file:
 assets/sass/vendors/_admonitions.scss

 You can use these commands:

```
 mkdir -p assets/sass/vendors
touch assets/sass/vendors/_admonitions.scss
```

The resulting directory structure in your project:

```
your-hugo-project/
└── assets/
    └── sass/
        └── vendors/
            └── _admonitions.scss  <-- Your overridden main SCSS file
```

Copy the contents of the [source file](https://github.com/KKKZOZ/hugo-admonitions/blob/main/assets/sass/vendors/_admonitions.scss) into the file you created.

Update the styles as needed.

####### Aligning Hint Boxes with Indented Text
To make this render as indented content, such as in a step procedure, start on a new line, tab over twice (vertically align your cursor with the text after), and enter the > ![CALLOUT]. Press enter again and type out the content in the new already indented line. Repeat until you get to the end of the content. All content should go on the new already aligned lines or this does not render properly.

Example Syntax:

```
3. Click the <span class="material-icons">keyboard_arrow_down</span> button in the disk's row to open detailed device information.
    > [!TIP]
    > **For most users**: The basic table information (Name, Size, Serial, Pool) provides everything needed for routine management. The detailed information below is useful for troubleshooting or advanced planning.
4. Review additional disk specifications in the expanded panel (optional):
```

The hint-admonition boxes do not appear to have the same limitations regarding indenting at multiple list levels that we experienced with the hint shortcode.

```
3. test.
    > [!TIP]
    > testing
   3. test.
       > [!TIP]
       > testing
      3. test.
          > [!TIP]
          > testing
```

Hint shortcode (Deprecated)
As of 9/12/2025 the Hint shortcode is still in use on all documentation sites except for the connect-docs.

Use the  hint shortcode to place content in a color-shaded box.
See https://geekdocs.de/shortcodes/hints/ for more information.

-------------------------------------------------------------------------------------------------------------------------------------
| hint note      | Blue/gray box. Use for asides that provide additional background information.                                    |
| hint tip       | Green box. Use for asides that provide efficiency tips or configuration recommendations.                         |
| hint important | Yellow box. Use for asides that inform the user of potential misconfiguration or error situations.               |
| hint warning   | Red box. Use for asides that warn the user of extreme danger to the system configuration or data loss scenarios. |
-------------------------------------------------------------------------------------------------------------------------------------

You can optionally include a `title="Some Text"` to replace the default title, such as Warning with your custom text.

Example Syntax:

```
{{< hint type=[note|tip|important|caution|warning] (title="GitHub") >}}
People should not mess with the text in this example as it misleads the reader!
{{< /hint >}}
```

####### Aligning Hint Boxes with Indented Text

Hint admonition boxes don't always work or render if indented as in under step procedures, but it will generally work at the first indent level. To make this render as indented content, after the first bullet or numbered point in a list, start on a new line, space over to the proper alignment, and press enter to create an indented empty line and start a new line already indented then enter the open shortcode for the hint. Press enter again and type out the content in the new already indented line. Repeat until you get to the end of the content, then enter the close hint shortcode. All content should go on the new already aligned lines or this does not render properly.

Example Syntax:
```
1. First bullet point or a numbered step
   {{< hint type=info >}}
   Enter hint text on empty, already indented new lines.
   People should not mess with the text in this example as it misleads the reader!
   {{< /hint >}}
2. Next bullet point or numbered step.
```

Indenting hint admonition boxes to a second nested level do not render as indented text or hint boxes. Best practice is to not add hint boxes at these levels.

#### Lists

Lists can be ordered (numbered) or unordered (bullet points). You can also use multi-level list for both, and in the case of ordered lists, you can use nested bullets as well.

See Writing Step Procedures for tips and proper numbered and bullet list usage and construction.

##### Bullet List Constructions
Use good parallel construction for any unordered/bullet list. If you begin with the first item beginning with a noun or verb, the rest of the list should also begin with a noun or verb.

If you can't accomplish parallel construction for all points in that list, consider rewording all points to start with the same phrasing.

For example, do:

Always start a list the same way, whether a noun or verb.
Always end each bullet point the same way with or without a period.
Or just begin with the verb (note, while a complete sentence, you don't have to end with a period):

Start a list the same way, whether a noun or verb.
End each bullet point the same way with or without a period.
Or begin with nouns:

Variables use italics for emphasis
Terms in the first usage also use italics for emphasis
Buttons and other UI elements use bold
Do not mix noun and verbs or end some with a period and the others without:

Include a period if the bullet point is a complete sentence.
Bullet points should all start with the same grammatical construction
The verb does not have to be the same action word, just an action word.

For unordered lists that don't seem to fit the start-with-noun-or-verb construction, use the same common phrasing or grammatical construction, like a list of questions:

The papers tend to fly away
The fan makes it impossible to keep papers from flying away
The window should remain shut to not have papers fly outside
Example of parallel construction such as a list of questions:

Can I uses bullets for a list of items?
Do you need to use bullet points or can you just indent text?
How many steps can a procedure have?
Use unordered list for items or for follow-up actions that do not occur in a specific sequence like check this, check that, then check the other thing.

If the bullet list of items requires additional clarification or there is more information than you want or should include in a bullet lit, type that content below the list and follow the same order you used for the bullet list.  For example, a list of the types of clustered volumes. The bullet list probably looks like this:

The five types of clustered volumes are:

Distributed - Which distributes files across the various bricks in the volume.
Replicated -  Which offers better reliability and data redundancy than a distributed volume.
Distributed Replicated - Which distributes data across replicated sets of bricks.
Dispersed - Which disperse data across the bricks.
Distributed Dispersed - Which is not yet implemented.
Now I explain more about distributed volumes. Next I talk about the replicated volumes. I now move on to the distributed replicated volumes. I add the dispersed information now. I finish up by talking about distributed dispersed volumes. Each can be a separate paragraph or all in the same depending on the information you want to include.

Unordered lists use the * character.

Example: Unordered Bullet list Syntax

```
Here's a few things to consider:
* This
* That
* Other
 
Now I'm continuing on with the article copy.
```

##### Numbered Lists

Ordered or numbered lists are for items that occur in a specific sequence like in a procedure. Do not use numbers for lists of items unless that list is of item quantities (i.e. I0 cups, four spoons, etc).

When creating a numbered procedure do not exceed ten top level steps. Refer to Writing Step Procedures for more information.

Ordered lists use numerals and the . character after then number.

Example: Numbered list Syntax
```
I'm introducing several steps:
1. This is step 1
2. This is step 2
3. This is step 3
 
Now I'm continuing on with the article copy.
```

##### Multi-Level Lists
A multi-level list can include a combination ordered/numbered and unordered/bulleted lists.

When writing a complex procedure or list of items that have their own nested child items, align items at its level so the lists render correctly. This is especially important if you want to indent hint boxes or associate images with a nested list item.

An image, if not aligned with the preceding item that it should be aligned with, can make a numbered procedure difficult to follow.

With Markdown syntax, extra spaces can lead to confusion and the code not rendering the way you want.

Make certain the Markdown indent line displays for the inserted hint shortcode or image code.

#### Navigation and Layout Enhancements

##### Expand option

Use the Expand shortcode to place content inside expandable/collapsible boxes. Use this option for:

Advanced users/readers to explain more complex topics or procedures
Inexperienced users that require more detailed content typical users would not need
Also as an option to include how-to videos in a way that doesn't disrupt the content flow and allows the reader the choice to either access or ignore the video tutorials.

###### Expand Not Tabs
Use the expand shortcode instead of tabs. After inserting a header and maybe a few sentences of introductory content, use the expand for the remainder of the content or instructions to organize rendered articles and decrease the size of the article displayed. Reader can decide if they want to continue reading that section by clicking the expand symbol.

###### Basic Expand Shortcode
Include the text to be hidden between the two shortcodes. When you expand the box, whatever text or links is/are included between the expand shortcodes displays on screen.

In the example, "Custom Label" is the expand element title that appears in the header of the expand, replace this with an appropriate title for the expand element you create.

Shortcode syntax
```
{{< expand "Custom Label" "v" >}}
## Markdown content
Dolor sit, sumo unique ...
{{< /expand >}}
```

Note: The basic expand shortcode will not properly render when nested within another HTML element, such as a hint admonition box or a child expand within another expand element. Use the nested expand shortcode in these instances.

##### Expand Anchors and Linking to Expands
Each expand element within an article is automatically assigned an anchor link in the format of #Expand-#. The digit is assigned based on the position of the expand in the article in numerical order.

To find the anchor link for an expand element, go to it on the Docs Hub (or in a local build of your working article) and click the "Copy Link" icon on the right side of the expand box.

You can use this anchor to set up internal cross references from other points in an article by linking to it, like a header. For example:

```
For more information, see the [cloud sync instructions](#expand-1) below.
```

You can also use the anchor to insert links from another article directly to that expand element, using a relref. For example:

```
For instructions on setting up a cloud sync, see [Backing Up TrueNAS]({{< relref "SetUpBackupScale.md #expand-1" >}}).
```

When a reader navigates to an expand anchor, whether from clicking an internal cross reference or from another article/site, their browser automatically scrolls to and expands that content.

##### Nested Expand Shortcode
Due to html parsing limitations, the basic expand shortcode (with its anchor link) will not properly render when nested within another HTML element, such as a hint admonition box or a child expand within another expand element. In these instances, you simply need to append nest- to the existing shortcode. This shortcode produces an expand element without an anchor link, which can be embedded within other html elements.


Example Syntax in Article Context

```
{{< expand "Click here for instructions to set up cloud sync" "v" >}}
 
1. Add your cloud storage credentials to TrueNAS.
 
    Go to **Credentials > Backup Credentials** and click **Add** to open the **Cloud Credentials** configuration screen.
 
    Some cloud storage providers, like Amazon S3, require you log into your cloud account to generate additional information like an access key.
    TrueNAS requires you to enter the Amazon S3 credentials you generate on their **Security Credentials > Access Keys** page before you can save and add the cloud credentials.
    Check with your cloud storage provider to see what credentials they require TrueNAS to provide to complete data transfers.
 
    Some cloud storage providers, like Box, can automatically populate the required **Authentication** fields after you log into your account using OAuth Authentication.
 
    {{< nest-expand "Click here for more information" "v" >}}
    {{< include file="/content/_includes/OAuthCloudCredentialSetupSCALE.md" >}}
    {{< /nest-expand >}}
 
    For more information on cloud credentials see [Adding Cloud Credentials]({{< relref "AddCloudCredentials.md" >}})
{{< /expand >}}
```

##### Indenting Expands
If inserting an expand after a bullet point or numbered step, you can and should align it with the indented text, but this only renders correctly at the first level of indentation. After the first line with indented text, press Enter and space over to the alignment point and press Enter again to create a new line that is already indented, then type the Expand open shortcode. Press Enter to create another indented line where you begin entering the text that goes in the indented expand box. Repeat until you enter the close expand short code.

This only renders correctly a the first indentation level. This does not work a nested levels.

Example Syntax:

```
* bullet point or numbered step text indented.
   
  {{< expand "custom label" "v" >}}
  Enter the text that goes in the expand box.
  {{< /hint >}}
 
* second bullet point or numbered step text indented.
```

##### Video Expand Option
To include tutorial videos you can type any label text you want inside the double quotes that displays on the unexpanded box. For example, Video Tutorial.

Example Shortcode for a Video

```
{{< expand "Video Tutorial" "v" >}}
This short video demonstrates manually adding a snapshot {{< embed-video name="scaleangelfishmanualsnapshots" >}}
{{< /expand >}}
```

#### Media and Embedded Elements

##### Images

This page covers managing and working with images used in articles.

###### General Image Guidelines

* Look through the existing images before adding a new image to make sure you aren't adding duplicates or unnecessary copies to the repository.
* If replacing an existing image with an updated version, search the repository for other uses of the image, update paths in articles as needed, and delete the previous version(s) from the repository.  
* Capture only the elements you need to show in the article. This extends the life of the image and doesn't overwhelm the reader with too much extraneous information. Use only the configuration window unless showing in context of the entire screen adds clarity for the reader.
* Answer the question "Does this image help the reader understand the procedure?" If not, use a different image.
* Add human readable hover-text captions for additional context and clarity. It does not have to be the same as the file name if reusing an image named for a different purpose.
* Keep image readable, clear and on point to what you are illustrating. For example, don't use a screenshot where the font is too small as people with poor vision won't be able to read the print.
* Break up long screens into section by setting types if adding UI reference content. If there is a section on General Options, Advanced options, Authentication or other, crop the screen to show the settings for each functional area.

###### Managing Images

This section covers image file management, including naming conventions, storing, compressing, updating, and deleting images.

####### Creating and Naming Images
Images are named according to their descending location and function.

Keep image names as short as possible while making it clear what the image depicts. For example, no need to name an image SCALEDirectoryServicesAddActiveDirectoryScreen when AddADScreen or AddActiveDirectoryScreen work just as well.

Where possible, save one image to use in multiple places rather than multiple versions of the same screenshot. The exception is when you want to show before/after examples.

Image names follow a simple camel Case syntax (FileName) and end with the .png (Portable Network Graphics) extension whenever possible. Using .jpg and .jpeg are discouraged, but functional. Use lowercase for the file extension.

New Version of an Image

Tip! If an image is out of date or the screen changes in a new release, save as the same name in the new version folder. This way you only have to update the folder section of the image string. See Updating Outdated Images below.

Example 1: Full Screen View
To maximize screenshot lifespan, avoid left side or top bar navigation elements in full screen images whenever possible.

Example 2: Dialog, Widget, or Form
Crop element images so that little to no surrounding screen is visible.

###### Storing Images
Before adding a new image, review the existing images in the repository as well as related articles on the Docs Hub to determine if a current image is reusable or should be replaced. Where possible, reuse images in multiple articles rather than creating multiple (near-)identical screenshots.

All images used in the website are contained in the GitHub/documentation/static/images/ directory and are organized into multiple subdirectories.

To keep images organized and make sure you use the correct version of a screenshot, images are organized by product release, then version, but not down to the dot level unless there is a significant change that requires adding this to the path.. For example, SCALE/22.12 but not SCALE/22.12.2.

For example, images of the TrueNAS CORE version 12 web interface are stored in static/images/core/12.0/.

Generic images, logos, and icons are stored in the top level images/ directory or the product directory (like static/images/SCALE).

Do not store version-specific images (e.g. UI screens) in an un-versioned folder. For example, a UI screenshot from SCALE Cobia is stored in static/images/SCALE/23.10, not the SCALE folder.

###### Compressing Images
Maximize website performance by compressing the images used in articles. Because we typically use .png images, most of these can be compressed with little degradation of image quality.

All new images added to the repository are compressed using an image optimization utility like PNGGauntlet.

To compress images using PNGGauntlet, either browse using Add Images or drag and drop to add the new image files. If the original files are saved as JPG, GIF, TIFF, or BMP, PNGGauntlet converts them to PNG during the optimization.

Select Overwrite Original Files, and then click Optimize!.

##### Updating Outdated Images

When a UI screen is changed in a new software version, update any outdated images of that screen by taking a current screenshot, updating the path to all instances of the previous version in Docs Hub articles, then deleting the previous version(s) of the image to minimize bloat.

1. Review the existing image(s) and determine which need to be updated. Take new screenshots in a recent UI build to replace outdated images.
2. Save updated images in the current versioned folder using the same file name as the outdated image so that you only need to update the version number where it is inserted in an article. For example, if you are updating an image named AppsChooseAPoolForApps.png from SCALE Bluefin to Cobia, save the new image in the 23.10 versioned folder using the same file name.
  a. This makes updating images in article markdown easy because only the version number needs to be updated, for example:

    ```
    {{< trueimage src="/images/SCALE/22.12/AppsChooseAPoolForApps.png" alt="Choose a Pool for Apps" id="Choose a Pool for Apps" >}}
    ```

    ↓↓↓

    ```
    {{< trueimage src="/images/SCALE/23.10/AppsChooseAPoolForApps.png" alt="Choose a Pool for Apps" id="Choose a Pool for Apps" >}}
    ```
3. Use a code editor, such as Visual Studio Code, to search the full repository branch for instances of the image in other articles.
To avoid broken image links on the Docs Hub, update the image version number in all articles before deleting the previous image file.
4. Use File Explorer to search the /static/images folder or the product subdirectory, in this example /static/images/SCALE, for outdated files. Search by file name, for example: "AppsChoosePoolForApps.png".
In the example, there are two previous versions of the image, the one being replaced from 22.12 and an older, unused, version from 22.02.
5. Delete all outdated image files.

##### Deleting Images
When an article is removed from the documentation or an existing image is no longer needed in an article (and is not being used in any other articles), delete the unused image(s).

1. If you are removing an image from a article because it is no longer needed and are not updating the image or removing the article from the Docs Hub, skip to step three.
2. If you are removing an article from the Docs Hub, note the location and file name for all images used in that article. Repeat steps three through five for each image.
3. Use a code editor, such as Visual Studio Code, to search the full repository branch for other instances of the same image in other articles. Search by file name, for example: "AvailableApplicationsChia.png".
If there are additional instances of the image being used in other articles, review each to determine whether the image needed in that article.
  a. If the image is not needed in any additional articles, remove the image from each article. Proceed to step four.
  b. If the image is needed in another article, remove the image shortcode from the article(s) where it it no longer needed and then STOP. To avoid broken image links on the Docs Hub, do not delete image files that are used in other articles.
4. If the image is no longer needed in any articles, use File Explorer to search the /static/images folder or the product subdirectory, in this example /static/images/SCALE, for the image file name.
5. Delete all unused image files.

##### Working with Images in Articles
This section covers adding and removing images from articles.

###### Inserting Images

####### trueimage Shortcode
Use the trueimage shortcode for all images, unless a unique situation forces you to use the alternate shortcode.

The new trueimage shortcode introduces a few new options and image changes:

Image centered and sized to a 75% maximum of the total image width. Allows opening the image in a new browser window to see the full image.
Image with a light border (contrast) around it on hover.
Hover text that doubles as screen reader alt text based on the alt parameter and caption text based on the id parameter.
Automatically adds "Figure number:" before the caption text.
number is dynamically generated based on the order of images in the rendered article.
The javascript figureCounter also creates a linkable anchor point for each image in the form of: #Figure-number.
This allows for simplified in-article figure references, for example: see [Figure 1](#figure-1).
The trueimage shortcode is very similar to the previous image shortcode (see example below).

To add the "Figure" text caption with or without a number designation that also functions as an ID and anchor point for the image, use the src parameter (required). The alt and id parameters are not required to be identical, but both must be human readable.

Begin replacing existing image markdown with the new trueimage as you work in each article.

Place images in article content with an empty line above and below the image call.

Syntax Example

```
{{< trueimage src="/path/to/image.png" alt="Hover and screen reader text" id="figure caption text" >}}
```

Example Image in Article Content

```
The **Cloud Sync Task** widget displays a list of tasks configured on the system.
 
{{< trueimage src="/images/SCALE/23.10/DataProtectionCloudSyncTask.png" alt="Data Protection Cloud Sync Task" id="Data Protection Cloud Sync Task" >}}
 
If cloud sync tasks are not yet configured **No Cloud Sync Tasks configured** displays in the widget.
```

(Optional) Crediting Images
If you need to include an additional caption below the image, such as to give credit to an external source, use the caption parameter as part of the trueimage shortcode. caption accepts standard text and markdown formatted hyperlinks (for linking to an external source).

Syntax Example

```
{{< trueimage src="/path/to/image.png" alt="Hover and screen reader text" id="figure caption text" caption="additional caption text" >}}
```

Example Image in Article Content

```
{{< trueimage src="/images/SCALE/Apps/CloudflareTunnelOverview.jpg" alt="Cloudflare Tunnel Overview" id="Cloudflare Tunnel Overview" caption="Illustration via [Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) (CC BY)" >}}
```

####### Alternate Shortcode (deprecated)
The alternate image shortcode to just open a full size image in a new browser window uses a syntax similar to standard Markdown links, but must begin with an exclamation point (!).
Generally this syntax is outdated and should be converted to trueimage whenever possible.

The text in square brackets is the image name. The image name must not have any whitespace separators (CommonMark specification).

The text in the first set of parentheses provides the path for the image to display in the article. In the example code, the text in quotes displays in the article when the reader hovers their mouse cursor over the image (HTML alt property). The hover text can take inspiration from the image name but must be human-readable.

The text in the second set of parentheses creates a link to open the full-size image file.

Syntax Example

```
[![ImageName](PathToImage "Hover Text")](PathToImage)
```

Example Image in Article Content

```
Click on the user row to show the user details screen.
 
[![LocalUserDetails](/images/SCALE/23.10/UserScreenUserDetails.png "Local User Details")](/images/SCALE/23.10/UserScreenUserDetails.png)
 
**Edit** opens the **[Edit User](#add-or-edit-user-screens)** screen. **Delete** opens a delete confirmation dialog.
```

###### Aligning Images with Indented Text

When working with lists, whether ordered (numbered) or unordered (bulleted), align the images with the text preceding it. If not aligned with the list items, the image may interfere with the numbering of a step procedure.

Markup is sensitive to spaces so proper alignment with no extra spaces is necessary for it to render properly. Refer to Lists.

Note, image alignment only renders properly at the first level of indentation.

Indented Image Syntax Example

```
1. Click on the interface to open the **Edit Interface** screen for the selected interface.
 
   {{< trueimage src="/images/SCALE/22.12/EditInterfaceNicDeviceSCALE.png" alt="Add Alias" id="Add Alias" >}}
 
2. Clear the checkmark for **DHCP** to show the **Aliases** fields, and then click **Add** for each alias you want to add to this interface.
```

####### Removing Images
To remove an image from an article, first determine if the image is no longer needed or just needs to be updated.

If the image is no longer needed in the article and does not need to be updated, note the file name then delete the shortcode from the article markdown. Follow the procedure in Deleting Images to delete or retain the image file, as appropriate.

If the image needs to be updated, modify the image shortcode path to the updated image and manage outdated files following the procedure in Updating Outdated Images.

#### Videos

Documentation videos are an additional means to educate readers about products and how to use them. They are typically embedded near the parallel written content.

You can also use the Expand shortcode to hide the video in the expandable box.

To embed a video, use the embed-video shortcode:

`{{< embed-video name="filename" >}}`

#### Snippets

Snippet articles contain content you want to include in more than one article.  This single sourcing provides a single point where you maintain or update the content that appears in more than one article.

Full Markdown/HTML articles can be written and included inside other articles. Included snippet content is rendered in the parent article as if it were raw markdown.

This article type requires an invisible unicode character (U+0000A LINE FEED, input as the html entity &NewLine;) to properly render when the snippet file begins a shortcode or raw HTML.

The snippet source article must be placed in the content/_includes/ directory. This directory is hidden from the Geekdoc theming, but still processes and renders with Hugo.

Rendered snippets use the .md file extension and are filed under /Content/_includes/pathtofile/filename.md, where pathtofile is an optional subfolder and filename describes the snippet.

##### Creating a New Snippet
Snippets can vary in length from a single sentence to the entire article content, for example the TNHardwareGuide.md file.

When naming a snippet file, if used in both CORE and SCALE, or TrueCommand and either release, give the snippet a universal name. For example, the universal getting support snippet is named iXsystemsSupportContact.md. If the snippet only applies to a specific release you may include the release in the name, but this is not required.  

If creating a step procedure where many steps are identical, create the snippet only if the step numbers are also identical. If everything is the same except a name or some variable, consider rewriting the procedure to make steps identical so you can create a snippet.

When creating a SCALE CLI command snippet, do not include the command heading or the command introductory sentence after the heading in the snippet. Start the snippet at the expand shortcode. The text description for the snippet should describe what the reader sees when they expand the box. You can create headings in the article using the snippet if it necessary or you want to call attention to the CLI command instructions and link it in the article toc.

###### Snippet Article Requirements
The single-source article has several requirements:

must be a Markdown extension: .md
must be filed under /Content/_includes/pathtofile/filename.md where pathtofile is an optional subfolder and filename describes the snippet
must include &NewLine; in the first lines:

```
&NewLine;
 
Snippet content begins here
```

##### Including Snippets in Articles
Single sourced snippet content can be included in a parent article using the include shortcode.

###### Rendered Snippet Shortcode
To call a single-sourced snippet file from /content/_includes/pathtofile where pathtofile represents the subfolder where the file is stored, if applicable.

Copy this shortcode and rework to include the path to the desired file:

```
{{< include file="/_includes/<pathtofile>.md" >}}
```

###### Snippet in Article Example
For example, the Contacting Support table snippet is used in many different docs. It provides the information the reader needs to know how to get help from iXsystems.

This html table is added to the /content/_includes/iXsystemsSupportContact.md file:

```
&NewLine
 
Customers who purchase iXsystems hardware or that want additional support must have a support contract to use iXsystems Support Services. The [TrueNAS Community forums](https://www.truenas.com/community/) provides free support for users without an iXsystems Support contract.
 
<table class="truetable">
  <tr>
    <th><b>Contact Method</b></th>
    <th><b>Contact Options</b></th>
  </tr>
  <tr>
    <td>Web</td>
    <td><a href="https://support.ixsystems.com" target="_blank">https://support.ixsystems.com</a></td>
  </tr>
  <tr>
    <td>Email</td>
    <td><a href="mailto:support@ixsystems.com">support@ixsystems.com</a></td>
  </tr>
  <tr>
    <td>Telephone</td>
    <td>Monday - Friday, 6:00AM to 6:00PM Pacific Standard Time:<br><br>US-only toll-free: 1-855-473-7449 option 2<br>Local and international: 1-408-943-4100 option 2<br></td>
  </tr>
  <tr>
    <td>Telephone</td>
    <td>After Hours (24x7 Gold Level Support only):<br><br>US-only toll-free: 1-855-499-5131<br>International: 1-408-878-3140 (international calling<br>rates apply)<br></td>
  </tr>
</table>
```

This single-sourced content can then be included in an article using the include shortcode, fore example in /content/GettingStarted/Getting Support/GetSupportSCALE.md:

```
## About TrueNAS Support
 
{{< enterprise >}}
Enterprise SCALE hardware customers with support contracts should contact iXsystems Support using either the **[Commercial Support](https://www.truenas.com/commercial-support/)** option on the top header of the TrueNAS Documentation Hub website, or through one of the contact options listed below.
{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}
```

#### Showing Related Content

As the Docs Hub continues to expand with new content and features, there can be many articles that are related to each other. To help readers find related content, use the article front matter tags value to define relationships between articles.

The related-content.html template automatically generates a Related Content section at the end of an article when it detects other articles (in matching volumes–CORE, SCALE, etc.) with matching tags.

##### Front Matter

The front matter to an article contains all the metadata about the article. The tags property is writer-defined and is used to related disparate content to each other.

```
---
title: "Configuring FTP"
weight: 30
tags:
- ftp
---
 
Text of the article
```

```
---
title: "FTP, SFTP, and TFTP"
weight: 160
aliases: /core/services/ftptftp/
tags:
- ftp
---
 
Text of the article
```

The value of a tag can be anything the writer decides, but the decided value must be reused in other articles for the Related Content to work properly. In the examples above, the ftp  tag is defined in the Configuring FTP article and reused in the FTP, SFTP, and TFTP article. Continuing to use the ftp value in other related articles builds a network of content with the same identifying value.

##### Viewing Tags

The tags used for an article should ideally already be in use for other articles so that Related Content has defined relationships to draw from.

Go to http://localhost:1313/tags/ in a local build (based on the Master/Nightly Development branch) to view a list of tags currently in use on the docs hub.

Because Related Content filters by volume, tags typically do not need to be separated by product. For example, instead of tagging some articles CORE2fa and other articles SCALE2fa, tag all articles 2fa and the template handles sorting and displaying the relevant sections.

##### The Related Content Template

As the Related Content template automatically generates, the taglist shortcode (for example: {{< taglist tag="coreftp" limit="10" >}}) is no longer needed at the end of articles.

Remove any taglist shortcodes found in master branch articles beginning with SCALE Dragonfish, CORE 13.1, and TrueCommand 3.0 versions. Articles in earlier version branches do still need the shortcode.

The Related Content template searches the Docs Hub .md files for any tags matching the defined tags of the current article, sorts matching content by Volume and Book, and lists them under Level 3 headers for the individual books.

You do not need to enter a shortcode or define any parameters beyond defining tags in the article frontmatter.

###### Excluding an Article

Pages that are not terminal pages, such as some index files or landing pages, typically do not need a Related Content section. While the template does include logic to not render a section if there are no related tags found, you can additionally define the frontmatter property related: false to exclude a given article from rendering a Related Content section.

## Content Types and Structure

### Documenting Tutorials

#### Best Practices
Tutorials instruct users how to configure or use a UI function, they do not just repeat the UI reference material.

Where possible include images to illustrate the action, but not every action needs an image.

Conversation style procedures where you do not create numbered steps are fine for simple procedures, but they are harder to follow when the procedure long with detailed instructions. Use an numbered procedure. If it makes it easier to follow the instructions, create a numbered step procedure.

Do not exceed 10 steps. If it you see the procedure exceeding ten steps, evaluate the actual steps to see if any fall into a broad general step. For example, you don’t need to add a step for each action taken to log into the UI and find the screen. See
Writing Step Procedures for more information.

If using nested child steps (sub-steps) try to only use two levels. Step procedures using two levels of nested child steps do not render well and can become hard to follow. Only use a three step levels if necessary with the numbering pattern 1. a. 1. and not the typical organization of 1. a. i.  or a Roman numeral.

The more involved the procedure is, consider using expands or alternate methods to organize the instructions.

If a procedure is complex, consider adding a summary procedure with links to heading sections that include the details for a particular step (like in the TrueCommand SAML procedures). Do not make steps headings unless they require a section to adequately document how to accomplish that step.

Use gerund heading for procedures. For example, Adding an SMB Share verses Add SMB Share.

Use heading levels H1- H4. If content organization requires H5, re-evaluate the article and see where you can make changes to flatten the heading structure. Consider creating a new articles for screens that are more complex.

#### Basic Article Structure
Tutorial articles are not as rigidly formatted as UI Ref and CLI articles. The following sections cover the common elements to include in tutorial articles.

##### Front Matter Properties
title: “What Appears in Article Navigation“ Keep it short and to the point.

geekdocCollapseSection: When true, the section expands to reveal articles nested under this article. Only use in _index.md files.

description: “A brief description of the content in the article. Displays in the children shortcode used in the _index.md article for nested articles.” Generally not used in an _index.md file.

weight: the number determines where on the article navigation for a section the article falls.  

aliases: if you move an article published on the website to a new location add the URL for the old location starting after /docs/. For example, /scale/scaleuireference/storage/pools/datasetsscale/.

tags: Add a tag or tags you want to use to create lists of Related Articles. Works with the taglist shortcode inserted at the bottom of the article.

draft: If false, allows you to include the article in the built website. At present, only using this in the CLI Reference project to hide articles not ready for prime time.

##### Weights and Navigation

Weights determine where the article falls on the docs hub navigation panel in the website.

Hugo does not use folders in the File explorer to build the navigation, it uses the article weights. We still use folders to organize article content by feature or function.

Think of of the website navigation as organized into books at the very top level (level 1). Each book has an _index.md file and that file has a weight number that governs where the article appears on the navigation menu. To organize these index files into the desired display order, assign a weight number (10, 20, 30, etc.) to the article. The number you assign determines where the article appears. the higher the number assigned the  farther down the list the article appears.

To add an expandable, create a folder in file explorer, add the index file and use geekdocCollapseSection: true to enable expanding/collapsing files nested under the article in the navigation article. Put content articles in the folder in File Explorer. Assign each article in that folder a weight to represent where it displays under the _index.md file. Start over with weights at a low number (10, etc.) for the content article weights. All this tells hugo to put that article under the index file.  This is level 2 in the book.

To add an expandable nested under another expandable section. This is level 3 in the book.

The following table illustrates how to set up navigation for the different levels:

 ----------------------------------------------------------------------------------------------------
| Folder name    | File name     | Level 1 Weight | Level 2 Weight | Level 3 Weight | Level 4 weight |
|----------------|---------------|----------------|----------------|----------------|----------------|
| GettingStarted | _index.md     | 30             |                |                |                |
| Install        | _index.md     |                | 10             |                |                |
|                | Prep.md       |                |                | 10             |                |
|                | Install.md    |                |                | 20             |                |
| Tutorials      | _index.md     | 40             |                |                |                |
| Storage        | _index.md     |                | 10             |                |                |
| Pools          | _index.md     |                |                | 10             |                |
|                | createPool.md |                |                |                | 10             |
 ----------------------------------------------------------------------------------------------------

##### Snippets

If you use the same text more than once in the same article or plan to use it in other articles, create a snippet and insert the include file shortcode.

See #Snippets for more information on how to create a snippet and insert the content into an article.

##### Using Expands in a Step Procedure

Use expands for procedure steps if the procedure is long and detailed.  It is also a good tool to hide the instructions that help novice users but experienced users might want to gloss over.

You can insert an indented expand at the first level of indentation and have it render properly but it does not if you indent under a nested child step.

If you use an expand for a step, indent the expand under the step text.

##### Using UI Reference Settings Tables to Create Tutorials

Do not insert the settings table into a tutorial article.

Read through the settings descriptions to identify required settings. Next determine if you must enter or select settings in a specific order.

If an option adds or removes settings, include that information in the procedure as supporting information for that step.

If a setting option changes what you see or set on a different wizard screen, consider creating a procedure that focuses on the setting that makes such changes. For example, creating a VM that uses Windows as the OS is a good candidate for a procedure focused the Windows OS instead of a general procedure such as Adding a Virtual Machine (VM).

If a setting option opens a new configuration window or screen, you can either add this as a step in the general procedure with all the details in the main procedure, or create a procedure for the procedure related to that new screen, then add the step with a link to the procedure section for the details. For example, Adding a Replication Task opens a window to configure an SSH Connection. Add the step action to select the SSH connection or create a new connection, create the new section for the procedure to Create an SSH Connection with the details, and then add a link to this procedure in the step that mentions this action.

Test the procedure to make sure what you document produces the desired result.

See #Writing Step Procedures for more information on how to create simple and complex instruction documents with nested child or sub-steps.

### Documenting Reference Content

Document UI reference content and the tables of settings with descriptions in the UI Reference book for each release.

Do not put the tables of settings into tutorial articles!

#### Best Practices
Where possible, insert an image that shows the screen, a cropped area of the screen, a dialog or modal, window, or other UI element. Describe each function on the screen in the section for each screen.

Create sub-headings to document UI functions that originate from buttons on a main screen such as the Dataset screen with the Add Zvol, Add Dataset, etc., functions.

If the add and edit screens share the same or most of the same settings, create an H2 for this, then add H3 sections for the various grouped settings on the screen.

Use expands to decrease screen scroll where it makes sense to use them. Always put a heading, introductory sentence or short paragraph about what you put in the expand, then add the expand shortcodes.

##### Method with Expands
If this is a short section such as for a delete option that does not have a great deal of content or that might have very little screen scroll, you don’t need to use expands. Using expands to document a simple UI screen  is optional. Use expands for complex screens or areas of the UI that have a lot of settings, settings organized by functions, or that have several widgets, like on the SCALE Datasets screen.

Let the complexity of the UI inform how you organize the article(s) for each UI screen, widget, wizard, etc.

Basic organization of UI content is:

Heading (H2 or H3). Based on the screen organization. a new screen (Add or Edit screen) give it a H2 heading. The settings sections get H3 headers.

Introductory sentence about the information found in an expand box. This is not the full description just enough to let the reader decide if they want to expand and read the section.

Expand open short code with descriptive text that appears on the rendered expand. Add something like “Click Here for More Information” or something similar that you can repeat throughout the article.

Enter the details about the screen. This is the explanation of the screen, any instructions particular to the screen, and any additional information about the setting sections if applicable. For example, the options for basic and advanced settings and how the settings described overlap on the different screens.

Image shortcode, with or without the caption options. Using a caption and number (Figure 1) allows you to refer to the image in other parts of the article, and if you choose to, to link to that image anchor point.

Table of settings with descriptions. For consistency,  Table headers are Settings and Description. Use bold for each setting  whether in the Settings column or mentioned in the Description column.

If documenting a dropdown setting, enter the options on dropdown lists, and if possible the reason to choose that option. Use bold for fixed options shown by the UI.  Use italics for variables to illustrate what users enter. If a required setting, use (Required) at the beginning of the description. If an optional setting, you can use (Optional) but this is not necessary. If a selection for a setting alters or adds/removes other settings, include that information in the description. If it displays a new screen, create a section for it and link to it in the description for the setting that launches another screen.

Include the truetable shortcode for all tables.

Expand close shortcode.

#### Documenting Screens with Different Functions
Depending on the number of functions and widgets on a main screen (like Data Protection, Storage, etc.), you can use the _index.md file for the main screen (for example, Sharing with the four share options SMB, NFS, iSCSI, and WebDAV) or create an article for the main screen. Using the _index.md file is a good option for screens where the organization is complex, and this helps keep sub-headers to no more than four levels.

Use only header to H2 - H4. If you need to go to a H5, reconsider how you document the screens. Consider  creating other articles you can link to.

Create articles that make it easier for users to find and understand the information they want and reduce complex UI organization to a format easier to navigate.

If the main screen launches a new main screen with many additional screen options (add, edit, etc.), create a new article for that main screen (i.e., Datasets Screens, Import Data Screens, etc.) and link the related screen articles.

If the main screen launches a configuration screen (i.e., Dataset screen launches Add Dataset screen), document that as a section in the main article (i.e., Dataset Screen article).

### Landing Pages

A landing page (_index.md file) can serve several purposes for Product Documentation:

Introduce a feature.

Explain concepts or provide warnings that generally apply to all child articles

Function as a better URL target than a focused article URL

Add an organizational layer to divide content articles into sections, books, or chapters.

There are a few different kinds of landing pages, divided between a general concept with the unversioned master branch and the some specific needs for a branch configured to document a specific software version in the GitHub documentation repository.

#### Website / Version Home Page
This is the primary _index.md file just under the content/ directory.

In the documentation master branch, this is the Docs Hub home page.

In a major version branch like 23.10, this is the 23.10 (Cobia) landing page.

##### Docs Hub home page
Purpose: Welcome and instruct readers how to use the website

Structure: Introductory copy and site navigation instructions.

Best Practices: no vertical scroll on page; immediately funnel reader into the specific section or content they’re interested in.

##### Major Version landing page
Purpose: Introduce a software major version

Structure: Major Version Logo, features description, links to featured content.

Best practices:

Minimize vertical scroll. This is a landing page primarily focused on directing traffic to the deeper content sections and/or articles.

Review Docs Hub analytics to determine which pages are popular. These are good candidates for the featured content links.

Review articles that are newly written or newly rewritten based on the major version features. These are good candidates for the featured content links.

##### Section/Book Introductions
This is the index.md file that is inside the directories under content/ (Example: content/scale/_index.md or content/GettingStarted/_index.md).

There are three kinds of _index.md files here:

Nightly Version Landing page.

Unversioned section Landing page

Specific Book Introductions

###### Nightly Version Landing page
When the documentation master branch tracks the various software nightly builds, these product (CORE, SCALE, TrueCommand) _index.md pages are gradually built out as Major Version landing pages.

See Major Version landing page above for details.

###### Unversioned Section Landing Page
Similar to a Major Version landing page, these _index.md articles are provided an introduction for major content areas that are not tied to any particular product version. This includes:

References

TrueNAS Systems (Hardware)

Solutions

Contributing

Goal: Introduce a major content section

Structure: Introductory copy, describe the purpose of content in this section, provide links or a map of content subsections.

Best Practices:

Eliminate or minimize vertical scroll.

Explain the purpose of content in the section.

Explain the unversioned nature of content and how it applies to the various product versions.

###### Specific Section/Book Introductions
Similar to a printed document, the topmost _index.md file for a specific “Guide” style section of either master branch or a major version branch is intended to introduce the book and provide a table of contents.

Goal: Describe the purpose and style of content in the section/book

Structure: introductory copy, notes that apply to all content in the section/book, table of contents

Best Practices:

Explain the “why” of the book.

Explain how the book is structured for easy reference.

More vertical scroll is allowed here but should still be generally minimized.

Use the children shortcode to dynamically create the book table of contents.

No more than two levels should be included, and books with many content articles might be better with a single level shown for the table of contents.

###### Topical Landing Pages
This is the deepest level of landing page for Docs Hub content. This can be an index file created as part of following a parallel structure to the related product interface or an index file serving as a landing page for a specific feature or topic. Regardless, the same approach is encouraged:

Goal: Introduce the topic

Structure: Introductory copy (could include a basic overview or tutorial), notes that apply to all subordinate content, listing of all subordinate content articles, (when applicable) listing of parallel content in other specific product version “books”

Best Practices:

Focus on the topic or feature at hand.

Consider promoting notices or general content that is present in each child article to this _index.md file, or generally reworking as an _includes snippet that can be called in both locations.

When a topic has a large number of subordinate articles, consider if this landing page is a better endpoint for cross-references than one of the more in-depth subordinate articles.

## Writing Fundamentals

### Simple Rules for Writing Articles

#### Remember the Audience
Rule 1: Know your audience and write for that audience.

Rule 2: Anticipate potential questions and answer them before they are asked.

Rule 3: Remember the three C's: clear, concise and correct.

iXsystems has four different audiences, the experienced user that knows pretty much everything about CLI, ZFS, storage, networking, or cloud computing, the novice user setting up a home system for the first time ever, users with some experience but that still require guidance, and our global audience that might not have English as a second language and that rely on translation services like Google Translate.

Don't assume the reader knows what you are talking about. Tell them what should happen on the screen or with the system, what the expected result of the action taken is and if what happened isn't expected, what they can do about it.

The goal is to not insult advanced users or lose the inexperienced or those that struggle with language differences.

#### Use Active Voice Present Tense (Never use Will)
Use active voice in present tense. Always describe what the system does, not what it will do. Present tense active voice means it either does or does not do something, or it is or is not something.

Never use “will.” Search your articles for the word “will” and rewrite the sentence. For example, change “It will add the dataset to the Pools screen” to “It adds the dataset to the Pools screen.”

Use short, declarative sentences in present active voice. Use a “do this to get this result” format when possible. For example, write “Click Add. The Add Pool configuration screen displays,” or “Click Add to display the Add Pool configuration screen.” Do not write “By clicking Add, the pool can be created.”

Avoid using semicolons. Replace them with two short, simple declarative sentences. Technical content can be difficult to digest, so simplify it with clear, straightforward sentence structure.

Avoid passive constructions like “phrases in green have been marked to show passive voice.” Instead, write “Phrases marked in green show passive voice,” or “Phrases marked in green indicate passive voice.”

#### Use Global English
Tips for writing using global English:

Keep most sentences under 30 words. Keep them short and clear

Keep the articles and other determiners (a, an, the, that, etc.)

Include all the important information

Avoid slashes

Convert passive voice to active voice

Use fewer nouns

Avoid incomplete sentences and bullet points

Give pronouns clear antecedents

Don't use idioms

Be literal in all other aspects of your writing

Standardize terminology (some words have multiple meanings, use the word best fitting the instruction or text, i.e., after instead of once)

#### Things to Not Do or Avoid Using
The following are things to not do or avoid using in article content, especially procedures.

##### Gerunds in Content ("ing" Words)
Avoid using “-ing” words (gerunds). Gerunds often lead to tense and voice errors, overcomplicate sentences, and make translation more difficult for non-English readers.

If you choose to use gerunds, check carefully for unnecessary phrasing that shifts the sentence out of active voice present tense. For example, avoid sentences like “Clicking the Add button means the pool can be added to the Pool screen list.” A more direct, active option is “Click Add. The new pool is added to the Pool screen list.” You can also say, “You can add a pool by clicking Add on the Pools page,” if the gerund fits naturally and the sentence remains active.

For gerunds in headers see #Heading Parallel Construction.

##### Possessive Case ('s Words)
Use possessive case only when referring to people or organizations that own something. Do not apply possessive apostrophe-s (’s) to objects or things that have properties, but do not own anything.

Only use apostrophe-s when discussing human ownership, such as “It is the CEO’s decision.” Avoid constructions like “the server’s status.” Instead, write “the status of the server” or “server status.” These alternatives maintain clarity and accuracy without misusing the possessive form.

##### May (Giving Permission)
May grants or gives permission to the reader where might or could implies the possibility of something happening.

Don't use the word may to describe what might or could occur. Example, don't say "you may have to reset the system" instead use "you might have to reset the system" because it is something that is possible.  Another example, don't say "you may see the LEDs flicker on the drive" instead use "you could (or might) see the LEDs flicker on the drive."

##### Once (Done One Time)

Once indicates something that happens one time, as in you only do this setup one time (once).

Use once only if the action occurs only one time. For example, "This message displays once, after that you can shut the system off" and not "Once the message displays you can shut off the system."

Use after to instruct the user to do something after they complete the first task or the system is ready for them to do some action. For example, "After the system comes up, you can sign on and configure your settings." You can also use when for this, for example "When the system comes on line you can sign in and configure your settings." For native English speaking people the distinction doesn't matter much but for non-English speaking people it becomes confusing.

##### Capitalized Terms or Features for Emphasis

Only capitalize terms that are proper nouns. Do not capitalize common nouns or general feature names.

Avoid capitalizing the names of features or actions in running text unless referring to a third-party marketed feature that uses capitalization. Capitalize a feature only when directly referencing the UI element and only if it appears capitalized in the UI. For example, do not capitalize “replication” unless referring to the “Replication” screen. iXsystems features are not proper nouns, so do not capitalize them unless they are uniquely marketed feature names.

When expanding an acronym or initialism, capitalize each part of the name if it is a proper noun, such as Center for Disease Control (CDC). Do not capitalize joining words like “for.” If the acronym refers to a generic term, such as access control list (ACL), use lowercase for the full term.

Capitalize any company-marketed or formally named protocol or policy if it is a proper noun, such as Dynamic Host Configuration Protocol (DHCP). For common-use terms like direct attached storage (DAS), do not capitalize each word in the expanded form.

To determine whether a name is a proper noun, consider how it is used. For example, Google is capitalized as a product name, but not when used as a verb, as in “google it.” When in doubt, refer to the list of approved terms or search for the expanded form of the acronym or name to verify if it is a proper noun, marketed product, or official title.

### Writing Step Procedures

This article addresses writing step procedures using an ordered (numbered) list. These principles also apply to paragraph or conversational style procedures articles. For more complicated procedures that involve several levels of nested steps or instructions, use the numbered format and not the paragraph style procedure.

For what to do or not do when writing your content see Simple Rules for Writing Articles.

Take advantage of the Markdown shortcodes like expand that allows you to meet the needs of all the different audiences. A well structured procedure or article and using the expand shortcode helps you present information in a way that meets everyone's information needs and allows the reader to decide how much detail they want or need to see.

#### Use Outlines and Drafts

Write a draft outline of the points you want to cover. This is a rough order for the steps or points you want to cover.

You procedure outline should include what the readier needs to do to correctly complete a procedure (the what or how-to steps), what should happen after completing each step (the result), and information that further explains the step actions (clarifying information).

Don't assume the reader has your experience level.

You can add step numbers and formatting later as you flush out the procedure. This also applies if you are writing a paragraph or conversational style procedure.

#### Tricks for Complex Procedures

The most common tricks to use when documenting long or complex procedures include:

Create a short or quick summary procedure to introduce the complex procedure. This is a list of short sequentially numbered steps that are either links or text with links that refers to the detailed how-to instruction further down in the article.

This is known as a jump TOC and is a similar concept to the article TOC but is written like summary procedure steps.

Use internal document anchor points and links from one section to another to connect the user to detailed instructions.

Very useful in long articles with a lot of detailed content. Always include a link back to the top of the page or other important anchor points to help with intra-article navigation.

Use the expand shortcode to hide details under the top summary steps.

This works for both paragraph conversation-style procedures as well as ordered list step procedures.

Use section headers for the main or level 1 what steps. This makes the TOC flow like the procedure in a way similar to the first point mentioned but this list only the steps converted to section headers

Do not assign step numbers to headers. Using numbers in headers/headings makes it easier to create cross-references in PDF formatted documents but the website already includes the methods to add links to sections in running text so numbered headings are not necessary.

#### Write the Procedure
Decide what headers and header type you want to use. Refer to Simple Rules for Writing Articles for more information.

Decide what style headers you want to use (gerund form or verb phrase).

Add headers as you define the rest of your procedure and identify what you need.

Do not exceed more than four levels of headers for the procedure or article content (not including the title)

##### Identify the steps
Steps are the what to do or how to do it action.

Only assign a step number to an action that states what do or how to do it.

Limit the number of steps to the optimum seven steps or the maximum 10 steps. This applies to nested child steps as well.

Why this limit? Readers can get overwhelmed by procedures with more than 10 steps. Procedures that exceed the goal of seven to ten steps are just poorly organized or have applied numbers to listed items that are not actually steps.

Some procedures require the additional levels of what or how-to steps nested under primary steps to help the reader understand all they need to do.

Keep what or how-to steps short and to the point. For example, "Configure the backup." Include the instructions as to how to configure the backup as a nested child step.

Again keep the action, the what or how-to do, short and direct, If any how-to step becomes more involved, use another nested child set of instructions.

##### Identify the Step Results (Every Action has a Result)
Every action (step) has a result, but not all results need to be explained.

Do not number the results of actions taken.

If the result is short, it can follow the action in the same step paragraph line.

If the result requires a longer explanation, you can place it below the step in a new indented paragraph nested under the step it applies to.

If an action has several possible outcomes or additional actions that result from the action, describe them. For example,

"1. Pressed the power button. The button should flash green for three seconds before remaining on. This indicates the system fully initialized.

     If the button flashes alternating green to red then remains red, the system didn't properly initialize. 

     a. Press and hold the power button for 5 seconds until it flashes green to red then turns off.

     b. Turn off the main power breaker and wait for 1 minute until the system fully de-energizes.

     c. Turn on the main power breaker and press the power button." 

##### Identify the Clarifying Information

Some steps require additional clarifying information about executing the step, understanding the step, or addressing the results of the step.

Do not number the result of the action or clarifying information for the action.

Add the information that either includes additional details about what or how to do something or about the result on the same line with the step if it is short, or directly below and indented under the step it pertains to if it is longer or more involved.

If the information is short, it can follow the step sentence on the same line or you can include it as an indented next paragraph. For example:

Press and hold the power button until it flashes green and then turns solid green. If the LED ring flashes green to red and goes solid red the system didn't properly initialize. If this happens, Press and hold the power button until the light turns off. If doesn't, turn the main power breaker off.

Or  write it this way:

Press and hold the power button until if flashes green and then turns solid green.

If the LED ring flashes green to red and goes solid red the system didn't properly initialize. If this happens:

Press and hold the power button until the light turns off. If it doesn't, turn the main power breaker off.

If clarifying information includes more than one option that does not require the reader to do something in a sequential order do not assign it a step number, uses either nested indented lines or bullet points. For example, a command that could produce a few possible outcomes that require additional action could look like this:

1. Type the xys command into the shell. You might receive any of the two responses:

    The Shell screen could display this. Select it and proceed to step 2.

    The Shell screen might display only this other thing. Use this in step 4.

In the above example, indent the paragraph to align with the text not the number. You can use a nested bullet list or just the indented paragraph lines for this type of result and content. If the result returned does require the reader to do something in a sequential order, use a nested number list:

1. Type the xys command into the shell. You might receive any of the two responses:

    The Shell screen could display this.

    a.  Select it and proceed to step 2.

    b. Enter it in the Host name field and click Save.

    The Shell screen might display only this other thing. Use this in step 4.

##### Assign Procedure Numbering
Do a Google search on outline or step procedure numbering and you won't get a straight "use this " answer. There are different numbering patterns based on the type of documents and the purpose of the document. ISO numbering differs from scientific and some engineering numbering patterns used in and for documentation or procedures. The consensus is you get to decide what numbering scheme you want to use.

Recommended numbers sequence: 1. a. 1. A.  or 1. A.1.a.

Top level what or how-to steps are assigned numbers 1-7 or up to 10 maximum.

Level two nested child what or how-to steps use lower case alpha characters a-j.

Level three nested child what or how-to steps use numbers again, 1-10 maximum.

Level four nested child what or how-to steps use upper case alpha characters A-J.

Why use this pattern? Simple, straightforward, logical, and doesn't create issues with indentations or lead to much confusion as to where you are in a procedure.

Why not uses the traditional outline designation of using the Roman numerals at the third level nested child steps. Using Roman numerals is correct in an outline but harder to read and process as a step in a numbered procedure. It also throws off indentation (iiiv. text) used at all levels (parallel construction in the steps) and can be confused as a part of the preceding lower case alpha step if it happens to fall after the eight nested step (h).

An alternative pattern is to use 1. A. 1. a. or go with a two-character number such as a-1 or 1-A for nested child steps, but this can also throw off indentations. Things to consider are how the step number patter is visually interrupted by images or large blocks of text, so the objective is to clarify where the reader is in a procedure and make it easier to follow.

Regardless of the number pattern used, stay with a maximum of 10 steps even at nested child levels. If you need more, re-evaluate that level of nested steps to see if any are part of another step at level or describes how to do one of the other steps.

##### Re-Evaluate Steps if More than 10
If you have more than 7 (or 10 maximum) steps pare down the list. Consider:

Is this something I do before I start the main procedure, like preparing a server? If yes, move this to an introduction section.

Is it something I can do after I complete the main procedure like a wrap-it-up set of instructions? If so, move it to a different section or if it is not something performed in a specific sequential order, remove the step number.

Is it a main what-to-do step or the result of these main steps?

Is this clarifying information for any of the main steps?

Is something that tells you how to do any other step on this level?

If you have more than 10 how-to steps nested under another step, pare down the list of steps. In addition to the above considerations, consider:

Can any actions be combined together to make one action step or nested under on unifying step?

Can I create a new level of nested steps?

##### Re-Evaluate Nested Child Steps if More than Four Levels in the Procedure Flow
Procedures that exceed four total levels or the main step and three levels of nested child steps, are hard to follow and become too long.

If a procedure is so involved that it might require a fifth level or fourth level of nested child steps, evaluate the steps at the top, second or even the third level of nested how-to steps.

Is this something always done in this order with these specific steps? If yes, consider moving it to a separate section and then link to that section header as the step or part of the step. This both moves the flow of these nested steps to that new section but it also flattens the levels it in both the original procedure and the new section.

Can you move steps into a section that either precedes or follows the main procedure, or can the step occur outside the sequential flow of the main procedure. Examples of content you can break out of a main procedure flow:

Any action a precondition for the procedure

Any action that finalizes a procedure or is a after-you-finish step

Anything that can occur out of sequence such an action you need to do but does not depend on the preceding step nor does any other step depend on you completing it first.

You can pull these out of the main procedure. Move to a "before you begin" section, list the follow up actions after the main procedure in either a new section or as paragraphs not numbered. For non-sequential actions you can create a new section and list them there. Add a reference to these steps or link directly to them part of another step as clarifying information if it applies.

You can introduction a procedures by combining steps such as "log into the system, go to the x screen and then:" if everything occurs after you select a specific feature button or screen (for example, Storage) and then all the actions done on the screen following in numbered sequence in the body of the procedure.

##### Convert a Step and the Nested Child Procedure Flow to a New Section
Some procedures become so complex and detailed that the only way to make sense of the flow and not exceed four levels is to extract a step in the flow, whether it is that main step or one of its nested child steps, to a separate heading section and then move the procedure flow to that section. Decide where it makes the most sense to extract a flow of nested child procedure. When deciding where to break-out content, consider:

How many nested child steps exist now or are needed after you move the procedure flow?

If moving the top step to a separate section still results in needing that fifth level of nested instructions then consider breaking out at the first level of nested instructions or the second level of instructions. For example:

1. My first what-to-do step. (If extracted here, this becomes the new section header, step a. becomes 1. and the rest of the nested steps all move up one level in the new section. Make this step a link to the new section in the original procedure.)

   a. My first nested child step that needs more how-to explanation. (If extracted here, this becomes the new section header, step a.1. moves to top level step 1 and the rest of the steps move up two levels. Make this step a link to the new section in the original procedure.)

      1. My second nested how-to explanation steps

          A. My third nested how-to but I need more how-to under this one.

Don't add another level of nested instructions. Consider moving the top step to a new section. All other nested child steps move up one level to stay within the maximum of four levels. Or extract at a first level nested child step if that makes sense.

Make whatever step level you break out a linked step in the original procedure.

Is this break point logical? Will the new section make sense?

Does this step make sense as a section header or does it add confusion to the overall procedure or article flow?

Is it a good candidate for snippet content in that you might reuses this entire procedure flow in some other procedure article?

After moving a step and the nested flow to a new section, at the same level where you broke out the step flow, include the link as either the step content itself or as a link to the new section. The rest of the details and nested child steps live in the new section and not in the main procedure.

There are a few ways to do this.

1. First evaluate the steps and the flow of all the nested steps under them. If any main step needs a fifth level of detailed how-to instructions. break out the step and flow at either that step or one nested under it that logically can be turned into a heading.

2. Move the flow of any nested steps that follow the converted step to the new section. And then organize the step levels in that section.

3. Add the converted step back in the original procedure at the level it was and either make it a link to the new section header where the content moved, or add  a "see Section Name for more information." comment to the original procedure.

You can repeat this process for any step that requires a fifth level of nested detailed how-to steps or if you want to use it to break out any nested step if it makes sense to do it and benefits the reader.

##### Turn Procedure Content into a Snippet
Converting general procedure content or a detailed how-to step to a section heading is a way to make content available as a snippet or as an anchor point you can link to in the same or other documents.

To use the same instructions in another or a few other instructions, create the step with as much detail as required as a snippet article and then embed the snippet shortcode in each article where you want to use it.

##### Use Intra-Article Links and Anchor Points

Add Links to other sections headers if necessary and to improve navigation in the article, for example and a link to where you moved part of the procedure (to that new section).

Add anchor points to any section of the procedure you want to refer to.

If you moved part of the procedure to a new section to flatten the levels of instruction or to make that content a separate section for a snippet, add a link back to where the reader was in the procedure when they clicked the link to read more.  In this scenario, you have the link to the new section, an anchor point at this location in the step procedure, and in the new section you have a link at the end of that content that returns the reader to the step number where they clicked away to read more details. In printed documentation or PDFs these are cross-reference links.

 Make it easier for the reader to pick up where they left off in the procedure.

##### Use the Expand Option

Identify where you can use the expand shortcode to hide detailed how-to instructions under any of the steps.

Don't hide information all users should read. If this information is only found in a nested step that you plan to hide in an expand box, Include the information where all readers can see it as well as with the step it applies to.

Provide the reader enough information for them to decide if they want or need to read more on each step.

Name an expand box something like "How to do this" or some variation that would make sense to the reader.

Repeat this process for each what step with detailed how-to instructions. If it is something all readers should see don't use the expand boxes to hide it.

#### Examples of What Not to Do

##### Example 1: Using a step procedure that is not a procedure
The following is a bad example of using and ordered (numbered) list to document a sequence of events. Correct use is to indent the steps, use separate lines, and if you believe it is necessary, introduce the line with first, then, and then, next, and then, but do not use numbers.

       In the bootstrap initialization process, the following occurs:

1. kubelet begins

2. kubelet sees that it does not have a kubeconfig file

3. kubelet searches for and finds a bootstrap-kubeconfig file

4. kubelet reads its bootstrap file, retrieving the URL of the API server and a limited usage "token"

5. kubelet connects to the API server, authenticates using the token

6. kubelet now has limited credentials to create and retrieve a certificate signing request (CSR)

7. kubelet creates a CSR for itself with the signerName set to kubernetes.io/kube-apiserver-client-kubelet

8. CSR is approved in one of two ways:

  * If configured, kube-controller-manager automatically approves the CSR

  * If configured, an outside process, possibly a person, approves the CSR using the Kubernetes API or via kubectl

9. Certificate is created for the kubelet

10. Certificate is issued to the kubelet

11. kubelet retrieves the certificate

13. kubelet creates a proper kubeconfig with the key and signed certificate

14. kubelet begins normal operation

15. Optional: if configured, kubelet automatically requests renewal of the certificate when it is close to expiry

16. The renewed certificate is approved and issued, either automatically or manually, depending on configuration.

##### Example 2: Using numbers instead of a bullet list

While any authentication strategy can be used for the kubelet's initial bootstrap credentials, the following two authenticators are recommended for ease of provisioning.

  1. Bootstrap Tokens

  2. Token authentication file

Bootstrap tokens are a simpler and more easily managed method to authenticate kubelets, and do not require any additional flags when starting kube-apiserver. Using bootstrap tokens is currently beta as of Kubernetes version 1.12.

Whichever method you choose, the requirement is that the kubelet be able to authenticate as a user with the rights to:

  1. create and retrieve CSRs

  2. be automatically approved to request node client certificates, if automatic approval is enabled.

##### Example 3: Poorly written procedure

```
Approval 

In order to approve CSRs, you need to tell the controller-manager that it is acceptable to approve them. This is done by granting RBAC permissions to the correct group.

There are two distinct sets of permissions:

 

nodeclient: If a node is creating a new certificate for a node, then it does not have a certificate yet. It is authenticating using one of the tokens listed above, and thus is part of the group system:bootstrappers.

selfnodeclient: If a node is renewing its certificate, then it already has a certificate (by definition), which it uses continuously to authenticate as part of the group system:nodes.

To enable the kubelet to request and receive a new certificate, create a ClusterRoleBinding that binds the group in which the bootstrapping node is a member system:bootstrappers to the ClusterRole that grants it permission, system:certificates.k8s.io:certificatesigningrequests:nodeclient:

```

###### What's wrong with the above?

The heading, out of context, does not let the reader know what this approve is for or about.

The writing is overly wordy and not clear or concise.

The incorrect emphasis is used to define new terms and commands are used as nouns in the sentences.

Terms are not defined.

The text assumes the reader has knowledge about their products they might not have.

### Outlining Article Content

Use outlines for procedure or reference content to organize your thoughts and the content in a logical flow that follows the perspective of the reader. Write the content according to their anticipated needs and questions.

List out all the points you need or want to cover and then fill in the content.

Use headers to cover the main points or procedural steps for paragraph or conversational style procedures. Article header levels are:

Level 1 header - Article title. Because the article title is level 1, don't use level 1 headers in a content article.

Level 2 header - Primary points or procedure headers. Use level 2 for the main tasks or topics for the main content topic.

Level 3 header - Secondary points or procedure headers. Use level 3 for considerations that fall under the primary points or procedure flows.

Level 4 header - Third-level points or procedure headings. Use for the rare cases where there are tertiary procedures to a secondary procedure.

If your outline covers a very detailed or complicated procedure that appears to require a level 5 header, consider using a step procedure instead. Paragraph style procedures are better suited to simple procedures where readers can easily follow the flow. See Writing Step Procedures for more information on how to organize and your procedures.

After investigating the article topic and creating the article structure (outline), make a second pass to fill in the copy. Follow the same logical flow when adding copy.

### Grammar and Terminology

Every style guide provides a list of words and terms, both technical and non-technical, technical terms, specific to the tech industry for which they define formatting or usage guidelines.

This article does not redefine these terms but provides links to the iXsystems glossary, and other style guides with words likely to find their way into iXystems documentation.

If a word or term you want to use is not found on the iXsystems list or any of these other lists, add it and follow the style guidelines established.

#### Glossary of Technical Terms

Formatting general rules:

If a proper noun, capitalize it.
If known as an acronym/initialism, define it and then you can use the acronym. For example, Software as a Service (SaaS), Storage Area Network (SAN), lightweight directory access protocol (LDAP).
Not all acronyms are proper nouns or considered brand names so not all are capitalized.

If a brand name, type as the brand name indicates, for example UNIX.
If an on-screen element, and specifically using the on-screen element, use Bold and type as it displays on the screen. Do not put it in bold if generally discussing the feature or function (i.e. the Replication button, or using replication to make a copy of the dataset).
If used as a variable use italics for the variables or when first defining a new term. For example, encryption makes encodes and protects your dataset using either a key or passphrase, or type company name in the Name field.

| Term | Description, Usage, Formatting |
| ---  | ------------------------------ |

access control list (ACL)

A network traffic filter that can control incoming or outgoing traffic. ACLs work on a set of rules that define how to forward a packet at the router's interface. An ACL can filter packets for a single or group of IP addresses, or different protocols (e.g. TCP, IP, UDP ICMP).


Active Directory (AD)

A directory service developed by Microsoft for Windows domain networks. AD uses Lightweight Directory Access Protocol (LDAP), Microsoft's version of Kerberos , and DNS.


access control list (ACL)	A list of permissions associated with a system resource like a user, group, or a pool or file storage resource (dataset, zvol, etc.)
adaptive replacement cache (ARC)	A page replacement algorithm with better performance than least recently used (LRU). This is accomplished by keeping track of both frequently used and recently used pages plus a recent eviction history for both.
Asymmetric Logical Unit Access (ALUA) 	

An industry standard protocol for identifying optimized paths between a storage system and a host. ALUA enables the initiator to query the target about path attributes, such as primary path and secondary path. It also allows the target to communicate events back to the initiator. It is beneficial because multi-pathing software can be developed to support any storage array.

Also known as Target Port Groups Support (TPGS), it is a set of SCSI concepts and commands that define path prioritization for SCSI devices. It is a formalized way to describe SCSI port status, and access characteristics. it describes paths as fast, slow, or down and the transitions between these states in a standards-compliant manner. This standard is designed to define the protocol on how multipath IO should be managed between hosts and storage devices. It also reduces vendor-specific coding and complexity.


Advanced Host Controller Interface (AHCI)

A technical standard defined by Intel that specifies the operation of serial ATA (SATA) host controllers in a non-implementation-specific manner in its motherboard chipset. It describes a system memory structure for computer hardware to exchange data between host system memory and attached storage devices. NVMe supersedes this for modern slid state drives.


Apple Filing Protocol (AFP)

A proprietary network protocol that is part of the Apple File Service (AFS). Formerly knows as the AppleTalk Filing Protocol. It offers file services for macOS and the classic MAC  OS. AFP was the primary protocol for file services in Mac OS 9 and earlier. Deprecated starting in OS x 10.9 Mavericks, and AFP Server support was removed in Mac OS 11 Big Sur.


bare metal hypervisor

A hypervisor installed directly on the hardware of a physical machine between the hardware and the firmware at the same level as the motherboard basic input/output system (BIOS). This is necessary for some systems to enable the operating system on a computer to access and use virtualization software. With this, the software no longer relies on or is limited to the specific hardware devices or drivers. It allows the OS and associated applications to run on a variety of hardware and allows multiple OS and VMs to reside on the same physical server (host machine).


block device

A data storage device that supports reading and writing data in fixed-size blocks, sectors, or clusters. These blocks can vary in size based on formatting.


behavior driven design (BDD)	Testing the design/development from the end user point of view rather than test-driven design (TDD)
block storage	Block special files, or block devices, correspond to devices through which the system moves data in the form of blocks. These device nodes often represent addressable devices such as hard disks, CD-ROM drives, or memory regions. GlusterFS requires a filesystem (like XFS) that supports extended attributes
brick

The basic unit of storage in GlusterFS, represented by an export directory on a server in the trusted storage pool. A brick is expressed by combining a server with an export directory in the following format:

`SERVER:EXPORT`    For example:     `myhostname:/exports/myexportdir/`


certificate

An electronic document used to prove the ownership of a public key. The certificate includes information abut the key, the identity of its owner, and the digital signature of an entity that verified the certificate.


certificate authority (CA)

An entity that issues digital certificates. a digital certificate certifies the ownership of a public key by the named subject of the certificate.


cloud, the cloud, cloud-based

Whether mentioned as the cloud or as a cloud-based service or cloud storage provider, it is not a proper noun or name.


cloud management platform (CMP)	A product that gives the user integrated management of private and hybrid cloud environments.
cloud sync

Sending, receiving or synchronizing data with a cloud storage provider.  


cluster	A trusted pool of linked computers or nodes communicating with each other to perform a set of operations.  In GlusterFS, a cluster is also referred to as a trusted storage pool. Multiple nodes are configured to perform a set of operations we call it Cluster.
Common Internet File System (CIFS)	A version of Server Message Block, is a dialect of SMB. That is, CIFS is a particular implementation of the Server Message Block protocol, created by Microsoft.
compatibility support module (CSM)	A component of the UEFI firmware that provides legacy BIOS compatibility by emulating a BIOS environment, allowing legacy operating systems some option ROMs that do not support UEFI to still be used.
container	A virtualization instance in which the kernel of an operating system allows for multiple isolated user-space instances. Unlike virtual machines (VMs), containers do not need to run a full-blown operating system (OS) image for each instance. Instead, containers are able to run separate instances of an application within a single shared OS.
content delivery network (CDN)	A network of distributed services that deliver content to a user based on the user’s geographic proximity to servers. CDNs allow speedy content delivery for websites with high traffic volume or large geographic reach.
database	An organized collection of data stored and accessed electronically.
dataset	A collection of data. It is used to store information needed by applications or the operating system itself, such as a source program, macro libraries or system variables or parameters.
default route

A configuration of the IP network that establishes a forwarding rule for packets when no specific address of a next-hop host is available from the routing table or other routing mechanism.


direct attached storage (DAS)	Storage that is directly connected to a server/workstation. This direct connection provides fast access to the data; however, storage is only accessible from that server/workstation. DAS includes the internally attached local disk drives or any other storage medium attached directly.
Domain Name Server (DNS)

The hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol networks (like a phone book). The resource records contained in the DNS associate domain names with other forms of information.


duplexing	A variation of disk mirroring in which each of the multiple storage disks has its own SCSI controller. This is the practice of duplicating data in separate volumes on two hard disks to make storage more fault-tolerant in case one drive goes down you can still access the other.
Dynamic Host Configuration Protocol (DHCP)

A network management protocol used on IP networks. A DHCP server dynamically assigns an IP address and other network configuration parameters to each device on the network so devices can communicate with each other.


Dynamic DNS (DDNS)

A method to real-time update a name server in the DNS according to the active DDNS configuration of its configures host names, addresses or other information.


elasticity	A term used to reference the ability of a system to adapt to changing workload demand by provisioning and deprovisioning pooled so that provisioned resources match current demand as well as possible.
encryption

The process of encoding information known as plaintext, into an alternative form known as ciphertext. Only authorized parties can decipher a ciphertext back into plaintext and access the original information.


ESXi

An enterprise-class, type-1 hypervisor developed by VMWare for deploying and serving virtual computers. ESXi (formerly (ESX) is not a software application that is installed on an OS; instead, it includes and integrates vital OS components such as kernel.


extensibility	The ability of a cloud solution to add new runtime and framework support via community build packs.
extents

iSCSI extents define resources to shar with clients. There are two types of extents: device and file.


fabric	A Fibre Channel (or iSCSI) topology with at least one switch present on the network.
federated database	A system in which multiple databases appear to function as a single entity. However, the databases typically involved in this kind of system exists independently of the others. Once the different databases are combined, one federated database is formed.
file system (fs)

A file system controls how data is stored and retrieved.


File Transfer Protocol (FTP)

A classic network protocol that transfers computer files between a server and client over a computer network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server.


filesystem in userspace (FUSE)	A loadable kernel module for Unix-like computer operating systems that lets non-privileged users create their own file systems without editing kernel code. This is achieved by running file system code in user space while the FUSE module provides only a bridge to the actual kernel interfaces
fusion pool

A special class of vdev that can store metadata such as file locations and allocation tables. Using a special vdev drastically speeds up random I/O and can cut the average number of spinning-disk I/O's needed to find and access a file.


geo-replication	Geo-replication provides a continuous, asynchronous, and incremental replication service from site to another over Local Area Networks (LANs), Wide Area Network (WANs), and across the Internet.
Google Cloud Platform (GCP)	A comprehensive cloud platform offered by Google, Inc. that consists of both infrastructure as a service (IaaS) and platform as a service (PaaS) offerings.
group

A collection of users, generally with a defined set of permissions (read, write, execute) and a given set of resources shared among the multiple users within the group.


Gnu Privacy Guard (GnuPG)	A complete and free implementation of the OpenPGP standard as defined by RFC4880 (also known as PGP). GnuPG allows you to encrypt and sign your data and communications; it features a versatile key management system, along with access modules for all kinds of public key directories.
GRUB

GNU GRUB, or GNU GRand Unified Bootloader, is a boot loader package from the GNU Project and the reference implementation of the Free Software Foundation's Multiboot Specification. It provides the choice to boot into one of multiple operating systems installed on a computer or select a specific kernel configuration available on a particular operating system's partitions.


hierarchical storage management (HSM)	This is a automatic management process, used in conjunction with a policy setup describing the importance of data within an organization. This process then moves older unused data onto a cheaper form of long term storage, e.g. accounts older than 5 years automatically moved from hard drive to tape.
host bus adapter	The HBA is the intelligent hardware residing on the host server which controls the transfer of data between the host and the target storage device.
host name

The label assigned to a device connected to a computer network that is used to identify the devices in various forms of electronic communication.


hypervisor

Also known as a virtual machine monitor (VMM), is a type of virtualized software that supports the creation and management of VMs and separating computer software from its hardware.


inifi-band (InfiniBand)	A switched fabric computer network communications link used in high-performance computing and enterprise data centers.
initiator

A software or hardware that enables a host computer to send data to an external iSCSI-based storage array (target) through a network adapter.


input/output per second (IOPS)

I/O transactions per second are mostly a factor of the number of virtual devices in a pool. The are not a factor of the raw number of disks in the pool. General rule of thumb: a pool raw IOPS potential is equivalent to the single slowest disk in each vdev in the pool.


interface

A boundary across which two or more different components of a computer system exchange information. The exchange can be between software, computer hardware, peripheral devices, humans or other things. A network interface (LAN port or wi-fi) facilitates data exchanging between two systems. A human interface device (HID) such as a mouse or keyboard allows a person to interact with a system. A hardware interface like a USB port allows for exchanging information between a computer and another device.


intrusion prevention system (IPS	An intrusion prevention system (IPS) is a network security tool (which can be a hardware device or software) that continuously monitors a network for malicious activity and takes action to prevent it, including reporting, blocking, or dropping it, when it does occur.
IP address 	

An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. IPv4 addresses are decimal while IPv6 addresses are hexadecimal.


IP storage (IPS)

IP storage (IPS) is the use of fiber channel (FC) and IP-based technology to access storage devices using TCP/IP networks. IPS is the foundation that enables storage area networks (SANs) to directly connect servers with storage.


Intrusion prevention system (ISP)	An IPS is a network security/threat prevention technology that examines network traffic flows to detect and prevent vulnerability exploits. is designed to monitor various network attacks in real time and take appropriate actions (like block) against the attacks according to your configuration.
Internet Service Provider (ISP)	An organization that provides services for accessing, or participating in the Internet.
Internet Small Computer Systems Interface (iSCSI)

A transport layer protocol that works on top of the Transport Control Protocol (TCP) and provides block-level access to storage devices by carrying SCSI commands over a TCP/IP network. It allows  sending SCSI commands over LAN, WAN or Internet networks and makes it possible to set up a shared-storage network where multiple servers and clients can access and share central storage resources as if that storage was locally-connected device. In a virtualized environment, iSCSI devices enable communication between client servers and storage systems through the iSCSI initiator and targets.


just a bunch of disks (JBOD)	A bunch of disks housed in its own box; JBOD differs from RAID in not having any storage controller intelligence or data redundancy capabilities.
Kerberos

A network authentication protocol designed by MIT that works on the basis of tickets to allow nodes communication over a non-secure network to prove their identity to one another in a secure manner.  It provides strong authentication for client/server applications by using secret-key cryptography. The Kerberos protocol uses strong cryptography so that a client can prove its identity to a server (and vice versa) across an insecure network connection. After a client and server uses Kerberos to prove their identity, they can also encrypt all of their communications to assure privacy and data integrity.


Kernel-based Virtual Machine (KVM)

A full virtualization solution for Linux on x86 hardware containing virtualization extensions (Intel VT or AMD-V) that allows it to function as a hypervisor. It consists of a loadable kernel module, kvm.ko, that provides the core virtualization infrastructure and a processor specific module, kvm-intel.ko or kvm-amd.ko. Using KVM, one can run multiple virtual machines running unmodified Linux or Windows images. Each virtual machine has private virtualized hardware: a network card, disk, graphics adapter, etc. KVM is open source software.


Key Management Interoperability Protocol (KMIP) 	

An extensible client/server communication protocol for the storage and maintenance of keys, certificates, and secret objects.


keyboard, video, mouse (KVM)

Allows you to control multiple computers from a single keyboard, mouse, and monitor. IP KVM switches offer IP-based remote access, which means that you can control multiple servers and computers from potentially anywhere in the world that has an internet connection.


key server public key infrastructure (PKI)	Key servers distribute, merge, and expire the OpenPGP public keys, A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.
LAN Manager (LM)	Authentication protocol invented by IBM and used extensively by Microsoft operating systems prior to NT 4.0, uses a password encrypting technology that is now considered insecure. Lan Manager authentication includes the LM, NTLM and the NTLMV2 variants, and is the protocol used to authenticate all clients services running the Windows operating system when performing the operations, joining a domain, authenticating between Active directory forests, authenticating to domains based on earlier versions of the Windows OS, authenticating to computers that do not run Windows OS beginning with Windows 2000, and authenticating to computers on in the domain.
Lightweight Directory Access Protocol (LDAP)

An open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.


Link Layer Discovery Protocol (LLDP)

A link layer protocol used by network devices for advertising their identity, capabilities, and neighbors on a local area network based on IEEE 802 technology, typically wired Ethernet.


logical volume management (LVM)	A system that abstracts the physical characteristics of the underlying storage devices in order to provide increased flexibility and power. LVM allows you to create groups of physical devices and manage it as if it were one single block of space. You can then segment the space as needed into logical volumes, which function as partitions.
logical unit number (LUN)	A conceptual division (a subunit) of a storage disk or a set of disks. Logical units can directly correspond to a volume drive (for example, C: can be a logical unit). Each logical unit has an address, known as the logical unit number (LUN), which allows it to be uniquely identified.
LUN masking	A method to restrict server access to storage not specifically allocated to that server. LUN masking is similar to zoning but is implemented in the storage array, not the switch.
lossless, losslessly	Lossless compression is a class of data compression that allows the original data to be perfectly reconstructed from the compressed data. By contrast, lossy compression permits reconstruction only of an approximation of the original data, though usually with greatly improved compression rates.
managed services provider (MSP)	An IT services provider that provides fully outsourced network, application, and system services across a network to clients.
maximum receive unit (MRU)	Is the largest packet size that an interface can receive, so it’s an ingress interface parameter. In most of the cases MRU equals MTU but it’s not a requirement. You can configure different values for both MTU and MRU to achieve some benefits.
maximum transmission unit (MTU)	Is the largest length of a packet that can be transmitted out of an interface toward a destination. When the word MTU is used plainly, we are typically referring to the interface MTU, but when talking about a protocol MTU (e.g IP MTU, MPLS MTU) we are typically referring to the maximum payload of the protocol itself.
media access control (MAC) address

A unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment. Within the Open Systems Interconnection (OSI) network model, MAC addresses are used in the medium access control protocol sublayer of the data link layer.


metadata	Data providing information about one or more other pieces of data. The metadata is stored with the file data itself usually in the form of extended attributes.
name server

Refers to the server component of the Domain Name System (DNS). A name server provides responses to queries against a directory service which translates an often human readable text-based identifier to a numeric identification or addressing component.


network, networks, networking

A group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network resources.


network address translation (NAT)

A method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.


network-attached storage (NAS)

Network-attached storage (NAS) is a computer data storage server connected to a computer network providing data access to a heterogeneous group of clients.


Network File System (NFS)

A distributed file system protocol originally developed by Sun Microsystems, which allows users on a client computer to access files over a computer network much like local storage is accessed.


Network Information Service (NIS)	A client-server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network. Originally designed by Sun Microsystems.
NT LAN Manager (NTLM)

A set of Windows authentication protocols (NTLM, V1 or V2) that authenticate users and computers based on a challenge/response mechanism that proves to a server or domain controller that a user knows the password associated with the account. Kerberos version 5 authentication is the preferred authentication method for Active Directory environments, but a non-Microsoft or Microsoft application might still use NTLM.


Network Time Protocol (NTP)

A networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.


Network UPS Tools (NUT)	Network UPS Tools is a suite of software component designed to monitor power devices, such as uninterruptible power supplies, power distribution units, solar controllers and servers power supply units. Many brands and models are supported and exposed via a network protocol and standardized interface.
node	A server or computer which stores and processes information. It also hosts one or more bricks. In Kubernetes, nodes represent physical or virtual machines that provide CPU and RAM resources for container-based applications. Nodes are grouped together into clusters.
online transaction processing (OLTP)	Is where information systems facilitate and manage transaction-oriented applications, typically for data entry and retrieval transaction processing.
open source

Open source software is a type of computer software in which source code is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software to anyone and for any purpose.


operating system (OS)

System software that manages computer hardware, software resources, and provides common services for computer programs.


petabyte (PB)	A petabyte (derived from the SI prefix peta- ) is a unit of information equal to one quadrillion (short scale) bytes, or 1000 terabytes. The unit symbol for the petabyte is PB.
pod	A pod is the smallest unit of a cluster that represents a running process on a cluster. It is also defined as a unit of replication on a cluster. In Kubernetes, containers are housed into pods for scheduling and execution.
pool, pools

A ZFS pool is a file system container that is composed of one or more vdevs.


Portable Operating system Interface for Unix (POSIX)	The name of a family of related standards specified by the IEEE to define the application programming interface (API), along with shell and utilities interfaces for software compatible with variants of the Unix operating system Gluster exports a POSIX compatible file system.
portals	An iSCSI portal is a target's IP and TCP port pair.
pretty good privacy (PGP, OpenPGP)

Encryption standard

OpenPGP is the email encryption standard


redundant array of independent disks (RAID)

Redundant array of independent disks (RAID) is a method of storing data on multiple hard disks. The RAID benefit comes from striping which splits up the stored data among the available disks.


remote direct memory access (RDMA) 	A direct memory access from the memory of one computer into that of another without involving either one's operating system. This permits high-throughput, low-latency networking, which is especially useful in massively parallel computer clusters
root

The primary user that by default has access to all commands and files on Linux and UNIX-like operating systems. Also referred to as the root account, root user, and/or supervisor/administrator account.


round robin domain name service (RRDNS)	A method to distribute load across application servers. It is implemented by creating multiple A records with the same name and different IP addresses in the zone file of a DNS server.
Samba

Open-source software implementation of the SMB networking protocol that allows non-Windows systems to share files, printer, and serial ports with a Windows computer on the same network.


scale-out storage	Scale out systems are designed to scale on both capacity and performance. It increases the capability of a storage device in single dimension. For example, adding more systems of the same size, or adding servers to a trusted storage pool that increases CPU, disk capacity, and throughput for the trusted storage pool.
scale-up storage	Increases the capacity of the storage device in a single dimension. For example, adding additional disk capacity to an existing trusted storage pool
scrub, scrubbed, scrubbing

The process ZFS uses to verify the data on a disk. All of the data is read and checked against the computed checksums to verify that no corruption occurred.


Secure Hash Algorithm 256 (SHA256)

A patented cryptographic hash function that outputs a value that is 256 bits long. In cryptographic hashing, the hashed data is modified in a way that makes it completely unreadable. It would be virtually impossible to convert the 256-bit hash mentioned above back to its original 512-bit form.


Secure File Transfer Protocol (SFTP)	Also called SSH File Transfer Protocol, is a network protocol for accessing, transferring and managing files on remote systems.
Secure Shell (SSH)

A cryptographic network protocol for operating network services securely over an unsecured network.


self-encrypting drive (SED)

A hard drive that automatically and continuously encrypts the data on the drive without any user action.


separate intent log (SLOG)

A hardware device that is able to ensure requested synchronous data writes are actually stored. The optimal SLOG device is a small, flash-based devices such as an SSD or NVEe card. Devices uses should be something non-volatile and battery-backed, provide low latency, reasonable to high endurance capability.


Server Message Block (SMB)

Shares, or sometimes the Common Internet File system (CIFS) shares, is a communication protocol for providing shared access to files, printers, and serial ports between nodes on a network. Originally developed for Windows, other platforms such as MAC and UNIX us it through a software implementation called Samba.


share, sharing

A file share, or file sharing,  is the public or private sharing of computer data or space in a network of multiple systems.


snapshot 	

A read-only copy of a file system or volume. When making a snapshot of a dataset, ZFS records the timestamp of when the snapshot was made. No data is copied and no extra storage is consumed. Only when changes occur in the file system and the data in it diverges from the snapshot, does the snapshot star using additional storage.


software as a service (SaaS)

A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted. Sometimes referred to as on-demand software.


storage

Computer data storage technology consisting of computer components and recording media that are used to retain digital data.


storage area network (SAN)

A computer network which provides access to consolidated, block-level data storage. SANs are primarily used to access storage devices, such as disk arrays and tape libraries from servers so that the devices appear to the operating system as direct-attached storage.


striping

Striping splits up the stored data among available drives as in a RAID array of disks. The practice used to spread data over multiple hard disks. Disk striping can speed up data retrieval operations from disk storage. The user is normally allowed to set the data unit size of each strip.


target

An iSCSI target is a storage resource located on an iSCSI server.


test driven design (TDD)	Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.
transaction groups (txg)

A transaction group (txg) is a way ZFS aggregates write-caching into a storage group until it reaches a predefined size or a specific amount of time elapses. It then writes the block to a SLOG device. Transaction groups actually use your system memory. After a transaction group fills it begins to flush out to disk and a second txg begins to fill. If the second txg fills and begins flushing to disk before the first txg completes its process it can impact system I/O performance and ZFS pauses to let the I/O catch up. To avoid this or performance penalties, make your SLOG large enough to handle two transaction groups.


two layer ARC (L2ARC)	The second level Adaptive Replacement Cache is an SSD-based cache that is accessed before reading from the much slower pool disks. It is currently intended for random read workloads.
Unified Extensible Firmware Interface (UEFI)

A specification that defines a software interface between an operating system and platform firmware. UEFI replaces the legacy Basic Input/Output System (BIOS) firmware interface originally present in all I BM PC-compatible personals computers.


UEFI-CSM

To ensure backward compatibility, most Unified Extensible Firmware Interface (UEFI) firmware implementations on PC-class machines also support booting in legacy BIOS mode from MBR-partitioned disks through the Compatibility Support Module (CSM). In this scenario, booting is performed in the same way as on legacy BIOS-based systems: ignoring the partition table and relying on the content of a boot sector. UEFI with CSM usually means mixed mode in which both native (UEFI) and CSM-based (BIOS) boot is available. The boot menu shows a mix of native UEFI boot entries and CSM bootable disk entries.


Unix, UNIX	Unix is both a name for a file system or commands and as a brand for the specification or the file system.
user

An additional account on Linux or UNIX-based operating systems that has lower permission levels than the root account.


VirtIO	A virtualization standard for network and disk device drivers where just the guest device driver knows it's running in a virtual environment, and cooperates with the hypervisor. VirtIO was chosen to be the main platform for IO virtualization in Kernel-based Virtual Machine (KVM).
virtualization, virtualized, virtual machine (VM)

Virtualization is the act of creating a virtual version of something, for example, a virtual machine (VM), virtual computer hardware platforms, storage devices, or computer network resources.


virtual disk image (VDI)

Use by Oracle VirtueBox. VDIs are similar to and perform better than VHD/VHDK but are shown to be slower than virtual machine disks (VMDK). It doesn't support incremental backups like VMDKs. VDIs do have high-level redundancy.


virtual hard disk (VHDK, VHD, VHDX)

A file extension used by VMWare (VHDK) or for Microsoft (VHD). Microsoft Hyper-V hypervisor which uses virtual hard disk file format protocol (VHDX)


virtual LAN (VLAN)

Any broadcast domain that is partitioned and isolated in a computer network at the data link layer (IOS layer 2).


virtual machine disk (VMKD)

A file format that describes containers for virtual hard disk drives used in virtual machines. It is part of a VMWare 3 virtual disk file. Allows cloning of a physical disk and backup of VMs offsite. Unlike an ISO file which is a copy of a CD in a single file, the VMDK contain all the files of a running OS, as well as applications, temp files, user files, etc.  This virtual disk format has the . vmdk extension of files and is used by VMware and VirtualBox virtual machines.


VNET

A technique on FreeBSD to virtualize the network stack. The basic idea is to change global resources, most notably variables, into per-network stack resources and have functions, sysctls, and eventhandlers access, and handle the resources in the context of the correct instance.


Virtual Network Computing (VNC)

A graphical desktop-sharing system that uses the remote frame buffer protocol to remotely control another computer. It transmits the keyboard and mouse events from one computer to another and relays back the graphical-screen updates through a network.


virtual private network (VPN)

Extend a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.


WebDAV

Web Distributed Authoring and Versioning is an extension of the Hypertext Transfer Protocol (HTTP) that allows clients to perform remote web content authoring operations.


Zettabyte File System (ZFS)

ZFS is an advanced, next-generation file system initially developed for Sun Microsystems OpenSolaris. Later the file system became the OpenZFS Project. ZFS includes the functionality of both traditional file systems and volume manager.


zdev

A virtual device. Zdevs are a group of disks built into a ZFS storage pool. A ZFS pool is made up of one or more vdevs.


zvol, zvols

A dataset that represents virtual block devices that can be used for applications that need raw-device semantics such as iSCSI device extents.


ZFS intent log (ZIL)	A log of synchronous operations to disk before ZFS writes it to the array.

### numbers

Refer to the linked style guides for more information on how to present numerals or number references in text.

Google Developer Style Guide use of numbers

In general:

Spell out numbers zero through nine, a number that begins a sentence and a number that is followed but a numeral:
Hyphenate a number when it modifies a noun, like 20-gigabit file.
Type the numeral for times, dates, page numbers, and ordinal numbers (first, second, third, etc.)

0-9 zero to nine	Numeral is always typed out as zero through nine in text, (for example one, two, three, etc. up to nine).
10 and greater
Use numerals for 10 and numbers greater than 10.

When you get to numbers greater than 100, you can use the numeral so type out one hundred, one million, etc.

gigabyte, GB

gigabit, Gb

gigabit per seconds, Gbps

Use the numeral followed by on space and then the abbreviated measurement term, i.e. 2 GB

type out gigabit

Plural form when the number associated with the measure is one.

megabyte, MB

megabit, Mb

Use the numeral followed by on space and then the abbreviated measurement term, i.e. 2 MB

type out megabit

Plural form when the number associated with the measure is one.

terabyte, TB

terabit, Tb

Use the numeral followed by on space and then the abbreviated measurement term, i.e. 2 TB

Plural form when the number associated with the measure is one.

petabyte, PB

petabit Pb

Use the numeral followed by on space and then the abbreviated measurement term, i.e. 2 PB

Plural form when the number associated with the measure is one.

10Base-T

---

## Creating and Editing Docs Hub Articles

### Article Structure
Github requires  articles to have specific structure to render content and links properly. The filing structure of where articles or snippets live also matters.

#### Article Front Matter
Every file in the content/ directory requires .toml -formatted front matter to properly include and organize that file in the website.

Include these few specific elements in file front matters:

--- 	used to denote the beginning and end of the front matter section.
title : <Some Text>
The primary header on the page. This is also used in the left-side content tree. Titles must be written in Title Case!

description: "some text"	The basic short description of the article content. Displays in the output of the {{< children >}} shortcode on the _index.md files.
weight : <recommended as a multiple of 10>
How the article or directory is ordered with the other items at the same level.

Larger numbers appear farther down the list of articles. Using a multiple of 10 wherever possible allows easier re-weighting of content.

geekdocCollapseSection : true | false 	
This is used ONLY in _index.md files to allow the section to be expanded or collapsed in the left-side content tree.

no_print: "true"
Removes the article from the Print Preview used in the primary Software Documentation categories.

related: false	Use for index pages and similar. A page with this frontmatter will not display a Related Content section
aliases:

 - docs/url/goes/here

Use to insert the address(es) where an article existed in earlier versions of the docs hub.
tags:

- scaletagname

Use to set up relationships between articles to include Related Content list

See article on Showing Related Content in Article Enhancements

cascade:
- _target:
    PROPERTY: "VALUE"
Cascades can be used in index files to set a property that applies to all pages below that level.  This is used for bulk defining the volume and book properties (see below) so they do not need to be set for each individual article.
volume: NAME	Sorts articles for the Related Content template. Set via a cascade in the appropriate index file. Volumes are Appendices, CORE, SCALE, and True.
book: NAME	Sorts articles for the Related Content template. Set via a cascade in the appropriate index file. Books are Contributing, COREGettingStarted, CORETutorials, COREUIReference, References, SCALECLIReference, SCALEGettingStarted, SCALETutorials, SCALEUIReference, and Solutions.

Do not use other front matter elements. If used, remove them.

Generic content file front matter:

```
---
title: "Some Article"
weight: 15
---
```

Generic _index file front matter:

```
---
title: "Some _index.md File"
weight: 10
geekdocCollapseSection : true
---
```

##### Creating Aliases
Hugo allows defining multiple aliases for a content file. An alias is an html redirect back to the actual url of the content. Add this to the top of the article to create an alias location and avoid possible 404 errors.

Aliases content front matter:

```
Contents of content/additionalTopics/Placeholder.md
---
title: Example Article
weight: 10
aliases:
- [/example/article]
- [/example2/article2]
---
 
is built and added to:
www.truenas.com/docs/additionaltopics/placeholder/
HOWEVER, entering the URL www.truenas.com/docs/example/article/ also immediately loads www.truenas.com/docs/additionaltopics/placeholder/
```

##### Article Content Requirements
Place each sentence on a single line with one space after the period or end punctuation mark (question or exclamation point).

Use a single empty line to start a new paragraph.

Use a single empty line before an image link and after it.

You must observe the Oxford comma.

##### Snippet Articles
Snippet articles contain content you want to include in more than one article. They provide a single point where you maintain or update the content.

See #Snippets for more information on snippets and the shortcode used to include the content in articles.

#### Writing Content
At present we have three articles types:

Paragraph or conversational style procedures
Step procedures using ordered (step) lists
Reference material
Conversational style procedures do not follow an ordered (step) procedure presentation.

Both conversational style and ordered list step numbered procedures include images and can leverage other article enhancements such as expand boxes to improve readability for the audience.

##### The Basics
Follow these basics when writing or editing article content:

Follow the usage guidelines in Simple Rules for Writing Articles
Keep to the 5th grade reading level. With technical content this is not easy but keeping sentences short and concise as possible without changing the meaning or substance of what you are saying should help.
Use global English: Not all users or readers are native-English speakers or readers. Writing for this audience benefits all readers.
Use an outline to organize your thoughts and the article content. The outline helps identify gaps in the information and provides structure for the content without having to do excessive review and editing.

##### Organizing Procedural Article Content
Whether a conversational style or step numbered procedure, an outline helps provide necessary order and flow to a procedure. Identify what the reader must do and then explain how to do each what the reader must do.

Use headings in procedure articles to provide the primary what steps especially in the conversational style procedure articles.

If the procedure is long or complicated use a traditional step procedure instead of the conversational style. Refer to Writing Step Procedures for more information.

##### Developing Article Content (Copy)
Lay out the article content (or copy) for articles according to a logical flow and content outline.

After investigating the software and creating the article structure, make a second pass and fill in the copy. Follow the same logical flow when adding copy.

If you provide a link to another section in the article, provide navigation links back to the TOC so the reader can easily find their way back to the section they jumped away from. Use the anchor tags or other internal article links to accomplish this..

Reference style article copy follows the same general principles as procedure content, but does not include any specific software configuration instructions (hence reference material)

Reference articles are available as heavy background investigation copy that explains the intricacies of underlying software features. Examples:

ZFS data block healing methods
iocage jail management software architecture
Linux container management design

#### Using Article Enhancements
Use the assorted article enhancement shortcodes to improve the readability and flow of your articles.

Tabs are no longer recommended for organizing content.

Use the expand option after a heading to collapse section content beyond a brief introduction that provides enough explanation to allow the reader to decide if they want to continue reading more in that section or to move on. For example, after the heading and introductory content use an expand box labeled, "Need more information?" and then put either the step-by-step instructions or detailed content inside the Expand shortcode tags.

##### Using Comment Text
In some cases, it may be useful to include notes or partial documentation within an article without having this text render as visible in the site. For example, if a feature needs backend work before documentation is published, comment tags can be used to conceal unfinished content while leaving breadcrumbs and/or partial text for the next editor of that article.

Placing HTML comment tags (<!-- -->) around the text tells Hugo not to render that content.

```
This is normal content that would be rendered.
 
<!-- All text between these tags is commented.
It would not be rendered as visible in the site. -->
 
This is also normal content and would be rendered. 
```

#### Following SEO Best Practices
Implement various search engine optimization (SEO) practices to enhance article relevance and visibility on popular search engines.

A primary component of SEO practices is content length. Ensuring that paragraphs maintain an average length of 120 words per paragraph increases clarity and readability for viewers.

Another aspect of the SEO process is the improvement of internal linking. Prioritize monitoring and replacing faulty links, as this improves overall user experience and SEO effectiveness.

Introducing optimized keywords is vital to achieving effective SEO. Examples of keyword optimization include:

Including primary keyword(s) near the beginning of article titles.
Integrating keyword(s) organically throughout the content.
Avoiding keyword stuffing to maintain natural flow.
Incorporating keyword(s) in the URL.
Using hyphens to separate words for readability.
Keeping the URL short and relevant to the content.
Placing keyword(s) strategically within the meta description.
Combining the above strategies allows for documentation to reap the benefits of SEO general practices.

