---
title: "M-Series Network Port IDs"
description: "Default TrueNAS SCALE identifications list of TrueNAS M-Series systems network ports."
weight: 15
---

{{< toc >}}

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

The expandable boxes below contain tables that list the default SCALE identification for M-Series systems and any add-on networking cards qualified by iXsystems for use with M-Series systems.

## M30

{{< expand "M30 (64G RAM)" "v" >}}
![M30NetworkPorts](/images/Hardware/Networking/M30NetworkPorts.png "M30 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| Base-T 10GbE x4          | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| Base-T 10GbE x2          | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 10GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | Port 1: enp101s0f4d2 | Port 1: enp101s0f4d3 |


**Network C**

| NIC             | Port 0 ID           | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|-----------------|---------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4  | Port 0: enp1s0f0    | Port 1: enp1s0f1     | Port 2: enp1s0f2     | Port 3: enp1s0f3     |
| SR 10Gbe x2     | Port 0: enp1s0f4    | Port 1: enp1s0f4d1   | -                    | -                    |
| Base-T 10Gbe x2 | Port 0: enp1s0f4    | Port 1: enp1s0f4d1   | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## M40

{{< expand "M40 (128G RAM)" "v" >}}
![M40NetworkPorts(128G)](/images/Hardware/Networking/M40NetworkPorts(128G).png "M40 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| Base-T 10GbE x4          | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| SR 10GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | Port 1: enp101s0f4d2 | Port 1: enp101s0f4d3 |
| SR 100GbE x2             | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |

**Network C**

| NIC             | Port 0 ID           | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|-----------------|---------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4  | Port 0: enp1s0f0    | Port 1: enp1s0f1     | Port 2: enp1s0f2     | Port 3: enp1s0f3     |
| SR 10Gbe x2     | Port 0: enp1s0f4    | Port 1: enp1s0f4d1   | -                    | -                    |
| Base-T 10Gbe x2 | Port 0: enp1s0f4    | Port 1: enp1s0f4d1   | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

{{< expand "M40 (192G RAM w/NVMe)" "v" >}}
![M40NetworkPorts(192G)](/images/Hardware/Networking/M40NetworkPorts(192G).png "M40 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| Base-T 10GbE x4          | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| SR 10GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | Port 1: enp101s0f4d2 | Port 1: enp101s0f4d3 |
| SR 100GbE x2             | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## M50

{{< expand "M50 (256G and 384G RAM)" "v" >}}
![M50NetworkPorts](/images/Hardware/Networking/M50NetworkPorts.png "M50 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 10GbE x4          | Port 0: enp175s0f0   | Port 1: enp175s0f1   | Port 2: enp175s0f2   | Port 3: enp175s0f3   |
| SR 10GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | Port 1: enp175s0f4d2 | Port 1: enp175s0f4d3 |
| SR 100GbE x2             | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |

**Network C**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 10GbE x4          | Port 0: enp24s0f0    | Port 1: enp24s0f1    | Port 2: enp24s0f2    | Port 3: enp24s0f3    |
| SR 10GbE x2              | Port 0: enp24s0f4    | Port 1: enp24s0f4d1  | -                    | -                    |
| SR 25GbE x2              | Port 0: enp24s0f4    | Port 1: enp24s0f4d1  | -                    | -                    |
| SR 40GbE x2              | Port 0: enp24s0f4    | Port 1: enp24s0f4d1  | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp24s0f4    | Port 1: enp24s0f4d1  | Port 1: enp24s0f4d2  | Port 1: enp24s0f4d3  |
{{< /truetable >}}
{{< /expand >}}

## M60

{{< expand "M60 (768G RAM with up to 8 Expansion Shelves)" "v" >}}
![M60NetworkPorts(x8ES)](/images/Hardware/Networking/M60NetworkPorts(x8ES).png "M60 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| SR 40GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | Port 1: enp175s0f4d2 | Port 1: enp175s0f4d3 |
| SR 10GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 100GbE x2             | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| Base-T 10GbE x4          | Port 0: enp175s0f0   | Port 1: enp175s0f1   | Port 2: enp175s0f2   | Port 3: enp175s0f3   |

**Network C**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 10GbE x4          | Port 0: enp24s0f0   | Port 1: enp24s0f1     | Port 2: enp24s0f2    | Port 3: enp24s0f3    |
| SR 10GbE x2              | Port 0: enp24s0f4   | Port 1: enp24s0f4d1   | -                    | -                    |
| SR 25GbE x2              | Port 0: enp24s0f4   | Port 1: enp24s0f4d1   | -                    | -                    |
| SR 40GbE x2              | Port 0: enp24s0f4   | Port 1: enp24s0f4d1   | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp24s0f4   | Port 1: enp24s0f4d1   | Port 1: enp24s0f4d2  | Port 1: enp24s0f4d3  |
| SR 100GbE x2             | Port 0: enp24s0f4   | Port 1: enp24s0f4d1   | -                    | -                    |

{{< /truetable >}}
{{< /expand >}}

{{< expand "M60 (768G RAM with up to 12 Expansion Shelves)" "v" >}}
![M60NetworkPorts(x12ES)](/images/Hardware/Networking/M60NetworkPorts(x12ES).png "M60 Network Ports")

**Network A**

{{< truetable >}}
| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 10GbE x4          | Port 0: enp175s0f0   | Port 1: enp175s0f1   | Port 2: enp175s0f2   | Port 3: enp175s0f3   |
| SR 10GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
| SR 40GbE (4x10 mode)     | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | Port 1: enp175s0f4d2 | Port 1: enp175s0f4d3 |
| SR 100GbE x2             | Port 0: enp175s0f4   | Port 1: enp175s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}
