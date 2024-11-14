&NewLine;

TrueNAS allows configuring an Active Directory or LDAP server to handle authentication and authorization services, domain, and other account settings.
Identify your existing Kerberos realm and keytab information.
You might need to supply your LDAP server host name, LDAP server base and bind distinguished names (DN), and the bind password.

TrueNAS is configured with default port numbers, but you can change these.
Before making a port number change, refer to the [Default Ports](https://www.truenas.com/docs/references/defaultports/) for a list of used and available ports before changing default port assignments.
TrueNAS requires assinging a node port greater than 9000.