---
title: "Proxmox VE Storage Plugin"
description: "Overview and deployment guidance for the TrueNAS Proxmox VE Storage Plugin."
weight: 35
tags:
 - proxmox
 - vm
 - iscsi
 - nvme
---

The [TrueNAS Proxmox VE Storage Plugin](https://github.com/truenas/truenas-proxmox-plugin) lets you use TrueNAS as high-performance block storage for Proxmox VE clusters, accessible via iSCSI or NVMe/TCP.
Unlike standard iSCSI, the plugin automates zvol creation, iSCSI extent mapping, and target association through the TrueNAS API. You provision storage directly from Proxmox without manual setup on the TrueNAS side.
It uses ZFS to provide instant, space-efficient snapshots, including live VM state with RAM.
It supports CHAP authentication, thin provisioning, ZFS compression, and multipath I/O.
It works with Proxmox cluster deployments that use shared storage.

{{< hint type=warning title="Experimental Feature" >}}
The TrueNAS Proxmox VE Storage Plugin is in active development and has not been fully tested.
This plugin is currently intended for TrueNAS Community Edition (CE) and is not yet supported on TrueNAS Enterprise systems.
Do not use in production workloads.

To report bugs or follow development progress, submit an issue on the [truenas-proxmox-plugin GitHub repository](https://github.com/truenas/truenas-proxmox-plugin/issues).
{{< /hint >}}

{{< hint type=info title="Plugin and Platform Support" >}}
The TrueNAS Proxmox VE Storage Plugin is developed and maintained by TrueNAS.
Proxmox VE is a third-party virtualization platform not affiliated with TrueNAS.
TrueNAS support covers plugin functionality only.
For Proxmox VE issues, consult the [Proxmox documentation](https://pve.proxmox.com/pve-docs/) and [Proxmox support](https://www.proxmox.com/en/proxmox-virtual-environment/support).
{{< /hint >}}

## Requirements

{{< hint type=tip title="Version Requirements" >}}
This plugin requires Proxmox VE 8.x or later (9.x recommended) and TrueNAS 25.10 or later.
NVMe/TCP mode requires Proxmox VE 9.x or later.
{{< /hint >}}

Proxmox nodes must be able to reach TrueNAS on port 3260 (iSCSI) and port 443 (WebSocket API).
For NVMe/TCP mode, install `nvme-cli` on each Proxmox node.
You must also have a TrueNAS API key with sufficient privileges to create and manage datasets and iSCSI or NVMe/TCP resources.

## Before You Begin

Before installing the plugin, complete these steps on TrueNAS:

1. Create a ZFS dataset to use for Proxmox storage (for example, *tank/proxmox*). Set **Dataset Preset** to **Generic**.
2. Enable the **iSCSI** service in **System > Services** and set it to start automatically.
3. Create an iSCSI portal in **Shares > iSCSI > Portals**. Set the IP address to your TrueNAS IP and the port to *3260*.
4. Create an iSCSI initiator group in **Shares > iSCSI > Initiators**. Leave the defaults to allow all initiators.
5. Create an iSCSI target in **Shares > iSCSI > Targets**. After saving, edit the target and add a group. Set the **Portal Group ID** to the portal you created in step 3. Set the **Initiator Group ID** to the initiator you created in step 4.
6. Generate a TrueNAS API key in **Credentials > Users**. Select your user, then click **Add API Key** on the **Access** widget to open the **Add API Key** screen. For a user that already has a key, click **View API Keys** on the **Access** widget instead, then click **Add** on the **User API Keys** screen. Enter a name for the key and click **Save**. Save the key securely. TrueNAS does not show the key again after you close the screen.
7. For NVMe/TCP mode, enable the **NVMe-oF** service in **System > Services**.

Granting the built-in `SHARING_ADMIN` role to the user account for the API key covers the steps above. For a narrower, least-privilege role set instead, see [Minimum API Permissions](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/API-Permissions.md) in Additional Resources.

See the [Installation Guide](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Installation.md) for detailed TrueNAS setup steps.

## Installation

The plugin is installed on each Proxmox VE node, not on TrueNAS.

### Option 1: APT Repository (Recommended)

The APT repository method provides automatic version detection and updates.
Run the following command on each Proxmox node. The installer automatically detects your Proxmox VE version and selects the correct APT suite.

{{< hint type=note >}}
This command installs from the `alpha` branch. The plugin team currently publishes its latest fixes there ahead of `main`.
{{< /hint >}}

```bash
bash <(curl -sSL https://raw.githubusercontent.com/truenas/truenas-proxmox-plugin/alpha/install.sh) --non-interactive --apt-install
```

{{< truetable >}}
| Proxmox VE Version | APT Suite |
|---|---|
| 8.x | `bookworm` |
| 9.x | `trixie` |
{{< /truetable >}}

{{< expand "Manual APT source setup" "v" >}}
If you prefer not to run the installer script, or the script did not work, you can add the APT source manually:

```bash
cat >/etc/apt/sources.list.d/truenas-proxmox-plugin.sources <<'EOF'
Types: deb
URIs: https://truenas.github.io/truenas-proxmox-plugin/apt/
Suites: <bookworm|trixie>
Components: main
Architectures: amd64
Signed-By: /etc/apt/keyrings/truenas-proxmox-plugin.gpg
EOF

mkdir -p /etc/apt/keyrings
curl -fsSL https://truenas.github.io/truenas-proxmox-plugin/apt/pubkey.gpg -o /etc/apt/keyrings/truenas-proxmox-plugin.gpg
apt-get update
apt-get install -y truenas-proxmox-plugin
```

Replace `<bookworm|trixie>` with the suite that matches your Proxmox VE version.
{{< /expand >}}

### Option 2: Direct .deb Installation

Download a release package from the [releases page](https://github.com/truenas/truenas-proxmox-plugin/releases) and install it directly.
Replace `<RELEASE_TAG>` and `<DEB_VERSION>` with the values from the release you want to install:

```bash
wget https://github.com/truenas/truenas-proxmox-plugin/releases/download/v<RELEASE_TAG>/truenas-proxmox-plugin_<DEB_VERSION>_all.deb
dpkg -i truenas-proxmox-plugin_<DEB_VERSION>_all.deb
apt-get -f install -y
```

### Option 3: Interactive Installer

The interactive installer provides a menu-driven setup with a configuration wizard, health checks, and built-in validation.
It supports both iSCSI and NVMe/TCP.
Run the following command and follow the prompts:

```bash
bash <(curl -sSL https://raw.githubusercontent.com/truenas/truenas-proxmox-plugin/alpha/install.sh)
```

The interactive installer configures <file>/etc/pve/storage.cfg</file> automatically and supports cluster-wide installation across all nodes simultaneously.
If you used the interactive installer, review the examples in the Configuration section below to verify or modify your setup.

## Configuration

If you used the APT repository or `.deb` installation, manually add a storage backend entry to <file>/etc/pve/storage.cfg</file> on each Proxmox node using the GNU nano text editor.

```
nano /etc/pve/storage.cfg
```

### iSCSI

```ini
truenasplugin: truenas-storage
    tn_api_host 192.168.1.100
    tn_api_key 1-your-truenas-api-key-here
    tn_api_insecure 1
    tn_target_iqn iqn.2005-10.org.freenas.ctl:proxmox
    tn_dataset tank/proxmox
    tn_discovery_portal 192.168.1.100:3260
    content images
    shared 1
```

### NVMe/TCP

```ini
truenasplugin: truenas-nvme
    tn_api_host 192.168.1.100
    tn_api_key 1-your-truenas-api-key-here
    tn_api_insecure 1
    tn_transport_mode nvme-tcp
    tn_subsystem_nqn nqn.2005-10.org.freenas.ctl:proxmox-nvme
    tn_dataset tank/proxmox
    tn_discovery_portal 192.168.1.100:4420
    content images
    shared 1
```

In both examples, replace `192.168.1.100` with your TrueNAS IP address.
Replace the API key value with your generated key, and `tank/proxmox` with your ZFS dataset path.
`tn_api_insecure 1` disables SSL certificate verification. Include this parameter when TrueNAS uses a self-signed certificate, which is the default.
Remove this line only if TrueNAS uses a valid signed certificate.

{{< hint type=note >}}
Every plugin-specific `storage.cfg` parameter uses a `tn_` prefix (`tn_api_host`, `tn_dataset`, and so on). The `content` and `shared` parameters are standard Proxmox storage options and keep their unprefixed names.
{{< /hint >}}

For all available configuration parameters, see the [Configuration Reference](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Configuration.md).

## Additional Resources

The plugin team maintains an extensive wiki covering setup, configuration, and operation in more depth than this overview.

### Setup and Configuration

- [Installation Guide](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Installation.md): Full installation walkthrough, including cluster-wide deployment and update procedures.
- [Configuration Reference](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Configuration.md): Every `storage.cfg` parameter, with example configurations for single-node, cluster, HA, and IPv6 deployments.
- [NVMe/TCP Setup Guide](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/NVMe-Setup.md): Detailed NVMe/TCP setup, including DH-CHAP authentication and multipath configuration.
- [Minimum API Permissions](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/API-Permissions.md): A least-privilege role set for the plugin API user, as an alternative to a broad admin role.

### Operations

- [Troubleshooting Guide](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Troubleshooting.md): Common error messages and diagnostic steps for installation, connection, and volume issues.
- [Known Limitations](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Known-Limitations.md): Restrictions and workarounds to review before deploying to production.
- [Changelog](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Changelog.md): Version history for the plugin.

### Advanced Topics

- [Advanced Features](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Advanced-Features.md): Performance tuning, cluster and HA configuration, and security hardening.
- [Multi-Tenancy](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Multi-Tenancy.md): Guidance for safely sharing one TrueNAS system across multiple Proxmox clusters.
- [API Reference](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/API-Reference.md): Technical detail on the TrueNAS API integration used by the plugin, intended for integrators and contributors.

### Testing and Diagnostics

- [Testing Guide](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Testing.md): Covers the plugin development test suite. The built-in installer already covers day-to-day health checks. This suite is for plugin development and debugging, not production systems.
- [Tools and Utilities](https://github.com/truenas/truenas-proxmox-plugin/blob/main/wiki/Tools.md): Reference for the installer diagnostics menu and other included tooling.
