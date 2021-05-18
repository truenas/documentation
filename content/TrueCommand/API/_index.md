---
title: "TrueCommand API"
weight: "10"
geekdocCollapseSection: true
---

## Quick Start Information

### First-Time UI Login
For a new installation of TrueCommand, login with the following credentials to create the initial administrator account:

|  |  |  |
|:---:|:---:|:---:|
| Username | admin | |
| Password | admin | |
| Notes | This login is valid **only** when there are no existing user accounts. | |

### SSH System Access
The `sshd` service must be running in TrueCommand to enable SSH access to the system.

* Logging in as the `root` user over SSH is disabled by default. Logging in with `root` can be enabled by modifying */etc/ssh/sshd_config* and restarting the `sshd` service, or using the terminal configuration utility to modify the `sshd` service.

## Connection Summary
|  | Websocket | HTTP |
|:---:|:---:|:---:|
| Port number| 5182 (ws) 5184 (wss) | 5183 (http) 5185 (https) |
| URL redirect | /websocket | /api |
|Format | JSON only | HTTP+JSON |
|Event Support| Yes | No |

## Documentation and Reference Materials
### [NAS Connection FAQ](faq/)
