---
---

```
account group get_group_obj get_group_obj={"groupname": "test_group"}
+---------+------------+
| gr_name | test_group |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
```

Where `test_group` is the name of the target group.

The target can also be specified by group identification number.

```
account group get_group_obj get_group_obj={"gid": 3002}
+---------+------------+
| gr_name | test_group |
|  gr_gid | 3002       |
|  gr_mem | testuser   |
|         | AttTest    |
+---------+------------+
```

Where `3002` is the GID number for the target group.
