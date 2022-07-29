---
title: "SCALE 22.12 Bluefin"
weight: 1000
---

{{< toc >}}

While the current version of TrueNAS SCALE receives maintenance updates, the next major version is in active development.
This article collects various details about this upcoming major version: early release notes, developer notes, and how to help test the in-development version.
This is a work in progress and details are added as development progresses on this SCALE release.

{{< hint warning >}}
Early releases are intended for testing and early feedback purposes only.
Do not use early release software for critical tasks.
{{< /hint >}}

Want to get involved in helping to collaborate on TrueNAS SCALE? Join our [Official Discord Server.](https://discord.com/invite/Q3St5fPETd)

## System Requirements

* Any x86_64 compatible (Intel or AMD) processor
* 8GB of RAM (More is better)
* 20GB Boot Device

## Nightly Status

Nightly images for TrueNAS SCALE are built every 24 hours, at around 2AM Eastern (EDT/EST) time. Online updates are created every 2 hours and are available in the SCALE UI online updating page.

### Angelfish Stable Nightly Images (Stable Branch, more suitable for testing)

[ISO Installation Files](https://download.truenas.com/truenas-scale-angelfish-nightly/ "SCALE Angelfish Nightly .iso files")

[Manual Update File](https://update.freenas.org/scale/TrueNAS-SCALE-Angelfish-Nightlies/TrueNAS-SCALE-Angelfish-Nightly.update)

### Bluefin Unstable Nightly Images (Unstable Branch, developers and brave testers)

{{< hint info >}}
Bluefin nightly builds are automatically published when the nightly image passes API testing. Bluefin is currently under heavy development and will have new nightly images publishing as soon as possible.
{{< /hint >}}

[ISO Installation Files](https://download.truenas.com/truenas-scale-bluefin-nightly/ "SCALE Angelfish Nightly .iso files")

[Manual Update File](https://update.freenas.org/scale/TrueNAS-SCALE-Bluefin-Nightlies/TrueNAS-SCALE-Bluefin-Nightly.update)
