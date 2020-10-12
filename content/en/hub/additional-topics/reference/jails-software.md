---
title: "Jail Software Reference Guide"
linkTitle: "Installing Software in a Jail"
description: "Installing Software in a Jail"
tags: ["jails"]
---


### Installing Jail Software
A jail is created with no software aside from the core packages installed as part of the selected version of FreeBSD. To install more software, start the jail and click **>** SHELL.

<img src="/images/jail-shell-example.png" width='700px'>
<br><br>

### Installing FreeBSD Packages

The quickest and easiest way to install software inside the jail is to install a FreeBSD package. FreeBSD packages are precompiled and contain all the binaries and a list of dependencies required for the software to run on a FreeBSD system.

A huge amount of software has been ported to FreeBSD. Most of that software is available as packages. One way to find FreeBSD software is to use the search bar at [FreshPorts.org](https://www.freshports.org/.

After finding the name of the desired package, use the **pkg install** command to install it. For example, to install the audiotag package, use the command **pkg install audiotag**

When prompted, press **y** to complete the installation. Messages will show the download and installation status.

A successful installation can be confirmed by querying the package database:

```
pkg info -f audiotag
audiotag-0.19_1
Name:           audiotag
Version:        0.19_1
Installed on:   Fri Nov 21 10:10:34 PST 2014
Origin:         audio/audiotag
Architecture:   freebsd:9:x86:64
Prefix:         /usr/local
Categories:     multimedia audio
Licenses:       GPLv2
Maintainer:     ports@FreeBSD.org
WWW:            http://github.com/Daenyth/audiotag
Comment:        Command-line tool for mass tagging/renaming of audio files
Options:
  DOCS:         on
  FLAC:         on
  ID3:          on
  MP4:          on
  VORBIS:       on
Annotations:
  repo_type:    binary
  repository:   FreeBSD
Flat size:      62.8KiB
Description:   Audiotag is a command-line tool for mass tagging/renaming of audio files
               it supports the vorbis comment, id3 tags, and MP4 tags.
WWW:           http://github.com/Daenyth/audiotag
```

To show what was installed by the package:

```
pkg info -l audiotag
audiotag-0.19_1:
/usr/local/bin/audiotag
/usr/local/share/doc/audiotag/COPYING
/usr/local/share/doc/audiotag/ChangeLog
/usr/local/share/doc/audiotag/README
/usr/local/share/licenses/audiotag-0.19_1/GPLv2
/usr/local/share/licenses/audiotag-0.19_1/LICENSE
/usr/local/share/licenses/audiotag-0.19_1/catalog.mk
```

In FreeBSD, third-party software is always stored in `/usr/local` to differentiate it from the software that came with the operating system. Binaries are almost always located in a subdirectory called `bin` or `sbin` and configuration files in a subdirectory called `etc`.

### Compiling FreeBSD Ports

Compiling a port is another option. Compiling ports offer these advantages:

+ Not every port has an available package. This is usually due to licensing restrictions or known, unaddressed security vulnerabilities.
+ Sometimes the package is out-of-date and a feature is needed that only became available in the newer version.
+ Some ports provide compile options that are not available in the pre-compiled package. These options are used to add or remove features or options.

Compiling a port has these disadvantages:

+ It takes time. Depending upon the size of the application, the amount of dependencies, the speed of the CPU, the amount of RAM available, and the current load on the TrueNAS® system, the time needed can range from a few minutes to a few hours or even to a few days.

If the port does not provide any compile options, it saves time and preserves the TrueNAS® system resources to use the pkg install command instead.

The [FreshPorts.org](https://www.freshports.org/) listing shows whether a port has any configurable compile options.

<img src="/images/jails-audio-tag.png" width='700px'>
<br><br>

### Audiotag Port Information

Packages are built with default options. Ports let the user select options.

The Ports Collection must be installed in the jail before ports can be compiled. Inside the jail, use the **portsnap** utility. This command downloads the ports collection and extracts it to the `/usr/ports/` directory of the jail:

```
portsnap fetch extract
```

To install additional software at a later date, make sure the ports collection is updated with **portsnap fetch update**.

To compile a port, **cd** into a subdirectory of `/usr/ports/`. The entry for the port at FreshPorts provides the location to cd into and the make command to run. This example compiles and installs the audiotag port:

```
cd /usr/ports/audio/audiotag
make install clean
```

The first time this command is run, the configure screen shown.
<img src="/images/jails-audio-tag-port.png" width='700px'>
<br><br>

### Configuration Options for Audiotag Port

This port has several configurable options: *DOCS, FLAC, ID3, MP4, and VORBIS*. Selected options are shown with a *.

Use the arrow keys to select an option and press **spacebar** to toggle the value. Press **Enter** when satisfied with the options. The port begins to compile and install.

After options have been set, the configuration screen is normally not shown again. Use **make config** to display the screen and change options before rebuilding the port with **make clean install clean**.

Many ports depend on other ports. Those other ports also have configuration screens that are shown before compiling begins. It is a good idea to watch the compile until it finishes and the command prompt returns.

Installed ports are registered in the same package database that manages packages. The **pkg info** can be used to determine which ports were installed.

### Starting Installed Software

After packages or ports are installed, they must be configured and started. Configuration files are usually in `/usr/local/etc` or a subdirectory of it. Many FreeBSD packages contain a sample configuration file as a reference. Take some time to read the software documentation to learn which configuration options are available and which configuration files require editing.

Most FreeBSD packages that contain a startable service include a startup script which is automatically installed to `/usr/local/etc/rc.d/`. After the configuration is complete, test starting the service by running the script with the **onestart** option. For example, with openvpn installed in the jail, these commands are run to verify that the service started:

```
/usr/local/etc/rc.d/openvpn onestart
Starting openvpn.

/usr/local/etc/rc.d/openvpn onestatus
openvpn is running as pid 45560.

sockstat -4
USER COMMAND         PID     FD      PROTO   LOCAL ADDRESS   FOREIGN ADDRESS
root openvpn         48386   4       udp4    *:54789         *:*
```

If it produces an error:

```
/usr/local/etc/rc.d/openvpn onestart
Starting openvpn.
/usr/local/etc/rc.d/openvpn: WARNING: failed to start openvpn
```

Run **tail /var/log/messages** to see any error messages if an issue is found. Most startup failures are related to a misconfiguration in a configuration file.

After verifying that the service starts and is working as intended, add a line to `/etc/rc.conf` to start the service automatically when the jail is started. The line to start a service always ends in _enable=”YES” and typically starts with the name of the software. For example, this is the entry for the openvpn service:

`openvpn_enable="YES"`

When in doubt, the startup script shows the line to put in `/etc/rc.conf`. This is the description in `/usr/local/etc/rc.d/openvpn`:

```
# To run additional instances link this script to something like
# % ln -s openvpn openvpn_foo

# and define additional openvpn_foo_* variables in one of
# /etc/rc.conf, /etc/rc.conf.local or /etc/rc.conf.d /openvpn_foo

#
# Below NAME should be substituted with the name of this script. By default
# it is openvpn, so read as openvpn_enable. If you linked the script to
# openvpn_foo, then read as openvpn_foo_enable etc.
#
# The following variables are supported (defaults are shown).
# You can place them in any of
# /etc/rc.conf, /etc/rc.conf.local or /etc/rc.conf.d/NAME
#
# NAME_enable="NO"
# set to YES to enable openvpn
```

The startup script also indicates if any additional parameters are available:

```
# NAME_if=
# driver(s) to load, set to "tun", "tap" or "tun tap"
#
# it is OK to specify the if_ prefix.
#
# # optional:
# NAME_flags=
# additional command line arguments
# NAME_configfile="/usr/local/etc/openvpn/NAME.conf"
# --config file
# NAME_dir="/usr/local/etc/openvpn"
# --cd directory
```
