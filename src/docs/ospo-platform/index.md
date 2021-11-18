---
title: "Wayfair's OSPO: Platform"
featured: ./featured.png
---

Within Wayfair's Open Source Program Office, we have three main pillars that drive the team. We provide a platform of solutions with processes, tools, and support. We provide a team that combs through the organization, finding projects that may be ripe for open-sourcing. We also maintain and publicize our open source projects.

This article will focus on the first of these three responsibilities. Our Open Source Platform aims to create a solid foundation upon which engineers can easily access, learn about, engage with, and contribute to open source.

## Background

As engineers began engaging with our OSPO through Aux Eng, Dev Advocacy, and other outreach efforts, we quickly arrived at an inflection point in the scalability of our current resources, procedures, and tribal knowledge around the **what** and the **how** of doing open source. Within Wayfair, the OSPO team rolls up to a Development Platforms organization which strives to increase developer productivity, pave smooth onboarding paths, and reduce [toil](https://sre.google/workbook/eliminating-toil/) in day-to-day engineering processes. While this organization was originally built in service of engineers working primarily with closed-source software, we strongly believe that the same benefits of platform work apply to any company wishing to adopt open source at scale.

By investing in an Open Source Platform, we can benefit both the OSPO and the engineering communities at Wayfair, and beyond, via the creation of meaningful developer productivity integrations, toil-reducing automation, and engaging content _(like this website, hopefully!)_ which demystifies the world of open source.

## Platform

Initially, our platform work involved surveying the current processes to get involved with open source, and measuring the toil of any manual steps. This approach helped temper the desire to “automate for the sake of automation,” instead only prioritizing enhancements that will meaningfully improve the current experience or lead to a significant reduction in toil.

Beyond automated tools and workflows, we recognized an opportunity to provide clearer guidance on how to actually _engage_ with open source. Given that some Wayfair engineers are completely new to open source, while others may be seasoned contributors or project maintainers, a one-size-fits-all approach was unlikely to scale well.

Instead, we’ve chosen to focus on curating materials for different audiences who are at varying stages of their open source journey, using **wayfair.github.io** as our home base for the majority of this content. As we continue to build out the site, we’ll aim to incorporate different learning styles by offering both pragmatic technical documentation and "snack-able bites" expressed through interactive walkthroughs and other engaging media.

### Partnerships

By partnering directly with Auxiliary Engineering, we’ve tightened the feedback loop between the OSPO and the teams who engage with us by gaining direct insight into the real-world usability and intuitiveness of the tools, guides, and templates we provide.

We also regularly solicit feedback from Wayfair engineers participating in open source projects with minimal guidance from the OSPO, to ensure the platform is not overly biased towards Auxiliary Engineering projects.

Lastly, we leverage our Developer Advocacy arm for showcasing our publicly available platform offerings, in turn creating a mechanism for receiving diverse input from the broader open source community.

## Examples

As a platform, we’re continuously looking for opportunities to refine and improve our current processes, workflows, and resources. Of course, as a relatively new and small team, there are upper bounds to the amount of platform work we can meaningfully prioritize at once, while balancing our obligations in various Auxiliary Engineering and Developer Advocacy engagements.

The good news? We’ve already made some cool stuff that we’re pretty proud of, and it’s begun paying real dividends in toil reduction and ease-of-onboarding to open source for the first (or second, or third) time. As an added bonus, by [dogfooding](https://edume.com/blog/what-is-dogfooding) our own OSPO platform, we can experience the pain and tedium of existing processes, collect data to quantify their relative bad-ness or urgency, and make iterative improvements.

### Templates

In discussing some of the minimum criteria a typical open source project requires when starting out (eg. license, code of conduct, `README`), we realized that much of this project structure could be turned into a generic [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) that could apply to many common use cases. The culmination of those template efforts has yielded our first project template: [**oss-template**](https://github.com/wayfair-incubator/oss-template) 🎉

Since its release, we’ve leveraged this template numerous times for quickly scaffolding new projects, and best of all, it’s designed so that _anyone_ in the broader community can use it to jump start their project. Beyond the obvious time-saving benefits, providing an open source template also allows our team to educate on and enforce basic standards for new and old projects alike.

### Forks

As engineers began requesting [repository forks](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to make upstream contributions to open source projects that Wayfair already uses internally, we quickly realized a bottleneck was forming. While creating a single fork isn’t particularly taxing, as an OSPO, we also needed to perform several manual checks: inspecting the repository to see which license was being used, comparing that against the list of licenses Wayfair currently allows, checking whether the requesting engineer’s GitHub account was already a member of our [**wayfair-contribs**](https://github.com/wayfair-contribs) organization, and if not, sending them an invite.

Rather than continue this manual slog, we decided to automate the workflow, and design the tooling in such a way that _other_ OSPOs can potentially benefit from it. This work culminated in [**Forker**](https://github.com/marketplace/actions/github-forker), a [GitHub Action](https://github.com/features/actions) powered by [Typescript](https://github.com/actions/typescript-action) and [Octokit.js](https://github.com/octokit/octokit.js). Not only did developing Forker drastically reduce the number of manual steps required to complete forking requests, it also encouraged us to engage more directly with the [GitHub Marketplace](https://github.com/marketplace), as well as provide a practical example to other OSPOs interested in automating their open source workflows.

## Future

As anyone who’s familiar with platform work may know, we’re constantly striving to make both incremental, short-term improvements as well as strategic, longer-term changes that will jointly benefit the OSPO, Wayfair, and the open source community. 

We’ve already planned several enhancements to our [**oss-template**](https://github.com/wayfair-incubator/oss-template), and are actively scoping the work required to create a fully self-serviceable pipeline for GitHub organizational requests by leveraging [**Forker**](https://github.com/marketplace/actions/github-forker) and other automated workflows. To help manage security vulnerabilities and gauge overall "project health" across our many organizations and repositories, we’ll be investigating the programmatic use of tools like [Dependabot](https://dependabot.com/) and community management software developed by [CHAOSS](https://chaoss.community/).

Lastly, we’ll continue to engage with our open source stakeholders, both inside and outside of Wayfair, actively collecting feedback and use cases that drive us to prioritize additional platform work. In other words: our work here is never really done! 😅

## Feedback

We’re always open to feedback on suggested content, improvements to current offerings, and more generally, anything pertaining to our open source guides and platform tools that you didn’t find intuitive, or think we could be doing better. Feel free to leave an issue on this repository or contact us by email: opensource@wayfair.com
