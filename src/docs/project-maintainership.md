# Guidelines for Maintenance and Deprecation of GitHub Projects

This document is a transcription of an RFC we've accepted at Wayfair regarding the states of maintainership for our open source projects.

## Table of Contents

- [Summary](#summary)
- [Problem](#problem)
- [Proposal](#proposal)
  - [States of a Project](#states-of-a-project)
    - [Maintained](#maintained)
    - [Preserving](#preserving)
    - [Incubating](#incubating)
    - [Shelved](#shelved)
    - [Undermaintained](#undermaintained)
    - [Archived](#archived)

## Summary

A set of definitions, guidelines, and guardrails for maintaining our GitHub.com open source Projects, namely regarding maintainership and deprecation.
This proposal intentionally defines these terms so we may better categorize our open source repository offering, and understand how to improve it.

## Problem

Standards and practices for decommissioning and/or maintaining Wayfair's open source GitHub projects remain undefined or unrefined. OSPO (The Open Source Program Office) cannot enforce or set standards for maintenance and deprecation of repos without stating those standards. We cannot improve without having a shared understanding brought through codifying our standards.

## Proposal

This proposal will refer to **states of a project** as defined below.
Hopefully, names provided are intuitive enough that the proposal is legible without having read all of them in detail. The definitions are important to ensure consistency in categorization of our projects.

We propose that the majority of our projects should be well-**maintained**, or **preserving**.
In these cases, the repositories are secure in their state and are receiving updates when necessary to ensure their integrity.
We target _80%_ **maintained** or **preserving** projects. As of this writing (April 2022) 40% of our projects are suitably maintained or preserving.

We are leaving 20% for projects as "exceptional cases" where:

1. A language the project is written in is not a supported Wayfair language. _NOTE: Supported languages are subject to change_
2. A project's maintainer(s) need time to evaluate their ability to maintain the project.
3. OSPO will need to search for teams who want to own any **shelved** projects.
4. This proposal's parameters for "well maintained" or "preserving" may be close to a reasonable expectation, but not perfect.

Note that in future proposals, we may well adjust our parameters, or expectations for maintained projects.

OSPO will, through platform and advocacy efforts including Open Source Maintainer Organizations, metrics tracking, active coaching of maintainers, and others yet discovered, improve our ratio of maintained / unmaintained projects.

### States of a Project

This proposal will define a set of project states we may encounter. Projects will always fit at least one state, and can move between them as the criteria for other states is met through action or inaction of project contributors and maintainers.
OSPO will provide this proposal as a page on our documentation site, [wayfair.github.io](https://wayfair.github.io), to better publicize and reference project state.

We will use a **definition / criteria** section for each state, and a **possible movement** section to define how it may move out of that state, as well as what state said actions move the project to.

#### Maintained

##### Definition / Criteria

Maintained projects have all the attention they need to be presented as a usable and complete software package with at least one stable release.
Continuing work on a project does not disqualify its maintained status -- we encourage continuous work on projects as maintainers find necessary.
Some defining characteristic of a well-maintained project:

- Community guidelines, READMEs, and other [documents important to our OSS ecosystem](https://github.com/wayfair-incubator/oss-template) are present.
- Maintainers respond in a reasonable time frame (bonus if this time frame is defined) to pull requests, issues, security incidents, and community reports.
- There is a plan (however well-defined) to create new features or improvements on the project
- Bonus points: maintainers regularly provide presentations / talk about the project at community events

Maintained projects are what we aspire projects to be whenever an open-source repository is created by Wayfairians at some point in the project's lifecycle.

##### Possible Movement

Maintainers may eventually decide a project has accomplished its goal. In this case, we may consider the project **preserving**.
If maintainers state their intent to abandon the project, the project will likely be **archived**. At minimum it will be **shelved**.
In some rare cases, incubating projects are released too soon. In this case, we may transition the project back to **incubating**.
Should the maintainers decide, we may **archive** the project directly.

#### Preserving

##### Definition / Criteria

Some projects will be feature-complete, have accomplished the goal of the project, but have very few updates or direction from that point.
Maintainers may want to keep the project writeable to keep up with security updates.
The project may be used for production purposes.
The project may have dynamic downstream dependents, so updates would only be needed once in a while.

For many possible reasons, a project with very little active maintenance also has very little activity. Since it's well maintained, just quiet, we consider this project to be "preserving".

##### Possible Movement

Maintainers may find significantly more work to accomplish on a preserving project. This would make the project **maintained**, as it receives regular updates and fixes.
Maintainers may decide a project is not needed anymore and/or does not need updates for a significant period (or at all). At this point, the project will be **archived**.
Maintainers may miss critical updates, issues, or pull requests, for significant periods of time. This would cause the project to be **shelved**.

#### Incubating

##### Definition / Criteria

Incubating projects are an idea we've borrowed from how some [large open source](https://github.com/cncf/toc/blob/main/process/graduation_criteria.md) groups.
If a project is not ready to be shown to the public, or is not quite what maintainers would consider to be a "finished project", we consider it to be incubating.
See [the incubator organization](https://github.com/wayfair-incubator) for examples of projects receiving maintenance at the level of a maintained project, but aren't ready by the standards of maintainers, or, in rare cases, the OSPO.
OSPO will generally not gate keep projects that fit basic criteria for an open source project.

##### Possible Movement

So long as a healthy set of maintainers, Code of Conduct, contributing guidelines, and [all other documents from our OSS Template](https://github.com/wayfair-incubator/oss-template) are represented in the project, we will happily transition projects to be **maintained**.
If a project does not receive sufficient attention for a long time, it may be considered **shelved**.
If the project has never received any code commits and is not given any attention for a long time, we may remove the repository altogether. This would be done with the knowledge of would-be maintainers to confirm.

#### Undermaintained

##### Definition / Criteria

Undermaintained projects are projects that were either never fully maintained, or have started to be neglected by the maintainers. For example:

- Missing community guidelines, READMEs, or other [documents important to our OSS ecosystem](https://github.com/wayfair-incubator/oss-template)
- Maintainers may not respond to issues or pull requests within a reasonable time frame, or at all
- Maintainers may not respond to security incidents within a reasonable time frame, or at all
- There is a plan to improve the project, but no progress is made in a reasonable time frame, or at all
- There are known issues for the project, but no plan to fix those issues from the maintainers

It may be useful to think of an undermaintained project as being "on-track" to being a shelved project. We expect in this state maintainers may not be able to make an effort to match a stream of work coming in.

##### Possible Movement

If maintainers acknowledge (implicitly or explicitly) their inability to maintain the project once notified of its "undermaintained" status, the project becomes **shelved**.
If maintainers expand, focus more on the project, and/or patch holes in documentation and project setup, the project becomes **maintained**.
In some rare cases, incubating projects are released too soon. In this case, we may transition the project back to **incubating**.
Should the maintainers decide, we may **archive** the project directly.

#### Shelved

##### Definition / Criteria

Shelved projects are projects who have had active maintenance in the past, but for some reason are no longer maintained at all.
Note that projects do not have to be completed and put into the [Wayfair GitHub organization](https://github.com/wayfair) to be considered shelved. **Incubating** projects may also be shelved.
In the event that a project has been put into the [Wayfair GitHub organization](https://github.com/wayfair), To be considered shelved, instead of **preserving**, we would expect the aggregate of pull requests, issues, and/or security updates to have **no action** for at least a month.

##### Possible Movement

Shelved projects have many possible directions.

Shelved projects might be noticed and adopted by an interested developer or team.
The project would transition to whatever state it was _before_ becoming shelved. For example, an **incubating** project, shelved, will be incubating when a maintainer arrives. We expect the same for preserving, maintained, and undermaintained.

The OSPO maintains discretion on archiving shelved projects, following review of its necessity / attempts to source a maintainer within Wayfair. Should the OSPO find no maintainer, the project may become **archived**.

#### Archived

#### Definition / Criteria

An archived project is a project that has been made read-only on GitHub through the "archive" feature on its repository.
We may archive projects that do not have many or any downstream dependent projects, are not used for production cases within Wayfair, or have not been updated for a long period.
While we will archive by request of maintainers of any Wayfair project, we would expect **shelved** projects are strong candidates for archival.

As a read-only repository, we will not provide additional releases, pull requests, issues, and importantly, **security updates**.
A project being archived is a signal that we should not consider the project as under any active attention or maintenance.

##### Possible Movement

Ideally, all archived projects remain archived indefinitely. In extraordinary circumstances, these projects can be forked or unarchived by a conscientious developer.
The OSPO will gladly unarchive projects for parties that find something necessary to update, but we would generally prefer a new project or a fork be made -- so that we don't archive / unarchive ad nauseam.
This would move the project into a **maintained** or **incubating** state exclusively.
We explicitly should not unarchive what we expect to be **preserving** projects, given that they are intentionally left alone to serve production use cases or serve some other important purpose.
