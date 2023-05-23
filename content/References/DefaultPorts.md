---
title: "Default Ports"
weight: 20
---

TrueNAS provides a range of different storage services and uses TCP/IP for both data and management.
All protocols can be securely encrypted and routed using VPN technologies.
This approach is encouraged when using services directly over the Internet or WAN.

## Inbound Ports

TCP ports and services that listen for external connections:

{{< truetable >}}
|   Inbound Port  | Protocol | Service Name |                Description of Service                | Encrypted | Defaults |
|:---------------:|:--------:|:------------:|:----------------------------------------------------:|:---------:|:--------:|
|      80/443     |    TCP   |  HTTP/HTTPS  |         Web interface <br> REST API <br> WebSockets API        |  Optional |   Open   |
|        22       |    TCP   |   SSH/SFTP   | Secure Shell Secure FTP <br> ZFS Replication <br> Rsync over SSH  |    Yes    |  Closed  |
|     111/2049    |  TCP/UDP |    NFS v3    |                 Network File Service                 |     No    |  Closed  |
| 137/138/139/445 |  TCP/UDP |      SMB     |                 Windows File Service                 |  Optional |  Closed  |
|       548       |    TCP   |      AFP     |                  Apple File Service                  |     No    |  Closed  |
|      20/21      |    TCP   |      FTP     |                File Transfer Protocol                |     No    |  Closed  |
|       443       |    TCP   |    WebDAV    |                 HTTPS access to files                |    Yes    |  Closed  |
|       3260      |    TCP   |     iSCSI    |                 Block storage over IP                |  Optional |  Closed  |
|       9000      |    TCP   |    S3 API    |                Object storage over IP                |    Yes    |  Closed  |
|       837       |    TCP   |     Rsync    |                Remote synchronization                |  Optional |  Closed  |
|   Not defined   |    UDP   |   Wireguard  |               Point-to-point encryption              |    Yes    |  Closed  |
|     161/162     |    TCP   |     SNMP     |               Simple Network Monitoring              |  Optional |  Closed  |
{{< /truetable >}}

## Outbound Ports

Protocols that are “outbound” do not listen for or accept external connections.
These protocols and ports are not a security risk and are usually allowed through firewalls.
These protocols are considered "primary" and might need to be permitted through a firewall:

{{< truetable >}}
| Outbound Port | Protocol | Service Name |          Description of Service         | Encrypted | Defaults |
|:-------------:|:--------:|:------------:|:---------------------------------------:|:---------:|:--------:|
|     80/443    |    TCP   |  HTTP/HTTPS  | Software updates and Pro-active support |  Optional |   Open   |
|     25/465    |    TCP   | Sendmail/TLS |          Send emails for alerts         |     No    | Outgoing |
|      123      |    TCP   |      NTP     |       Network Time synchronization      |    Yes    | Outgoing |
|      514      |    TCP   |    Syslog    |      Logging of alerts and changes      |     No    | Outgoing |
{{< /truetable >}}
