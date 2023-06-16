---
---

The user account can be specified using either the username or UID.

Specifying with the UID:
```
account user get_user_obj get_user_obj={"uid": 3001}
+----------+--------------------+
|  pw_name | testuser           |
|   pw_uid | 3001               |
|   pw_gid | 3001               |
| pw_gecos | Test_User          |
|   pw_dir | /mnt/tank/testuser |
| pw_shell | /usr/bin/zsh       |
+----------+--------------------+
```

Specifying with the username:
```
[truenas] account user> get_user_obj get_user_obj={"username": "testuser"}
+-----------+--------------------+
|   pw_name | testuser           |
|    pw_uid | 3001               |
|    pw_gid | 3001               |
|  pw_gecos | Test_User          |
|    pw_dir | /mnt/tank/testuser |
|  pw_shell | /usr/bin/zsh       |
+-----------+--------------------+
```

The `get_groups` option can be used to return the user's **grouplist**. This option defaults to `false`.

```
[truenas] account user> get_user_obj get_user_obj={"username": "testuser", "get_groups": true}
+-----------+--------------------+
|   pw_name | testuser           |
|    pw_uid | 3001               |
|    pw_gid | 3001               |
|  pw_gecos | Test_User          |
|    pw_dir | /mnt/tank/testuser |
|  pw_shell | /usr/bin/zsh       |
| grouplist | 3001               |
|           | 9                  |
|           | 50                 |
+-----------+--------------------+
```
