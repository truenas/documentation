---
---

Although TrueNAS attempts to keep most of your CORE configuration data when upgrading to SCALE, some CORE-specific items do not transfer.
These are the items that don't migrate from CORE:

* FreeBSD GELI encryption. 
  If you have GELI-encrypted pools on your system that you plan to import into SCALE, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* migrating to SCALE.
* Malformed certificates. 
  TrueNAS SCALE validates the system certificates when a CORE system migrates to SCALE. 
  When a malformed certificate is found, SCALE generates a new self-signed certificate to ensure system accessibility.
* CORE plugins and jails. Save the configuration information for your plugin and back up any stored data. 
  After completing the SCALE install, add the equivalent SCALE application using the **Apps** option. 
  If your CORE plugin is not listed as an available application in SCALE, use the **Launch Docker Image** option to add it as an application and import data from the backup into a new SCALE dataset for the application.
* NIS data
* System tunables
* ZFS boot environments
* AFP shares also do not transfer, but migrate into an SMB share with AFP compatibility enabled. 
* CORE `netcli` utility. A new CLI utility is used for the [Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) and other commands issued in a CLI.

VM storage and its basic configuration transfer over during a migration, but you need to double-check the VM configuration and the network interface settings specifically before starting the VM.

Init/shutdown scripts transfer, but can break. Review them before use.