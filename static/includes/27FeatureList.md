&NewLine;

TrueNAS 27 brings many new features and improvements to the TrueNAS experience.

### Annual Release Cadence and Simplified Versioning

TrueNAS 27 introduces an annual release cadence with simplified version numbering.
Instead of fish-themed code names and multi-digit version strings, releases now use straightforward numbers like "27.0".
TrueNAS 27 receives feature packs, security updates, and hotfixes throughout the year, providing more predictable upgrade cycles and extended testing periods for both the engineering team and end users.

### WebShare with TrueSearch

[**WebShare**]({{< relref "/Shares/WebShare" >}}) provides browser-based file access without requiring SMB or NFS client mounting on user systems.
Users can browse, upload, download, and manage files directly from a web browser, with support for folder creation, filtering, snapshot timeline viewing, shareable links, and hidden file toggling.
WebShare is configured through [TrueNAS Connect](https://connect.truenas.com/) and requires a dataset and at least one local user account with WebShare access enabled.

When TrueSearch is enabled in the WebShare service configuration, all active shares are indexed for fast file searching by filename, content, or file type.
Encrypted datasets are excluded from indexing.
Passkey authentication options provide flexible access control for WebShare users.

### S3 Gateway (Early Access)

S3 Gateway is available in TrueNAS 27 as an Early Access feature.
<!-- TODO: add a description of S3 Gateway and a link to its documentation -->

### Containers

[**Containers**]({{< relref "/Containers/ManagingContainers.md" >}}), introduced as an experimental feature in TrueNAS 25.04, are fully supported in TrueNAS 27.
Containers provide lightweight, isolated Linux environments that share the host kernel while maintaining their own file system, processes, and network configuration, using fewer system resources than virtual machines while starting quickly and scaling efficiently.

TrueNAS 27 extends container support to Enterprise systems with High Availability (HA) configurations, enabling container failover between controllers.
HA container failover requires a static IP configuration.

Users migrating from TrueNAS CORE who previously relied on custom Jails can use containers as a supported migration path.
See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

### SMB Stateful Failover

TrueNAS 27 introduces stateful SMB HA failover for Enterprise systems with High Availability (HA) configurations.
When enabled in the SMB service configuration, TrueNAS maintains SMB session state across controller failover events, allowing SMB clients to recover existing connections without re-authentication after a failover.
See [Enabling SMB Stateful Failover]({{< relref "/Shares/SMB/AddManageSMBShares/#enabling-smb-stateful-failover" >}}) for configuration details.

### SMB Spotlight Search

TrueNAS 27 adds Spotlight search support for SMB shares, allowing macOS clients to use Spotlight to search file contents directly on TrueNAS SMB shares.
Spotlight search is enabled per share in the SMB service configuration.

### OpenZFS 2.4

TrueNAS 27 integrates OpenZFS 2.4, which introduces new capabilities including hybrid pool support for combining flash and HDD storage, physical block rewriting, and dynamic gang header improvements.
See [OpenZFS Feature Flags]({{< relref "/gettingstarted/versionnotes/#zfs-feature-flags" >}}) for details on newly added feature flags.

### Linux Kernel 6.18

TrueNAS 27 ships with Linux Kernel 6.18, enabling support for new hardware and receiving long-term maintenance and security updates from the upstream kernel project.

### API Changes

TrueNAS 27 removes the deprecated REST API and modernizes the JSON-RPC 2.0 WebSocket API with improved authentication methods, including SCRAM-SHA-512 mutual authentication for API keys.

See [API Changes](https://www.truenas.com/docs/scale/27/gettingstarted/versionnotes/#api-changes) for migration guidance.
