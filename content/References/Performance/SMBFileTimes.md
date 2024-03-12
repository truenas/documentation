---
title: "SMB Directory List Times"
description: "Performance data tables when listing large files counts over SMB."
weight: 20
tags:
 - smb
draft: true
---
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>

<!-- use this shortcode to provide a link back to this content: [LinkText]({{< relref "SMBFileTimes.md" >}}) -->
<!-- use this shortcode to style a yellow admonition box around important text (danger for red, note for blue):
{{< hint type="important" title="Caution: My Text Here" >}}
{{< /hint >}}
-->

Starting in Dragonfish 24.04 and later, the meta-data performance of directory listings over SMB has been greatly improved. 
Depending on your SMB client, it is possible to support a single directoy with anywhere from 100K to 1 Million on Flash systems with decent load times.
iXsystems has done some very preliminary testing to provide guidance on the approximate time ranges that are possible. 
Users should understand that as directory file counts increase that listing times will as well. 

WARNING: CPU and Memory speed play a major factor in metadata listing times. For this testing flash media was used, spinning disks will perform worse.
These numbers are provided as rough guides as to what kind of performance might be expected. Many external factors can impact this and your milage may vary. 

Test System Specifications:
* CPU: Intel i5-12600
* Memory: 64GB
* Storage: SAS Flash - Two-Drive ZFS Mirror

**Workload: 1K, 100K and 200K Mixed PNG Data**

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="1"></th>
    <th class="tg-1wig" colspan="4" style="text-align:center;">File Count</th>
  </tr>
  <tr>
    <td class="tg-1wig">Operating System</td>
    <td class="tg-1wig">File Count 100K</td>
    <td class="tg-1wig">File Count 250K</td>
    <td class="tg-1wig">File Count 500K</td>
    <td class="tg-1wig">File Count 1 Million</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">Windows 11</td>
    <td class="tg-0lax">1.5~ Seconds</td>
    <td class="tg-0lax">4-6~ Seconds</td>
    <td class="tg-0lax">7-10~ Seconds</td>
    <td class="tg-0lax">14-20~ Seconds</td>
  </tr>
  <tr>
    <td class="tg-1wig">OS X (Sonoma)</td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax">10+ Minutes</td>
    <td class="tg-0lax">Did not run</td>
    <td class="tg-0lax">Did not run</td>
  </tr>
  <tr>
    <td class="tg-1wig">Ubuntu - File Manager (GUI)</td>
    <td class="tg-0lax">13-15~ Seconds</td>
    <td class="tg-0lax">1~ Minute</td>
    <td class="tg-0lax">Did not run</td>
    <td class="tg-0lax">Did not run</td>
  </tr>
  <tr>
    <td class="tg-1wig">Linux SMB (In-Kernel CIFS CLI)</td>
    <td class="tg-0lax">3~ Seconds</td>
    <td class="tg-0lax">8~ Seconds</td>
    <td class="tg-0lax">17~ Seconds</td>
    <td class="tg-0lax">30~ Seconds</td>
  </tr>
  <tr>
    <td class="tg-1wig">Linux smbclient (Userspace CLI)</td>
    <td class="tg-0lax">1.2~ Seconds</td>
    <td class="tg-0lax">4~ Seconds</td>
    <td class="tg-0lax">6~ Seconds</td>
    <td class="tg-0lax">12-14~ Seconds</td>
  </tr>
</tbody>
</table>
