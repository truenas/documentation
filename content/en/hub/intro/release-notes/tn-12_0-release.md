---
title: "TrueNAS 12.0-RELEASE"
---

iXsystems is pleased to announce the general availability of TrueNAS 12.0 RELEASE! 
This is the first production version of the unified FreeNAS and TrueNAS release that is renamed to TrueNAS CORE and TrueNAS Enterprise, respectively. 
Since the first 12.0 Release Candidate, an additional 30 final polishing bugs have been found and fixed in the full 12.0-RELEASE version. 
The first maintenance release of TrueNAS 12.0, U1, is anticipated in December.

## TrueNAS 12.0

The TrueNAS 12.0 release is a major new update to the TrueNAS family of storage products.
TrueNAS CORE is the successor to FreeNAS, which is still fully open-source and offering the same functionality and more features than ever before.
Included in version 12 are major changes to the ZFS filesystem, bringing all upcoming OpenZFS 2.0 (Formerly ZFS on Linux).
Additionally, version 12 includes these notable changes and improvements:

<ul style="list-style: none;">
	<li><b>ZFS Native Crypto</b> - Per-dataset encryption and support for encrypted replication to untrusted targets.</li>
	<li><b>2 Factor Authentication</b> - Allows using Applications such as “Google Authenticator” to provide an extra level of security before logging into the UI or SSH access.</li>
	<li><b>KMIP Support</b> - TrueNAS Enterprise now adds the ability to interface with KMIP servers for the storage and retrieval of passwords and encryption keys.</li>
	<li><b>Performance Improvements</b> - Virtually every area of the platform has been updated and includes some major performance improvements, including SMB, iSCSI, ZFS and more.</li>
	<li><b>API Keys</b> - All of TrueNAS can be configured with <a href="https://www.truenas.com/docs/hub/additional-topics/api/" target="_blank">TrueNAS API v2.0</a> and now supports API keys for remote access. The v1.0 API is no longer supported.</li>
	<li><b>Fusion Pools</b> - Allows creating pools with all-flash vdevs that store metadata and small-block IO. This provides flash-like performance on all metadata operations, but with the cost effectiveness of spinning disk for storage blocks.</li>
	<li><b>VPN Support</b> - Support for TrueNAS acting as both an OpenVPN Server and Client, depending on your VPN needs.</li>
	<li><b>TrueCommand Cloud Integration</b> - TrueNAS 12.0 systems can be connected directly to a TrueCommand Cloud account for scaled monitoring and management of your TrueNAS systems - no additional hardware needed! For Early Access to TrueCommand Cloud, go to <a href="portal.ixsystems.com" target="-blank">portal.ixsystems.com</a> and create an iX account, then send an email to <a href="mailto:truecommand-sales@ixsystems.com">truecommand-sales@ixsystems.com</a> to request Early Access to the TrueCommand Cloud Services. Be sure to include the email address that you used to create your iX Account. For step-by-step instructions for configuring TrueCommand Cloud, see this article on the new TrueNAS Documentation Hub: <a href="https://www.truenas.com/docs/hub/truecommand/tc_cloud/" target="_blank">https://www.truenas.com/docs/hub/truecommand/tc_cloud/</a></li>
</ul>

These major changes are also paired with numerous other bug fixes and quality-of-life type improvements to the UI and APIs for users.
We’ve also revamped our [Documentation](https://www.truenas.com/docs/), focusing more content on how to accomplish specific tasks, reducing the learning curve and time normally spent on deploying TrueNAS in a variety of storage environments.

Here is the full list of fixes and changes in 12.0-RELEASE:

## Bug Fixes

## Known Issues
