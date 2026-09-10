&NewLine;

It is possible for SNMP v3 service settings to not fully migrate from FreeBSD-based releases to a Debian-Linux version, and then not carry over after upgrading from release 25.10.4 to later releases.
To resolve this, go to **System > Services** in the Debian-Linux TrueNAS UI:

1. Stop the SNMP service.
2. Edit the SNMP service by re-entering the SNMP v3 service values, and then click **Save**.
3. Toggle the SNMP service **Start Automatically** to on.
4. Start the SNMP service.
