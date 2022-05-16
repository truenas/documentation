---
title: "Custom Plugins"
weight: 20
Aliases: /core/applications/plugins/createplugin/
---

{{< toc >}}

Plugins are a technology for easily and securely deploying 3rd party applications directly on TrueNAS storage systems.
The web interface allows users to deploy, start, stop, and update applications, along with configuration tasks such as assigning storage to them.
Plugins are popular for content, security, development, collaboration, and backup applications for home and business use.

{{< hint info >}}
{{< include file="static/includes/General/FeatureSupport.md.part" markdown="true" >}}
{{< /hint >}}

{{< expand "Plugin Technology" "v" >}}
[Jails](https://docs.freebsd.org/en/books/handbook/jails/) form the core of TrueNAS plugins.
Jails are the FreeBSD container technology and are:
* resource efficient
* secure
* flexible with networking infrastructure

Additionally, TrueNAS integrates the [iocage](https://iocage.io/) application for its jail container management framework.

Each of the most popular TrueNAS plugins such as Plex Media Server, NextCloud, and SyncThing begin as FreeBSD ports: [multimedia/plexmediaserver/](https://www.freshports.org/multimedia/plexmediaserver/), [deskutils/nextcloudclient/](https://www.freshports.org/deskutils/nextcloudclient/), and [net/syncthing/](https://www.freshports.org/net/syncthing/) respectively.
These install to a FreeBSD system using the command `pkg` package manager.
For example, FreeBSD uses command `pkg install plexmediaserver` and then configures the application manually.
{{< /expand >}}

This tutorial guides you through creating a custom plugin using the [SABnzbd](https://sabnzbd.org/) newsreader plugin as an example.
A plugin adds metadata that provides an installation source, reasonable defaults, and user interface elements such as an icon.
The components for the sabnzbd plugin are:

* <file>README.md</file>: A popular convention for a file in markdown format for describing the project.
* <file>sabnzbd.json</file>: The JSON artifact file containing various plugin properties including an inventory of all other metadata components which might be in the same or a remote repository.
* <file>overlay/</file>: An optional directory containing the files to copy into the Jail.
* <file>ui.json</file>: A file containing the plugin management interface URL and port number.
* <file>settings.json</file>: An optional JSON file that contains variables used during plugin startup and for its configuration.
* <file>sabnzbd.png</file>: A <file>.png</file> image such as <file>sabnzbd.png</file> that displays in the TrueNAS plugins Index. It is used as the icon.
* <file>post_install.sh</file>: A shell script to run after jail creation to perform necessary configuration steps. It runs only once.

## Requirements

TrueNAS provides everything necessary for custom plugin development, but a FreeBSD system is also a good choice. The requirements are:

* A TrueNAS or FreeBSD system running iocage (`iocage`).
* An internet connection and at least 1 GiB of available disk space.
* A publicly-accessible git repository (`git`), self-hosted or on a service like [GitHub](https://github.com/), [Gitea](https://gitea.io/en-us/) or [GitLab](https://about.gitlab.com/). You can run GitLab as its own plugin.
* A text editor such as vi, ee, or nano, all of which are available in TrueNAS.
* Basic knowledge of [FreeBSD](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/) and shell scripting.

## Creating Each Component

{{< hint warning >}}
`//` and `#` comments are not supported in JSON.
Copy any examples from the files in the [Git repository](https://github.com/ix-plugin-hub) using raw mode.
{{< /hint >}}

## Custom Plugin Files
{{< expand "Artifact File" "v" >}}
<file>sabnzbd.json</file> (artifact file)
```
{
  "name": "sabnzbd",                //The name of the Plugin and resulting Jail
  "plugin_schema": "2",             //The Plugin schema version
  "release": "11.3-RELEASE",        //FreeBSD version (not significantly newer than host)
  "artifact": "https://github.com/ConorBeh/iocage-plugin-sabnzbd.git",      //The Git repository containing the Plugin
  "properties": {                   //Jail properties that can be overridden by the user
    "nat": 1,
    "nat_forwards": "tcp(8080:8080)"
  },
  "pkgs": [                 //FreeBSD packages to be installed, one per line
    "sabnzbdplus",
  ],
  "packagesite": "https://pkg.FreeBSD.org/FreeBSD:11:amd64/latest",          //The package site, latest, quarterly, or self-hosted
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

### Artifact File Properties

These are commonly-used properties specified in the artifact file.
You can specify any supported [iocage property](https://www.freebsd.org/cgi/man.cgi?query=iocage&apropos=0&sektion=8&manpath=FreeBSD+11.3-RELEASE+and+Ports&arch=default&format=html).
Here are a few:

* `nat`: Enables NAT to utilize the host IP address.
* `nat_forwards`: Required when NAT is enabled. Syntax: `< protocol >` ( `< jailport >:< hostport >` )
* `dhcp`: Enables DHCP on the jail to allow it to automatically obtain an IP address.
* `allow_tun`: Allows the creation of a tun network device inside the jail, required for VPN connections.
* `allow_raw_sockets`: Allows the jail to create raw sockets.

### Artifact Repository Options

The official FreeBSD repository provides *latest* and *quarterly* branches.
The *latest* branch contains binary packages that are updated immediately, while the *quarterly* branch binaries are only updated every quarter, and are the default for FreeBSD releases.
The fingerprint remains the same for all official FreeBSD repositories.
If custom port build options are required, the preferred solution is to set up a custom [Poudriere](https://www.freebsd.org/doc/handbook/ports-poudriere.html) build server.
{{< /expand >}}
{{< expand "overlay/ File" "v" >}}

The <file>overlay/</file> is a directory of files copied into the jail after creation and before the execution of <file>post_install.sh</file>.
The layout of these files follows the same paths as in the root jail file system.
For example, a file placed in <file>/overlay/usr/local/www/lighttpd/</file> inside the git repository goes into <file>/usr/local/www/lighttpd</file> in the jail.
This is very useful for providing pre-made configuration files, additional scripts, or even binaries that might not be available in the pkg repository.
{{< /expand >}}
{{< expand "ui.json File" "v" >}}

This is a small JSON file containing the address of the WebUI and port.
Use the variable `%%IP%%` to automatically display the correct IP address.
Make sure to include any extra components in the URL following the domain name or IP address, for example <file>/admin</file> or <file>/web/index</file>.
{{< /expand >}}
{{< expand "settings.json File" "v" >}}

A JSON file that is used when working with generated or user-specified data such as passwords or database names.
You can use these variables in <file>post_install.sh</file>.
In addition to these variables, you must also set the `servicerestart` command.
This command runs when a setting changes or the jail restarts, like a web server restart.
{{< /expand >}}
{{< expand "sabnzbd.png (Icon File)" "v" >}}

A link to a <file>.png</file> file to display in the TrueNAS Plugins Index.
The image requires a transparent background and must be 128 pixel by 128 pixel square in size to produce quality results when resized.
{{< /expand>}}
{{< expand "post_install.sh File" "v" >}}

A POSIX shell script that leverages all other files to automate plugin installation.
Simple plugins typically only have a few lines in this file, to enable and start a few services.
Note that iocage executes the file contents simultaneously, not line by line.
Remember to make the file executable before uploading it to the Git repository.

To make the <file>post_install.sh</file> executable, enter command `chmod +x post_install.sh`.

Common post-installation steps include:

* Setting file and directory permissions
* Moving, copying, and editing configuration files
* Generating random passwords
* Adding a user and/or group
* Creating a database
{{< /expand >}}
{{< expand "/root/PLUGIN_INFO File" "v" >}}

A text file with easily accessible information that clicking **Post Install Notes** can recall again from the web interface.
Inter information into this file using command `echo {information/notes} >> /root/PLUGIN_INFO` in <file>post_install.sh</file>, where *{information/notes}* is the relevant information about the plugin.
{{< /expand >}}

## Git Repository Initialization

Create and initialize a git repository and <file>README</file> for the plugin.
Use this naming schema `iocage-plugin-{PLUGIN_NAME}`, where *{PLUGIN_NAME}* is the name of the plugin.
For example, iocage-plugin-sabnzbd is the name of the Github repository in this example.

Put all the necessary files and directories in the newly created artifact repository.
The necessary files are listed above.
Next, open a pull request to the [plugin hub index](https://github.com/ix-plugin-hub/iocage-plugin-index) that adds the artifact file, icon, and entry into the [<file>INDEX</file>](https://github.com/ix-plugin-hub/iocage-plugin-index/blob/master/INDEX) file.
Remember to put a link to your newly created artifact repository in the comments of the pull request.
This way a moderator can fork your repository and can make available in the community list of plugins.

For guides on how to use Github, see [Github Guides](https://guides.github.com/).

## Additional Information
For information on Plugins and Jails screens and how to add or manage jails see:

[Plugins Screens]({{< relref "/CORE/UIReference/JailsPluginsVMs/Plugins/PluginsScreens.md" >}})

[Jails Screens]({{< relref "/CORE/UIReference/JailsPluginsVMs/Jails/JailsScreens.md" >}})

[Creating Jails]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Jails/CreatingJails.md" >}})

[Managing Plugins]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Plugins/ManagingPlugins.md" >}})
