Configure the **Network** section settings to define how the instance connects to the host and external networks.
   Options include the default network bridge, an existing [bridge interface]({{< relref "/SCALE/SCALETutorials/Network/ContainerNASBridge.md" >}}), or a MACVLAN.

   {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

   - **Use default network settings**: Enable to connect the instance to the host using the automatic bridge defined in [**Global Settings**](#configuring-global-settings). Disable to show the **Bridged NICs** (if available) and **Macvlan NICs** settings.

   {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}

   - To configure non-default network settings, select one or more interface options:

      - **Bridged NICs**: Use to connect an existing bridge interface to the instance.
      - **Macvlan NICs**: Use to create a virtual network interface based on an existing interface.
         A MACVLAN assigns a unique MAC address to the virtual interface so the instance appears as a separate device on the network.

      {{< include file="/static/includes/MacvlanHost.md" >}}
