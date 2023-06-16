---
---

```
account user create username=testuser full_name="Test User" group_create=true password=passwort1234
```

The command returns a blank line.
To confirm the user is created, use `account user query` or navigate to [**Credentials > Local Users**]({{< relref "managelocalusersscale.md" >}}) in the SCALE Web UI.

{{< hint type=note >}}
This command contains the minimum required configuration arguments to successfully create a user.
{{< /hint >}}
