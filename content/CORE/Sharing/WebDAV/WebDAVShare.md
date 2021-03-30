---
title: "Share Creation"
weight: 10
---

{{< toc >}}

A Web-based Distributed Authoring and Versioning (WebDAV) share makes it easy to share a TrueNAS dataset and its contents over the web.
{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

## Share Configuration

Go to **Sharing > WebDAV Shares** and click *ADD*.

![SharingWebdavAdd](/images/CORE/12.0/SharingWebdavAdd.png "Creating a WebDAV Share")

Enter a share *Name* and use the file browser to select the dataset to be shared.
An optional *Description* helps to identify the share.
To prevent user accounts from modifying the shared data, set *Read Only*.

By default, *Change User & Group Ownership* is set.
This changes existing ownership of *ALL* files in the share to the *webdav* user and group accounts.
The default simplifies WebDAV share permission, but is unexpected, so the web interface shows a warning:

![Webdav Add Warning](/images/CORE/12.0/SharingWebdavAddWarning.png "Services Webdav Add Warning")

This warning does not show when *Change User & Group Ownsership* is unset.
In that situation, shared file ownership must be manually set to the *webdav* or *www* user and group accounts.

By default, the new WebDAV share is immediately active.
To create the share but not immediately activate it, unset *Enable*.
Click *SUBMIT* to create the share.

## Service Activation

Creating a share immediately opens a dialog to activate the WebDAV service:

![WebdavServiceEnable](/images/CORE/12.0/SharingCreateServiceEnable.png "WebDAV Service Activation from Share")

To later enable or disable the WebDAV system service, go to **Services** and toggle *WebDAV*.
To automatically start the service when TrueNAS boots, set *Start Automatically*.
Click the <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i> to change the service settings.

![WebDAVServiceOptions](/images/CORE/12.0/ServicesWebdavOptions.png "WebDAV Service Options")

For better data security, set the *Protocol* to *HTTPS*.
This requires choosing an SSL certificate, but the *freenas_default* certificate is always available.
All of the *Protocol* options require defining a *Port* number.
Make sure the WebDAV service port is not already used on the network.

To prevent unauthorized access to the shared data, set the *HTTP Authentication* to either *Basic* or *Digest* and create a new *Webdav Password*.

Be sure to click *SAVE* after making any changes.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.
To see the shared data, open a new browser tab and enter `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}`.
Replace the elements in curly brackets `{}` with your chosen settings from the WebDAV share and service.
Example: `https://10.2.1.1:8081/mnt/corepool1/newdataset`

When the *Authentication* WebDAV service option is set to either *Basic* or *Digest*, a user name and password is required.
Enter the user name *webdav* and the password defined in the WebDAV service.
