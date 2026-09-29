---
title: "TrueNAS 26 Version Notes"
description: "Highlights, change log, and known issues for TrueNAS 26 releases."
weight: 10
aliases:
 - /releasenotes/
related: false
use_jump_to_buttons: true
jump_to_buttons:
  - text: "Latest Changes"
    anchor: "26.0.0-rc.1"
    icon: "fiber-new"
  - text: "Known Issues"
    anchor: "known-issues"
    icon: "warning"
  - text: "26 Major Features"
    anchor: "major-features"
    icon: "new-releases"
  - text: "Deprecations"
    anchor: "deprecations"
    icon: "timeline"
  - text: "Full 26 Changelog"
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

## Notable Changes and Known Issues

<!-- Hugo-processed content for release notes tab box -->
<div style="display: none;" id="release-tab-content-source">
  <div data-tab-id="26.0.0-rc.1" data-tab-label="26-RC.1 Notable Changes">

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

October 6, 2026

The TrueNAS team is pleased to release TrueNAS 26-RC.1!

**Notable changes:**

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

<a href="#full-changelog" target="_blank">Click here</a> to see the full 26 changelog or visit the <a href="https://ixsystems.atlassian.net/issues?filter=14697" target="_blank">TrueNAS 26-RC.1 Changelog</a> in Jira.

  </div>

  <div data-tab-id="26-beta" data-tab-label="26-BETA Notable Changes">

