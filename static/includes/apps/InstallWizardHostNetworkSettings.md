&NewLine;

We do not recommend selecting **Host Network** unless required for the specific application or workload.
When required or strongly recommended for an application, TrueNAS typically enables host networking by default.

When host networking is disabled, specific ports from the container are exposed on the local network and mapped to a host port.
This is the default Docker networking behavior.
This approach provides better isolation, flexibility in port assignments, and improved security compared to enabling host networking.

Select **Host Network** to bypass port mapping, granting the container direct access network interfaces on the host.
This can improve performance, especially in deployments with many users, and simplify network configuration, but compromises isolation and introduces the risk of port conflicts, limiting the ability to run multiple instances of the same app.
For most deployments, default port mapping is more secure and versatile.
