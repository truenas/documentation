---
title: "Idmap"
weight: 30
---

{{< toc >}}

The *Idmap* directory service allows users to configure and select a backend to map Windows security identifiers (SIDs) to UNIX UIDs and GIDs. Users must enable the *Active Directory* service to configure and use Identity Mapping (Idmap).

![IdmapSCALE](/images/SCALE/IdmapSCALE.png "Idmap Window")

Users can click *Add* in the *Idmap* window to configure backends or click on an already existing Idmap to edit it.

![AddIdmapSCALE](/images/SCALE/AddIdmapSCALE.png "Add Idmap Form")

| Field | Description |
|---------|-------|
| Idmap Backend  | Provides a plugin interface for Winbind to use varying backends to store SID/uid/gid mapping tables. The correct setting depends on the environment in which the NAS is deployed. |
| Name  | Enter the pre-Windows 2000 domain name. |
| DNS Domain Name  | DNS name of the domain. |
| Range Low | Range Low and Range High set the range of UID/GID numbers which this IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, the external credential is ignored. |
| Range High  | Range Low and Range High set the range of UID/GID numbers which this IDMap backend translates. If an external credential like a Windows SID maps to a UID or GID number outside this range, the external credential is ignored. |
| SSSD Compat | Generate idmap low range based on the same algorithm that SSSD uses by default. |
