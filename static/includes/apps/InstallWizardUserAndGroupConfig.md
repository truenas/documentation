&NewLine;

Some TrueNAS applications use predefined user and group IDs. These IDs vary based on the app train and whether the application runs as root.

Common default IDs include:
- **473** for MinIO (stable train)
- **568** for community and enterprise train apps (apps user)
- **999** for Postgres storage volumes (netdata user)
- **0** for root

Use the default ID in the **User and Group Configuration** section, or enter the UID of a TrueNAS user created for this application.

Create any custom app administrator user before installing the application. Use the same UID during user configuration and storage permission setup.
