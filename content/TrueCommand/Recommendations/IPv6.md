---
title: "TrueCommand IPv6 Configuration"
description: "Steps for enabling IPv6 communication between TrueCommand and a TrueNAS."
weight: 10
aliases:
  - /truecommand/recommendations/ipv6/
geekdocCollapseSection: true
---

## Docker Host Setup


In short, a non-default network will need to be created first with IPv6 explicitly enabled:

> `docker network create --ipv6 NAME`
> `docker run --network NAME --detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:latest`

Linux hosts are also required for the Docker daemon to support IPv6.
The default bridge can be configured to support IPv6 if desired with a fixed address for dynamic allocation.

Assuming both the host and NAS are also configured with IPv6 addresses, either through a dynamic protocol like SLAAC or by assigning a static IP,
then the TrueCommand container will have a route to the NAS. Simply input the address, without URL brackets, when adding a new system or editing an existing system.

For more information, see Docker's guide to enable IPv6 support

https://docs.docker.com/config/daemon/ipv6/

And the TrueNAS IPv6 recommendation document

LINK
