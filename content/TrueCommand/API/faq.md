---
title: "Connection Management"
linkTitle: "Connection FAQ"
pre: "<i class='fas fa-project-diagram'></i> "
---

# NAS Connections
TrueCommand automatically connects to any registered NAS using a secure websocket connection (wss). If wss is unavailable, it will attempt a non-secure websocket connection (ws). TrueCommand can be configured to require secure connections to each registered NAS. Refer to the SSL error list when configuring TrueCommand to require secure connections.

The state of a NAS connection and any errors that prevent connection are seen as a tooltip on the system badge of the TrueCommand dashboard. Hover the mouse cursor over the badge to see the error. Alternatively, the connection status is viewed by running the {{< api-link "servers/list" >}} API call directly.

TrueCommand SSL configuration options are viewed with the {{< api-link "sys/list_config" >}} API call and changed with the {{< api-link "sys/set_config" >}} API call. Please see the API reference documentation for more details.


## Important Terminology
* Certificate Authority (CA): issues and signs SSL certificates.
* Self-Signed Certificate: created with no involvement by a certificate authority. Also referred to as an "x509" certificate. "x509" is the command-line flag used by `openssl` when creating a self-signed certificate.

## Common SSL Errors and solutions

### "Connection refused"
This error occurs when the NAS does not allow SSL-secured access or if the NAS is using a custom port.

Solutions:

1. Launch the NAS web interface and verify NAS HTTPS support is enabled. This can require creating or importing an SSL certificate on that system.
2. Launch the NAS web interface and check if the system is using a custom port number. Note the custom port number and go to the TrueCommand system registration page. Edit the NAS registration and change the `IP` field to include the port number. This field uses the form *ip or host*:*portnumber*.
   * Example: `mynas-1.com:1234`

### "The issuer certificate of a locally looked up certificate could not be found"
TrueCommand is unable to verify the authenticity of the CA that signed the SSL certificate in use by the NAS being registered.

Solutions:

1. Import the "full-chain" version of the certificate into the NAS instead of just the top-level certificate. The full-chain version of the certificate includes any certificate authority (CA) references which are required for certificate chain verification. This allows TrueCommand to properly verify the CA.
2. Disable SSL certificate verification in the TrueCommand system configuration settings:
   * Use the {{< api-link "sys/list_config" >}} API call to view the configuration
   * Use the {{< api-link "sys/set_config" >}} API call to change the configuration
   * **WARNING** This is inherently insecure and can allow attackers to misidentify themselves as a NAS on the network to gain access to genuine login credentials.

### "The root certificate of the certificate chain is self-signed, and untrusted"
The NAS is using a certificate created by a CA that is self-authorized.

Solutions:

1. Generate a new certificate for the NAS that is created and signed by an outside certificate authority.
2. Configure TrueCommand to accept self-signed certificates.
   * Use the {{< api-link "sys/list_config" >}} API call to view the configuration
   * Use the {{< api-link "sys/set_config" >}} API call to change the configuration
   * **WARNING** This is inherently insecure and can allow attackers to misidentify themselves as a NAS on the network to gain access to genuine login credentials.

### "The certificate is self-signed, and untrusted"
The NAS is using a self-signed SSL certificate.

Solutions:

1. Generate a new certificate for the NAS that is created and signed by an outside certificate authority.
2. Configure TrueCommand to accept self-signed certificates.
   * Use the {{< api-link "sys/list_config" >}} API call to view the configuration
   * Use the {{< api-link "sys/set_config" >}} API call to change the configuration
   * **WARNING** This is inherently insecure and can allow attackers to misidentify themselves as a NAS on the network to gain access to genuine login credentials.

### "The host name did not match any of the valid hosts for this certificate"
The certificate was created for system "X" but TrueCommand is connecting to system "Y". This generally  happens when the certificate has the system hostname, but was registered in TrueCommand with an IP address, or vice-versa. This can also occur with multi-node hardware where a certificate was created for the master node and is also used for additional active/passive nodes.

Solutions:

1. Update the NAS SSL certificate to include all variations of the system name where the certificate will be used.
2. Configure TrueCommand to ignore hostname mismatch errors in the SSL certificate.
   * Use the {{< api-link "sys/list_config" >}} API call to view the configuration
   * Use the {{< api-link "sys/set_config" >}} API call to change the configuration
   * **WARNING** This is inherently insecure and can allow attackers to misidentify themselves as a NAS on the network to gain access to genuine login credentials.
