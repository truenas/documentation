&NewLine;

The TrueNAS Software Development Life Cycle (SDLC) is the process of planning, creating, testing, deploying, and maintaining TrueNAS releases.

{{< tabs "SDLC Stages" >}}
{{< tab "Planning" >}}
Determine the objectives, nature, and scope of future versions of the software.
This involves gathering feedback and interpreting customer needs and requirements, diagnosing existing problems, and weighing the pros and cons of potential solutions.
The end result is a list of recommended improvements to be integrated into a future TrueNAS versions.
{{< /tab >}}
{{< tab "Development" >}}
Required and planned changes are investigated in detail and development steps are determined.
Proposed alterations are reviewed by peers for completeness, correctness, and proper coding style.
TrueNAS developers then begin implementing proposed TrueNAS changes. 
{{< /tab >}}
{{< tab "Evaluation" >}}
Code is integrated into the existing TrueNAS source tree, then built and tested by multiple TrueNAS teams and those Community users willing to experiment with early development TrueNAS builds.
TrueNAS documentation contributors also begin evaluating these early builds and write public-facing content about the changes to TrueNAS in the new version.
These teams verify all requirements and objectives are properly met and the updated software is reliable and fault-tolerant, according to the predetermined requirements.
If issues are found, TrueNAS features are reworked to meet the development requirements.

Simultaneously, a security evaluation of the TrueNAS code is completed, with any discovered issues sent to the TrueNAS development team for resolution.
Any security notices, errata, or best practices are also drafted for inclusion on the [TrueNAS Security website](https://security.truenas.com/).
{{< /tab >}}
{{< tab "Maintenance" >}}
The new release of TrueNAS is evaluated to determine further feature development, bug fixes, or security vulnerability patches.
During this stage, security patches and software erratum are corrected, updated versions of existing branches are pushed, and feedback is solicited for future versions of the software.
{{< /tab >}}
{{< /tabs >}}

This life cycle is generally applied to TrueNAS major versions released to the Community.
For Enterprise customers, releases are evaluated for Enterprise deployment suitability according to different criteria of internal testing on commercial hardware, security topics, upgradability, and general software stability as derived from Community usage.

A formal software End of Life (EoL) is not defined, as TrueNAS releases can be used in a stable manner for extended lengths of time, depending on use case and security risk factors.
However, some general guidance is to evaluate the latest major release version by current **.#** release against your usage mindset.

{{< include file="/static/includes/SoftwareStatusPage.md" >}}

