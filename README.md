# TrueNAS Documentation Hub

Central landing page for all TrueNAS documentation sites.

## Overview

This site provides a unified entry point for TrueNAS documentation, with a clean card-based interface linking to:
- TrueNAS Community Edition & Enterprise documentation
- TrueNAS Connect documentation
- Hardware/Products documentation
- API documentation
- Apps Marketplace
- Security reports
- Software status, solutions, contributing guidelines, and references

## Technology Stack

- **Hugo Extended** v0.157.0
- **Docsy Theme** v0.13.0
- **TrueNAS Docs-Shared Module** (TrueShared2026 branch)
- **Bootstrap** v5.3.8
- **Pagefind** for search indexing

## Prerequisites

- Hugo Extended v0.157.0 (see install instructions below)
- Node.js v20.x or higher
- npm or yarn

## Install Hugo

**Windows (Chocolatey — recommended, run PowerShell as Administrator):**

    choco install hugo-extended --version=0.157.0

**Windows (winget):**

    winget install Hugo.Hugo.Extended --version 0.157.0

**WSL/Linux:** Download `hugo_extended_0.157.0_linux-amd64.tar.gz` from
https://github.com/gohugoio/hugo/releases/tag/v0.157.0 and install to your PATH.

> Hugo Extended (not standard Hugo) is required. This site has been tested against v0.157.0.
> Later versions may work but have not been officially tested.
>
> This site uses Hugo modules (Docsy theme). On WSL/Linux with a direct binary install,
> Go must be available in your PATH for Hugo to resolve modules on first use.

## Local Development

### Initial Setup

```bash
# Install Node.js dependencies
npm install

# Start development server (Hugo auto-fetches the go.mod-pinned modules).
# Do NOT run `hugo mod get` / `hugo mod get -u` — both upgrade modules past the
# go.mod pins and can pull a breaking upstream theme release (e.g. docsy v0.16.0).
hugo serve
```

The site will be available at `http://localhost:1313`

### Building for Production

```bash
# Build site
npm run build

# Or manually:
hugo --gc --minify --cleanDestinationDir

# Generate search index
npx pagefind --site public
```

## Required Assets

### Card Background Images

Add these images to `/static/images/`:

- `card-community-edition.png` - TrueNAS Community Edition card background
- `card-enterprise.png` - TrueNAS Enterprise card background
- `card-connect.png` - TrueNAS Connect card background
- `card-hardware.png` - Products/Hardware card background
- `card-api.png` - API Documentation card background
- `card-apps.png` - Apps Marketplace card background
- `card-security.png` - Security Reports card background

### Brand Assets

- `tn-openstorage-logo.png` - Generic TrueNAS logo
- `docs-hub-og-image.png` - Social sharing image (1200x630px recommended)

### Favicons

Add to `/static/favicons/`:
- `favicon.svg`
- `favicon.ico`
- `favicon-96x96.png`
- `apple-touch-icon.png`
- `site.webmanifest`

## Project Structure

```
docs/
├── content/
│   └── en/
│       └── _index.md          # Homepage with card grid
├── static/
│   ├── images/                # Card backgrounds and logos
│   └── favicons/              # Site icons
├── layouts/                   # (Empty - all from modules)
├── data/                      # Site data files
├── hugo.toml                  # Hugo configuration
├── go.mod                     # Module dependencies
└── package.json               # Node.js dependencies
```

## Editing Content

The main content is in `/content/en/_index.md`. To add/remove/edit cards:

### Software & Products Cards (doc-card shortcode)

```markdown
{{< doc-card
  link="https://example.com/"
  title="Card Title"
  image="/images/card-background.png"
  descr="Card description"
>}}
```

### Documentation Resources Cards (blocks/feature shortcode)

```markdown
{{% blocks/feature icon="material:icon-name" title="Title" url="https://example.com/" %}}
Description text here
{{% /blocks/feature %}}
```

## Deployment

This site is deployed via Jenkins pipeline to `https://docs.truenas.com/`

Build steps:
1. `npm install`
2. `hugo --gc --minify --cleanDestinationDir`
3. `npx pagefind --site public`
4. Deploy `public/` directory to web server

## Module Development

This site uses the TrueShared2026 theme from the `docs-shared` repository.

For local theme development:
```bash
# Ensure go.mod has local replace directive:
replace github.com/truenas/docs-shared => ../docs-shared

# Make changes in ../docs-shared
# Test with: hugo serve
```

## License

GPL-3.0

## Support

For issues or questions:
- Review the implementation plan
- Check the docs-shared README
- File issues in the truenas/docs repository
