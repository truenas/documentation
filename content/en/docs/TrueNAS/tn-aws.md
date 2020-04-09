---
title: "TrueNAS on Amazon Web Services (AWS)"
linkTitle: "TrueNAS on AWS"
description: "How to create a TrueNAS image and use it with Amazon Web Services"
---

{{% pageinfo version="FreeNAS 11.2" %}}
{{% /pageinfo %}}

## Process Summary

* Requirements
  * FreeBSD system
  * AWS Account
  * S3 Bucket
  * User with permissions for EC2
    * Download the user key to the local working directory
  * Install bhyve and bsdec2-image-upload
* Create TrueNAS image file
  * Download TrueNAS .iso
  * Create blank image file
  * Load virtualization module
  * Create tap and bridge interface
  * Load image and iso into bhyve
  * Install TrueNAS
  * Reload image into bhyve
* Configure image networking
  * Reset network interface
  * Create DHCP interface `xn0`
  * Reset configuration to default
  * Power off device
* Upload image to EC2
  * Description and region name are required
* Launch EC2 instance
  * Select name created with image
  * t2.medium is the recommended instance type
  * Add volumes as needed
  * Step 6: add new rule
    * Type: `http`
    * Source: `Custom, 0.0.0.0/0`
  * Launch the instance
* Wait for AWS to finish status checks
* Paste public DNS link in browser to access TrueNAS web interface

## Using Virtualized TrueNAS with Amazon Web Services (AWS)

These instructions demonstrate how to create a virtualized TrueNAS image on FreeBSD, configure it with Amazon Elastic Compute Cloud (EC2), and access the TrueNAS web interface.
There are a few things that must be prepared before building the image.
Create an [AWS account](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=default&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start),
[S3 bucket](https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html),
and a [user with permissions to EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
After creating the IAM user, download an [Access Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
to the working directory on the FreeBSD system.
The FreeBSD system needs two applications to create, configure, and upload the virtual machine image:
[bhyve](https://bhyve.org/)
and [bsdec2-image-upload](https://www.freshports.org/net/bsdec2-image-upload/).

### Create TrueNAS Image

When all the prerequisites are ready, [download a TrueNAS .iso file](https://www.freenas.org/download-freenas-release/).
Any version from FreeNAS 11.2 and newer will work.
Open a shell and go to your local working directory.
Create an empty image file with `truncate -s 16G {TRUENAS}.img`.
Replace {TRUENAS} with your name for the new image file.
We'll use this empty image as the installation target for the TrueNAS *.iso*.

Next, load the virtualization module and create a tap and bridge interface:

```
kldload -n vmm
ifconfig tap0 create
sysctl net.link.tap.up_on_open=1
ifconfig bridge0 create
ifconfig bridge0 addm re0 addm tap0
ifconfig bridge0 up
```

Use `bhyveload -m 4GB -d truenas.img vm0` to load the image into the hypervisor and create virtual machine *vm0* with four gigabytes of memory.
To install TrueNAS into the image, load both the image and TrueNAS *.iso* file into bhyve: `bhyve -c 2 -m 4G -H -A -P -g 0 -s 0,hostbridge -s 1,lpc -s 2,virtio-net,tap0 -s 3,virtio-blk,{TRUENAS}.img -s 31,ahci-cd,{TRUENAS-VERSION}.iso -l com1,stdio vm0`.
Replace {TRUENAS} with the name of the image file and {TRUENAS-VERSION} with the TrueNAS *.iso* file name.
When the TrueNAS installer opens, make sure booting with BIOS is chosen and start the installation.
Power off the device when the installation is done.

### Configure Image Networking

Load the image into bhyve again:

```
bhyveload -m 4G -d {TRUENAS}.img vm0
bhyve -c 2 -m 4G -H -A -P -g 0 -s 0,hostbridge -s 1,lpc -s 2,virtio-net,tap0 -s 3,virtio-blk, {TRUENAS}.img -l com1,stdio vm0
```

To make sure the virtual machine's network settings are compatible with EC2, reset the network interface.
Create a new DHCP interface named `xn0`, then reset configurations to default.
Power off the device.

### Upload Image to EC2

Now that the image has been created and properly configured, it’s time to upload it to EC2.
Use `bsdec2-image-upload` with the image file:
`bsdec2-image-upload --public {TRUENAS}.img TrueNAS {description} {region} {S3 bucket} KEY.pem`
Replace {TRUENAS} with the image file name, {description} with a unique identifier for the Amazon Machine Image (AMI), {region} with your [Amazon region](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html), and {S3 bucket} with your AWS image storage location.
`KEY.pem` is the IAM user access key that was downloaded earlier.
All of these elements are required for the upload to start.

`bsdec2-image-upload` sends the image to the AWS bucket in 10MB segments.
The upload can take as long as an hour, depending on connection speeds and other factors.

When the S3 bucket upload is complete, the script will create a snapshot, register the AMI, and copy the AMI to all regions for mirrors.
The upload command fails if the image doesn't work for some reason.
For example, using a name that already exists will cause the upload command to fail.
If this happens, fix the error and rerun the command.
When successful, the upload simply finishes.

### Accessing AMI TrueNAS Interface

With the Amazon Machine Image (AMI) created and uploaded to AWS, an EC2 instance needs to be activated before the TrueNAS interface is accessible.
Log in to your Amazon Web Services account and click the `EC2` Compute service.

<img src="/images/aws-management-console.png">
<br><br>

Find the **Launch instance** section, open the **Launch instance** drop down, and click **Launch instance**.

<img src="/images/aws-ec2-dashboard.png">
<br><br>

The instance launcher follows several steps:

1. Click **My AMIs** and select the name that was uploaded by `bsdec2-image-upload`.
2. Any instance will work, but **t2.medium** is recommended for TrueNAS.
3. Skip this step.
4. Add volumes according to your TrueNAS use case.
5. Skip this step.
6. Add a rule with **http** as the type and the source `Custom, 0.0.0.0/0`.
   This allows you to connect to the TrueNAS web interface.
7. Review your settings and press **Launch**.

The running instance is added to the EC2 dashboard or can be seen in the **Instances** menu.
When the image has fully started, AWS performs two status checks.
The first checks for AWS uptime, and the second makes sure your instance is in a functional state.
When both checks have passed, you can paste the Public DNS link in a new browser window to connect to the TrueNAS web interface.
