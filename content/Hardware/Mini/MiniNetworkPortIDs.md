---
title: "Mini Network Port IDs"
weight: 15
---

{{< toc >}}

The network ports on a TrueNAS Mini are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a TrueNAS Mini with CORE installed identifies its network ports with **ixl** followed by a number.

SCALE identifies its network ports with **eno** followed by a number.

The tables below list the default identification for Mini systems and any add-on networking cards that have been qualified for use with a Mini system.

## E / E+ / X

| Model   | TrueNAS CORE  | TrueNAS SCALE      |
|---------|---------------|--------------------|
| E (EOL) | Port 0: `ix0` | Port 0: `enp3s0f0` |
|         | Port 1: `ix1` | Port 1: `enp3s0f1` |
|         | Port 2: `ix2` | Port 2: `enp5s0f0` |
|         | Port 3: `ix3` | Port 3: `enp5s0f0` |
| E+      | Port 0: `ix0` | Port 0: `enp4s0f0` |
|         | Port 1: `ix1` | Port 1: `enp4s0f1` |
|         | Port 2: `ix2` | Port 2: `enp6s0f0` |
|         | Port 3: `ix3` | Port 3: `enp6s0f0` |
| X       | Port 0: `ix0` | Port 0: `enp3s0f0` |
|         | Port 1: `ix1` | Port 1: `enp3s0f1` |
|         | Port 2: `ix2` | Port 2: `enp5s0f0` |
|         | Port 3: `ix3` | Port 3: `enp5s0f0` |

## X+ / XL+ / Mini R

| Model      | TrueNAS CORE  | TrueNAS SCALE        |
|------------|---------------|----------------------|
| X+         | Port 0: `ix0` | Port 0: `eno1`       |
|            | Port 1: `ix1` | Port 1: `eno2`       |
| XL+        | Port 0: `ix0` | Port 0: `eno1`       |
|            | Port 1: `ix1` | Port 1: `eno2`       |
| Mini R     | Port 0: `ix0` | Port 0: `eno1`       |
|            | Port 1: `ix1` | Port 1: `eno2`       |
| T520-SO-CR | Port 0: `TBD` | Port 0: `enp2s0f4`   |
|            | Port 1: `TBD` | Port 1: `enp2s0f4d1` |