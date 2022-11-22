---
title: "Mini Network Port IDs"
weight: 15
---

{{< toc >}}

The network ports on a TrueNAS Mini are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a TrueNAS Mini with CORE installed identifies its network ports with **ix** followed by a number.
With SCALE, **eno** followed by a number.

This table lists the default identification for each Mini model and any add-on networking cards that have been qualified for use with a Mini.

| Model | CORE/Enterprise Installed | SCALE Installed |
|-------|---------------------------|-----------------|
| E (EOL)     | Port 0: `ix0` | Port 0: `enp3s0f0` |
|       | Port 1: `ix1` | Port 1: `enp3s0f1` |
|       | Port 2: `ix2` | Port 2: `enp5s0f0` |
|       | Port 3: `ix3` | Port 3: `enp5s0f0` |
| X     | Port 0: `ix0` | Port 0: `enp3s0f0` |
|       | Port 1: `ix1` | Port 1: `enp3s0f1` |
|       | Port 2: `ix2` | Port 2: `enp5s0f0` |
|       | Port 3: `ix3` | Port 3: `enp5s0f0` |
| X+    | Port 0: `ix0` | Port 0: `eno1` |
|       | Port 1: `ix1` | Port 1: `eno2` |
| XL+    | Port 0: `ix0` | Port 0: `eno1` |
|       | Port 1: `ix1` | Port 1: `eno2` |
