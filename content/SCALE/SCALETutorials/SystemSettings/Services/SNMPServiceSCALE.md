---
title: "SNMP"
description: "Provides information on configuring SNMP service in TrueNAS SCALE."
weight: 55
alias: 
tags:
 - scalesnmp
 - scaleservices
---

{{< toc >}}

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](https://sourceforge.net/projects/net-snmp/) to provide SNMP.
To configure SNMP, go to **System Settings > Services** page, find **SNMP**, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSNMPSCALE](/images/SCALE/SystemSettings/SCALESNMPOptions.png "SCALE SNMP Service Options")

See [SNMP Service Screen]({{< relref "SNMPServiceScreenSCALE.md" >}}) for setting information.

Port **UDP 161** listens for SNMP requests when starting the SNMP service.

## Management Information Bases (MIBs)

Available Management Information Bases (MIBs) are located in <file>/usr/local/share/snmp/mibs</file>.
This directory contains many files routinely added or removed from the directory.

To check the directory on your system, go to **System Settings > Shell** to access the TrueNAS CLI and enter `storage filesystem listdir path="/usr/local/share/snmp/mibs"`. For more information, see [`storage filesystem listdir`]({{< relref "CLIFilesystem-Storage.md #listdir-command" >}}).

{{< expand "Command Example" "v" >}}

```
storage filesystem listdir path="/usr/local/share/snmp/mibs"
+-----------------+--------------------------------------------+--------------------------------------------+------+-------+-------+-------+-----+-----+---------------+-----------+
| name            | path                                       | realpath                                   | type | size  | mode  | acl   | uid | gid | is_mountpoint | is_ctldir |
+-----------------+--------------------------------------------+--------------------------------------------+------+-------+-------+-------+-----+-----+---------------+-----------+
| TRUENAS-MIB.txt | /usr/local/share/snmp/mibs/TRUENAS-MIB.txt | /usr/local/share/snmp/mibs/TRUENAS-MIB.txt | FILE | 11137 | 33188 | false | 0   | 0   | false         | false     |
+-----------------+--------------------------------------------+--------------------------------------------+------+-------+-------+-------+-----+-----+---------------+-----------+
```
{{< /expand >}}

To read the MIB file, download a copy to a shared dataset. Enter <code>storage filesystem get path="/usr/local/share/snmp/mibs/<em>FILENAME.ext</em>" > <em>PATH</em>/<em>FILENAME.ext</em></code>, where *FILENAME.ext* is the MIB file and *PATH* is the path to a dataset with a share configured (SMB, NFD, or iSCSI). For more information, see [`storage filesystem get`]({{< relref "CLIFilesystem-Storage.md #get-command" >}}).

{{< expand "Command Example" "v" >}}
```
storage filesystem get path="/usr/local/share/snmp/mibs/TRUENAS-MIB.txt" > /mnt/tank/test/TRUENAS-MIB.txt
[0%] ...
[100%] ...
[100%] Job output (0 bytes) saved at '/mnt/tank/test/TRUENAS-MIB.txt'
```
{{< /expand >}}

Log in to the share to access the copy.

{{< taglist tag="scalesnmp" limit="10" >}}
