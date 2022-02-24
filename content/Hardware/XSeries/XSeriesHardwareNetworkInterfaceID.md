---
title: "X-Series Hardware Network Interface ID"
weight: 15
---

{{< toc >}}

See [Component Naming]({{< relref "SCALE/GettingStarted/ComponentNaming.md" >}}) for information about the differences between Core and Scale interface naming.

## Core/Enterprise ##
| Onboard Ports | Port 0 | Port 1 | Port 2 | Port 3 |
|--------|--------|--------|--------|--------|								
| TrueNAS X10/X20 - onboard |	igbo0 |	igb1 |	NA	| NA |

| Add-on Cards | Port 0 | Port 1 | Port 2 | Port 3 |
|--------|--------|--------|--------|--------|								
| X540-T2 |	ix0 |	ix1 |	NA	| NA |
| T520-SO-CR | cxl0 | cxl1 | NA | NA |
| T580-SO-CR (4x10G mode) | DISABLED | cxl0123 | NA | NA |
| T580-SO-CR (2x40G mode) | cxl1 | cxl0 | | |
| X710-T4 | ixl3 | ixl2 | ixl1 | ixl0 |
| i350-T4 | igb3 | igb2 | igb1 | igb0 |
| QLE2562 | isp0 | isp1 | NA | NA |
| T6225-SO-CR | cc0 | cc1 | NA | NA |

## SCALE ##
| Onboard Ports | Port 0 | Port 1 | Port 2 | Port 3 |
|--------|--------|--------|--------|--------|								
| TrueNAS X10/X20 - onboard |	enp5s0 | enp5s1 |	NA	| NA |

| Add-on Cards | Port 0 | Port 1 | Port 2 | Port 3 |
|--------|--------|--------|--------|--------|								
| X540-T2 | | |	NA	| NA |
| T520-SO-CR | | | NA | NA |
| T580-SO-CR (4x10G mode) | | | NA | NA |
| T580-SO-CR (2x40G mode) | | | | |
| X710-T4 | | | | |
| i350-T4 | | | | |
| QLE2562 | | | NA | NA |
| T6225-SO-CR | | | NA | NA |
