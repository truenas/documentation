---
title: "TrueNAS 27 Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 27 releases."
weight: 10
aliases:
 - /releasenotes/
 - /gettingstarted/scalereleasenotes/
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "27.0.0-rc.1"
    icon: "fiber-new"
  - text: "Known Issues"
    anchor: "known-issues"
    icon: "warning"
  - text: "27 Major Features"
    anchor: "major-features"
    icon: "new-releases"
  - text: "Deprecations"
    anchor: "deprecations"
    icon: "timeline"
  - text: "Full 27 Changelog"
    anchor: "full-changelog"
    icon: "history"
  - text: "Preparing to Upgrade"
    anchor: "upgrade-prep"
    icon: "update-truenas"
  - text: "Upgrade Paths"
    anchor: "upgrade-paths"
    icon: "conversion-path"
  - text: "Software Component Versions"
    anchor: "software-component-versions"
    icon: "component-versions"
---

{{< hint type="important" title="TrueNAS 27 Early Release Documentation" >}}
This page tracks the latest notes for TrueNAS 27, which was renamed from TrueNAS 26.
Pre-release builds are early-stage software intended for testing and feedback, not production use.
See the [Software Development Life Cycle]({{< ref "SoftwareDevelopmentLifeCycle" >}}) for an overview of TrueNAS release stages and versioning.

