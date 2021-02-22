---
title: "S3 Object Sharing"
description: "How to set up and connect to Simple Storage Service (S3) object storage."
tags: ["networking","S3"]
---

This tutorial describes how to start a local S3 service on TrueNAS and connect to it from a networked client system with the Minio Browser, s3cmd, and S3 Browser. The images show the latest TrueNAS Core web interface and feature set. S3 support available on TrueNAS 11.1-U5 and later versions.

## Background

S3 is an object storage protocol used by many major cloud providers including Amazon Web Services™. On TrueNAS, the service is another way to store files, and can be viewed with a web browser. Because S3 is the de facto standard for cloud-based storage, setting up an S3 service allows organizations or online application developers to use TrueNAS to replace or archive expensive cloud storage.  

## Setting up the S3 service

Go to Services -> S3 and click on the pencil icon to edit.

<img src="/images/S3-SelectConfigure.png"><br><br>

Set up the configuration inside this window.

<img src="/images/S3-EditConfig.png"><br><br>

Select IP address 0.0.0.0 to allow the service to listen on any IP address. Select the TrueNAS IP address to constrain it to a specific network.
The default port is 9000, but it can be changed as needed.

Set an access key and secret key.

Select a clean dataset. Files are managed by Minio as objects, and can NOT be mixed with other dataset files. New datasets can be created by going to Storage -> Pools -> three dot menu -> Add Dataset to create a new one.

<img src="/images/S3-AddDataset.png"><br><br>

Choose to allow an S3 web browser (Minio Browser).

Choose an SSH certificate for more secure connections.

Start the service and select whether to start automatically (on system boot). 

<img src="/images/S3-EnableService.png"><br><br>

Test access to the Minio Browser by opening a web browser and typing the TrueNAS IP address with the TCP port. For example: http://192.168.0.3:9000

Buckets can be created and files uploaded using the Minio Browser.

<img src="/images/S3-MinIOBrowser.png"><br><br>

NOTE: Port 9000 must be allowed through on the network firewall to permit bucket creation and file uploads.

## Setting Up s3cmd

Linux or macOS users must have the s3cmd service installed before beginning this setup. On Windows, users can also refer to S3Express for a similar command line experience. 

Ubuntu can access the configuration by running s3cmd --configure to walk through important settings.

Enter the specified access key and the secret key. Under the S3 Endpoint enter the TrueNAS IP address followed by TCP port, and reply N to the DNS-style bucket+hostname. 

Save the file. On Linux the default is in the home directory `~/.s3cfg`.

If the connection has any issues, open the config file again to clean it up. In Ubuntu use nano .s3cfg or vi .s3cfg or gedit .s3cfg depending on the preferred text editor. For other operating systems, .s3cfg file location and editing tools may vary. 

Scroll down to the host_bucket area and make sure the %(bucket)s. portion is removed and the address points to the IP_address:TCP_port for the system.

**Right:**
host_base = 192.168.123.207:9000
host_bucket = 192.168.123.207:9000

**Wrong:**
host_base = 192.168.123.207
host_bucket = %(bucket)s.192.168.123.207

Poll the buckets using `s3cmd ls`. The buckets created with the Minio Browser should be visible.

For more information on using Minio with s3cmd, see: https://docs.minio.io/docs/s3cmd-with-minio.html 
https://s3tools.org/s3cmd 

## Connect with S3 Browser

On Windows PCs, the S3 Browser is another convenient way to connect to the Minio S3 on a TrueNAS system. To set it up, first install the S3 Browser. 

After installation completes, add a new account. 

<img src="/images/S3-Explore.png"><br><br>

In the settings, select S3 Compatible Storage as the Account Type, then enter the Minio access point similar to the S3cmd setup (TrueNAS_IP_address:9000 or other port if set differently).  

Select the SSL settings appropriate for the particular setup. The default assumes SSL in S3 Browser, but for a LAN attached session, this may or may not have been set.

<img src="/images/S3-ExploreAccount.png"><br><br>

It is possible to access, create new buckets, or upload files to created buckets.

<img src="/images/S3-ExploreBrowse.png"><br><br>
