---
title: "X-Series Network Port IDs"
description: "X-Series Network port default identifications chart."
weight: 15
---

{{< toc >}}

By default, a TrueNAS X-Series identifies its network ports with **ixl** followed by a number.

This table lists the default identification for X-Series systems and any add-on networking cards that have been qualified for use with an X-Series system.

{{< truetable >}}

**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: igb0         | Port 1: igb1         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 10GbE x4          | Port 0: ixl3         | Port 1: ixl2         | Port 2: ixl1         | Port 3: ixl0         |
| SR 10GbE x4              | Port 0: igb3         | Port 1: igb2         | Port 2: igb1         | Port 3: igb0         |
| SR 10GbE x2              | Port 0: cc0          | Port 1: cc1          | -                    | -                    |
| SR 25GbE x2              | Port 0: cc0          | Port 1: cc1          | -                    | -                    |
| SR 40GbE x2              | Port 0: cxl1         | Port 1: cxl0         | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: Disabled     | Port 1: cxl0123      | -                    | -                    |
{{< /truetable >}}