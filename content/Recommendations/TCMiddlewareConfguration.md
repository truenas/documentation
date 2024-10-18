---
title: "TrueCommand Middleware Configuration"
description: "Provides steps for configuration syslog support and expiration."
weight: 10
aliases:
  - /truecommand/recommendations/middleware_config/
geekdocCollapseSection: true
---

## Configuration File

Middleware contains a configuration file updated on runtime. The full configuration file, located at `/etc/config.yaml`, is provided below:

{{<highlight yaml "">}}
logger:
    console:
        enabled: true
    file:
        enabled: true
        path: /data/log
        rotation:
            enabled: true
            max_age: 10
            max_backups: 10
            max_size: 100
    log_level: info
    remote:
      enabled: false
      log_level: error
      host: 127.0.0.1
      port: 6514
      protocol: tcp
      identifier: TrueCommand
sys:
    alert_email_threshold: 30m0s
{{< / highlight >}}

The full file can be copied from the docker container using `docker cp truecommand:/etc/middleware/config.yaml /DATA_DIR/config.yaml` or by pasting the contents above.

Overwrite the TC_CONFIG_PATH environment variable by adding `-e TC_CONFIG_PATH=/data/config.yaml` to container creation or create an additional tied volume with `-v /etc/middleware/config.yaml:/CONFIG_DIR/config.yaml` to preserve changes.

### Decrease Alert Frequency

Change `alert_email_threshold` under `sys` to increase the time required to send the same set of alerts, for instance to `1d` to increase the duration from thirty minutes to one day. 

### Change logging

Console and file logging can be disabled, and the default log level changed. Options for level include trace, debug, info, warning, and error. Rotation and storage options can be changed as well, for instance from /data/log to /etc/log to prevent log preservation across reboots.

#### Enable Syslog

Remote logging capabilities through syslog are available in TrueCommand version 2.3 or later.

To enable, first edit the internal configuration file `/etc/config.yaml`.

{{< highlight yaml "" >}}
remote:
  enabled: false
  log_level: error
  host: 127.0.0.1           # rsyslog server address
  port: 6514                # port based on the protocol
  protocol: tcp             # tcp or udp
  identifier: TrueCommand   # will be added as tag in the logs
{{< / highlight >}}

#### Server Setup

An Rsyslog server can easily be setup with Docker.

##### rsyslog.conf

```
$ModLoad imudp
$UDPServerRun 5514
$ModLoad imtcp
$InputTCPServerRun 6514
$template RemoteStore, "/var/log/remote/%$year%/%$Month%/%$Day%.log"
:source, !isequal, "localhost" -?RemoteStore
:source, isequal, "last" ~
```

##### Dockerfile

{{< highlight yaml "" >}}
FROM ubuntu:latest
RUN apt update && apt install rsyslog -y
ADD rsyslog.conf /etc/.
ENTRYPOINT ["rsyslogd", "-n"]
{{< / highlight >}}

##### Docker Build & Run

```
joe@joe-minty:~$ docker build -t rsyslog-server
joe@joe-minty:~$ docker run --rm -d -p 6514:6514 -p 5514:5514/udp --name rsyslog rsyslog-server
```

Logs are stored under the `/var/log/remote/YEAR/MONTH/DAY.log` path.
