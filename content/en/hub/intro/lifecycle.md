---
title: "Software Development Life Cycle"
weight: 20
---

## TrueNAS Software Development Life Cycle
 
The TrueNAS (and FreeNAS) software development life cycle (SDLC) is the process for planning, creating, testing, deploying, and maintaining FreeNAS and TrueNAS releases.

In TrueNAS there are five stages to the SDLC: requirement analysis, design and development, testing and evaluation, documentation, and maintenance.

### Requirement Analysis

Determine the objectives, nature, and scope of future versions of the software.
This involves gathering feedback and interpreting customer needs and requirements, diagnosing existing problems, and weighing the pros and cons of potential solutions.
The end result is a list of recommended improvements to be integrated into future versions of TrueNAS.

### Design and Development

Required and planned changes are investigated in detail and development steps are determined.
Proposed alterations are reviewed by peers for completeness, correctness, and proper coding style.
TrueNAS developers then begin altering the software to include new features, resolve software bugs, or implement security improvements. 

### Testing and Evaluation

Code is integrated into the existing TrueNAS source tree, then built and tested by the Quality Engineering (QE) department.
QE verifies that all requirements and objectives are properly met and the updated software is reliable and fault-tolerant according to the determined requirements.
If issues are found, code is reworked to meet the development requirements.
Simultaneously, a security evaluation of the TrueNAS code is completed, with any discovered issues sent to the engineering team for resolution.

### Documentation

The Technical Documentation Department audits all development changes to the software and resolves any inconsistencies with the current software documentation.
This is to verify that end user documentation is as accurate as possible.
Any security notices, errata, or best practices are also drafted for inclusion on the [TrueNAS Security website]().

### Maintenance

The new release of TrueNAS is evaluated to determine further feature development, bug fixes, or security vulnerability patches.
During this stage, security patches and software erratum are corrected, updated versions of existing branches are pushed, and feedback is solicited for future versions of the software.

### SDLC Application

The TrueNAS SDLC applies to the latest two release branches.
As new releases are created for TrueNAS, the oldest TrueNAS release branch is dropped out of the SDLC and labeled as End of Life (EoL).
For example, TrueNAS/FreeNAS 11.3 and TrueNAS 12.0 was in active development under the SDLC in August 2020.
Currently, TrueNAS Core/Enterprise 12.0 and 12.1 branches are in active development under the SDLC. These versions of the software are in active development and maintenance.
Users are encouraged to actively keep their software updated to an active development version to continue to receive security patches and other software improvements.

## TrueNAS Quality Lifecycle

TrueNAS releases follow a general adoption guideline for their lifetime.
Starting with the NIGHTLY builds, each stage of a major release incorporates more testing cycles and bug fixes, representing a maturation of the release.
With each version release stage, users are encouraged to install, upgrade, or otherwise begin using the major version, depending on the specific TrueNAS deployment and use case:

<table class="blueTable">
	<thead>
		<tr>
			<th>Release Stage</th>
			<th>Completed QA Cycles</th>
			<th>Typical Use-case</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>NIGHTLY</td>
			<td>0</td>
			<td>Developers</td>
			<td>Incomplete</td>
		</tr>
		<tr>
			<td>ALPHA</td>
			<td>1</td>
			<td>Testers</td>
			<td>Not much field testing</td>
		</tr>
		<tr>
			<td>BETA</td>
			<td>2</td>
			<td>Enthusiasts</td>
			<td>Major Feature Complete, but expect some bugs</td>
		</tr>
		<tr>
			<td>RC</td>
			<td>3</td>
			<td>Home Users</td>
			<td>Suitable for non-critical deployments</td>
		</tr>
		<tr>
			<td>RELEASE</td>
			<td>4</td>
			<td>General Use</td>
			<td>Suitable for less complex deployments</td>
		</tr>
		<tr>
			<td>U1</td>
			<td>5</td>
			<td>Business Use</td>
			<td>Suitable for more complex deployments</td>
		</tr>
		<tr>
			<td>U2+</td>
			<td>6+</td>
			<td>Mission Critical</td>
			<td>Suitable for critical uptime deployments</td>
		</tr>
	</tbody>
</table>
