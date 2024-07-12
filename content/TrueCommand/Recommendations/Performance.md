---
title: "TrueCommand Performance Specification"
description: "Performance data for a self-hosted TrueCommand container."
weight: 10
aliases:
  - /truecommand/recommendations/performance/
geekdocCollapseSection: true
---

### Base Usage

Resource | Usage
---
Memory | 20 MiB
Storage | < 1 MiB
Container | 1.1 GiB
Network | Nothing with UI closed, 10 KiB/min serving UI

TrueCommand scales for each system added. Without any systems, TrueCommand uses ~20 MiB memory and 600 KiB disk for the sqlite settings database and slightly more for logs. Each TrueNAS connected uses the following resources:

### System Usage

Resource | Usage
---
Memory | ~5-10 MiB
Storage | ~100 MiB
Disk | 1 MiB reads/hour, 4 MiB writes/hour
CPU | ~5s/hour, ~22ms/15s, 0.1 to 1.5%
Network | Rx 5-10 KiB/min
          Tx < 1 KiB/min

Storage usage includes a fixed 80M MiB disk storage for metrics and 2 to 5 MiB for NAS configuration backups. Backup retention and metric storage duration can be changed, although resizing metrics can result in larger files even after reversion. Network transmitted bytes are very low for each system, as TrueCommand only sends requests to the NAS. Typically the ratio of received bytes to transmitted is about 20:1.

## Methodology

CAdvisor, Prometheus, and Grafana were used to generate this data. See the following configuration files to reproduce:

Compose Stack

https://gitea.ixsystems.com/iX-DevOps-Tools/truecommand-scripts/src/branch/master/prom/prometheus-tcperf.yml

Prometheus Config

https://gitea.ixsystems.com/iX-DevOps-Tools/truecommand-scripts/src/branch/master/prom/prometheus-tcperf.yml

Grafana Dashboard

Insert JSON
