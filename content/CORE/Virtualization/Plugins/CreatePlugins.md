---
title: "Create a Plugin for TrueNAS Core"
description: "How to create a community plugin for TrueNAS Core."
---

Plugins are a technology for easily and securely deploying 3rd party applications directly on TrueNAS storage systems.
The web interface allows users to deploy, start, stop, and update applications, along with configuration tasks such as assigning storage to them.
Plugins are popular for content, security, development, collaboration, and backup applications for home and business use.
TrueNAS Core and TrueNAS Enterprise both support plugins, with TrueNAS Enterpise adding High Availability (HA) for business use.

Jails are the basis of plugins. Jails are FreeBSD’s container technology and are highly efficient in their use of resources, are secure, and provide flexible network infrastructure to applications.
`iocage` is the FreeBSD Jail container management framework in TrueNAS.

This tutorial will walk through the creation of a [SABnzbd](https://sabnzbd.org/) newsreader plugin using iocage.
Each of the most popular TrueNAS plugins such as Plex Media Server, NextCloud, and SyncThing begin as FreeBSD ports: [multimedia/plexmediaserver/](https://www.freshports.org/multimedia/plexmediaserver/), [deskutils/nextcloudclient/](https://www.freshports.org/deskutils/nextcloudclient/), and [net/syncthing/](https://www.freshports.org/net/syncthing/) respectively.
These can each be installed on a FreeBSD system with the `pkg` package manager.
For example, `pkg install plexmediaserver` and configure the application manually.

A plugin adds metadata that provides an installation source, reasonable defaults, and user interface elements such as an icon.
The components for the sabnzbd plugin are:

- <file>README.md</file>: A popular convention for a file in markdown format for describing the project.

- <file>sabnzbd.json</file>: The JSON “Artifact” file containing various plugin properties including an inventory of all other metadata components which may be in the same or a remote repo.

- <file>overlay/</file>: An optional directory containing the files to be copied into the Jail.

- <file>ui.json</file>: A file containing the plugin management interface URL and port number.

- <file>settings.json</file>: An optional JSON file that contains variables used during plugin startup and for its configuration.

- <file>sabnzbd.png</file>: A <file>.png</file> image such as <file>sabnzbd.png</file> that will appear in the TrueNAS plugins Index. It is used as the icon.

- <file>post_install.sh</file>: A shell script ran after jail creation to perform necessary configuration steps. It runs only once.

## Requirements

TrueNAS provides everything necessary for Plugin development but a FreeBSD system is also a good choice. The requirements are:

- A TrueNAS or FreeBSD system running `iocage`.

- An internet connection and at least *1 GB* of available disk space.

- A publically-accessible Git repo, self-hosted or on a service like GitHub, Gitia or GitLab, or you can run GitLab as its own plugin.

- A text editor such as *vi*, *ee*, or *nano*, all of which are available in TrueNAS.

- Basic knowledge of [FreeBSD](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/) and shell scripting.

## Creating Each Component

> *//* and *#* comments are not supported in JSON. Copy any examples from the files in the [Git repo](https://github.com/ix-plugin-hub) in “raw” mode.

<file>sabnzbd.json</file> (artifact file)
```json
{
  "name": "sabnzbd",                //The name of the Plugin and resulting Jail
  "plugin_schema": "2",             //The Plugin schema version
  "release": "11.3-RELEASE",        //FreeBSD version (not significantly newer than host)
  "artifact": "https://github.com/ConorBeh/iocage-plugin-sabnzbd.git",      //The Git repo containing the Plugin
  "properties": {                   //Jail properties that can be overridden by the user
    "nat": 1,
    "nat_forwards": "tcp(8080:8080)"
  },
  "pkgs": [                 //FreeBSD packages to be installed, one per line
    "sabnzbdplus",
  ],
  "packagesite": "http://pkg.FreeBSD.org/FreeBSD:11:amd64/latest",          //The package site, latest, quarterly, or self-hosted
  "fingerprints": {
    "iocage-plugins": [
      {
        "function": "sha256",
        "fingerprint": "b0170035af3acc5f3f3ae1859dc717101b4e6c1d0a794ad554928ca0cbb2f438"       //The checksum of the FreeBSD port
      }
    ]
  },
  "revision": "0"       //Internal version number
}
```

### The `artifact` File Properties

These are commonly-used properties specified in the artifact file.
Any supported [iocage property](https://www.freebsd.org/cgi/man.cgi?query=iocage&apropos=0&sektion=8&manpath=FreeBSD+11.3-RELEASE+and+Ports&arch=default&format=html) can be specified.
Here are a few:

- `nat`: Enables Network Address Translation to utilize the host’s IP address.

- `nat_forwards`: Required when NAT is enabled. Syntax: `< protocol >` ( `< jailport >:< hostport >` )

- `dhcp`: Enables DHCP on the jail to allow it to automatically obtain an IP address.

- `allow_tun`: Allows the creation of a tun network device inside the jail, required for VPN connections.

- `allow_raw_sockets`: Allows the jail to create raw sockets.

### The `artifact repository` Options

The official FreeBSD repository provides *latest* and *quarterly* branches.
The *latest* branch contains binary packages that are updated immediately, while the *quarterly* branch binaries are only updated every quarter, and are the default for FreeBSD releases.
The fingerprint remains the same for all official FreeBSD repositories.
If custom port build options are required, the preferred solution is to set up a custom [Poudriere](https://www.freebsd.org/doc/handbook/ports-poudriere.html) build server.

### The <file>overlay/</file> Directory

The <file>overlay/</file> is a directory of files that are copied into the jail after creation and before the execution of <file>post_install.sh</file>.
The layout of these files should follow the same paths as they should have in the root filesystem of the jail.
For example, a file placed in <file>/overlay/usr/local/www/lighttpd/</file> inside the Git repo will be placed in <file>/usr/local/www/lighttpd</file> in the jail.
This is very useful for providing pre-made configuration files, additional scripts, or even binaries that may not be available in the pkg repository.

### The <file>ui.json</file> file

A small JSON file containing the address of the WebUI and port.
Use the variable `%%IP%%` to automatically display the correct IP address.
Make sure to include any extra components in the URL following the domain name or IP address, for example <file>/admin</file> or <file>/web/index</file>.

### The <file>settings.json</file> file

A JSON file that is used when working with generated or user-specified data such as passwords or database names.
These variables can be used in <file>post_install.sh</file>.
In addition to these variables the `servicerestart` command must also be set.
This is the command that is run when a setting is changed or the jail is restarted, such as restarting a web server.

### The <file>sabnzbd.png</file> Icon file

A link to a <file>.png</file> file that will be displayed in the TrueNAS plugins Index.
The image requires a transparent background and should be 128 pixel by 128 pixel square in size to produce quality results when automatically resized.

### The <file>post_install.sh</file> script

A POSIX shell script that leverages all the other files to automate installation of the Plugin.
In simple Plugins, it might only contain a few lines that enable and start a few services.
It is important to note that iocage executes the file all at once, not line by line.
Remember to make the file executable before uploading it to the Git repository.

To make <file>post_install.sh</file> executable, run `chmod +x post_install.sh`.

Common post-installation steps include:

- Setting file and directory permissions
- Moving, copying, and editing configuration files
- Generating random passwords
- Adding a user and/or group
- Creating a database

### The `/root/PLUGIN_INFO` file

A text file that stores easily accessible information which can be recalled again from the web interface by clicking **Post Install Notes**.
Information can be entered into this file using <code>echo <i>information/notes</i> >> /root/PLUGIN_INFO</code> in <file>post_install.sh</file>, where *information/notes* is the relevant information about the plugin.

## Git Repo Initialization

Create and initialize a Git repository and `README` for the plugin with a name following the naming schema <code>iocage-plugin-<i>pluginName</i></code>.
For example, `iocage-plugin-sabnzbd` is the name of the Github repo in this example.

Put all the necessary files and directories in the newly created artifact repo.
The necessary files are listed above.
Next, open a pull request to the [plugin hub index](https://github.com/ix-plugin-hub/iocage-plugin-index) that adds the artifact file, icon, and entry into the [`INDEX`](https://github.com/ix-plugin-hub/iocage-plugin-index/blob/master/INDEX) file.
Remember to put a link to your newly created artifact repo in the comments of the pull request.
This way a moderator can fork your repo and it can be made available in the community list of plugins.

For guides on how to use Github, see [Github Guides](https://guides.github.com/).