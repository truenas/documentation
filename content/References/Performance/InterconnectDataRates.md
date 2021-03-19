---
title: "Interconnect Maximum Effective Data Rates"
weight: 10
---

These tables list the maximum effective data rates, in a single data flow direction, for various data interconnect protocols.
A best effort attempt has been made to exclude physical link encoding overheads where appropriate.


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>

{{< tabs "Performance Results" >}}
{{< tab "PCI Express 4.0" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">PCI Express 4.0</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
    <td class="tg-1wig">Notes</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">x1</td>
    <td class="tg-0lax">1,878</td>
    <td class="tg-0lax">1,969</td>
    <td class="tg-0lax">15.8</td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-1wig">x2</td>
    <td class="tg-0lax">3,756</td>
    <td class="tg-0lax">3,938</td>
    <td class="tg-0lax">31.5</td>
    <td class="tg-0lax">NVMe M.2 (M+B Key)</td>
  </tr>
  <tr>
    <td class="tg-1wig">x4</td>
    <td class="tg-0lax">7,512</td>
    <td class="tg-0lax">7,877</td>
    <td class="tg-0lax">63.0</td>
    <td class="tg-0lax">NVMe M.2 (M Key)<br>U.2/U.3 (1x4 or 2x2)<br>E1.S/E1.L (typical)<br>E3</td>
  </tr>
  <tr>
    <td class="tg-1wig">x8</td>
    <td class="tg-0lax">15,024</td>
    <td class="tg-0lax">15,754</td>
    <td class="tg-0lax">126.0</td>
    <td class="tg-0lax">E1.S/E1.L (max)<br>E3</td>
  </tr>
  <tr>
    <td class="tg-1wig">x16</td>
    <td class="tg-0lax">30,048</td>
    <td class="tg-0lax">31,508</td>
    <td class="tg-0lax">252.1</td>
    <td class="tg-0lax">E3 (max)</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "PCI Express 3.0" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">PCI Express 3.0</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
    <td class="tg-1wig">Notes</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">x1</td>
    <td class="tg-0lax">939</td>
    <td class="tg-0lax">985</td>
    <td class="tg-0lax">7.9</td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-1wig">x2</td>
    <td class="tg-0lax">1,878</td>
    <td class="tg-0lax">1,969</td>
    <td class="tg-0lax">15.8</td>
    <td class="tg-0lax">NVMe M.2 (M+B Key)</td>
  </tr>
  <tr>
    <td class="tg-1wig">x4</td>
    <td class="tg-0lax">3,756</td>
    <td class="tg-0lax">3,938</td>
    <td class="tg-0lax">31.5</td>
    <td class="tg-0lax">NVMe M.2 (M Key)<br>U.2/U.3 (1x4 or 2x2)</td>
  </tr>
  <tr>
    <td class="tg-1wig">x8</td>
    <td class="tg-0lax">7,512</td>
    <td class="tg-0lax">7,877</td>
    <td class="tg-0lax">63.0</td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-1wig">x16</td>
    <td class="tg-0lax">15,024</td>
    <td class="tg-0lax">15,754</td>
    <td class="tg-0lax">126.0</td>
    <td class="tg-0lax"></td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "SAS-4 (24 Gb/s)" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">SAS-4 (24 Gb/s)</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">x1</td>
    <td class="tg-0lax">2,289</td>
    <td class="tg-0lax">2,400</td>
    <td class="tg-0lax">19.2</td>
  </tr>
  <tr>
    <td class="tg-1wig">x4</td>
    <td class="tg-0lax">9,155</td>
    <td class="tg-0lax">9,600</td>
    <td class="tg-0lax">76.8</td>
  </tr>
  <tr>
    <td class="tg-1wig">x8</td>
    <td class="tg-0lax">18,311</td>
    <td class="tg-0lax">19,200</td>
    <td class="tg-0lax">153.6</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "SAS-3 (12 Gb/s)" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">SAS-3 (12 Gb/s)</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">x1</td>
    <td class="tg-0lax">1,144</td>
    <td class="tg-0lax">1,200</td>
    <td class="tg-0lax">9.6</td>
  </tr>
  <tr>
    <td class="tg-1wig">x4</td>
    <td class="tg-0lax">4,578</td>
    <td class="tg-0lax">4,800</td>
    <td class="tg-0lax">38.4</td>
  </tr>
  <tr>
    <td class="tg-1wig">x8</td>
    <td class="tg-0lax">9,152</td>
    <td class="tg-0lax">9,600</td>
    <td class="tg-0lax">76.8</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "SAS-2 & SATA 3.0 (6 Gb/s)" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">SAS-2 & SATA 3.0 (6 Gb/s)</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">x1</td>
    <td class="tg-0lax">572</td>
    <td class="tg-0lax">600</td>
    <td class="tg-0lax">4.8</td>
  </tr>
  <tr>
    <td class="tg-1wig">x4</td>
    <td class="tg-0lax">2,289</td>
    <td class="tg-0lax">2,400</td>
    <td class="tg-0lax">19.2</td>
  </tr>
  <tr>
    <td class="tg-1wig">x8</td>
    <td class="tg-0lax">4,576</td>
    <td class="tg-0lax">4,800</td>
    <td class="tg-0lax">38.4</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "Ethernet" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">Ethernet</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">1 GbE</td>
    <td class="tg-0lax">119</td>
    <td class="tg-0lax">125</td>
    <td class="tg-0lax">1.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">10 GbE</td>
    <td class="tg-0lax">1,192</td>
    <td class="tg-0lax">1,250</td>
    <td class="tg-0lax">10.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">25 GbE</td>
    <td class="tg-0lax">2,980</td>
    <td class="tg-0lax">3,125</td>
    <td class="tg-0lax">25.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">40 GbE</td>
    <td class="tg-0lax">4,768</td>
    <td class="tg-0lax">5,000</td>
    <td class="tg-0lax">40.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">100 GbE</td>
    <td class="tg-0lax">11,920</td>
    <td class="tg-0lax">12,500</td>
    <td class="tg-0lax">100.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">200 GbE</td>
    <td class="tg-0lax">23,842</td>
    <td class="tg-0lax">25,000</td>
    <td class="tg-0lax">200.0</td>
  </tr>
  <tr>
    <td class="tg-1wig">400 GbE</td>
    <td class="tg-0lax">47,684</td>
    <td class="tg-0lax">50,000</td>
    <td class="tg-0lax">400.0</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< tab "Fibre Channel" >}}

<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig" rowspan="2">Fibre Channel</th>
    <th class="tg-1wig" colspan="4">Maximum Effective Data Rate (One Direction)</th>
  </tr>
  <tr>
    <td class="tg-1wig">(1024<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>2</sup> Bytes) MiB/s</td>
    <td class="tg-1wig">(1000<sup>3</sup> Bytes) Gb/s</td>
  </tr>
  <tr>
    <td class="tg-1wig">8 Gb</td>
    <td class="tg-1wig">797</td>
    <td class="tg-1wig">836</td>
    <td class="tg-1wig">6.7</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-1wig">16 Gb</td>
    <td class="tg-0lax">1,594</td>
    <td class="tg-0lax">1,672</td>
    <td class="tg-0lax">13.4</td>
  </tr>
  <tr>
    <td class="tg-1wig">32 Gb</td>
    <td class="tg-0lax">3,275</td>
    <td class="tg-0lax">3,434</td>
    <td class="tg-0lax">27.5</td>
  </tr>
</tbody>
</table>

{{< /tab >}}
{{< /tabs >}}
