---
title: "Configuring a 3rd Party VPN service on TrueNAS"
description: "This article describes how to configure OpenVPN client on TrueNAS 12.0."
geekdocCollapseSection: true
weight: 20
tags:
- corecommunityguides
---

TrueNAS includes the ability to run OpenVPN.  This is a short tutorial to configure the OpenVPN client on TrueNAS 12.0.

{{< hint info >}}
Many VPN services are provided by 3rd parties that are unaffiliated with iXsystems. Please verify compatibility and pricing with your provider before integrating with TrueNAS.
{{< /hint >}}

{{< toc >}}

Prerequisite: An OpenVPN server running with a similar configuration to these configuration file settings:

{{< expand "Example OpenVPN Configuration File" "v" >}}
```
dev tun
persist-tun
persist-key
cipher AES-128-CBC
auth SHA512
tls-client
client
resolv-retry infinite
remote vpn.domain.org 1194 udp
lport 0
verify-x509-name "vpn.domain.org " name
auth-user-pass
remote-cert-tls server
comp-lzo adaptive

<ca>
-----BEGIN CERTIFICATE-----
MIIFgNGGD2bjNiJRSeJfugreDJkqhgh57w0BER8GFADBrMtMwEQYJYRRDEwuPcGVu
UW+LBmf6rq+7zqi4UH+f+zB566FOpEwwSjEGA1UETMBEAxMKT3BlblZQTi1DQTEL
...
9Iw5MNx9phXRlZjwMX0L3pteGKNUNJlmgQZSjI1ZNw7K3CZsIB47QFwalqkGFqGr
L0nObyspUxbcdqZVO/vbo3hFjNqVPjqkO4bP94G7D6w+W0ZHF6TXPmScvo2c9XVs
qnpyhawELAHtDy3keG1Hf/A+D6nTGMUb5+7E9Lw9WS+M1B6jrE
-----END CERTIFICATE-----
</ca>
<cert>
-----BEGIN CERTIFICATE-----
MIIGGTCCBAGgIBgAwIBABqhkiG9TANBgkw0BABKJZMQsFADwEQYDIEAZEwcGpPVy
iSFcYvI0l24r3zcIF836KryNpb1FKFaYzFszG3bCVSIp9LwVDrz1irMahq/W43Zb
...
D3kash6QiMfbVoxts2TEGMw18tz3ptf5R9QuGAILlfdZbVC9i0hj2wZvIMXZ+MDu
zwjY8zVQnfyxT9gc2rYwZTx057ldXZRqds7H2znKzIDZC9iu+UrQzCmq+s/YXUjy
KyLQVgOUIT6n2vyGuikiOvUczf1S8E8MBZtrvhM=
-----END CERTIFICATE-----
</cert>
<key>
-----BEGIN PRIVATE KEY-----
MIIJQgkqhkiG9IBADANBgw0BAASCQEFACSwgkoAwggEAAQCAoIC71VfhS9wOaSNJ
DCBpBfPtUc6iMzeezb0Dld1TGNmbujIAqOdmcnikE87lnQXA+w1ZIwKouFx2b7zr
...
6IEehZNciHpOU8zGE1RSNH1mqQKT6t0pK7hjGhlbZRsHmE8tGy7aBQi9z38pkunR
M7Dird0Be9Ua6r90+lDczcggzwzHTZ==
-----END PRIVATE KEY-----
</key>
key-direction 1
<tls-auth>
#
# 2048 bit OpenVPN static key
#
-----BEGIN OpenVPN Static key V1-----
31201c2093539a034a3549b8f109f7a0
...
c0224e25d9ed3d2b562e94bed507fcac
-----END OpenVPN Static key V1-----
</tls-auth>
```
{{< /expand >}}


## Installing the CA

Open **System > CA**.

Add a new certificate.

![CertAuthorityAdd](/images/UserProvided/CertAuthorityAdd.png "Cert Authority Add")

Give it a name (here VPN_CA) and select "Import CA" as type.

![CertAuthorityImportCA](/images/UserProvided/CertAuthorityImportCA.png "Cert Authority Import CA")

Copy/paste the certificate from the configuration file.
The certificate can be found between the tags `<ca>` and `</ca>` of the OpenVPN config file.

![CertAuthorityImportCACertificate](/images/UserProvided/CertAuthorityImportCACertificate.png "Cert Authority Import CA Certificate")

## Installing the Certificate

Open **System > Certificate**.

Add a certificate.

![CertificateAdd](/images/UserProvided/CertificateAdd.png "Certificate Add")

Give it a name (here VPN) and select "Import Certificate" as type.
Copy and paste the certificate, it can be found in the OpenVPN config file between the tags `<cert>` and `</cert>`.
Copy and paste the key between the tags `<key>` and `</key>` from the configuration file.

![CertificateAddDetails](/images/UserProvided/CertificateAddDetails.png "Certificate Add Details")

So now we have a CA and a certificate for the VPN connexion as below:

![CertandCAAdded](/images/UserProvided/CertandCAAdded.png "Cert and CA Added")

## Configure OpenVPN Service

Go to the **Services** page and find the **OpenVPN Client** entry.
Click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>&nbsp; to configure the service.

![OpenVPNServiceEdit](/images/UserProvided/OpenVPNServiceEdit.png "OpenVPN Service Edit")

Choose the certificate and Root CA we previously installed.
The rest of the parameters are found in the OpenVPN configuration file.
In "Additional parameters" you can add options that are in the configuration files, like the TLS key for authentication or user login/password.

![OpenVPNServiceConfigure](/images/UserProvided/OpenVPNServiceConfigure.png "OpenVPN Service Configure")

## Start the service

Start the service (check automatically if needed).

![OpenVPNServiceStart](/images/UserProvided/OpenVPNServiceStart.png "OpenVPN Service Start")

Test if the connection is working using `curl ifconfig.me` in a terminal for example.  It should give you the IP from the VPN connection and not from your "local" connection, turn the OpenVPN client service on and off to see the difference.

Logs of the OpenVPN client can be found in <file>/var/log/messages</file> and <file>/var/log/daemon</file>.

{{< taglist tag="corecommunityguides" limit="10" title="Community Guides Articles" >}}
