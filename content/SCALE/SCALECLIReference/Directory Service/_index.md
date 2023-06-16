---
title: "Directory Service"
geekdocCollapseSection: true
description: "Introduces the TrueNAS CLI directory_service namespace, used to access child namespaces and commands including activedirectory, idmap, kerberos, and ldap." 
weight: 20
draft: false
---


{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

{{< include file="/_includes/SCALECLIIntroduction.md" type="page" >}}

## Directory_Service Commands

The **directory_service** namespace has two commands and four child namespaces and is based on functions found in the SCALE API and web UI. 
It provides access to directory service methods. 
The four child namespaces have their own commands.

You can enter commands from the main CLI prompt or from the **directory_service** namespace prompt.

### Cache_Refresh Command

The `cache_refresh` command refreshes the directory services cache for users and groups that is used as a backing the user.query and group.query methods. 
The first cache file in an Active Directory domain might take a significant amount of time to complete, so it is performed within a job. 
Refresh the cache after adding new users or groups to a remote directory server to have the users or groups appear in the results.
A cache refresh is not required to use newly-added users and groups for permissions and ACL related methods. 
It also does not resolve issues with users that cannot authenticate to shares.

{{< expand "Verify Cache_Refresh" "v" >}}
The `cache_refresh` command displays the status of the cache-refresh process in percentage complete.

From the CLI prompt, enter:

`directory_service cache_refresh`

From the **directory_service** prompt, enter:

`cache_refresh`

{{< expand "Command Example" "v" >}}
```
directory_service cache_refresh
[0%] ...
[100%] ...
```
{{< /expand >}}
{{< /expand >}}

### Get_State Command

The `get_state` command returns the current status of directory service. 

Possible states:
{{< truetable >}}
| Property | Description |
|----------|-------------|
| `DISABLED` | Indicates directory service is disabled. |
| `FAULTED` | Indicates directory service is enabled, but not HEALTHY. Review logs and generated alert messages to debug the issue causing the faulted service state. |
| `LEAVING` | Indicates the directory service is in the process of stopping. |
| `JOINING` | Indicates the directory service is in the process of starting. |
| `HEALTHY` | Indicates the directory service is enabled, and the last status check passed. |
{{< /truetable >}}

{{< expand "Verify Get_State" "v" >}}
The `get_state` command returns **true** if the values entered for the username and password are correct.

From the CLI prompt, enter:

`directory_service get_state`

From the **directory_service** prompt, enter:

`get_state`

{{< expand "Command Example" "v" >}}
```
directory_service get_state
+-----------------+----------+
| activedirectory | DISABLED |
|            ldap | DISABLED |
+-----------------+----------+
```
{{< /expand >}}
{{< /expand >}}

## Directory_Service Child Namespace Content Summaries

The following articles provide information on **directory_service** child authentication namespaces:

{{< children depth="2" description="true" >}}
