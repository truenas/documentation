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


### **M-Series Add-on cards** ###
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
</table>
| | Port 0 | Port 1 | Port 2 | Port 3 |
| QLE2692 and QLE2742 | isp1 | isp0 | NA | NA |
| QLE2692 and QLE2742 - 2nd card | isp3 | isp2 | NA | NA |
| QLE2694L | isp3 | isp2 | isp1 | isp0 |
| T580-LP-CR (4x10G mode) | cxl0123 | DISABLED | NA | NA |
| T580-LP-CR (4x10G mode) - 2nd card | cxl4567 | DISABLED | NA | NA |
| T580-LP-CR (40G mode) | cxl0 | cxl1 | NA | NA |
| T6225-SO-CR | cc1 | cc0 | NA | NA |
| T6225-SO-CR - 2nd card | cc3 | cc2 | NA | NA |
| T62100-LP-CR | cc1 | cc0 | NA | NA |
| T62100-LP-CR - 2nd card | cc3 | cc2 | NA | NA |
| X710-T4 | ixl2 | ixl3 | ixl4 | ixl5 |
| X710-T4 - 2nd card | ixl6 | ixl7 | ixl8 | ixl9 |

## TrueNAS SCALE ##

### **Onboard Ports**	###
|-------------------------------| Port 0 | Port 1 | Port 2 | Port 3 |
| TrueNAS Mini E/X - onboard | enp3s0f0 | enp3s0f1 | enp5s0f0 | enp5s0f1 |
| TrueNAS Mini X+/XL+ - onboard | eno1 | eno2 | NA | NA |
|-------------------------------|--------|--------|--------|--------|
| TrueNAS M30/M40 - onboard | | NA | NA |
| TrueNAS M50/M60 - onboard | eno1 | eno2 | NA | NA

### **M-Series Add-on cards** ###
|---------------------| Port 0 | Port 1 | Port 2 | Port 3 |
| QLE2692 and QLE2742 | | | NA | NA |
| QLE2692 and QLE2742 - 2nd card | | | NA | NA |
| QLE2694L | | | | |
| T580-LP-CR (4x10G mode) | | |NA | NA |
| T580-LP-CR (4x10G mode) - 2nd card | | | NA | NA |
| T580-LP-CR (40G mode) | | |NA | NA |
| T6225-SO-CR | | |NA | NA |
| T6225-SO-CR - 2nd card | | |NA | NA |
| T62100-LP-CR | enp134s0f4 | enp134s0f4d1 | NA | NA |
| T62100-LP-CR - 2nd card | | NA | NA |
| X710-T4 | | | | |
| X710-T4 - 2nd card | | | | |
