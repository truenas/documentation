&NewLine;

We recommend users keep the container use case in mind when choosing a pool.
Select a pool with enough space for all the application containers you intend to use.

TrueNAS creates the **ix-apps** dataset on the chosen pool and uses it to store all container-related data. This is for internal use only.

SCALE provides two default storage options, the default ixVolume or setting a host path to a preexisting dataset.
If you intend to store your application data in a location separate from other storage on your system, create a new dataset before launching the app installation wizard.
