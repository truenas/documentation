---
---

{{< hint danger >}}
Kerberos is extremely complex. Only system administrators experienced with configuring Kerberos should attempt it. 
Misconfiguring Kerberos settings, realms, and keytabs can have a system-wide impact beyond Active Directory or LDAP,  and can result in system outages.
Do not attempt configure or make changes if you do not know what you are doing!
{{< /hint >}}
Kerberos is a computer network security protocol. It authenticates service requests between trusted hosts across an untrusted network  (i.e., the Internet). 

If you configure Active Directory in SCALE, SCALE populates the realm fields and the keytab with with what it discovers in AD. 
You can configure LDAP to communicate with other LDAP severs using Kerberos, or NFS if it is properly configured, but SCALE does not automatically add the realm or key tab for these services.
{{< hint warning >}}
After AD populates the Kerberos realm and keytabs, do not make changes. Consult with your IT or network services department, or those responsible for the Kerberos deployment in your network environment for help. 
For more information on Kerberos settings refer to the [MIT Kerberos Documentation](https://web.mit.edu/kerberos/krb5-latest/doc/).
{{< /hint >}}