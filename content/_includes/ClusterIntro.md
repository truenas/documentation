One unique capability of TrueNAS SCALE is it can cluster groups of systems together.
These clusters can then create new volumes within the existing SCALE storage pools.
Data stored in a clustered volume is shared between the clustered systems and can add additional redundancy or performance to the environment.
Currently, data stored in a clustered volume is shareable using Active Directory (AD) and the SMB protocol.

{{< hint danger >}}
Clustering is considered experimental and should not be used in a production environment or for handling critical data!
{{< /hint >}}
