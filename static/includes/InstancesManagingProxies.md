&NewLine;

5. (Optional) Configure proxy settings to forward network connections between the host and the container.
   This routes traffic from a specific address on the host to an address inside the instance, or vice versa, allowing the instance to connect externally through the host.

   {{< trueimage src="/images/SCALE/Virtualization/CreateInstanceProxies.png" alt="Proxies" id="Proxies" >}}

   a. Click **Add** in the **Proxies** section to display a set of proxy configuration settings.

   b. Select the protocol option from the **Host Protocol** dropdown list to set the connection protocol for the TrueNAS host as **TCP** or **UDP**.

   c. Enter a port in **Host Port** to define the TrueNAS port to map to the instance port on the container, for example *3600*.

   d. Select the connection protocol for the container in **Instance Protocol**.
      Options are **TCP** or **UDP**.

   e. Enter the port number within the container in **Instance Port**, for example *80*, to map to the host port.


   ### Managing Proxies
   
   Use the **Proxies** widget to view the network proxy settings configured for the instance.
   It allows you to manage these settings, including adding, editing, or removing proxies.
   Proxies are available for containers only and cannot be used with VMs.
   
   {{< trueimage src="/images/SCALE/Virtualization/ProxiesWidget.png" alt="Proxies Widget" id="Proxies Widget" >}}
   
   Click **Add** to open the [**Add Proxy**](#adding-or-editing-proxies) screen to configure a new proxy for the instance.
   
   For existing proxies, click <span class="material-icons">more_vert</span> to open the actions menu with options to [**Edit**](#adding-or-editing-proxies) or [**Delete**](#deleting-proxies) the proxy.
   
   #### Adding or Editing Proxies
   
   Use the **Add Proxy** or **Edit Proxy** screen to configure or modify a proxy setting attached to an instance.
   
   {{< trueimage src="/images/SCALE/Virtualization/AddProxyScreen.png" alt="Add Proxy Screen" id="Add Proxy Screen" >}}
   
   Select a **Host Protocol** to set the connection protocol for the TrueNAS host.
   Options are **TCP** or **UDP**.
   
   Enter a port number in **Host Port** to map to the instance port on the container, for example *3600*.
   
   Select an **Instance Protocol** to set the connection protocol for the container.
   Options are **TCP** or **UDP**.
   
   Enter a port number for the container in **Instance Port**, for example *80*.
   
   Click **Save** to apply changes.
   
   #### Deleting Proxies
   
   For existing proxies, click <span class="material-icons">more_vert</span> to open the actions menu.
   Select **Delete** to remove the proxy configuration.
   
   {{< trueimage src="/images/SCALE/Virtualization/DeleteProxyDialog.png" alt="Delete Item Dialog" id="Delete Item Dialog" >}}
   
   Click **Confirm** to activate the **Continue** button.
   Click **Continue** to start the delete operation.