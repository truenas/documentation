&NewLine;

Do not select **Host Network** unless required by the application.

When host networking is disabled (default behavior), the system maps container ports to host ports. This provides better isolation, flexible port assignments, and improved security.

**Host Network** grants the container direct access to host network interfaces. This can improve performance in high-demand environments and simplify setup, but reduces isolation and increases the risk of port conflicts. It also prevents running multiple instances of the same app.

Default port mapping is more secure and works well for most applications.
