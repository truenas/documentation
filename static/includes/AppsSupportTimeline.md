&NewLine;

{{< hint type=note title="TrueNAS Apps Support Timeline for 24.04 and 24.10" icon="gdoc_timer" >}}
**Summary:**
Applications added to the TrueNAS Apps catalog before December 24, 2024, require updates to enable host IP port binding.
These updates roll out on **June 1, 2025**, and require TrueNAS 25.04 (or later).

Due to breaking changes involved in enabling host IP port binding, **June 1, 2025** is the deadline for automatic apps migration on upgrade.
Migrate from 24.04 to 24.10 before June 1, 2025, to ensure automatic app migration.

Upgrade to 24.10.2.2 or 25.04 before June 1 to continue receiving regular app updates.
Previously installed apps on TrueNAS 24.10.2.1 (or earlier) do not receive updates after this point.
Normal application update functionality resumes after TrueNAS updates to 24.10.2.2 or 25.04.

<div class="no-highlight-table">
<table>
  <thead>
    <tr>
      <th>Timeframe</th>
      <th>App Migration <br> 24.04 → 24.10</th>
      <th>App Migration <br> 24.10 → 25.04</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Before June 1, 2025</strong></td>
      <td>✅ Supported</td>
      <td>✅ Supported</td>
    </tr>
    <tr>
      <td><strong>After June 1, 2025</strong></td>
      <td>❌ Not Supported</td>
      <td>✅ Supported<br>(24.10.2.2 or later)</td>
      <td>✅ Supported</td>
      <td>✅ Supported</td>
    </tr>
  </tbody>
</table>
</div>

{{< expand "Read More" "v" >}}
{{< include file="/static/includes/AppsHostIP.md" >}}
{{< /expand >}}
{{< /hint >}}
