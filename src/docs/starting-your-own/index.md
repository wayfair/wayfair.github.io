---
title: "Starting Your Own Project"
---

At Wayfair, we’re incredibly motivated to participate in open source as much as possible, which also includes starting our own projects. These stem anywhere from internal tools that have experienced successful usage as closed-source, now deemed ready for the outside world, to software that we purposely create and iterate on in the open, such as [Tremor](https://www.tremor.rs/).

What does a usual open source project look like? Who’s involved? What structures do open source projects follow? The listed roles are important to know as you make the decision to start your own project:

- **Author:** The person/s or organization that created the project (Wayfair and your team)
- **Maintainers:** Contributors who are responsible for driving the vision and managing the organizational aspects of the project (They may also be authors of the project)
- **Contributors:** Everyone who has contributed something back to the project, which includes code, documentation, and project management elements of contribution
- **Community Members:** People who use the project. They might be active in conversations or express their opinion on the project’s direction. They’re also represented by different repositories dependent on your project

Launching a project indicates that you’re ready to get feedback on your work and have external contributors take part in the project’s growth. There’s no “perfect” time to make a package, library, or project open source. However, there are some important prerequisite decisions and documentation to square away before committing your project to the open source ecosystem. We’ve referenced [Open Source Guide](https://opensource.guide/starting-a-project/#launching-your-own-open-source-project) to make sure we’re sharing the most up-to-date requirements.

All projects must contain the following pieces of documentation:

- **Open source license:** Required for all projects, or your work is not considered open source
- **README:** The first document that welcomes new contributors to your project, containing all they need to know about why your project is useful and how to get started
- **Contributing guidelines:** The instructions maintainers set for those wanting to contribute to a project, and how to go about that. Contributing guidelines also signal that you’re open and excited to welcome contributions
- **Code of Conduct:** This document is foundational for setting the ground rules around behavior throughout the project and its parallel resources or community channels

As the project’s maintainers, you and your team need these components to help communicate expectations, manage contributions, and protect everyone’s legal rights (including yours and those of Wayfair). They’ll ensure everyone interacting with your project is able to do so in a positive way.

Putting these files in your project's root directory with the recommended filenames will help GitHub recognize and automatically surface them to your readers. The Open Source Program Office (OSPO) team has created a [handy repository template](https://github.com/wayfair-incubator/oss-template) for all of Wayfair’s starting documentation needs, outside of the specific license that you wish to set.

### Choosing a License

An open source license guarantees that others can use, copy, modify, and contribute back to your project without legal repercussions. It also protects your work from being used in ways you may not expect. You must include a license when you launch an open source project, and can do so upon creation of your target repository. While it might sound intimidating, Wayfair has already pre-approved a number of licenses you can add to your project, which takes only a minute to copy and paste.

Licenses are a cultural signifier of a given space. Given the primary users and ecosystem you’re hoping to address, your choice of license will dictate whether your project will be readily accepted, on top of accounting for the permissiveness of the license overall with Wayfair’s own legal needs.

Permissiveness of a license is a function of an organization's preference around the distribution of its source code. So, another way to think about licensing is practicality: The most permissive license makes it the most likely to be usable by a wide variety of users. With this being the case, our licensing choices are framed around several use cases, with the creation of open source software the most relevant in this context.

Our current roster for licenses available for use by Wayfair and its employees:

- [MIT License](https://opensource.org/licenses/MIT)
- Berkeley Software Distribution (BSD), [3-clause](https://opensource.org/licenses/BSD-3-Clause), [2-clause](https://opensource.org/licenses/BSD-2-Clause), and [0-clause](https://opensource.org/licenses/0BSD) variants
- Apache License, [1.0](https://www.apache.org/licenses/LICENSE-1.0), [1.1](https://www.apache.org/licenses/LICENSE-1.1), and [2.0](https://www.apache.org/licenses/LICENSE-2.0) variants
- [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

### What Makes a Good README?

Firstly, if you’re not considering using our [documentation template repository](https://github.com/wayfair-incubator/oss-template) to generate a great README, we would highly recommend it! However, it's worth going into what will make your README more engaging and educational for users, and how you can facilitate adoption of your project through a well-written README.

You’ll want to use your README to communicate what your project does, why your project is useful, and how the community can start using it. It’s also a great place to call out where new users can go to get help; which is a handy way to advertise any parallel resources or community channels, if they exist. If your project is not yet ready for production, write that down. While many maintainers forgo a README when their project is not yet complete, it’s worth being transparent about this should any would-be contributors find their way to your space on the Internet. When you include a README file in the root directory, GitHub will automatically display it on the repository homepage.

Specific development instructions are also incredibly important to provide to contributors, given the likelihood that they’ll need to install extra dependencies or run additional commands in order to create a proper developer environment. You’ll want to cross-reference these instructions in your CONTRIBUTING file, which we expand on below.

While not custom for all READMEs, linking to future planning or roadmaps for your project is another excellent way to heighten engagement with your work and champion transparency across future releases. These plans or roadmaps could take many forms, such as a presentation, back brief, or OKR spreadsheet. You can also utilize the [GitHub Projects feature](https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) for this work. Make sure you manage the permissions of whatever you’re linking to so that your information is protected.

### Facilitating Contributions

Your CONTRIBUTING file is going to be the next place users look to in your project if they’re interested in getting involved and helping out. Given that we practice an upstream-first approach when it comes to the choice of using or creating open source software at Wayfair, your project should also count on others wanting to pay it forward.

[Open Source Guide](https://opensource.guide/starting-a-project/#writing-your-contributing-guidelines) states that using a warm, friendly tone and offering specific suggestions for contributions (such as writing documentation, or making a website) can go a long way in making newcomers feel welcomed and excited to participate. We couldn’t agree more – thanking would-be contributors for their interest and giving them approachable ways to contribute is vital to setting clear, understandable contributing guidelines.

You’ll want to list several avenues for contributing, such as:

- How to file a bug (and the requisite issue/PR templates to use)
- The types of contributions you’re looking for
- Labeling issues and PRs as `help-wanted` or `good-first-issue` so they’re easy to find, and linking to these label filters from the CONTRIBUTING file
- How to suggest a new feature
- How to contact you and other maintainers of the project

In the earliest stages of your project, your CONTRIBUTING file can be short. You should always explain how to report bugs or file issues, and any technical requirements (like tests) to make a contribution. As we referenced in the README portion of this documentation, you should also explicitly outline development instructions that are required to make contributing work.

Be sure to link to your CONTRIBUTING file from your README, so that more people see it and don’t need to navigate through your root directory. If you place the CONTRIBUTING file in your project’s repository, GitHub will automatically link to your file when a contributor creates an issue or opens a pull request.

### Setting a Code of Conduct

When creating a project, you should prepare for how the future community around your project is expected to behave. Codes of Conduct are great ways to set the tone around how to be respectful, as well as who these expectations apply to, when they apply, and what to do if a violation occurs.

At Wayfair, we use the [Contributor Covenant](https://www.contributor-covenant.org/) as our standard Code of Conduct for all new projects. This has been cleared with several internal teams (Corporate Communications, Legal) and doesn’t need prior approval to apply. It is used by over [40,000 projects](https://www.contributor-covenant.org/adopters), most notably Kubernetes, Rails, and Swift.

The Contributor Covenant is one of the many default documents contained in our [OSS documentation template](https://github.com/wayfair-incubator/oss-template) for new projects at Wayfair. If you’re choosing not to use this, please paste the text directly into a CODE_OF_CONDUCT file in your repository. Keep the file in your project’s root directory so it’s easy to find, and link to it from your README.

As always, if you’re having trouble interpreting any of this guidance, you’d like to report an edit, or you just want to talk, our door is open. Feel free to leave an issue on this repository or contact us by email: opensource@wayfair.com
