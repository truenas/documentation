---
title: "1300W Power Supply Reliability Issue"
weight: 5
---

The TrueNAS 1300W Power Supply Unit (PSU) with A05 firmware has a significant reliability issue that causes the PSU to overheat and forces a system reboot. 

{{< hint type=note >}}
The 1300W PSUs with A05 firmware are in all TrueNAS M40, M50, and R50 platforms shipped before April 11, 2022.
{{< /hint >}}

Users can identify impacted 1300W PSUs by looking at the physical label for the PN (Part number) identification of **YSEF1300EM-2A06P10** and a manufacturer firmware identifier of **CRPxxxxxxA05**.

This problem is rare, with only two PSUs out of 400 failing in over one year. An estimated 1% Annual Failure Rate is high but not easily identified. If the issue does cause a PSU to fail, please remove the PSU and coordinate for a replacement. In the unlikely event that two PSUs fail, remove power from the system, wait 30 minutes for the PSUs to cool and then bring the power back on.

Firmware A06 is qualified to resolve the problem. Unfortunately, we cannot flash the firmware remotely, so we must replace the physical units. 

{{< hint type=note >}}
The replacement PSUs with the A06 firmware have a manufacturer firmware identifier of **CRPxxxxxxA06**. All TrueNAS M40, M50, and R50 systems shipped after April 11, 2022, use 1300W PSUs with Firmware A06.
{{< /hint >}}

Systems supporting mission-critical workloads should have their PSUs pro-actively replaced. For others, the system administrator can decide based on failure rates, logistical costs, and uptime needs. **All PSU replacements are at zero cost and covered by TrueNAS warranty and support.**

When required, TrueNAS admins should contact [iXsystems support](https://www.ixsystems.com/support/) to schedule the 1300W PSU replacements and discuss any potential challenges with the update to Firmware A06. 
 
Here is the PSU replacement process:

1. Ensure the second (or other) PSU has a green LED on and the power cable is fully seated.
2. Remove the power cable from the first PSU  (leave the second PSU plugged in).
3. Remove the PSU by pressing the black or green release tab to the left and pulling the black handle outwards.
4. Insert the replacement 1300W PSU with Firmware A06 and gently push it in until you hear a click.
5. Re-install the power cord.
6. Once you confirm that the PSU replacement is online (the green LED lights up), follow the same process for the other power supply.
 
After replacing each PSU, please return the A05 PSUs to iXsystems in the same packaging the replacements arrived in. We will provide prepaid shipping information. 
