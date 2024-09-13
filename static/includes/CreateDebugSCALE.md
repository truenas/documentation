&NewLine;

On TrueNAS systems, go to **System > Advanced Settings**, then click **Save Debug** and wait for the file to download to your local system. 
Generating the debug file might take a few minutes to complete. After that, it downloads to your system.

To generate a debug from the SCALE CLI, enter <command>system debug > <i>debugname</i>.tgz</command>, replacing <i>debugname</i> with your chosen filename.
You must use SFTP or a similar method to connect to TrueNAS and download the file from the /home/<i>username</i> location, replacing <i>username</i> with the account name that generated the debug.
SFTP Example:
```
PS C:\Users\tester> sftp admin@exampletruenas.net
Connected to exampletruenas.net.
sftp> cd /home/admin
sftp> get testdebug.tgz
Fetching /home/admin/testdebug.tgz to testdebug.tgz
/home/admin/testdebug.tgz						100% 7110KB	4.1MB/s	00.01
sftp> exit
```
