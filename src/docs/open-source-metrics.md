---
title: "Open Source Metrics"
featured: ./images/featured/open-source-metrics.png
---

One of the most difficult questions to answer when we talk about open source is how we can track success. "Success" in an open source project is not a universal understanding. Launching a project, publicly available on GitHub, might be success. Having that project be downloaded multiple hundreds of thousands of times is a success.

Instead of measuring specifically for "success" -- we use these indicators to learn about our projects, their community, adoption, and what we might be able to do to improve. We'll use sources and ideas mainly from [opensource.guide](https://opensource.guide/metrics/) for this page, and have some [blog posts](https://opensource.com/business/14/10/head-of-open-source-facebook-oscon) and other sources we will include as we learn more about measuring and maintaining our OSS.

## Discovery

GitHub provides [insights](https://help.github.com/articles/about-repository-graphs/#traffic) to project traffic, including total page views, unique visitors, referring sites, and popular content. If you'd like to track these over time, GitHub provides a reasonable visualization. You could also track how discoverable your project is. Google PageRank, for example, may give a better idea of how your project's website is progressing. An important thing to keep in mind: [contributors are not the whole story](https://opensource.com/business/16/6/pirate-metrics) when it comes to how "discoverable" or "successful" your project may be.

## Retention

If you have a discoverable project, have you thought about contributions and retention of contributors? Consider checking for **Total contributor count**, **number of commits per contributor**, **first time, casual, and repeat contributors**, **number of open issues and pull requests**, **number of opened issues and opened pull requests**, and **types of contributions**.

These metrics together, and available on GitHub with an API call or looking at the repository site, give an idea:

- What kind of contributors do I have?
- How much do contributors normally put in?
- How big is the backlog of work for the project?

These questions could indicate what level of effort a maintainer should put in for maintaining the community; instead of only for the code they wish to contribute. It also allows us to stand against having a project everyone uses, without enough folks to maintain it.

## Usage

Many package managers these days [keep track](https://RubyGems.org) of their [own metrics](https://npmjs.com) for how many "downloads" (differs across managers) a given project may have. Consider using [tools to aggregate them](https://libraries.io), if your goal is to track "usage" by how many downloads a project has, and you're using an industry standard package manager.

Otherwise, you may use GitHub's analytics to see how much usage a given project attracts over a specified period. Consider the implications of your graphs. For example, conference talks are more likely to have folks play around with your project (more discoveries turn into downloads), whereas being featured on a popular news site or social media outlet will likely grant more window-shoppers.

This work is not as simple as "do this thing and understand how people use the project" -- since a project's maintainers have unique strategies for garnering support. When you've advertised the project, be sure to factor your effort into conversion rates and usage metrics.

## Maintainer Activity

Maintainers of a project are usually the last touch point before any contribution is integrated. If a contributor can't depend on maintainers to review and accept, or reject changes, they may become discouraged and decide against contributing again.

Consider how long it may take to **close open issues**, **how many closures are from pull requests**, **how long stale issues are open**, and **the average time to merge a pull request**. These should give some indication for how responsive a maintaining team is of a given project. Your own thresholds may vary depending on the project and your availability.

## All The Metrics

Here's all the metrics discussed above, organized by category:

### Discovery

- Total page views
- Unique visitors
- Referring sites
- Popular content

### Retention

- Conversion rate of people who find your project / contribute to it
- Total contributor count
- Number of commits per contributor
- First time, casual, and repeat contributors
- Number of open issues and pull requests
- Number of opened issues and opened pull requests
- Types of contributions

### Usage

- Downloads of your compiled / built project
- Downloads / clones of source code

### Maintainer Activity

- Time to close issues
- Issues closed by pull request
- How long stale issues stay open
- Average time to merge a pull request

### _Bonus:_ Facebook's [Important Metrics](https://opensource.com/business/14/10/head-of-open-source-facebook-oscon)

- Average number of followers
- Number of forks per repository
- Average pull request age
- Average issue age
- Number of external commits
