---
title: "Web UI Code Contributions"
description: "How to contribute code updates to the TrueNAS web interface."
weight: 7
tags:
- contributing
---

TrueNAS is an open-source project, and we welcome contributions from the community.
We license our code under the GPLv3 license.

This guide explains how to contribute code updates to the TrueNAS web interface.

## How to Contribute

Follow these steps to pick up a task, make your changes, and submit a PR.

### Select an Issue

We maintain a Jira [Help Wanted list](https://ixsystems.atlassian.net/issues/?filter=12107) with tasks that are good starting points.

- Choose an issue from the [Help Wanted list](https://ixsystems.atlassian.net/issues/?filter=12107).
- Assign it to yourself to prevent duplicate work.

You can assign yourself to any issue in the queue, even if a TrueNAS team member is already assigned.

{{< hint type=note >}}
If you discover a new bug in TrueNAS, please [create a Jira ticket](/contributing/issuereporting/jiraissuereporting) before attempting a fix.

If your proposed fix isn't on the Help Wanted list, communicate with the team on the Jira ticket before starting work.
You can ask for the issue to be added to the Help Wanted list, share your ideas, and confirm that the fix aligns with current plans.
This helps avoid working on code that's scheduled for replacement or significant changes.
{{< /hint >}}

### Update the Code

- Fork the repository.
- Set up your development environment using the [Setup Guide](https://github.com/truenas/webui/blob/master/docs/setup.md).
- Resolve the assigned issue.

#### Best Practices for Code Contributions

When working on a task from the Help Wanted list:

- Match the style of the surrounding code.
- Make the simplest correct change that resolves and validates the issue.
- Fix only one issue per Jira ticket. Avoid addressing multiple unrelated issues in a single PR, as that complicates reviews and increases the chances of rework.
- Test your fix.

{{< hint type=tip >}}
If a fix requires significant refactoring beyond the scope of the issue, it likely doesn't belong on the Help Wanted list—or may not be the right solution.
{{< /hint >}}

### Add Tests if Necessary

You can skip adding tests for small styling fixes.

For larger changes, add or update tests as needed.
Our CI (Continuous Integration) system enforces a minimum coverage requirement.

As a rule of thumb, cover all happy paths (expected successful outcomes) in the code you modify.

We don't suggest running all tests locally, as it takes too long.
Instead, use these alternatives:

- Run a specific test suite using your IDE or `yarn test <src/app/path to the test file>`.
- Run tests in folders with changes using `yarn test:changed`.

Refer to existing <file>.spec.ts</file> files in the repo for examples.

{{< hint type=note >}}
If you run into issues writing tests, open a PR without them.
The team can help.
{{< /hint >}}

### Open the PR

Our CI system checks code style automatically, but you can run the linter locally with `yarn lint` to catch issues earlier in the process.

Use this naming format for your branch and commit:

- Branch name: *NAS-\<issue number>*
  - Example: *NAS-12345*
- Commit message: *NAS-\<issue number>: \<description>*
  - Example: *NAS-12345: Fix issue with ...*

Push your changes to your fork, then open a PR against the TrueNAS repo.

### Review and Merge

After you open a PR, a UI team member reviews it.

Once merged, your changes appear in the next nightly build.

Thanks for contributing!

## Getting Contributor Credit

When your PR merges, you become eligible for a [TrueNAS community forum](https://forums.truenas.com) contributor badge and group membership.

To claim your badge:

1. Add `TrueNAS Forums Username: <name>` in your pull request description.
2. After the merge, message the forum moderators with a link to the PR.
3. They grant you contributor group membership.
