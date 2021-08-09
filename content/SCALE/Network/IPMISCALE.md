---
title: "IPMI"
weight: 40
---

{{< toc >}}

{{< hint info >}}
IPMI (Intelligent Platform Management Interface) requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface will have IPMI options.
{{< /hint >}}

Many [TrueNAS Storage Arrays]({{< relref "/Hardware/_index.md" >}}) have a built-in out-of-band management port that provides side-band management should the system become unavailable through the web interface. 

IPMI allows users to check the log, access the BIOS setup, and boot the system without physical access. IPMI also enables users to remotely access the system to assist with configuration or troubleshooting issues.

{{< hint info >}}
Some IPMI implementations require updates to work with newer versions of Java. See [HERE](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{< /hint >}}

IPMI is configured in **Network >** *IPMI*. The IPMI configuration screen provides a shortcut to the most basic IPMI configuration.

![IPMISCALE](/images/SCALE/IPMISCALE.png "IPMI")

The IPMI window displays the available IPMI channels. The *Identify Light* button (flashlight) lets users select a duration for the system's IPMI to flash so they can identify it. The *Manage* button (square with an outward-pointing arrow) opens the IPMI manager in a new browser tab.

## IPMI Configuration

Click the channel you wish to edit to open the configuration form.

![IPMIConfigureSCALE](/images/SCALE/IPMIConfigureSCALE.png "IPMI Configuration")

| Setting | Description |                                                                                                                                   
|---------|-------------|
| DHCP | Use DHCP. Unset to manually configure a static IPv4 connection. |
| IPv4 Address | Static IPv4 address of the IPMI web interface. |
| IPv4 Netmask | Subnet mask of the IPv4 address. |
| IPv4 Default Gateway | Enter the default gateway of the IPv4 connection. |
| VLAN ID | Enter the VLAN identifier if the IPMI out-of-band management interface is not on the same VLAN as management networking. |
| Password | Enter the password used to connect to the IPMI interface from a web browser. The maximum length accepted in the UI is 20 characters, but different hardware might require shorter passwords. |
| Identify Light | Lets users select a duration for the system's IPMI light to flash on the compatible connected hardware. |
| Manage | Opens the IPMI manager in a new browser tab. |


## IPMI Options

After saving the configuration, users can access the IPMI interface using a web browser and the IP address specified in **Network >** *IPMI*. The management interface prompts for login credentials. Refer to your IPMI device documentation to learn the default administrator account credentials.

After logging in to the management interface, users can change the default administrative user name and create additional IPMI users. IPMI utility appearance and available functions vary by hardware.