{{< expand "26-BETA.3 Notable Changes" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

August 20, 2026

The TrueNAS team is pleased to release TrueNAS 26-BETA.3!
This release updates the Linux kernel and OpenZFS, moves the NVIDIA GPU driver to the Long Term Support Branch for a longer support window, and adds dedicated spares for dRAID pools and spare activation for special and dedup vdevs.
It also fixes upgrade issues that affected Active Directory and Enterprise update profiles, a cloud backup defect that stopped all scheduled tasks, Fibre Channel target mode crashes, and container, virtual machine, and networking issues.

### 26-BETA.3 Notable Changes

* Fixes crashes on systems that use Fibre Channel target mode ([NAS-142014](https://ixsystems.atlassian.net/browse/NAS-142014), [NAS-142018](https://ixsystems.atlassian.net/browse/NAS-142018)).
  The QLogic Fibre Channel target driver could follow a null target operations pointer from interrupt paths, and target mode could stay partly enabled after target registration failed. The driver now checks the pointer before it uses it and fails target enable when registration does not succeed.

* Fixes cloud backup tasks that could stop the `middlewared` event loop and silently disable every scheduled task ([NAS-141948](https://ixsystems.atlassian.net/browse/NAS-141948)).
  The cloud backup progress thread updated job progress from outside the event loop, which stopped the loop while the `middlewared` service still reported as active. Cron jobs continued to fire and log, but every scheduled task did nothing and raised no error. Progress updates now run on the event loop.

* Fixes a memory leak in the console CLI that could exhaust system memory ([NAS-141238](https://ixsystems.atlassian.net/browse/NAS-141238)).
  Continuous input on the physical console, such as a stuck key on an attached keyboard, made the CLI process grow to tens of gigabytes of RAM until the kernel out-of-memory killer stopped it. Console CLI memory use is now bounded regardless of how much input arrives.

* Fixes upgrades to TrueNAS 26 that leave Active Directory non-functional ([NAS-141469](https://ixsystems.atlassian.net/browse/NAS-141469)).
  On an Active Directory member server, the directory cache could go FAULTED after the post-upgrade reboot and winbind could fail to start, which locked users out until an administrator left and rejoined the domain. A related defect also logged a false message once an hour that the machine account password changed. The member state now survives the upgrade.

* Fixes faulty parsing of `smartctl` output that filled `/var/log/middlewared.log` with errors ([NAS-141215](https://ixsystems.atlassian.net/browse/NAS-141215), [NAS-141951](https://ixsystems.atlassian.net/browse/NAS-141951)).
  Systems updated to 25.10.5 logged repeated parse errors from drive health checks. The parser handles the full range of `smartctl` output so drive health checks complete without errors.

* Improves failover speed by moving the remote disk retaste call out of the failover event ([NAS-141988](https://ixsystems.atlassian.net/browse/NAS-141988)).
  A remote disk scan ran inside the critical failover path, where it could delay failover while services stayed offline. The scan now runs outside that path.

* Fixes a database migration failure when updating from TrueNAS 25.04.2.6 to 25.10.3.1 ([NAS-141221](https://ixsystems.atlassian.net/browse/NAS-141221)).
  The update stopped a few seconds after it started with an `[EFAULT]` error from the `migrate` command. The migration now completes so the update finishes.

* Fixes an upgrade that forced the update profile to **Mission Critical** on Enterprise systems ([NAS-140905](https://ixsystems.atlassian.net/browse/NAS-140905)).
  A database migration set the update profile to **Mission Critical** on every Enterprise system, regardless of the profile the running version actually used. The system then raised a warning that the running system version profile did not match the selected update profile. The migration now keeps the profile that the system already used.

* Fixes replication failures for source systems that host a container when the task uses **Full Filesystem Replication** ([NAS-140878](https://ixsystems.atlassian.net/browse/NAS-140878)).
  After an upgrade to TrueNAS 26, a replication task to a remote system on an earlier release could fail with an error about a failure to transfer all children of the container dataset. Turning off **Full Filesystem Replication** avoided the failure. These tasks now complete.

* Fixes several issues with the SSH credentials used for replication ([NAS-141677](https://ixsystems.atlassian.net/browse/NAS-141677)).
  The system now updates SFTP cloud credentials when the SSH key pair they use is removed, rejects encrypted SSH private keys consistently during validation, returns a clear error when semi-automatic remote setup uses a key pair that no longer exists or is invalid, and completes SSH pairing with TrueNAS 13 systems during remote replication setup.

* Fixes Active Directory domain join failures caused by combined IPv4 and IPv6 PTR record updates ([NAS-140548](https://ixsystems.atlassian.net/browse/NAS-140548)).
  `nsupdate` sent IPv4 and IPv6 PTR records in a single transaction, which returned a NOTZONE error and stopped the domain join. The records now go out in separate transactions.

* Fixes SMB advertising file permissions that the file system does not enforce ([NAS-141608](https://ixsystems.atlassian.net/browse/NAS-141608)).
  ZFS does not let the `owner@`, `group@`, and `everyone@` entries carry `WRITE_ACL` or `WRITE_OWNER`, but Samba still reported those rights to clients. Samba now advertises only the rights the file system enforces, so SMB and NFS clients see the same permissions. Entries for named users and groups keep these rights.

* Improves the speed of dataset creation with the **SMB**, **Multiprotocol**, and **Apps** presets ([NAS-141154](https://ixsystems.atlassian.net/browse/NAS-141154), [NAS-141161](https://ixsystems.atlassian.net/browse/NAS-141161)).
  Creating a dataset with one of these presets could take several seconds on 26-BETA.1 and 26-BETA.2 because of the per-credential access check that runs during creation. Batched access probes restore normal dataset creation speed.

* Adds support for dedicated spares on pools that use dRAID vdevs ([NAS-140629](https://ixsystems.atlassian.net/browse/NAS-140629), [NAS-141277](https://ixsystems.atlassian.net/browse/NAS-141277)).
  Pool creation validation blocked dedicated spares on dRAID pools. Both the web interface and the middleware validation now allow this configuration.

* Adds spare activation for special and dedup vdevs ([NAS-141201](https://ixsystems.atlassian.net/browse/NAS-141201)).
  A failed device in a special or dedup vdev did not activate an available spare, which matters more as special vdevs come into wider use. Spares now activate for these vdev types.

* Fixes the pool creation screen offering disks that SED encryption excludes ([NAS-141096](https://ixsystems.atlassian.net/browse/NAS-141096)).
  Disk selection during pool creation did not filter for SED encryption. The disk list now applies the filter.

* Fixes the maximum data transfer size applied to 9500 TriMode devices ([NAS-140978](https://ixsystems.atlassian.net/browse/NAS-140978)).
  The driver did not apply the 2M limit that these devices report. An upstream fix is included so transfers stay within the supported size.

* Fixes the storage screens showing a normal vdev status when a drive in that vdev is FAULTED ([NAS-140955](https://ixsystems.atlassian.net/browse/NAS-140955)).
  A faulted drive did not change the vdev status, so an administrator had to expand each vdev to find the problem. The vdev status now reflects a faulted drive, as it already did for an unavailable drive.

* Fixes a false alert that an SMB share is unavailable because it uses a locked dataset ([NAS-141461](https://ixsystems.atlassian.net/browse/NAS-141461)).
  A `ShareLocked` alert could persist after boot for a share on an encrypted dataset, even though the dataset was unlocked and the share worked normally. The alert now clears when the dataset unlocks during boot.

* Fixes custom app updates and private registry support for authenticated Docker registries ([NAS-141149](https://ixsystems.atlassian.net/browse/NAS-141149), [NAS-141553](https://ixsystems.atlassian.net/browse/NAS-141553)).
  Custom app updates failed when the image came from a registry that requires authentication, and registries that use `htpasswd` authentication were not supported. Both authentication paths now work.

* Fixes TrueCloud Backup errors that showed only `error.message` and jobs that could hang without end ([NAS-141287](https://ixsystems.atlassian.net/browse/NAS-141287)).
  The progress reader looked for a flat `error.message` field, but restic nests the text inside an `error` object, so every restic error turned into a `KeyError` and the real message never reached the user or the job log. Errors now report the text that restic returns.

* Fixes a `dtype` error that prevented pool selection for containers ([NAS-141234](https://ixsystems.atlassian.net/browse/NAS-141234)).
  Virtual machine and container device settings are stored encrypted. On a system restored from a configuration whose encryption secret no longer matched, these settings decrypted to empty values and failed validation, so the form returned only `dtype` and the containers feature stayed unusable. Devices that cannot be decrypted are now dropped when the encryption secret resets.

* Fixes missing IPv6 connectivity in LXC containers on a clean install ([NAS-141468](https://ixsystems.atlassian.net/browse/NAS-141468)).
  A clean install of 26.0.0-BETA.2 enabled IPv4 forwarding but left IPv6 forwarding disabled on the host, so a container on the default `truenas0` bridge received an IPv6 default route but could not reach IPv6 networks. IPv6 forwarding is now enabled.

* Fixes WS-Discovery so the system appears in the Windows network browser ([NAS-141440](https://ixsystems.atlassian.net/browse/NAS-141440)).
  A system running 26.0.0-BETA.2 did not show up in network discovery, even with the same configuration that worked on 26.0.0-BETA.1. Discovery works again.

* Fixes IPv6 autoconfiguration settings that did not apply after the `dhcpcd` migration ([NAS-141208](https://ixsystems.atlassian.net/browse/NAS-141208), [NAS-141386](https://ixsystems.atlassian.net/browse/NAS-141386)).
  An interface with **Autoconfigure IPv6** disabled still received extra IPv6 default routes, and SLAAC stayed active on an interface with DHCP enabled. Both settings now apply as configured.

* Fixes the **Save** button staying inactive when the device order changes in a virtual machine ([NAS-140791](https://ixsystems.atlassian.net/browse/NAS-140791)).
  A change to **Device Order** on a VM device did not activate **Save**, so the new order could not be applied on 26.0.0-BETA.1. The change now saves.

* Fixes virtual machines left suspended after a periodic snapshot task ([NAS-141124](https://ixsystems.atlassian.net/browse/NAS-141124)).
  A VM with disks on a dataset covered by a periodic snapshot task could stay suspended without end, and it could only be resumed or powered off. These VMs now return to a running state.

* Fixes certificate deletion blocked by TrueNAS Connect ([NAS-141224](https://ixsystems.atlassian.net/browse/NAS-141224)).
  Deleting a certificate could fail with a message that TrueNAS Connect uses it, even after the system was removed from TrueNAS Connect and the force option was used. A certificate that TrueNAS Connect no longer uses now deletes.

* Fixes the **time** field on system audit events ([NAS-141949](https://ixsystems.atlassian.net/browse/NAS-141949)).
  Audit entries for `svc=SYSTEM` events recorded a time about seven hours behind UTC because the field used a fixed offset instead of the system time zone. Entries for `svc=MIDDLEWARE` and `svc=SMB` were already correct. System audit entries now record the correct time.

* Updates the NVIDIA GPU driver to [580.173.02](https://www.nvidia.com/en-us/drivers/details/273160/), the current Long Term Support Branch (LTSB).
  This version number is lower than the driver in 26-BETA.2, but it extends the support window for a more stable product. 26-BETA.2 shipped a 590 New Feature Branch driver, which is intended for early adopters and reaches end of life in December 2026. The 580 LTSB is supported until August 2028.

<a href="#full-changelog" target="_blank">Click here</a> to see the full 26 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=14654" target="_blank">TrueNAS 26-BETA.3 Changelog</a> in Jira.

{{< /expand >}}

{{< expand "26-BETA.2 Notable Changes" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

June 17, 2026

The TrueNAS team is pleased to release TrueNAS 26-BETA.2!

### 26-BETA.2 Notable Changes

* Adds **Forward Error Correction (FEC)** mode as a configurable network interface setting on both Community Edition and Enterprise systems ([NAS-139477](https://ixsystems.atlassian.net/browse/NAS-139477), [NAS-140329](https://ixsystems.atlassian.net/browse/NAS-140329)).
  Network interfaces that support FEC can now have the FEC mode configured directly from the interface settings in the UI.

* Adds the ability to view the reason for each system reboot on the local node ([NAS-139412](https://ixsystems.atlassian.net/browse/NAS-139412)).
  TrueNAS now stores the cause of each reboot — for example, user-initiated, kernel panic, or scheduled update — so administrators can review reboot history when they investigate system events.

* Adds the missing `en_US.UTF-8` locale to TrueNAS 26 ([NAS-140692](https://ixsystems.atlassian.net/browse/NAS-140692)).
  The default English UTF-8 locale was not present in BETA.1, which could cause encoding errors for applications, scripts, and containers that depend on it. The locale is now available system-wide.

* Improves visibility of important pool states such as **resilvering** in the web interface ([NAS-139007](https://ixsystems.atlassian.net/browse/NAS-139007)).
  Pool states like resilvering, scrubbing, and degraded operations were not prominently displayed. The Storage dashboard and pool status screens now surface these states with clearer indicators so administrators can identify maintenance activity at a glance.

* Improves webshell access control with per-shell-type role checks and adds audit logging for shell sessions ([NAS-141011](https://ixsystems.atlassian.net/browse/NAS-141011)).
  Webshell sessions for containers, VMs, and apps previously wrapped commands in `sudo -H -u <user>`, which failed against root-owned libvirt and Docker sockets. Users with the `FULL_ADMIN` role but without unrestricted sudo encountered Polkit errors and broken shells. Webshell authorization now uses per-shell-type role checks (`VM_WRITE`, `CONTAINER_WRITE`, `APPS_WRITE`) alongside the existing webshell privilege, and shell sessions emit `WEBSHELL_AUTHENTICATION` and `WEBSHELL_LOGOUT` audit events.

* Improves the built-in ACL preset templates by auto-including local and directory service user and admin groups ([NAS-140530](https://ixsystems.atlassian.net/browse/NAS-140530)).
  When a built-in preset such as `NFS4_RESTRICTED` is applied through **Use Preset**, TrueNAS now adds entries for `builtin_users` and `builtin_administrators` — and, on systems joined to Active Directory, the corresponding domain users and domain admins groups. The expanded ACL appears on screen before save so administrators can remove any entries they do not want. User-created templates are unaffected.

* Improves the performance of directory listings on SMB shares from macOS clients ([NAS-141125](https://ixsystems.atlassian.net/browse/NAS-141125)).
  When macOS Finder lists a directory with the AAPL extensions enabled, the previous code path added three syscalls per file entry to probe the AppleDouble resource fork size. The probe now reuses the directory enumeration's existing file descriptor with a single syscall, reducing roughly two syscalls per file and producing noticeable listing speedups on directories with many entries.

* Fixes the **Map User And Group IDs** option on LXC containers not working ([NAS-140766](https://ixsystems.atlassian.net/browse/NAS-140766)).
  A blocker bug prevented containers configured with user and group ID mapping from applying those mappings to the container filesystem. The mapping now applies correctly when the container starts.

* Fixes false **failed a SMART selftest** alerts that appeared after upgrading from TrueNAS 24.10 (Electric Eel) to 25.10 (Goldeye) or later ([NAS-140652](https://ixsystems.atlassian.net/browse/NAS-140652)).
  Stale SMART data carried over during the upgrade triggered false-positive alerts on drives that had no actual SMART test failures. Affected systems no longer receive these alerts.

* Fixes a timeout in NVMe namespace delete operations on drives that contain written data ([NAS-140748](https://ixsystems.atlassian.net/browse/NAS-140748)).
  The `disk_resize` operation could hang or fail when it removed namespaces on NVMe drives with existing data. The delete operation now completes reliably regardless of the amount of data on the namespace.

* Fixes an out-of-memory condition triggered by `posix_fadvise(POSIX_FADV_SEQUENTIAL)` on ZFS datasets ([NAS-140587](https://ixsystems.atlassian.net/browse/NAS-140587)).
  Applications that hinted sequential access on large files could cause the system to exhaust memory and trigger the OOM killer. The ZFS sequential prefetch path is updated so the hint no longer leads to runaway memory use.

* Fixes the SMB service crash on Legacy Share types with the recycle bin feature enabled when **Spotlight search** is active ([NAS-140749](https://ixsystems.atlassian.net/browse/NAS-140749)).
  The TrueNAS per-dataset recycle bin (vfs_recycle) keeps file handles open to prevent symlink race conditions, while the Spotlight metadata service relied on a share connection that skipped the normal file-close step during teardown. The mismatched shutdown order triggered an assertion failure and crashed the SMB service. The service shutdown order is corrected so the recycle bin and Spotlight can coexist.

* Fixes an issue where LXC containers from earlier TrueNAS versions could not start after upgrade to TrueNAS 26 ([NAS-140691](https://ixsystems.atlassian.net/browse/NAS-140691)).
  The upgrade migration script did not properly mount container ZFS datasets, leaving the container filesystem intact but inaccessible and causing the init executable to appear missing. The migration script now mounts datasets correctly so containers start without manual intervention.

* Fixes GPU isolation and GPU passthrough to virtual machines after upgrade from earlier TrueNAS versions to 26 ([NAS-140687](https://ixsystems.atlassian.net/browse/NAS-140687)).
  A regression in the upgrade script silently failed to apply required initramfs customizations for GPU device isolation, leaving the GPU in an unavailable state after the upgrade. Systems with a previously isolated GPU encountered a "device is not available" error when starting a VM with a passed-through GPU, or found that GPU isolation did not take effect. The upgrade script now applies the required customizations correctly so GPU isolation and passthrough work without manual recovery.

* Fixes the **Send Feedback > Report a Bug** feature failing to attach the debug file when **Attach Debug** is selected ([NAS-140163](https://ixsystems.atlassian.net/browse/NAS-140163), [NAS-140237](https://ixsystems.atlassian.net/browse/NAS-140237)).
  The debug attachment could silently fail with no error in the UI, while ticket creation still succeeded without the debug file. The UI now uploads the debug file correctly and reports failures so users know when a manual attachment is needed.

* Fixes a regression in 26-BETA.1 that blocked virtual machine cloning ([NAS-140792](https://ixsystems.atlassian.net/browse/NAS-140792)).
  Users could not clone existing VMs through the UI in BETA.1. VM cloning is restored in BETA.2.

* Fixes the **GUI SSL Certificate** field on **System Settings > General > GUI Settings** failing to save the selected certificate after upgrade from 25.10 to 26-BETA.1 ([NAS-140354](https://ixsystems.atlassian.net/browse/NAS-140354)).
  The field displayed `None` even after a certificate was selected, and attempting to save other GUI settings produced a validation error stating the required certificate field was empty. The backend change in BETA.1 that returned the certificate as a numeric ID instead of a full object is now paired with a `ui_certificate_name` response field, so the UI can display and save the selected certificate correctly.

* Fixes an error that blocked saving E-Mail options when **GMail OAuth** is selected ([NAS-140306](https://ixsystems.atlassian.net/browse/NAS-140306)).
  Users configuring outbound email with GMail OAuth could not save the configuration. The save action now completes successfully.

* Fixes the inability to pass Intel GPU devices through to LXC containers ([NAS-140421](https://ixsystems.atlassian.net/browse/NAS-140421)).
  Intel GPU devices did not appear in the device picker for LXC containers, preventing assignment. The full set of supported GPU devices, including Intel, now appears and can be assigned.

* Fixes the inability to add ISO files to virtual machines through the creation wizard or by manually adding a CDROM device ([NAS-140446](https://ixsystems.atlassian.net/browse/NAS-140446)).
  ISO files could not be attached to VMs either at initial creation or by manually adding a CDROM device after creation. ISO attachment now works in both flows.

* Fixes a bug where NVMe namespace resize operations dropped the list of attached controllers ([NAS-140497](https://ixsystems.atlassian.net/browse/NAS-140497)).
  When a namespace was resized, the original controller attachment configuration was discarded and had to be reconfigured manually. The namespace resize now preserves controller attachments.

* Fixes incorrect storage usage estimates on the **Snapshots** screen ([NAS-140637](https://ixsystems.atlassian.net/browse/NAS-140637)).
  Storage usage values displayed on snapshot rows did not reflect actual consumption. Usage estimates now calculate and display correctly.

* Fixes a VM XML configuration error caused by duplicate USB controllers with the same index when a VM contains two or more USB devices ([NAS-140626](https://ixsystems.atlassian.net/browse/NAS-140626)).
  Adding multiple USB devices to a VM produced a libvirt XML conflict that could prevent the VM from starting. USB device controllers now use unique indexes.

* Fixes several TrueSearch and macOS Spotlight integration issues on SMB and NFS shares ([NAS-140952](https://ixsystems.atlassian.net/browse/NAS-140952), [NAS-141078](https://ixsystems.atlassian.net/browse/NAS-141078), [NAS-140932](https://ixsystems.atlassian.net/browse/NAS-140932)).
  TrueSearch from macOS Spotlight failed to return results on supported SMB shares, search activity could trigger NFS timeout issues on the same system, and the WebShare service did not toggle TrueSearch support correctly when reloaded with SIGHUP. All three issues are resolved.

* Fixes USB device passthrough to virtual machines ([NAS-139548](https://ixsystems.atlassian.net/browse/NAS-139548)).
  A regression caused USB passthrough to fail on some VM configurations. USB passthrough now works reliably across supported devices.

* Fixes stale container entries that remained in the UI after the host pool was disconnected ([NAS-140621](https://ixsystems.atlassian.net/browse/NAS-140621)).
  Container names continued to appear in the UI after the pool that hosted them was disconnected, even though the underlying containers were gone. The container list now refreshes to reflect the current pool state.

* Fixes middleware not propagating configuration changes to the kernel `nvmet` subsystem ([NAS-140266](https://ixsystems.atlassian.net/browse/NAS-140266)).
  NVMe-over-Fabrics target configuration changes made through the UI did not always apply to the running kernel target. Middleware now reliably updates `nvmet` when target settings change.

* Fixes LXC containers reporting a generic hostname instead of the configured container name ([NAS-140185](https://ixsystems.atlassian.net/browse/NAS-140185)).
  Containers reported their hostname as `LXCNAME` regardless of the name set in TrueNAS. The container hostname now matches the name shown in the UI.

* Fixes an error that blocked edits to user accounts that belong to the `docker` group ([NAS-139955](https://ixsystems.atlassian.net/browse/NAS-139955)).
  Editing a user account that included `docker` group membership returned an error and prevented saving. User edits now succeed regardless of `docker` group membership.

* Fixes the encryption dialog refusing to save when a validation error occurs on a hidden field ([NAS-140293](https://ixsystems.atlassian.net/browse/NAS-140293)).
  Users could be blocked from saving the encryption configuration by a validation error on a field that was not visible in the current dialog state. The dialog now allows saving when hidden field errors do not apply.

* Fixes the **Manual Update** screen linking to a 404 page for the manual image installation guide ([NAS-140366](https://ixsystems.atlassian.net/browse/NAS-140366)).
  The **See the manual image installation guide** link pointed at an outdated URL that no longer exists. The link now points to the correct documentation.

* Fixes Cloud Sync tasks targeting custom S3-compatible endpoints failing after the 25.10 upgrade ([NAS-140383](https://ixsystems.atlassian.net/browse/NAS-140383)).
  A signing behavior change in 25.10 broke custom S3 backup destinations on non-AWS providers. Compatibility with non-AWS S3 providers is restored.

* Fixes dashboard widgets not rendering on some systems upgraded from 25.10.2 ([NAS-139966](https://ixsystems.atlassian.net/browse/NAS-139966)).
  Dashboard widgets could fail to load after the upgrade because of stale widget configuration data. The widget configuration is migrated correctly so the dashboard renders without intervention.

* Fixes incorrect sort order on the **Virtual Machines** screen when sorting by the **Running** column ([NAS-140501](https://ixsystems.atlassian.net/browse/NAS-140501)).
  Sorting VMs by running state did not group running and stopped VMs predictably. The sort now produces a consistent grouped order.

* Fixes the **Alerts** panel opening behind an active slide-in form ([NAS-140108](https://ixsystems.atlassian.net/browse/NAS-140108)).
  When a configuration slide-in was open, clicking the alerts icon opened the alerts panel below the slide-in, where users could not see or interact with it. The alerts panel now opens above the slide-in.

* Removes a legacy USB boot detection workaround that could add a 15-second delay to system boot ([NAS-140745](https://ixsystems.atlassian.net/browse/NAS-140745)).
  A workaround introduced in 2021 to address an early SCALE alpha boot-pool import race on USB boot disks injected `ZFS_INITRD_POST_MODPROBE_SLEEP=15` into `/etc/default/zfs` on systems where any boot-pool vdev appeared to be on a USB bus. USB boot is no longer a supported TrueNAS configuration, and the workaround is removed. Systems upgraded from a version that wrote the sleep line have it stripped automatically.

<a href="#full-changelog" target="_blank">Click here</a> to see the full 26 changelog or visit the <a href="https://ixsystems.atlassian.net/issues?filter=14541" target="_blank">TrueNAS 26-BETA.2 Changelog</a> in Jira.

{{< /expand >}}

{{< expand "26-BETA.1 Notable Changes" "v" >}}

{{< hint type=warning title="Early Release Software" >}}
Early releases are intended for testing and feedback purposes.
Do not use early-release software for critical tasks.
{{< /hint >}}

April 7, 2026

The TrueNAS team is pleased to release TrueNAS 26-BETA.1!
This first public release version of TrueNAS 26 has software component updates and new features that are in the polishing phase.
See [26 Major Features](#major-features) for an overview of what's new in this release.

{{< hint type=important title="Upgrading from TrueNAS 25.10" >}}
Upgrading from TrueNAS 25.10 to 26-BETA.1 is not available in the TrueNAS UI until TrueNAS 25.10.3 is released.
Users on TrueNAS 25.10 who wish to test 26-BETA.1 before that time can manually install or upgrade by downloading directly:
- [TrueNAS-26.0.0-BETA.1.iso](https://iso.sys.truenas.net/TrueNAS-26-BETA/26.0.0-BETA.1/TrueNAS-26.0.0-BETA.1.iso)
- [TrueNAS-26.0.0-BETA.1.update](https://update-public.sys.truenas.net/TrueNAS-26-BETA/TrueNAS-26.0.0-BETA.1.update)
{{< /hint >}}

Special thanks to (GitHub users): [Franco Castillo](https://github.com/castillofrancodamian), [AquariusStar](https://github.com/AquariusStar), [Rogelio Tajes Piñeiro](https://github.com/rtajes-max), [Aurélien Sallé](https://github.com/MDVAurelien), [dany22m](https://github.com/dany22m), [ReiKirishima](https://github.com/ReiKirishima), [Christos Longros](https://github.com/chrislongros), [Lee Jihaeng](https://github.com/SejoWuigui), [Aui162](https://github.com/Aui162), [Seele Volleri](https://github.com/SeeleVolleri), [Ban](https://github.com/Ban921), [Michael Rohrhirsch](https://github.com/CrunkA3), [PCAsusM1981](https://github.com/PCAsusM1981), [Cantabile](https://github.com/cantab1le), [Fernando G. Monteiro](https://github.com/fgmGitHub), [Joda Stößer](https://github.com/SimJoSt), [Marius](https://github.com/mariusachim), [herbkk](https://github.com/herbkk), [saso-g1](https://github.com/saso-g1), [René](https://github.com/renediepenbroek), [Jehu Marcos Herrera Puentes](https://github.com/JMarcosHP), [Amir Burbea](https://github.com/amirburbea), [Piotr Jasiek](https://github.com/pht31337), [Eric Schultz](https://github.com/eschultz), [Kent Ross](https://github.com/mumbleskates), [fkwp](https://github.com/fkwp), [Gautam krishna R](https://github.com/gautamkrishnar) and [Joel May](https://github.com/joel0) for contributing to TrueNAS 26-BETA.1.
Visit [our guide](https://www.truenas.com/docs/contributing/) for information on how you too can contribute.

### 26-BETA.1 Notable Changes

* Adds support for LXC containers in Enterprise High Availability (HA) configurations ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  Containers can now fail over between HA controllers. HA container failover requires a static IP configuration. See [Containers]({{< ref "/Containers/ManagingContainers.md" >}}) for configuration details.

* Adds GPU passthrough support for LXC containers ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
  Users can assign NVIDIA and other supported GPU devices to LXC containers from the container configuration screen in the UI.

* Adds Multi-Path I/O (MPIO) support for Fibre Channel connections ([NAS-137252](https://ixsystems.atlassian.net/browse/NAS-137252)).
  Fibre Channel configurations can now use multiple paths for improved redundancy and throughput. This option is available in the Fibre Channel port configuration.

* Adds SMB3 unix extensions support for multiprotocol shares ([NAS-139988](https://ixsystems.atlassian.net/browse/NAS-139988)).
  When a share uses the **Multi-Protocol** purpose (for example, SMB combined with NFS or local app and container access), TrueNAS now enables SMB3 unix extensions. Linux clients with SMB3 POSIX support can use filesystem primitives not normally available through standard SMB semantics. Windows clients without unix extension support continue to behave normally.

* Adds BRT (Block Reference Table) support to the `zpool prefetch` command for faster pool import operations ([NAS-139230](https://ixsystems.atlassian.net/browse/NAS-139230)).
  Pool imports on systems that use block cloning are now faster, as the prefetch operation includes BRT metadata.

* Adds an option to de-register a system from TrueNAS Connect ([NAS-139544](https://ixsystems.atlassian.net/browse/NAS-139544)).
  Users can now remove a system's TrueNAS Connect registration from the **TrueNAS Connect** configuration screen without needing to contact support.

* Adds support for the `include:` key in custom app Docker Compose configurations ([NAS-137498](https://ixsystems.atlassian.net/browse/NAS-137498)).
  Custom app Compose files can now reference external Compose files that define services, allowing users who manage their own Docker Compose files outside TrueNAS to use modular configurations.

* Updates the **Pools** and storage screens to reflect OpenZFS 2.4 changes, including the new separation of special and dedup vdev types ([NAS-138129](https://ixsystems.atlassian.net/browse/NAS-138129)).
  Pool creation and management dialogs now correctly represent the new vdev types available in OpenZFS 2.4.

* Improves the **Storage Dashboard** to show the reason a pool is degraded ([NAS-138613](https://ixsystems.atlassian.net/browse/NAS-138613)).
  Previously, a degraded pool indicator offered no detail on the cause. The dashboard now provides context so users can take corrective action.

* Updates the Samba build to version 4.23 ([NAS-139190](https://ixsystems.atlassian.net/browse/NAS-139190)).
  See the [Samba 4.23.0 release notes](https://www.samba.org/samba/history/samba-4.23.0.html) for upstream changes. Note that changes to Samba defaults do not necessarily change TrueNAS defaults. See [Software Component Versions](#software-component-versions) for all component version updates in this release.

* Improves touch and mobile usability for side panels and configuration screens ([NAS-139925](https://ixsystems.atlassian.net/browse/NAS-139925), [NAS-139786](https://ixsystems.atlassian.net/browse/NAS-139786), [NAS-138896](https://ixsystems.atlassian.net/browse/NAS-138896)).
  Side panels now scroll correctly in mobile browsers, canvas edge spacing is improved for touch targets, and the **Save** button on the **Add Rsync Task** screen is no longer hidden on small screens.

* Fixes TrueNAS updates failing with errors that could leave apps non-functional or set a broken boot environment as default ([NAS-139794](https://ixsystems.atlassian.net/browse/NAS-139794), [NAS-139545](https://ixsystems.atlassian.net/browse/NAS-139545)).
  A "pool or dataset is busy" error during updates could set an incomplete boot environment as default. A separate regression also caused apps to fail to start after updating. Both issues are resolved.

* Fixes the **System > Services** screen showing as empty ([NAS-139571](https://ixsystems.atlassian.net/browse/NAS-139571)).
  A regression could cause the services list to appear blank on affected systems, preventing users from starting, stopping, or configuring services from the UI.

* Fixes an issue where datasets could not be loaded in the UI ([NAS-140389](https://ixsystems.atlassian.net/browse/NAS-140389)).
  A middleware issue could prevent dataset information from loading on the **Datasets** screen, showing an error instead of the dataset tree.

* Fixes available space calculations for pools with special or dedup vdevs ([NAS-139820](https://ixsystems.atlassian.net/browse/NAS-139820)).
  Incorrect accounting could cause available space to display inaccurate values on pools using special allocation or dedup vdevs.

* Fixes an issue where virtual DRAID devices appeared as physical disks in the disk inventory ([NAS-140344](https://ixsystems.atlassian.net/browse/NAS-140344)).
  On pools using DRAID vdevs, virtual devices could be incorrectly counted alongside physical drives, causing inaccurate disk inventory results.

* Fixes datasets becoming unavailable after a ZFS send replication operation ([NAS-139363](https://ixsystems.atlassian.net/browse/NAS-139363)).
  A ZFS issue could cause target datasets to enter an unavailable state after a send operation completed. Datasets are now accessible immediately after replication finishes.

* Fixes a boot delay of up to 120 seconds on systems with VLAN interfaces configured for DHCP ([NAS-139038](https://ixsystems.atlassian.net/browse/NAS-139038)).
  Systems using VLAN interfaces with DHCP experienced long waits during boot due to a `dhcpcd` configuration issue. Boot now completes without the delay.

* Fixes an error that prevented setting secondary IP address aliases on network interfaces ([NAS-139803](https://ixsystems.atlassian.net/browse/NAS-139803)).
  A `KeyError: 'alias_interface_id'` error could occur when saving secondary aliases in the network interface configuration.

* Fixes the Samba Spotlight metadata service connection so that macOS Spotlight search works correctly on SMB shares ([NAS-137715](https://ixsystems.atlassian.net/browse/NAS-137715)).
  The Spotlight AF_UNIX socket connection was established as a non-privileged user, causing authentication failures. The connection now runs with the correct permissions.

* Fixes an error that prevented editing share ACLs ([NAS-139535](https://ixsystems.atlassian.net/browse/NAS-139535)).
  Users attempting to modify permissions on SMB or NFS shares through the ACL editor could receive errors and be unable to save changes.

* Fixes NFS shares showing no available actions in the **Shares** screen ([NAS-139490](https://ixsystems.atlassian.net/browse/NAS-139490)).
  The action buttons for NFS shares could fail to render correctly, preventing users from editing or deleting NFS shares from the UI.

* Fixes an error that prevented updating an iSCSI auth method when **Mutual CHAP** was selected ([NAS-139397](https://ixsystems.atlassian.net/browse/NAS-139397)).
  Users could not save changes to iSCSI authorized access entries with Mutual CHAP configured.

* Fixes USB and PCIe device passthrough to virtual machines ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).
  A regression in an earlier nightly build broke the ability to pass USB and PCIe devices through to VMs. Both USB and PCIe passthrough are restored in BETA.1.

* Fixes Rsync task setup failures related to remote path validation and host key verification ([NAS-139773](https://ixsystems.atlassian.net/browse/NAS-139773)).
  Remote path validation could incorrectly reject valid paths, and host key verification could fail even after accepting the key. Both issues are resolved.

* Fixes SNMP alerts that stopped sending notifications ([NAS-140259](https://ixsystems.atlassian.net/browse/NAS-140259)).
  A regression could cause SNMP alert notifications to fail silently on affected systems. SNMP monitoring integrations relying on TrueNAS alerts now receive notifications correctly.

* Fixes the CPU reporting chart to show both per-core and total CPU usage ([NAS-135633](https://ixsystems.atlassian.net/browse/NAS-135633)).
  The **Reporting** screen previously only showed aggregated CPU usage. Users can now view individual core utilization alongside the total.

* Fixes UI regressions introduced by an Angular framework upgrade, including session logouts on page refresh in Firefox and broken tooltips across multiple screens ([NAS-139491](https://ixsystems.atlassian.net/browse/NAS-139491), [NAS-139342](https://ixsystems.atlassian.net/browse/NAS-139342)).
  Firefox users were logged out unexpectedly on page refresh, and tooltips and contextual popovers stopped working throughout the interface. Both issues are resolved.

* Fixes the TrueNAS web UI preventing NVIDIA driver removal when the GPU has already been uninstalled ([NAS-137282](https://ixsystems.atlassian.net/browse/NAS-137282)).
  When an NVIDIA GPU was physically removed, the UI did not allow removing the associated driver package. The driver can now be removed independently of hardware presence.

<a href="#full-changelog" target="_blank">Click here</a> to see the full 26 changelog or visit the <a href="https://ixsystems.atlassian.net/issues?filter=14298" target="_blank">TrueNAS 26-BETA.1 Changelog</a> in Jira.

<!-- NIGHTLY CONTENT - preserved for reference, remove when no longer needed
**SMB Stateful Failover** (Enterprise, HA) — TrueNAS 26 introduces stateful SMB HA failover.
When enabled in the SMB service configuration, TrueNAS maintains SMB session state across controller failover events, allowing clients to reconnect without re-authentication.
Incompatible with SMB1 support and Multi-Protocol or Legacy share purposes.
See [Enabling SMB Stateful Failover]({{< ref "AddManageSMBShares#enabling-smb-stateful-failover" >}}) for details.
-->

{{< /expand >}}

  </div>

  <div data-tab-id="known-issues" data-tab-label="Known Issues">

{{< hint type="important" title="Known Issues in 26" >}}
These are ongoing issues that can affect multiple versions in the 26 series.
<br> When resolved, issues move to **Notable Changes** for the appropriate release.
{{< /hint >}}

### Current Known Issues

* The **Backup Tasks** dashboard card does not display **TrueCloud Backup** or **Periodic Snapshot** tasks, even when those tasks are configured and have completed successfully.
  The tasks run normally and appear as expected on the **Data Protection** screen; only the dashboard card omits them.
  Other task types, such as Replication and Cloud Sync, appear on the card as expected.
* Upgrading to TrueNAS 26 can disrupt two-factor authentication (2FA) for any account with a stored token interval other than 30 or 60 seconds. TrueNAS 26 supports only these two intervals and clears the stored 2FA secret for any affected account during the upgrade. A non-standard interval can come from the API, or from the global 2FA interval setting in TrueNAS releases before 24.04, which applied a single interval to every 2FA account on the system and persists across upgrades. The current web interface always uses a 30-second interval. See [Two-Factor Authentication](#two-factor-authentication) for who is affected and how to restore access.

<a href="https://ixsystems.atlassian.net/issues/?filter=14698" target="_blank">See the latest status on Jira</a> for public issues discovered in TrueNAS 26 that are being resolved in a future TrueNAS release.

See the [Release Notes](https://forums.truenas.com/c/release-notes/13) section of the TrueNAS forum for ongoing updates about known issues, investigations, and statistics about TrueNAS releases.

  </div>

  <div data-tab-id="major-features" data-tab-label="26 Major Features">

{{< include file="/static/includes/26FeatureList.md" >}}

  </div>
  <div data-tab-id="full-changelog" data-tab-label="Full 26 Changelog">
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
    initializeHugoTabs('release-tab-content-source', 'release-tabs-container', '26.0.0-rc.1');
});
</script>

<!-- CSV Changelog Table Script - Load outside tab content to prevent redeclaration -->
{{< changelog-scripts >}}
<script>
// Initialize changelog table for version
initializeChangelogTableForTabs('26');
</script>

## Upgrading TrueNAS {#upgrading}

<!-- Hugo-processed content for upgrade notes tab box -->
<div style="display: none;" id="tab-content-source">
  <div data-tab-id="upgrade-prep" data-tab-label="Preparing to Upgrade">

{{< include file="/static/includes/EarlyReleaseWarning.md" >}}

{{< include file="/static/includes/UpgradeNotesBoilerplate.md" >}}

* The TrueNAS REST API is removed in TrueNAS 26. Systems still using the REST API must migrate to the JSON-RPC 2.0 WebSocket API before upgrading. See [API Changes](#api-changes) for migration guidance and details about API authentication improvements in TrueNAS 26.

{{< include file="/static/includes/AppsUnversionedAdmonition.md" >}}

  </div>

  <div data-tab-id="api-changes" data-tab-label="API Changes">

### API Improvements in TrueNAS 26

#### REST API Removal

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

{{< include file="/static/includes/APIDocs.md" >}}

You can access TrueNAS API documentation in the web interface by clicking <i class="material-icons" aria-hidden="true" title="laptop" style="vertical-align: top;">laptop</i> **My API Keys** on the top right toolbar <i class="material-icons" aria-hidden="true">account_circle</i> user settings dropdown menu to open the **User API Keys** screen.
Click **API Docs** to view API documentation.

#### Improved API Authentication

TrueNAS 26 introduces `auth.login_ex` as a unified WebSocket API authentication method that supports password (`PASSWORD_PLAIN`), API key (`API_KEY_PLAIN`), OTP token (`OTP_TOKEN`), and the new SCRAM-SHA-512 (`SCRAM`) mechanism. SCRAM provides mutual authentication between client and server without transmitting raw key material.

The legacy `auth.login` and `auth.login_with_api_key` methods are deprecated and scheduled for removal in TrueNAS 27. Their functionality is fully replaced by `auth.login_ex`, which continues to support `API_KEY_PLAIN` and the other non-SCRAM mechanisms beyond TrueNAS 27. SCRAM is the recommended choice for new clients that can adopt it.

See the [SCRAM Authentication primer](https://github.com/truenas/middleware/blob/stable/26/docs/source/accounts/scram_authentication.rst) for guidance on implementing SCRAM in custom API clients and migrating pre-TrueNAS 26 API keys to the optimized precomputed format.

For the full list of deprecated and removed API methods, see [Feature Deprecations]({{< ref "Deprecations" >}}).

  </div>

  <div data-tab-id="two-factor-authentication" data-tab-label="Two-Factor Authentication">

### Two-Factor Authentication Interval Change

TrueNAS 26 restricts the two-factor authentication (2FA) token interval to 30 or 60 seconds. TrueNAS 26 validates Time-based One-Time Password (TOTP) login codes and accepts only these two intervals.

A non-standard interval could have been set through the API, or through the global 2FA setting in TrueNAS releases before 24.04, where the web interface exposed an editable interval field that applied a single value to every 2FA account on the system. That value persists across upgrades. The current web interface always sets a 30-second interval and no longer exposes this field, so 2FA configured through the UI on TrueNAS 24.04 or later uses the supported 30-second interval. A non-standard interval worked for web interface logins in earlier releases but stops working after upgrading to TrueNAS 26. Both local accounts and directory services (Active Directory or LDAP) accounts are in scope.

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

LXC containers, introduced as an experimental feature in earlier TrueNAS releases, are fully supported in TrueNAS 26.
No configuration migration is required for containers created in prior releases.

TrueNAS 26 adds the following container improvements:

- **Enterprise HA support** — Containers can now fail over between HA controllers ([NAS-138309](https://ixsystems.atlassian.net/browse/NAS-138309)).
  HA container failover requires a **static IP configuration**. Containers using DHCP do not fail over.
- **GPU passthrough** — NVIDIA and other supported GPU devices can now be assigned to LXC containers from the container configuration screen ([NAS-138569](https://ixsystems.atlassian.net/browse/NAS-138569), [NAS-138570](https://ixsystems.atlassian.net/browse/NAS-138570), [NAS-138700](https://ixsystems.atlassian.net/browse/NAS-138700)).
- **USB and PCIe passthrough fixes** — A regression that prevented USB and PCIe device passthrough to containers and VMs is resolved in BETA.1 ([NAS-139045](https://ixsystems.atlassian.net/browse/NAS-139045), [NAS-139356](https://ixsystems.atlassian.net/browse/NAS-139356)).

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

{{< include file="/static/includes/26UpgradeMethods.md" >}}

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

{{< component-versions "26" >}}

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
