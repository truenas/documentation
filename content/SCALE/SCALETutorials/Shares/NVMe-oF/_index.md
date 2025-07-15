---
title: "Adding NVMe-oF Subsystems"
description: "Provides information on NVMe-oF subsystems and instruction on creating a subsystem and setting up enterprise configurations of subsystems."
geekdocCollapseSection: true
weight: 90
related: false
aliases:
 -
tags:
- nvme-of
- nvme
- nvme baseNQN
- block shares
- subsystems
- namespaces
- hosts
- ports
- rdma
- ana
- asymmetric namespace access
- remote direct memory access
- cross-port referrals
---

## Overview of NVMe-oF

{{< include file="/static/inclues/NVMe-oF-Overview.md" >}}

## Configuring the NVMe-oF Service

You can access the NVMe-of service screen from the :
* <span class="material-icons">more_vert</span> dropdown menu on the **NVMe-oF Subsystems** widget on the **Shares** screen
* **Global Configuration** button at the top of the **NVMe-oF** screen
* **NVMe-oF** service option on the **System > Services** screen

The **NVMe-oF Global Configuration** shows the base NQN for the service.

{{< expand "What is the base NQN?" "v" >}}
The *base NQN* us the standardized NVMe Qualified Name for the service.
The NQN standard structure follows the format defined in the base specification, and has a maximum length of 223 bytes.
TrueNAS subsystems use the base NQN as the root identifier for the NVMe subsystems in fabric deployments.
Discovery contorllers use the standardized NQN foram to advertize available subsystems, and storage systems use the base NQN to authenticate and authorase host connections.
The base NQN format provides the foundation for all NVMe-oF naming, ensuring interoperability, and preventing naming conflicts acros different vendors and implementations.
{{< /expand >}}

TrueNaS populates the **baseNQN** field with the NVMe identifier.
Accept this value or click in the field to copy/paste a new, properly formatted base NQN identifier.
NQN is used as the prefix on the creation of a subsystem, if a subnqn is not supplied. Modifying this value does not change the subnqn of any existing subsystems.


Select **Generate Cross-port Referrals for Ports on This System**  to allows xport_referral. If ANA is active, referrals are always generated between the peer ports on each TrueNAS controller node.

Click **Save** to save changes and close the screen.

### Adding Remote Direct Memory Access (RDMA)

Go to the [**NVMe-oF Global Configuration**](#configuring-the-nvme-of-service) screen, and select the **Enable Remote Direct Memory Access (RDMA)** option. Click **Save**.

Enabling RDMA allows configuring one or more ports with RDMA selected as the transport when enabled.
Requires an Enterprise license, and RDMA-capable system and network equipment.

Option is inactive on systems without an Enterprise licenses.
If the systen is not equipped with required hardware, shows **Not enabled, because this system does not support RDMA** on the screen.

### Adding Asymmetric Namespace Access (ANA)

Go to the [**NVMe-oF Global Configuration**](#configuring-the-nvme-of-service) screen, and select the **Enable Asymmetric Namespace Access (ANA)** option, and click **Save**.

This allows storage systems to inform hosts about the optimal controller path to access a namespace on Enterprise licensed systems.
It is equivalent to Asymmetric Logical Unit Access (ALUA) in iSCSI.
ANA helps storage arrays communicate to hosts which controller provides the best (lowest latency) path to specific namespaces, enabling intelligent multipathing and improved performance in NVMe-oF environments.

## Adding a Subsystem


### Adding a Namespace


### Adding a Port


### Adding a Host

