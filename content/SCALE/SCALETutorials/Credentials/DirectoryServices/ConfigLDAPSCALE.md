---
title: "Configuring LDAP"
description: "This article provides instructions on configuring and managing LDAP in SCALE."
weight: 20
aliases:
tags:
- scaleldap
- scaledirectoryservices
---


TrueNAS has an [Open LDAP](https://www.openldap.org/) client for accessing the information on an LDAP server. An LDAP server provides directory services for finding network resources like users and their associated permissions.

{{< expand "Does LDAP work with SMB?" "v" >}}
LDAP authentication for SMB shares is disabled unless you have configured and populated the LDAP directory with Samba attributes.
The most popular script for performing this task is `smbldap-tools`.
The LDAP server must support SSL/TLS, and you must import the certificate for the LDAP server CA.
TrueNAS does not support non-CA certificates.
{{< /expand >}}

Go to **Credentials > Directory Services** and click **Configure LDAP**.

![LDAPSCALE](/images/SCALE/LDAPSCALE.png "LDAP Options")

Enter your LDAP server hostname, then enter your LDAP server base and bind distinguished names and the bind password. Check the **Enable** box to activate the server, then click **Save**.

To further modify the LDAP configuration, click **Advanced Options**. See the [LDAP UI Reference article]({{< relref "/content/SCALE/SCALEUIReference/Credentials/DirectoryServices/LDAP.md" >}}) for details about advanced settings.

![LDAPAdvancedSCALE](/images/SCALE/LDAPAdvancedSCALE.png "LDAP Advanced Options")

{{< taglist tag="scaleldap" limit="10" >}}
{{< taglist tag="scaledirectoryservices" limit="10" title="Related Directory Services Articles" >}}