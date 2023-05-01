---
title: "X-Series Network Port IDs"
weight: 15
---

{{< toc >}}

The network ports on a TrueNAS X-Series system are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a TrueNAS X-Series with CORE installed identifies its network ports with **ixl** followed by a number.

SCALE identifies its network ports with **eno** followed by a number.

This table lists the default identification for X-Series systems and any add-on networking cards that have been qualified for use with an X-Series system.
Some port identifiers are still being determined.

{{< truetable >}}
| Model                   | TrueNAS CORE       | TrueNAS SCALE      |
|-------------------------|--------------------|--------------------|
| X10                     | Port 0: `igb0`     | Port 0: `enp5s0`   |
|                         | Port 1: `igb1`     | Port 1: `enp5s1`   |
| X20                     | Port 0: `igb0`     | Port 0: `enp5s0`   |
|                         | Port 1: `igb1`     | Port 1: `enp5s1`   |
| X540-T2                 | Port 0: `ix0`      | Port 0: `TBD`      |
|                         | Port 1: `ix1`      | Port 1: `TBD`      |
| T520-SO-CR              | Port 0: `cxl0`     | Port 0: `TBD`      |
|                         | Port 1: `cxl1`     | Port 1: `TBD`      |
| T580-SO-CR (4x10G mode) | Port 0: `DISABLED` | Port 0: `DISABLED` |
|                         | Port 1: `cxl0123`  | Port 1: `TBD`      |
| T580-SO-CR (2x40G mode) | Port 0: `cxl1`     | Port 0: `TBD`      |
|                         | Port 1: `cxl0`     | Port 1: `TBD`      |
| X710-T4                 | Port 0: `ixl3`     | Port 0: `TBD`      |
|                         | Port 1: `ixl2`     | Port 1: `TBD`      |
|                         | Port 2: `ixl1`     | Port 2: `TBD`      |
|                         | Port 3: `ixl0`     | Port 3: `TBD`      |
| i350-T4                 | Port 0: `igb3`     | Port 0: `TBD`      |
|                         | Port 1: `igb2`     | Port 1: `TBD`      |
|                         | Port 2: `igb1`     | Port 2: `TBD`      |
|                         | Port 3: `igb0`     | Port 3: `TBD`      |
| QLE2562                 | Port 0: `isp0`     | Port 0: `TBD`      |
|                         | Port 1: `isp1`     | Port 1: `TBD`      |
| T6225-SO-CR             | Port 0: `cc0`      | Port 0: `TBD`      |
|                         | Port 1: `cc1`      | Port 1: `TBD`      |
{{< /truetable >}}
