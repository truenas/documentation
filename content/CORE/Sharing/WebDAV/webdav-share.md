---
title: "Configuring a WebDAV Share"
description: "How to create a general purpose WevDAV share."
tags: ["networking","WebDAV"]
---

A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.

To get started, make sure a [Dataset](/CORE/Storage/datasets/) has been created. This dataset stores the data that will be shared. If a dataset already exists, proceed to turning the WebDAV service on.

## WebDAV Service

To access a WebDAV share, make sure the related system service is activated.
To turn on the WebDAV service, go to **Services** and click the slider for *WebDAV*. If you want to activate the service when the TrueNAS system boots, set *Start Automatically*.

The WebDAV service settings can be configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>. It is recommended to set a new WebDAV password and use the *HTTPS* protocol. Using *HTTPS* as the protocol requires an SSL certificate. The *freenas_default* certificate can be used.

The HTTP and HTTPS ports are also configurable.
Make sure that the port assigned to the WebDAV share isn't already in use on the network.
Don't forget to click *SAVE* when changing any settings.

<img src="/images/WebDAV4.png">

## WebDAV Share

Now it is time to create the WebDAV share. Go to **Sharing > WebDAV Shares** and click *ADD*.

Enter a descriptive name for the share and use the file browser to select the dataset to be shared. An optional *Description* can be set to help identify the share. To disable modifying the shared data, set *Read Only*.

By default, *Change User & Group Ownership* is set. This setting changes existing ownership of **ALL** files in the share to user *webdav* and group *webdav*. If unset, ownership of files to be accessed through WebDAV must be manually set to the *webdav* or *www* user/group. It is recommended to keep this option set.

By default, a new WebDAV share is enabled after creation. To create the share but not immediately enable it, unset *Enable*.
Clicking *SUBMIT* creates the share.

<img src="/images/WebDAV1.png">
<img src="/images/WebDAV2.png">
<img src="/images/WebDAV3.png">

## Connecting to the WebDAV Share

After creating and activating the share, you can access the shared data by entering <code><i>protocol</i>://<i>IPaddressofTrueNAS</i>:<i>portNumber</i>/<i>shareName</i></code> in a web browser, where *protocol* is the protocol configured for the service (HTTP or HTTPS), *IPaddressofTrueNAS* is the IP address of the TrueNAS system, *portNumber* is the port number configured in the WebDAV service, and *shareName* is the name that was set when the share was created.

When first accessing the share in the browser, a username and password is required. Currently, the ony user supported is *webdav*. Enter the username *webdav* and the password that was set in the WebDAV service.
