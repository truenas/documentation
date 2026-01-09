&NewLine;

{{< hint type="important" title="Deprecation Notice" >}}
This section tracks features removed in 26.04 and features deprecated in 26.04 for future removal.
Plan migrations immediately to avoid disruptions during upgrades.
{{< /hint >}}

## Features Removed in 26.04

### REST API

{{< deprecation-status deprecated="25.04" removed="26.04" >}}

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

The TrueNAS REST API has been fully replaced by the versioned JSON-RPC 2.0 Websocket API.

Migration Path:

1. Review current API integrations and identify all REST API calls.
2. Review the [Websocket API documentation](https://api.truenas.com/) to identify replacement endpoints.
3. Update all scripts and integrations to use Websocket API endpoints.
4. Test thoroughly in a non-production environment.
5. Deploy updated integrations before upgrading to 26.04.

Impact: Systems still using the REST API must migrate to the Websocket API before upgrading to 26.04.
REST API endpoints do not function in 26.04 and later.

See Also:

- [Websocket API Documentation](https://api.truenas.com/)
- [Managing API Keys]({{< ref "/SCALE/SCALETutorials/TopToolbar/ManagingAPIKeys.md" >}})

---

## Deprecated Features (Removal in Future Versions)

*Check back for updates as development continues.*

---
