---
title: "M-Series NetworK Interface ID"
weight: 15
---
{{< toc >}}

See [Component Naming]({{< relref "SCALE/GettingStarted/ComponentNaming.md" >}}) for information about the differences between Core and Scale interface naming.

## Core/Enterprise ##

| Onboard Ports| Port 0 | Port 1 | Port 2 | Port 3 |
| -------- | -------- | -------- | -------- | -------- |
| TrueNAS M30/M40 - onboard | ixl0 | ixl1 | NA | NA |
| TrueNAS M50/M60 - onboard | ixl0 | ixl1 | NA | NA |

| Add-on Cards | Port 0 | Port 1 | Port 2 | Port 3 |
| -------- | -------- | -------- | -------- | -------- |
| QLE2692 and QLE2742 | isp1 | isp0 | NA | NA |
| QLE2692 and QLE2742 - 2nd card | isp3 | isp2 | NA | NA 
| QLE2694L | isp3 | isp2 | isp1 | isp0 |
| T580-LP-CR (4x10G mode) | cxl0123 | DISABLED | NA | NA |
| T580-LP-CR (4x10G mode) - 2nd card | cxl4567 | DISABLED | NA | NA |
| T580-LP-CR (40G mode) | cxl0 | cxl1 | NA | NA |
| T6225-SO-CR | cc1 | cc0 | NA | NA |
| T6225-SO-CR - 2nd card | cc3 | cc2 | NA | NA |
| T62100-LP-CR | cc1 | cc0 | NA | NA |
| T62100-LP-CR - 2nd card | cc3 | cc2 | NA | NA |
| X710-T4 | ixl2 | ixl3 | ixl4 | ixl5 |
| X710-T4 - 2nd card | ixl6 | ixl7 | ixl8 | ixl9 |


## SCALE ##

| Onboard Ports | Port 0 | Port 1 | Port 2 | Port 3 |
| -------- | -------- | -------- | -------- | -------- |
| TrueNAS M30/M40 - onboard | eno1 | eno2 | NA | NA |
| TrueNAS M50/M60 - onboard | eno1 | eno2 | NA | NA |

| Add-on Cards | Port 0 | Port 1 | Port 2 | Port 3 |
| -------- | -------- | -------- | -------- | -------- |
| QLE2692 and QLE2742 | | | NA | NA |
| QLE2692 and QLE2742 - 2nd card | | | NA | NA |
| QLE2694L | | | | |
| T580-LP-CR (4x10G mode) | | | NA | NA |
| T580-LP-CR (4x10G mode) - 2nd card | | | NA | NA |
| T580-LP-CR (40G mode) | enp179s0f4 | enp179s0fd1 | NA | NA |
| T6225-SO-CR | enp1s0f4d1 | enp1s0f4 | NA | NA |
| T6225-SO-CR - 2nd card | | | NA | NA |
| T62100-LP-CR | enp134s0f4 | enp134s0f4d1 | NA | NA |
| T62100-LP-CR - 2nd card | | | NA | NA |
| X710-T4 | | | | |
| X710-T4 - 2nd card | | | | |

