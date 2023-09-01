---
title: "LDAP Servers"
description: "Describes how to configure LDAP servers for TrueCommand."
aliases:
weight: 50
tags:
- tcldap
- tcad
- tcconfig
---

{{< toc >}}

Users can configure TrueCommand to use LDAP servers for security and authentication management among connected TruNAS systems.

## Add an LDAP Server in TrueCommand

Click the gear icon in the upper toolbar and select **Administration**. Scroll down to the **LDAP Servers** widget and click **ADD**.

![AddLDAPServer](/images/TrueCommand/AddLDAPServer.png "Add LDAP Servers")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Hostname** | Host name of LDAP/AD server, with optional port. e.g. example.com:636. |
| **Domain** | LDAP base domain. e.g. dc=example,dc=com. |
| **Group Domain** | Optional for admins that want to avoid issues with unwanted groups by forcing group searches to start at a deeper domain. |
| **User ID Field** | Class mapped to login username. The default is uid. |
| **Group ID Field** | Class for finding groups associated with a user. The default is cn. |
| **BIND User Domain** | Full user domain for binding before finding user fully qualified ID (FQID). Optional. |
| **Realm** | The realm that performs authentication against the LDAP server. |
| **BIND Password** | If bind user is set, use this password when performing a simple bind on user search. |
| **KDC** | The Kerberos Key Distribution Center that supplies session tickets and temporary session keys to users and computers within the LDAP server. |
{{< /truetable >}}

After you fill the form according to your server, click **ADD SERVER**.

Click **CONFIGURE** in the **Configuration** widget and enable **Allow LDAP user creation**, then click **SAVE**.

## Updating the LDAP Server

TrueCommand only checks for usernames and passwords when authenticating LDAP credentials. You may add entries for email, phone number, or URLs, but TrueCommand does not check for them.

The LDAP server uses an LDAP Data Interchange Format (LDIF) file to add or modify entries in the server.

For more in-depth LDAP configuration methods, see this [LDAP System Administration](https://www.oreilly.com/library/view/ldap-system-administration/1565924916/ch04s05.html) guide.

### Add New Entries to the Directory

Enter the following command to add entries to the LDIF file. Separate specifications (cn, dc, etc.) with a comma. 

```
$ ldapmodify -D "uid=USER,dc=DOMAIN,dc=DOMAIN" -w secret \
> -x -a -f /tmp/users.ldif
```

`USER` is the user ID.
`DOMAIN` is a domain component like com, edu, org, etc.

If the command succeeds, you will see an output like this:

`adding new entry "uid=USER,dc=DOMAIN,dc=DOMAIN"`

### Modify Entries on the Directory

If, for instance, the user you added does not yet have a password, you can add it with the following command.

```
dn: uid=USER,dc=DOMAIN,dc=DOMAIN"
changetype: modify
add: password
password: USER@DOMAIN.DOMAIN
```
{{< taglist tag="tcconfig" limit="10" >}}
