---
title: "Directory Services Screens"
description: "Describes the screens and fields in the TrueNAS SCALE Directory Services section."
geekdocCollapseSection: true
weight: 30
tags:
- kerberos
- activedirectory
- idmap
- ldap
- directoryservices
---

The SCALE Directory Services section contains options to edit directory domain and account settings, set up Idmapping, and configure authentication and authorization services in TrueNAS SCALE.

## Directory Services Screen

The **Directory Services** screen opens with two options, **Active Directory** and **LDAP**. You can configure one or the other but not both.

![DirectoryServicesScreen](/images/SCALE/Credentials/DirectoryServicesScreen.png "Directory Services")

**Configure Active Directory** opens the **[Active Directory]({{< ref "ActiveDirectory" >}})** configuration screen.

**Configure LDAP** opens the **LDAP** configuration screen.

After configuring Active Directory or LDAP, the **Directory Services** screen includes the widgets for each option.

![DirectoryServicesADandLDAPWidgets](/images/SCALE/Credentials/DirectoryServicesADandLDAPWidgets.png "Directory Services with Widgets")

**Show** to the right of **Advanced Settings** opens a dialog warning users of the risk incorrect configuration can cause.
**Continue** closes the dialog and permits access to **Idmap**, **Kerberos Settings**, **Kerberos Realms**, and **Kerberos Keytabs** configuration widgets.

## Directory Services Advanced Settings 
The **Advanced Settings** include the **Idmap**, **Kerberos Settings**, **Kerberos Realms,** and **Kerberos Keytab** widgets.

![DirServicesAdvancedSettingsScreen](/images/SCALE/Credentials/DirServicesAdvancedSettingsScreen.png "Directory Services Advanced Settings")

{{< hint type=warning >}}
Changing Advanced settings can be dangerous if done incorrectly. Use caution before saving.
{{< /hint >}}

## Contents

{{< children depth="2" description="true" >}}
