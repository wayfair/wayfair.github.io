---
title: The Legal Side of Open Source
featured: ./images/featured/legal-side.png
---

One very important aspect of open source software is how the law affects its use, distribution, and modification. As [Open Source Guide](https://opensource.guide/legal/#why-do-people-care-so-much-about-the-legal-side-of-open-source) clearly states, when you create something, such as writing, graphics, or code, that work is under exclusive copyright by default. That means the law assumes that as the author of your work, you have a say in what others can do with it.

That can be a little at odds with open source, since we expect other people to use and modify our work, and our intent is for it to be freely redistributed and continuously shared and iterated upon. However, because the legal default is still exclusive copyright, you need a license that explicitly states these permissions. If you don’t apply a licence, all of your contributors also become exclusive copyright holders of their work. That means nobody can use, copy, distribute, or modify their contributions – _and that “nobody” includes you_.

At Wayfair, we’ve worked alongside our Legal team to make sure you’re covered when it comes to applying open source licenses to your creative work. You can head straight over to [Starting Your Own Open Source Project](../starting-your-own/) to read more about what goes into making these choices, or read on below.

## What You Need to Protect Your Project (and Wayfair)

Open source licenses guarantee that others can use, copy, modify, and contribute back to your project without legal repercussions. It also protects your work from being used in ways you may not expect. Wayfair has already pre-approved a number of licenses you can add to your project, which takes only a minute to copy and paste.

Licenses are a cultural signifier of a given space. Given the primary users and ecosystem you’re hoping to address, your choice of license will dictate whether your project will be readily accepted, on top of accounting for the permissiveness of the license overall with Wayfair’s own legal needs. For example, a lot of folks who write and contribute to projects that use the [Python programming language](https://www.python.org/) often apply the [MIT License](https://opensource.org/licenses/MIT). It’s short, very easy to understand, and allows anyone to do anything so long as they keep a copy of the license, including your copyright notice. In contrast, the community around the [Rust programming language](https://www.rust-lang.org/) use and are well informed in the use of the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/). It’s worth doing a little research to see which license your project should use to attract the right community and audience. The OSPO team is always on hand to help out on the licensing front.

Our current roster for licenses available for use by Wayfair and its employees:

- [MIT License](https://opensource.org/licenses/MIT)
- Berkeley Software Distribution (BSD), [3-clause](https://opensource.org/licenses/BSD-3-Clause), [2-clause](https://opensource.org/licenses/BSD-2-Clause), and [0-clause](https://opensource.org/licenses/0BSD) variants
- Apache License, [1.0](https://www.apache.org/licenses/LICENSE-1.0), [1.1](https://www.apache.org/licenses/LICENSE-1.1), and [2.0](https://www.apache.org/licenses/LICENSE-2.0) variants
- [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

Our Legal team's comments on the 2-Clause BSD License (and thus, all licenses we can use at Wayfair) are worth noting:

> "Whenever Wayfair decides to re-commit, it should definitely do so by license which will provide Wayfair protection against claims made by a party who uses the contributed software under the license (a "Licensee") and also any demand by such Licensee to be indemnified by Wayfair from a claim made by a third party against it based on the Licensee's use of the contributed software. The 2-Clause BSD License as a template is fine to use and provides a degree of protection from claims of Licensees using the software."

As we’ve noted above, the Mozilla Public License 2.0 (MPL) is available under some circumstances for your work, given you’re able to work through the following questions with our Open Source Program Office (OSPO) team:

- Have you changed or modified the code being covered by the MPL? If not, your work should be cleared to adopt this license
- If changes were made to the material covered by the MPL, are these changes incorporated in any internal source code that won’t be publicly available? If not, you should be cleared to go, but check in with OSPO to close this feedback loop
- If modified MPL code is featured alongside proprietary source code, can these sources be stored in separate files? If so, note that the MPL material must be isolated and publicly accessible to folks outside of Wayfair to meet the criteria of this license. Chat with OSPO to learn more about what this entails
- Does the disclosure of the modified MPL source code expose intellectual property we would otherwise want to protect? If you’re unsure about whether this is the case, OSPO can support you

Please reach out to your friendly OSPO colleagues for guidance on whether your project or use-case fits the above criteria.

When you create a new project on GitHub, you are given the option to select a license. Including one of the licenses that Wayfair sanctions above will make your GitHub project open source. If you’re curious about other options for your own learning, check out [choosealicense.com](https://choosealicense.com/), even if it isn’t software.

## How and When to Involve our Legal Team

Our OSPO team works closely with Legal to coordinate and sync on our open source efforts. We have some policies in place regarding when they’re informed and how much they should be involved in our day-to-day open source activities. As with most companies, Wayfair has an employee intellectual property (IP) agreement that covers certain conditions around open source and the use of company resources to develop projects. We’ve been able to work on permissive terms that protects both Wayfair’s IP and gives credit to any individual working on open source software and their upstream contributions.

When you open source a new project at Wayfair, we ask that you send an email into our Legal team advising them so, with the following information included:

- Your name, the name of your manager (also CC’d on the email), and the names of anyone on your team who will be fellow maintainers and contributors
- The name of your project and a short description of its function
- The license that you’ve chosen to apply to the project

This message is intended to inform them of the upcoming project, as opposed to being something to ask permission about. Our Legal team needs to be in the loop for all new projects, so we’ve identified the above process as the most frictionless way to achieve alignment. We -- opensource@wayfair.com -- would also appreciate being included as CC to your message, so we know you’ve completed that step of the process.

If you have any questions about the above, we’d be happy to help. The OSPO should be your first point of contact for anything related to legal work with open source projects. Happy licensing!
