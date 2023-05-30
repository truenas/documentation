---
title: "Managing Certificate Authorities"
description: "Provides basic instructions on adding and managing SCALE certificate authorities (CAs)."
weight: 20
aliases:
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
---

{{< toc >}}



The **Certificate Authorities** widget lets users set up a certificate authority (CA) that certifies the ownership of a public key by the named subject of the certificate.

To add a new CA:

First, add the name and select the type of CA.
The **Identifier and Type** step lets users name the CA and choose whether to create a new CA or import an existing CA.     
Users can also select a predefined certificate extension from the **Profiles** drop-down list.

Next, enter the certificate options. Select the key type. The **Key Type** selection changes the settings displayed.
The **Certificate Options** step provides options for choosing what type of private key to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the CA uses, and how many days the CA lasts.

Now enter the certificate subject information. 
The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

Lastly, enter any extra constraints you need for your scenario. 
The **Extra Constraints** step contains certificate extension options.

* **Basic Constraints** when enabled this limits the path length for a certificate chain.
* **Authority Key Identifier** when enable provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** when enabled defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** when enabled it further refines key usage extensions.

Review the CA options. If you want to change something Click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the CA.

{{< taglist tag="scalecas" limit="10" >}}