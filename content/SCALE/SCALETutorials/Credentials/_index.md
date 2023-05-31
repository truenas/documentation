---
title: "Credentials"
description: "Tutorials for configuring the different credentials needed for TrueNAS SCALE features."
geekdocCollapseSection: true
weight: 70
---

SCALE Credential options are collected in this section of the UI and organized into a few different screens:

* **Local Users** allows those with permissions to add, configure, and delete users on the system.
  There are options to search for keywords in usernames, display or hide user characteristics, and toggle whether the system shows built-in users.

* **Local Groups** allows those with permissions to add, configure, and delete user groups on the system.
  There are options to search for keywords in group names, display or hide group characteristics, and toggle whether the system shows built-in groups.

* **Directory Services** contains options to edit directory domain and account settings, set up Idmapping, and configure access and authentication protocols. 
  Specific options include configuring Kerberos realms and key tables (keytab), as well as setting up LDAP validation.

* **Backup Credentials** stores credentials for cloud backup services, SSH Connections, and SSH Keypairs. 
  Users can set up backup credentials with cloud and SSH clients to back up data in case of drive failure.

* **Certificates** contains all the information for certificates, certificate signing requests, certificate authorities, and DNS-authenticators. 
  TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

* **2FA** allows users to set up Two-Factor Authentication for their system.
  Users can set up 2FA, then link the system to an authenticator app (such as Google Authenticator, LastPass Authenticator, etc.) on a mobile device.

## Contents

{{< children depth="2" description="true" >}}
