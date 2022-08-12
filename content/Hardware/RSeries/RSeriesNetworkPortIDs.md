---
title: "R-Series Network Port IDs"
weight: 40
---

{{< toc >}}

The network ports on a TrueNAS R-Series system are identified differently based on what software is installed.

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

By default, a R-Series system with CORE installed identifies its network ports as **ixl0** and **ixl1**.
With SCALE, **eno1** and **eno2**.

This table lists the default identification for R-Series systems and any add-on networking cards that have been qualified for use with an R-Series system.

| Model | CORE/Enterprise Installed | SCALE Installed |
|-------|---------------------------|-----------------|
| R10   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R20   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R20A  | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R20B  | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R40   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R50   | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R50B  | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |
| R50BM | Port 0: `ixl0` | Port 0: `eno1` |
|       | Port 1: `ixl1` | Port 1: `eno2` |

