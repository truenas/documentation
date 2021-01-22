---
title: "CORE and Enterprise"
geekdocCollapseSection: true
weight: 10
---

TrueNAS CORE is the community edition of the TrueNAS Open Storage OS, and the successor to FreeNAS. Enterprise-grade, yet completely free to use, CORE is built on the powerful OpenZFS file system to keep data safe and secure while providing block, file, and object storage over a network to back up and share files, serve media, and many other data storage applications. With over ten million downloads and one million deployments, TrueNAS CORE is the world’s most popular software-defined storage.

TrueNAS Enterprise is designed for business-critical data, 24×365 operation, and full Enterprise-grade support. It is delivered as turnkey systems with High Availability (HA) options. Enclosure management, proactive support, and integration with key vendors like VMWare and Veeam are included. Enterprise support services with 24×365 coverage and onsite support options are backed by a global spares network. TrueNAS Enterprise makes it easy to integrate the storage into your organization’s IT infrastructure and deliver reliable and performant storage.

The topics on this page are arranged to guide you through learning about TrueNAS, a basic setup guide for quickly installing and doing a basic system configuration, then deeper documentation of the web interface menus options.
TrueNAS CORE and Enterprise share the same code base and documentation, but in situations where an article applies only to CORE or Enterprise a notice is added across the top of the article.

{{< tabs "CORE Topics" >}}
{{< tab "Overview" >}}
<img class="topic-image" src="/images/co_work.jpg">Start by learning all about TrueNAS! Read about the software features, keep up with the development, and find hardware recommendations for installing TrueNAS.

[CORE Hardware Guide](/hub/intro/corehardwareguide/)

{{< /tab >}}
{{< tab "Getting Started" >}}
<img class="topic-image" src="/images/jump.jpg">
After discovering if your hardware is right for TrueNAS, move to downloading and installing the software.
After installing, you'll want to log in to the web interface and start configuring the system, including the system networking.
Next, move to reviewing your system security by creating user and group accounts, setting up your directory services, and reviewing best practices.
After networking and security configuration is complete, the system is ready for setting up data storage and alert notifications.

<a href="/hub/initial-setup/install/">Installation and Update Procedures</a><br>
<a href="/hub/initial-setup/firsttimelogin/">First-time Configuration</a><br>
<a href="/hub/initial-setup/networking/">Configuring Networking</a><br>
<a href="/hub/initial-setup/security/">Credentials and Security</a><br>
<a href="/hub/initial-setup/storage/">Setting up Storage</a>
{{< /tab >}}
{{< tab "Data Sharing" >}}
<img class="topic-image" src="/images/laptop.jpg">
With the initial system configuration done, set up file sharing with the different protocols built into TrueNAS to pull data into the system or share files on your network.

<a href="/hub/sharing/smb/">Server Message Block (SMB)</a><br>
<a href="/hub/sharing/nfs/">Network File System (NFS)</a><br>
<a href="/hub/sharing/iscsi/">Block Sharing (iSCSI)</a><br>
<a href="/hub/sharing/afp/">Apple Filing Protocol (AFP)</a><br>
<a href="/hub/sharing/webdav/">WebDAV</a><br>
<a href="/hub/sharing/ftp-sftp/">FTP / SFTP</a><br>
<a href="/hub/sharing/s3-object-store/">S3 Object</a>
{{< /tab >}}
{{< tab "Advanced" >}}
<img class="topic-image" src="/images/clipboard.jpg">
For more complicated use cases, TrueNAS supports many different administrative tasks such as monitoring system statistics, additional scripting, and backing up the system configuration.
Automatic data back up, sync, or other system maintenance tasks can also be scheduled.
There are also many different advanced features that unlock the full potential of TrueNAS, such as modifying Access Control Lists, using plugins and Virtual Machines (VMs), and reconfiguring High-Availability in TrueNAS Enterprise.

<a href="/hub/tasks/administrative/">System Administration</a><br>
<a href="/hub/tasks/scheduled/">Automated Tasks</a><br>
<a href="/hub/tasks/advanced/">Advanced Procedures</a>
{{< /tab >}}
{{< tab "Solution Integrations" >}}
<img class="topic-image" src="/images/spark_idea.jpg">
Articles discussing how to integrate TrueNAS with various external applications.

<a href="/hub/solutions/kubernetes/">Kubernetes®</a><br>
<a href="/hub/solutions/openstack/">OpenStack®</a><br>
<a href="/hub/solutions/veeam/">Veeam®</a><br>
<a href="/hub/solutions/vmware/">VMware®</a>
{{< /tab >}}
{{< tab "example" >}}
<img class="topic-image" src="/images/sml.jpg">

{{< /tab >}}
{{< tab "Additional Topics" >}}
<img class="topic-image" src="/images/knowledge.jpg">
Want to become a TrueNAS expert?
These additional topics help fill in a staggering amount of detail about TrueNAS.
They include reference materials that detail each field in the TrueNAS user interface, deep dives into TrueNAS, and miscellaneous errata.
Topics include articles that apply to earlier specific versions of TrueNAS (and FreeNAS), along with previous version release notes.
The Application Programming Interface is also detailed here, along with simple instructions for creating an API key.

<a href="/hub/additional-topics/reference/">Reference Articles</a><br>
<a href="/hub/additional-topics/usagerecommendations/">Usage Optimizations</a><br>
<a href="/hub/additional-topics/legacy/">Legacy Documentation</a><br>
<a href="/hub/additional-topics/api/">API Documentation</a>
{{< /tab >}}
{{< /tabs >}}