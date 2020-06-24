---
title: "Configuring a WebDAV Share"
description: "A how-to guide on creating a general purpose WevDAV share."
type: docs
---

A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy
to share a TrueNAS dataset and its contents over the web.

To get started, make sure a
<a href="/docs/initial-setup/storage/datasets">dataset has been created</a>.
This dataset serves as share data storage. If a dataset already exists, proceed
to turning the WebDAV service on.

## WebDAV Service

To turn on the WebDAV service, go to **Services** and click the slider for
*WebDAV*. If you wish to turn the service on automatically when the TrueNAS
system is turned on, check the *Start Automatically* box.

> NOTE: The WebDAV share will not work if the service is not turned on.

The WebDAV service settings can be configured by clicking
<i class="fas fa-pen"></i>. It is recommended to set a new WebDAV password and
use the HTTPS protocol. Using *HTTPS* as the protocol requires an SSL
certificate. The *freenas_default* certificate can be used. The HTTP and HTTPS
ports can be changed if desired. Make sure that the port assigned to the
WebDAV share isn't already in use on the network. Don't forget to
click *SAVE* when changing the settings.

## WebDAV Share

Now it is time to create the WebDAV share. Go to
**Sharing > WebDAV Shares** and click *ADD*. Enter a descriptive name for the
share. Use the file browser to select the dataset to be shared. An optional
*Description* can be set to help identify the share. If you wish to create the
share as a read only share, set *Read Only*. By default. the option
*Change User & Group Ownership* is set. This setting changes existing ownership
of ALL files in the share to user *webdav* and group *webdav*. If unset,
ownership of files to be accessed through WebDAV must be manually set to the
*webdav* or *www* user/group. It is recommended to keep this option set. At the
time of creation, the WebDAV share is enabled by default. If you wish to create
the share but not immediately enable it, unset the *Enable* checkbox. Clicking
*SUBMIT* creates the share.

## Connecting to the WebDAV Share

After setting up the share, you can access the contents of it by typing
<code><i>protocol</i>://<i>IPaddressofTrueNAS</i>:<i>portNumber</i>/<i>shareName</i></code>
where *protocol* is the protocol configured for the service (HTTP or HTTPS),
*IPaddressofTrueNAS* is the IP address of the TrueNAS system, *portNumber* is
the port number configured in the WebDAV service, and *shareName* is the name
that was set when the share was created. When first accessing the share in the
browser a username and password is required. Currently the ony user supported
is *webdav*. Enter the username *webdav* and the password that was set in the
WebDAV service.
