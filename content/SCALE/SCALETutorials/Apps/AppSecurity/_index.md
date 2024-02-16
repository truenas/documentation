---
title: "Securing Apps"
description: "Securing TrueNAS applications with VPNs and Zero Trust."
geekdocCollapseSection: true
weight: 12
tags:
- apps
- vpn
author: 
- Fabian Mühlberger
---

{{< hint type=note >}}
Enhancing app security is a multifaceted challenge and there are various effective approaches. We invite community members to share insights on their methods by [contributing]({{< ref "/Contributing/_index.md" >}}) to the documentation.
{{< /hint >}}

## Securing Apps with VPNs and Zero Trust

TrueNAS SCALE offers various [applications]({{< relref "/scale/scaletutorials/apps/_index.md" >}}), either directly provided or via the community.
While applications can greatly expand TrueNAS functionality, making them accessible from outside the local network can create security risks that need to be solved.

{{< hint type=important >}}
Regardless of the VPN or reverse proxy you use, follow best practices to secure your applications.
1. Update the applications regularly to fix security issues.
2. Use strong passwords and 2FA, preferably TOTP, or passkeys for your accounts.
3. Don't reuse passwords, especially not for admin accounts.
4. Don't use your admin account for daily tasks.
5. Create a separate admin account and password for every application you install.
{{< /hint >}}

The tutorials in this section aim to provide a general overview of different options to secure apps by installing an additional application client like Cloudflared or WireGuard to proxy traffic between the user and the application.

See the available guides below.

## Section Contents

{{< children depth="1" description="true" >}}
