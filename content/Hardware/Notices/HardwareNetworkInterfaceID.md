---
title: "Hardware Network Interface ID"
weight: 15
---

{{< toc >}}

## TrueNAS CORE/Enterprise ##

### **Onboard Ports** ###
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b>System</b></th>
    <th class="tg-0pky"><b>Port 0</b></th>
    <th class="tg-0pky"><b>Port 1</b></th>
    <th class="tg-0pky"><b>Port 2</b></th>
    <th class="tg-0pky"><b>Port 3</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS X10/X20 - onboard</td>
    <td class="tg-0pky">igb0</td>
    <td class="tg-0pky">igb1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS Mini E/X - onboard</td>
    <td class="tg-0pky">ix0</td>
    <td class="tg-0pky">ix1</td>
    <td class="tg-0pky">ix2</td>
    <td class="tg-0pky">ix3</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS Mini X+/XL+ - onboard</td>
    <td class="tg-0pky">ix0</td>
    <td class="tg-0pky">ix1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS M30/M40 - onboard</td>
    <td class="tg-0pky">ix0</td>
    <td class="tg-0pky">ix1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS M50/M60 - onboard</td>
    <td class="tg-0pky">ix0</td>
    <td class="tg-0pky">ix1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
</table>

### X-Series Add-on cards ###
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b> </b></th>
    <th class="tg-0pky"><b>Port 0</b></th>
    <th class="tg-0pky"><b>Port 1</b></th>
    <th class="tg-0pky"><b>Port 2</b></th>
    <th class="tg-0pky"><b>Port 3</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">X540-T2</td>
    <td class="tg-0pky">ixo</td>
    <td class="tg-0pky">ix1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  </table>

### M-Series Add-on cards ###
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b> </b></th>
    <th class="tg-0pky"><b>Port 0</b></th>
    <th class="tg-0pky"><b>Port 1</b></th>
    <th class="tg-0pky"><b>Port 2</b></th>
    <th class="tg-0pky"><b>Port 3</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2692 and QLE2742</td>
    <td class="tg-0pky">isp1</td>
    <td class="tg-0pky">isp0</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2692 and QLE2742 - 2nd card</td>
    <td class="tg-0pky">isp3</td>
    <td class="tg-0pky">isp2</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2694L</td>
    <td class="tg-0pky">isp3</td>
    <td class="tg-0pky">isp2</td>
    <td class="tg-0pky">isp1</td>
    <td class="tg-0pky">isp0</td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (4x10G mode)</td>
    <td class="tg-0pky">cxl0123</td>
    <td class="tg-0pky">DISABLED</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (4x10G mode) - 2nd card</td>
    <td class="tg-0pky">ccxl4567</td>
    <td class="tg-0pky">DISABLED</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (40G mode)</td>
    <td class="tg-0pky">cxl0</td>
    <td class="tg-0pky">cxl1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T6225-SO-CR</td>
    <td class="tg-0pky">cc1</td>
    <td class="tg-0pky">cc0</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T6225-SO-CR - 2nd card</td>
    <td class="tg-0pky">cc3</td>
    <td class="tg-0pky">cc2</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T62100-LP-CR</td>
    <td class="tg-0pky">cc1</td>
    <td class="tg-0pky">cc0</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T62100-LP-CR - 2nd card</td>
    <td class="tg-0pky">cc3</td>
    <td class="tg-0pky">cc2</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">X710-T4</td>
    <td class="tg-0pky">ixl2</td>
    <td class="tg-0pky">ixl3</td>
    <td class="tg-0pky">ixl4</td>
    <td class="tg-0pky">ixl5</td>
  </tr>
  <tr>
    <td class="tg-0pky">X710-T4 - 2nd card</td>
    <td class="tg-0pky">ixl6</td>
    <td class="tg-0pky">ixl7</td>
    <td class="tg-0pky">ixl8</td>
    <td class="tg-0pky">ixl9</td>
  </tr>
</table>

## TrueNAS SCALE ##

### Onboard Ports	###

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b>System</b></th>
    <th class="tg-0pky"><b>Port 0</b></th>
    <th class="tg-0pky"><b>Port 1</b></th>
    <th class="tg-0pky"><b>Port 2</b></th>
    <th class="tg-0pky"><b>Port 3</b></th>
  </tr>
  <tr>
   <td class="tg-0pky">TrueNAS X10/X20 - onboard</td>
    <td class="tg-0pky">enp5s0</td>
    <td class="tg-0pky">enp5s1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS Mini E/X - onboard</td>
    <td class="tg-0pky">enp3s0f0</td>
    <td class="tg-0pky">enp3s0f1</td>
    <td class="tg-0pky">enp5s0f0</td>
    <td class="tg-0pky">enp5s0f1</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS Mini X+/XL+ - onboard</td>
    <td class="tg-0pky">eno1</td>
    <td class="tg-0pky">eno2</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS M30/M40 - onboard</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">TrueNAS M50/M60 - onboard</td>
    <td class="tg-0pky">eno1</td>
    <td class="tg-0pky">eno2</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky"NA</td>
  </tr>
  </table>

### M-Series Add-on cards ###

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b> </b></th>
    <th class="tg-0pky"><b>Port 0</b></th>
    <th class="tg-0pky"><b>Port 1</b></th>
    <th class="tg-0pky"><b>Port 2</b></th>
    <th class="tg-0pky"><b>Port 3</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2692 and QLE2742</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2692 and QLE2742 - 2nd card</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">QLE2694L</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (4x10G mode)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (4x10G mode) - 2nd card</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T580-LP-CR (40G mode)</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T6225-SO-CR</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T6225-SO-CR - 2nd card</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T62100-LP-CR</td>
    <td class="tg-0pky">enp134s0f4</td>
    <td class="tg-0pky">enp134s0f4d1</td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">T62100-LP-CR - 2nd card</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky">NA</td>
    <td class="tg-0pky">NA</td>
  </tr>
  <tr>
    <td class="tg-0pky">X710-T4</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
  <tr>
    <td class="tg-0pky">X710-T4 - 2nd card</td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
    <td class="tg-0pky"> </td>
  </tr>
</table>
