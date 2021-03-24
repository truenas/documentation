[![Actions Status](https://github.com/freenas/documentation/workflows/Publish%20Docs/badge.svg)](https://github.com/freenas/documentation/actions) ![Preview Build](https://github.com/freenas/documentation/workflows/Preview%20Build/badge.svg)

Welcome to the TrueNAS Documentation Repository!
The collected documentation for TrueNAS software, hardware, and TrueCommand is stored here.
These files are used to build the TrueNAS Documentation Hub available at https://www.truenas.com/docs/.

Software documentation is released under the Creative Commons license.

# Technologies

* [CommonMark ](https://spec.commonmark.org/current/) and [HTML](https://www.w3schools.com/html/default.asp) governs the syntax for content files.
* [Hugo](https://gohugo.io/) (extended version) builds the website from the content files and governs the file organization, naming, front matter, and some of the [shortcode](https://gohugo.io/content-management/shortcodes/) syntax. 
* The custom [GeekDocs theme](https://geekdocs.de/) provides a bare-bones theme with templates and shortcodes for styling the website and content.
* Specific .css customizations are added on top of GeekDocs in the /static/custom.css, /data/menu/, and /layouts/ files

# Local Build Process

1. Download Hugo Extended from https://github.com/gohugoio/hugo/releases/ and [install](https://gohugo.io/getting-started/installing/ "Install Hugo").
   See these instructions for manually installing the Hugo extended version in WSL: https://sal.as/post/install-hugo-on-wsl/

2. Download this repository.

3. Open the downloaded repository and run Hugo with `hugo serve`.
   When complete, a local copy of the website is available by entering `localhost:1313` in a browser address bar.
