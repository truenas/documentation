---
---

{{< toc >}}

The TrueNAS Software Development Life Cycle (SDLC) is the process of planning, creating, testing, deploying, and maintaining TrueNAS releases.

{{< tabs "SDLC Stages" >}}
{{< tab "Requirement Analysis" >}}
Determine the objectives, nature, and scope of future versions of the software.
Requirement Analysis involves gathering feedback and interpreting customer needs and requirements, diagnosing existing problems, and weighing the pros and cons of potential solutions.
The end result is a list of recommended improvements to be integrated into future versions of TrueNAS.
{{< /tab >}}
{{< tab "Design and Development" >}}
Required and planned changes are investigated in detail and development steps are determined.
Proposed alterations are reviewed by peers for completeness, correctness, and proper coding style.
TrueNAS developers then begin altering the software to include new features, resolve software bugs, or implement security improvements. 
{{< /tab >}}
{{< tab "Testing and Evaluation" >}}
Code is integrated into the existing TrueNAS source tree, then built and tested by the Release Engineering (RE) department.
RE verifies that all requirements and objectives are properly met and the updated software is reliable and fault-tolerant according to the determined requirements.
If issues are found, code is reworked to meet the development requirements.
Simultaneously, a security evaluation of the TrueNAS code is completed, with any discovered issues sent to the engineering team for resolution.
{{< /tab >}}
{{< tab "Documentation" >}}
The Validation and Documentation Team audits all development changes to the software and resolves any inconsistencies with the current software documentation.
This is to verify that end user documentation is as accurate as possible.
Any security notices, errata, or best practices are also drafted for inclusion on the [TrueNAS Security website](https://security.truenas.com/).
{{< /tab >}}
{{< tab "Maintenance" >}}
The new release of TrueNAS is evaluated to determine further feature development, bug fixes, or security vulnerability patches.
During this stage, security patches and software erratum are corrected, updated versions of existing branches are pushed, and feedback is solicited for future versions of the software.
{{< /tab >}}
{{< /tabs >}}

## SDLC Application

The TrueNAS SDLC applies to the latest two release branches.
As new releases are created for TrueNAS, the oldest TrueNAS release branch is dropped out of the SDLC and labeled as End of Life (EoL).
For example, TrueNAS/FreeNAS 11.3 and TrueNAS 12.0 were in active development under the SDLC in August 2020.
In early 2021, TrueNAS Core/Enterprise 12.0 and 13.0 branches were in active development under the SDLC.
These versions of the software are in active development and maintenance.
We encourage users to actively keep their software updated to an active development version to continue to receive security patches and other software improvements.

{{< include file="/content/_includes/SoftwareStatusPage.md" type="page" >}}

## TrueNAS Quality Lifecycle

TrueNAS releases follow a general adoption guideline for their lifetime.
Starting with the NIGHTLY builds, each stage of a major release incorporates more testing cycles and bug fixes that represent a maturation of the release.
With each version release stage, users are encouraged to install, upgrade, or otherwise begin using the major version, depending on the specific TrueNAS deployment and use case: