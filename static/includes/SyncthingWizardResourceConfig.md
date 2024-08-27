&NewLine;

Accept the default values in **Resources Configuration** or enter new CPU and memory values.
By default, this application is limited to use no more than 2 CPU cores and 4096 Megabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallSyncthingEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

To customize the CPU and memory allocated to the container (pod) Syncthing uses, enter new CPU values as a plain integer value followed by the suffix **m** (milli).
The default is 4096m.

Accept the default value 8Gb allocated memory or enter a new limit in bytes.
Enter a plain integer followed by the measurement suffix, for example, 129M or 123MiB.