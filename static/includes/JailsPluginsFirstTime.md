&NewLine;

The first time you go to the **Jails** or **Plugins** screen TrueNAS prompts you to select a location on the system for storing jail-related data.

![JailsPluginsStorage](/images/CORE/Jails/JailsPluginsStoragePool.png "Choosing a Storage Pool for Jails and Plugins")

By default, this location stores all data related to jails and plugins, including downloaded applications, data managed by the jail or plugin, and any jail snapshots.

Disconnecting or deleting the pool that stores jail data can result in permanent data loss!
Back up all critical data or snapshots stored in a jail before changing the storage configuration.

To change the jails and plugins storage location, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i>, select a new pool, and click **CHOOSE**.