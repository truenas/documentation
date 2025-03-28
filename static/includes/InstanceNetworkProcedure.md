Configure the **Network** section settings to define how the instance connects to the host and external networks.
   Options include the default network bridge, an existing [bridge interface]({{< relref "/SCALETutorials/Network/ContainerNASBridge.md" >}}), or a MACVLAN.

   {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

   - Leave **Use default network settings** enabled to connect the instance to the host using the automatic bridge defined in [**Global Settings**](#configuring-global-settings).

   - Disable **Use default network settings** to show the **Bridged NICs** (if available) and **Macvlan NICs** settings.

      {{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}
      Select one or more interfaces:

        - Connect an existing bridge interface to the instance by selecting it under **Bridged NICs**.
        - Create a virtual network interface based on an existing interface by selecting it under **Macvlan NICs**.
           A MACVLAN assigns a unique MAC address to the virtual interface so the instance appears as a separate device on the network.

         {{< include file="/static/includes/MacvlanHost.md" >}}
