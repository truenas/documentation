TrueNAS SCALE SMB clustering combines the benefits of the self-healing OpenZFS file system with the open-source Gluster scalable network file system.

TrueNAS SCALE SMB clustering requires a minimum of three TrueNAS SCALE nodes (systems), but you can scale it to a substantially higher number of physical nodes. 
Gluster data consists of volumes, which can have multiple SMB shares, stored across bricks, the basic unit of storage in the Gluster File System, on the individual servers. 