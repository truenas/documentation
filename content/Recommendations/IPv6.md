---
title: "TrueCommand IPv6 Configuration"
description: "Steps for enabling IPv6 communication between TrueCommand and a TrueNAS."
---

## Docker Host Setup

First, create a non-default network with IPv6 explicitly enabled:

```
joe@joe-minty:~$ docker network create --ipv6 NAME
joe@joe-minty:~$ docker run --network NAME --detach -v "/DockerDir:/data" -p 9004:80 -p 9005:443 ghcr.io/ixsystems/truecommand:latest
```

Linux hosts are also required for the Docker daemon to support IPv6.
The default bridge can be configured to support IPv6 if desired with a fixed address for dynamic allocation.

Configure both the host and NAS with IPv6 addresses, either through a dynamic protocol like SLAAC or by assigning a static IP, so the TrueCommand container has a route to the NAS.
Input the address, without URL brackets, when adding a new system or editing an existing system.

For more information, see <a href="https://docs.docker.com/config/daemon/ipv6/">Docker's guide to enable IPv6 support</a> and the [TrueNAS IPv6 setup document](https://www.truenas.com/docs/scale/scaletutorials/network/configureipv6/).
