---
Title: "UI Fields Reference Guide"
linkTitle: "Reference Information for the Fields in the Web interface"
weight: 1
tags: ["reference"]
---



### Accounts

#### Groups / Add

|-|-|
| GID                  | The Group ID (GID) is a unique number used to identify a Unix group. Enter a number above 1000 for a group with user accounts. Groups used by a service must have an ID that matches the default port number used by the service. |
| Name                 | Group name cannot begin with a hyphen (-) or contain a space, tab, or these characters: , : + & # % ^ ( ) ! @ ~ * ? < > =. $ can only be used as the last character of the username. |
| Permit Sudo          | Allow group members to use [sudo](https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports). Group members are prompted for their password when using sudo. |
| Samba Authentication | Set to allow group to be used for Samba permissions and authentication. |
| Allow Duplicate GIDs | Not recommended. Allow more than one group to have the same group ID. |

#### Users / Add


|-|-|
| Full Name | Spaces are allowed. |
| Username  | Usernames can be up to 16 characters long. When using NIS or other legacy software with limited username lengths, keep usernames to eight characters or less for compatibility. Usernames cannot begin with a hyphen (-) or contain a space, tab, or these characters: , : + & # % ^ ( ) ! @ ~ * ? < > =. $ can only be used as the last character of the username. |
| Email     | Enter the email address of the new user. |
| Password  | Required unless Enable password login is No. Passwords cannot contain a ?.      |  


User ID and Groups

|-|-|
| User ID           | User accounts have an ID greater than 1000 and system accounts have an ID equal to the default port number used by the service. |
| New Primary Group | Set to create a new primary group with the same name as the user. Unset to select an existing group for the user.               |
| Primary Group     | New users are not given su permissions if wheel is their primary group.                                                         |
| Auxilliary Group  | Add this user to additional groups.                                                                                             |                                                                                             

Directories and Permissions 

|-|-|
| Home Directory             | Choose a path to the user's home directory. If the directory exists and matches the username, it is set as the user's home directory. When the path does not end with a subdirectory matching the username, a new subdirectory is created. The full path to the user's home directory is shown here when editing a user. |
| Home Directory Permissions | Sets default Unix permissions of the user home directory. This is read-only for built-in users. |

Authentication
|-|-|
| SSH Public Key       | Enter or paste the public SSH key of the user for any key-based authentication. Do not paste the private key. |
| Disable Password     | Yes: Disables the Password fields and removes the password from the account. The account cannot use password-based logins for services. For example, disabling the password prevents using account credentials to log in to an SMB share or open an SSH session on the system. The Lock User and Permit Sudo options are also removed. No: Requires adding a Password to the account. The account can use the saved Password to authenticate with password-based services. |
| Shell                | Select the shell to use for local and SSH logins. |
| Lock User            | Prevent the user from logging in or using password-based services until this option is unset. Locking an account is only possible when **Disable Password** is *No* and a **Password** has been created for the account. |
| Permit Sudo          | Allow group members to use [sudo](https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports). Group members are prompted for their password when using sudo. |
| Microsoft Account    | Set to allow additional username authentication methods when the user is connecting from a Windows 8 or newer operating system. |
| Samba Authentication | Set to allow user to authenticate to Samba shares. |


### System

#### General 

