---
title: Maintaining a Project
featured: ./images/featured/maintaining-a-project.png
---

## Building a Process

You had a problem, you built a solution to the problem, and now you're sharing the resultant project with the world. People will use your project. People will love your project. People will want to contribute back to your project. That's great! Until it's not. How do you effectively maintain both your project and your motivation? Process.

You had a problem, you built a solution to that problem. That's your project. Before opening it up, you need to decide what your project is, what your project _isn't_, and the direction you want your project to take. Then you need to communicate that out to the world. Your project's `README` file is a great place to communicate this information, as that is the first thing people will see when viewing your project's repository. Before even getting to usage and code samples, be very clear about the scope of the solution your project aims to offer. In addition to the `README`, consider creating an open roadmap in order to effectively share with users and potential contributors the direction you have envisioned for this project.

Following from this, some ground rules must be laid around interacting with your project. First and foremost is establishing a code of conduct to which contributors -- including yourself and your team -- must adhere. Wayfair has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) for all of its open source projects. That should cover human interactions, but you'll also want some guidelines governing technical interactions. In addition to the rough guidelines provided through defining what the project is and isn't, you will likely want something a little more granular to help set expectations around submissions. Will you only merge pull requests that include tests? Say so. Will you only merge pull requests that document any functionality introduced? Say so. Are there expectations around response times, either for you, for contributors, or both? Say so. These granular details are a great fit for a `CONTRIBUTING.md` document. With these expectations laid out, ensure that you and your team also adhere to these guidelines! Do not merge pull requests that don't meet the standards you have laid out for others.

Finally, as much as possible, try to keep conversations in the open. If people reach out to you directly, gently redirect them to more open venues for these conversations. It creates transparency around the project, and may save you from having the same conversation multiple times with different people. Open source means more than merely source available.

## Building a Robot

Now that you have taken the time to define a process around contributions to your project, you likely find yourself both with more consistent contributions and, let's face it, more work for yourself. But wait! You don't need to do it all on your own, and you certainly don't need to do it all by hand. Bring in the robots!

We have already mentioned the possibility of requiring automated tests in any pull request that adds or modifies code. _Automated_ tests. Let a [continuous integration](https://www.martinfowler.com/articles/continuousIntegration.html) system such as [GitHub Actions](https://docs.github.com/en/actions) handle the running of these tests. Better still, these systems can be configured to prevent pull requests from being merged if tests fail.

Of course, you can automate away a whole lot more than the running of tests. If it's tedious or toilsome, look into automated solutions. For example, you can leverage automation to [automatically close stale issues and pull requests](https://github.com/marketplace/stale), let [renovate](https://www.mend.io/free-developer-tools/renovate/) do the work of keeping your dependencies up to date, automate the [release of semantically versioned artifacts](https://github.com/semantic-release/semantic-release), and [a whole lot more](https://posthog.com/blog/automating-a-software-company-with-github-actions).

It doesn't all need to be entirely automated, either. Simple things like creating [issue templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) and [pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) for your repository can go a long way toward reducing additional work by providing checklists or other reminders to your contributors about what constitutes a "complete" issue or pull request. Wayfair has some examples of both in its [OSS Template](https://github.com/wayfair-incubator/oss-template).

## Building a Presence

You had a problem, you built a solution, now you're sharing that solution. How do you get people to know about it?

Definitely invest some time in actively telling people about it. Tweet about it. Blog about it, including targeting larger platforms (eg. Medium, dev.to). Share the blog with relevant communities; Hacker News, lobsters, and Reddit are all good options. Start with an explanation of the problem or set of problems your project solves. Including some working code examples is good. Having a small demo project that readers can download and tinker with is better. These are all reasonable starting points, but don't forget to stick around! People are likely to have questions, and making yourself available to provide thoughtful responses to these questions is a great way to start the slow work of building up a community.

Speaking of community, identify relevant open source communities and involve yourself in these communities. Answer questions, help others with their contributions, contribute to projects in these communities. Build a reputation as a knowledgeable, helpful member of (and contributor to!) the community. Over time, this will lead to encountering people facing the very problem your project solves. These are opportunities to promote your project less as promotion for its own sake, and more as a direct solution to a real problem.

Don't ignore offline communities, either. Local meetups can be a great way to talk about your project with a captive audience. This can be very informal banter among individuals, but meetups often also provide a suitable venue for giving presentations. This allows for demos of your project in action, and allows people to ask questions in real time. Once you have some practice with speaking in public, consider submitting talks introducing your project to relevant conferences.

## Saying No

Having taken the time to outline a vision for your project, having made clear what this project does and what it doesn't do, will make it easier to turn down feature requests, close issues, and decline pull requests that don't align with the project's stated goals. If they're not stated, that's obviously going to be harder.

When you ultimately need to turn down a contribution, a few suggestions:

- Don't let it linger. Saying no is hard, but waiting won't make it easier.
- Thank people for their work. They likely worked hard on their contribution, and that's worthy of recognition.
- Explain why it isn't a good fit for your project. Point to any documentation you have that will reinforce this.
- Close the issue or pull request.

This further illustrates the importance of a clear `CONTRIBUTING.md` document, as well as issue and pull request templates. They set out expectations for both parties, making it easier to decline contributions that don't meet these expectations, but also potentially preventing someone from spending hours working on something that ultimately won't be accepted.

Often times, open source contributions are done in addition to one's "normal" job. This is very likely true even if contributing to and/or maintaining open source projects _is_ your job. Such is the nature of passion projects. Do bear in mind that burnout is a real problem in this industry, and that sometimes you may need to walk away from your project for a time. That's OK. Remember, open source contributions are meant to bring a sense of satisfaction, not wear you down. People take time off from work all the time; there's no reason your open source project should be different.

That said, if you find yourself in a situation in which you need to step away for a time, consider whether there is someone, or multiple people, to whom your responsibilities can be delegated in your absence. Whether you have delegated or not, be sure to communicate to your community that you will be taking some time off.

Sometimes you need to walk away for good. Leverage your community to attempt to find someone to take over ownership of the project. Alternately, if there exists an active fork, consider linking to that fork from your project.
