---
title: "General Settings"
weight: 10
---

TrueNAS has numerous settings contained inside the **System > General** and **System > Advanced** screens.
These allow a wide range of system customization, from changing the web interface address, localization options, and data collection to SED, console, and storage options.

## General

**System > General** contains options for configuring the web interface and other basic system settings.

![System General](/images/CORE/12.0/SystemGeneral.png "System General")
<br><br>

| Setting                       | Value          | Description                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI SSL Certificate           | drop-down menu | The system uses a self-signed certificate to enable encrypted web interface connections. To change the default certificate, select a different created or imported certificate.                                                                                                                                                                                    |
| Web Interface IPv4 Address    | drop-down menu | Choose recent IP addresses to limit the usage when accessing the web interface. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable.                                                                                                                                  |
| Web Interface IPv6 Address    | drop-down menu | Choose recent IPv6 addresses to limit the usage when accessing the web interface. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable.                                                                                                                                |
| Web Interface HTTP Port       | integer        | Allow configuring a non-standard port for accessing the web interface over HTTP. Changing this setting might require changing a [Firefox configuration setting](https://www.redbrick.dcu.ie/~d_fens/articles/Firefox:_This_Address_is_Restricted).                                                                                                                                                                                                     |
| Web Interface HTTPS Port      | integer        | Allow configuring a non-standard port to access the web interface over HTTPS.                                                                                                                                                                                                                                                                                      |
| HTTPS Protocols | drop-down menu | Choose which HTTPS protocols to allow. |
| Web Interface HTTP -> HTTPS Redirect | checkbox       | Redirect HTTP connections to HTTPS. A `GUI SSL Certificate` is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the TrueNAS® web interface for the first time, the browser continues to use HTTPS and renews this setting every year. |
| Language                      | combo box      | Select a language from the drop-down menu. The list can be sorted by `Name` or [Language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). View the translated status of a language in the [webui GitHub repository](https://github.com/freenas/webui/tree/master/src/assets/i18n).                                                                                                                                                                                               |
| Date Format                   | drop-down menu | Select how the Day, Month, and Year are displayed. |
| Console Keyboard Map          | drop-down menu | Select a keyboard layout.                                                                                                                                                                                                                                                                                                                                          |
| Timezone                      | drop-down menu | Select a timezone.                                                                                                                                                                                                                                                                                                                                                 |
| Time Format                   | drop-down menu | Choose how Hours, Minutes, and Seconds are displayed. |
| Crash reporting               | checkbox       | Send failed HTTP request data which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents to iXsystems.                                                                                                                                                                                                      |
| Usage Collection              | checkbox       | Enable sending anonymous usage statistics to iXsystems.                                                                                                                                                                                                                                                                                                            |

After making any changes, click **SAVE**.
Changes to any of the web interface fields can interrupt web interface connectivity while the new settings are applied.

This screen also contains these buttons:

**SAVE CONFIG**: save a backup copy of the current configuration database in the format hostname-version-architecture to the computer accessing the web interface. Saving the configuration after making any configuration changes is highly recommended. TrueNAS® automatically backs up the configuration database to the system dataset every morning at 3:45. However, this backup does not occur if the system is shut down at that time. If the system dataset is stored on the boot pool and the boot pool becomes unavailable, the backup will also not be available. The location of the system dataset can be viewed or set using System ➞ System Dataset.

{{< hint info >}}
SSH keys are not stored in the configuration database and must be backed up separately. System host keys are files with names beginning with `ssh_host_` in `/usr/local/etc/ssh/`. The root user keys are stored in `/root/.ssh`.
{{< /hint >}}

There are two types of passwords. User account passwords for the base operating system are stored as hashed values, do not need to be encrypted to be secure, and are saved in the system configuration backup. Other passwords, like iSCSI CHAP passwords, Active Directory bind credentials, and cloud credentials are stored in an encrypted form to prevent them from being visible as plain text in the saved system configuration. The key or seed for this encryption is normally stored only on the operating system device. When **Save Config** is chosen, a dialog gives two options. *Export Password Secret Seed* includes passwords in the configuration file which allows the configuration file to be restored to a different operating system device where the decryption seed is not already present. Configuration backups containing the seed must be physically secured to prevent decryption of passwords and unauthorized access.

{{< hint warning >}}
The **Export Password Secret Seed** option is off by default and should only be used when making a configuration backup that will be stored securely. After moving a configuration to new hardware, media containing a configuration backup with a decryption seed should be securely erased before reuse.
{{< /hint >}}

**Export Pool Encryption Keys** includes the encryption keys of encrypted pools in the configuration file. The encryption keys are restored if the configuration file is uploaded to a system with **UPLOAD CONFIG**.

**UPLOAD CONFIG**: allows browsing to the location of a previously saved configuration file to restore that configuration.

**RESET CONFIG**: reset the configuration database to the default base version. This does not delete user SSH keys or any other data stored in a user home directory. Since configuration changes stored in the configuration database are erased, this option is useful when a mistake has been made or to return a test system to the original configuration.
