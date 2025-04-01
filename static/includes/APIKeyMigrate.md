&NewLine;

Legacy API keys created in TrueNAS 24.10 or earlier migrate to the root, admin, or truenas_admin account, depending on server configuration.

Existing API keys created via the TrueNAS API (not UI or TrueCommand) that specify an allow list with white-listed API methods are revoked upon upgrade because there is no clean way to migrate to the new system.
Administrators should create a service account (a user account for this particular purpose), define desired access rights for this service account, [generate a new user-linked API key]({{< relref "/scale/scaletutorials/toptoolbar/managingapikeys" >}}), and distribute it to the API client.
