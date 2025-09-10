---
title: "Directory Services Screens"
description: "Describes the screens and fields in the TrueNAS Directory Services section."
geekdocCollapseSection: true
weight: 30
tags:
- kerberos
- activedirectory
- idmap
- ldap
- directoryservices
---



{{< include file="/static/includes/DirectoryServiceAccessAdmonition.md" >}}

The **Directory Services** screen configuration options set up access to directory servers through domain and account settings, and can set up ID mapping or Kerberos authentication and authorization services.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services Screen" id="Directory Services Screen" >}}

The screen shows the status of directory services when a service is not configured or when it is configured but disabled.

The main option displays:

* **Configure Directory Services** opens the **Directory Services Configuration** form where you can set up Active Directory, IPA, or LDAP connections.

* **Advanced Settings** opens a warning dialog before showing configuration options for [ID mapping]({{< ref "Idmap.md" >}}) and Kerberos.

After configuring Active Directory or LDAP, the **Directory Services** screen includes the widgets for each option, and adds the **Show** button to the right of **Advanced Settings**. **Show** opens the warning dialog stating incorrectly configuring advanced settings is dangerous.

{{< trueimage src="/images/SCALE/Credentials/DirectoryServicesScreen.png" alt="Directory Services with Widgets" id="Directory Services with Widgets" >}}

**Advanced Settings**, before configuring either Active Directory or LDAP, shows a warning dialog stating incorrectly configuring advanced settings is dangerous. 
**Continue** closes the dialog and then show the **Idmap**, **Kerberos Settings**, **Kerberos Realms**, and **Kerberos Keytabs** configuration widgets.

{{< trueimage src="/images/SCALE/Credentials/DirServicesAdvancedSettingsWidgets.png" alt="Directory Services Advanced Settings" id="Directory Services Advanced Settings" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
