---
title: "R-Series Network Port IDs"
weight: 40
---

{{< toc >}}

The network ports on a TrueNAS R-Series system are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a TrueNAS R-Series with CORE installed identifies its network ports with **ixl** followed by a number.

SCALE identifies its network ports with **eno** followed by a number.

The tables below list the default identification for R-Series systems and any add-on networking cards that have been qualified for use with an R-Series system.

## R10 / R20 / R20A / R40 / R50

| Model        | TrueNAS CORE   | TrueNAS SCALE          |
|--------------|----------------|------------------------|
| R10          | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| R20          | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| R20A         | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| R40          | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         | 
| R50          | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| T520-SO-CR   | Port 0: `TBD`  | Port 0: `enp179s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp179s0f4d1` |
| T6225-SO-CR  | Port 0: `TBD`  | Port 0: `enp179s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp179s0f4d1` |
| T62100-SO-CR | Port 0: `TBD`  | Port 0: `enp179s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp179s0f4d1` |
| X710-T4      | Port 0: `TBD`  | Port 0: `enp179s0f0`   |
|              | Port 1: `TBD`  | Port 1: `enp179s0f1`   |
|              | Port 2: `TBD`  | Port 2: `enp179s0f2`   |
|              | Port 3: `TBD`  | Port 3: `enp179s0f3`   |
| X710-DA4     | Port 0: `TBD`  | Port 0: `enp179s0f0`   |
|              | Port 1: `TBD`  | Port 1: `enp179s0f1`   |
|              | Port 2: `TBD`  | Port 2: `enp179s0f2`   |
|              | Port 3: `TBD`  | Port 3: `enp179s0f3`   |

## R20B / R50B / R50BM

| Model        | TrueNAS CORE   | TrueNAS SCALE          |
|--------------|----------------|------------------------|
| R20B         | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| R50B         | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| R50BM        | Port 0: `ixl0` | Port 0: `eno1`         |
|              | Port 1: `ixl1` | Port 1: `eno2`         |
| T520-SO-CR   | Port 0: `TBD`  | Port 0: `enp101s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp101s0f4d1` |
| T6225-SO-CR  | Port 0: `TBD`  | Port 0: `enp101s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp101s0f4d1` |
| T62100-SO-CR | Port 0: `TBD`  | Port 0: `enp101s0f4`   |
|              | Port 1: `TBD`  | Port 1: `enp101s0f4d1` |
| X710-T4      | Port 0: `TBD`  | Port 0: `enp101s0f0`   |
|              | Port 1: `TBD`  | Port 1: `enp101s0f1`   |
|              | Port 2: `TBD`  | Port 2: `enp101s0f2`   |
|              | Port 3: `TBD`  | Port 3: `enp101s0f3`   |
| X710-DA4     | Port 0: `TBD`  | Port 0: `enp101s0f0`   |
|              | Port 1: `TBD`  | Port 1: `enp101s0f1`   |
|              | Port 2: `TBD`  | Port 2: `enp101s0f2`   |
|              | Port 3: `TBD`  | Port 3: `enp101s0f3`   |

## R30

| Model           | TrueNAS CORE   | TrueNAS SCALE          |
|-----------------|----------------|------------------------|
| R30             | Port 0: `ixl0` | Port 0: `eno1`         |
|                 | Port 1: `ixl1` | Port 1: `eno2`         |
| T62100-SO-CR    | Port 0: `TBD`  | Port 0: `enp69s0f4`    |
|                 | Port 1: `TBD`  | Port 1: `enp69s0f4d1`  |
| BCM957504-P425G | Port 0: `TBD`  | Port 0: `enp69s0f0np0` |
|                 | Port 1: `TBD`  | Port 1: `enp69s0f1np1` |
|                 | Port 2: `TBD`  | Port 2: `enp69s0f2np2` |
|                 | Port 3: `TBD`  | Port 3: `enp69s0f3np3` |