---
title: "ACME DNS-Authenticators Screens"
description: "Provides information on the ACME DNS-Authenticators widget and settings."
weight: 40
tags:
 - certificates
 - acme
---

The **ACME DNS-Authenticators** widget, on the **Certificates** screen, shows configured authenticators.
Automatic Certificate Management Environment (ACME) DNS-Authenticators allow users to automate certificate issuing and renewal.
The user must verify ownership of the domain before TrueNAS allows certificate automation.

{{< hint type=important >}}
ACME DNS is an advanced feature intended for network administrators or AWS professionals.
Misconfiguring ACME DNS can prevent you from accessing TrueNAS.
{{< /hint >}}

{{< hint type=tip >}}
The system requires an ACME DNS authenticator and CSR to configure ACME certificate automation.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/ACMEDNS-AuthentictorsWidget.png" alt="ACME DNS-Authenticators Widget" id="ACME DNS-Authenticators Widget" >}}

**Add** opens the **[Add DNS-Authenticator](#add-dns-authenticator)** screen.

The <span class="material-icons">more_vert</span> icon for a listed certificate shows a dropdown list of options.

**Edit** opens the **Edit DNS Authenticator** screen.

<span class="material-icons">delete</span> deletes opens a [**Delete DNS Authenticator**](#delete-dns-authenticator-dialog) dialog.

## Add or Edit DNS Authenticator

Fields change based on **Authenticator** selection. The **Edit DNS Authenticator** screen shows the current settings entered and saved on the **Add DNS Authenticator** screen.

{{< trueimage src="/images/SCALE/Credentials/AddDNSAuthenticator.png" alt="Add DNS Authenticator" id="Add DNS Authenticator" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Text entry field that accepts manual or copy/paste entry of an internal identifier (name) for the authenticator. |
| **Authenticator** | Sets a DNS provider to create an authenticator. The dropdown list of provider options: <br>**[cloudflare](https://www.cloudflare.com)** <br>[**digitalocean**](https://www.digitalocean.com/) <br>**[route53](https://aws.amazon.com/route53/)** <br>[**OVH**](https://www.ovhcloud.com/en/domains/) <br>**shell**. |
| **Cloudflare Email** | Text entry field that accepts manual or copy/paste entry of your Cloudflare account email address. Shows when **cloudflare** is selected in **Authenticator**. |
| **API Key** | Text entry field that accepts manual or copy/paste entry of the API key obtained from Cloudflare. Shows when **cloudflare** is selected in **Authenticator**. |
| **API Token** | Text entry field that accepts manual or copy/paste entry of the API token obtained from Cloudflare. Shows when **cloudflare** is selected in **Authenticator**. |
| **Digitalocean Token** | Text entry field that accepts manual or copy/paste entry of the [token](https://docs.digitalocean.com/platform/teams/roles/permissions/tokens/) obtained from Digitalocean. Shows when **digitalocean** is selected in **Authenticator**. |
| **Access Key ID** | Text entry field that accepts manual or copy/paste entry of the [access key ID](https://repost.aws/questions/QUxdxnRDJpSxu3frH98aYGSQ/key-id-and-secret-access-key) obtained from AWS Route53. Shows when **route53** is selected in **Authenticator**. |
| **Secret Access Key** | Text entry field that accepts manual or copy/paste entry of the [secret access key](https://repost.aws/questions/QUxdxnRDJpSxu3frH98aYGSQ/key-id-and-secret-access-key) obtained from AWS Route53. Shows when **route53** is selected in **Authenticator**. |
| **Application Key** | Text entry field that accepts manual or copy/paste entry of the [application key]( https://api.ovh.com/createToken/) obtained from OVH. Shows when **OVH** is selected in **Authenticator**. |
| **Application Secret** | Text entry field that accepts manual or copy/paste entry of the [application secret key]( https://api.ovh.com/createToken/) obtained from OVH. Shows when **OVH** is selected in **Authenticator**. |
| **Consumer Key** | Text entry field that accepts manual or copy/paste entry of the [consumer key]( https://api.ovh.com/createToken/) obtained from OVH. Shows when **OVH** is selected in **Authenticator**. |
| **Endpoint** | Text entry field that accepts manual or copy/paste entry of the endpoint. For example, *ovh-us* or *ovh-ca* depending on your region. Shows when **OVH** is selected in **Authenticator**. |
| **Script** | Text entry field that accepts manual or copy/paste entry of a path to where you filed the DNS challenge script. For example, <code>/path/to/your-dns-script.sh</code>. Shows when **shell** is selected in **Authenticator**. A *DNS challenge script* automates the process of proving domain ownership by updating DNS records. It allows creating TXT records, which ACME servers, like Let's Encrypt, that query to verify domain control. It is particularly useful for obtaining wildcard certificates or when HTTP-based challenges are not feasible. |
| **User** | Text entry field that accepts manual or copy/paste of a user name. For example, *root*, *adminUserName*, etc. Shows when **shell** is selected in **Authenticator**. |
| **Timeout** | Text entry field that accepts manual or copy/paste of a numeric value that establishes how long TrueNAS waits (in seconds) for DNS propagation. The default is 120 or 300 seconds. Shows when **shell** is selected in **Authenticator**. |
| **Delay** | Text entry field that accepts manual or copy/paste entry of a numeric value (in seconds) that TrueNAS writes after the creation of the DNS record. The default is 60 or 120 seconds. Shows when **shell** is selected in **Authenticator**. |
{{< /truetable >}}

## Delete DNS Authenticator Dialog

The **Delete DNS Authenticator** dialog shows a **Confirm** option that, when selected, activates the **Delete** button. TrueNAS asks you to confirm before you can delete the authenticator.

{{< trueimage src="/images/SCALE/Credentials/DeleteDNSAuthenticator.png" alt="Delete DNS Authenticator" id="Delete DNS Authenticator" >}}