Release notes for the 26-BETA.1 through 26-BETA.3 releases are in the [TrueNAS 26 Version Notes](https://www.truenas.com/docs/scale/26/gettingstarted/versionnotes/).
{{< /hint >}}

## Notable Changes and Known Issues

<!-- Hugo-processed content for release notes tab box -->
<div style="display: none;" id="release-tab-content-source">
  <div data-tab-id="27.0.0-rc.1" data-tab-label="27-RC.1 Notable Changes">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

October 6, 2026

The TrueNAS team is pleased to release TrueNAS 27-RC.1!

**Notable changes:**

* Renames TrueNAS 26 to TrueNAS 27.
  TrueNAS 26 is now TrueNAS 27, and TrueNAS 27-RC.1 is the first release under the new name.
  The earlier 26-BETA.1, 26-BETA.2, and 26-BETA.3 releases keep their original names, and their documentation remains available in the [26 documentation](https://www.truenas.com/docs/scale/26/).

* Adds the TrueNAS Object Interface (Early Access).
  Object storage (S3 API) is now available as a native TrueNAS service, in addition to the containerized third-party app.
  Each bucket is a ZFS dataset, so object data gets the same snapshots, quotas, replication, and data integrity as other data, and is managed from the same web interface.
  27-RC.1 covers the core S3 API, including multipart uploads, object tagging, bucket and object ACLs, versioning, and immutability.
  Versioning and Object Lock require a TrueNAS Connect Plus license or a TrueNAS Enterprise system.
  Early Access means TrueNAS wants your feedback: try it with your applications and report what works and what doesn't on the [forums](https://forums.truenas.com/).
  See [Configuring S3 Object Storage](https://www.truenas.com/docs/scale/27/shares/s3/configurings3) and the [27-RC.1 feature set blog post](https://www.truenas.com/blog/truenas-27-rc1-feature-set) for more information.

* Fixes the web interface staying unavailable after an upgrade on systems with many RSA-4096 certificates ([NAS-143641](https://ixsystems.atlassian.net/browse/NAS-143641)).
  On systems with many RSA-4096 certificates, middleware could take about a minute to regenerate `/etc/nginx/nginx.conf` after an upgrade, and nginx failed to start because the file did not exist yet. The web interface now stays available while the configuration regenerates.

* Fixes editing a user account moving that user's home directory to its parent directory ([NAS-143753](https://ixsystems.atlassian.net/browse/NAS-143753)).
  The **Edit User** form submitted the parent of the home directory path instead of the path itself, so saving any change relocated the user's home directory and changed permissions on the parent directory. The form now submits the correct home directory path.

* Updates the default certificate signing requests (CSRs) TrueNAS generates for HTTPS and TrueNAS Connect ([NAS-142603](https://ixsystems.atlassian.net/browse/NAS-142603), [NAS-142604](https://ixsystems.atlassian.net/browse/NAS-142604)).
  Default CSRs requested a TLS client authentication extended key usage (EKU) that public certificate authorities no longer issue for server certificates, and the CSR subject listed outdated contact details. Default CSRs no longer request the unneeded client authentication EKU and use current contact information.

* Updates the **Containers** screen for middleware `container.*` API changes ([NAS-142088](https://ixsystems.atlassian.net/browse/NAS-142088)).
  Deleting a container now runs as a background job with **Force** and **Recursive** options instead of completing immediately. The **Containers** screen reflects this job-based delete flow.

* Fixes an NFS server issue that could crash the system when a client retransmits a request ([NAS-142560](https://ixsystems.atlassian.net/browse/NAS-142560)).
  If an NFSv4.1 client's connection dropped and reconnected while a request was still being answered, two copies of the same request could reach the server and both read from the same cached reply slot at once. `nfsd` no longer modifies a session slot while replaying its cached reply, which prevents the resulting crash.

* Fixes VRRP not delivering IPv6 advertisements between HA controllers, which could let both controllers claim to be MASTER ([NAS-142303](https://ixsystems.atlassian.net/browse/NAS-142303)).
  Without a configured unicast source address, VRRP sent IPv6 traffic from the interface's link-local address, so the peer's advertisements never reached the address the other controller expected. Both controllers could then become MASTER for the same IPv6 virtual IP. VRRP instances now set the correct unicast source IP so IPv6 advertisements are received.

* Fixes several iSCSI, Fibre Channel, and iSER target driver crashes ([NAS-142264](https://ixsystems.atlassian.net/browse/NAS-142264), [NAS-142258](https://ixsystems.atlassian.net/browse/NAS-142258), [NAS-142126](https://ixsystems.atlassian.net/browse/NAS-142126), [NAS-142161](https://ixsystems.atlassian.net/browse/NAS-142161)).
  SCST, the underlying target driver that handles iSCSI, Fibre Channel, and iSER connections, had several race conditions that could crash the target or corrupt memory: removing a LUN while another teardown ran, losing a session's access control group during reassignment, unregistering a target while queued work still referenced it, and rapid connect/disconnect cycles over iSCSI over InfiniBand (iSER). The driver now handles all of these cases correctly.

* Fixes intermittent "permission denied" errors on NFS shares for Active Directory and LDAP users ([NAS-142228](https://ixsystems.atlassian.net/browse/NAS-142228)).
  When `rpc.mountd` used `--manage-gids` and a brief winbind or SSSD outage occurred, the group lookup could return zero groups, and the kernel cached that empty result as valid. The affected user lost all supplementary group access on every export until the cache expired. Empty group replies are now treated as failures instead of being cached as valid, so the lookup is retried.

* Improves High Availability (HA) resilience to brief interconnect interruptions ([NAS-142152](https://ixsystems.atlassian.net/browse/NAS-142152)).
  A short interruption on the inter-controller NTB link could trigger an unnecessary peer reset or start kernel-level lock recovery. HA now waits longer for the link to recover before treating a brief interruption as a real peer failure.

* Allows toggling ALUA on an iSCSI target when the standby HA controller is unreachable ([NAS-142057](https://ixsystems.atlassian.net/browse/NAS-142057)).
  Administrators could not change the Asymmetric Logical Unit Access (ALUA) setting if the standby controller was offline. ALUA can now be toggled regardless of standby controller reachability.

* Fixes an error that blocked replacing an unavailable disk in a pool ([NAS-141804](https://ixsystems.atlassian.net/browse/NAS-141804)).
  Attempting to replace a disk that had gone unavailable failed with a `'NoneType' object has no attribute 'replace'` error instead of completing the replacement. Disk replacement now handles unavailable disks correctly.

* Fixes the **Session Timeout** setting under **Access Settings** not taking effect ([NAS-143940](https://ixsystems.atlassian.net/browse/NAS-143940)).
  A configured session timeout of several hours had no effect, and the session expired within minutes of switching browser tabs instead. The **Session Timeout** setting now applies for its full configured duration.

* Improves TrueSearch performance on shares with about 1 million files ([NAS-143855](https://ixsystems.atlassian.net/browse/NAS-143855)).
  Searches on very large shares could take 7 to 8 seconds and time out in the client (for example, Finder), even after moving the search index to faster storage. TrueSearch performance is improved for these large-scale shares.

* Fixes disk image import failures and incorrect size reporting ([NAS-143736](https://ixsystems.atlassian.net/browse/NAS-143736), [NAS-143839](https://ixsystems.atlassian.net/browse/NAS-143839)).
  A disk image exported from a zvol on 25.10 could not be imported after being moved to a 26-BETA.3 system, and importing a 50 GiB disk image showed a **Size** requirement of 50 GiB when the import actually needed 51 GiB. Disk images exported from 25.10 now import correctly on TrueNAS 26, and import now reports the size the target zvol actually needs.

* Fixes Webshare not offering a way to continue when passkey registration fails ([NAS-140894](https://ixsystems.atlassian.net/browse/NAS-140894)).
  If a user aborted or failed passkey registration, Webshare said they could still use Webshare without a passkey but showed no button to proceed, only the **Create Passkey** button. Webshare now offers a way to continue past a failed or abandoned passkey registration.

* Fixes scheduled replication tasks not running automatically ([NAS-142970](https://ixsystems.atlassian.net/browse/NAS-142970)).
  A scheduled replication task ran correctly when started manually, but its cron schedule showed no upcoming runs for the current month, only for the next month, so it never fired automatically. Cron scheduling for replication tasks now includes runs in the current month.

* Fixes the **Storage Dashboard** throwing an error and showing no pools ([NAS-142517](https://ixsystems.atlassian.net/browse/NAS-142517)).
  After upgrading, the **Storage Dashboard** could throw a `class_special_usable` property error and display no pools when some pools had special vdevs and others did not. The dashboard now handles pools with and without special vdevs correctly.

* Fixes compound `AND`/`!=` filters not excluding matching events in the audit log search ([NAS-142222](https://ixsystems.atlassian.net/browse/NAS-142222)).
  Searching SMB audit logs with a filter like `Event != "Authentication" AND Event != "Close"` still returned **Authentication** events in the results. Compound filters now correctly exclude the events they specify.

* Fixes applying ACLs to app storage paths that already contain data ([NAS-142117](https://ixsystems.atlassian.net/browse/NAS-142117)).
  Editing the ACL on an already-running app's mount path could fail with `[EFAULT]`/`[EPERM]` errors stating that the path contains existing data and force was not specified, but the UI had no way to select the force option. ACL edits on app mount paths now work without this error.

* Fixes app upgrade jobs reporting success when the image pull fails ([NAS-142191](https://ixsystems.atlassian.net/browse/NAS-142191)).
  Upgrading a custom app whose image pull failed still finished the job with a **SUCCESS** status and a message that the app was upgraded and redeployed, even though nothing changed. The failure was previously logged only to `/var/log/app_lifecycle.log` and never reached the job status shown in the UI. The job now reports failure when the image pull does not succeed.

* Fixes the NVMe-TCP service generating an invalid configuration when a subsystem uses associated hosts ([NAS-141762](https://ixsystems.atlassian.net/browse/NAS-141762)).
  Adding a namespace to an NVMe-TCP subsystem configured with associated hosts could reinitialize the kernel NVMe target with a configuration that conflicted with the associated-hosts setting, logging `Can't set allow_any_host when explicit hosts are set!` and preventing new namespaces from working. The service now generates a configuration consistent with associated hosts.

* Fixes migrated LXC containers no longer working after the `.ix-virt` dataset is deleted ([NAS-141666](https://ixsystems.atlassian.net/browse/NAS-141666)).
  Containers migrated from Incus were not tracked in `/mnt/.truenas_containers` the way newly created containers are, so after the `.ix-virt` dataset was removed, the migrated containers stopped working and could not even be deleted. Migrated containers are now tracked correctly so they keep working after migration.

* Fixes a virtual machine installation media upload ending up as a 0-byte file ([NAS-141825](https://ixsystems.atlassian.net/browse/NAS-141825)).
  Uploading installation media for a new VM could complete with the resulting file at 0 bytes instead of the expected image size. Uploaded installation media now saves with the correct file size.

* Fixes Docker failing to pull larger images inside a privileged LXC container ([NAS-141470](https://ixsystems.atlassian.net/browse/NAS-141470)).
  Docker running inside an LXC container with **ID Map Type** set to **Privileged** could fail to pull nontrivial images. Docker can now pull these images inside a privileged container.

* Fixes `mail.send` omitting Cc recipients from the outgoing email ([NAS-141845](https://ixsystems.atlassian.net/browse/NAS-141845)).
  `mail.send` added Cc addresses only to the `Cc:` header, but SMTP delivery is driven by the envelope recipient list, which was built from the To addresses alone. Cc recipients never received the email even though they appeared to be included. Cc addresses are now added to the SMTP envelope so they receive the email.

* Fixes Docker failing to configure for **Apps** on every reboot after upgrading to 26-BETA.1 or 26-BETA.2 ([NAS-141446](https://ixsystems.atlassian.net/browse/NAS-141446)).
  After upgrading, Docker configuration for the **Apps** service could fail on boot, and the only workaround was to unset and reselect the apps pool, which had to be repeated after every reboot. Docker now configures correctly for **Apps** on boot.

* Fixes alert emails that were not RFC 5322 compliant and could bounce from Gmail ([NAS-141699](https://ixsystems.atlassian.net/browse/NAS-141699)).
  Alert emails formatted in a way that violated RFC 5322 could be rejected by providers like Gmail, so the alert never reached the recipient. Alert emails are now formatted to comply with RFC 5322.

* Fixes Webshare blocking a quick re-login after a session disconnect on the TrueNAS Connect Free tier ([NAS-141712](https://ixsystems.atlassian.net/browse/NAS-141712)).
  The Free tier allows only a single Webshare session, so closing a tab or losing network connection could lock a user out of logging back in immediately, forcing them to wait for a long timeout or a service restart. Users can now log back in promptly after a session disconnect.

* Fixes invalid rclone configuration files caused by unescaped special characters ([NAS-142234](https://ixsystems.atlassian.net/browse/NAS-142234)).
  Generating rclone configuration files by hand could produce an invalid INI file when a setting contained special characters. Configuration files are now generated with `configparser`, which escapes special characters correctly.

* Fixes the dashboard network throughput graph showing data from only one interface in a bond ([NAS-142731](https://ixsystems.atlassian.net/browse/NAS-142731)).
  The network throughput graph on the dashboard displayed traffic for only one member of a bonded interface instead of the combined total, so it never showed the bond's actual maximum speed. The graph now reflects throughput for all interfaces in the bond.

* Fixes an app keeping an invalid NVIDIA GPU UUID after the GPU is replaced ([NAS-142006](https://ixsystems.atlassian.net/browse/NAS-142006)).
  After replacing a system's NVIDIA GPU, an existing app could keep referencing the old GPU's UUID instead of the new one, even though the system correctly reported the new GPU. Apps now pick up the replacement GPU's UUID correctly.

* Fixes a scrub-paused alert that fires too early and shows the literal text `'pool'` instead of the pool name ([NAS-142198](https://ixsystems.atlassian.net/browse/NAS-142198)).
  Pausing a scrub for only a few minutes could trigger the alert meant for a scrub paused more than 8 hours, and the alert text showed the placeholder `'pool'` rather than the actual pool name. The alert now fires only after 8 hours and shows the correct pool name.

* Fixes the **Apps** dataset preset overwriting a user's **Case Insensitive** and **Atime** choices ([NAS-141792](https://ixsystems.atlassian.net/browse/NAS-141792)).
  Selecting **Case Insensitive** and leaving **Atime** enabled in Advanced Settings while using the **Apps** dataset preset saved the dataset as case-sensitive with **Atime** disabled instead. The preset now keeps these user-configured settings.

* Fixes the storage dashboard disk health panel becoming corrupted when not all pool devices report SMART values ([NAS-141753](https://ixsystems.atlassian.net/browse/NAS-141753)).
  If any device in a pool lacked SMART values, the disk health panel display could become corrupted. The panel now displays correctly even when some devices have no SMART data.

* Fixes Webshare failing to generate share links for files with Chinese file names or paths ([NAS-142148](https://ixsystems.atlassian.net/browse/NAS-142148)).
  Webshare could not create a share link when the file name or path contained Chinese characters. Share links now work correctly for these file names and paths.

* Fixes high CPU usage caused by console CLI redraw when a key input gets stuck ([NAS-141550](https://ixsystems.atlassian.net/browse/NAS-141550)).
  A stuck physical key, or a stuck virtual key sent over IPMI or another out-of-band method, could lock the console CLI's menu process to 100% of a CPU thread. The CLI now handles stuck key input without pegging the CPU.

* Identifies USB passthrough devices by their physical port in the VM and Container UI ([NAS-142433](https://ixsystems.atlassian.net/browse/NAS-142433)).
  USB passthrough devices were identified only by vendor and product ID, which cannot tell two identical devices apart and can change after a replug. The device picker now identifies devices by their physical port, which survives replugs and reboots and distinguishes identical devices.

* Improves consistency of the pool usage indicator between the **Dashboard** and **Storage Dashboard** ([NAS-142168](https://ixsystems.atlassian.net/browse/NAS-142168)).
  The same vdev usage percentage could show as a normal green indicator on the **Dashboard** while showing as an orange warning with a red gauge on the **Storage Dashboard**, using different thresholds in each place. The two dashboards now use consistent usage thresholds.

* Updates Go to 1.25.12 for TrueSearch to include upstream security fixes ([NAS-141713](https://ixsystems.atlassian.net/browse/NAS-141713)).
  TrueSearch built against an older Go release that has since received important security fixes. TrueSearch now builds with Go 1.25.12 or later.

<a href="#full-changelog" target="_blank">Click here</a> to see the full 27 changelog or visit the <a href="https://ixsystems.atlassian.net/issues?filter=14697" target="_blank">TrueNAS 27-RC.1 Changelog</a> in Jira.

{{< trademark-notice s3="true" >}}

  </div>

  <div data-tab-id="known-issues" data-tab-label="Known Issues">

{{< hint type="important" title="Known Issues in 27" >}}
These are ongoing issues that can affect multiple versions in the 27 series.
<br> When resolved, issues move to **Notable Changes** for the appropriate release.
{{< /hint >}}

### Current Known Issues

* The **Backup Tasks** dashboard card does not display **TrueCloud Backup** or **Periodic Snapshot** tasks, even when those tasks are configured and have completed successfully.
  The tasks run normally and appear as expected on the **Data Protection** screen; only the dashboard card omits them.
  Other task types, such as Replication and Cloud Sync, appear on the card as expected.
* Upgrading to TrueNAS 27 can disrupt two-factor authentication (2FA) for any account with a stored token interval other than 30 or 60 seconds. TrueNAS 27 supports only these two intervals and clears the stored 2FA secret for any affected account during the upgrade. A non-standard interval can come from the API, or from the global 2FA interval setting in TrueNAS releases before 24.04, which applied a single interval to every 2FA account on the system and persists across upgrades. The current web interface always uses a 30-second interval. See [Two-Factor Authentication](#two-factor-authentication) for who is affected and how to restore access.

<a href="https://ixsystems.atlassian.net/issues/?filter=14698" target="_blank">See the latest status on Jira</a> for public issues discovered in TrueNAS 27 that are being resolved in a future TrueNAS release.

See the [Release Notes](https://forums.truenas.com/c/release-notes/13) section of the TrueNAS forum for ongoing updates about known issues, investigations, and statistics about TrueNAS releases.

  </div>

  <div data-tab-id="major-features" data-tab-label="27 Major Features">

{{< include file="/static/includes/27FeatureList.md" >}}

  </div>
  <div data-tab-id="full-changelog" data-tab-label="Full 27 Changelog">
<!-- CSV Changelog Table with Version Support -->
<div id="csv-changelog-container"></div>
  </div>

  <div data-tab-id="deprecations" data-tab-label="Deprecations">

{{< include file="/static/includes/DeprecationsList.md" >}}

For additional resources, see the [Feature Deprecations]({{< ref "Deprecations" >}}) page.

  </div>

</div>

<!-- Linkable Tab Box -->
<div id="release-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '27.0.0-rc.1');
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
{{< changelog-scripts >}}
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('27');
</script>

## Upgrading TrueNAS {#upgrading}

<!-- Hugo-processed content for upgrade notes tab box -->
<div style="display: none;" id="tab-content-source">
  <div data-tab-id="upgrade-prep" data-tab-label="Preparing to Upgrade">

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* The TrueNAS REST API is removed in TrueNAS 27. Systems still using the REST API must migrate to the JSON-RPC 2.0 WebSocket API before upgrading. See [API Changes](#api-changes) for migration guidance and details about API authentication improvements in TrueNAS 27.

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

  </div>

  <div data-tab-id="api-changes" data-tab-label="API Changes">

### API Improvements in TrueNAS 27

#### REST API Removal

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

{{< include file="/static/includes/APIDocs.md" >}}

You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
Click **API Docs** to view API documentation.

#### Improved API Authentication

TrueNAS 27 introduces `auth.login_ex` as a unified WebSocket API authentication method that supports password (`PASSWORD_PLAIN`), API key (`API_KEY_PLAIN`), OTP token (`OTP_TOKEN`), and the new SCRAM-SHA-512 (`SCRAM`) mechanism. SCRAM provides mutual authentication between client and server without transmitting raw key material.

The legacy `auth.login` and `auth.login_with_api_key` methods are deprecated and scheduled for removal in TrueNAS 27. Their functionality is fully replaced by `auth.login_ex`, which continues to support `API_KEY_PLAIN` and the other non-SCRAM mechanisms beyond TrueNAS 27. SCRAM is the recommended choice for new clients that can adopt it.

See the [SCRAM Authentication primer](https://github.com/truenas/middleware/blob/stable/27/docs/source/accounts/scram_authentication.rst) for guidance on implementing SCRAM in custom API clients and migrating pre-TrueNAS 26 API keys to the optimized precomputed format.

For the full list of deprecated and removed API methods, see [Feature Deprecations]({{< ref "Deprecations" >}}).

  </div>

  <div data-tab-id="two-factor-authentication" data-tab-label="Two-Factor Authentication">

### Two-Factor Authentication Interval Change

TrueNAS 27 restricts the two-factor authentication (2FA) token interval to 30 or 60 seconds. TrueNAS 27 validates Time-based One-Time Password (TOTP) login codes and accepts only these two intervals.

A non-standard interval could have been set through the API, or through the global 2FA setting in TrueNAS releases before 24.04, where the web interface exposed an editable interval field that applied a single value to every 2FA account on the system. That value persists across upgrades. The current web interface always sets a 30-second interval and no longer exposes this field, so 2FA configured through the UI on TrueNAS 24.04 or later uses the supported 30-second interval. A non-standard interval worked for web interface logins in earlier releases but stops working after upgrading to TrueNAS 27. Both local accounts and directory services (Active Directory or LDAP) accounts are in scope.

During the upgrade, TrueNAS clears the stored 2FA secret and resets the interval to 30 for any affected account. That account has no working 2FA until the user sets up 2FA again.

To avoid any interruption, affected users re-enroll before upgrading. Go to **Credentials > Two Factor Auth**, click **Renew 2FA Secret**, then scan the new QR code with an authenticator app. The renewed secret uses the default 30-second interval. If you are not sure whether an account is affected, renew the 2FA secret for that account anyway. A renewal is safe for accounts that are not affected.

To restore 2FA for an affected account after upgrading:

- On standard systems, where 2FA is not required to log in, the user signs in with their password, then re-enrolls 2FA at **Credentials > Two Factor Auth**.
- On systems that require 2FA to log in (for example, STIG mode), an administrator issues a one-time password for the affected user. An administrator who can still sign in generates it at **Credentials > Users**: select the affected user, then click **Generate One-Time Password** on the **Password** widget. If every administrator is locked out, an administrator with console access generates it from the console:

  {{< cli >}}  
  midclt call auth.generate_onetime_password '{"username": "*account-name*"}'
  {{< /cli >}}

  Replace {{< cli >}}*account-name*{{< /cli >}} with the name of the affected user account. The command returns a one-time password (for example, `1_nIaCpK-OhJPNQ-I6BfKr-29CyQB`). The user enters it in place of their password at the login screen, then reconfigures 2FA at **Credentials > Two Factor Auth**.

  </div>

  <div data-tab-id="containers-virtual-machines" data-tab-label="Containers and Virtual Machines">

### Containers and Virtual Machines

#### Containers

LXC containers, introduced as an experimental feature in earlier TrueNAS releases, are fully supported in TrueNAS 27.
No configuration migration is required for containers created in prior releases.

TrueNAS 27 adds the following container improvements:

- **Enterprise HA support** — Containers can now fail over between HA controllers ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  HA container failover requires a **static IP configuration**. Containers using DHCP do not fail over.
- **GPU passthrough** — NVIDIA and other supported GPU devices can now be assigned to LXC containers from the container configuration screen ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
- **USB and PCIe passthrough fixes** — A regression that prevented USB and PCIe device passthrough to containers and VMs is resolved in 26-BETA.1 ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).

See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

  </div>

  <div data-tab-id="disk-health-management" data-tab-label="Drive Health Management">

### Drive Health Management

TrueNAS monitors the condition of installed HDD and SSD drives (SAS, SATA, and NVMe) through three integrated layers:

- **ZFS** detects sudden failures in real time during active read and write operations and marks affected vdevs or disks as faulted immediately.
- **TrueNAS Middleware** polls SMART data from every drive every 90 minutes. When a polled attribute crosses a failure threshold, TrueNAS generates an alert.
- **Alert logic** filters incoming SMART and ZFS data to suppress known-benign attribute fluctuations, reducing false-positive alerts by approximately 50% compared to prior releases.

Drive health status is visible on the [**Disk Health**]({{< ref "/Storage/StorageDashboardScreens.md#disk-health-widget" >}}) card on the **Storage** dashboard. Active alerts appear in the **Alerts** panel with details on the affected disk and recommended next steps.

Community Edition users can supplement automated monitoring with manual SMART tests run via cron jobs or the `smartctl` command-line tool. Third-party tools such as [Scrutiny](https://apps.truenas.com/catalog/scrutiny_community/) are also available from the TrueNAS Apps catalog.

See [Drive Health Management]({{< ref "/Storage/Disks/DriveHealthManagement.md" >}}) for full details.

  </div>

  <div data-tab-id="upgrade-paths" data-tab-label="Upgrade Paths">

### Upgrade Paths

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/27UpgradeMethods.md" >}}

{{< include file="/static/includes/SCALEUpgradePaths.md" >}}
  </div>  
  <div data-tab-id="migrating-from-tn13" data-tab-label="Migrating from TrueNAS 13.0 or 13.3">

### Migrating from TrueNAS 13.0 or 13.3

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

Depending on the specific system configuration, migrating from a FreeBSD-based TrueNAS version can be a straightforward or complicated process.
See the [Migration articles]({{< ref "/GettingStarted/Migrate/" >}}) for cautions and notes about differences between each software and the migration process.

{{< enterprise >}}
{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}

{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /enterprise >}}
  </div>  
</div>

<!-- Linkable Tab Box -->
<div id="upgrade-notes-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('tab-content-source', 'upgrade-notes-container', 'upgrade-prep');
});
</script>

## Component Versions and ZFS Feature Flags {#component-versions-feature-flags}

<!-- Hugo-processed content for component versions tab box -->
<div style="display: none;" id="component-tab-content-source">
  <div data-tab-id="software-component-versions" data-tab-label="Software Component Versions">

### Software Component Versions {#component-versions-tab}

Click the component version number to see release notes for that component.

{{< component-versions "27" >}}

\*TrueNAS (25.10 and later) includes the [NVIDIA open GPU kernel module drivers](https://github.com/NVIDIA/open-gpu-kernel-modules).
  These drivers work with Turing and later GPUs.
  Earlier architectures (Pascal, Maxwell, Volta) are not compatible.
  See [NVIDIA GPU Support](#nvidia-gpu-support) for more information.
  </div>

  <div data-tab-id="zfs-feature-flags" data-tab-label="ZFS Feature Flags">

### OpenZFS Feature Flags

TrueNAS integrates many features provided by the upstream [OpenZFS project](https://openzfs.org/wiki/Main_Page).
Any new feature flags introduced since the previous OpenZFS version that was integrated into TrueNAS (OpenZFS 2.3.3) are listed below:

{{< truetable class="tn-blue" >}}
| Feature Flag | GUID | Notes |
|--------------|------|-------|
| `block_cloning_endian` | [com.truenas:block_cloning_endian](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#block_cloning_endian) | Corrects ZAP entry endianness issues in the Block Reference Table (BRT) used by block cloning. Read-only compatible. |
| `dynamic_gang_header` | [com.klarasystems:dynamic_gang_header](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#dynamic_gang_header) | Enables larger gang headers based on pool sector size. Not read-only compatible; must be manually enabled. |
| `physical_rewrite` | [com.truenas:physical_rewrite](https://openzfs.github.io/openzfs-docs/man/v2.4/7/zpool-features.7.html#physical_rewrite) | Enables physical block rewriting that preserves logical birth times, reducing incremental send stream sizes. Read-only compatible. |
{{< /truetable >}}

For more details on feature flags, see [OpenZFS Feature Flags](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Feature%20Flags.html) and [OpenZFS zpool-feature.7](https://openzfs.github.io/openzfs-docs/man/7/zpool-features.7.html).
  </div>  
</div>

<!-- Linkable Tab Box -->
<div id="component-tabs-container"></div>

<script src="/js/linkable-tabs.js?v=4.8"></script>
<script src="/js/linkable-tabs-init.js"></script>
<script src="/js/jump-to-button-fix.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    initializeHugoTabs('component-tab-content-source', 'component-tabs-container', 'software-component-versions');
});
</script>
