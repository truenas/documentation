---
title: "LDAP Servers"
weight: 40
---

{{< toc >}}

Users can configure TrueCommand to use LDAP servers for security and authentication management among connected TruNAS systems.

## Configure LDAP Server

Click the gear icon in the upper toolbar and select **Administration**. Scroll down to **LDAP Servers** and click **ADD**.

![AddLDAPServer](/images/TrueCommand/AddLDAPServer.png "Add LDAP Servers")

| Field | Description |
|---------|-------------|
| **Hostname** | Hostname of LDAP/AD server, with optional port. e.g. example.com:636. |
| **Domain** | LDAP base domain. e.g. dc=example,dc=com. |
| **Group Domain** | Optional for admins that want to avoid issues with unwanted groups by forcing group searches to start at a deeper domain . |
| **User ID Field** | Class mapped to login username. Default is uid. |
| **Group ID Field** | Class for finding groups associated with user. Default is cn. |
| **BIND User Domain** | Full user domain for binding before finding user FQID. Optional. |
| **BIND Password** | If bind user is set, use this password when performing simple bind on user search. |