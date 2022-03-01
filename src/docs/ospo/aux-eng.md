---
title: "Wayfair's OSPO: Auxiliary Engineering"
featured: ../images/featured/ospo/aux-eng.png
---

Why open source? Using existing open source solutions allows your team to leverage the work of others and avoids having to reinvent the proverbial wheel, freeing your team to focus more immediately on your specific problem space, speeding up development. Building atop these existing solutions and contributing your work back upstream allows developers elsewhere to reap that same benefit.

Additionally, this contribution process opens your code up to scrutiny which, while potentially intimidating, can also prove to be a learning experience for those contributing. Regular contributions to the projects your team relies on the most -- contributions of code, but also of documentation, bug reports, feature requests -- can help influence the direction of said projects toward the features most important to your team, knowing the project has a partner upon whom it can rely.

Releasing your own work as open source can convey these same benefits to the wider development community, as well as potentially creating something of a virtuous cycle. Much as your team benefited from the work of others, contributing back when possible, so too can your project be used by third parties, who in turn will contribute their work and ideas back up to you. These contributions can surface defects that had previously gone unnoticed, introduce new functionality, drive wider adoption, and build community.

## Why Aux Eng

So why Auxiliary Engineering? For all of its benefits, becoming involved in open source can be daunting. It can be difficult to even know where to begin. [Auxiliary Engineering](https://www.aboutwayfair.com/tech-innovation/what-is-auxiliary-engineering) (Aux Eng) aims to help smooth that path through education and collaboration. We work with individuals and teams, introducing them to open source communities, encouraging them first to consider including open source solutions in their work, then contributing to the solutions they are using, and, ultimately, to release their own work back to the community. We are active participants in the process, from helping teams identify opportunities to introduce open source software, to advising them on best practices when interacting with open source communities, to helping them manage their own repositories, to building tooling to facilitate these interactions (see: Forker).

In the spirit of open source, we welcome -- and actively seek to incorporate -- feedback from our partner teams on where they found benefit and where there’s room for improvement. We do so to refine our tooling, documentation, how-to guides, and the like to make future engagements even more, well, engaging.

## How It Works

OSPO Aux Eng partners with engineering teams across the organization to assist them in adopting existing open source solutions, contribute back to their favorite open source projects, open source existing solutions they have created, or even build a new solution in the open from the outset. The form these partnerships take will vary depending on the scope of the ask; from short workshops to weeks-long technology embeds with partner teams.

When trying to decide on whether to engage with a team (or which team to engage with), a variety of factors are considered:

- How valuable will the project in question be to the broader community?
  - What gap does it fill?
  - Are there similar projects to which we could contribute instead of rolling our own?
- How much prior experience does the team have in contributing to open source?
- Is there a clear commitment to maintaining this project once it has been open sourced?

While the specific details of an engagement will vary from project to project, there exists a consistent high-level grouping of things we work with the host team to achieve:

- **Decouple:** Identify and remove references to internal/proprietary code, including dependencies on same. Replace these with appropriate abstractions.
- **Document:** Ensure documentation exists, is comprehensive, and is accessible to newcomers to the project.
- **Deliver:** Migrate the internal repository to GitHub. Ensure the newly open-sourced project contains an appropriate open source license, contributing guidelines, and a meaningful README.
- **Distribute:** Ensure distribution is built into the release process. Cutting a new release should automatically update distribution channels (eg. PyPi, npm, etc).

Having a project open sourced is only part of the goal. The new open source project is now the official home of the original service, library, or application; internal documentation needs to be updated to point to the open source documentation. Internal dependencies need to be updated to pull from the open source project. Eventually, the internal repository will need to be sunset. Perhaps more importantly is ensuring that access to, and interaction with, the project is consistent across users, whether within Wayfair or externally. This means helping the team effect internal changes to how features are requested, bugs reported, and future work discussed, steering away from Slack messages or emails and toward public GitHub issues.

Notably, we seek to leave teams mostly self-sufficient. We don’t want to be gatekeepers, and we want them to maintain ownership of, and control over, the projects they have created.

## Long-Term Goals

Ultimately, we’d like to work ourselves out of a job. We’d like to get to the point that both adopting open source solutions and contributing back to them are not concepts that need introduction and guidance, but rather have been accepted as standard operating procedure across the organization. Additionally, we’d love to see enough projects being open-sourced or built entirely in the open that any expertise Aux Eng would be able to offer would also be readily available across most teams.
