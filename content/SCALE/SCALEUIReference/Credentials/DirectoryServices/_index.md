---
title: "Directory Services"
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
---

The SCALE Directory Services section contains options to edit directory domain and account settings, set up Idmapping, and configure authentication and authorization services in TrueNAS SCALE. 

![DirectoryServicesScreenDisabled](/images/SCALE/22.02/DirectoryServicesScreenDisabled.png "Directory Services Screen Disabled")

The Directory Services screen is mostly empty until you connect TrueNAS to either an Active Directory or an LDAP server.

Click **Configure Active Directory** to open the Active Directory form.

![DirectoryServicesActiveDirectoryForm](/images/SCALE/22.02/DirectoryServicesActiveDirectoryForm.png "Active Directory Form")

![DirectoryServicesScreenEnabled](/images/SCALE/22.02/DirectoryServicesScreenEnabled.png "Directory Services Screen Enabled")

To display Kerberos settings, click **Show** next to Advanced Settings.

{{< hint danger >}} 
Changing Advanced settings can be dangerous when done incorrectly. Please use caution before saving.
{{< /hint >}}

## Article Summaries

{{< children depth="2" description="true" >}} 