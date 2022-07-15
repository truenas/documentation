---
---
{{< toc >}}

### TrueNAS SCALE Systems

Follow this procedure for each TrueNAS SCALE system that is to be connected to TrueCommand and used in the cluster.

1. Log in to the SCALE UI and go the the **Storage** page.
   Ensure a storage pool is available for use in the cluster.
   If not, click **Create Pool** and make a new pool using any of the available disks.

2. Go to the **Network** page and look at the **Interfaces** card.
   a. Ensure two interfaces are available and note which is the primary interface that allows SCALE web interface access and access between SCALE systems, TrueCommand, and Active Directory environments.
      This allows connecting the SCALE systems to Active Directory and using TrueCommand to create and manage the cluster.
   b. Ensure the second interface is configured with a static IP address on a different network/subnet that connects all the SCALE systems.
      This interface securely handles all the data sharing traffic between the clustered systems.

3. Go to the **Shares** page and look at the **Windows (SMB) Shares** section. Note if there are any critical shares and take steps to ensure that disabling those shares isn't disruptive.

Repeat this procedure for each SCALE system to be clustered.

### Microsoft Active Directory

1. Verify that the Active Directory (AD) environment to pair with the cluster is available and administratively accessible on the same network as the TrueCommand and TrueNAS SCALE systems.
2. Log in to the Windows Server system and open the **Server Manager**.
   Click **Tools** > **DNS** to open the **DNS Manager**.
   
   ![WindowsServerManagerToolsDNS](/images/TrueCommand/2.2/WindowsServerManagerToolsDNS.png "Opening the DNS Manager")
   
3. In the left side menu, expand **Reverse Lookup Zones** and select the **Active Directory-Integrated Primary** zone to use for the cluster.

   ![WindowsServerDNSManagerReverseLookupZones](/images/TrueCommand/2.2/WindowsServerDNSManagerReverseLookupZones.png "Finding the Reverse Lookup Zone")
   If no zone exists, see Microsoft's guide for [creating DNS Zones](https://docs.microsoft.com/en-us/learn/modules/implement-windows-server-dns/3-work-dns-zones-records).
   
4. Click **Action** > **New Pointer (PTR...)** and configure the **New Resource Record**. Enter the SCALE system IP address, host name, and click **OK**.

   ![WindowsServerDNSManagerReverseLookupZonesPointersAdd](/images/TrueCommand/2.2/WindowsServerDNSManagerReverseLookupZonesPointersAdd.png "WindowsServerDNSManagerReverseLookupZonesPointersAdd")

Repeat this process for each system intended for clustering.
The new records appear inside the zone as they are saved.

![WindowsServerDNSManagerReverseLookupZonesPointers](/images/TrueCommand/2.2/WindowsServerDNSManagerReverseLookupZonesPointers.png "Pointers added to the Zone")

### TrueCommand Container

1. If not already completed, [deploy TrueCommand 2.2 or later in a Docker container]({{< relref "/content/TrueCommand/TCGettingStarted/Install/_index.md" >}}).
   The system used for the TrueCommand container cannot be any of the TrueNAS SCALE systems intended for the cluster.
2. In a browser, enter the TrueCommand IP address and create the first user. Log in with these user credentials to see the **Dashboard**.
3. Click **New System** and add the credentials for the first SCALE system. Use the SCALE **root** account password. When ready, click **ADD AND CONTINUE** and repeat the process for each SCALE system intended for the cluster.
   When complete, each SCALE system has a card on the TrueCommand **Dashboard** and is actively displaying system statistics.

{{< hint info >}}
A good practice is to backup the SCALE system configuration before creating the cluster.
In the TrueCommand **Dashboard**, click on the name of a connected system.
This opens a detailed view of that system.
Click **Config Backups** and **CREATE BACKUP** to store the SCALE configuration file with TrueCommand.
This allows quickly restoring the system configuration to the initial working state, should something go wrong.
{{< /hint >}}

![](/images/TrueCommand/2.2/.png "")