---
title: "Setting Up Directory Services"
geekdocCollapseSection: true
weight: 30
aliases:
  - /scale/credentials/directoryservices/activedirectoryscale/
  - /scale/credentials/directoryservices/ldapscale/
  - /scale/credentials/directoryservices/idmapscale/
  - /scale/credentials/directoryservices/kerberosscale/
---


The SCALE Directory Services section contains options to edit directory domain and account settings, set up Idmapping, and configure authentication and authorization services in TrueNAS SCALE. 

## Choosing Active Directory or LDAP

When setting up directory services in TrueNAS, you can connect TrueNAS to either an Active Directory or an LDAP server. 

To view Idmap and Kerberos Services, click **Show** next to **Advanced Settings**.

## Troubleshooting Directory Services

If the AD or LDAP cache becomes out of sync or fewer users than expected are available in the permissions editors, resync the cache using the *Rebuild Directory Service Cache*.

## Article Summaries


{{< children depth="2" description="true" >}}