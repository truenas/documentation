---
---

```
[truenas] account user setup_local_administrator username:admin password:passw0rt
```

{{< hint type=note >}}
`setup_local_administrator` accepts only "admin" or "root" for **username**.
It is recommended to use "admin." Root user access is a deprecated method.
{{< /hint >}}

The command returns a blank line. To confirm the administrator is set up, use `account user query` or log in to the SCALE Web UI using the admin username and password.
