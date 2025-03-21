Configure the **Network settings** to define how the instance connects to the host and external networks.
   Options include the default network bridge, an existing [bridge interface]({{< relref "/SCALETutorials/Network/ContainerNASBridge.md" >}}), or a MACVLAN.

   {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

   - Leave **Use default network settings** selected to connect the instance to the host using the automatic bridge defined in [**Global Settings**](#configuring-global-settings).

   - Deselect **Use default network settings** to display the **Bridged NICs** (if available) and **Macvlan NICs** settings.

      {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}
      Select one or more interfaces.

      - Select an existing bridge interface on the TrueNAS host under **Bridged NICs** to connect it to the instance.
      - Select an existing interface under **Macvlan NICs** to create a virtual network interface based on it.
         A MACVLAN assigns a unique MAC address to the virtual interface so the instance appears as a separate device on the network.

         {{< include file="/static/includes/MacvlanHost.md" >}}
