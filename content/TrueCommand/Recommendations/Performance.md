---
title: "TrueCommand Performance Specification"
description: "Performance data for a self-hosted TrueCommand container."
weight: 10
aliases:
  - /truecommand/recommendations/performance/
geekdocCollapseSection: true
---

### Base Usage

Without any connected systems, TrueCommand uses ~20 MiB memory and 600 KiB disk for the sqlite settings database and slightly more for logs.

{{< truetable >}}
| Resource | Usage |
|-----------|-------------|
|Memory | 20 MiB|
|Storage | < 1 MiB|
|Container | 1.1 GiB|
|Network | Nothing with UI closed, 10 KiB/min serving UI|
{{< /truetable >}}

### System Usage

TrueCommand scales for each system added.
Each connected TrueNAS uses the following resources:

{{< truetable >}}
|Resource | Usage|
|-----------|-------------|
|Memory | ~5-10 MiB|
|Storage | ~100 MiB|
|Disk | 1 MiB reads/hour, 4 MiB writes/hour|
|CPU | ~5s/hour, ~22ms/15s, 0.1 to 1.5%|
|Network | Rx 5-10 KiB/min<br>Tx < 1 KiB/min|
{{< /truetable >}}

Storage usage includes a fixed 80M MiB disk storage for metrics and 2 to 5 MiB for NAS configuration backups.
Backup retention and metric storage duration can be changed, although resizing metrics can result in larger files even after reversion.
Network transmitted bytes are very low for each system, as TrueCommand only sends requests to the NAS.
Typically the ratio of received bytes to transmitted is about 20:1.

## Methodology

cAdvisor, Prometheus, and Grafana were used to generate this data. See the following configuration files to reproduce.

### Prometheus Config

{{< highlight yaml "" >}}
global:
  scrape_interval: 15s
  evaluation_interval: 15s
  # scrape_timeout is set to the global default (10s).

scrape_configs:
  - job_name: docker
    static_configs:
      - targets: ["DOCKERHOST:8090"]
    metrics_path: "/metrics"
    params:
      format: ['prometheus']
{{< /highlight >}}

This enables Prometheus to collect metrics about itself, the docker engine directly, if `metrics-addr` is configured for the daemon, and cAdvisor.
See the compose file below to configure the exposed port and provide a route from the Prometheus container to its sibling cAdvisor container.

### Compose Stack

{{< highlight yaml "" >}}
name: cadvisor_prometheus
services:
  prometheus:
    image: prom/prometheus:v2.53.1
    volumes:
      - type: bind
        source: ./prometheus.yml
        target: /etc/prometheus/prometheus.yml
        read_only: true
    ports:
      - 9090:9090
  grafana:
    image: grafana/grafana-oss:11.0.1
    volumes:
      - type: volume
        source: grafana-storage
        target: /var/lib/grafana
    ports:
      - 3000:3000
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:v0.47.2
    volumes:
      - type: bind
        source: /
        target: /rootfs
        read_only: true
      - type: bind
        source: /var/run
        target: /var/run
        read_only: true
      - type: bind
        source: /var/lib/docker
        target: /var/lib/docker
        read_only: true
      - type: bind
        source: /sys
        target: /sys
        read_only: true
    ports:
      - 8090:8080
    userns_mode: "host"
    security_opt:
      - seccomp=default.json
    command: --docker=unix:///var/run/user/1000/docker.sock --listen_ip=0.0.0.0
volumes:
  grafana-storage:
{{< /highlight >}}

Run `docker compose up` to deploy the three containers.
cAdvisor reads from the cgroup and reports container-level metrics to Prometheus.
Grafana can then be used to display these metrics, as seen in the following dashboard:

{{< trueimage src="/images/TrueCommand/tc-three-system-perf.png" alt="Grafana dashboard with TrueCommand running and connected to three TrueNAS systems" id="Grafana dashboard with TrueCommand running and connected to three TrueNAS systems" >}}
