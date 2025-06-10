&NewLine;

{{< hint type=warning title="API Key Security" >}}
Always back up and secure keys.
TrueNAS displays the key string only once, in the **API Key** confirmation dialog, immediately after creation.

User-linked API keys allow password-equivalent access to the TrueNAS middleware.
API keys are not subject to the two-factor authentication (2FA) configuration of the associated user account.
A compromised API key results in access to the TrueNAS API as the associated user, even if the account is configured to require 2FA.

For increased security, HTTPS with SSL/TLS transport security is required for TrueNAS API authentication using API keys.
TrueNAS automatically revokes any user-linked API keys passed as part of an authentication attempt via insecure (HTTP) transport.
A revoked API key cannot be used until it is reset.
Resetting generates a new key-string.

Remember to update clients to use the new key.
{{< /hint >}}
