---
title: "Enabling KMIP"
description: "Key Management Interoperability Protocol Configuration" 
tags: ["KMIP", "encryption", "certificates", "TrueNAS Enterprise"]
---


{{% pageinfo %}}
KMIP is an Enterprise only feature, contact the [iXsystem Sales Team](https://www.ixsystems.com/contact-us/) if you need KMIP functionality.
{{% /pageinfo %}}

The Key Management Interoperability Protocol (KMIP) is an extensible client/server communication protocol for the storage and maintenance of key, certificate, and secret objects. This facilitates data encryption by simplifying encryption key management. Keys may be created on a server and then retrieved, possibly wrapped by other keys. Both symmetric and asymmetric keys are supported, including the ability to sign certificates. KMIP also allows for clients to ask a server to encrypt or decrypt data, without needing direct access to the key.

By implementing KMIP, enterprises no longer need to struggle with multiple key management services, and can single on an individual trusted source for creating, using and then destroying the keys.

More infomration on the Key Management Interface Protocol (KMIP) can he read in [the official KMIP Documentation](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).


To configure TrueNAS to work with your KMIP server, verify that the configuration of the KMIP server is known and have Certificates have been generated.  Go to **System** > **CA's** and click Add.  In the `Type` drop down maneu, select **Import CA**.  Name the CA and paste the Certrificate info and Private Key for the server.  Do not add a passphrase, and click **Submit**.

Next go to **System** > **Certificates** and click **add**. In the `Type` drop down maneu, select **Import Certificate**.  Add a user and paste the Certrificate info and Private Key for that user.  Do not add a passphrase, and click **Submit**.

Open  **System** > **KMIP** to complete the configuration.

<img src="/images/TN-12.0-KMIP.PNG">
<br><br>
Add in the server address.  Select the user that was added from the `Certificate` drop down and select the KMIP server from the `Certificate Authority` drop down.

Enable the features desired and click **Save**.  Re-opening the KMIP page will show the KMIP Key Status.
<img src="/images/TN-12.0-KMIP-synced.PNG">
<br><br>
