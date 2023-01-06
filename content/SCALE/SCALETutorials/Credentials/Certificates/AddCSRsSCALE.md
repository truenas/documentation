---
title: "Managing Certificate Signing Requests"
description: "This article provides basic instructions on adding and managing SCALE certificate signing requests (CSRs)."
weight: 30
aliases:
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
---

{{< toc >}}


The **Certificate Signing Requests** widget allows users configure the message(s) the system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate. 

To add a new CSR:

First enter the name and select the CSR type. 
The **Identifier and Type** step lets users name the certificate signing request (CSR) and choose whether to create a new CSR or import an existing CSR.     
Users can also select a predefined certificate extension from the **Profiles** drop-down list.

Next, select the certficate options for the CSR you selected. 
The **Certificate Options** step provides options for choosing what type of private key type to use, the number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

Now enter the information about the certificate. 
The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

Lastly, enter any extra constraints you need for your scenario. 
The **Extra Constraints** step contains certificate extension options.

* **Basic Constraints** when enabled this limits the path length for a certificate chain.
* **Authority Key Identifier** when enable provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** when enabled defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** when enabled it further refines key usage extensions.

Review the certificate options. If you want to change something Click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the CSR.

{{< taglist tag="scalecsrs" limit="10" >}}