|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI SSL Certificate                  | The system uses a self-signed certificate to enable encrypted web interface connections. To change the default certificate, select a different certificate that was created or imported in the **Certificates** menu.                                                                                                                                                                                                     |
| Web Interface IPv4 Address           | Choose a recent IP address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable.                                                                                                                                                                                    |
| Web Interface IPv6 Address           | Choose a recent IPv6 address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable.                                                                                                                                                                                  |
| Web Interface HTTP Port              | Allow configuring a non-standard port to access the GUI over HTTP. Changing this setting might require changing a [Firefox configuration setting](https://www.redbrick.dcu.ie/~d_fens/articles/Firefox:_This_Address_is_Restricted).                                                                                                                                                                                      |
| Web Interface HTTPS Port             | Allow configuring a non-standard port to access the GUI over HTTPS.                                                                                                                                                                                                                                                                                                                                                       |
| HTTPS Protocols                      | Cryptographic protocols for securing client/server connections. Select which [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS can use for connection security.                                                                                                                                                                                                   |
| Web Interface HTTP -> HTTPS Redirect | Redirect HTTP connections to HTTPS. A GUI SSL Certificate is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. |


Localization
|----------------------|--------------------------------------------|
| Language             | Select a language from the drop-down menu. |
| Date Format          | Choose a date format.                      |
| Console Keyboard Map | Select a keyboard layout.                  |
| TimeZone             | Select a time zone.                        |
| Time Format          | Choose a time format.                      |

Other Options

|-|-|
| Crash reporting      | Send failed HTTP request data which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents to iXsystems. |
| Usage collection     | Enable sending anonymous usage statistics to iXsystems.                          

#### NTP Servers	Add/Edit

|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Address  | Enter the hostname or IP address of the NTP server.                                                                                                         |
| Burst    | Recommended when Max. Poll is greater than 10. Only use on personal NTP servers or those under direct control. Do not enable when using public NTP servers. |
| IBurst   | Speeds up the initial synchronization (seconds instead of minutes).                                                                                         |
| Prefer   | Should only be used for highly accurate NTP servers such as those with time monitoring hardware.                                                            |
| Min Poll | The minimum polling interval, in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is 6, minimum value is 4.                   |
| Max Poll | The maximum polling interval, in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is 10, maximum value is 17.            |
| Force    | Forces the addition of the NTP server, even if it is currently unreachable.                                                                                 |

#### Boot

Add
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name     | Boot environment name. Alphanumeric characters, dashes (-), underscores (_), and periods (.) are allowed.                                                   |

Clone
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Name     | Boot environment name. Alphanumeric characters, dashes (-), underscores (_), and periods (.) are allowed.                                        |
| Source   | Boot environment to be cloned.                                                                                                                   |



#### Advanced

Console
|-|-|
| Show Text Console without Password Prompt | Unset to add a login prompt to the system before the console menu is shown. |
| Enable Serial Console  | Do not set this if the Serial Port is disabled. |
| MOTD Banner | The message to show when a user logs in with SSH. |



Storage
|-|-|
| Swap Size in GiB *                          | By default, all data disks are created with the amount of swap specified. Changing the value does not affect the amount of swap on existing disks, only disks added after the change. Does not affect log or cache devices as they are created without swap. Setting to 0 disables swap creation completely. **STRONGLY DISCOURAGED** |
| LOG (Write Cache) Overprovision Size in GiB | Overprovisioning a ZFS Log SSD can increase its performance and lifespan by distributing writes and erases across more drive flash blocks. Defining a number of GiB here overprovisions ZFS Log disks during pool creation or extension. Examples: 50 GiB, 10g, 5GB |


GUI
|-|-|
| Show Console Messages | Display console messages in real time at the bottom of the browser. |
| Show Advanced Fields by Default | Set to always show advanced fields, when available. |


Kernel
|-|-|
| Show Console Messages  | Display console messages in real time at the bottom of the browser.  |
| Show Advanced Fields by Default | Set to always show advanced fields, when available.  |


Self-Encrypting Drive
|-|-|
| ATA Security User | User passed to camcontrol security -u to unlock SEDs |
| SED Password  | Global password to unlock SEDs. |


Syslog
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use FQDN for Logging | Set to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames.                                                                                                                                  |
| Syslog Level         | When Syslog Server is defined, only logs matching this level are sent.                                                                                                                                                                               |
| Syslog Server        | Remote syslog server DNS hostname or IP address. Nonstandard port numbers can be used by adding a colon and the port number to the hostname, like `mysyslogserver:1928`. Log entries are written to local logs and sent to the remote syslog server. |
| Syslog Transport     | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Choosing Transport Layer Security (TLS) also requires selecting a preconfigured system Certificate.                                           |


#### Email

General Options
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| From Email       | The user account Email address to use for the envelope From email address. The user account Email in Accounts > Users > Edit must be configured first.                                                                                               |
| From Name        | The friendly name to show in front of the sending email address. Example: Storage System 01<it@example.com>                                                                                                                                          |


Authentication 
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SMTP             | Enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using PLAIN SASL. Requires a valid Username and Password.                                                                                                                      |


Access (if SMTP)  == True
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Outgoing Mail Server | Hostname or IP address of SMTP server to use for sending this email.                                                                                            |
| Mail Server Port     | SMTP port number. Typically 25,465 (secure SMTP), or 587 (submission).                                                                                          |
| Security             | [Email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html) type. Choices are Plain (No Encryption), SSL (Implicit TLS), or TLS (STARTTLS). |
| Username Password    | Enter the username if the SMTP server requires authentication.Enter the password for the SMTP server. Only plain ASCII characters are accepted.                 |



#### System Dataset

Configure System Dataset
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System Dataset Pool | Select the pool to contain the system dataset.                                                                                                                  |
| Syslog Level        | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device.                                                    |


#### Reporting

General Options
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Report CPU usage in Percent     | When set, report CPU usage in percent instead of units of kernel time.                                                                                                                                                                                     |
| Graphite Separate Instances     | Enabling sends the plugin instance and type instance to Graphite as separate path components: host.cpu.0.cpu.idle.
Disabling sends the plugin and plugin instance as one path component and type and type instance as another component: host.cpu-0.cpu-idle.                                                                                                                 |
| Remote Graphite Server Hostname | Hostname or IP address of a remote [Graphite](http://graphiteapp.org/) server.                                                                                                                                                                             |
| Graph age in Months             | Maximum time a graph is stored in months (allowed values are 1-60). Changing this value causes the Confirm RRD Destroy dialog to appear. Changes do not take effect until the existing reporting database is destroyed.                                    |
| Number of Graph Points          | Number of points for each hourly, daily, weekly, monthly, or yearly graph (allowed values are 1-4096). Changing this value causes the Confirm RRD Destroy dialog to appear. Changes do not take effect until the existing reporting database is destroyed. |
| Force                           | Forces the addition of the NTP server, even if it is currently unreachable.                                                                                                                                                                                |



#### Alert Services / Add/Edit

Name and Type
|---------|--------------------------------------------------------------|
| Name    | Name of the new alert service.                               |
| Enabled | Unset to disable this service without deleting it.           |
| Type    | Choose an alert service to display options for that service. |
| Level   | Select the level of severity.                                |



Authentication Type
AWS
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AWS Region | Enter the [AWS account region](https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html).                                                             |
| ARN        | Topic [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) for publishing. Example: arn:aws:sns:us-west-2:111122223333:MyTopic. |
| Key ID     | Access Key ID for the linked AWS account.                                                                                                                           |
| Secret Key | Secret Access Key for the linked AWS account.                                                                                                                       |



Email
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Email Address | Enter a valid email address to receive alerts from this system.                                                                                                     |

InfluxDB
| Host     | Enter the [InfluxDB](https://docs.influxdata.com/influxdb/) hostname. |
|----------|-----------------------------------------------------------------------|
| Username | Username for this service.                                            |
| Password | Enter password.                                                       |
| Database | Name of the InfluxDB database.                                        |
| Series   | InfluxDB time series name for collected points.                       |




Mattermost
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Webhook URL | Enter or paste the [incoming webhook](https://docs.mattermost.com/developer/webhooks-incoming.html) URL associated with this service.                                                                                                                                                                                      |
| Username    | Mattermost username.                                                                                                                                                                                                                                                                                                       |
| Channel     | Name of the [channel](https://docs.mattermost.com/help/getting-started/organizing-conversations.html#managing-channels) to receive notifications. This overrides the default channel in the incoming webhook settings.                                                                                                     |
| Icon Url    | Icon file to use as the profile picture for new messages. Example: https://mattermost.org/wp-content/uploads/2016/04/icon.png. Requires configuring Mattermost to [override profile picture icons](https://docs.mattermost.com/administration/config-settings.html#enable-integrations-to-override-profile-picture-icons). |



OpsGenie
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Key  | Enter or paste the [API key](https://docs.opsgenie.com/v1.0/docs/api-integration). Find the API key by signing into the OpsGenie web interface and going to Integrations/Configured Integrations. Click the desired integration, Settings, and read the API Key field.                                                     |
| API URL  | Leave empty for default ([OpsGenie API](https://api.opsgenie.com/))                                                                                                                                                                                                                                                        |


Pager Duty
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Service Key | Enter or paste the "integration/service" key for this system to access the [PagerDuty API](https://v2.developer.pagerduty.com/v2/docs/events-api).                                                                                                                                                                         |
| Client Name | PagerDuty client name.                                                                                                                                                                                                                                                                                                     |


Slack
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Webhook URL | Paste the [incoming webhook](https://api.slack.com/incoming-webhooks) URL associated with this service.                                                                                                                                                                                                                    |

SNMP Trap
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hostname              | Hostname or IP address of the system to receive SNMP trap notifications.                                                                                                                                                                                                                                                                     |
| Port                  | UDP port number on the system receiving SNMP trap notifications. The default is 162.                                                                                                                                                                                                                                                         |
| SNMPv3 Security Model | Enable the SNMPv3 security model.                                                                                                                                                                                                                                                                                                            |
| SNMP Community        | Network community string. The community string acts like a user ID or password. A user with the correct community string has access to network information. The default is public. For more information, see [What is an SNMP Community String?](https://community.helpsystems.com/knowledge-base/intermapper/snmp/snmp-community-strings/). |



Victor Ops
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Key               | Enter or paste the [VictorOps API key](https://help.victorops.com/knowledge-base/api/).                                                                                                                                                                                                                                                      |
| Routing Key           | Enter or paste the [VictorOps routing key](https://portal.victorops.com/public/api-docs.html#/Routing32Keys).                                                                                                                                                                                                                                |


#### Alert Settings

|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Set Warning Level | Customizes the importance of the alert. Each level of importance has a different icon and color to express the level of importance.
Info, Notice, Warning, Error, Critical (Default), Alert, Emergency                                                                                                                                                                            |
| Set Frequency     | Adjust how often alert notifications are sent, use the Frequency drop-down. Setting the Frequency to NEVER prevents that alert from being added to alert notifications, but the alert can still show in the web interface if it is triggered. 
Immediately (Default), Hourly, Daily, Never                                                                                                                                                                                                   |


#### Cloud Credentials / Add

Name and Provider
|-|-|
| Name | Enter a name for the new credential. |
| Provider | Third-party Cloud service providers. Choose a provider to configure connection credentials. |


Amazon S3
|-|-|
| Access Key ID | Amazon Web Services Key ID. This is found on [Amazon AWS](https://aws.amazon.com/) by going through My account -> Security Credentials -> Access Keys (Access Key ID and Secret Access Key). Must be alphanumeric and between 5 and 20 characters. |
| Secret Access Key | Amazon Web Services password. If the Secret Access Key cannot be found or remembered, go to My Account -> Security Credentials -> Access Keys and create a new key pair. Must be alphanumeric and between 8 and 40 characters. |
| Maximum Upload Ports | Define the maximum number of chunks for a multipart upload. This can be useful if a service does not support the 10,000 chunk AWS S3 specification. |
| Authentication Advanced Options |  |
| Endpoint URL | [S3 API endpoint URL](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteEndpoints.html). When using AWS, the endpoint field can be empty to use the default endpoint for the region, and available buckets are automatically fetched. Refer to the AWS Documentation for a list of [Simple Storage Service Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints%20%20target=). |
| Region | [AWS resources in a geographic area](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html). Leave empty to automatically detect the correct public region for the bucket. Entering a private region name allows interacting with Amazon buckets created in that region. For example, enter us-gov-east-1 to discover buckets created in the eastern [AWS GovCloud](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/whatis.html) region. |
| Disable Endpoint Region | Skip automatic detection of the Endpoint URL region. Set this when configuring a custom Endpoint URL. |
| User Signature Version 2 | Force using [Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) to sign API requests. Set this when configuring a custom Endpoint URL. |



BackBlaze B2
|-|-|
| Key ID | Alphanumeric [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key ID. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the application keyID string to this field. |
| Application Key | [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) Application Key. To generate a new application key, log in to the Backblaze account, go to the App Keys page, and add a new application key. Copy the applicationKey string to this field. |

Box
|-|-|
| Access Token | A User Access Token for [Box](https://developer.box.com/). An [access token](https://developer.box.com/reference#token) enables Box to verify a request belongs to an authorized session. Example token: T9cE5asGnuyYCCqIZFoWjFHvNbvVqHjl. |

DropBox
|-|-|
| Access Token | Access Token for a Dropbox account. A [token must be generated](https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/) by the [Dropbox account](https://www.dropbox.com/) before adding it here. |

FTP
|-|-|
| Host | FTP Host to connect to. Example: ftp.example.com. |
| Port | FTP Port number. Leave blank to use the default port 21. |
| Username | A username on the FTP Host system. This user must already exist on the FTP Host. |
| Password | Password for the user account. |



Google Cloud Storage
|-|-|
| Preview JSON Service Account Key | Contents of the uploaded Service Account JSON file. |
| Choose File | Upload a Google [Service Account credential file](https://rclone.org/googlecloudstorage/#service-account-support). The file is created with the [Google Cloud Platform Console](https://console.cloud.google.com/apis/credentials). |

Google Drive
|-|-|
| Access Token | Token created with [Google Drive](https://developers.google.com/drive/api/v3/about-auth). Access Tokens expire periodically and must be refreshed. |
| Team Drive ID | Only needed when connecting to a Team Drive. The ID of the top level folder of the Team Drive. |

HTTP
|-|-|
| URL | HTTP host URL. |

Hubic
|-|-|
| Access Token | Access Token [generated by a Hubic account](https://api.hubic.com/sandbox/). |

Mega
|-|-|
| Username | [MEGA](https://mega.nz/) account username. |
| Password | MEGA account password. |

Microsoft Azure Blob Storage
|-|-|
| Account Name | [Microsoft Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account) account name. |
| Account Key | Base64 encoded key for Azure Account |

Microsoft One Drive
|-|-|
| Access Token | Microsoft Onedrive [Access Token](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/authentication). Log in to the Microsoft account to add an access token. |
| Drives List | Drives and IDs registered to the Microsoft account. Selecting a drive also fills the Drive ID field. |
| Drive Account Type | Type of Microsoft acount. Logging in to a Microsoft account automatically chooses the correct account type.  Options: Personal, Business, Document_Library |
| Drive ID | Unique drive identifier. Log in to a Microsoft account and choose a drive from the Drives List drop-down to add a valid ID. |

OpenStack Swift
|-|-|
| User Name | Openstack user name for login. This is the OS_USERNAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| API Key or Password | Openstack API key or password. This is the OS_PASSWORD from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Authentication URL | Authentication URL for the server. This is the OS_AUTH_URL from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Auth Version | AuthVersion - optional - set to (1,2,3) if your auth URL has no version ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Authentication Advanced Options |  |
| Tenant Name | This is the OS_TENANT_NAME from an [OpenStack credentials file](https://rclone.org/swift/#configuration-from-an-openstack-credentials-file). |
| Tenant ID | Tenant ID - optional for v1 auth, this or tenant required otherwise ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Auth Token | Auth Token from alternate authentication - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Endpoint Advanced Options |  |
| Region Name | Region name - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Storage URL | Storage URL - optional ([rclone documentation](https://rclone.org/swift/#standard-options)). |
| Endpoint Type | Endpoint type to choose from the service catalogue. Public is recommended, see the [rclone documentation](https://rclone.org/swift/#standard-options). |


pCloud
|-|-|
| Access Token | [pCloud Access Token](https://docs.pcloud.com/methods/intro/authentication.html). These tokens can expire and require extension. |
| Hostname | Enter the hostname to connect to. |

SFTP
|-|-|
| Host | SSH Host to connect to. |
| Port | SSH port number. Leave empty to use the default port 22. |
| Username | SSH Username. |
| Password | Password for the SSH Username account. |
| Private Key ID | Import the private key from an existing SSH keypair or select Generate New to create a new SSH key for this credential. |

WebDav
|-|-|
| URL | URL of the HTTP host to connect to. |
| WebDav Service | Name of the WebDAV site, service, or software being used. |
| Username | WebDAV account username. |
| Password | WebDAV account password. |


Yandex
|-|-|
| Access Token | Yandex [Access Token](https://tech.yandex.com/direct/doc/dg-v4/concepts/auth-token-docpage/). |



#### SSH Connection / Add

Name and Method
|-|-|
| Name | Name of this SSH connection. SSH connection names must be unique. |
| Setup Method | *Manual* requires configuring authentication on the remote system. This can include copying SSH keys and modifying the root user account on that system. |
|  | *Semi-automatic* only works when configuring an SSH connection with a remote TrueNAS system. This method uses the URL and login credentials of the remote system to connect and exchange SSH keys. |

Authentication
|-|-|
| TrueNAS URL | Hostname or IP address of the remote system. A valid URL scheme is required. Example: https://10.231.3.76 |
| Username | Username for logging in to the remote system. |
| Password | User account password for logging into the remote system. |
| Private Key | Choose a saved SSH Keypair or select Generate New to create a new keypair and use it for this connection. |

More Options
|-|-|
| Cipher | *Standard* is most secure, but has the greatest impact on connection speed. |
|  | *Fast* is less secure than Standard but can give reasonable transfer rates for devices with limited cryptographic speed. |
|  | *Disabled* removes all security in favor of maximizing connection speed. Disabling the security should only be used within a secure, trusted network. |
| Connect Timeout | Time (in seconds) before the system stops attempting to establish a connection with the remote system. |



#### SSH Keypairs / Add

|-|-|
| Name | A unique name to identify this keypair. Automatically generated keypairs are named after the object that generated the keypair with " Key" appended to the name. |
| Private Key | See Public key authentication in [SSH/Authentication](https://www.freebsd.org/cgi/man.cgi?query=ssh). |
| Public Key | See Public key authentication in [SSH/Authentication](https://www.freebsd.org/cgi/man.cgi?query=ssh). |

#### Tuneables / Add

|-|-|
| Variable | Enter the name of the loader, sysctl, or rc.conf variable to configure. loader tunables are used to specify parameters to pass to the kernel or load additional modules at boot time. rc.conf tunables are for enabling system services and daemons and only take effect after a reboot. sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately. |
| Value | Enter a value to use for the [loader](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/boot-introduction.html#boot-loader-commands), [sysctl](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/configtuning-sysctl.html), or [rc.conf](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/config-tuning.html) variable. |
| Tyoe | Creating or editing a sysctl immediately updates the Variable to the configured Value. A restart is required to apply loader or rc.conf tunables. Configured tunables remain in effect until deleted or Enabled is unset. |
| Description | Enter a description of the tunable. |
| Enabled | Enable this tunable. Unset to disable this tunable without deleting it. |

#### Update

|-|-|
| Check for Update Daily and Download if Availbale | Check the update server daily for any updates on the chosen train. Automatically download an update if one is available. Click APPLY PENDING UPDATE to install the downloaded update. |


#### Certificate Authorities / Add

Identifier and Type
|-|-|
| Name | Descriptive identifier for this certificate authority. |

| Type | Choose between Internal CA, Intermediate CA, and Import CA. An Internal CA functions like a publicly trusted CA to sign certificates for an internal network. They are not trusted outside the private network. An Intermediate CA lives between the root and end entity certificates and its main purpose is to define and authorize the types of certificates that can be requested from the root CA. Import CA allows an existing CA to be imported onto the system.  For more information see [What are Subordinate CAs and Why Would You Want Your Own?](https://www.globalsign.com/en/blog/what-is-an-intermediate-or-subordinate-certificate-authority) |
| Profiles | Predefined certificate extensions. Choose a profile that best matches your certificate usage scenario. |


Certificate Options
|-|-|
| RSA | See [Why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa) for more information about key types. |
| Key Length | The number of bits in the key used by the cryptographic algorithm. For security reasons, a minimum key length of 2048 is recommended. |
| Digest Algorithm | The cryptographic algorithm to use. The default SHA256 only needs to be changed if the organization requires a different algorithm. |
| Lifetime | The lifetime of the CA specified in days. |



Certificate Subject
|-|-|
| Country | Select the country of the organization. |
| State | Enter the state or province of the organization. |
| Locality | Enter the location of the organization. For example, the city. |
| Organization | Enter the name of the company or organization. |
| Organizational Unit | Organizational unit of the entity. |
| Email | Enter the email address of the person responsible for the CA. |
| Common Name | Enter the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) of the system. This name must be unique within a certificate chain. |
| Subject Alternate Names | Multi-domain support. Enter additional domains to secure. Separate domains by pressing Enter For example, if the primary domain is example.com, entering www.example.com secures both addresses. |

Basic Constraints
|-|-|
| Enabled | Activate this certificate extension. |

Authority Key Identifier
|-|-|
| Enabled | Activate this certificate extension. |

Extended Key Usage
|-|-|
| Enabled | Activate this certificate extension. |

Key Usage
|-|-|
| Enabled | Activate this certificate extension. |


#### ACME DNS / Add
Select Authenticator
|-|-|
| Name | Internal identifier for the authenticator. |
| Authenticator | Choose a DNS provider and configure any required authenticator attributes. |

Authenticator Attributes
|-|-|
| Access ID Key | Key generated by the Amazon Web Services account. See the [AWS Access Key documentation]https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for instructions to generate the key. |
| Secret Access Key | Key generated by the Amazon Web Services account. See the [AWS Access Key documentation]https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for instructions to generate the key. |

#### Support

|-|-|
| Username | Enter a valid username for the TrueNAS bug tracking system |
| Password | Enter the bug tracker account password. |
| Type | Select Bug when reporting an issue or Feature when requesting new functionality. |
| Category | This field remains empty until a valid Username and Password is entered. Choose the category that best describes the bug or feature being reported. |
| Attach Debug | Set to generate and attach to the new issue a report containing an overview of the system hardware, build string, and configuration. This can take several minutes. |
| Subject | Enter a descriptive title for the new issue. |
| Description | Enter a one to three paragraph summary of the issue. Describe the problem and provide any steps to replicate the issue. |
| Attach Screenshots | Select one or more screenshots that illustrate the problem. |

#### Two Factor Auth

User Settings
|-|-|
| One Time Passsword (OTP) Digits | The number of digits in the One-Time Password. The default value is 6, which is the length of the standard OTP from Google. Check the settings of your app or device before selecting this. |
| Interval | The lifespan (in seconds) of each One-Time Password. Default is 30 seconds. The minimum lifetime is 5 seconds. |
| Window | Use Window to extend the validity of passwords beyond the Interval setting. For example, a window setting of 1 means that one password before and after the current one is valid. leaving three valid passwords. Extending the window can be useful in high-latency situations. IMPORTANT: Two-factor authentication is time-based and requires that the system time is set correctly. |
| Enable Two-Factor Auth for SSH | Enable two-factor authentication for SSH access to the system. It is recommended to leave this DISABLED until after two-factor authentication is successfully tested with the UI. |


System Generated Settings
|-|-|
| Secret (Read Only) | The secret used to generate OTPs. The secret is produced by the system when Two-Factor Authentication is first activated. |
| Provisioning URI (includes Secret - Read Only) | The URI used to provision an OTP. The URI (which contains the secret) is encoded in a QR Code. To set up an OTP app like Google Authenticator, use the app to scan the QR code or enter the secret manually into the app. The URI is produced by the system when Two-Factor Authentication is first activated. |













