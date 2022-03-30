---
title: "M-Series Network Port IDs"
weight: 15
---

{{< toc >}}

The network ports on a TrueNAS M-Series are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a TrueNAS M-Series with CORE installed identifies its network ports with **ixl** followed by a number.
With SCALE, **eno** followed by a number.

This table lists the default identification for each M-Series model and any add-on networking cards that have been qualified for use with an M-Series system.
Some port identifiers are still being determined.

| Model | CORE/Enterprise Installed | SCALE Installed |
|-------|---------------------------|-----------------|
| M30   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| M40   | Port 0: `ixl0` | Port 0: `en01` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| M50   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| M60   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| QLE2692 | Port 0: `isp1` | Port 0: `TBD` |
|         | Port 1: `isp0` | Port 1: `TBD` |
| QLE2742 | Port 0: `isp1` | Port 0: `TBD` |
|         | Port 1: `isp0` | Port 1: `TBD` |
| QLE2692 (2nd addition) | Port 0: `isp3` | Port 0: `TBD` |
|                        | Port 1: `isp2` | Port 1: `TBD` |
| QLE2742 (2nd addition) | Port 0: `isp3` | Port 0: `TBD` |
|                        | Port 1: `isp2` | Port 1: `TBD` |
| QLE2694L | Port 0: `isp3` | Port 0: `TBD` |
|          | Port 1: `isp2` | Port 1: `TBD` |
|          | Port 2: `isp1` | Port 2: `TBD` |
|          | Port 3: `isp0` | Port 3: `TBD` |
| T580-LP-CR (4x10G mode) | Port 0: `cxl0123` | Port 0: `TBD` |
|                         | Port 1: `DISABLED` | Port 1: `TBD` |
| T580-LP-CR (4x10G mode) (2nd addition) | Port 0: `cxl4567` | Port 0: `TBD` |
|                                        | Port 1: `DISABLED` | Port 1: `TBD` |
| T580-LP-CR (40G mode) | Port 0: `cxl0` | Port 0: `enp179s0f4` |
|                       | Port 1: `cxl1` | Port 1: `enp179s0fd1` |
| T6225-SO-CR | Port 0: `cc1` | Port 0: `enp1s0f4d1` |
|             | Port 1: `cc0` | Port 1: `enp1s0f4` |
| T6225-SO-CR (2nd addition) | Port 0: `cc3` | Port 0: `TBD` |
|                            | Port 1: `cc2` | Port 1: `TBD` |
| T62100-LP-CR | Port 0: `cc1` | Port 0: `enp134s0f4` |
|              | Port 1: `cc0` | Port 1: `enp134s0f4d1` |
| T62100-LP-CR (2nd addition) | Port 0: `cc3` | Port 0: `TBD` |
|                             | Port 1: `cc2` | Port 1: `TBD` |
| X710-T4 | Port 0: `ixl2` | Port 0: `TBD` |
|         | Port 1: `ixl3` | Port 1: `TBD` |
|         | Port 2: `ixl4` | Port 2: `TBD` |
|         | Port 3: `ixl5` | Port 3: `TBD` |
| X710-T4 (2nd addition) | Port 0: `ixl6` | Port 0: `TBD` |
|                        | Port 1: `ixl7` | Port 1: `TBD` |
|                        | Port 2: `ixl8` | Port 2: `TBD` |
|                        | Port 3: `ixl9` | Port 3: `TBD` |
