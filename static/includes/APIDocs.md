&NewLine;

TrueNAS (25.04 and later) uses a versioned JSON-RPC 2.0 over WebSocket API.
API versions are numbered in conjunction with TrueNAS version releases.

The [API documentation](https://api.truenas.com/) provides information about supported API methods and events.
Documentation is included for all API versions supported by the current TrueNAS release and defaults to the latest supported API.
Use the dropdown to view documentation for different supported API versions.

Advanced users can interact with the TrueNAS API to perform management tasks using the [TrueNAS API Client](https://github.com/truenas/api_client) as an alternative to the TrueNAS web UI.
This websocket client provides the command line tool `midclt` and allows users to communicate with middleware using Python by making API calls.
The client can connect to the local TrueNAS instance or to a specified remote socket.
