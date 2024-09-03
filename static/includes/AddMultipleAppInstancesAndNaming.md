&NewLine;


You can have multiple deployments of the same app (for example, two or more from the **stable** or **enterprise** trains, or a combination the **stable** and **enterprise** trains).

Each deployment of the same app requires a unique name.
App names can include numbers, dashes, or underscores (for example, *syncthing2*, *syncthing-test*, *syncthing_1*, *minio2*, etc.).

To avoid conflict situations where data does not or cannot synchronize because of file name conflicts use a consistent file-naming convention.
Path and file names in apps are case sensitive.
For example, a file named *MyData.txt* is not the same as *mydata.txt* file in Syncthing.