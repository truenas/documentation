&NewLine;

Syncthing is a file synchronization application that provides a simple and secure environment for file sharing between different devices and locations.
Use it to synchronize files between different departments, teams, or remote workers.

Syncthing is tested and validated to work in harmony with TrueNAS platforms and underlying technologies such as ZFS to offer a turnkey means of keeping data across many systems.
It can seamlessly integrate with TrueNAS.

Syncthing does not use or need a central server or cloud storage.
All data is encrypted and synchronized directly between devices to ensure files are protected from unauthorized access.

Syncthing is easy to use and configure.
You can install on a wide range of operating systems, including Windows, MacOS, Linux, FreeBSD, iOS or Android.
The Syncthing web UI provides users with easy management and configuration of the application software.

{{< expand "How does Syncthing work?" "v" >}}
Syncthing does not have a central directory or cache to manage.
It segments files into pieces called blocks.
These blocks transfer data from one device to another.
Multiple devices can share the synchronization load in a similar way to the torrent protocol.
With more devices and smaller blocks, devices receive data faster because all devices fetch blocks in parallel.

Syncthing renames files and updates metadata more efficiently because renaming does not cause a re-transmission of that file.

Temporary files store partial data downloaded from devices.
Temporary files are removed when a file transfer completes or after the configured amount of time elapses.
{{< /expand >}}
