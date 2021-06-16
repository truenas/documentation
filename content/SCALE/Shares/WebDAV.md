---
title: "WebDAV Shares"
weight: 40
---

{{< toc >}}

WebDAV stands for Web-based Distributed Authoring and Versioning, which is an extension to HTTP that lets view/edit remote content on the web. In TrueNAS, WebDAV shares can be created so that authenticated users can browse the contents of a specified pool, dataset, or directory from a web browser.

{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

## Share Configuration 

Go to **Shares > WebDAV** and click *Add*.

![SharingWebdavAdd](/images/SCALE/SharingWebdavADD.png "Creating a WebDAV Share")

Enter a share *Name* and use the file browser to select the dataset to be shared. An optional *Description* helps to identify the share. To prevent user accounts from modifying the shared data, set *Read Only*.

By default, *Change User & Group Ownership* is set.  This changes existing ownership of *ALL* files in the share to the *webdav* user and group accounts.  The default simplifies WebDAV share permission, but is unexpected, so the web interface shows a warning:

![Webdav Add Warning](/images/SCALE/SharingWebdavAddWarning.png "Services Webdav Add Warning")

Setting the *Confirm* checkbox and clicking *OK* will create the share.

{{< hint info >}}
 
This warning does not show when *Change User & Group Ownsership* is unset. In that situation, shared file ownership must be manually set to the *webdav* or *www* user and group accounts.
{{< /hint >}}

By default, the new WebDAV share is immediately active. To create the share but not immediately activate it, unset *Enable*.  If *Change User & Group Ownsership* was unset,
click *Save* to create the share.

There are multiple ways to enter the edit mode for a share:
1. Click on either the **WebDAV** header or *View Details*.  From this page click <i class="material-icons" aria-hidden="true" title="Expand">expand_more</i> then *Edit*.
2. Clicking anywhere within the row of the share you created will open the **Edit WebDAV** section.

## Service Activation

Creating a share immediately opens a dialog to activate the WebDAV service:

![WebdavServiceEnable](/images/SCALE/SharingCreateServiceEnable.png "WebDAV Service Activation from Share")

To later enable or disable the WebDAV system service, go to either **System Settings > Services** and toggle *WebDAV*, or **Shares** and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> within the **WebDAV** header and select *Turn Off Service*.  To automatically start the service when TrueNAS boots, set *Start Automatically*. Click the <i class="material-icons" aria-hidden="true" title="edit">edit</i> to change the service settings.

![WebDAVServiceOptions](/images/SCALE/SharingWebdavServiceOptions.png "WebDAV Service Options")

For better data security, set the *Protocol* to *HTTPS*. This requires choosing an SSL certificate, but the *freenas_default* certificate is always available.
All of the *Protocol* options require defining a *Port* number. Make sure the WebDAV service port is not already used on the network.

To prevent unauthorized access to the shared data, set the *HTTP Authentication* to either *Basic* or *Digest* and create a new *Webdav Password*.

Be sure to click *Save* after making any changes.

## Connecting to the WebDAV Share

WebDAV shared data is accessible from a web browser.  To see the shared data, open a new browser tab and enter `{PROTOCOL}://{TRUENASIP}:{PORT}/{SHAREPATH}`.
Replace the elements in curly brackets `{}` with your chosen settings from the WebDAV share and service.  Example: `https://10.2.1.1:8081/mnt/corepool1/newdataset`

When the *Authentication* WebDAV service option is set to either *Basic* or *Digest*, a user name and password is required.  Enter the user name *webdav* and the password defined in the WebDAV service.
