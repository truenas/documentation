---
title: "R-Series Network Port IDs"
weight: 40
---

{{< toc >}}

{{< include file="/_includes/NetworkPortIdentifications.md" type="page" >}}

The expandable boxes below contain tables that list the default SCALE identification for R-Series systems and any add-on networking cards qualified by iXsystems for use with R-Series systems.

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| Base-T 10GbE x4          | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| SR 10GbE x4              | Port 0: enp101s0f0   | Port 1: enp101s0f1   | Port 2: enp101s0f2   | Port 3: enp101s0f3   |
| SR 10GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
| SR 100GbE x2             | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |

## R10

{{< expand "R10 (32G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |


**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| Base-T 10GbE x4          | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x4              | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

{{< expand "R10 (64G or 96G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |


**Network B**
| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| Base-T 10GbE x4          | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x4              | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 100GbE x2             | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## R20 and R20A

{{< expand "R20 and R20A (32G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |


**Network B**
| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| Base-T 10GbE x4          | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x4              | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

{{< expand "R20 and R20A (64G, 96G, and 192G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |


**Network B**
| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| Base-T 10GbE x4          | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x4              | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 100GbE x2             | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## R20B

{{< expand "R20B (32G RAM)" "v" >}}
{{< truetable >}}
**Network A**

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
{{< /truetable >}}
{{< /expand >}}

{{< expand "R20B (64G, 96G, and 192G RAM)" "v" >}}
{{< truetable >}}
**Network A**

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
| SR 100GbE x2             | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## R30

{{< expand "R30 (128G, 256G, and 512G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |

**Network B**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| SR 100GbE x2             | Port 0: enp1s0f4     | Port 1: enp1s0f4d1   | -                    | -                    |

**Network C**

| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| SR 100GbE x2             | Port 0: enp69s0f4    | Port 1: enp69s0f4d1  | -                    | -                    |
| SR 25GbE x4              | Port 0: enp69s0f0np0 | Port 1: enp69s0f1np1 | Port 2: enp69s0f2np2 | Port 3: enp69s0f3np3 |
{{< /truetable >}}
{{< /expand >}}

## R40

{{< expand "R40 (64G, 96G, and 192G RAM)" "v" >}}
{{< truetable >}}
**Network A**

| NIC            | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|----------------|----------------------|----------------------|----------------------|----------------------|
| Integrated     | Port 0: eno1         | Port 1: eno2         | -                    | -                    |


**Network B**
| NIC                      | Port 0 ID            | Port 1 ID            | Port 2 ID            | Port 3 ID            |
|--------------------------|----------------------|----------------------|----------------------|----------------------|
| Base-T 1GbE x4           | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| Base-T 10GbE x4          | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x4              | Port 0: enp179s0f0   | Port 1: enp179s0f1   | Port 2: enp179s0f2   | Port 3: enp179s0f3   |
| SR 10GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 25GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 40GbE x2              | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
| SR 100GbE x2             | Port 0: enp179s0f4   | Port 1: enp179s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}

## R50B and R50BM

{{< expand "R50B and R50BM (64G, 96G, and 192G RAM)" "v" >}}
{{< truetable >}}
**Network A**

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
| SR 100GbE x2             | Port 0: enp101s0f4   | Port 1: enp101s0f4d1 | -                    | -                    |
{{< /truetable >}}
{{< /expand >}}
