&NewLine;

Some TrueNAS apps have predefined run-as user and group IDs. These assignments vary based on the app train and other variables such as installing but not running as the root user.

Default user and group IDs are:
* **473** for the MinIO stable train app.
* **568** (**apps** user), used in some **community** apps and all apps in the **enterprise** train
* **999** (**netdata** user), used for all postgres storage volumes
* **0** (**root** user).

Accept the default user and group ID in the **User and Group Configuration** section or enter the user ID for a new TrueNAS user created to serve as the administrator for this app.

Create any app administrator user before installing the application, and take note of the UID.
Enter this user ID when configuring the user for the app and as the user when setting up storage volume permissions.