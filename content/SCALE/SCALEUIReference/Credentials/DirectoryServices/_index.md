---
title: "Directory Services Screens"
description: "Describes the screens and fields in the TrueNAS SCALE Directory Services section."
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
  - /scale/scaleclireference/directory-service/
tags:
- kerberos
- activedirectory
- idmap
- ldap
- directoryservices
---



{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

The **Directory Services** screen contains configuration options set up access to directory servers with domain and account settings, and can set up Id mapping or Kerberos authentication and authorization service.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services Screen" id="Directory Services Screen" >}}

The screen shows the status of Active Directory and LDAP services when neither is configured, or if either is configured but disabled.
Only one directory service can be configured at a time.

Three options show by default:

* **Configure Active Directory** opens the **[Active Directory]({{< relref "ActiveDirectory.md" >}})** configuration screen.

* **Configure LDAP** opens the [**LDAP**]({{< relref "LDAP.md" >}}) configuration screen. Use to configure access to LDAP-based service such as FreeIPA.

* **Advanced Settings** opens a warning dialog before showing configuration options for [ID mapping] ({{< relref "Idmap.md" >}} and Kerberos.

After configuring Active Directory or LDAP, the **Directory Services** screen includes the widgets for each option, and adds the **Show** button to the right of **Advanced Settings**. **Show** opens the warning dialog stating incorrectly configuring advanced settings is dangerous.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services with Widgets" id="Directory Services with Widgets" >}}

**Advanced Settings**, before configuring either Active Directory or LDAP, shows a warning dialog stating incorrectly configuring advanced settings is dangerous. 
**Continue** closes the dialog and then show the **Idmap**, **Kerberos Settings**, **Kerberos Realms**, and **Kerberos Keytabs** configuration widgets.

{{< trueimage src="/images/SCALE/Credentials/DirServicesAdvancedSettingsWidgets.png" alt="Directory Services Advanced Settings" id="Directory Services Advanced Settings" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
