---
title: "TrueCommand Syslog Configuration"
redirect: "https://www.truenas.com/docs/truecommand/3.0/recommendations/tcmiddlewareconfguration/"
description: "Steps for sending TrueCommand logs via the syslog protocol."
weight: 10
aliases:
geekdocCollapseSection: true
---

Remote logging capabilities through syslog are available in TrueCommand version 2.3 or later.

To enable, first edit the internal configuration file `/etc/config.yaml`.
Overwrite the TC_CONFIG_PATH or create an additional tied volume for this file to preserve changes.

{{< highlight yaml "" >}}
logger:
  remote_log:
    enabled: false
    log_level: error
    host: 127.0.0.1           # rsyslog server address
    port: 6514                # port based on the protocol
    protocol: tcp             # tcp or udp
    identifier: TrueCommand   # will be added as tag in the logs
{{< / highlight >}}

Restart the container.

## Server Setup

An Rsyslog server can easily be setup with Docker.

### rsyslog.conf

```
$ModLoad imudp
$UDPServerRun 5514
$ModLoad imtcp
$InputTCPServerRun 6514
$template RemoteStore, "/var/log/remote/%$year%/%$Month%/%$Day%.log"
:source, !isequal, "localhost" -?RemoteStore
:source, isequal, "last" ~
```

### Dockerfile

{{< highlight yaml "" >}}
FROM ubuntu:latest
RUN apt update && apt install rsyslog -y
ADD rsyslog.conf /etc/.
ENTRYPOINT ["rsyslogd", "-n"]
{{< / highlight >}}

### Docker Build & Run

```
joe@joe-minty:~$ docker build -t rsyslog-server
joe@joe-minty:~$ docker run --rm -d -p 6514:6514 -p 5514:5514/udp --name rsyslog rsyslog-server
```

Logs are stored under the `/var/log/remote/YEAR/MONTH/DAY.log` path.
