---
title: "Hardened Backup Repository for Veeam"
weight: 40
---

## Abstract
This guide explains in details how to create **a Hardened Backup
Repository** for [VeeamBackup](https://veeam.com) with **TrueNAS Scale**
that means a repository that will survive to **any remote attack**.

The main idea of this guide is **the disabling of the webUI**
with an inititialisation script and a cron job
**to prevent remote deletion of the ZFS snapshots**
that guarantee data immutability.

The key points are:
* Rely on ZFS snapshots to **guarantee data immutability**
* Reduce the surface of attack to the minimum
* When the setup is finished, disable **all remote management interfaces**
* Remote deletion of snapshots is impossible **even if all the credentials are stolen**.
* The only way to delete the snapshot is having **physically access to the TrueNAS Server Console**.


{{< hint type=note >}}
This article targets specifically *TrueNAS Scale* and *Veeam Backup*,
but it may also apply to some extent to [TrueNAS Core](https://www.truenas.com/truenas-core/)
and/or other backup software.
{{< /hint >}}



## Installation

Install *TrueNAS Scale 22.02* on a **physical** machine.
* If possible the computer should have at least 2 network interfaces:
  * one dedicated network interface for the management
  * the other one for the data sharing

{{< hint type=important >}}
A *virtualized* TrueNAS server is not suitable for a hardened backup
repository because a malware can easily take the control of TrueNAS server and destroy its data after compromising the hypervisor.
{{< /hint >}}

## Create a ZFS pool
Go to *Storage | Create Pool*
  * *Name*: **tank1**
{{< hint type=note >}}
Even if you can use any pool name, the guide is easier to
follow if you use **tank1** as pool name.
{{< /hint >}}
  * Click on *SUGGEST LAYOUT* to let TrueNAS guessing the best layout for you.
  In most situations, it will just work very well.
  * Review the proposed layout, then click on *CREATE*
{{< hint type=note >}}
For a backup repository, the following layouts will provide
a good balance between IOPS, available space and level of redundancy:
  * 2 to 4 disks: Stripe of mirrors
  * 6 disks: RaidZ2
  * 8 to 11 disks: RaidZ3
  * 12 disks and more: Stripe of Raidz2/Raidz3
{{< /hint >}}


## Configure SMART Tests
{{< hint type=note >}}
[SMART](https://en.wikipedia.org/wiki/S.M.A.R.T.)
(*Self-Monitoring, Analysis and Reporting Technology*)
is a monitoring system included in hard disk drives
to anticipate imminent hardware failures.
{{< /hint >}}

Go to *Data Protection | S.M.A.R.T Test | Add*
* [x] All Disks
* *Type*: **LONG**
* *Description*: **Long SMART test**
* *Schedule*: **Monthly (0 0 1 \* \*) on the first day of the month at 00:00 (12:00 AM)**
* *SAVE*


## Configure the network
{{< hint type=note >}}
For a hardened repository, it is better to use a **fixed IP address** than
a DHCP configuration, because a compromised DHCP server can provide
malicious DNS settings.
{{< /hint >}}

### Global Network Configuration
Go to *Network | Global Configuration*
* *Hostname and Domain*
  * Configure **Hostname** and **Domain**
* *Service Annoucement*
  * [ ] NetBIOS-NS
  * [ ] mDNS
  * [ ] WS-Discovery

{{< hint type=note >}}
For a hardened repository it is preferable to disable any service annoucement
{{< /hint >}}
* *DNS Servers*
  * *Nameserver 1*: **1.1.1.1**
  * *Nameserver 2*: **8.8.8.8**
{{< hint type=note >}}
For a hardened server, it is preferable to use the IP addresses of very well known
and secure public DNS than your own internal DNS server.
  *  Cloudflare: 1.1.1.1
  *  Google: 8.8.8.8
{{< /hint >}}
* *Default Gateway*
  * Setup *IPv4 (or IPv6) Default Gateway* according to your network
* *Outbound Network*
  * **(o) Allow Specific**
    * Enable **Mail** and **Update**
* Other Settings
  * *HTTP Proxy*: stay empty
  {{< hint type=note >}}
Connecting to Internet through a proxy is a good security practice
because it prevents malwares to communicate easily with their control
and command servers, but it is out of the scope of this guide.
{{< /hint >}}
* *SAVE*



### Network Interfaces Configuration
Go to *Network | Interfaces*
* Click on the first interface and configure it as the management interface
  * Management interface
    * *Description*: **management**
    * [ ] DHCP
    * [ ] Autoconfigure IPv6
    * *Other Settings*
      * [ ] Disable Hardware Offloading
      * *MTU*: **1500**
{{< hint type=note >}}
For a hardened repository, it is preferable to keep the default value
(1500) for the MTU, because using jumbo frame makes the network
configuration more complex to manage.
{{< /hint >}}
      * *IP Addresses*
        * Add the IP address of the management interface
    * *APPLY*
    * *TEST CHANGES*
{{< hint type=important >}}
When you are testing the new network settings, you have 60 seconds to confirm
that it works by clicking on *SAVE CHANGES*, otherwise the system automatically rolls back to the previous network configuration to avoid kicking you out of the network.
{{< /hint >}}

  * Data interface
    * Management interface
      * *Description*: **data sharing**
      * [ ] DHCP
      * [ ] Autoconfigure IPv6
      * *Other Settings*
        * [ ] Disable Hardware Offloading
        * *MTU*: **1500**
        * *IP Addresses*
          * Add the IP address of the data sharing interface
    * *APPLY*
    * *TEST CHANGES*
    * *SAVE CHANGES*



## Configure the user accounts

### Setup root account
Go to *Credentials | Local Users*
  * Edit the *root* user
    * Fill the *Email* field
 {{< hint type=important >}}
System notification are sent by email to the **root** user, so this
email address is very important.
{{< /hint >}}
    * If you wish to use SSH for management, fill also *SSH Public Key*

{{< hint type=note >}}
SSH is more convenient than the web shell interface to enter commands
that are missing from the web user interface.
{{< /hint >}}

### Create a account for Veeam
Go to *Credentials | Local Groups | Add*
  * *GID*: **10000**
  * *Name*: **veeam**
  * [ ] Permit Sudo
  * [x] Samba Authentication
  * [ ] Allow Duplicated GIDs
  * *SAVE*

Go to *Credentials | Local Users | Add*
  * *Full Name*: **Veeam Backup**
  * *Username*: **veeam**
  * *Password*: **use a very long and strong password**
  * *Password confirmation*:
  * *Email*: stay empty
  * *User ID and Groups*
    * *User ID*: **10000**
    *  [ ] New Primary Group
    * *Primary Group*: **veeam**
    *  *Auxiliary group*: stay empty
 * *Directories and Permissions*
    * *Home Directory*: **/nonexistent**
    * *Home Directory Permission*: **clear all permissions, except user permissions**
    * *SSH Public Key*: stay empty
    * *Disable password*: **no**
    * *Shell*: **nologin**
    * [ ] Lock User
    * [ ] Permit Sudo
    * [ ] Microsoft Account
    * [x] Samba Authentication
  * *SAVE*


## Configure SSH
Go to *System Settings | Services | SSH* and click on the pencil (<i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>)
  * Click **ADVANCED SETTINGS**
    * *TCP Port*: **22**
    * [ ] Log in As Root with Password
    * [ ] Allow Password Authentication
    * [ ] Allow Kerberos Authentication
    * [ ] Allow TCP Port Forwarding
    * *Bind Interfaces*: **use the management network interface**
    * [ ] Compress Connections
    * SFTP Log Level: stay blank
    * SFTP Log Facility: stay blank
    * Weak Ciphers: **None, AES128-CBC**
    * Auxiliary Parameters: **AllowUsers root\@192.168.0.10**
       * where 192.168.0.10 is the IP address of your desktop computer you use to manage the TrueNAS server.
   * *SAVE*

   * Toggle the running button to start the SSH service
   **but do not start automatically SSH**

{{< hint type=important >}}
Do not start automatically SSH because we will disable the SSH service
later to harden the repository.
{{< /hint >}}



## Configure the mail notification
{{< hint type=important >}}
Configuring the mail notification is very important, because it will
be the only way to know that happens (for example if a disk is dying)
after disabling the web management interface to harden the repository.
{{< /hint >}}

#### Edit mail notification
* Click on the **bell** <i class="fa fa-bell" aria-hidden="true" title="Alert"></i> icon on the top right corner
* Click on the **gear** <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> icon
* Select **Email**
* Fill the web form according to your email provider
* *Send Test Mail*
* Check that you receive the testing email
* *SAVE*


## Create a dataset for Veeam
Go to *System Settings | Shell* (or connect with SSH)
```
zfs create tank1/veeam
zfs set org.freenas:description="veeam hardened repo" tank1/veeam
zfs set compression=off tank1/veeam
chown veeam:veeam /mnt/tank1/veeam
chmod 700 /mnt/tank1/veeam
```

{{< hint type=note >}}
Description of shell commands
1. Create a dataset name **tank1/veeam**
1. Set dataset description ("veeam hardened repo")
1. Set compression level to **off** because Veeam backup are already compressed
1. Set ownership of user **veeam** and group **veeam** on directory **/mnt/tank1/veeam**
1. Set restrictive user permissions on **/mnt/tank1/veeam**
{{< /hint >}}

If you really following this guide from scratch, then the dataset **tank1/veeam**
is empty, then  you can create an **empty snapshot** and **lock it** to prevent deleting by mistake the dataset from the web user interface or with the command `zfs destroy`

```
zfs snap tank1/veeam@LOCKED
zfs hold LOCKED tank1/veeam@LOCKED
```

{{< hint type=note >}}
Description of shell commands
1. Create a snapshot named **LOCKED** on **tank1/veeam**.
1. Hold a lock named **LOCKED** on the snapshot. Indeed the name of the snapshot and the name of the lock
can be different, but it is easier to use twice the same name.
{{< /hint >}}

{{< hint type=note >}}
More information about ZFS locked snapshot
* To lock a snapshot use `zfs hold LOCK_NAME SNAPSHOT_NAME`
* Snapshot can have multiple locks, each lock must have a different name
* A locked snapshot cannot be deleted
* To unlock a snapshot, use `zfs release LOCK_NAME SNAPSHOT_NAME`
* To list the lock names of a particular snapshot, use `zfs holds SNAPSHOT_NAME`
* A dataset with a locked snapshot cannot be deleted neither with the webui nor with the `zfs destroy` command, so it avoid human errors.
{{< /hint >}}


## Configure ZFS periodic snapshots

Create 3 periodic (hourly, daily and weekly) ZFS snapshots to recover
the data if they are deleted or modified.

### Hourly snapshots
Go to **Data Protection | Periodic Snapshot Tasks**
* *Dataset* **tank1**
* *Exclude*: stay empty
* [x] Recursive
* *Snapshot lifetime*: **1 day**
* *Naming Schema*: **auto-%Y%m%d\_%H%M-hourly**
* *Schedule*: **Hourly (0 * * * * ) at the start of each hour**
* *Begin*: **00:00:00**
* *End*: **23:59:00**
* [x] Allow Taking Empty Snapshots
* [x] Enabled
* *SAVE*

{{< hint type=note >}}
It is easier to setup the periodic snapshot at the root dataset and
to enable *recursive* snapshot.
{{< /hint >}}


### Daily snapshots

Go to **Data Protection | Periodic Snapshot Tasks**
* *Dataset* **tank1**
* *Exclude*: stay empty
* [x] Recursive
* *Snapshot lifetime*: **1 week**
* *Naming Schema*: **auto-%Y%m%d\_%H%M-daily**
* *Schedule*: **Daily (0 0 * * * ) at 00:00 (12:00 AM)**
* [x] Allow Taking Empty Snapshots
* [x] Enabled
* *SAVE*

### Weekly snapshots

Go to **Data Protection | Periodic Snapshot Tasks**
* *Dataset* **tank1**
* *Exclude*: stay empty
* [x] Recursive
* *Snapshot lifetime*: **1 month**
* *Naming Schema*: **auto-%Y%m%d\_%H%M-weekly**
* *Schedule*: **Weekly (0 0 * * sun ) on Sundays at 00:00 (12:00 AM)**
* [x] Allow Taking Empty Snapshots
* [x] Enabled
* *SAVE*

{{< hint type=note >}}
If you have enough disk space, you can use longer retention time.
The longer the snapshot are kept, the better your safety is.
{{< /hint >}}


## Configure Samba Service
Go to *System Settings | Services | SMB* and click on the pencil (<i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i>)
  * Click **ADVANCED SETTINGS**
    * *NetBIOS Name*: **strongbox**   (you can use any name here)
    * *NetBIOS Alias*: stay empty
    * *Workgroup*: **WORKGROUP**
    * *Description*: **Hardened TrueNAS**
    * [ ] Enable SMB1 support
    * [ ] NTLMv1 Auth
    * *UNIX Charset*: **UTF-8**
    * *Log Level*: **Minimum**
    * [ ] Use Syslog Only
    * [x] Local Master
    * [ ] Enable Apple SMB2/3 Protocol Extensions
    * *Administrators Group*: stay empty
    * *Guest Account*: **nobody**
    * *File Mask*: **0600**
    * *Directory Mask*: **0700**
    * *Bind IP Address*: bind on the IP address of the data network interface
    * *Auxiliary Parameters*: stay empty
    * *SAVE*
   * Toggle the running button to start the SMB service
   * [x] Start Automatically SMB


## Configure Samba share for Veeam
Go to *Shares | Windows (SMB) Shares | ADD*
* Click on **ADVANCED OPTIONS**
  * *Basic*
    * *Path*: **/mnt/tank1/veeam**
    * *Name*: veeam
    * *Purpose*: **Multi-protocol (NFSv3/SMB) shares**
    * *Description*: **hardened veeam repository**
    * [x] Enabled
  * *Access*
    * [x] Enable ACL
    * [ ] Export Read Only
    * [x] Browseable to Network client
    * [ ] Allow guest access
    * [ ] Allow based shared enumeration
    * *Host Allow*: *put the IP of the Veeam Software server here*
    * *Host Deny*: stay empty
  * *Other Options*
    * [ ] Use as home share
    * [ ] Timemachine
    * [ ] Legacy AFP compatibility
    * [x] Enable shadow copy
    * [ ] Export Recycle bin
    * [ ] Use Apple-Style Character Encoding
    * [x] Enable alternate data streams
    * [x] Enable SMB2/3 Durable handles
    * [ ] Enable FSRVP
    * *Path suffix*: **stay empty, very important**
    * *Auxiliary parameters:* stay empty
  * *SAVE*


## Add this repository to Veeam Software

See the [documentation of Veeam Backup](https://helpcenter.veeam.com/docs/backup/vsphere/repo_add.html) to add this SAMBA share as a backup target.

In the Veeam wizard select
* **Network attached storage**
* **SMB Share**
* For the credentials, use the veeam account creates on the hardened backup resporitory (see above)



## Hardened the repository

To hardened the backup repository, just remove any possibility to
 remotely destroy the ZFS snapshots.

### Enable password for console access
Go to *System Settings | Advanced | Console | Configure*
* [ ] Show Text Conosle wihout Password Prompt
* *SAVE*


### Disconnect IPMI
If your server has a [IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface) interface, **physically disconnect the network cable**.

{{< hint type=warning >}}
* If a malware takes the control of your management computer,
it can use the IPMI interface to destroy your backups.
* Be cautious and just disconnect the cable.
{{< /hint >}}


### Check that NTP works as expected
* Go to *System Settings | General | NTP Servers*

By default TrueNAS Scale comes with the following NTP servers
* 0.debian.pool.ntp.org
* 1.debian.pool.ntp.org
* 2.debian.pool.ntp.org



Open a shell
* Go to *System Settings | Shell*
* Enter the command `ntpq -p`
* The output will look like

```
# ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
*ntppub.darksky. 172.18.1.20      2 u  326 1024  377   11.447   +0.475   0.531
+ip139.ip-5-196- 145.238.203.14   2 u  208 1024  377   11.484   -0.249   0.279
+ns2.euskill.com 193.107.56.120   4 u   33 1024  377   22.541   +0.167   0.538
```

{{< hint type=note >}}
Do not worry if you have different remote hostnames or IP addresses
for NTP servers, it is normal because domain names of **ntp.org**
point to a pool of servers.
{{< /hint >}}


### Configure HTTPS

#### Create an Internal Certificat Authority
Go to *Credentials | Certificates | Certificates Authorities | Add*
* *Identifier and Type*
  * *Name*: **hardened-truenas-scale-ca**
  * *Type*: **Internal CA**
  * *Profiles*: **CA**
* *Certificate Options*
  * *Key Type*: **RSA**
  * *Key Length*: **4096**
  * *Digest Algorithm*: **SHA512**
  * *Lifetime*: **3650**
* *Certificate Subject*
  * *Country*: **United States**
  * *State*: **California**
  * *Locality*: **San Francisco**
  * *Organization*: **The Name of My Company**
  * *Organization Unit*: **Backup Department**
  * *Email*: **firstname.surname@the-name-of-my-company.com**
  * *Common Name*: **hardened-truenas-scale-ca**
  * *Subject Alternate Names*: **hardened-truenas-scale-ca**
* *Extra Constraints*
  * [ ] Basic Constraints
  * [ ] Authority Key Identifier
  * [ ] Extended Key Usage
  * [ ] Key Usage
* *Confirm Options*
  * *SAVE*

### Create a certificate for HTTPS
Go to *Credentials | Certificates | Certificates | Add*
* *Identifier and Type*
  * *Name*: **hardened-truenas-scale-cert**
  * *Type*: **Internal Certificate**
  * *Profiles*: **--------**
* *Certificate Options*
  * *Signing Certificate Authority*: **hardened-truenas-scale-ca**
  * *Key Type*: **RSA**
  * *Key Length*: **4096**
  * *Digest Algorithm*: **SHA512**
  * *Lifetime*: **3650**   (10 years)
* *Certificate Subject*
  * *Country*: **United States**
  * *State*: **California**
  * *Locality*: **San Francisco**
  * *Organization*: **The Name of My Company**
  * *Organization Unit*: **Backup Department**
  * *Email*: **firstname.surname@the-name-of-my-company.com**
  * *Common Name*: **hardened.mydomainname.com**  (the full qualified domain name)
  * *Subject Alternate Names*: **hardened.mydomainname.com**  (the full qualified domain name)
* *Extra Constraints*
  * [ ] Basic Constraints
  * [ ] Authority Key Identifier
  * [ ] Extended Key Usage
  * [ ] Key Usage
* *Confirm Options*
  * *SAVE*


### Apply the new HTTPS certificate
Go to *System Settings | General | GUI | Settings*
* *GUI*
  * *GUI SSL Certificate* : **hardened-truenas-scale-cert**
  * *Web Interface IPv4 Address*: **select the management interface**
  * *Web Interface IPv6 Address*: **::**
  * *Web Interface HTTP Port*: **80**
  * *Web Interface HTTPS Port*: **443**
  * *HTTPS Protocols*: **TLSv1.3**
  * [x] Web Interface HTTP -> HTTPS Redirect
* *Other Options*
  * [x] Crash reporting
  * [ ] Usage collection
  * [ ] Show Console Messages
* *SAVE*

Restart Web Service: *CONFIRM*, *CONTINUE*



### Enable Two-Factor Authentication (2FA)
{{< hint type=note >}}
Two-Factor Authentication is time-based, and requires that the system time
is set correctly, so check before that NTP works.
{{< /hint >}}

* Install an application on your smartphone to generate an
[One-Time-Password](https://en.wikipedia.org/wiki/One-time_password)
from a QR-Code.
For example  [FreeOTP Authenticator](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp)
* Go to *Credentials | 2FA*
* Keep the default
    * *One-Time Password (OTP) Digits*: 6
    * *Interval*: 30
    * *Window*: 0
    * [ ] Enable Two-Factor Auth for SSH
* Click on *Enable Two-Factor Authentication*
* *SHOW QR*
* Use *FreeOTP* to capture the QR code
* Log out the web interface
* Test Two-Factor Authentication
* If something goes wrong you can disable the 2FA from the console
```
midclt call auth.twofactor.update '{"enabled": false}'
```

### Disable SSH for normal operations
{{< hint type=note >}}
Letting SSH service running is dangerous: if someone steals your SSH private
key and passphrase, he can remotely connect to the backup repository and destroy the data.
{{< /hint >}}


#### Check SSH does not automatically start
Go to *System Settings | Services*
* Check that SSH does not start automatically

#### Stop SSH service on boot
Add a startup script to stop the SSH service in case it has been enabled
by mistake

Go to *System Settings | Advanced | Init/Shutdown Scripts | Add*
* *Description*: **Stop SSH at startup**
* *Type*: **Command**
* *Command*: **/usr/bin/systemctl stop ssh**
* *When*: **Post Init**
* [x] Enabled
* *Timeout*: **10**
* *SAVE*

#### Stop SSH service at midnight
To avoid the SSH service stays enabled forever, stop it automatically
at midnight

Go to *System Settings | Advanded | Cron Job | Add*
* *Description*: **stop ssh at midnight**
* *Command*: **/usr/bin/systemctl stop ssh**
* *Run as user*: **root**
* *Schedule*: **daily (0 0 * * *) at 00:00 (12:AM)**
* [X] hide standard output
* [ ] hide standard error
* [x] Enabled
* SAVE

### Disable Web User Interface for normal operations

#### Stop WebUI on boot

Go to *System Settings | Advanced | Init/Shutdown Scripts | Add*
* *Description*: **Stop webUI at startup**
* *Type*: **Command**
* *Command*: **/usr/bin/systemctl stop nginx**
* *When*: **Post Init**
* [x] Enabled
* *Timeout*: **10**
* *SAVE*

#### Stop WebUI at midnight
To avoid the WebUI stays enabled forever, stop it automatically
at midnight

Go to *System Settings | Advanded | Cron Job | Add*
* *Description*: **stop webUI at midnight**
* *Command*: **/usr/bin/systemctl stop nginx**
* *Run as user*: **root**
* *Schedule*: **daily (0 0 * * *) at 00:00 (12:AM)**
* [X] hide standard output
* [ ] hide standard error
* [x] Enabled
* SAVE


### Change the message of the day

Go to *System Settings | Advanced | Console | Configure*
* MOTD Banner: **Hardened repository without remote management, to enable temporary the web interface type "systemctl start nginx"**
* *SAVE*

## Backup the server configuration
Go to *System Settings | General | Manage Configuration*
* *DOWNLOAD FILE*

## Test the setup

Reboot the server to check that the web interface is disabled when the
computer boots


## Daily management
You can temporary enable the web interface to change the configuration

### Enable the web interface
Connect to the console and type:
```
systemctl start nginx
```

{{< hint type=note >}}
If you forgot to stop the webUI when you have finished your work,
the cron job will do if for you at midnight
{{< /hint >}}


### Disable the web interface
To immediately disable the web interface connect to the console and type:
```
systemctl stop nginx
```


## Recover data after an attack
If your Veeam backup files have been altered it means that the
password to access the SAMBA share has been compromised, so you have
to change it immediately.


### Change the password for the veeam account
Go to *Credentials | Local Users | veeam*
  * Unroll the options, click **EDIT**
  * Change *Password*
  * *SAVE*


### Lock the snapshot to preserve the data

It may take few day to audit your system after an attack, therefore it
is a good idea to lock all snapshots to avoid they are automatically
deleted when they reached their end of life.

Run the following command in the shell
```
for s in `zfs list -r -t snap -H -o name tank1/veeam`; do zfs hold LOCKED $s ; done
```

### Clone the healthy snapshot

Go to *Storage | Snapshots*
* Pick the healthy snapshot
* Unroll the option
* Click *CLONE TO NEW DATASET*
  * *Name*: **tank1/veeam-snap-clone**
  * **SAVE**


## Create a new Samba Share to export the cloned dataset

* Use the above instruction to share **tank1/veeam-snap-clone** with SAMBA.
* Reinstall Veeam on a new server
* Connect to the new SAMBA share
* Restore your data.


{{< hint type=note >}}
* The guide for a hardened repository is finished
* Enjoy your hardened repository, and sleep more peacefully at night.
{{< /hint >}}
