**User Settings**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **One Time Password (OTP) Digits** | The number of digits in the One-Time Password. The default is 6, which is Google's standard OTP length. Check your app/device settings before selecting this. |
| **Interval** | The lifespan (in seconds) of each OTP. Default is 30 seconds. The minimum is 5 seconds. |
| **Window** | Extends password validity beyond the *Interval* setting. For example, 1 means that one password before and after the current one is valid, leaving three valid passwords. Extending the window is useful in high-latency situations. |
| **Enable Two-Factor Auth for SSH** | Enable 2FA for system SSH access. We recommend leaving this DISABLED until after you successfully test 2FA with the UI. |
{{< /truetable >}}

**System Generated Settings**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Secret (Read-only)** | The secret TrueNAS creates and uses to generate OTPs when you first enable 2FA. |
| **Provisioning URI (includes Secret - Read-only)** | The URI used to provision an OTP. TrueNAS encodes the URI (which contains the secret) in a QR Code. To set up an OTP app like Google Authenticator, use the app to scan the QR code or enter the secret manually into the app. TrueNAS produces the URI when you first activate 2FA. |
{{< /truetable >}}
