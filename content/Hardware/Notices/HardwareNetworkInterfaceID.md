---
title: "Hardware Network Interface ID"
weight: 15
---

 | TrueNAS CORE/Enterprise |
| | Port 0	| Port 1	| Port 2	| Port 3	|
| Onboard Ports	|								
TrueNAS Mini E/X - onboard	ix0	ix1	ix2	ix3
TrueNAS Mini X+/XL+ - onboard	ix0	ix1	NA	NA
									
TrueNAS M30/M40 - onboard	ixl0	ixl1	NA	NA
TrueNAS M50/M60 - onboard	ixl0	ixl1	NA	NA
| M-Series Add-on cards	|								
QLE2692 and QLE2742	isp1	isp0	NA	NA
QLE2692 and QLE2742 - 2nd card	isp3	isp2	NA	NA
QLE2694L	isp3	isp2	isp1	isp0					
T580-LP-CR (4x10G mode)	cxl0123	DISABLED	NA	NA
T580-LP-CR (4x10G mode) - 2nd card	cxl4567	DISABLED	NA	NA
T580-LP-CR (40G mode)	cxl0	cxl1	NA	NA
T6225-SO-CR	cc1	cc0	NA	NA
T6225-SO-CR - 2nd card	cc3	cc2	NA	NA
T62100-LP-CR	cc1	cc0	NA	NA
T62100-LP-CR - 2nd card	cc3	cc2	NA	NA
X710-T4	ixl2	ixl3	ixl4	ixl5 
X710-T4 - 2nd card	ixl6	ixl7	ixl8	ixl9 

 | TrueNAS SCALE	|	
 | Onboard Ports	|	
 |	Port 0	| Port 1	| Port 2	| Port 3 |
 TrueNAS Mini E/X - onboard	enp3s0f0	enp3s0f1	enp5s0f0	enp5s0f1
TrueNAS Mini X+/XL+ - onboard		eno1	eno2	NA	NA
									
TrueNAS M30/M40 - onboard					NA	NA
TrueNAS M50/M60 - onboard	eno1	eno2	NA	NA
| M-Series Add-on cards	|								
QLE2692 and QLE2742					NA	NA
QLE2692 and QLE2742 - 2nd card				NA	NA
QLE2694L						
T580-LP-CR (4x10G mode)				NA	NA
T580-LP-CR (4x10G mode) - 2nd card				NA	NA
T580-LP-CR (40G mode)				NA	NA
T6225-SO-CR					NA	NA
T6225-SO-CR - 2nd card				NA	NA
T62100-LP-CR	enp134s0f4	enp134s0f4d1	NA	NA
T62100-LP-CR - 2nd card				NA	NA
X710-T4					
X710-T4 - 2nd card			
