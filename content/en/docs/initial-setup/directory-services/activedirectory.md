---
title: "Configuring Active Directory"
linkTitle: "Configuring Active Directory"
description: "How to configure Active Directory connections"
---

## Process Summary

* Directory Services > Active Directory
  * Requirements
    * Windows Server 2000 or newer or Unix-like OS with [Samba version 4](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller#Provisioning_a_Samba_Active_Directory).
    * Name resolution must be configured before configuring Active Directory (AD)
      * **Shell**: ping the domain name of the AD domain controller. If ping fails, check the DNS server and default gateway settings in Network > Global Configuration.
      * Active Directory adds TrueNAS SMB Bind IP Addresses DNS records to the Active Directory DNS on domain join.
        * Disabling Allow DNS updates forces administrator to manually update Active Directory DNS records.
    * AD requires Kerberos, which is time-sensitive. During domain join the PDC emulator FSMO role server is added as the preferred NTP server. TrueNAS System and Active Directory Domain Controller (ADDC) cannot be out of sync by more than five minutes in a default AD environment.
      * TrueNAS can add NTP servers in System > NTP Servers
      * Check that the timezone is the same between both systems (TrueNAS and ADDC)
      * Set to either localtime or universal time in the BIOS
    * Using SSL connections requires importing a Certificate to TrueNAS in **System > Certificates**
      * A Certificate Authority could also be needed: **System > CAs**
  * Basic Configuration
    * Enter the AD domain name, AD administrator account name, and AD administrator account password.
    * Choosing a Kerberos Principal OR entering an account password is required to activate AD.
      * Account password cannot contain a $ character.
  * Advanced Mode
    * Additional options for timeout, domain name handling, IDmap backends, and connection settings.
    * Sane defaults are preselected.
      * Users can configure to match their specific network needs.
    * Rebuilding the Directory Service Cache is done daily in **Tasks > Cron Jobs**
  * Enable/Disable the connection
    * Set or unset the “Enabled” checkbox (requires valid password or Kerberos Principal)
    * Click Save
  * Confirming the connection
    * It can take several minutes for AD information to get populated into the TrueNAS system.
    * Verifying the connection is done in the **Shell**
      * See users: `wbinfo -u`
      * See groups: `wbinfo -g`
      * See domains: `wbinfo -m`
      * Connection test: `wbinfo -t`
      * Test user connection: `smbclient//127.0.0.1/SHARE -U DOMAIN\username`
        * SHARE is SMB share name
        * Domain is the trusted domain name
        * username is the user account being tested
      * Additional troubleshooting info: `getent passwd` and `getent group`

## Configuring Active Directory

Detailed article goes here.