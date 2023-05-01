
By default, TrueCommand attempts an SSL connection, then a non-SSL connection if the first attempt fails.
You can disable non-SSL connection attempts by setting **Require SSL for all connections**, which is useful when a monitored system uses a custom port or does not allow SSL-secured access.

There are additional options to configure how TrueCommand handles certificates.
By default, TrueCommand accepts self-signed certificates and certificate host name mismatches.
Self-signed certificates enable the first-time login to TrueCommand. **Accept certificate even if there is a hostname mismatch** allows TrueCommand to accept certificates from systems that use a host name, even though it registered them with an IP address (or vice-versa).

![ConfigurationScreenSSLOptions](/images/TrueCommand/2.3.2/ConfigurationScreenSSLOptions.png "Configuration Screen SSL Options")