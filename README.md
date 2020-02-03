# How To: Hugo Local Build

The documentation repository can be downloaded locally. This may be
desired if you prefer using a specific text editor other than the
in-browser Github editor to develop content.

This Docsy Example Project is hosted at [https://example.docsy.dev/](https://example.docsy.dev/).

Part of the theme requires
<code><a href="https://postcss.org/"> PostCSS</a></code>. To install
`PostCSS`, a recent version of
<code><a href="https://nodejs.org/en/"> NodeJS</a></code> must be
installed on your machine so that you can use `npm`. Once installed,
type

```bash
sudo npm install -D --save autoprefixer
sudo npm install -D --save postcss-cli
```
in the CLI.

## Download Hugo

First, download the extended version of Hugo. Follow the
[Hugo install instructions](https://gohugo.io/getting-started/installing/ "Install Hugo")
for the appropriate operating system.

## Clone Documentation Repo

The next step is to clone this repo. To clone the repo in your current
directory, type

```bash
git clone --recurse-submodules https://github.com/freenas/documentation.git
```

in the CLI.

## Build Locally

Finally, the documentation website is ready to be built locally. To
build the website locally, type

```bash
hugo serve
```

in the CLI.

After building the website with `hugo serve`, access it by entering
`localhost:1313` in a browser address bar.
