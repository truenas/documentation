---
---
{{< expand "Active Directory" "v" >}}
Provide the following information to configure SCALE Active Directory access:

* Domain name for where the Active Directory server is located
* Authentication credentials for access to the Active Directory server (admin user name and password to allow SCALE to communicate with the server)
* List of trusted domains SCALE should allow
{{< /expand >}}
{{< expand "LDAP" "v" >}}
Provide the following information to configure SCALE LDAP access:

* Host name where the LDAP sever is located and where SCALE accesses it
* Base and bind distinguished names (DN) and the bind password which are the authentication credentials
* Kerberos realm and keytab information if used in your directory server deployment for SCALE to use for authentication
{{< /expand >}}
{{< expand "Advanced Directory Services" "v" >}}
Not all companies uses Kerberos or IDmap but if your company does you might be asked to provide:

* Kerberos realm and keytab information
* IDmap schema information
{{< /expand >}}