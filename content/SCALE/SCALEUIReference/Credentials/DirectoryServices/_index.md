---
title: "Directory Services Screens"
description: "This section describes the screens and fields in the TrueNAS SCALE Directory Services section."
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
tags:
- scalekerberos
- scalead
- scaleidmap
- scaleldap
- scaledirserv
---

The SCALE Directory Services section contains options to edit directory domain and account settings, set up Idmapping, and configure authentication and authorization services in TrueNAS SCALE. 

## Directory Services Screen

The **Directory Services** screen opens with two options, **Active Directory** and **LDAP**. You can configure one or the other but not both.

![DirectoryServicesScreen](/images/SCALE/22.12/DirectoryServicesScreen.png "Directory Services")

**Configure Active Directory** opens the **[Active Directory]({{< relref "ActiveDirectory.md" >}})** configuration screen.

**Configure LDAP** opens the **LDAP** configuration screen.

After configuring Active Directory or LDAP, the **Directory Services** screen includes the widgets for each option.

![DirectoryServicesADandLDAPWidgets](/images/SCALE/22.12/DirectoryServicesADandLDAPWidgets.png "Directory Services with Widgets")

**Show** to the right of **Advanced Settings** opens a dialog warning users of the risk incorrect configuration can cause. 
**Continue** closes the dialog and permits access to **Idmap**, **Kerberos Settings**, **Kerberos Realms**, and **Kerberos Keytabs** configuration widgets.

## Directory Services Advanced Settings 
The **Advanced Settings** include the **Idmap**, **Kerberos Settings**, **Kerberos Realms,** and **Kerberos Keytab** widgets.

![DirServicesAdvancedSettingsScreen](/images/SCALE/22.12/DirServicesAdvancedSettingsScreen.png "Directory Services Advanced Settings")

{{< hint type=warning >}} 
Changing Advanced settings can be dangerous if done incorrectly. Use caution before saving.
{{< /hint >}}

## Contents

{{< children depth="2" description="true" >}} 