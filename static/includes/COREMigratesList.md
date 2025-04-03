&NewLine;

Although TrueNAS attempts to keep most of your configuration data when migrating, some items do not transfer.
These are the items that do not migrate:

* Microsoft OneDrive Cloud Sync credentials and tasks. OneDrive compatibility is not available in TrueNAS.
* FreeBSD GELI encryption.
  If you have GELI-encrypted pools on your system that you plan to import, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* migrating.
* Malformed certificates.
  TrueNAS validates the system certificates when a system migrates.
  When a malformed certificate is found, TrueNAS generates a new self-signed certificate to ensure system accessibility.
* Plugins and jails.
  Save the configuration information for your plugin and back up any stored data.
  After migrating, add the equivalent application using the **Apps** option.
  If your plugin is not listed as an available application, use the **Custom App** option to add it and import data from the backup into a new dataset for the application.
* NIS data.
* System tunables.
* ZFS boot environments.
* SMB auxiliary parameters.
  As of TrueNAS 23.10 (Cobia), the **Auxiliary Parameters** option is no longer available in the UI as a configurable option.
  We recommend removing any auxiliary parameter settings before migrating.
* AFP shares also do not transfer, but migrate into an SMB share with AFP compatibility enabled.
* `netcli` utility.
  A new CLI utility is used for the [Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE" >}}) and other commands issued in a CLI.
  By default, any TrueNAS user account with **netcli** as the chosen **Shell** updates to use the **nologin** option instead. See the [Users Screens]({{< relref "LocalUsersScreensSCALE.md#authentication-settings" >}}) reference article for descriptions of all **Shell** options.
* SAS multipath is not supported.
* TrueNAS 13 account names beginning with a number are not supported in TrueNAS 24.04.
  Usernames must begin with a letter or an underscore.
  Before attempting migration, review the local user accounts and rename or replace any accounts that begin with a numeric character (`0`-`9`).

TrueNAS 13.X and earlier support VMs with UEFI and GRUB bootloaders.
TrueNAS 22.02 and later does not support the GRUB bootloader.
VMs configured with the UEFI bootloader can migrate.
VMs configured with the GRUB bootloader are unable to migrate. 

It is important for all users to double-check the VM configuration and network interface settings before starting the VM.

{{< hint type=info title="VM Networking" >}}
{{< include file="static/includes/ABridgeToSellYou.md" >}}
{{< /hint >}}

Init/shutdown scripts transfer, but can break. Review them before use.
