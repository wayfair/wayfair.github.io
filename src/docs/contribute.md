---
title: How To Contribute to Open Source
featured: ./images/featured/contribute.png
---

Collaborating effectively is one of the most important skills you’ll develop in open source. It is important whether you’re a casual or regular contributor. If you’re unsure how to get started, we recommend looking into the projects you already use, or want to use. The projects you’ll actively contribute to are the ones you’ll find yourself coming back to.

Like anyone new to the neighborhood, contributing to open source will require a little research to learn about what’s going on, and more acutely, whether the project is suitable for accepting contributions. This is especially important if you want some level of engagement with your work. Some notable clues here lay in how maintainers treat their community: Do maintainers respond helpfully to questions? Do they thank their contributors? Are people friendly in the issues, discussion forum, and chat (for example, IRC, Slack, Discord)? These behavioral indicators will give you a better idea of whether the project’s community will be receptive to your contribution.

When preparing to contribute, it’s worth digging into the repository in terms of commits (such as their frequency and recency) as well as its issues and pull requests. Don’t forget to make sure the project has a license, too! Before you contribute, assess the project for yourself with this handy list that we’ve compiled from [Open Source Guide](https://opensource.guide/how-to-contribute/#orienting-yourself-to-a-new-project):

### Looking at Issues

- How many open issues are there?
- Do maintainers respond quickly to issues when they are opened?
- Is there active discussion on the issues?
- Are the issues recent?
- Are issues getting closed? (On GitHub, click the "closed" tab on the Issues page to see closed issues.)

### Going through Pull Requests

- How many open pull requests are there?
- Do maintainers respond quickly to pull requests when they are opened?
- Is there active discussion on the pull requests?
- Are the pull requests recent?
- How recently were any pull requests merged? (On GitHub, click the "closed" tab on the Pull Requests page to see closed PRs.)

Finally, it’s worth remembering that contributions don’t always have to be code. Documentation, project management (for larger projects and communities), plus other non-code contributions are just as valuable to projects as code changes, and is a great way to get your foot in the door when you’re new around town.

## Submitting a Contribution

Once you’ve found a project to contribute to that you believe will be welcoming and receptive, it’s time to look at the fundamentals around how a contribution takes place. As mentioned, working with others is key, so effective communication is going to be your most frequently used tool.

Firstly, project communities and maintainers will be very appreciative if you’ve done your due diligence in terms of learning before you communicate an issue or ask a question. That isn’t to say that not knowing something is bad! However, asking a question that is already adequately answered in the README might not leave a great first impression as a new contributor. It’s worth investing time in reading their documentation, checking their issues (both open and closed), as well as having a general look around the World Wide Web to see if your question has been addressed. This indicates that you’re trying to learn, which is a major asset in terms of open source: All contributors are volunteering their time, as are the maintainers for the most part, so this pre-work shows that you respect the time that they’re giving by choosing to use it effectively to help and guide you.

Now that you’re ready to ask your question or submit your issue, there are a couple of things to keep in mind to make the experience positive and worthwhile on both sides:

- **Give context:** Errors should be explained, and new ideas should be characterized as to why they’d be useful to the project
- **Be concise:** Keeping your messaging short and crisp will be really appreciated, given maintainers likely have a lot of incoming requests. This also increases the chance that someone will help you
- **Keep communication public:** Open source projects are out in the open, so your communication should be, too. More people will benefit from the exchanges you have in public forums than from private messages to maintainers
- **Respect community decisions:** The vision and roadmap of a certain project might not match up perfectly with your own use case, which means they may not pursue your idea or approach – and that’s okay. You can try and look for a compromise, or work on your own fork of the project
- **Embrace our differences:** Open source is a truly global, asynchronous community, meaning it comprises a multitude of languages, cultures, and time zones. Summoning the Wayfair value of Respect Others is vital to open source participation, so remember to ask for clarification, be kind, and appreciate communication differences. You’ll feel a lot better for it

Your communication primer is now set – on to understanding the GitHub contribution workflow!

## Opening an Issue

[Open Source Guide](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) describes issues as similar to starting a conversation. Once you’ve browsed the requisite documentation and project resources to make sure your idea hasn’t already been proposed or discussed, you’ll want to take a quick look at the CONTRIBUTING file in the case of preferred issue templates the project may have.

Reasons to open an issue:

- You’d like to report an error that you can’t solve yourself
- You’d like to discuss a high-level topic for the project (for example, its roadmap)
- You’d like to propose a new feature

As we mentioned earlier in this guide, communication is going to be crucial. If you find an issue in a project that you’d like to take on, comment on the issue saying so. Similarly, if your circumstances change and you can no longer dedicate the time, let folks know this update via the issue as well. As a note, issues that were opened some time ago (known as being “stale”) could mean that it's being addressed elsewhere or somehow resolved, so leave a comment to solicit clarification.

## Opening a Pull Request

Similarly to issues, you’ll want to consider requisite documentation and resources before you open a pull request. This is especially important given that pull requests are how we get started on providing solutions in open source projects. Note that we mention “getting started” in terms of solutions: Pull requests don’t need to be representative of finished work. You can add “Work in Progress” in your subject line, for example, to indicate its status. Update this as you carry on with your work.

Why you would open a pull request:

- To submit modest fixes (for example, a typo, or a broken link)
- To start work on a contribution that was already requested, or that you’ve already discussed, in an issue
  - A notable exception in larger projects is seen in the example of Kubernetes, which requires a Kubernetes Enhancement Proposal (KEP) before major changes are made via pull request. You can read more about this on the [Kubernetes GitHub repository](https://github.com/kubernetes/enhancements/tree/master/keps)

The GitHub workflow for opening a pull request looks like this:

- Fork the repository wherever you’ll be working on it (hopefully using `wayfair-contribs` as noted below)
  - If you’re using an existing fork, [sync your fork](https://help.github.com/articles/syncing-a-fork/) to the original upstream repository either via the UI or the command line. This will pull in changes from upstream once, or can be done more often so that you stay up to date. Syncing means that when you submit your pull request, merge conflicts will be less likely
- [Create a branch](https://guides.github.com/introduction/flow/) for your edits
- Reference any relevant issues or supporting documentation in your pull request, with links recommended
- Include screenshots of the before and after if your changes include differences in HTML/CSS. Drag and drop the images into the body of your pull request
- Test your changes! Run your changes against any existing tests and create new ones when needed. Whether tests exist or not, make sure your changes don’t break the existing project
- Adhere to the project’s preferred style as much as possible. This could mean using indents, semi-colons, or comments differently than you would in your own work, but makes it easier for the maintainer to merge and the community to maintain in future

If you want to make a substantial contribution, meaning larger in size, we recommend that you open an issue to ask before beginning the work. You can also watch the project on GitHub for a while and get to know the community before contributing an effort that might not get accepted.

## Managing Contributor Expectations

There are multiple things that could happen once you’ve successfully submitted a pull request to your project of choice. The fun doesn’t end when you submit! The best case scenario is that your pull request is accepted without any further asks or refinements. That’ll be worth celebrating! See below for other things that can take place in lieu of having your contribution directly merged:

- **You don’t get a response:** Despite your best efforts in checking a project’s overall activity, unresponsiveness can still occur. It is perfectly fine to follow-up on your pull request after some time has passed, say a week or so, to politely nudge on thoughts or the status. We don’t recommend reaching out to any maintainer or community member privately to find a solution, as this will lead to fewer answers to your questions down the line. While it doesn’t feel great to go unanswered, there are plenty of projects out there that want your contribution and support. Sometimes circumstances out of our control can lead to things going unanswered and unresolved
- **Changes have been requested:** It’s incredibly common to have maintainers request changes to your original contribution, to either conform with their styling or guidance, or suggest a different approach to your code change. This means someone has taken the time to review your work, so you’ll want to be responsive in turn. If there’s something you don’t know, that’s okay! Write this down in your reply, along with whether circumstances have changed and you no longer have the bandwidth to work on your proposed changes
- **Your contribution isn’t accepted:** Sometimes contributions aren’t accepted, and we certainly hope you receive feedback as to why that’s so. If not, please ask maintainers and reviewers so you and the rest of the community can learn. Ultimately, you’ll need to respect that this is their decision, so please don’t argue or get hostile. You can always fork and work on your own version if you disagree

Regardless of the outcome, remember that respecting others within the community is paramount to making sure the open source ecosystem is functioning as intended. Wayfair hopes that its technologists feel inspired to keep contributing and collaborating in a truly asynchronous and global system that we rely on to power our business. So, keep those contributions coming!

## How Wayfair Contributes Back

A company as large as ours relies on a lot of open source software, thus, Wayfair is also a big advocate for contributing back upstream as much as possible. When adding net-new to any applications or services, we empower our technology teams to adopt open source solutions when feasible. Since it’s rare that our teams will find an exact, line-by-line match for their specific use case, being able to build upon something that gets us 70% of the way there and contributing it back to the project is extremely worthwhile.

A good example of this in action is our work with LinkedIn’s [Brooklin](https://github.com/wayfair-contribs/brooklin). Our Big Data and Messaging team relies on this software for streaming data between various heterogeneous source and destination systems, as opposed to having built a customized, bespoke tool. Our contributions take place through our [Wayfair Contribs](https://github.com/wayfair-contribs) organization, where we fork the projects we’re using and contributing back to. In this model, we add a Wayfairian’s personal GitHub account to the forked project, giving them the ability to submit PRs from themselves as an individual, all while being recognized as employed by Wayfair, who are enabling the open source contribution through this workflow.

We've created a way for Wayfair technologists to follow our recommended fork and pull workflows by building self-service tooling that can add GitHub accounts to our various organizations, as well as fork repositories we want to contribute to. If you're a member of Wayfair Technology and not already a member of our public GitHub.com organizations, follow the steps listed on our InfoHub internally, or via our GitHub Enterprise documentation, to request an invite. Once you've successfully joined `wayfair-contribs`, you'll be able to requests forks using an automated PR workflow on `ospo-automation`.

You’ll need your GitHub username, and the URL for the project you’d like to have forked. You should also ensure that the repository you're interested in contributing to is compliant with Wayfair's current list of allowed licenses. If you happen across a project you're eager to contribute to, but are unsure if it complies with our license policy, drop us a line in #open-source-forum on Slack (internal).

Once you’ve submitted the information above to complete your self-service request, our user management automation workflow will map your Wayfair credentials to your GitHub information, allowing us to maintain our security protocols while your personal account is being used. Once your fork has been created, you’ll want to push commits to the `wayfair-contribs` fork, then make a pull request back to the original repository to contribute your changes.

It will be up to you and your team to plan for the frequency of contributions and how that should look day-to-day in Wayfair land. This means managing upstream merges and how your team is dividing the work, alongside the communication expectations certain projects may have.

If you’ve read this far, hopefully you feel empowered to start contributing to open source! If you think this documentation could be a `good-first-issue`, feel free to open a pull request suggesting your changes, we’d love to hear from you.
