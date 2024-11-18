&NewLine;

TrueNAS 13.3 or earlier enumerates interface names using interface drivers, such as **igb** for Intel devices, followed by a number.
TrueNAS 13.3 or earlier Enterprise systems use **ix** followed by a number.

![NetworkInterfacesScreen](/images/CORE/Network/NetworkInterfacesScreen.png "Network Interfaces Screen")

TrueNAS 22.12 or newer enumerates interface names using PCI locations. By default, systems identify their network ports with **eno** or **enp** followed by a number.

![NetworkInterfacesWidget](/images/SCALE/Network/NetworkInterfacesWidget.png "TrueNAS 24.10 Interface Listing")