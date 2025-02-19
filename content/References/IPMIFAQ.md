---
title: "IPMI"
description: "Provides TrueNAS connecting modes for remote management (IPMI) features, and configuration and general use information for remote management."
weight: 25
aliases:
  - /hardware/notices/faqs/ipmi-faq/
---

**How do I connect to Remote Management?**

iXsystems servers provide two modes for connecting the remote management (IPMI) features to the network. The first method is a dedicated connection via a separate Ethernet jack on the back panel of the system. 
On most servers, this jack is located above the USB ports near the keyboard and mouse port on the rear I/O panel. 
This port runs at 100Mb/s and has a link status and speed/traffic lights.

The second method is a shared connection with the first LAN port, which is the port on the lower left on the rear I/O panel. By default, remote management chooses which port to use by searching for a link when the server is initially plugged in. 
If there is an Ethernet link on the dedicated port, it chooses dedicated mode. If no link is detected, shared mode is chosen. 
The connection mode does not change while the server continues to receive power unless the LAN port mode is changed to force one port or the other in the web interface.

Remote management uses an Ethernet MAC address for communications, regardless of which port it uses, and by default obtains its own IP address using DHCP.

**What are the advantages and disadvantages of dedicated mode?**

One advantage of dedicated mode is that remote management traffic is kept separate from host traffic. 
Since heavy traffic on a shared mode connection can cause performance degradation, dedicated mode connections do not interfere with host traffic. 
Dedicated mode allows for separate data and control planes (networks), but requires more physical connections – one wire for the dedicated port and one for the host network connection. 
To avoid accidental switches to shared mode, use the web interface to configure the LAN port mode to dedicated.

**What are the advantages and disadvantages of shared mode?**

Shared mode is the easiest way to get connected and requires no additional cabling beyond a single connection. 
Remote management can be configured to use an alternate VLAN ID, allowing communication on a separate VLAN from host traffic. 
However, Remote Management and host traffic competes for physical network access and could degrade each other in high traffic scenarios. 
The switch port for the shared connection must be set to auto-negotiate speed and duplex for remote management to be accessible when the system is powered down.

**How do I configure IP of Remote Management?**

Network configuration for remote management can happen in a number of ways. By default, remote management obtains an IP address using DHCP. 
The obtained address is available to standard IPMI tools or in the BIOS setup under **Advanced/IPMI Configuration/IPMI LAN Configuration**. 
If a static address is desired, the following configuration methods are available:

1. The easiest method is to set the IP in the BIOS Setup at server deployment time. 
   The IPMI LAN configuration is found under **Advanced/IPMI Configuration/IPMI LAN Configuration**.

2. If an operating system is already installed, an IPMI-compliant local configuration tool, such as `ipmitool` for UNIX-style platforms, can be used to configure the network parameters. 
   Some operating systems might require loading IPMI drivers before using tools like `ipmitool` and the tool might need to be configured to use the system interface instead of a network connection. 
   When using `ipmitool`, the ipmitool lan feature set provides subcommands to set and view the current configuration.

**How do I perform firmware updates?**

Remote management firmware can be upgraded using two methods: the firmware update in the maintenance menu of the web interface or a DOS utility run on the host. 
For the sensors to begin recording data again, restart the host after the update . 
In most cases the update should be run without saving the existing configuration, though it can be saved if there is extensive network and user configuration already present that would take time to reconfigure.

**What is the ipmitool and how do I get it?**

ipmitool is the industry standard open source CLI tool for viewing and configuring IPMI systems. 
Originally written by Sun Microsystems, it has grown independently to support any IPMI-compliant system. 
iXsystems remote management is IPMI v2.0 compliant and `ipmitool` can make use of most of its capabilities.

For most operating systems, `ipmitool` is generally available in third-party package repositories. 
It can also be downloaded from its [GitHub Repository](https://github.com/ipmitool/ipmitool). 
For local use on Linux operating systems, ipmitool requires the ipmi-si and ipmi-devintf kernel modules. 
On FreeBSD, the ipmi kernel module is required to provide access to the remote management hardware. No kernel modules are necessary for access to a remote server.

`ipmitool` is designed for CLI environments where simple management commands and a scriptable interface are needed. 
It supports both local (System Interface) connections and LAN connections via the lanplus interface. 
`ipmitool` also supports Serial over LAN (SOL) connections. 
`ipmitool` can be incorporated into monitoring frameworks to provide monitoring, trending, and alerting features.
Some common `ipmitool` commands are:

`ipmitool lan print` – displays network configuration

`ipmitool sel elist` – displays expanded version of the system event log

`ipmitool sensor list` – displays sensors, their readings, state, and thresholds

When opening a support ticket with iXsystems in regards to troubleshooting remote management exceptions, include the output of `ipmitool sel elist` and `ipmitool sensor list`. The output of these commands helps us determine the specific issue.

**What is IPMIView?**

[IPMIView](https://www.supermicro.com/manuals/other/IPMIView20.pdf) is a no-cost Windows application providing central control and management of multiple remote management-enabled servers. 
Servers can be grouped for speedy administration of multiple servers at once and their video displays can be quickly viewed without logging into each individual server remote management interface. Servers reporting trouble can be seen at-a-glance.

**What is IPMICFG?**

`IPMICFG`, for DOS, Linux, and Windows platforms, provides network configuration options as well as some hardware-specific commands, such as factory settings reset. 
`IPMICFG` can be downloaded from: [ftp://ftp.supermicro.com/utility/IPMICFG/](ftp://ftp.supermicro.com/utility/IPMICFG/).

**How do I reset Remote Management?**

In rare circumstances, remote management can malfunction and require a reset. 
To reset remote management, log in to the web interface and select **Reset Controller** from the **Maintenance** menu. 
Wait approximately two minutes before logging in to the web interface again. It might be necessary to restart the host to allow the sensors to repopulate afterward.

If the procedure above does not address the issue, remote management might need to be power-cycled by shutting down and unplugging the server for approximately 30 seconds, then reconnecting and powering up the server. This causes remote management to re-initialize itself upon the next boot.

In some cases, the software might become corrupted and need to be re-flashed.
If the web interface is operational, the firmware can be reflashed as in an upgrade. If not, a DOS tool can be used to reflash the firmware. 
Refer to the instructions included in the readme associated with the remote management firmware for exact instructions and commands to re-flash the firmware manually.

**What is Serial Over LAN?**

Serial Over LAN (SOL) provides the redirection of a virtual serial port to remote management. 
The virtual serial port acts like a standard PC serial port and the operating system generally attaches its serial port driver automatically. 
In server environments, serial ports are used for the operating system console, which can then be logged to disk or accessed remotely via out-of-band means in the event of failure. 
On iXsystems servers, the SOL virtual port can appear as **COM2** or **COM3** depending on the system, as the virtual port is numbered after the physical serial ports and some systems have one physical port and others have two. 
The virtual serial port settings can be configured in the BIOS Setup. 
By default, the BIOS is configured to copy its screen output to the virtual serial port so the BIOS can be manipulated via SOL. 
The SOL serial port can be connected to and viewed using IPMI SOL-compliant tools such as `ipmitool` or by an applet in the web GUI. 
Authentication is required to connect to the port and the connection can be encrypted if supported by the tool.
