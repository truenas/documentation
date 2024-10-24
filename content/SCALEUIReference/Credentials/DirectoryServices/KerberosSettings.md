---
title: "Kerberos Settings Screen"
description: "Provides information on the **Kerberos Settings** widget and configuration screen settings."
weight: 40
tags:
- kerberos
---

{{< include file="/static/includes/KerberosIntroWarnings.md" >}}

## Kerberos Settings Widget

The **Kerberos Settings** widget in the **Advanced Settings** on the **Directory Services** screen displays current settings.

![KerberosSettingsWidget](/images/SCALE/Credentials/KerberosSettingsWidget.png "Kerberos Settings Widget")

**Settings** opens the **Kerberos Settings** configuration screen.

## Kerberos Settings Screen

{{< include file="/static/includes/KerberosWarning.md" >}}

The **Kerberos Settings** screen includes two fields used to configure auxiliary parameters.

![KerberosSettingsScreen](/images/SCALE/Credentials/KerberosSettingsScreen.png "Kerberos Settings Screen")

{{< hint type=warning >}}
If you do not understand Kerberos auxiliary parameters, do not attempt to configure new settings!
{{< /hint >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Appdefaults Auxiliary Parameters** | Additional Kerberos application settings. See the  *appdefaults* section of [krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html) for available settings and usage syntax. |
| **Libdefaults Auxiliary Parameters** | Additional Kerberos library settings. See the *libdefaults* section of [krb.conf(5)](https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html) for available settings and usage syntax. |
{{< /truetable >}}
