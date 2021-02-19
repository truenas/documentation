## Reporting

**General Options**

| | |
|-|-|
| Report CPU usage in Percent | When set, report CPU usage in percent instead of units of kernel time. |
| Graphite Separate Instances | Enabling sends the plugin instance and type instance to Graphite as separate path components: `host.cpu.0.cpu.idle`. Disabling sends the plugin and plugin instance as one path component and type and type instance as another component: `host.cpu-0.cpu-idle`. |
| Remote Graphite Server Hostname | Hostname or IP address of a remote [Graphite](http://graphiteapp.org/) server. |
| Graph age in Months | Maximum time a graph is stored in months (allowed values are 1-60). Changing this value causes the Confirm RRD Destroy dialog to appear. Changes do not take effect until the existing reporting database is destroyed. |
| Number of Graph Points | Number of points for each hourly, daily, weekly, monthly, or yearly graph (allowed values are 1-4096). Changing this value causes the **Confirm RRD Destroy** dialog to appear. Changes do not take effect until the existing reporting database is destroyed. |
| Force | Forces the addition of the NTP server, even if it is currently unreachable. |