&NewLine;

{{< hint type="important" title="Deprecation Notice" >}}
This section tracks features removed in 26 and features deprecated in 26 for future removal.
Plan migrations immediately to avoid disruptions during upgrades.
{{< /hint >}}

## Features Removed in 26

<!-- Uncomment this line when there are no features removed in this version -->
<!-- *No features are removed in this version.* -->

### REST API

{{< deprecation-status deprecated="25.04" removed="26" >}}

{{< include file="/static/includes/RESTAPIDeprecationNotice.md" >}}

The TrueNAS REST API has been fully replaced by the versioned JSON-RPC 2.0 Websocket API.

Migration Path:

1. Review current API integrations and identify all REST API calls.
2. Review the [Websocket API documentation](https://api.truenas.com/) to identify replacement endpoints.
3. Update all scripts and integrations to use Websocket API endpoints.
4. Test thoroughly in a non-production environment.
5. Deploy updated integrations before upgrading to 26.

Impact: Systems still using the REST API must migrate to the Websocket API before upgrading to 26.
REST API endpoints do not function in 26 and later.

See Also:

- [Websocket API Documentation](https://api.truenas.com/)
- [Managing API Keys]({{< ref "/TopToolbar/ManagingAPIKeys.md" >}})

### JSON-RPC API Methods

#### pool.is_upgraded

{{< deprecation-status deprecated="25.10" removed="26" >}}

The [`pool.is_upgraded`](https://api.truenas.com/v25.10/api_methods_pool.is_upgraded.html) method, which reported whether a pool had all ZFS feature flags enabled, is removed in TrueNAS 26. No direct replacement is provided. Scripts that need to inspect pool feature flag state can use `pool.query` and read the returned feature flag information.

#### pool.ddt_prefetch

{{< deprecation-status deprecated="25.10" removed="26" >}}

The [`pool.ddt_prefetch`](https://api.truenas.com/v25.10/api_methods_pool.ddt_prefetch.html) method, which prefetched deduplication table (DDT) entries for a pool, is removed in TrueNAS 26. Use [`pool.prefetch`](https://api.truenas.com/v26.0/api_methods_pool.prefetch.html) instead, which prefetches both DDT and Block Reference Table (BRT) metadata in a single call.

---

## Deprecated Features (Removal in Future Versions)

### JSON-RPC API Methods

#### Legacy Authentication Methods

{{< deprecation-status deprecated="26" removing="27" >}}

The [`auth.login`](https://api.truenas.com/v26.0/api_methods_auth.login.html) and [`auth.login_with_api_key`](https://api.truenas.com/v26.0/api_methods_auth.login_with_api_key.html) methods are deprecated and scheduled for removal in TrueNAS 27. Migrate to [`auth.login_ex`](https://api.truenas.com/v26.0/api_methods_auth.login_ex.html):

- Replace `auth.login` with `auth.login_ex` using `mechanism="PASSWORD_PLAIN"`. For two-factor authentication, follow with [`auth.login_ex_continue`](https://api.truenas.com/v26.0/api_methods_auth.login_ex_continue.html) using `mechanism="OTP_TOKEN"`.
- Replace `auth.login_with_api_key` with `auth.login_ex` using `mechanism="API_KEY_PLAIN"` (or `mechanism="SCRAM"` for stronger mutual authentication).

Removing the legacy `auth.login` and `auth.login_with_api_key` entry points does not affect `API_KEY_PLAIN` or the other non-SCRAM mechanisms on `auth.login_ex`, which remain supported beyond TrueNAS 27.

See the [SCRAM Authentication primer](https://github.com/truenas/middleware/blob/stable/26/docs/source/accounts/scram_authentication.rst) for guidance on implementing SCRAM in custom API clients and migrating pre-TrueNAS 26 API keys to the optimized precomputed format.

#### Pool Scrub Methods

{{< deprecation-status deprecated="26" removing="TBD" >}}

The [`pool.scrub.run`](https://api.truenas.com/v26.0/api_methods_pool.scrub.run.html) and [`pool.scrub.scrub`](https://api.truenas.com/v26.0/api_methods_pool.scrub.scrub.html) methods are deprecated. Use [`zpool.scrub.run`](https://api.truenas.com/v26.0/api_methods_zpool.scrub.run.html) to start, stop, or pause pool scrub operations. A removal version is not yet defined.

#### system.advanced `consolemsg` Attribute

{{< deprecation-status deprecated="26" removing="TBD" >}}

The `consolemsg` attribute on [`system.advanced.config`](https://api.truenas.com/v26.0/api_methods_system.advanced.config.html) and [`system.advanced.update`](https://api.truenas.com/v26.0/api_methods_system.advanced.update.html) is deprecated. Use the `ui_consolemsg` attribute on [`system.general.config`](https://api.truenas.com/v26.0/api_methods_system.general.config.html) and [`system.general.update`](https://api.truenas.com/v26.0/api_methods_system.general.update.html) instead. A removal version is not yet defined.

#### config.save `pool_keys` Parameter

{{< deprecation-status deprecated="26" removing="TBD" >}}

The `pool_keys` parameter on [`config.save`](https://api.truenas.com/v26.0/api_methods_config.save.html) is deprecated and already ignored — passing it has no effect on TrueNAS configuration backups. The parameter remains accepted for backward compatibility. A removal version is not yet defined.

---
